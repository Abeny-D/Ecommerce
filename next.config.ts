import type { NextConfig } from "next";
import * as url from "node:url";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [new URL("https://files.stripe.com/links/**" )]
    }
};

export default nextConfig;


