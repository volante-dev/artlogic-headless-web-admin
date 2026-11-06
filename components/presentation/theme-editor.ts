import type {Overrides,Theme} from "./types";
import type {Manifest,ContrastPair} from "./manifest";
export function resolveEditorTheme(overrides:Overrides,manifest:Manifest):Theme{
 const base=manifest.presets.find(p=>p.id===manifest.defaultPreset)!.theme,theme=structuredClone(base);
 Object.assign(theme.colors,overrides.colors);for(const role of manifest.theme.typographyRoles)Object.assign(theme.typography[role],overrides.typography?.[role]);theme.fonts=structuredClone(overrides.fonts??base.fonts);return theme;
}
const channels=(hex:string)=>[1,3,5].map(i=>parseInt(hex.slice(i,i+2),16)/255);
const luminance=(rgb:number[])=>rgb.reduce((sum,c,i)=>sum+(c<=.04045?c/12.92:((c+.055)/1.055)**2.4)*[.2126,.7152,.0722][i],0);
const ratio=(a:number,b:number)=>(Math.max(a,b)+.05)/(Math.min(a,b)+.05);
export function contrastChecks(theme:Theme,manifest:Manifest){
 const pairs=[...manifest.theme.contrastPairs,...manifest.sections.flatMap(s=>s.contrastPairs)],seen=new Set<string>();
 return pairs.flatMap((pair:ContrastPair)=>{const key=JSON.stringify(pair);if(seen.has(key)||![theme.colors[pair.foreground],theme.colors[pair.background]].every(v=>/^#[0-9a-f]{6}$/i.test(v)))return [];seen.add(key);
 const ink=luminance(channels(theme.colors[pair.foreground])),bg=channels(theme.colors[pair.background]),style=pair.role==="control"?null:theme.typography[pair.role],minimum=pair.role==="control"||style&&(style.minSizeRem>=1.5||style.weight>=700&&style.minSizeRem*16>=56/3)?3:4.5;
 let value=ratio(ink,luminance(bg));if(pair.mediaOverlay!==undefined){const low=luminance(bg.map(v=>v*pair.mediaOverlay!)),high=luminance(bg.map(v=>v*pair.mediaOverlay!+1-pair.mediaOverlay!));value=ink>=low&&ink<=high?1:Math.min(ratio(ink,low),ratio(ink,high));}return [{...pair,key,value,minimum}];});
}
