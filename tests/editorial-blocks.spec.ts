import {test,expect} from "@playwright/test";
import {externalEditorialSource,newEditorialMedia,cloneEditorialBlock} from "../lib/editorial/media";
test("normalizes only supported HTTPS provider URLs to identifiers",()=>{
 expect(externalEditorialSource("https://youtu.be/abcdefghijk")).toEqual({kind:"youtube",videoId:"abcdefghijk"});
 expect(externalEditorialSource("https://vimeo.com/12345678/privateHash")).toEqual({kind:"vimeo",videoId:"12345678",privacyHash:"privateHash"});
 for(const value of ["http://youtu.be/abcdefghijk","https://youtube.com.evil.test/watch?v=abcdefghijk","<iframe src='https://youtube.com'/>","https://user:pass@vimeo.com/123","javascript:alert(1)"])expect(externalEditorialSource(value)).toBeNull();
});
test("clones occurrence identities without replacing shared source media or localizations",()=>{
 const media=newEditorialMedia({kind:"artwork",artworkId:crypto.randomUUID(),mediaId:crypto.randomUUID()},["fr","en"]),original={id:crypto.randomUUID(),type:"carousel" as const,visible:true,variant:"default",automatic:false,intervalSeconds:5,slides:[{id:crypto.randomUUID(),media}]},copy=cloneEditorialBlock(original);
 expect(copy.id).not.toBe(original.id);if(copy.type!=="carousel")throw new Error();expect(copy.slides[0]!.id).not.toBe(original.slides[0]!.id);expect(copy.slides[0]!.media.id).not.toBe(media.id);expect(copy.slides[0]!.media.source).toEqual(media.source);expect(copy.slides[0]!.media.cta).toEqual(media.cta);
});
