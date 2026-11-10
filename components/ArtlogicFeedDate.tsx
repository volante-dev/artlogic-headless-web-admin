/** The feed timestamp has no timezone; format its fields without Date conversion. */
export function ArtlogicFeedDate({value}:{value?:string|null}){
 const match=value?.match(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}:\d{2}:\d{2})$/);
 return match?<time dateTime={value!.replace(" ","T")}>{match[3]}/{match[2]}/{match[1]} à {match[4]}</time>:<span>Non disponible</span>;
}
