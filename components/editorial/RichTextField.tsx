"use client";
import {useEffect,useState} from "react";
import {EditorContent,useEditor,useEditorState} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {RichTextToolbar} from "./RichTextToolbar";
import {Alert,Button,Dialog,DialogActions,DialogContent,DialogTitle,TextField} from "@mui/material";
import {toCanonical,toEditor,type RichTextDoc} from "@/lib/editorial/rich-text-adapter";

export function RichTextField({value,onChange,label,onUndo,onRedo,onValidityChange}:{value:RichTextDoc;onChange(value:RichTextDoc):void;label:string;onUndo():void;onRedo():void;onValidityChange?(valid:boolean):void}){
 const [error,setError]=useState(false),[linkOpen,setLinkOpen]=useState(false),[href,setHref]=useState("");
 const editor=useEditor({immediatelyRender:false,shouldRerenderOnTransaction:false,
  extensions:[StarterKit.configure({heading:{levels:[2,3]},code:false,codeBlock:false,horizontalRule:false,strike:false,underline:false,undoRedo:false,trailingNode:false,link:{openOnClick:false,autolink:false,HTMLAttributes:{target:"_blank",rel:"noopener noreferrer",class:null,title:null}}})],
  content:toEditor(value),editorProps:{attributes:{dir:"auto",role:"textbox","aria-label":label,"aria-multiline":"true",class:"editorial-rich-content"},handleKeyDown(_view,event){if((event.metaKey||event.ctrlKey)&&["z","y"].includes(event.key.toLowerCase())){event.preventDefault();if(event.shiftKey||event.key.toLowerCase()==="y")onRedo();else onUndo();return true;}return false;}},
  onUpdate({editor}){const result=toCanonical(editor.getJSON());setError(!result.ok);onValidityChange?.(result.ok);if(result.ok)onChange(result.document);},
 });
 const active=useEditorState({editor,selector:({editor})=>({bold:editor?.isActive("bold"),italic:editor?.isActive("italic"),h2:editor?.isActive("heading",{level:2}),h3:editor?.isActive("heading",{level:3}),quote:editor?.isActive("blockquote"),bullet:editor?.isActive("bulletList"),ordered:editor?.isActive("orderedList")})});
 useEffect(()=>{if(!editor)return;const current=toCanonical(editor.getJSON());if(current.ok&&JSON.stringify(current.document)!==JSON.stringify(value))editor.commands.setContent(toEditor(value),{emitUpdate:false});},[editor,value]);
 const applyLink=()=>{
  const candidate=toCanonical({type:"doc",content:[{type:"paragraph",content:[{type:"text",text:"link",marks:[{type:"link",attrs:{href}}]}]}]});
  if(!candidate.ok){setError(true);return;}
  editor?.chain().focus().extendMarkRange("link").setLink({href,target:"_blank",rel:"noopener noreferrer",class:null,title:null}).run();setLinkOpen(false);setError(false);
 };
 return <div className="editorial-rich-field"><RichTextToolbar editor={editor} label={label} active={active} onLink={()=>{setHref(String(editor?.getAttributes("link").href??""));setError(false);setLinkOpen(true);}}/><EditorContent editor={editor}/>{error&&!linkOpen&&<Alert severity="error" action={<Button onClick={()=>{editor?.commands.setContent(toEditor(value),{emitUpdate:false});setError(false);onValidityChange?.(true);}}>Revenir au dernier texte valide</Button>}>Ce texte contient une mise en forme non prise en charge. Corrigez-la pour enregistrer.</Alert>}
 <Dialog open={linkOpen} onClose={()=>{setLinkOpen(false);setError(false);}} fullWidth maxWidth="sm"><DialogTitle>Modifier le lien</DialogTitle><DialogContent><TextField autoFocus fullWidth label="Adresse" value={href} onChange={event=>{setHref(event.target.value);setError(false);}} margin="dense" error={error} helperText={error?"Utilisez une adresse HTTPS, un lien interne, un e-mail ou un téléphone.":""}/></DialogContent><DialogActions><Button onClick={()=>{editor?.chain().focus().unsetLink().run();setLinkOpen(false);}}>Retirer le lien</Button><Button onClick={()=>{setLinkOpen(false);setError(false);}}>Annuler</Button><Button onClick={applyLink} variant="contained">Appliquer</Button></DialogActions></Dialog>
 </div>;
}
