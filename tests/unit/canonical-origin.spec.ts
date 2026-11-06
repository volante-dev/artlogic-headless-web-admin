import {expect,test} from "@playwright/test";
import {isCanonicalAdminOrigin} from "../../lib/bff/canonical-origin";
test("accepts only the configured origin or Next's loopback normalization with the exact original host",()=>{
 const normalized=(host:string)=>new Request("http://localhost:3002/auth/login",{headers:{host}});
 expect(isCanonicalAdminOrigin(normalized("127.0.0.1:3002"),"http://127.0.0.1:3002")).toBe(true);
 for(const host of ["localhost:3002","127.0.0.1:3003","evil.invalid:3002"])expect(isCanonicalAdminOrigin(normalized(host),"http://127.0.0.1:3002")).toBe(false);
 expect(isCanonicalAdminOrigin(new Request("https://admin.example.test/auth/login"),"https://admin.example.test")).toBe(true);
 expect(isCanonicalAdminOrigin(new Request("https://foreign.example.test/auth/login",{headers:{host:"admin.example.test"}}),"https://admin.example.test")).toBe(false);
});
