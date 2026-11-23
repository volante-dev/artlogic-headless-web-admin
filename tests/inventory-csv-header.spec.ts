import {test,expect} from "@playwright/test";
import {inventoryCsvHeader} from "../lib/inventory/csv-header";
test("reads quoted comma and semicolon headers without parsing private data rows",()=>{
 expect(inventoryCsvHeader('\uFEFF"row_type","title.fr","custom, heading"\r\nprivate,values',",")).toEqual(["row_type","title.fr","custom, heading"]);
 expect(inventoryCsvHeader('row_type;"title.fr";"a""b"\nignored',";")).toEqual(["row_type","title.fr",'a"b']);
});
for(const [index,value]of ['title.fr,title.fr\n','title.fr,\n','"unterminated',' a,title.fr\n','"a"unexpected,title.fr\n','a,\0\n'].entries())test("rejects ambiguous CSV header "+index,()=>{expect(()=>inventoryCsvHeader(value,",")).toThrow();});
