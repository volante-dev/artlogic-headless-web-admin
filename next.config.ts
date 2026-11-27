import type { NextConfig } from "next";
const languagesBuild=process.env.E2E_LANGUAGES_BUILD==="1",languagesDist=process.env.E2E_LANGUAGES_DIST_DIR;
if(languagesBuild&&!/^\.runtime\/next-languages-admin-[0-9a-f-]{36}$/.test(languagesDist??""))throw new Error("Invalid language test build directory");
const nextConfig: NextConfig = { logging:{incomingRequests:{ignore:[/^\/api\/link-in-bio\/instagram\/callback(?:\?|$)/]}}, distDir: languagesBuild?languagesDist:process.env.DEPLOYMENT_ENV === "test" && process.env.NODE_ENV === "development" ? ".runtime/next-admin-"+(/^[0-9a-f-]{36}$/i.test(process.env.E2E_GALLERY_INSTANCE??"")?process.env.E2E_GALLERY_INSTANCE:"preview") : ".next", cacheComponents: true,
  typescript:{tsconfigPath:languagesBuild?"tsconfig.languages.json":"tsconfig.build.json"}, partialPrefetching: true,
  // The local OAuth callback uses this loopback host; Next dev starts on localhost.
  allowedDevOrigins: ["127.0.0.1"],
  async headers(){return [{source:"/((?!_next/static).*)",headers:[...(process.env.DEPLOYMENT_ENV==="test"?[{key:"X-Robots-Tag",value:"noindex, nofollow, noarchive"}]:[]),{key:"Cache-Control",value:"private, no-store"},{key:"Referrer-Policy",value:"strict-origin"},{key:"X-Content-Type-Options",value:"nosniff"},{key:"X-Frame-Options",value:"DENY"}]},...["/connectors/chatgpt/:path*","/api/connectors/chatgpt/:path*","/api/link-in-bio/instagram/callback"].map(source=>({source,headers:[{key:"Referrer-Policy",value:"no-referrer"},{key:"Cache-Control",value:"private, no-store"}]}))];},
};
export default nextConfig;
