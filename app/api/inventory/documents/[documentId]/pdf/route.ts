import {inventoryDocumentFileHandler} from "@/lib/bff/inventory-documents";
export const GET=inventoryDocumentFileHandler("documentPdf");
export const HEAD=inventoryDocumentFileHandler("documentPdfHead");
