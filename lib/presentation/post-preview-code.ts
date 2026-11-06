/** Submit from the reserved context itself. WebKit no longer resolves its name
 * from the opener after opener=null, which otherwise creates a second window. */
export function postPreviewCode(popup:Window,exchangeUrl:string,code:string,embedded=false){
 if(popup.closed||popup.document.URL!=="about:blank")throw new Error("preview_context_changed");
 const document=popup.document,form=document.createElement("form"),field=document.createElement("input");
 form.method="POST";form.action=exchangeUrl;form.target="_self";form.hidden=true;field.type="hidden";field.name="code";field.value=code;form.append(field);if(embedded){const embed=document.createElement("input");embed.type="hidden";embed.name="embedded";embed.value="1";form.append(embed);}document.body.append(form);form.submit();
 // Navigation destroys this blank document; removing the form early can cancel a submission.
}
