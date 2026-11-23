"use client";
import {Alert,Button,Stack} from "@mui/material";
import type {useInventoryMutation} from "@/lib/inventory/useInventoryMutation";
import {inventoryText as t} from "@/lib/inventory/messages";
export function StockMutationFeedback({mutation,onCompare}:{mutation:ReturnType<typeof useInventoryMutation>;onCompare?:()=>void}){return <Stack spacing={2}>
 {mutation.error&&<Alert severity="error" role="alert">{mutation.error}</Alert>}{mutation.status&&<Alert severity="success" role="status">{mutation.status}</Alert>}
 {mutation.uncertain&&<Button variant="contained" disabled={mutation.busy} onClick={()=>void mutation.verify()}>{t(mutation.busy?"checking":"verifySave")}</Button>}
 {mutation.reloadRequired&&<Button disabled={mutation.busy} onClick={()=>void mutation.reload()}>{t("stockReload")}</Button>}
 {mutation.conflict&&onCompare&&<Button disabled={mutation.busy} onClick={onCompare}>{t("stockCompare")}</Button>}
 </Stack>;}
