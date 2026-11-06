import type { NextConfig } from "next";
const nextConfig: NextConfig = { distDir: process.env.DEPLOYMENT_ENV === "test" && process.env.NODE_ENV === "development" ? ".runtime/next-admin-"+(/^[0-9a-f-]{36}$/i.test(process.env.E2E_GALLERY_INSTANCE??"")?process.env.E2E_GALLERY_INSTANCE:"preview") : ".next", cacheComponents: true, partialPrefetching: true,
  // The local OAuth callback uses this loopback host; Next dev starts on localhost.
  allowedDevOrigins: ["127.0.0.1"],
  async headers(){return [{source:"/((?!_next/static).*)",headers:[...(process.env.DEPLOYMENT_ENV==="test"?[{key:"X-Robots-Tag",value:"noindex, nofollow, noarchive"}]:[]),{key:"Cache-Control",value:"private, no-store"},{key:"Referrer-Policy",value:"strict-origin"},{key:"X-Content-Type-Options",value:"nosniff"},{key:"X-Frame-Options",value:"DENY"}]}];},
};
export default nextConfig;
