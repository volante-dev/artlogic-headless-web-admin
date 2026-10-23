import type { NextConfig } from "next";
const nextConfig: NextConfig = { cacheComponents: true, partialPrefetching: true,
  async headers(){return [{source:"/((?!_next/static).*)",headers:[{key:"Cache-Control",value:"private, no-store"},{key:"Referrer-Policy",value:"no-referrer"},{key:"X-Content-Type-Options",value:"nosniff"},{key:"X-Frame-Options",value:"DENY"}]}];},
};
export default nextConfig;
