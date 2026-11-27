'use client';
import {Alert,Box,Stack,Typography} from '@mui/material';
import {languageMessageField} from '@/lib/site-languages/message-fields';
import {TranslationTextControl} from '../TranslationTextControl';
/** Templates stay plain data. Parameters, transport and recipients cannot be added here. */
export function NotificationFields({fieldId,label,locale,value,maxLength,required,error,onChange}:{fieldId:string;label:string;locale:string;value:string;maxLength?:number;required:boolean;error?:string;onChange:(value:string)=>void}){
 let definition:ReturnType<typeof languageMessageField>|undefined;
 try{definition=languageMessageField(fieldId.replace(/\.(zero|one|two|few|many|other)$/,''));}catch{/* A newer catalogue must not be guessed by an older editor. */}
 return <Stack spacing={1}>
  {!definition&&<Alert severity="info">Ce modèle utilise un catalogue plus récent. Rechargez l’administration avant de le modifier.</Alert>}
  <TranslationTextControl id={'translation-'+fieldId} label={label+' ('+locale+')'} value={value} onChange={onChange} rows={3} maxLength={maxLength} required={required} disabled={!definition} error={error}/>
  {definition&&Object.keys(definition.parameters).length>0&&<Box><Typography variant="caption" component="p" color="text.secondary">Paramètres autorisés, conservés entre accolades :</Typography><Box component="ul" sx={{m:0,pl:2,fontSize:'.875rem'}}>{Object.entries(definition.parameters).map(([name,parameter])=><li key={name}><code>{'{'+name+'}'}</code> : {({number:'nombre',date:'date',string:'texte'} as Record<string,string>)[parameter.type]}{parameter.mustAppear?' · requis dans le modèle':''}</li>)}</Box></Box>}
 </Stack>;
}
