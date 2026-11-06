import type {CSSProperties} from "react";
const paths={
 inquiries:"M3 5h18v14H3z M3 5l9 7 9-7",
 home:"M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z",
 artworks:"M3 4h18v16H3z M3 15l5-5 4 4 3-3 6 6 M16 8h.01",
 presentation:"M4 4h16v16H4z M4 9h16 M10 9v11",
 content:"M5 3h10l4 4v14H5z M14 3v5h5 M8 12h8 M8 16h6",
 sync:"M20 7v5h-5 M4 17v-5h5 M5.4 7a7 7 0 0 1 11.8-2L20 8 M4 16l2.8 3A7 7 0 0 0 18.6 17",
 arrow:"M5 12h14 M13 6l6 6-6 6",
 menu:"M4 6h16 M4 12h16 M4 18h16",
 close:"M6 6l12 12 M18 6 6 18",
 logout:"M10 4H4v16h6 M9 12h12 M16 7l5 5-5 5"
};
export function AdminIcon({name,className,style}:{name:keyof typeof paths;className?:string;style?:CSSProperties}){
 return <svg className={className} style={style} width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d={paths[name]}/></svg>;
}
