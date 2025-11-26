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
      if (image) {
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
          const image = post.image || '/og-image.png';
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
          const image = tip.image || '/og-image.png';
          return createEntry(
            `/pet-care-tips/${tip.slug}`,
            0.8,
            'weekly',
            tip.date || tip.dateModified,
            image
          );
        })
      : [];

    return [...staticRoutes, ...blogPages, ...tipPages];
  },
};


