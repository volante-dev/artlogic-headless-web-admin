"use client";
import {useState} from "react";
import {Button,MenuItem,Stack,TextField} from "@mui/material";
import type {Manifest} from "./manifest";
import type {Page,Section} from "./types";
import {createSection,sectionLabels} from "./page-editor";
export function SectionLibrary({page,manifest,onAdd,formsEnabled=false}:{page:Page;manifest:Manifest;onAdd:(section:Section)=>void;formsEnabled?:boolean}){const [type,setType]=useState(""),available=manifest.sections.filter(d=>d.type!=="contact"&&(formsEnabled||!["form","formImage"].includes(d.type))&&d.allowedPages.includes(page.pageKey)&&page.sections.filter(s=>s.type===d.type).length<(d.maxPerPage??30)),selected=available.find(d=>d.type===type);return <Stack spacing={2}><TextField select label="Section à ajouter" value={selected?type:""} onChange={e=>setType(e.target.value)}><MenuItem value="">Choisir un type</MenuItem>{available.map(d=><MenuItem key={d.type} value={d.type}>{sectionLabels[d.type as Section["type"]]??d.type}</MenuItem>)}</TextField><Button variant="outlined" disabled={!selected||page.sections.length>=30} onClick={()=>{if(selected)onAdd(createSection(selected));}}>Ajouter la section</Button></Stack>;}
