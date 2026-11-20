'use client';
/* Authenticated thumbnail references or small, signed variants only; no optimizer/proxy fallback. */
/* eslint-disable @next/next/no-img-element */
import {useState} from 'react';
export function Thumbnail({src,alt,width,height,srcSet,sizes}:{src:string;alt:string;width:number;height:number;srcSet?:string;sizes?:string}){const [failed,setFailed]=useState(false);return failed?<span>Visuel indisponible</span>:<img src={src} srcSet={srcSet} sizes={sizes} alt={alt} width={width} height={height} loading="lazy" onError={()=>setFailed(true)}/>;}
