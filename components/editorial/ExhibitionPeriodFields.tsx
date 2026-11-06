"use client";
import{Stack,TextField}from"@mui/material";
import{exhibitionPeriodErrors,type ExhibitionPeriod}from"@/lib/editorial/exhibition-period";
export function ExhibitionPeriodFields({value,onChange}:{value:ExhibitionPeriod;onChange(value:ExhibitionPeriod):void}){
 const errors=exhibitionPeriodErrors(value);
 return <Stack spacing={2}><h3>Période de l’exposition</h3><p>Ces dates sont communes aux langues et obligatoires avant publication. Elles ne définissent pas la mise en ligne.</p>{([["startsOn","Début de l’exposition"],["endsOn","Fin de l’exposition"]]as const).map(([key,label])=><TextField key={key} type="date" label={label} value={value[key]??""} onChange={event=>onChange({...value,[key]:event.target.value||null})} error={Boolean(errors[key])} helperText={errors[key]} slotProps={{inputLabel:{shrink:true},htmlInput:{min:"0001-01-01",max:"9999-12-31","data-editorial-field":"exhibitionPeriod."+key}}}/>)}</Stack>;
}
