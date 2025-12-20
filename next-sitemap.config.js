/**
 * next-sitemap Configuration
 * Integrated with seo-utils for centralized SEO management
 * Follows 2025 SEO best practices including image sitemaps
 */

import fs from 'fs';
import path from 'path';
import { URL } from 'url';
import https from 'https';

function getBaseUrl() {
  if (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '');
  }
  return 'https://www.nearbypetcare.com';
}

function buildRobotsTxt() {
  const siteUrl = getBaseUrl();

  return [
    'User-agent: *',
    '',
    'Disallow: /api/',
    '',
    'Disallow: /admin/',
    '',
    'Disallow: /private/',
    '',
    'Allow: /_next/static/',
    '',
    'Allow: /_next/image',
    '',
    'Allow: /_next/static/media/',
    '',
    `Sitemap: ${siteUrl}/sitemap.xml`,
  ].join('\n');
}

async function safeImport(...candidates) {
  for (const candidate of candidates) {
    try {
      const mod = await import(candidate);
      return mod;
    } catch (e) {
      // ignore and try next candidate
    }
  }
  return null;
}

/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: getBaseUrl(),
  generateRobotsTxt: true,
  generateIndexSitemap: true, // Enable index sitemap for splitting >50k URLs
  sitemapSize: 50000, // Split sitemap when exceeding 50k URLs (sitemap.org limit)
  exclude: [
    '/server-sitemap-index.xml',
    '/admin/*',
    '/api/*',
    '/private/*',
    '/manifest.webmanifest', // Exclude web manifest file
    // Exclude routes we're manually adding via additionalPaths to prevent duplicates
    '/',
    '/blog',
    '/pet-care-tips',
    '/pet-nutrition',
    '/pet-health',
    '/pet-grooming',
    '/pet-training',
    '/pet-breeds',
    '/pet-products',
    '/pet-adoption',
    '/pet-safety',
    '/pet-behavior',
    '/puppies-kittens',
    '/senior-pets',
    '/tools',
    '/buying-guides',
    '/comparisons',
    '/community',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/disclaimer',
    '/editorial-guidelines',
    '/sources',
    '/tools/*',
    '/pet-breeds/*',
    '/pet-health/*',
    '/pet-grooming/*',
    '/pet-training/*',
    '/pet-nutrition/*',
    '/pet-safety/*',
    '/pet-products/*',
    '/pet-adoption/*',
    '/pet-behavior/*',
    '/puppies-kittens/*',
    '/senior-pets/*',
    '/blog/*', // Exclude blog posts (added manually)
    '/pet-care-tips/*', // Exclude pet tips (added manually)
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: [
          '/_next/static/',
          '/_next/image',
          '/_next/static/media/',
        ],
        disallow: ['/api/', '/admin/', '/private/'],
      },
    ],
    transformRobotsTxt: async () => buildRobotsTxt(),
  },
  additionalPaths: async () => {
    const baseUrl = getBaseUrl();
    const now = new Date();

    const formatDate = (date) => {
      if (!date) return new Date().toISOString().split('T')[0];
      const d = new Date(date);
      return d.toISOString().split('T')[0];
    };

    // Import seo-utils for centralized SEO and sitemap generation
    let seoUtils = null;
    try {
      seoUtils = await safeImport('./lib/seo-utils.js', './lib/seo-utils.ts', './lib/seo-utils');
    } catch (e) {
      console.warn('⚠️ Could not import seo-utils, falling back to manual entry creation');
    }

    // Helper function to validate and normalize image URLs
    const normalizeImage = (image) => {
      // Check if image is valid - handle undefined, null, and string "undefined"
      if (!image || image === undefined || image === null) return '/og-image.png';
      if (typeof image !== 'string') return '/og-image.png';
      const trimmed = image.trim();
      if (trimmed.length === 0) return '/og-image.png';
      if (trimmed === 'undefined' || trimmed === 'null') return '/og-image.png';
      if (trimmed.includes('undefined') || trimmed.includes('null')) return '/og-image.png';
      // Ensure it starts with / or http/https (Cloudinary URLs start with https://)
      if (!trimmed.startsWith('/') && !trimmed.startsWith('http://') && !trimmed.startsWith('https://')) {
        return '/og-image.png';
      }
      return trimmed;
    };

    // Helper to create sitemap entry using centralized utilities
    const createEntry = (path, priority = 0.8, changeFrequency = 'weekly', lastModified, image, title, description) => {
      // Normalize image first - ensure it's always a valid string (never undefined or "undefined")
      const normalizedImage = normalizeImage(image);

      // Use centralized utilities if available
      if (seoUtils && seoUtils.mergeSeo && seoUtils.makeSitemapEntry) {
        // Only pass image if it's a valid absolute HTTPS URL (Cloudinary URLs start with https://)
        // Strict validation: must be a valid HTTPS URL string
        let imageToPass = undefined;
        if (normalizedImage &&
          typeof normalizedImage === 'string' &&
          normalizedImage.trim().length > 0 &&
          normalizedImage.startsWith('https://') &&
          normalizedImage !== '/og-image.png') {
          // Final validation: ensure it's a valid URL
          try {
            const testUrl = new URL(normalizedImage);
            if (testUrl.protocol === 'https:') {
              imageToPass = normalizedImage;
            }
          } catch (e) {
            // Invalid URL, don't pass it
            imageToPass = undefined;
          }
        }

        // Merge SEO data using centralized utility
        const merged = seoUtils.mergeSeo({
          title: title || path,
          description: description || '',
          pathname: path,
          type: 'website',
          ...(imageToPass && { image: imageToPass }), // Only pass if valid HTTPS URL
        });

        // Create sitemap entry using centralized utility
        const entry = seoUtils.makeSitemapEntry(merged, {
          priority,
          changefreq: changeFrequency,
          lastmod: lastModified ? formatDate(lastModified) : undefined,
        });

        // Image sitemap disabled - remove images array if present
        if (entry.images) {
          delete entry.images;
        }

        return entry;
      }

      // Fallback to manual entry creation if seo-utils not available
      const entry = {
        loc: `${baseUrl}${path}`,
        lastmod: formatDate(lastModified || now),
        changefreq: changeFrequency,
        priority,
      };

      // Image sitemap disabled - images are optional and search engines can discover them from page content
      // No image tags will be added to sitemap entries

      return entry;
    };

    // Static routes with titles and descriptions for better SEO
    const staticRoutes = [
      createEntry('/', 1.0, 'daily', now, '/og-image.png', 'Nearby Pet Care - Professional Pet Care Services Near You', 'Find trusted pet care services near you. Professional grooming, boarding, daycare, and training services from experienced professionals.'),
      createEntry('/blog', 0.9, 'daily', now, '/og-image.png', 'Pet Care Blog | Nearby Pet Care', 'Expert pet care advice, tips, and guides for pet owners. Learn about pet health, nutrition, grooming, training, and more.'),
      createEntry('/pet-care-tips', 0.9, 'weekly', now, '/og-image.png', 'Pet Care Tips | Nearby Pet Care', 'Practical pet care tips and step-by-step guides to help you care for your pets better.'),
      createEntry('/pet-nutrition', 0.9, 'weekly', now, '/og-image.png', 'Pet Nutrition Guide | Nearby Pet Care', 'Comprehensive guides on pet nutrition, feeding schedules, and dietary requirements for dogs, cats, and other pets.'),
      createEntry('/pet-health', 0.9, 'weekly', now, '/og-image.png', 'Pet Health Information | Nearby Pet Care', 'Essential pet health information, common diseases, vaccination schedules, and when to see a veterinarian.'),
      createEntry('/pet-grooming', 0.9, 'weekly', now, '/og-image.png', 'Pet Grooming Guides | Nearby Pet Care', 'Complete pet grooming guides including bathing, brushing, nail trimming, and dental care for your pets.'),
      createEntry('/pet-training', 0.9, 'weekly', now, '/og-image.png', 'Pet Training Tips | Nearby Pet Care', 'Effective pet training techniques and tips for dogs, cats, and other pets.'),
      createEntry('/pet-breeds', 0.9, 'monthly', now, '/og-image.png', 'Pet Breeds Information | Nearby Pet Care', 'Comprehensive information about different pet breeds including dogs, cats, birds, and exotic pets.'),
      createEntry('/pet-products', 0.9, 'weekly', now, '/og-image.png', 'Pet Products Reviews | Nearby Pet Care', 'Honest reviews and recommendations for pet products including food, beds, toys, and accessories.'),
      createEntry('/pet-adoption', 0.9, 'weekly', now, '/og-image.png', 'Pet Adoption Guide | Nearby Pet Care', 'Complete guide to pet adoption including checklists, preparation tips, and transitioning rescue pets.'),
      createEntry('/pet-safety', 0.9, 'monthly', now, '/og-image.png', 'Pet Safety Tips | Nearby Pet Care', 'Essential pet safety tips and guidelines to keep your pets safe at home and outdoors.'),
      createEntry('/puppies-kittens', 0.9, 'weekly', now, '/og-image.png', 'Puppy and Kitten Care | Nearby Pet Care', 'Complete guides for caring for puppies and kittens including feeding, training, and health care.'),
      createEntry('/senior-pets', 0.9, 'monthly', now, '/og-image.png', 'Senior Pet Care | Nearby Pet Care', 'Specialized care guides for senior pets including health management and quality of life improvements.'),
      createEntry('/tools', 0.9, 'monthly', now, '/og-image.png', 'Pet Care Tools | Nearby Pet Care', 'Useful tools and calculators for pet owners including feeding calculators, weight trackers, and more.'),
      createEntry('/buying-guides', 0.8, 'weekly', now, '/og-image.png', 'Pet Product Buying Guides | Nearby Pet Care', 'Expert buying guides to help you choose the best products for your pets.'),
      createEntry('/comparisons', 0.8, 'weekly', now, '/og-image.png', 'Pet Product Comparisons | Nearby Pet Care', 'Side-by-side comparisons of popular pet products to help you make informed decisions.'),
      createEntry('/community', 0.7, 'daily', now, '/og-image.png', 'Pet Owner Community | Nearby Pet Care', 'Join our community of pet owners sharing stories, tips, and experiences.'),
      createEntry('/about', 0.6, 'yearly', now, '/og-image.png', 'About Us | Nearby Pet Care', 'Learn about Nearby Pet Care, an independent platform providing trusted pet care information and education.'),
      createEntry('/contact', 0.5, 'yearly', now, '/og-image.png', 'Contact Us | Nearby Pet Care', 'Get in touch with Nearby Pet Care for questions, feedback, or support.'),
      createEntry('/privacy', 0.2, 'yearly', now, '/og-image.png', 'Privacy Policy | Nearby Pet Care', 'Privacy policy and data protection information for Nearby Pet Care.'),
      createEntry('/terms', 0.2, 'yearly', now, '/og-image.png', 'Terms of Service | Nearby Pet Care', 'Terms of service and usage guidelines for Nearby Pet Care.'),
      createEntry('/disclaimer', 0.2, 'yearly', now, '/og-image.png', 'Disclaimer | Nearby Pet Care', 'Disclaimer and legal information for Nearby Pet Care content.'),
    ];

    let posts = [];
    let tips = [];

    const blogModule = await safeImport(
      './lib/blog.js',
      './lib/blog/index.js',
      './lib/blog',
      './lib/blog.ts',
    );

    if (blogModule && (blogModule.getAllPosts || blogModule.default?.getAllPosts)) {
      const fn = blogModule.getAllPosts || blogModule.default.getAllPosts;
      try {
        posts = await Promise.resolve(fn());
      } catch (e) {
        posts = [];
      }
    }

    const tipsModule = await safeImport(
      './lib/petTips.js',
      './lib/petTips/index.js',
      './lib/petTips',
      './lib/petTips.ts',
    );

    if (tipsModule && (tipsModule.getAllTips || tipsModule.default?.getAllTips)) {
      const fn = tipsModule.getAllTips || tipsModule.default.getAllTips;
      try {
        tips = await Promise.resolve(fn());
      } catch (e) {
        tips = [];
      }
    }

    // Use centralized SEO utilities for blog pages
    const blogPages = Array.isArray(posts)
      ? posts.map((post) => {
        // Normalize image - createEntry will handle validation, but normalize here too
        const image = normalizeImage(post.image);
        // Use centralized lastmod calculation: prefer modifiedTime > publishedTime
        const lastmod = seoUtils && seoUtils.calculateLastmod
          ? seoUtils.calculateLastmod(undefined, post.date)
          : formatDate(post.date);
        return createEntry(
          `/blog/${post.slug}`,
          0.7,
          'weekly',
          lastmod,
          image,
          post.title,
          post.excerpt
        );
      })
      : [];

    // Use centralized SEO utilities for tip pages
    const tipPages = Array.isArray(tips)
      ? tips.map((tip) => {
        // Normalize image - createEntry will handle validation, but normalize here too
        const image = normalizeImage(tip.image);
        // Use centralized lastmod calculation: prefer modifiedTime > publishedTime
        const lastmod = seoUtils && seoUtils.calculateLastmod
          ? seoUtils.calculateLastmod(undefined, tip.date)
          : formatDate(tip.date);
        return createEntry(
          `/pet-care-tips/${tip.slug}`,
          0.7,
          'weekly',
          lastmod,
          image,
          tip.title,
          tip.excerpt
        );
      })
      : [];

    // Discover tool pages dynamically
    const toolPages = [];
    try {
      const toolsDir = path.join(process.cwd(), 'app', 'tools');
      if (fs.existsSync(toolsDir)) {
        const toolDirs = fs.readdirSync(toolsDir, { withFileTypes: true })
          .filter(dirent => dirent.isDirectory())
          .map(dirent => dirent.name);

        for (const toolDir of toolDirs) {
          const toolPagePath = path.join(toolsDir, toolDir, 'page.tsx');
          if (fs.existsSync(toolPagePath)) {
            toolPages.push(createEntry(`/tools/${toolDir}`, 0.8, 'monthly', now, '/og-image.png'));
          }
        }
      }
    } catch (e) {
      // Silently continue if tool discovery fails
    }

    // Discover breed pages dynamically
    const breedPages = [];
    try {
      const breedsDir = path.join(process.cwd(), 'app', 'pet-breeds');
      if (fs.existsSync(breedsDir)) {
        const categoryDirs = fs.readdirSync(breedsDir, { withFileTypes: true })
          .filter(dirent => dirent.isDirectory())
          .map(dirent => dirent.name);

        for (const categoryDir of categoryDirs) {
          const categoryPath = path.join(breedsDir, categoryDir);

          // Add category page if it exists (e.g., /pet-breeds/birds, /pet-breeds/cats)
          const categoryPagePath = path.join(categoryPath, 'page.tsx');
          if (fs.existsSync(categoryPagePath)) {
            breedPages.push(createEntry(`/pet-breeds/${categoryDir}`, 0.8, 'monthly', now, '/og-image.png'));
          }

          // Add individual breed pages
          const breedDirs = fs.readdirSync(categoryPath, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);

          for (const breedDir of breedDirs) {
            const breedPagePath = path.join(categoryPath, breedDir, 'page.tsx');
            if (fs.existsSync(breedPagePath)) {
              breedPages.push(createEntry(`/pet-breeds/${categoryDir}/${breedDir}`, 0.7, 'monthly', now, '/og-image.png'));
            }
          }
        }
      }
    } catch (e) {
      // Silently continue if breed discovery fails
    }

    // Discover sub-pages under pet-* routes dynamically
    const petSubPages = [];
    const petRoutes = ['pet-health', 'pet-grooming', 'pet-training', 'pet-nutrition', 'pet-safety', 'pet-products', 'pet-adoption', 'pet-behavior', 'puppies-kittens', 'senior-pets'];

    try {
      for (const route of petRoutes) {
        const routeDir = path.join(process.cwd(), 'app', route);
        if (fs.existsSync(routeDir)) {
          const subDirs = fs.readdirSync(routeDir, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);

          for (const subDir of subDirs) {
            // Skip if it's a Next.js special directory or already handled
            if (subDir.startsWith('_') || subDir === 'layout.tsx' || subDir === 'loading.tsx' || subDir === 'error.tsx') {
              continue;
            }

            const subPagePath = path.join(routeDir, subDir, 'page.tsx');
            if (fs.existsSync(subPagePath)) {
              petSubPages.push(createEntry(`/${route}/${subDir}`, 0.7, 'monthly', now, '/og-image.png'));
            }
          }
        }
      }
    } catch (e) {
      // Silently continue if pet sub-pages discovery fails
    }

    const allPaths = [...staticRoutes, ...blogPages, ...tipPages, ...toolPages, ...breedPages, ...petSubPages];

    // Submit URLs to IndexNow after sitemap generation
    // IndexNow allows instant notification to search engines (Bing, Yandex, etc.)
    // Note: This submits URLs from additionalPaths. The full sitemap (including auto-discovered routes)
    // will be submitted after the sitemap file is generated via a post-build script.
    try {
      const INDEXNOW_API_URL = 'https://api.indexnow.org/IndexNow';
      const INDEXNOW_KEY = 'd482a54aae6e44a0b737708149ca3bce'; // From public/d482a54aae6e44a0b737708149ca3bce.txt
      const hostname = baseUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');

      // Extract URLs from sitemap entries
      const urls = allPaths.map(entry => entry.loc);

      // IndexNow supports up to 10,000 URLs per request
      const urlsToSubmit = urls.slice(0, 10000);

      const payload = {
        host: hostname,
        key: INDEXNOW_KEY,
        urlList: urlsToSubmit,
      };

      // Submit to IndexNow using Node.js https module (non-blocking, don't fail build if it fails)
      const apiUrl = new URL(INDEXNOW_API_URL);
      const postData = JSON.stringify(payload);

      const options = {
        hostname: apiUrl.hostname,
        port: 443,
        path: apiUrl.pathname,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(postData),
        },
        timeout: 10000, // 10 second timeout
      };

      const req = https.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => {
          if (res.statusCode === 200 || res.statusCode === 202) {
            console.log(`✅ IndexNow: Successfully submitted ${urlsToSubmit.length} URLs from additionalPaths (Status: ${res.statusCode})`);
            console.log(`ℹ️  Note: Full sitemap URLs will be submitted after sitemap generation completes.`);
          } else {
            console.warn(`⚠️ IndexNow: Submission returned status ${res.statusCode}${data ? ' - ' + data : ''}`);
          }
        });
      });

      req.on('error', (error) => {
        console.warn(`⚠️ IndexNow: Error submitting URLs - ${error.message}`);
      });

      req.on('timeout', () => {
        req.destroy();
        console.warn(`⚠️ IndexNow: Request timeout after ${options.timeout}ms`);
      });

      req.write(postData);
      req.end();

      if (urls.length > 10000) {
        console.warn(`⚠️ IndexNow: ${urls.length} URLs exceed limit of 10,000. Submitted first 10,000 URLs.`);
      }
    } catch (e) {
      // Silently continue if IndexNow submission fails
      // This prevents build failures if IndexNow is unavailable
      console.warn(`⚠️ IndexNow: Failed to submit URLs - ${e.message || 'Unknown error'}`);
    }

    return allPaths;
  },
};


