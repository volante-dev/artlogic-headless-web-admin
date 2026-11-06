/** Resolve a wall-clock input in the configured IANA zone. Never assume the browser's zone. */
export function scheduleCandidates(value:string,timeZone:string):{iso:string;offset:string}[]{
 const match=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/.exec(value);if(!match)return [];
 const [year,month,day,hour,minute]=match.slice(1).map(Number),wall=Date.UTC(year!,month!-1,day!,hour!,minute!),formatter=new Intl.DateTimeFormat("en-CA",{timeZone,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23",timeZoneName:"longOffset"}),target=value.replace("T"," "),result:{iso:string;offset:string}[]=[];
 for(let offset=-14*60;offset<=14*60;offset+=15){const date=new Date(wall+offset*60000),parts=Object.fromEntries(formatter.formatToParts(date).map(part=>[part.type,part.value])),local=parts.year+"-"+parts.month+"-"+parts.day+" "+parts.hour+":"+parts.minute;if(local===target)result.push({iso:date.toISOString(),offset:parts.timeZoneName??"UTC"});}
 return result;
}
