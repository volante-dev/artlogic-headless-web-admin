/** Compiler-owned route allowlist. No caller-provided header, origin or locale enters this profile. */
export async function nativeEditorLanguageHeaders(path:string,session:string|undefined,resolve:(session?:string)=>Promise<{policy:{publicRevision:string}|null}>):Promise<Record<string,string>>{
 const inventory=/^\/v1\/admin\/inventory\/(?:artworks(?:\/[a-f0-9-]{36}(?:\/(?:draft|publish|unpublish|preview))?)?|references(?:\/.*)?)$/i.test(path);
 if(!inventory&&!/^\/v1\/admin\/(?:site-content|presentation|artworks|artwork-catalog|artwork-experiences|editorial|forms|store|link-in-bio|team|navigation)(?:\/|$)/.test(path)||/(?:^|\/)(?:media|assets|uploads|observations|thumbnails|site-logos)(?:\/|$)/.test(path))return {};
 const observed=await resolve(session);
 return observed.policy?{'X-Site-Language-Contract':'1','X-Site-Language-Revision':observed.policy.publicRevision}:{};
}
