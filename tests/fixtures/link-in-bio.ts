import type {components} from '../../lib/link-in-bio/contract-types.generated';
type S=components['schemas'];
export const fixtureSiteId='00000000-0000-4000-8000-000000000001';
export const fixtureAccountId='00000000-0000-4000-8000-000000000002';
export const fixtureReleaseId='00000000-0000-4000-8000-000000000003';
export const fixtureNow='2026-11-20T12:00:00.000Z';
export function fixtureId(n:number){return '00000000-0000-4000-8000-'+n.toString(16).padStart(12,'0');}
export function fixturePosts(count=50):S['LibPublicItem'][] {
 return Array.from({length:count},(_,i)=>({id:fixtureId(100+i),kind:(['image','video','carousel'] as const)[i%3]!,postedAt:new Date(Date.parse(fixtureNow)-i*3600000).toISOString(),captionExcerpt:i%7===0?null:'Post '+(i+1),image:{assetId:fixtureId(1000+i),width:640,height:800,alt:'Photo '+(i+1),variants:[{width:160,height:200,url:'https://images.example.test/'+(i+1)+'.webp',expiresAt:'2026-11-20T18:00:00.000Z'}]},destination:i<20?{href:'/fr/artworks/item-'+i,label:'Œuvre '+i,kind:'artwork',external:false}:null}));
}
export function fixtureFeed(offset=0):S['LibPublicFeed'] {return {schemaVersion:1,siteId:fixtureSiteId,locale:'fr',releaseId:fixtureReleaseId,revision:'1',sourceState:'active',title:'Link in bio',description:'Les liens de la galerie',banners:[],items:fixturePosts().slice(offset,offset+12),nextCursor:offset+12<50?'fixture-cursor-'+(offset+12):null};}
export function fixtureDraft():S['LibDraft'] {return {schemaVersion:1,siteId:fixtureSiteId,revision:'0',configuration:{enabled:true,selectedAccountId:fixtureAccountId,translations:{fr:{title:'Link in bio',description:null},en:{title:'Link in bio',description:null}},banners:[]},updatedAt:fixtureNow};}
export function fixtureTargets(count=500):S['LibTargetSummary'][] {return Array.from({length:count},(_,i)=>{const kind=(['artwork','publication','exhibition','news'] as const)[i%4]!;return {target:{type:kind==='artwork'?'artwork':'article',id:fixtureId(2000+i)},kind,title:'Contenu '+i,artist:kind==='artwork'?'Artiste '+i:null,thumbnail:kind==='artwork'?{kind:'catalog_media',mediaId:fixtureId(3000+i),width:640,height:800,alt:''}:{kind:'presentation_asset',assetId:fixtureId(3000+i),variant:'w640',width:640,height:480,alt:''},publiclyAvailable:i%5!==0};});}
