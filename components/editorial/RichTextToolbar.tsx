"use client";
import type {Editor} from "@tiptap/react";
export function RichTextToolbar({editor,label,active,onLink}:{editor:Editor|null;label:string;active:{bold?:boolean;italic?:boolean;h2?:boolean;h3?:boolean;quote?:boolean;bullet?:boolean;ordered?:boolean}|null;onLink():void}){
 return <div role="toolbar" aria-label={"Mise en forme — "+label} className="editorial-rich-toolbar">
  <button type="button" onClick={()=>editor?.chain().focus().setParagraph().run()}>Paragraphe</button>
  <button type="button" aria-pressed={active?.h2??false} onClick={()=>editor?.chain().focus().toggleHeading({level:2}).run()}>H2</button><button type="button" aria-pressed={active?.h3??false} onClick={()=>editor?.chain().focus().toggleHeading({level:3}).run()}>H3</button>
  <button type="button" aria-label="Gras" aria-pressed={active?.bold??false} onClick={()=>editor?.chain().focus().toggleBold().run()}><strong>G</strong></button>
  <button type="button" aria-label="Italique" aria-pressed={active?.italic??false} onClick={()=>editor?.chain().focus().toggleItalic().run()}><em>I</em></button>
  <button type="button" aria-label="Liste à puces" aria-pressed={active?.bullet??false} onClick={()=>editor?.chain().focus().toggleBulletList().run()}>Liste à puces</button>
  <button type="button" aria-label="Liste numérotée" aria-pressed={active?.ordered??false} onClick={()=>editor?.chain().focus().toggleOrderedList().run()}>Liste numérotée</button>
  <button type="button" aria-label="Citation" aria-pressed={active?.quote??false} onClick={()=>editor?.chain().focus().toggleBlockquote().run()}>Citation</button>
  <button type="button" onClick={onLink}>Lien</button>
 </div>;
}
