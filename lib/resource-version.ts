/** Resource revisions remain stable when a proxy transforms HTTP ETag. */
export function resourceVersion(headers:Headers):string|null {
  return headers.get("x-resource-version")??headers.get("etag");
}
