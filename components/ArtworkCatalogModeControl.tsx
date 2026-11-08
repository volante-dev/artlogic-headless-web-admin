"use client";
import {ArtworkCatalogControl} from "./ArtworkCatalogControl";
export function ArtworkCatalogModeControl({csrfCookie,onConfirmed}:{csrfCookie:string;onConfirmed?:(value:boolean)=>void}){return <ArtworkCatalogControl endpoint="/api/artwork-catalog/display" field="enabled" label="Activer la disposition masonry / 2×2" help="Sur desktop uniquement. La désactivation restaure la grille et conserve les formats choisis dans les fiches œuvres." csrfCookie={csrfCookie} onConfirmed={onConfirmed}/>;}
