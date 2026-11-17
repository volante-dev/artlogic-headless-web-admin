/** Select an existing rendition, without requesting a new image transformation. */
export function presentationThumbnail(id:string,files:readonly {variant:string;mimeType:string;width?:number}[],width=192){
 const images=files.filter(file=>['original','w640','w1280','w1920'].includes(file.variant)&&file.mimeType.startsWith('image/')).sort((a,b)=>(a.width??Number.MAX_SAFE_INTEGER)-(b.width??Number.MAX_SAFE_INTEGER));
 const file=images.find(file=>(file.width??Number.MAX_SAFE_INTEGER)>=width)??images.at(-1);
 return '/api/presentation/assets/'+id+'/content'+(file?'?variant='+encodeURIComponent(file.variant):'');
}
