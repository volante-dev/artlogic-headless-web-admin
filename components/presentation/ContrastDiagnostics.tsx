"use client";
import {Alert,Box,Typography} from "@mui/material";
import type {Theme} from "./types";
import {colorLabels,typeLabels,type Manifest} from "./manifest";
import {contrastChecks} from "./theme-editor";
export function ContrastDiagnostics({theme,manifest}:{theme:Theme;manifest:Manifest}){const checks=contrastChecks(theme,manifest),failed=checks.filter(c=>c.value<c.minimum);return <Box aria-live="polite"><Alert severity={failed.length?"warning":"success"} icon={false}>{failed.length?"Contraste insuffisant : le brouillon peut être enregistré, mais sa publication sera bloquée.":"Les contrastes calculés respectent les seuils de publication."}</Alert><Box component="details" sx={{mt:2}}><summary>Voir les {checks.length} paires de contraste</summary>{checks.map(c=><Typography key={c.key} variant="body2" color={c.value<c.minimum?"error":"text.secondary"}>{colorLabels[c.foreground]} / {colorLabels[c.background]} · {c.role==="control"?"contrôle":typeLabels[c.role]}{c.mediaOverlay!==undefined?" sur média":""} : {c.value.toFixed(2)}:1 (minimum {c.minimum}:1)</Typography>)}</Box></Box>;}
