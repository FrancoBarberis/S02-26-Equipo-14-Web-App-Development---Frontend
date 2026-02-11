import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        // opcional: port: "",
        // opcional: pathname: "/images/**", // si querés restringir paths
      },
    ],
  },

};

export default nextConfig;
