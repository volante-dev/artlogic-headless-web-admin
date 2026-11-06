"use client";
import {useState} from "react";
import type {Page} from "./types";
/** Structural snapshots live only in this mounted editor, including across successful saves. */
export function usePageUndo(initial:Page,publishedEpoch:number){
 const [state,setState]=useState(()=>({page:structuredClone(initial),history:[] as Page[],epoch:publishedEpoch}));
 if(state.epoch!==publishedEpoch)setState({...state,history:[],epoch:publishedEpoch});
 function update(page:Page,structural=false){setState(s=>({...s,page,history:structural?[...s.history,structuredClone(s.page)]:s.history}));}
 function undo(){setState(s=>s.history.length?{...s,page:structuredClone(s.history.at(-1)!),history:s.history.slice(0,-1)}:s);}
 return {page:state.page,canUndo:state.history.length>0,update,undo};
}
