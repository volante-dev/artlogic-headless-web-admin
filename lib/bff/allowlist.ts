import "server-only";
export const operations={
  start:{method:"POST",path:"/v1/internal/auth/start"},
  callback:{method:"POST",path:"/v1/internal/auth/callback"},
  logout:{method:"POST",path:"/v1/internal/auth/logout"},
  session:{method:"GET",path:"/v1/admin/session"},
  syncList:{method:"GET",path:"/v1/admin/sync-runs"},
  syncCreate:{method:"POST",path:"/v1/admin/sync-runs"},
  syncDetail:{method:"GET",path:"/v1/admin/sync-runs/{runId}"},
  artworkList:{method:"GET",path:"/v1/admin/artworks"},
  artworkDetail:{method:"GET",path:"/v1/admin/artworks/{artworkId}"},
  publication:{method:"PUT",path:"/v1/admin/artworks/{artworkId}/publication"},
  publicationEvents:{method:"GET",path:"/v1/admin/artworks/{artworkId}/publication-events"},
  media:{method:"GET",path:"/v1/admin/media/{mediaId}"},
} as const;
export type Operation=keyof typeof operations;
export function safeNext(next:string):string {
  if(next.length>2048||!next.startsWith("/")||next.startsWith("//")||[...next].some(c=>c.charCodeAt(0)<=32||c.charCodeAt(0)===127||c.charCodeAt(0)===92)||/%(?:2f|5c|25|0[0-9a-f]|1[0-9a-f]|7f)/i.test(next)||/^\/(?:auth|api)(?:[/?#]|$)/.test(next))throw new Error("invalid_next");
  return next;
}
