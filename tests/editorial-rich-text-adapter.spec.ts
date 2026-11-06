import { test, expect } from "@playwright/test";
import { richTextExamples } from "../lib/editorial/rich-text-examples.generated";
import { toCanonical, toEditor } from "../lib/editorial/rich-text-adapter";
import type { components } from "../lib/editorial/documents.generated";

for (const example of richTextExamples.accepted) test("canonical rich text round trip: " + example.name, () => {
  const original = structuredClone(example.editor);
  expect(toCanonical(original)).toEqual({ ok: true, document: example.canonical });
  expect(original).toEqual(example.editor);
  const canonical = example.canonical as unknown as components["schemas"]["EditorialRichText"];
  expect(toCanonical(toEditor(canonical))).toEqual({ ok: true, document: example.canonical });
});
for (const example of richTextExamples.rejected) test("preserves unsupported input for correction: " + example.name, () => {
  const original = structuredClone(example.editor), result = toCanonical(original);
  expect(result.ok).toBe(false); expect(original).toEqual(example.editor);
  if (!result.ok) expect(result.issues.some(issue => issue.reason === example.reason)).toBe(true);
});
test("refuses executable links, unknown attrs, duplicate marks and broken grammar", () => {
  const text = (marks?: unknown[]) => ({ type: "text", text: "Text", ...(marks ? { marks } : {}) });
  for (const node of [text([{ type: "link", attrs: { href: "javascript:alert(1)" } }]), text([{ type: "bold" }, { type: "bold" }]), { type: "paragraph", attrs: { style: "color:red" } }, { type: "bulletList", content: [{ type: "paragraph" }] }]) expect(toCanonical({ type: "doc", content: [{ type: "paragraph", content: [node] }] }).ok).toBe(false);
});
test("bounds bytes, depth and total nodes without truncation", () => {
  expect(toCanonical({ type: "doc", content: [{ type: "paragraph", content: [{ type: "text", text: "é".repeat(65536) }] }] }).ok).toBe(false);
  let node: unknown = { type: "paragraph" };
  for (let i = 0; i < 9; i++) node = { type: "blockquote", content: [node] };
  expect(toCanonical({ type: "doc", content: [node] }).ok).toBe(false);
  expect(toCanonical({ type: "doc", content: Array.from({ length: 10000 }, () => ({ type: "paragraph" })) }).ok).toBe(false);
  const cyclic: { type: string; content: unknown[] } = { type: "doc", content: [] }; cyclic.content.push(cyclic);
  expect(toCanonical(cyclic).ok).toBe(false);
});
