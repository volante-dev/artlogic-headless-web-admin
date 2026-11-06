import type{ArticleDocument}from"./client";
export type ExhibitionPeriod=NonNullable<ArticleDocument["exhibitionPeriod"]>;
function validDay(value:string){const date=new Date(value+"T00:00:00.000Z");return /^(?!0000)\d{4}-\d{2}-\d{2}$/.test(value)&&Number.isFinite(date.getTime())&&date.toISOString().slice(0,10)===value;}
export function exhibitionPeriodErrors(period:ExhibitionPeriod){
 const errors:{startsOn?:string;endsOn?:string}={};for(const key of["startsOn","endsOn"]as const)if(period[key]!==null&&!validDay(period[key]))errors[key]="Renseignez une date valide.";
 if(!Object.keys(errors).length&&period.startsOn&&period.endsOn&&period.endsOn<period.startsOn)errors.endsOn="La fin doit être égale ou postérieure au début.";return errors;
}
export function formatExhibitionPeriod(period:ExhibitionPeriod,locale="fr"){
 const format=(day:string)=>new Intl.DateTimeFormat(locale,{dateStyle:"medium",timeZone:"UTC"}).format(new Date(day+"T00:00:00.000Z"));if(!period.startsOn||!period.endsOn||Object.keys(exhibitionPeriodErrors(period)).length)return "À compléter";return period.startsOn===period.endsOn?format(period.startsOn):format(period.startsOn)+" – "+format(period.endsOn);
}
