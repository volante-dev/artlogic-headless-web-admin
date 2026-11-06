import type {components} from "./documents.generated";
export type EditorialMedia=components["schemas"]["EditorialMedia"];
export type EditorialBlock=components["schemas"]["EditorialBlock"];
export type EditorialSource=components["schemas"]["EditorialSource"];
export const sourceIsVideo=(source:EditorialSource)=>["video","youtube","vimeo"].includes(source.kind);
export function newEditorialMedia(source:EditorialSource,locales:readonly string[]):EditorialMedia{
 const video=sourceIsVideo(source),external=source.kind==="youtube"||source.kind==="vimeo";
 return {id:crypto.randomUUID(),source,alt:Object.fromEntries(locales.map(locale=>[locale,""])),subtext:null,showArtworkInfo:source.kind==="artwork",render:{desktop:{aspect:"natural",fit:external?"contain":"cover",focalPoint:{x:.5,y:.5},enlarge:!video&&source.kind!=="artwork"},mobile:{aspect:"portrait",fit:external?"contain":"cover",focalPoint:{x:.5,y:.5},enlarge:!video&&source.kind!=="artwork"}},cta:source.kind==="artwork"?{kind:"artwork",label:Object.fromEntries(locales.map(locale=>[locale,locale==="fr"?"Découvrir l’œuvre":locale==="en"?"Discover the artwork":""]))}:null,...(video?{video:{autoplay:false,showSoundControl:true,posterAssetId:null}}:{})};
}
export function externalEditorialSource(input:string):Extract<EditorialSource,{kind:"youtube"|"vimeo"}>|null{
 try{
  const url=new URL(input);if(url.protocol!=="https:"||url.username||url.password||url.port||url.hash)return null;
  if(["youtube.com","www.youtube.com","youtu.be","www.youtu.be","www.youtube-nocookie.com"].includes(url.hostname)){
   const id=url.hostname.endsWith("youtu.be")?url.pathname.slice(1):url.pathname==="/watch"?url.searchParams.get("v"):url.pathname.startsWith("/embed/")?url.pathname.slice(7):null;
   return id&&/^[A-Za-z0-9_-]{11}$/.test(id)?{kind:"youtube",videoId:id}:null;
  }
  if(["vimeo.com","www.vimeo.com","player.vimeo.com"].includes(url.hostname)){
   const match=/^\/(?:video\/)?([0-9]{1,20})(?:\/([A-Za-z0-9_-]{1,128}))?\/?$/.exec(url.pathname);
   const privacyHash=url.searchParams.get("h")??match?.[2]??null;
   return match&&(!privacyHash||/^[A-Za-z0-9_-]{1,128}$/.test(privacyHash))?{kind:"vimeo",videoId:match[1]!,privacyHash}:null;
  }
 }catch{/* The field retains the invalid text for correction. */}
 return null;
}
export function cloneEditorialBlock(value:EditorialBlock):EditorialBlock{
 const copy=structuredClone(value);copy.id=crypto.randomUUID();if(copy.type==="media"||copy.type==="textMedia")copy.media.id=crypto.randomUUID();if(copy.type==="textMedia"&&copy.secondMedia)copy.secondMedia.id=crypto.randomUUID();if(copy.type==="formImage")copy.image.id=crypto.randomUUID();if(copy.type==="carousel")for(const slide of copy.slides){slide.id=crypto.randomUUID();slide.media.id=crypto.randomUUID();}if(copy.type==="imageGroup")for(const item of copy.items){item.id=crypto.randomUUID();item.media.id=crypto.randomUUID();}return copy;
}

export function editorialImageMedia(media:EditorialMedia):components["schemas"]["EditorialImageMedia"]|null{
 const source=media.source;if(source.kind!=="image")return null;
 return {id:media.id,source:{kind:"image",assetId:source.assetId},alt:media.alt,subtext:media.subtext,showArtworkInfo:false,render:media.render,cta:media.cta?.kind==="link"?media.cta:null};
}
