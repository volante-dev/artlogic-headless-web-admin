import {test,expect} from "@playwright/test";
import {resourceVersion} from "../lib/resource-version";
test("keeps the application revision when a proxy weakens or removes HTTP ETag",()=>{
 const revision='"site-content-2-'+"a".repeat(64)+'"';
 expect(resourceVersion(new Headers({ETag:"W/"+revision,"X-Resource-Version":revision}))).toBe(revision);
 expect(resourceVersion(new Headers({"X-Resource-Version":revision}))).toBe(revision);
 expect(resourceVersion(new Headers({ETag:revision}))).toBe(revision);
 // A weak representation validator alone is never upgraded to a strong one.
 expect(resourceVersion(new Headers({ETag:"W/"+revision}))).toBe("W/"+revision);
 expect(resourceVersion(new Headers())).toBeNull();
});
