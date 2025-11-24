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
    'Allow: /',
    '',
    'Disallow: /api/',
    '',
    'Disallow: /admin/',
    '',
    'Disallow: /private/',
    '',
    '# Allow Next.js static assets and image loader to be crawled',
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
        allow: ['/', '/_next/static/', '/_next/image', '/_next/static/media/'],
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

    const createEntry = (path, priority = 0.8, changeFrequency = 'weekly', lastModified) => ({
      loc: `${baseUrl}${path}`,
      lastmod: formatDate(lastModified || now),
      changefreq: changeFrequency,
      priority,
    });

    const staticRoutes = [
      createEntry('/', 1.0, 'daily'),
      createEntry('/blog', 0.9, 'daily'),
      createEntry('/pet-care-tips', 0.9, 'weekly'),
      createEntry('/pet-nutrition', 0.9, 'weekly'),
      createEntry('/pet-health', 0.9, 'weekly'),
      createEntry('/pet-grooming', 0.9, 'weekly'),
      createEntry('/pet-training', 0.9, 'weekly'),
      createEntry('/pet-breeds', 0.9, 'monthly'),
      createEntry('/pet-products', 0.9, 'weekly'),
      createEntry('/pet-adoption', 0.9, 'weekly'),
      createEntry('/pet-safety', 0.9, 'monthly'),
      createEntry('/puppies-kittens', 0.9, 'weekly'),
      createEntry('/senior-pets', 0.9, 'monthly'),
      createEntry('/tools', 0.9, 'monthly'),
      createEntry('/buying-guides', 0.8, 'weekly'),
      createEntry('/comparisons', 0.8, 'weekly'),
      createEntry('/community', 0.7, 'daily'),
      createEntry('/about', 0.6, 'yearly'),
      createEntry('/contact', 0.5, 'yearly'),
      createEntry('/privacy', 0.2, 'yearly'),
      createEntry('/terms', 0.2, 'yearly'),
      createEntry('/disclaimer', 0.2, 'yearly'),
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

    const blogPages = Array.isArray(posts)
      ? posts.map((post) => ({
          loc: `${baseUrl}/blog/${post.slug}`,
          lastmod: formatDate(post.date),
          changefreq: 'weekly',
          priority: 0.7,
        }))
      : [];

    const tipPages = Array.isArray(tips)
      ? tips.map((tip) => ({
          loc: `${baseUrl}/pet-care-tips/${tip.slug}`,
          lastmod: formatDate(tip.date),
          changefreq: 'weekly',
          priority: 0.8,
        }))
      : [];

    return [...staticRoutes, ...blogPages, ...tipPages];
  },
};

