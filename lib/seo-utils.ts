/**
 * Central SEO Utility Module
 * Production-grade SEO architecture following November 2025 best practices
 * 
 * @module seo-utils
 * @description Provides centralized SEO configuration and utilities for Next.js App Router
 */

import type { Metadata } from 'next';
import { getBaseUrl, getDefaultOgImage, getSiteName, ensureAbsoluteUrl } from './site-config';

// Build SITE configuration with absolute URLs
const rawDefaultImage = getDefaultOgImage();

/**
 * Site configuration object
 * Centralized site metadata following 2025 SEO best practices
 */
export const SITE = {
  name: getSiteName(),
  shortName: 'NPC',
  description: 'Find trusted pet care services near you. Professional grooming, boarding, daycare, and training services from experienced professionals.',
  domain: getBaseUrl(),
  defaultTitleTemplate: '%s | Nearby Pet Care',
  defaultImage: ensureAbsoluteUrl(rawDefaultImage),
  twitterHandle: '@nearbypetcare',
  locale: 'en-US',
  defaultLocale: 'en-US',
  locales: ['en-US', 'en-GB', 'en-CA', 'en-AU'],
} as const;

/**
 * SEO input interface
 * Flexible input shape for per-page SEO configuration
 */
export interface SeoInput {
  /** Page title (will be merged with template if not already formatted) */
  title?: string;
  /** Meta description (120-160 chars ideal) */
  description?: string;
  /** Keywords array */
  keywords?: string[];
  /** Canonical pathname (e.g., '/blog/my-post') */
  pathname?: string;
  /** Full canonical URL (overrides pathname if provided) */
  canonical?: string;
  /** OG image URL (relative or absolute) */
  image?: string;
  /** OG image array for multiple images */
  images?: Array<{
  url: string;
    width?: number;
    height?: number;
    alt?: string;
    type?: string;
  }>;
  /** Content type: 'website' or 'article' */
  type?: 'website' | 'article';
  /** Article published time (ISO 8601) */
  publishedTime?: string;
  /** Article modified time (ISO 8601) */
  modifiedTime?: string;
  /** Author name */
  author?: string;
  /** Article section/category */
  section?: string;
  /** Article tags */
  tags?: string[];
  /** Breadcrumbs for structured data */
  breadcrumbs?: Array<{ name: string; url: string }>;
  /** Disable indexing */
  noindex?: boolean;
  /** Disable following links */
  nofollow?: boolean;
  /** Locale override */
  locale?: string;
  /** Alternate language URLs */
  alternates?: {
    languages?: Record<string, string>;
    canonical?: string;
  };
  /** Pagination support */
  isPaginated?: boolean;
  page?: number;
  totalPages?: number;
  /** Additional meta tags */
  other?: Record<string, string>;
}

/**
 * Merged SEO output
 * Complete SEO configuration after merging with defaults
 */
export interface MergedSeo {
  title: string;
  description: string;
  keywords?: string[];
  canonical: string;
  image: string;
  images: Array<{
  url: string;
    width: number;
    height: number;
    alt: string;
    type: string;
  }>;
  type: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author: string;
  section?: string;
  tags?: string[];
  breadcrumbs?: Array<{ name: string; url: string }>;
  noindex: boolean;
  nofollow: boolean;
  locale: string;
  alternates?: {
    languages?: Record<string, string>;
    canonical?: string;
  };
  isPaginated?: boolean;
  page?: number;
  totalPages?: number;
  other?: Record<string, string>;
}

/**
 * Tag object for meta tags
 * Used by buildMetaTags to generate HTML tags
 */
export interface TagObject {
  tag: 'title' | 'meta' | 'link' | 'script';
  props: Record<string, string | boolean | undefined>;
  children?: string;
}

/**
 * Check if we're in a production environment
 * Prevents accidental indexing of staging/preview deployments
 */
function isProductionEnvironment(): boolean {
  if (typeof process === 'undefined') return true;
  
  const nodeEnv = process.env.NODE_ENV;
  const vercelEnv = process.env.VERCEL_ENV;
  const isPreview = process.env.VERCEL === '1' && vercelEnv !== 'production';
  
  return nodeEnv === 'production' && !isPreview && vercelEnv === 'production';
}

/**
 * Normalize and validate ISO-8601 date strings
 * Returns valid ISO-8601 string or null if invalid
 */
function normalizeDate(dateString: string | undefined | null): string | null {
  if (!dateString) return null;
  
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return null;
    }
    return date.toISOString();
  } catch {
    return null;
  }
}

/**
 * Truncate description to optimal length
 * Ideal: 120-160 characters for SEO
 */
function truncateDescription(description: string, maxLength: number = 160): string {
  if (description.length <= maxLength) {
    return description;
  }
  const truncated = description.substring(0, maxLength - 3);
  const lastSpace = truncated.lastIndexOf(' ');
  if (lastSpace > maxLength * 0.8) {
    return truncated.substring(0, lastSpace) + '...';
  }
  return truncated + '...';
}

/**
 * Truncate title to optimal length
 * Ideal: <70 characters for SEO
 */
function truncateTitle(title: string, maxLength: number = 70): string {
  if (title.length <= maxLength) {
    return title;
  }
  const truncated = title.substring(0, maxLength - 3);
  const lastSpace = truncated.lastIndexOf(' ');
  if (lastSpace > maxLength * 0.8) {
    return truncated.substring(0, lastSpace) + '...';
  }
  return truncated + '...';
}

/**
 * Merge SEO input with defaults
 * Main merge layer that combines user input with site defaults
 * 
 * @param input - SEO input from page
 * @returns Merged SEO configuration
 */
export function mergeSeo(input: SeoInput = {}): MergedSeo {
  const {
    title,
    description,
    keywords,
    pathname,
    canonical,
    image,
    images,
    type = 'website',
    publishedTime,
    modifiedTime,
    author = 'Nearby Pet Care Team',
    section,
    tags,
    breadcrumbs,
    noindex = false,
    nofollow = false,
    locale = SITE.locale,
    alternates,
    isPaginated = false,
    page,
    totalPages,
    other,
  } = input;

  // Build canonical URL
  let canonicalUrl: string;
  if (canonical) {
    canonicalUrl = ensureAbsoluteUrl(canonical);
  } else if (pathname) {
    canonicalUrl = buildCanonical(pathname);
  } else {
    canonicalUrl = SITE.domain;
  }
  
  // Handle pagination canonical URLs
  if (isPaginated && page && page > 1) {
    // Keep paginated URL for pages > 1
    canonicalUrl = canonicalUrl;
  } else if (isPaginated && page === 1) {
    // First page canonicalizes to base URL
    canonicalUrl = canonicalUrl.split('?')[0].replace(/\/page\/1$/, '');
  }

  // Build title
  let finalTitle: string;
  if (title) {
    if (title.includes('|')) {
      finalTitle = title;
    } else {
      finalTitle = SITE.defaultTitleTemplate.replace('%s', title);
    }
  } else {
    finalTitle = SITE.name;
  }
  finalTitle = truncateTitle(finalTitle);

  // Build description
  const finalDescription = description 
    ? truncateDescription(description)
    : SITE.description;

  // Build images array
  let finalImages: Array<{
    url: string;
    width: number;
    height: number;
    alt: string;
    type: string;
  }>;

  if (images && images.length > 0) {
    finalImages = images.map(img => ({
      url: absoluteImage(img.url),
      width: img.width || 1200,
      height: img.height || 630,
      alt: img.alt || finalTitle,
      type: img.type || 'image/png',
    }));
  } else if (image) {
    finalImages = [{
      url: absoluteImage(image),
      width: 1200,
      height: 630,
      alt: finalTitle,
      type: 'image/png',
    }];
  } else {
    finalImages = [{
      url: SITE.defaultImage,
      width: 1200,
      height: 630,
      alt: SITE.name,
      type: 'image/png',
    }];
  }

  // Normalize dates
  const normalizedPublishedTime = normalizeDate(publishedTime);
  const normalizedModifiedTime = normalizeDate(modifiedTime) || normalizedPublishedTime;

  // Environment-based indexing control
  const shouldIndex = isProductionEnvironment() && !noindex;
  const shouldFollow = !nofollow;

  // Build alternates
  const finalAlternates = alternates || {};
  if (!finalAlternates.languages) {
    finalAlternates.languages = {
    'en-US': canonicalUrl,
    };
  }

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: keywords && keywords.length > 0 ? keywords : undefined,
      canonical: canonicalUrl,
    image: finalImages[0].url,
    images: finalImages,
    type,
        publishedTime: normalizedPublishedTime || undefined,
        modifiedTime: normalizedModifiedTime || undefined,
    author,
        section,
    tags: tags && tags.length > 0 ? tags : undefined,
    breadcrumbs,
    noindex: !shouldIndex,
    nofollow: !shouldFollow,
    locale,
    alternates: Object.keys(finalAlternates).length > 0 ? finalAlternates : undefined,
    isPaginated: isPaginated ? true : undefined,
    page,
    totalPages,
    other,
  };
}

/**
 * Build canonical URL from pathname
 * Converts relative pathname to absolute canonical URL
 * 
 * @param pathname - Relative pathname (e.g., '/blog/my-post')
 * @returns Absolute canonical URL
 */
export function buildCanonical(pathname?: string): string {
  if (!pathname) {
    return SITE.domain;
  }
  
  // Ensure pathname starts with /
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  
  // Remove trailing slash (except for root)
  const cleanPath = normalizedPath === '/' ? '/' : normalizedPath.replace(/\/$/, '');
  
  return `${SITE.domain}${cleanPath}`;
}

/**
 * Convert image URL to absolute URL
 * Ensures OG images are always absolute URLs
 * 
 * @param image - Image URL (relative or absolute)
 * @returns Absolute image URL
 */
export function absoluteImage(image?: string): string {
  if (!image) {
    return SITE.defaultImage;
  }
  return ensureAbsoluteUrl(image);
}

/**
 * Generate JSON-LD structured data
 * Creates schema.org WebPage or Article structured data
 * 
 * @param merged - Merged SEO configuration
 * @returns JSON-LD string
 */
export function generateJsonLd(merged: MergedSeo): string {
  const baseStructuredData: any = {
    '@context': 'https://schema.org',
    '@type': merged.type === 'article' ? 'Article' : 'WebPage',
    name: merged.title,
    description: merged.description,
    url: merged.canonical,
    inLanguage: merged.locale,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE.name,
      url: SITE.domain,
    },
  };

  // Add primary image
  if (merged.images && merged.images.length > 0) {
    const primaryImage = merged.images[0];
    baseStructuredData.image = {
          '@type': 'ImageObject',
      url: primaryImage.url,
      width: primaryImage.width,
      height: primaryImage.height,
    };
  }

  // Article-specific fields
  if (merged.type === 'article') {
    if (merged.publishedTime) {
      baseStructuredData.datePublished = merged.publishedTime;
    }
    if (merged.modifiedTime) {
      baseStructuredData.dateModified = merged.modifiedTime;
    }
    if (merged.author) {
      baseStructuredData.author = {
      '@type': 'Person',
        name: merged.author,
      };
    }
    if (merged.section) {
      baseStructuredData.articleSection = merged.section;
    }
    if (merged.tags && merged.tags.length > 0) {
      baseStructuredData.keywords = merged.tags.join(', ');
    }

    // Publisher
    baseStructuredData.publisher = {
      '@type': 'Organization',
      name: SITE.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.domain}/logo.png`,
        width: 200,
        height: 48,
      },
    };
  }

  // Breadcrumbs
  if (merged.breadcrumbs && merged.breadcrumbs.length > 0) {
    baseStructuredData.breadcrumb = {
    '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: merged.breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: ensureAbsoluteUrl(crumb.url),
    })),
  };
}

  try {
    return JSON.stringify(baseStructuredData, null, 0);
  } catch (error) {
    console.error('Error generating JSON-LD:', error);
    return '{}';
  }
}

/**
 * Build meta tags array
 * Generates array of tag objects for rendering in head
 * 
 * @param merged - Merged SEO configuration
 * @returns Array of tag objects
 */
export function buildMetaTags(merged: MergedSeo): TagObject[] {
  const tags: TagObject[] = [];

  // Title tag
  tags.push({
    tag: 'title',
    props: {},
    children: merged.title,
  });

  // Meta description
  tags.push({
    tag: 'meta',
    props: {
      name: 'description',
      content: merged.description,
    },
  });

  // Keywords (if provided)
  if (merged.keywords && merged.keywords.length > 0) {
    tags.push({
      tag: 'meta',
      props: {
        name: 'keywords',
        content: merged.keywords.join(', '),
      },
    });
  }

  // Author
  tags.push({
    tag: 'meta',
    props: {
      name: 'author',
      content: merged.author,
    },
  });

  // Canonical link
  tags.push({
    tag: 'link',
    props: {
      rel: 'canonical',
      href: merged.canonical,
    },
  });

  // Robots meta
  const robotsContent = [
    merged.noindex ? 'noindex' : 'index',
    merged.nofollow ? 'nofollow' : 'follow',
  ].join(', ');

  tags.push({
    tag: 'meta',
    props: {
      name: 'robots',
      content: robotsContent,
    },
  });

  // Open Graph tags
  tags.push({
    tag: 'meta',
    props: {
      property: 'og:type',
      content: merged.type,
    },
  });

  tags.push({
    tag: 'meta',
    props: {
      property: 'og:title',
      content: merged.title,
    },
  });

  tags.push({
    tag: 'meta',
    props: {
      property: 'og:description',
      content: merged.description,
    },
  });

  tags.push({
    tag: 'meta',
    props: {
      property: 'og:url',
      content: merged.canonical,
    },
  });

  tags.push({
    tag: 'meta',
    props: {
      property: 'og:site_name',
      content: SITE.name,
    },
  });

  tags.push({
    tag: 'meta',
    props: {
      property: 'og:locale',
      content: merged.locale,
    },
  });

  // OG Images
  merged.images.forEach((img, index) => {
    tags.push({
      tag: 'meta',
      props: {
        property: 'og:image',
        content: img.url,
      },
    });

    if (img.width) {
      tags.push({
        tag: 'meta',
        props: {
          property: 'og:image:width',
          content: img.width.toString(),
        },
      });
    }

    if (img.height) {
      tags.push({
        tag: 'meta',
        props: {
          property: 'og:image:height',
          content: img.height.toString(),
        },
      });
    }

    if (img.alt) {
      tags.push({
        tag: 'meta',
        props: {
          property: 'og:image:alt',
          content: img.alt,
        },
      });
    }

    if (img.type) {
      tags.push({
        tag: 'meta',
        props: {
          property: 'og:image:type',
          content: img.type,
        },
      });
    }
  });

  // Article-specific OG tags
  if (merged.type === 'article') {
    if (merged.publishedTime) {
      tags.push({
        tag: 'meta',
        props: {
          property: 'article:published_time',
          content: merged.publishedTime,
        },
      });
    }

    if (merged.modifiedTime) {
      tags.push({
        tag: 'meta',
        props: {
          property: 'article:modified_time',
          content: merged.modifiedTime,
        },
      });
    }

    if (merged.author) {
      tags.push({
        tag: 'meta',
        props: {
          property: 'article:author',
          content: merged.author,
        },
      });
    }

    if (merged.section) {
      tags.push({
        tag: 'meta',
        props: {
          property: 'article:section',
          content: merged.section,
        },
      });
    }

    if (merged.tags && merged.tags.length > 0) {
      merged.tags.forEach(tag => {
        tags.push({
          tag: 'meta',
          props: {
            property: 'article:tag',
            content: tag,
          },
        });
      });
    }
  }

  // Twitter Card tags
  tags.push({
    tag: 'meta',
    props: {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
  });

  tags.push({
    tag: 'meta',
    props: {
      name: 'twitter:title',
      content: merged.title,
    },
  });

  tags.push({
    tag: 'meta',
    props: {
      name: 'twitter:description',
      content: merged.description,
    },
  });

  if (merged.images && merged.images.length > 0) {
    tags.push({
      tag: 'meta',
      props: {
        name: 'twitter:image',
        content: merged.images[0].url,
      },
    });
  }

  if (SITE.twitterHandle) {
    tags.push({
      tag: 'meta',
      props: {
        name: 'twitter:site',
        content: SITE.twitterHandle,
      },
    });
  }

  // Alternate language links
  if (merged.alternates?.languages) {
    Object.entries(merged.alternates.languages).forEach(([lang, url]) => {
      tags.push({
        tag: 'link',
        props: {
          rel: 'alternate',
          hreflang: lang,
          href: url,
        },
      });
    });
  }

  // Pagination links
  if (merged.isPaginated && merged.page && merged.totalPages) {
    if (merged.page > 1) {
      const prevUrl = merged.page === 2
        ? merged.canonical.replace(/\/page\/\d+/, '')
        : merged.canonical.replace(/\/page\/\d+/, `/page/${merged.page - 1}`);
      tags.push({
        tag: 'link',
        props: {
          rel: 'prev',
          href: prevUrl,
        },
      });
    }

    if (merged.page < merged.totalPages) {
      const nextUrl = merged.canonical.replace(/\/page\/\d+/, `/page/${merged.page + 1}`);
      tags.push({
        tag: 'link',
        props: {
          rel: 'next',
          href: nextUrl,
        },
      });
    }
  }

  // Additional meta tags
  if (merged.other) {
    Object.entries(merged.other).forEach(([key, value]) => {
      tags.push({
        tag: 'meta',
        props: {
          name: key,
          content: value,
        },
      });
    });
  }

  // JSON-LD script
  const jsonLd = generateJsonLd(merged);
  tags.push({
    tag: 'script',
    props: {
      type: 'application/ld+json',
    },
    children: jsonLd,
  });

  return tags;
}

/**
 * Validate SEO configuration for a page
 * Returns array of warning messages
 * 
 * @param merged - Merged SEO configuration
 * @returns Array of warning messages
 */
export function validateSeoForPage(merged: MergedSeo): string[] {
  const warnings: string[] = [];

  // Title validation
  if (!merged.title || merged.title.trim().length === 0) {
    warnings.push('Missing title');
  } else if (merged.title.length > 70) {
    warnings.push(`Title too long (${merged.title.length} chars, ideal <70)`);
  }

  // Description validation
  if (!merged.description || merged.description.trim().length === 0) {
    warnings.push('Missing description');
  } else if (merged.description.length < 120) {
    warnings.push(`Description too short (${merged.description.length} chars, ideal 120-160)`);
  } else if (merged.description.length > 160) {
    warnings.push(`Description too long (${merged.description.length} chars, ideal 120-160)`);
  }

  // Image validation
  if (!merged.image || merged.image === SITE.defaultImage) {
    warnings.push('Using default OG image (consider custom image)');
  }

  // Check if image is absolute
  if (merged.image && !merged.image.startsWith('http://') && !merged.image.startsWith('https://')) {
    warnings.push(`OG image is not absolute: ${merged.image}`);
  }

  // Canonical validation
  if (!merged.canonical || !merged.canonical.startsWith('http')) {
    warnings.push(`Canonical URL is not absolute: ${merged.canonical}`);
  }

  // Article-specific validation
  if (merged.type === 'article') {
    if (!merged.publishedTime) {
      warnings.push('Article missing publishedTime');
    }
    if (!merged.author) {
      warnings.push('Article missing author');
    }
  }

  return warnings;
}

/**
 * Collect SEO warnings from multiple pages
 * Aggregates warnings from multiple merged SEO configs
 * 
 * @param allMerged - Array of merged SEO configurations
 * @returns Object mapping URLs to warning arrays
 */
export function collectSeoWarnings(allMerged: MergedSeo[]): Record<string, string[]> {
  const warnings: Record<string, string[]> = {};

  allMerged.forEach(merged => {
    const pageWarnings = validateSeoForPage(merged);
    if (pageWarnings.length > 0) {
      warnings[merged.canonical] = pageWarnings;
    }
  });

  return warnings;
}

/**
 * Make sitemap entry from merged SEO
 * Converts merged SEO to sitemap entry format
 * 
 * @param merged - Merged SEO configuration
 * @param options - Additional sitemap options
 * @returns Sitemap entry object
 */
export function makeSitemapEntry(
  merged: MergedSeo,
  options: {
    priority?: number;
    changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    lastmod?: string;
  } = {}
): {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: number;
  images?: Array<{ loc: string; title?: string; caption?: string }>;
} {
  const {
    priority = 0.8,
    changefreq = 'weekly',
    lastmod,
  } = options;

  const entry: any = {
    loc: merged.canonical,
    lastmod: lastmod || merged.modifiedTime || merged.publishedTime || new Date().toISOString().split('T')[0],
    changefreq,
    priority,
  };

  // Add images for image sitemap
  if (merged.images && merged.images.length > 0) {
    entry.images = merged.images.map(img => ({
      loc: img.url,
      title: img.alt || merged.title,
      caption: img.alt || merged.description,
    }));
  }

  return entry;
}

/**
 * Generate Next.js Metadata from SEO input
 * Compatibility function for pages using the old API
 * 
 * @param input - SEO input configuration
 * @returns Next.js Metadata object
 */
export function generateSEOMetadata(input: SeoInput): Metadata {
  const merged = mergeSeo(input);
  
  const metadata: Metadata = {
    title: merged.title,
    description: merged.description,
    keywords: merged.keywords,
    alternates: {
      canonical: merged.canonical,
      languages: merged.alternates?.languages,
    },
    openGraph: {
      type: merged.type,
      title: merged.title,
      description: merged.description,
      url: merged.canonical,
      siteName: SITE.name,
      locale: merged.locale,
      images: merged.images.map(img => ({
        url: img.url,
        width: img.width,
        height: img.height,
        alt: img.alt,
        type: img.type,
      })),
      ...(merged.type === 'article' && {
        publishedTime: merged.publishedTime,
        modifiedTime: merged.modifiedTime,
        authors: merged.author ? [merged.author] : undefined,
        section: merged.section,
        tags: merged.tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: merged.title,
      description: merged.description,
      images: merged.images.length > 0 ? [merged.images[0].url] : undefined,
      site: SITE.twitterHandle,
    },
    robots: {
      index: !merged.noindex,
      follow: !merged.nofollow,
    },
  };

  return metadata;
}

/**
 * Generate WebPage structured data
 * Creates schema.org WebPage JSON-LD
 * 
 * @param input - WebPage configuration
 * @returns WebPage structured data object
 */
export function generateWebPageStructuredData(input: {
  name: string;
  description: string;
  url: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
}): object {
  const baseUrl = getBaseUrl();
  const absoluteUrl = ensureAbsoluteUrl(input.url);

  const structuredData: any = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: input.name,
    description: input.description,
    url: absoluteUrl,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: SITE.name,
      url: baseUrl,
    },
  };

  if (input.breadcrumbs && input.breadcrumbs.length > 0) {
    structuredData.breadcrumb = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: input.breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: ensureAbsoluteUrl(crumb.url),
      })),
    };
  }

  return structuredData;
}

/**
 * Generate BreadcrumbList structured data
 * Creates schema.org BreadcrumbList JSON-LD
 * 
 * @param breadcrumbs - Array of breadcrumb items
 * @returns BreadcrumbList structured data object
 */
export function generateBreadcrumbStructuredData(
  breadcrumbs: Array<{ name: string; url: string }>
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: ensureAbsoluteUrl(crumb.url),
    })),
  };
}

/**
 * Generate FAQPage structured data
 * Creates schema.org FAQPage JSON-LD
 * 
 * @param faqs - Array of FAQ items
 * @returns FAQPage structured data object
 */
export function generateFAQStructuredData(
  faqs: Array<{ question: string; answer: string }>
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate script props for JSON-LD structured data
 * Helper function to create proper script tag props for Next.js
 * 
 * @param structuredData - Structured data object
 * @returns Script tag props object
 */
export function jsonLdScriptProps(structuredData: object): {
  type: string;
  dangerouslySetInnerHTML: { __html: string };
} {
  return {
    type: 'application/ld+json',
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(structuredData, null, 0),
    },
  };
}

/**
 * Default export with all utilities
 */
const seoUtils = {
  SITE,
  mergeSeo,
  buildCanonical,
  absoluteImage,
  generateJsonLd,
  buildMetaTags,
  validateSeoForPage,
  collectSeoWarnings,
  makeSitemapEntry,
  generateSEOMetadata,
  generateWebPageStructuredData,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
};

export default seoUtils;