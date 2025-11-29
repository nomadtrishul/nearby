import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Compression
  compress: true,
  
  // PoweredBy header removal for security
  poweredByHeader: false,
  
  // Note: SWC minification is enabled by default in Next.js 16+
  
  // Redirects for SEO (if needed)
  async redirects() {
    return [];
  },
  
  // Experimental features for better performance
  experimental: {
    optimizeCss: true, // Optimizes CSS to reduce render-blocking
    optimizePackageImports: ['@/components', '@/lib'], // Tree-shakes unused exports
  },
  
  // Note: Next.js automatically optimizes font loading when using next/font/google
  
  // Optimize images - Mobile-first sizes prioritized
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Cloudinary and external image sources configuration
    remotePatterns: [
      {
        protocol: 'https' as const,
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https' as const,
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

