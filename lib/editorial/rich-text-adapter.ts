import type { components } from "./documents.generated";

export type RichTextDoc = components["schemas"]["EditorialRichText"];
export type RichTextIssue = { field: string; reason: string };
type JsonObject = Record<string, unknown>;
type Result = { ok: true; document: RichTextDoc } | { ok: false; issues: RichTextIssue[] };
const blocks = ["paragraph", "heading", "bulletList", "orderedList", "blockquote"];
const defaults: Record<string, unknown> = { target: "_blank", rel: "noopener noreferrer", class: null, title: null };

function safeHref(value: string) {
  if (value !== value.trim() || /[\u0000-\u0020\u007f\\]/u.test(value) || /%(?:0[0-9a-f]|1[0-9a-f]|7f|5c)/i.test(value)) return false;
  if (value.startsWith("/") && !value.startsWith("//") || value.startsWith("#")) return true;
  try { const url = new URL(value); return url.protocol === "https:" && Boolean(url.hostname) && !url.username && !url.password || ["mailto:", "tel:"].includes(url.protocol) && Boolean(url.pathname); } catch { return false; }
}
const object = (value: unknown): value is JsonObject => Boolean(value && typeof value === "object" && !Array.isArray(value));

/** Never mutates the editor JSON. Failed conversion leaves it available for explicit correction. */
export function toCanonical(value: unknown): Result {
  const issues: RichTextIssue[] = [];
  const fail = (field: string, reason: string): never => { issues.push({ field, reason }); throw new Error("rich_text_invalid"); };
  const keys = (value: JsonObject, allowed: string[], field: string) => { if (Object.keys(value).some(key => !allowed.includes(key))) fail(field, "unsupported_attribute_value"); };
  let nodes = 0;
  const convert = (input: unknown, field: string, depth: number, parent: string): JsonObject => {
    if (++nodes > 10000) fail(field, "rich_nodes_exceeded");
    if (depth > 8) fail(field, "rich_depth_exceeded");
    if (!object(input) || typeof input.type !== "string") fail(field, "invalid_shape");
    const node = input as JsonObject, type = node.type as string;
    const allowed = parent === "root" ? ["doc"] : ["paragraph", "heading"].includes(parent) ? ["text", "hardBreak"] : ["bulletList", "orderedList"].includes(parent) ? ["listItem"] : blocks;
    if (!allowed.includes(type)) fail(field, "unsupported_node");
    if (type === "text") {
      keys(node, ["type", "text", "marks"], field);
      if (typeof node.text !== "string" || !node.text.length || Array.from(node.text).length > 131072) fail(field + ".text", "invalid_shape");
      const output: JsonObject = { type, text: node.text };
      if (node.marks !== undefined) {
        if (!Array.isArray(node.marks) || node.marks.length > 3) fail(field + ".marks", "invalid_shape");
        const types = new Set<string>();
        output.marks = (node.marks as unknown[]).map((mark, index) => {
          const path = field + ".marks." + index;
          if (!object(mark) || typeof mark.type !== "string" || !["bold", "italic", "link"].includes(mark.type)) return fail(path, "unsupported_mark");
          if (types.has(mark.type)) fail(path, "duplicate_mark"); types.add(mark.type);
          keys(mark, mark.type === "link" ? ["type", "attrs"] : ["type"], path);
          if (mark.type !== "link") return { type: mark.type };
          if (!object(mark.attrs)) return fail(path, "invalid_shape");
          keys(mark.attrs, ["href", ...Object.keys(defaults)], path + ".attrs");
          for (const [key, expected] of Object.entries(defaults)) if (Object.hasOwn(mark.attrs, key) && mark.attrs[key] !== expected) fail(path + ".attrs." + key, "unsupported_attribute_value");
          if (typeof mark.attrs.href !== "string" || mark.attrs.href.length > 2048 || !safeHref(mark.attrs.href)) fail(path + ".attrs.href", "unsafe_link");
          return { type: "link", attrs: { href: mark.attrs.href } };
        });
      }
      return output;
    }
    if (type === "hardBreak") { keys(node, ["type"], field); return { type }; }
    keys(node, ["type", "content", ...(["heading", "orderedList"].includes(type) ? ["attrs"] : [])], field);
    const output: JsonObject = { type };
    if (type === "heading") {
      if (!object(node.attrs)) fail(field + ".attrs", "invalid_shape");
      const attrs = node.attrs as JsonObject; keys(attrs, ["level"], field + ".attrs");
      if (attrs.level !== 2 && attrs.level !== 3) fail(field + ".attrs.level", "unsupported_attribute_value");
      output.attrs = { level: attrs.level };
    }
    if (type === "orderedList" && node.attrs !== undefined) {
      if (!object(node.attrs)) fail(field + ".attrs", "unsupported_attribute_value");
      const attrs = node.attrs as JsonObject; keys(attrs, ["start", "type"], field + ".attrs");
      if (Object.hasOwn(attrs, "start") && attrs.start !== 1 || Object.hasOwn(attrs, "type") && attrs.type !== null) fail(field + ".attrs", "unsupported_attribute_value");
    }
    if (node.content !== undefined && !Array.isArray(node.content) || type === "doc" && !Array.isArray(node.content)) fail(field + ".content", "invalid_shape");
    const content = (node.content ?? []) as unknown[];
    if (["bulletList", "orderedList", "blockquote", "listItem"].includes(type) && !content.length) fail(field + ".content", "invalid_rich_grammar");
    if (type === "listItem" && (!object(content[0]) || content[0].type !== "paragraph")) fail(field + ".content", "invalid_rich_grammar");
    if (node.content !== undefined) output.content = content.map((child, index) => convert(child, field + ".content." + index, depth + 1, type));
    return output;
  };
  try {
    // Traverse with a depth bound first, so cycles cannot reach JSON.stringify or recurse indefinitely.
    const document = convert(value, "document", 1, "root") as RichTextDoc;
    if (new TextEncoder().encode(JSON.stringify(document)).byteLength > 131072) fail("document", "rich_text_too_large");
    return { ok: true, document };
  } catch { return { ok: false, issues: issues.length ? issues : [{ field: "document", reason: "invalid_shape" }] }; }
}

export function toEditor(document: RichTextDoc): JsonObject {
  const validated = toCanonical(document);
  if (!validated.ok) throw new Error("invalid_canonical_rich_text");
  const enrich = (input: unknown): unknown => {
    if (Array.isArray(input)) return input.map(enrich);
    if (!object(input)) return input;
    const output = Object.fromEntries(Object.entries(input).map(([key, value]) => [key, enrich(value)]));
    if (input.type === "orderedList") output.attrs = { start: 1, type: null };
    if (input.type === "link") output.attrs = { ...(input.attrs as JsonObject), ...defaults };
    return output;
  };
  return enrich(validated.document) as JsonObject;
}
