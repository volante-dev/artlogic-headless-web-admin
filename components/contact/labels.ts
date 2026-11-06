import type {ContactState} from "../../lib/bff/contact";
export const states:Record<ContactState,string>={pending:"En attente",sending:"En cours",sent:"Acceptée par le serveur mail",failed:"Échec",uncertain:"Résultat incertain"};
export const reasons:Record<string,string>={none:"—",temporary_rejection:"Refus temporaire",permanent_rejection:"Refus définitif",connection_before_send:"Connexion impossible avant envoi",delivery_uncertain:"Acceptation non confirmée",attempts_exhausted:"Budget de tentatives épuisé",configuration_changed:"Configuration de routage modifiée",expired:"Demande expirée",transport_unavailable:"Transport indisponible"};
export function date(value:string){return new Intl.DateTimeFormat("fr-FR",{dateStyle:"medium",timeStyle:"short"}).format(new Date(value));}
