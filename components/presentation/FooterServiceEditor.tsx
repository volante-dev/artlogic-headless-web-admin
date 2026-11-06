"use client";
import {Stack} from "@mui/material";
import type {FooterConfiguration} from "./types";
import {FooterText} from "./FooterFields";
import {LinkField} from "./LinkField";
export function FooterServiceEditor({value,locale,onChange}:{value:FooterConfiguration["services"][number];locale:string;onChange:(v:FooterConfiguration["services"][number])=>void}){return <Stack spacing={2}><FooterText label="Titre du service" value={value.title} locale={locale} onChange={title=>onChange({...value,title})}/><FooterText label="Description facultative" max={600} value={value.description??{}} locale={locale} onChange={description=>onChange({...value,description:Object.values(description).some(v=>v?.trim())?description:null})}/><LinkField label="Destination" value={value.destination??undefined} onChange={destination=>onChange({...value,destination:destination??null})}/></Stack>;}
