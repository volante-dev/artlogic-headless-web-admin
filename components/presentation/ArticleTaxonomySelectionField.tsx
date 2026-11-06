"use client";
import {useEffect,useState} from "react";
import {Alert,Button,Stack,Typography} from "@mui/material";
import {articleFetch,articleErrorMessage,type ArticleCapabilities} from "@/lib/editorial/client";
import {TermLookup} from "../editorial/TermLookup";
type Selection={vocabularyId:string;termIds:string[]}[];
export function ArticleTaxonomySelectionField({value,onChange,locale,kinds}:{value:Selection;onChange(value:Selection):void;locale:string;kinds:("publication"|"news"|"exhibition")[]}){
 const [caps,setCaps]=useState<ArticleCapabilities|null>(null),[error,setError]=useState<unknown>(null),[retry,setRetry]=useState(0),[limit,setLimit]=useState(false);
 useEffect(()=>{const controller=new AbortController();articleFetch<ArticleCapabilities>("/capabilities",{signal:controller.signal}).then(result=>{if(!controller.signal.aborted){setCaps(result.data);setError(null);}}).catch(error=>{if(!controller.signal.aborted)setError(error);});return()=>controller.abort();},[retry]);
 return <Stack spacing={2}><Typography component="h3" variant="h3">Classements</Typography><Typography variant="body2">Au moins une entrée dans chaque vocabulaire choisi doit correspondre. Sans sélection, tous les articles publics de la rubrique sont éligibles.</Typography>{error?<Alert severity="error" action={<Button onClick={()=>setRetry(value=>value+1)}>Réessayer</Button>}>{articleErrorMessage(error)}</Alert>:caps?.vocabularies.map(vocabulary=>{
  const selected=value.find(item=>item.vocabularyId===vocabulary.id)?.termIds??[],allowed=kinds.some(kind=>vocabulary.allowedArticleKinds.includes(kind));
  if(!allowed&&!selected.length)return null;
  return <Stack key={vocabulary.id} spacing={1}>{!allowed&&<Alert severity="warning">Ce classement ne s’applique pas à cette rubrique. Retirez-le pour obtenir des résultats.</Alert>}<TermLookup vocabulary={vocabulary} value={selected} locale={locale} label={vocabulary.labels[locale]??vocabulary.key} onChange={ids=>{const next=[...value.filter(item=>item.vocabularyId!==vocabulary.id),...(ids.length?[{vocabularyId:vocabulary.id,termIds:ids}]:[])];if(next.flatMap(item=>item.termIds).length>20){setLimit(true);return;}setLimit(false);onChange(next);}}/></Stack>;
 })}{limit&&<Alert severity="warning">Sélectionnez au maximum 20 entrées.</Alert>}</Stack>;
}
