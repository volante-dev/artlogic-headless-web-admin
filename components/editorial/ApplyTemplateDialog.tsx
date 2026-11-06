"use client";
import {Button,Dialog,DialogActions,DialogContent,DialogTitle} from "@mui/material";
export function ApplyTemplateDialog({name,busy,onCancel,onConfirm}:{name:string|null;busy:boolean;onCancel():void;onConfirm():void}){
 return <Dialog open={name!==null} onClose={()=>{if(!busy)onCancel();}} aria-labelledby="apply-template-title"><DialogTitle id="apply-template-title">Remplacer les blocs de l’article ?</DialogTitle><DialogContent><p>Une copie indépendante de « {name} » remplacera les blocs actuels, dans toutes leurs langues.</p><p>Une version de récupération conservera la composition précédente. Le titre, les adresses, la couverture et les réglages de l’article seront conservés.</p><p>Cette action ne publie pas l’article et ne modifie pas sa programmation.</p></DialogContent><DialogActions><Button disabled={busy} onClick={onCancel}>Annuler</Button><Button variant="contained" disabled={busy} onClick={onConfirm}>Remplacer les blocs</Button></DialogActions></Dialog>;
}
