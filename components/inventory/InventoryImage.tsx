"use client";
import {useState} from "react";
import {Box,Typography,type SxProps,type Theme} from "@mui/material";
import {inventoryText as t} from "@/lib/inventory/messages";
export function InventoryImage({mediaId,alt="",sx,loading="lazy"}:{mediaId:string;alt?:string;sx?:SxProps<Theme>;loading?:"lazy"|"eager"}){
 const [failed,setFailed]=useState(false),frame:SxProps<Theme>={display:"block",width:"100%",objectFit:"contain",bgcolor:"action.hover",...sx};
 return failed?<Box role="img" aria-label={t("imageUnavailable")} sx={{...frame,display:"grid",placeItems:"center",p:2}}><Typography variant="caption" color="text.secondary">{t("imageUnavailable")}</Typography></Box>:<Box component="img" src={"/api/inventory/media/"+mediaId+"/preview"} alt={alt} loading={loading} onError={()=>setFailed(true)} sx={frame}/>;
}
