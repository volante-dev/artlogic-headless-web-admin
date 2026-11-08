import {test,expect} from "@playwright/test";
import {editorFormDefaults,contributedFormDocument} from "../lib/forms/editor-document";
import {createFormTemplate} from "../lib/forms/templates.generated";
test("editor defaults do not alter a locked Expertise definition or turn empty controls into contributions",()=>{
 const source=createFormTemplate("expertise",["fr","en"]),values=editorFormDefaults(source);expect(values.fields[0]!.translations.fr!.help).toBe("");expect(contributedFormDocument(values,source)).toEqual(source);values.translations.fr!.title="Mon expertise";expect(contributedFormDocument(values,source).translations.fr!.title).toBe("Mon expertise");
});
test("the title switch contributes only an intentional visibility change",()=>{const source=createFormTemplate("expertise",["fr","en"]),values=editorFormDefaults(source);expect(values.hideTitle).toBe(false);values.hideTitle=true;expect(contributedFormDocument(values,source).hideTitle).toBe(true);values.hideTitle=false;expect(contributedFormDocument(values,source)).toEqual(source);const hidden={...source,hideTitle:true};expect(contributedFormDocument({...editorFormDefaults(hidden),hideTitle:false},hidden).hideTitle).toBe(false);});
