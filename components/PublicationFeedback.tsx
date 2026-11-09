"use client";
import {createContext,useCallback,useContext,useRef,useState} from "react";
import {Alert,LinearProgress,Portal,Snackbar} from "@mui/material";
export interface PublicationResult {message:string;severity?:"success"|"warning"|"error"}
interface Feedback {publishing:boolean;run(action:()=>Promise<PublicationResult>,options?:{pending?:string;errorMessage?:(error:unknown)=>string}):Promise<boolean>}
const Context=createContext<Feedback|null>(null);
export function PublicationFeedbackProvider({children}:{children:React.ReactNode}){
 const lock=useRef(false),[publishing,setPublishing]=useState(false),[notice,setNotice]=useState<(PublicationResult&{pending:boolean})|null>(null);
 const run=useCallback<Feedback["run"]>(async(action,options)=>{
  if(lock.current)return false;lock.current=true;setPublishing(true);setNotice({message:options?.pending??"Publication en cours",pending:true});
  try{const result=await action();setNotice({...result,pending:false});return !result.severity||result.severity==="success";}
  catch(error){setNotice({message:options?.errorMessage?.(error)??"La publication n’a pas pu être confirmée. Vérifiez l’état enregistré avant de réessayer.",severity:"error",pending:false});return false;}
  finally{lock.current=false;setPublishing(false);}
 },[]);
 function dismiss(){if(!lock.current)setNotice(null);}
 return <Context value={{publishing,run}}>
  {children}
  <Portal>
   <Snackbar open={Boolean(notice)} anchorOrigin={{vertical:"bottom",horizontal:"right"}}
    onClose={(_event,reason)=>{if(reason!=="clickaway")dismiss();}}
    sx={{bottom:"max(16px, env(safe-area-inset-bottom))!important",right:"max(16px, env(safe-area-inset-right))!important",left:{xs:"16px!important",sm:"auto!important"},maxWidth:{xs:"none",sm:480}}}>
    <Alert data-publication-notification data-testid="publication-result"
     severity={notice?.pending?"info":notice?.severity??"success"}
     role={notice?.severity==="error"?"alert":"status"}
     aria-live={notice?.severity==="error"?"assertive":"polite"} aria-atomic="true" data-publication-pending={notice?.pending?"true":"false"}
     closeText="Fermer la notification" onClose={notice?.pending?undefined:dismiss}
     sx={{width:"100%",boxSizing:"border-box",alignItems:"flex-start","& .MuiAlert-message":{minWidth:0,overflowWrap:"anywhere",width:"100%"}}}>
     {notice?.message}
     {notice?.pending&&<LinearProgress aria-label="Publication en cours" sx={{mt:1}}/>}
    </Alert>
   </Snackbar>
  </Portal>
 </Context>;

}
export function usePublicationFeedback(){const context=useContext(Context);if(!context)throw new Error("publication_feedback_provider_required");return context;}
