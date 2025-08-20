import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',  // Enable static HTML export
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,  // Required for static export
    remotePatterns: [
      { hostname: 'res.cloudinary.com', protocol: 'https' },
      { hostname: 'avatars.githubusercontent.com', protocol: 'https' },
      { hostname: 'imgur.com', protocol: 'https' },
      { hostname: 'media2.dev.to', protocol: 'https' },
    ],
  },
};

export default nextConfig;
