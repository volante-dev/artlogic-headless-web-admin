"use client";
import {FormReferenceField} from "../forms/FormReferenceField";
import {Box,Button,Checkbox,FormControlLabel,MenuItem,Stack,TextField,Typography} from "@mui/material";
import type {EditorField} from "./manifest";
import {LocalizedField} from "./LocalizedField";
import {LinkField} from "./LinkField";
import {ImageFields} from "./ImageFields";
import {AssetPicker} from "./AssetPicker";
import {ArtworkSelectionField} from "./ArtworkSelectionField";
import {RelatedArticleSelector} from "../editorial/RelatedArticleSelector";
import {ArticleTaxonomySelectionField} from "./ArticleTaxonomySelectionField";
import {duplicateProps,getField,setField} from "./page-editor";
import {usePresentationDraft} from "./usePresentationDraft";
import type {components} from "../../lib/bff/generated";
export function SectionFields({fields,props,locale,onChange}:{fields:EditorField[];props:Record<string,unknown>;locale:string;onChange:(props:Record<string,unknown>,structural?:boolean)=>void}){
 const state=usePresentationDraft();
 return <Stack spacing={3}>{fields.map(field=>{const value=getField(props,field.path),change=(next:unknown,structural=false)=>onChange(setField(props,field.path,next),structural),label=field.label.fr;
 if(props.mode==="latest"&&field.kind==="articleSelection"||props.mode==="manual"&&["kind","kinds","taxonomyAssignments"].includes(field.path))return null;
 if(field.path==="kind"&&props.kinds!==undefined)return null;
 if(field.path==="kinds"){const selected=(props.kinds??(props.kind==="all"?["publication","news"]:[props.kind])) as string[];return <Stack key={field.id}><Typography component="h3">Rubriques</Typography>{(["publication","news","exhibition"] as const).map(kind=><FormControlLabel key={kind} label={({publication:"Publications",news:"Actualités",exhibition:"Expositions"})[kind]} control={<Checkbox checked={selected.includes(kind)} disabled={selected.length===1&&selected.includes(kind)} onChange={e=>{const rest={...props};delete rest.kind;onChange({...rest,kinds:e.target.checked?[...selected,kind]:selected.filter(item=>item!==kind)},true);}}/>}/>)}</Stack>;}
 if(field.kind==="formSelection")return <FormReferenceField key={field.id} value={typeof value==="string"?value:""} locale={locale} onChange={id=>change(id,true)}/>;
 if(field.kind==="articleSelection")return <RelatedArticleSelector key={field.id} label={label} value={(value??[]) as string[]} max={field.maxItems} onChange={ids=>change(ids,true)}/>;
 if(field.kind==="taxonomySelection")return <ArticleTaxonomySelectionField key={field.id} value={(value??[]) as {vocabularyId:string;termIds:string[]}[]} locale={locale} kinds={(props.kinds??(props.kind==="all"?["publication","news"]:[props.kind])) as ("publication"|"news"|"exhibition")[]} onChange={selection=>change(selection,true)}/>;
 if(field.kind==="localizedText")return <LocalizedField key={field.id} field={field} value={value as Record<string,string|null>|undefined} locale={locale} onChange={change}/>;
 if(field.kind==="link")return <LinkField key={field.id} label={label} value={value as components["schemas"]["PresentationLink"]|undefined} onChange={change}/>;
 if(field.kind==="image")return <ImageFields key={field.id} label={label} value={value as string|null|undefined} onChange={id=>change(id,true)}/>;
 if(field.kind==="video")return <AssetPicker key={field.id} kind="video" label={label} value={value as string|null|undefined} onChange={asset=>change(asset?.id??null,true)}/>;
 if(field.kind==="artworkSelection")return <ArtworkSelectionField key={field.id} label={label} value={(value??[]) as string[]} max={field.maxItems} onChange={ids=>change(ids,true)}/>;
 if(field.kind==="boolean")return <FormControlLabel key={field.id} label={label} control={<Checkbox checked={Boolean(value)} onChange={e=>change(e.target.checked)}/>}/>;
 if(field.kind==="number")return <TextField key={field.id} label={label} type="number" value={value??(field.path.startsWith("focalPoint.")?.5:"")} onChange={e=>change(e.target.value===""?undefined:Number(e.target.value))} helperText={"De "+field.minimum+" à "+field.maximum} slotProps={{htmlInput:{min:field.minimum,max:field.maximum,step:field.path.startsWith("focalPoint.")?.05:1}}}/>;
 if(field.kind==="enum")return <TextField key={field.id} select label={label} helperText={field.path==="imageFit"?"Cover remplit le cadre. Contain garde le format d’origine, sans fond ni carré imposé.":undefined} value={value??(field.path==="imageFit"?"cover":"")} onChange={e=>{if(field.path==="kind"){const rest={...props};delete rest.kind;onChange({...rest,kinds:e.target.value==="all"?["publication","news"]:[e.target.value]},true);}else change(e.target.value,field.path==="imageFit");}}>{field.values?.map(v=><MenuItem key={v} value={v}>{({left:"À gauche",right:"À droite",manual:"Articles choisis",latest:"Derniers articles",cover:"Remplir le cadre (Cover)",contain:"Format d’origine (Contain)",all:"Publications et Actualités (ancien périmètre)",publication:"Publications",news:"Actualités"} as Record<string,string>)[v]??v}</MenuItem>)}</TextField>;
 if(field.kind==="list"){const items=(value??[]) as Record<string,unknown>[],max=field.maxItems??12;function move(i:number,d:number){const next=[...items];[next[i],next[i+d]]=[next[i+d],next[i]];change(next,true);}return <Stack key={field.id} spacing={3}><Typography component="h3" variant="h3">{label} · {items.length}/{max}</Typography>{items.map((item,i)=><Box component="section" aria-label={label+" "+(i+1)} key={String(item.id)} sx={{borderTop:1,borderColor:"divider",pt:2}}><Typography component="h4" sx={{mb:2}}>Élément {i+1}</Typography><SectionFields fields={field.fields??[]} props={item} locale={locale} onChange={(next,structural)=>change(items.map((entry,index)=>index===i?next:entry),structural)}/><Stack direction="row" spacing={1} useFlexGap sx={{flexWrap:"wrap",mt:2}}><Button disabled={i===0} onClick={()=>move(i,-1)}>Monter l’élément</Button><Button disabled={i===items.length-1} onClick={()=>move(i,1)}>Descendre l’élément</Button><Button disabled={items.length>=max} onClick={()=>change([...items.slice(0,i+1),duplicateProps(item,field.fields??[],state.locales.map(l=>l.code)),...items.slice(i+1)],true)}>Dupliquer l’élément</Button><Button onClick={()=>{if(window.confirm("Supprimer cet élément ? Cette action reste annulable jusqu’à publication dans cet éditeur."))change(items.filter((_,index)=>index!==i),true);}}>Supprimer l’élément</Button></Stack></Box>)}<Button variant="outlined" disabled={items.length>=max} onClick={()=>change([...items,{id:crypto.randomUUID()}],true)}>Ajouter un élément</Button></Stack>;}
 return <TextField key={field.id} label={label} value={value??""} multiline={field.kind==="text"} onChange={e=>change(Array.from(e.target.value).slice(0,field.maxLength??5000).join(""))} helperText={Array.from(String(value??"")).length+" / "+(field.maxLength??5000)+" caractères"}/>;
 })}</Stack>;
}
