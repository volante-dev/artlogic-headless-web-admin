"use client";
import {useId} from "react";
import {Box,Button,Stack,Typography} from "@mui/material";
import {inventoryText as t} from "@/lib/inventory/messages";
export interface InventoryComparisonRow{label:string;saved:string;draft:string}
export function InventoryConflictComparison({rows,onKeep,disabled=false}:{rows:readonly InventoryComparisonRow[];onKeep:()=>void;disabled?:boolean}){
 const id=useId();return <Stack spacing={2} component="section" aria-label={t("stockSavedComparison")}><Typography component="h3" variant="h3">{t("stockSavedComparison")}</Typography>{rows.map((row,index)=><Box role="group" aria-labelledby={id+index} key={row.label+index} sx={{pb:2,borderBottom:1,borderColor:"divider",overflowWrap:"anywhere"}}><Typography id={id+index} sx={{fontWeight:500}}>{row.label}</Typography><Stack direction={{xs:"column",md:"row"}} spacing={2} sx={{mt:1}}><Box sx={{flex:1,minWidth:0}}><Typography variant="body2" color="text.secondary">{t("stockSavedValues")}</Typography><Typography sx={{whiteSpace:"pre-wrap"}}>{row.saved}</Typography></Box><Box sx={{flex:1,minWidth:0}}><Typography variant="body2" color="text.secondary">{t("stockRetainedValues")}</Typography><Typography sx={{whiteSpace:"pre-wrap"}}>{row.draft}</Typography></Box></Stack></Box>)}<Button disabled={disabled} onClick={onKeep} sx={{alignSelf:"start"}}>{t("stockKeepInput")}</Button></Stack>;
}
