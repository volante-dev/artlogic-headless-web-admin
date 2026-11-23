import "server-only";
import {inventoryHandler} from "./inventory-catalog";
export const previewArtwork=inventoryHandler("previewArtwork");
export const readPreview=inventoryHandler("readPreview");
export const publishArtwork=inventoryHandler("publishArtwork");
export const unpublishArtwork=inventoryHandler("unpublishArtwork");
export const revokeMedia=inventoryHandler("revokeMedia");
export const deleteMedia=inventoryHandler("deleteMedia");
