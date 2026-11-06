import {test,expect} from "@playwright/test";
import {formsOperation} from "../lib/forms/operations";
const id="70000000-0000-4000-8000-000000000001";
test("forms BFF explicitly allows library methods and refuses arbitrary paths or method substitutions",()=>{
 expect(formsOperation("GET",[])?.query).toContain("cursor");expect(formsOperation("POST",[])?.body).toBe(true);expect(formsOperation("PUT",[id,"draft"])?.ifMatch).toBe(true);expect(formsOperation("POST",[id,"publish"])?.tag).toBe(true);expect(formsOperation("GET",[id,"versions",id])).not.toBeNull();
 for(const [method,path] of [["PATCH",[id]],["POST",[id,"unknown"]],["GET",["..","auth","session"]],["GET",["https://external.test"]],["POST",[id,"versions",id]]] as const)expect(formsOperation(method,path)).toBeNull();
});

test("reception allows only implemented operations and protects each shared write with an ETag",()=>{
 expect(formsOperation("POST",["submissions",id,"attachments",id,"access"])?.body).toBe(true);expect(formsOperation("GET",["administrator-candidates"])?.query).toContain("q");
 expect(formsOperation("DELETE",["submissions",id])?.ifMatch).toBe(true);expect(formsOperation("POST",["submissions","bulk"])?.body).toBe(true);
 expect(formsOperation("GET",["submissions"])?.query).toContain("read");expect(formsOperation("GET",["submissions",id])?.tag).toBe(true);expect(formsOperation("GET",["submissions",id,"notes"])?.query).toContain("cursor");
 for(const [method,path]of [["POST",["submissions",id,"read"]],["POST",["submissions",id,"notes"]],["PATCH",["submissions",id,"workflow"]],["PUT",["views",id]],["DELETE",["views",id]]] as const)expect(formsOperation(method,path)?.ifMatch).toBe(true);
 for(const [method,path]of [["GET",["submissions",id,"read"]],["GET",["views",id,"unscoped"]]] as const)expect(formsOperation(method,path)).toBeNull();
});

test("private export requests are finite and never expose a CSV binary proxy or public access GET",()=>{
 expect(formsOperation("POST",["exports"])?.body).toBe(true);expect(formsOperation("GET",["exports",id])).not.toBeNull();expect(formsOperation("POST",["exports",id,"access"])?.body).toBe(true);
 for(const path of [["exports"],["exports",id,"access"],["exports",id,"download"],["exports","../../private"]])expect(formsOperation("GET",path)).toBeNull();
});

test("notification history is read-only and each retry requires a scoped part and ETag",()=>{expect(formsOperation("GET",["submissions",id,"notifications"])?.query).toEqual(["limit","cursor"]);const retry=formsOperation("POST",["submissions",id,"notifications",id,"retry"]);expect(retry).toMatchObject({body:true,ifMatch:true,tag:true});for(const [method,path]of [["GET",["submissions",id,"notifications",id,"retry"]],["POST",["submissions",id,"notifications","not-a-part","retry"]],["DELETE",["submissions",id,"notifications"]]] as const)expect(formsOperation(method,path)).toBeNull();});

test("library lifecycle writes require conditional authorized routes",()=>{for(const action of ["archive","reopen"])expect(formsOperation("POST",[id,action])).toMatchObject({ifMatch:true,body:true,tag:true});expect(formsOperation("DELETE",[id])).toMatchObject({ifMatch:true});for(const action of ["archive","reopen"])expect(formsOperation("GET",[id,action])).toBeNull();});
