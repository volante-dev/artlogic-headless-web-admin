"use client";
import {Stack} from "@mui/material";
import type {ArticleCapabilities,ArticleDocument} from "@/lib/editorial/client";
import {TermSelector} from "./TermSelector";
import {AuthorSelector} from "./AuthorSelector";
import {TermLookup} from "./TermLookup";
export function ArticleTaxonomies({document,kind,onChange,capabilities,locale,csrfCookie,disabled}:{document:ArticleDocument;kind:"publication"|"news"|"exhibition";onChange(document:ArticleDocument):void;capabilities:ArticleCapabilities;locale:string;csrfCookie:string;disabled:boolean}){
 return <Stack spacing={3}>{capabilities.vocabularies.filter(vocabulary=>vocabulary.allowedArticleKinds.includes(kind)).map(vocabulary=>{
  const field=vocabulary.kind==="author"?"authorIds":vocabulary.kind==="category"?"categoryIds":vocabulary.kind==="tag"?"tagIds":null,value=field?document[field]:document.taxonomyAssignments.find(assignment=>assignment.vocabularyId===vocabulary.id)?.termIds??[];
  const change=(ids:string[])=>{const next=structuredClone(document);if(field){next[field]=ids;if(field==="categoryIds"&&next.primaryCategoryId&&!ids.includes(next.primaryCategoryId))next.primaryCategoryId=null;}else next.taxonomyAssignments=[...next.taxonomyAssignments.filter(item=>item.vocabularyId!==vocabulary.id),...(ids.length?[{vocabularyId:vocabulary.id,termIds:ids}]:[])];onChange(next);};
  const props={vocabulary,value,onChange:change,locale,capabilities,csrfCookie,disabled};
  return <Stack spacing={2} key={vocabulary.id}>{vocabulary.kind==="author"?<AuthorSelector {...props}/>:<TermSelector {...props}/>} {vocabulary.kind==="category"&&value.length>0&&<TermLookup vocabulary={vocabulary} value={document.primaryCategoryId?[document.primaryCategoryId]:[]} onChange={ids=>onChange({...document,primaryCategoryId:ids[0]??null})} locale={locale} label="Catégorie principale" single allowedIds={value} disabled={disabled}/>}</Stack>;
 })}</Stack>;
}
