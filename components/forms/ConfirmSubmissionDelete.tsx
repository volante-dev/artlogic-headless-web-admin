"use client";
import {Alert,Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from "@mui/material";
import styles from "./reception.module.css";
export function ConfirmSubmissionDelete({open,count,busy,error,onClose,onConfirm}:{open:boolean;count:number;busy:boolean;error?:string;onClose:()=>void;onConfirm:()=>void}){
 return <Dialog open={open} onClose={()=>{if(!busy)onClose();}} aria-labelledby="delete-submission-title" aria-describedby="delete-submission-description"><DialogTitle id="delete-submission-title">{count===1?"Supprimer cette demande ?":"Supprimer ces "+count+" demandes ?"}</DialogTitle><DialogContent><DialogContentText id="delete-submission-description">Les réponses, notes et photos seront effacées. Les exports qui les contiennent seront retirés. Cette action est définitive.</DialogContentText>{error&&<Alert severity="error">{error}</Alert>}</DialogContent><DialogActions className={styles.deleteActions}><Button autoFocus onClick={onClose} disabled={busy}>Conserver</Button><Button variant="contained" color="error" onClick={onConfirm} disabled={busy}>Supprimer définitivement</Button></DialogActions></Dialog>;
}
