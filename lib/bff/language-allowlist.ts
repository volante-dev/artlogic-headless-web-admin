import {languageRoutes} from './language-schemas.generated';
export const languageAdminOperations=['readLanguageCapabilities','readAdminLanguages','createLanguage','prepareDisabledLanguage','updateLanguageLabelsAndOrder','listLanguageTargets','openLanguageWorkspace','readLanguageWorkspace','updateLanguageWorkspace','approveLanguageWorkspace','rebaseLanguageWorkspace','startLanguageReadinessCheck','readLanguageReadinessCheck','listLanguageReadinessIssues','transitionLanguage','readLanguageOperation','readLanguageOperationByKey','readLanguageHistory'] as const satisfies readonly (keyof typeof languageRoutes)[];
export type AdminLanguageOperation=typeof languageAdminOperations[number];
export const languageWorkspaceOperations=new Set<AdminLanguageOperation>(['openLanguageWorkspace','readLanguageWorkspace','updateLanguageWorkspace','approveLanguageWorkspace','rebaseLanguageWorkspace']);
export const languagePreconditionOperations=new Set<AdminLanguageOperation>(['createLanguage','prepareDisabledLanguage','updateLanguageLabelsAndOrder','updateLanguageWorkspace','approveLanguageWorkspace','rebaseLanguageWorkspace','startLanguageReadinessCheck','transitionLanguage']);
export const languageIdempotentOperations=new Set<AdminLanguageOperation>(['createLanguage','prepareDisabledLanguage','openLanguageWorkspace','approveLanguageWorkspace','rebaseLanguageWorkspace','startLanguageReadinessCheck','transitionLanguage']);
export function matchLanguageAdminRoute(method:string,path:string){
 for(const operation of languageAdminOperations){const route=languageRoutes[operation];if(route.method!==method)continue;
  const keys=[...route.url.matchAll(/\{(\w+)\}/g)].map(match=>match[1]!),pattern=route.url.replace(/\{\w+\}/g,'([a-f0-9-]{36})'),matched=new RegExp('^'+pattern+'$').exec(path);if(matched)return {operation,params:Object.fromEntries(keys.map((key,index)=>[key,matched[index+1]!]))};
 }
 return null;
}
