import {notFound} from "next/navigation";
import {PageEditor} from "@/components/presentation/PageEditor";
import {pageLabels,type PageKey} from "@/components/presentation/types";
export const instant=false;
export default async function PresentationPage({params}:{params:Promise<{pageKey:string}>}){const {pageKey}=await params;if(!Object.hasOwn(pageLabels,pageKey))notFound();return <PageEditor pageKey={pageKey as PageKey}/>;}
