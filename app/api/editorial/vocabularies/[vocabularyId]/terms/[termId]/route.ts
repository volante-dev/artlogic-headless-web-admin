import {articleHandler} from "@/lib/bff/editorial";
export const GET=articleHandler("termRead");
export const PATCH=articleHandler("termUpdate");
export const DELETE=articleHandler("termDelete");
