import {Suspense} from "react";
import {UnitPage} from "@/components/inventory/UnitPage";
async function Content({params}:{params:Promise<{unitId:string}>}){return <UnitPage unitId={(await params).unitId}/>;}
export default function Page(props:{params:Promise<{unitId:string}>}){return <Suspense><Content {...props}/></Suspense>;}
