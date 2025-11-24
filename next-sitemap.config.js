function getBaseUrl() {
  if (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  return 'https://nearbypetcare.com';
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: getBaseUrl(),
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    '/server-sitemap-index.xml',
    // Exclude routes that are manually added in additionalPaths to prevent duplicates
    '/about',
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
    '/contact',
    '/privacy',
    '/terms',
    '/disclaimer',
    '/editorial-guidelines',
    '/sources',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/private/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      {
        userAgent: 'bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/private/'],
      },
      {
        userAgent: 'Slurp',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
  },
  additionalPaths: async (config) => {
    // Use dynamic imports for ES modules - TypeScript files are compiled to JS during build
    const { getAllPosts } = await import('./lib/blog.ts');
    const { getAllTips } = await import('./lib/petTips.ts');
    
    const baseUrl = getBaseUrl();
    const now = new Date();
    
    // Helper function to format dates to YYYY-MM-DD
    const formatDate = (date) => {
      if (!date) return new Date().toISOString().split('T')[0];
      const d = new Date(date);
      return d.toISOString().split('T')[0];
    };

    // Helper function to create sitemap entries
    const createEntry = (path, priority, changeFrequency, lastModified) => ({
      loc: `${baseUrl}${path}`,
      lastmod: formatDate(lastModified || now),
      changefreq: changeFrequency,
      priority,
    });

    const staticRoutes = [
      // Root
      createEntry('/', 1.0, 'daily'),
      
      // Existing pages
      createEntry('/blog', 0.9, 'daily'),
      createEntry('/pet-care-tips', 0.9, 'weekly'),
      
      // Core Category Pillars
      createEntry('/pet-nutrition', 0.9, 'weekly'),
      createEntry('/pet-nutrition/pet-nutrition-diet-plan', 0.9, 'weekly'),
      createEntry('/pet-nutrition/best-pet-food-ingredients-guide', 0.8, 'weekly'),
      createEntry('/pet-nutrition/homemade-pet-food-recipes-guide', 0.8, 'weekly'),
      createEntry('/pet-nutrition/pet-food-allergies-elimination-diet', 0.8, 'weekly'),
      createEntry('/pet-nutrition/pet-feeding-portion-size-calculator', 0.8, 'monthly'),
      createEntry('/pet-nutrition/raw-vs-cooked-pet-diet-pros-cons', 0.8, 'weekly'),
      createEntry('/pet-nutrition/toxic-foods-for-pets-complete-list', 0.8, 'weekly'),
      createEntry('/pet-nutrition/best-pet-supplements-guide', 0.8, 'weekly'),
      createEntry('/pet-nutrition/wet-vs-dry-vs-fresh-pet-food', 0.8, 'weekly'),
      createEntry('/pet-nutrition/pet-weight-management-guide', 0.8, 'weekly'),
      createEntry('/pet-nutrition/pet-feeding-schedule-guide', 0.8, 'weekly'),
      
      createEntry('/pet-health', 0.9, 'weekly'),
      createEntry('/pet-health/pillar', 0.9, 'weekly'),
      createEntry('/pet-health/common-diseases', 0.8, 'weekly'),
      createEntry('/pet-health/vaccination-schedules', 0.8, 'weekly'),
      createEntry('/pet-health/parasite-control-ticks-fleas-worms', 0.8, 'weekly'),
      createEntry('/pet-health/first-aid-for-pets', 0.8, 'weekly'),
      createEntry('/pet-health/skin-and-coat-health', 0.8, 'weekly'),
      createEntry('/pet-health/signs-your-pet-needs-a-vet', 0.8, 'weekly'),
      createEntry('/pet-health/mental-health-anxiety', 0.8, 'weekly'),
      createEntry('/pet-health/diagnostics-and-tests', 0.8, 'weekly'),
      createEntry('/pet-health/seasonal-health-tips', 0.8, 'weekly'),
      
      createEntry('/pet-grooming', 0.9, 'weekly'),
      createEntry('/pet-grooming/pillar', 0.9, 'weekly'),
      createEntry('/pet-grooming/bathing-guides', 0.8, 'weekly'),
      createEntry('/pet-grooming/brushing-and-coat-care', 0.8, 'weekly'),
      createEntry('/pet-grooming/nail-trimming', 0.8, 'weekly'),
      createEntry('/pet-grooming/ear-and-eye-care', 0.8, 'weekly'),
      createEntry('/pet-grooming/dental-care', 0.8, 'weekly'),
      createEntry('/pet-grooming/grooming-tools-reviews', 0.8, 'weekly'),
      createEntry('/pet-grooming/haircuts-and-styles', 0.8, 'weekly'),
      
      createEntry('/pet-training', 0.9, 'weekly'),
      createEntry('/pet-training/pillar', 0.9, 'weekly'),
      createEntry('/pet-training/obedience-training', 0.8, 'weekly'),
      createEntry('/pet-training/potty-training', 0.8, 'weekly'),
      createEntry('/pet-training/aggression-and-anxiety', 0.8, 'weekly'),
      createEntry('/pet-training/crate-training', 0.8, 'weekly'),
      createEntry('/pet-training/socialisation', 0.8, 'weekly'),
      createEntry('/pet-training/training-tools-reviews', 0.8, 'weekly'),
      
      createEntry('/pet-behavior', 0.9, 'weekly'),
      createEntry('/pet-behavior/pillar', 0.9, 'weekly'),
      createEntry('/pet-behavior/how-to-reduce-separation-anxiety-in-pets', 0.8, 'weekly'),
      createEntry('/pet-behavior/how-to-understand-pet-body-language', 0.8, 'weekly'),
      createEntry('/pet-behavior/how-to-stop-destructive-chewing', 0.8, 'weekly'),
      
      createEntry('/pet-breeds', 0.9, 'monthly'),
      createEntry('/pet-breeds/dogs', 0.8, 'monthly'),
      createEntry('/pet-breeds/dogs/german-shepherd', 0.6, 'monthly'),
      createEntry('/pet-breeds/cats', 0.8, 'monthly'),
      createEntry('/pet-breeds/small-mammals', 0.8, 'monthly'),
      createEntry('/pet-breeds/birds', 0.8, 'monthly'),
      createEntry('/pet-breeds/exotics', 0.8, 'monthly'),
      
      createEntry('/pet-products', 0.9, 'weekly'),
      createEntry('/pet-products/pillar', 0.9, 'weekly'),
      createEntry('/pet-products/best-dog-food', 0.8, 'weekly'),
      createEntry('/pet-products/best-cat-litter', 0.8, 'weekly'),
      createEntry('/pet-products/best-grooming-tools', 0.8, 'weekly'),
      createEntry('/pet-products/best-pet-beds', 0.8, 'weekly'),
      createEntry('/pet-products/comparisons', 0.8, 'weekly'),
      
      createEntry('/pet-adoption', 0.9, 'weekly'),
      createEntry('/pet-adoption/pillar', 0.9, 'weekly'),
      createEntry('/pet-adoption/preparing-home', 0.8, 'weekly'),
      createEntry('/pet-adoption/transitioning-a-rescue', 0.8, 'weekly'),
      createEntry('/pet-adoption/adoption-checklist', 0.8, 'weekly'),
      
      createEntry('/pet-safety', 0.9, 'monthly'),
      createEntry('/pet-safety/pillar', 0.9, 'monthly'),
      createEntry('/pet-safety/travel-with-pets', 0.8, 'monthly'),
      createEntry('/pet-safety/home-proofing', 0.8, 'monthly'),
      createEntry('/pet-safety/emergency-preparedness', 0.8, 'monthly'),
      createEntry('/pet-safety/seasonal-care', 0.8, 'monthly'),
      
      createEntry('/puppies-kittens', 0.9, 'weekly'),
      createEntry('/puppies-kittens/pillar', 0.9, 'weekly'),
      createEntry('/puppies-kittens/first-30-days', 0.8, 'weekly'),
      createEntry('/puppies-kittens/vaccination-timeline', 0.8, 'weekly'),
      createEntry('/puppies-kittens/training-basics', 0.8, 'weekly'),
      
      createEntry('/senior-pets', 0.9, 'monthly'),
      createEntry('/senior-pets/pillar', 0.9, 'monthly'),
      createEntry('/senior-pets/mobility-support', 0.8, 'monthly'),
      createEntry('/senior-pets/senior-diet-guides', 0.8, 'monthly'),
      createEntry('/senior-pets/end-of-life-care', 0.8, 'monthly'),
      
      // Tools & Interactive Pages
      createEntry('/tools', 0.9, 'monthly'),
      createEntry('/tools/weight-calculator', 0.8, 'monthly'),
      createEntry('/tools/feeding-portion-calculator', 0.8, 'monthly'),
      createEntry('/tools/breed-selector', 0.8, 'monthly'),
      createEntry('/tools/vaccine-reminder', 0.8, 'monthly'),
      createEntry('/tools/age-calculator', 0.8, 'monthly'),
      createEntry('/tools/exercise-calculator', 0.8, 'monthly'),
      createEntry('/tools/cost-calculator', 0.8, 'monthly'),
      createEntry('/tools/calorie-calculator', 0.8, 'monthly'),
      createEntry('/tools/dog-food-serving-size-calculator', 0.8, 'monthly'),
      createEntry('/tools/cat-food-serving-size-calculator', 0.8, 'monthly'),
      createEntry('/tools/puppy-feeding-schedule-generator', 0.8, 'monthly'),
      createEntry('/tools/kitten-feeding-schedule-generator', 0.8, 'monthly'),
      createEntry('/tools/wet-vs-dry-food-comparison', 0.8, 'monthly'),
      createEntry('/tools/pet-treat-calorie-counter', 0.8, 'monthly'),
      createEntry('/tools/toxic-foods-checker', 0.8, 'monthly'),
      createEntry('/tools/safe-human-foods-checker', 0.8, 'monthly'),
      createEntry('/tools/pet-hydration-calculator', 0.8, 'monthly'),
      createEntry('/tools/raw-diet-quantity-planner', 0.8, 'monthly'),
      createEntry('/tools/feeding-cost-calculator', 0.8, 'monthly'),
      createEntry('/tools/multi-pet-feeding-planner', 0.8, 'monthly'),
      createEntry('/tools/homemade-food-nutrition-analyzer', 0.8, 'monthly'),
      createEntry('/tools/senior-pet-diet-planner', 0.8, 'monthly'),
      createEntry('/tools/weight-based-feeding-chart-maker', 0.8, 'monthly'),
      createEntry('/tools/diet-transition-timeline-tool', 0.8, 'monthly'),
      createEntry('/tools/nutrient-deficiency-checker', 0.8, 'monthly'),
      createEntry('/tools/vitamin-supplement-suggestion-tool', 0.8, 'monthly'),
      createEntry('/tools/symptom-checker', 0.8, 'monthly'),
      createEntry('/tools/parasite-risk-assessment', 0.8, 'monthly'),
      createEntry('/tools/vaccination-schedule-generator', 0.8, 'monthly'),
      createEntry('/tools/deworming-reminder', 0.8, 'monthly'),
      createEntry('/tools/flea-tick-prevention-planner', 0.8, 'monthly'),
      createEntry('/tools/pet-bmi-body-condition-score', 0.8, 'monthly'),
      createEntry('/tools/ideal-weight-checker', 0.8, 'monthly'),
      createEntry('/tools/pregnancy-due-date-calculator', 0.8, 'monthly'),
      createEntry('/tools/heat-cycle-tracker', 0.8, 'monthly'),
      createEntry('/tools/medication-dosage-estimator', 0.8, 'monthly'),
      createEntry('/tools/skin-allergy-checker', 0.8, 'monthly'),
      createEntry('/tools/dental-health-score-tool', 0.8, 'monthly'),
      createEntry('/tools/rabies-exposure-checker', 0.8, 'monthly'),
      createEntry('/tools/first-aid-kit-checklist-generator', 0.8, 'monthly'),
      createEntry('/tools/chronic-disease-management-planner', 0.8, 'monthly'),
      createEntry('/tools/pet-insurance-cost-estimator', 0.8, 'monthly'),
      createEntry('/tools/emergency-symptoms-checker', 0.8, 'monthly'),
      createEntry('/tools/senior-health-checklist-generator', 0.8, 'monthly'),
      createEntry('/tools/multivitamin-needs-analyzer', 0.8, 'monthly'),
      createEntry('/tools/grooming-schedule-generator', 0.8, 'monthly'),
      createEntry('/tools/coat-type-identification-tool', 0.8, 'monthly'),
      createEntry('/tools/best-shampoo-selector', 0.8, 'monthly'),
      createEntry('/tools/bath-frequency-calculator', 0.8, 'monthly'),
      createEntry('/tools/nail-length-checker', 0.8, 'monthly'),
      createEntry('/tools/fur-shedding-level-checker', 0.8, 'monthly'),
      createEntry('/tools/ear-cleaning-reminder-tool', 0.8, 'monthly'),
      createEntry('/tools/grooming-cost-estimator', 0.8, 'monthly'),
      createEntry('/tools/pet-smell-diagnosis-tool', 0.8, 'monthly'),
      createEntry('/tools/grooming-tools-recommender', 0.8, 'monthly'),
      createEntry('/tools/behavior-problem-diagnosis-tool', 0.8, 'monthly'),
      createEntry('/tools/puppy-potty-training-schedule-generator', 0.8, 'monthly'),
      createEntry('/tools/barking-reason-analyzer', 0.8, 'monthly'),
      createEntry('/tools/separation-anxiety-risk-checker', 0.8, 'monthly'),
      createEntry('/tools/activity-exercise-level-planner', 0.8, 'monthly'),
      createEntry('/tools/training-progress-tracker', 0.8, 'monthly'),
      createEntry('/tools/obedience-level-assessment-tool', 0.8, 'monthly'),
      createEntry('/tools/aggression-type-checker', 0.8, 'monthly'),
      createEntry('/tools/socialization-readiness-test', 0.8, 'monthly'),
      createEntry('/tools/intelligence-play-style-test', 0.8, 'monthly'),
      
      // Money / Monetization Pages
      createEntry('/buying-guides', 0.8, 'weekly'),
      createEntry('/buying-guides/best-dog-food-for-small-breeds', 0.8, 'weekly'),
      createEntry('/buying-guides/best-litter-for-odour-control', 0.8, 'weekly'),
      createEntry('/buying-guides/best-pet-insurance', 0.8, 'weekly'),
      
      createEntry('/comparisons', 0.8, 'weekly'),
      createEntry('/comparisons/royal-canin-vs-pedigree', 0.8, 'weekly'),
      createEntry('/comparisons/wet-vs-dry-food', 0.8, 'weekly'),
      
      // Community & Fresh Content
      createEntry('/community', 0.7, 'daily'),
      createEntry('/community/latest-research', 0.7, 'weekly'),
      createEntry('/community/trends-2025', 0.7, 'weekly'),
      createEntry('/community/pet-owner-stories', 0.7, 'weekly'),
      
      // Authority & Trust Pages
      createEntry('/about', 0.6, 'yearly'),
      createEntry('/contact', 0.5, 'yearly'),
      createEntry('/privacy', 0.2, 'yearly'),
      createEntry('/terms', 0.2, 'yearly'),
      createEntry('/disclaimer', 0.2, 'yearly'),
      createEntry('/editorial-guidelines', 0.4, 'yearly'),
      createEntry('/sources', 0.4, 'yearly'),
    ];

    // Dynamic content - Blog posts
    const posts = getAllPosts();
    const blogPages = posts.map((post) => ({
      loc: `${baseUrl}/blog/${post.slug}`,
      lastmod: formatDate(post.date),
      changefreq: 'weekly',
      priority: 0.7,
    }));

    // Dynamic content - Pet care tips
    const tips = getAllTips();
    const tipPages = tips.map((tip) => ({
      loc: `${baseUrl}/pet-care-tips/${tip.slug}`,
      lastmod: formatDate(tip.date),
      changefreq: 'weekly',
      priority: 0.8,
    }));

    return [...staticRoutes, ...blogPages, ...tipPages];
  },
};

