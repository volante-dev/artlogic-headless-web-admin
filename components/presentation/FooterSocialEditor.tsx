"use client";
import {Stack,TextField} from "@mui/material";
import type {FooterConfiguration} from "./types";
import {FooterText} from "./FooterFields";
export function FooterSocialEditor({value,locale,onChange}:{value:FooterConfiguration["socialLinks"][number];locale:string;onChange:(v:FooterConfiguration["socialLinks"][number])=>void}){return <Stack spacing={2}><FooterText label="Nom du réseau" value={value.label} locale={locale} onChange={label=>onChange({...value,label})}/><TextField label="URL HTTPS du réseau" value={value.destination?.url??""} slotProps={{htmlInput:{maxLength:2048}}} onChange={e=>onChange({...value,destination:e.target.value?{kind:"external",url:e.target.value}:null})}/></Stack>;}
