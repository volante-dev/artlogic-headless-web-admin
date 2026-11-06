import {articleHandler} from "@/lib/bff/editorial";
export const GET=articleHandler("vocabularyRead");
export const PATCH=articleHandler("vocabularyUpdate");
export const DELETE=articleHandler("vocabularyDelete");
