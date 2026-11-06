import {articleHandler} from "@/lib/bff/editorial";
export const GET=articleHandler("templateRead");
export const PUT=articleHandler("templateUpdate");
export const DELETE=articleHandler("templateDelete");
