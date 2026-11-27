// Generated from backend/src/domain/site-languages/notification-snapshot-model.ts. Do not edit.
/** Additive private snapshots; independent from public form response contracts. */
export type LanguageNotificationChannel='forms'|'commerce';
export interface LanguageNotificationSnapshot {
 readonly schemaVersion:1;readonly channel:LanguageNotificationChannel;readonly catalogueId:string;readonly publicRevision:string;
 readonly locales:Readonly<Record<string,{readonly intlLocale:string;readonly messages:Readonly<Record<string,string>>}>>;
}
