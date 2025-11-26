/**
 * next-sitemap Configuration
 * Integrated with seo-utils for centralized SEO management
 * Follows 2025 SEO best practices including image sitemaps
 */

function getBaseUrl() {
  if (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '');
  }
  return 'https://nearbypetcare.com';
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
module.exports = {
  siteUrl: getBaseUrl(),
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    '/server-sitemap-index.xml',
    '/admin/*',
    '/api/*',
    '/private/*',
    // Exclude routes we're manually adding via additionalPaths to prevent duplicates
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
    const fs = require('fs');
    const path = require('path');

    const formatDate = (date) => {
      if (!date) return new Date().toISOString().split('T')[0];
      const d = new Date(date);
      return d.toISOString().split('T')[0];
    };

    // Try to import seo-utils for makeSitemapEntry
    let seoUtils = null;
    try {
      seoUtils = await safeImport('./lib/seo-utils.js', './lib/seo-utils.ts', './lib/seo-utils');
    } catch (e) {
      // Fallback to manual entry creation
    }

    const createEntry = (path, priority = 0.8, changeFrequency = 'weekly', lastModified, image) => {
      const entry = {
        loc: `${baseUrl}${path}`,
        lastmod: formatDate(lastModified || now),
        changefreq: changeFrequency,
        priority,
      };

      // Add image sitemap support (2025 best practice)
      // Only add image if it's a valid URL (not 'undefined')
      if (image && image !== 'undefined' && image !== 'null' && image !== '/og-image.png') {
        entry.images = [{
          loc: image.startsWith('http') ? image : `${baseUrl}${image.startsWith('/') ? image : '/' + image}`,
          title: path,
          caption: path,
        }];
      }

      return entry;
    };

    const staticRoutes = [
      createEntry('/', 1.0, 'daily', now, '/og-image.png'),
      createEntry('/blog', 0.9, 'daily', now, '/og-image.png'),
      createEntry('/pet-care-tips', 0.9, 'weekly', now, '/og-image.png'),
      createEntry('/pet-nutrition', 0.9, 'weekly', now, '/og-image.png'),
      createEntry('/pet-health', 0.9, 'weekly', now, '/og-image.png'),
      createEntry('/pet-grooming', 0.9, 'weekly', now, '/og-image.png'),
      createEntry('/pet-training', 0.9, 'weekly', now, '/og-image.png'),
      createEntry('/pet-breeds', 0.9, 'monthly', now, '/og-image.png'),
      createEntry('/pet-products', 0.9, 'weekly', now, '/og-image.png'),
      createEntry('/pet-adoption', 0.9, 'weekly', now, '/og-image.png'),
      createEntry('/pet-safety', 0.9, 'monthly', now, '/og-image.png'),
      createEntry('/puppies-kittens', 0.9, 'weekly', now, '/og-image.png'),
      createEntry('/senior-pets', 0.9, 'monthly', now, '/og-image.png'),
      createEntry('/tools', 0.9, 'monthly', now, '/og-image.png'),
      createEntry('/buying-guides', 0.8, 'weekly', now, '/og-image.png'),
      createEntry('/comparisons', 0.8, 'weekly', now, '/og-image.png'),
      createEntry('/community', 0.7, 'daily', now, '/og-image.png'),
      createEntry('/about', 0.6, 'yearly', now, '/og-image.png'),
      createEntry('/contact', 0.5, 'yearly', now, '/og-image.png'),
      createEntry('/privacy', 0.2, 'yearly', now, '/og-image.png'),
      createEntry('/terms', 0.2, 'yearly', now, '/og-image.png'),
      createEntry('/disclaimer', 0.2, 'yearly', now, '/og-image.png'),
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

    // Use seo-utils.makeSitemapEntry if available, otherwise fallback
    const blogPages = Array.isArray(posts)
      ? posts.map((post) => {
        let image = post.image;
        // Fix for "undefined" string or null/undefined value
        if (!image || image === 'undefined' || image === 'null') {
          image = '/og-image.png';
        }
        return createEntry(
          `/blog/${post.slug}`,
          0.7,
          'weekly',
          post.date,
          image
        );
      })
      : [];

    const tipPages = Array.isArray(tips)
      ? tips.map((tip) => {
        let image = tip.image;
        // Fix for "undefined" string or null/undefined value
        if (!image || image === 'undefined' || image === 'null') {
          image = '/og-image.png';
        }
        return createEntry(
          `/pet-care-tips/${tip.slug}`,
          0.8,
          'weekly',
          tip.date || tip.dateModified,
          image
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
      const https = require('https');
      const { URL } = require('url');
      
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


