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
  /** 
   * Keywords array (INTERNAL USE ONLY)
   * 
   * NOTE: Google and other major search engines ignore the keywords meta tag.
   * Keywords are included for internal tracking/analytics purposes only.
   * Do not expect SEO value from keywords meta tags.
   * 
   * For actual SEO, focus on:
   * - Quality content with natural keyword usage
   * - Proper title and description tags
   * - Structured data (JSON-LD)
   * - Internal linking
   */
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
 *
 * Based on Next.js 16.x and Vercel environment detection:
 * - NODE_ENV: 'production' | 'development' | 'test'
 * - VERCEL_ENV: 'production' | 'preview' | 'development' (when deployed on Vercel)
 * - Production indexing should only occur in actual production deployments
 */
export function isProductionEnvironment(): boolean {
  // Server-side check only (client-side should not index)
  if (typeof process === 'undefined') return false;

  const nodeEnv = process.env.NODE_ENV;
  const vercelEnv = process.env.VERCEL_ENV;

  // For Vercel deployments: VERCEL_ENV must be 'production'
  if (vercelEnv) {
    return vercelEnv === 'production' && nodeEnv === 'production';
  }

  // For other hosting platforms: rely on NODE_ENV
  return nodeEnv === 'production';
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
 * Ideal: 50-60 characters for SEO
 */
function truncateTitle(title: string, maxLength: number = 60): string {
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
  if (isPaginated) {
    if (page && page > 1) {
      // Keep paginated URL for pages > 1 (already correct)
      // No change needed
    } else if (page === 1 || !page) {
      // First page canonicalizes to base URL (remove /page/1 or /page)
      canonicalUrl = canonicalUrl.split('?')[0].replace(/\/page\/1$/, '').replace(/\/page$/, '');
    }
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
    // Filter out invalid images and map to final format
    const validImages = images
      .filter(img => img && isValidImageUrl(img.url))
      .map(img => ({
        url: absoluteImage(img.url),
        width: img.width || 1200,
        height: img.height || 630,
        alt: img.alt || finalTitle,
        type: img.type || 'image/png',
      }));
    
    if (validImages.length > 0) {
      finalImages = validImages;
    } else {
      // Fallback to default if no valid images
      finalImages = [{
        url: SITE.defaultImage,
        width: 1200,
        height: 630,
        alt: SITE.name,
        type: 'image/png',
      }];
    }
  } else if (isValidImageUrl(image)) {
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
  // In production: always allow indexing unless explicitly disabled (noindex: true)
  // In non-production: block indexing unless explicitly enabled (noindex: false)
  const isProduction = isProductionEnvironment();
  const shouldIndex = isProduction 
    ? !noindex  // Production: allow indexing unless explicitly disabled
    : (noindex === false); // Non-production: only allow if explicitly enabled
  const shouldFollow = !nofollow;

  // Build alternates
  const finalAlternates = alternates || {};
  if (!finalAlternates.languages) {
    finalAlternates.languages = {
      'en-US': canonicalUrl,
      'en-GB': canonicalUrl,
      'en-CA': canonicalUrl,
      'en-AU': canonicalUrl,
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
 * Strips query parameters (UTM params, etc.) for canonical URLs
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
  
  // Strip query parameters (UTM params, etc.) for canonical URLs
  const urlWithoutQuery = cleanPath.split('?')[0];
  
  return `${SITE.domain}${urlWithoutQuery}`;
}

/**
 * Validate if an image URL is valid
 * Checks for undefined, null, empty strings, and the string "undefined"
 * 
 * @param image - Image URL to validate
 * @returns true if image is valid, false otherwise
 */
function isValidImageUrl(image: any): boolean {
  if (!image) return false;
  if (typeof image !== 'string') return false;
  if (image.trim().length === 0) return false;
  if (image === 'undefined' || image === 'null') return false;
  if (image.includes('undefined') || image.includes('null')) return false;
  return true;
}

/**
 * Convert image URL to absolute URL
 * Ensures OG images are always absolute URLs
 * 
 * @param image - Image URL (relative or absolute)
 * @returns Absolute image URL
 */
export function absoluteImage(image?: string): string {
  if (!isValidImageUrl(image)) {
    return SITE.defaultImage;
  }
  // TypeScript assertion: image is guaranteed to be string after isValidImageUrl check
  return ensureAbsoluteUrl(image as string);
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
    // Validate required fields for Article schema
    const missingFields: string[] = [];
    
    if (!merged.publishedTime) {
      missingFields.push('datePublished');
    } else {
      baseStructuredData.datePublished = merged.publishedTime;
    }
    
    if (merged.modifiedTime) {
      baseStructuredData.dateModified = merged.modifiedTime;
    }
    
    if (!merged.author) {
      missingFields.push('author');
    } else {
      baseStructuredData.author = {
        '@type': 'Person',
        name: merged.author,
      };
    }
    
    // Warn in development if required fields are missing
    if (missingFields.length > 0 && typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
      console.warn(`⚠️ Article schema missing required fields: ${missingFields.join(', ')}. Schema may be invalid.`);
    }
    
    if (merged.section) {
      baseStructuredData.articleSection = merged.section;
    }
    if (merged.tags && merged.tags.length > 0) {
      baseStructuredData.keywords = merged.tags.join(', ');
    }

    // Publisher (required for Article)
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
    // Log error in development only
    if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
      console.error('Error generating JSON-LD:', error);
    }
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

  // Keywords (if provided) - INTERNAL USE ONLY, Google ignores this
  // Included for internal tracking/analytics, not for SEO value
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
  } else if (merged.title.length > 60) {
    warnings.push(`Title too long (${merged.title.length} chars, ideal 50-60)`);
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

  // Image dimension validation (OG image recommended: 1200x630)
  if (merged.images && merged.images.length > 0) {
    const primaryImage = merged.images[0];
    const recommendedWidth = 1200;
    const recommendedHeight = 630;
    const aspectRatio = recommendedWidth / recommendedHeight; // 1.904...
    
    if (primaryImage.width && primaryImage.height) {
      const imageAspectRatio = primaryImage.width / primaryImage.height;
      const aspectRatioDiff = Math.abs(imageAspectRatio - aspectRatio);
      
      // Warn if aspect ratio is significantly different (more than 10% off)
      if (aspectRatioDiff > 0.1) {
        warnings.push(`OG image aspect ratio (${primaryImage.width}x${primaryImage.height}) differs from recommended (1200x630). Current ratio: ${imageAspectRatio.toFixed(2)}, Recommended: ${aspectRatio.toFixed(2)}`);
      }
      
      // Warn if dimensions are too small
      if (primaryImage.width < 600 || primaryImage.height < 315) {
        warnings.push(`OG image dimensions (${primaryImage.width}x${primaryImage.height}) are below minimum recommended size (600x315). Recommended: 1200x630`);
      }
    } else {
      warnings.push('OG image missing width or height dimensions');
    }
  }

  // Canonical validation
  if (!merged.canonical || !merged.canonical.startsWith('http')) {
    warnings.push(`Canonical URL is not absolute: ${merged.canonical}`);
  }

  // Breadcrumb validation
  const breadcrumbs = merged.breadcrumbs;
  if (breadcrumbs && breadcrumbs.length > 0) {
    // Breadcrumbs should start with Home
    const firstBreadcrumb = breadcrumbs[0];
    if (firstBreadcrumb.name.toLowerCase() !== 'home' && firstBreadcrumb.url !== '/') {
      warnings.push('Breadcrumbs should start with Home');
    }
    
    // Validate URL structure
    breadcrumbs.forEach((crumb, index) => {
      if (!crumb.url || (!crumb.url.startsWith('http') && !crumb.url.startsWith('/'))) {
        warnings.push(`Breadcrumb ${index + 1} has invalid URL: ${crumb.url}`);
      }
      
      // Check if breadcrumb URLs match page hierarchy
      if (index > 0) {
        const prevBreadcrumb = breadcrumbs[index - 1];
        const prevUrl = prevBreadcrumb.url;
        const currentUrl = crumb.url;
        // Basic check: current URL should contain previous URL path (for hierarchical structure)
        if (!currentUrl.includes(prevUrl.replace(/\/$/, '')) && prevUrl !== '/') {
          warnings.push(`Breadcrumb hierarchy may be incorrect: ${prevUrl} -> ${currentUrl}`);
        }
      }
    });
    
    // Last breadcrumb should match current page canonical
    const lastBreadcrumb = breadcrumbs[breadcrumbs.length - 1];
    const canonicalPath = merged.canonical.replace(SITE.domain, '');
    if (lastBreadcrumb.url !== canonicalPath && lastBreadcrumb.url !== merged.canonical) {
      warnings.push(`Last breadcrumb URL (${lastBreadcrumb.url}) should match canonical path (${canonicalPath})`);
    }
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
 * Calculate lastmod date for sitemap
 * Centralized logic: prefer modifiedTime > publishedTime > current date
 * 
 * @param modifiedTime - Modified time (ISO 8601)
 * @param publishedTime - Published time (ISO 8601)
 * @param fallbackDate - Fallback date if neither provided
 * @returns ISO date string (YYYY-MM-DD)
 */
export function calculateLastmod(
  modifiedTime?: string,
  publishedTime?: string,
  fallbackDate?: Date
): string {
  // Prefer modifiedTime > publishedTime > current date
  if (modifiedTime) {
    try {
      return new Date(modifiedTime).toISOString().split('T')[0];
    } catch {
      // Invalid date, fall through
    }
  }
  
  if (publishedTime) {
    try {
      return new Date(publishedTime).toISOString().split('T')[0];
    } catch {
      // Invalid date, fall through
    }
  }
  
  const date = fallbackDate || new Date();
  return date.toISOString().split('T')[0];
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

  // Use centralized lastmod calculation
  const calculatedLastmod = lastmod || calculateLastmod(
    merged.modifiedTime,
    merged.publishedTime
  );

  const entry: any = {
    loc: merged.canonical,
    lastmod: calculatedLastmod,
    changefreq,
    priority,
  };

  // Image sitemap generation disabled - images are optional and can cause issues
  // Search engines can discover images from page content, so image sitemaps aren't necessary
  // Uncomment the code below if you want to enable image sitemaps in the future
  
  // // Add images for image sitemap - filter out invalid URLs
  // if (merged.images && merged.images.length > 0) {
  //   entry.images = merged.images
  //     .filter(img => {
  //       // Strict validation - filter out any invalid image entries
  //       if (!img || !img.url) return false;
  //       if (img.url === undefined || img.url === null) return false;
  //       if (typeof img.url !== 'string') return false;
  //       const urlStr = String(img.url).trim();
  //       if (urlStr.length === 0) return false;
  //       const lowerUrl = urlStr.toLowerCase();
  //       if (lowerUrl === 'undefined' || lowerUrl === 'null') return false;
  //       if (lowerUrl.includes('undefined') || lowerUrl.includes('null')) return false;
  //       if (!urlStr.startsWith('http://') && !urlStr.startsWith('https://')) {
  //         return false;
  //       }
  //       try {
  //         const urlObj = new URL(urlStr);
  //         if (urlObj.protocol !== 'http:' && urlObj.protocol !== 'https:') {
  //           return false;
  //         }
  //         return true;
  //       } catch {
  //         return false;
  //       }
  //     })
  //     .map(img => {
  //       if (!img || !img.url || typeof img.url !== 'string') {
  //         return null;
  //       }
  //       const urlStr = String(img.url).trim();
  //       if (urlStr === 'undefined' || urlStr === 'null' || 
  //           urlStr.toLowerCase().includes('undefined') || 
  //           urlStr.toLowerCase().includes('null') ||
  //           !urlStr.startsWith('https://')) {
  //         return null;
  //       }
  //       return {
  //         loc: urlStr,
  //         title: img.alt || merged.title,
  //         caption: img.alt || merged.description,
  //       };
  //     })
  //     .filter(img => img !== null);
  //   
  //   if (entry.images.length === 0) {
  //     delete entry.images;
  //   }
  // }

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
  
  // Validate in development mode
  if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
    const warnings = validateSeoForPage(merged);
    if (warnings.length > 0) {
      console.warn(`⚠️ SEO warnings for ${merged.canonical}:`, warnings);
    }
  }
  
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
      locale: merged.locale.replace('-', '_'), // Convert en-US to en_US for OpenGraph
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
 * Generate Blog structured data
 * Creates schema.org Blog JSON-LD
 * 
 * @param input - Blog configuration
 * @returns Blog structured data object
 */
export function generateBlogStructuredData(input: {
  name: string;
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  blogPosts?: Array<{
    '@id': string;
    headline: string;
    description?: string;
    url: string;
    datePublished: string;
    dateModified?: string;
    author?: string;
    image?: string;
  }>;
}): object {
  const baseUrl = getBaseUrl();
  const absoluteUrl = ensureAbsoluteUrl(input.url);

  const structuredData: any = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${absoluteUrl}#blog`,
    name: input.name,
    headline: input.headline,
    description: input.description,
    url: absoluteUrl,
    inLanguage: 'en-US',
    publisher: {
      '@type': 'Organization',
      '@id': `${baseUrl}#organization`,
      name: SITE.name,
      legalName: SITE.name,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
        width: 200,
        height: 48,
      },
      url: baseUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${absoluteUrl}#webpage`,
    },
  };

  if (input.datePublished) {
    structuredData.datePublished = input.datePublished;
  }
  if (input.dateModified) {
    structuredData.dateModified = input.dateModified;
  }
  if (input.blogPosts && input.blogPosts.length > 0) {
    structuredData.blogPost = input.blogPosts.map(post => ({
      '@type': 'BlogPosting',
      '@id': post['@id'],
      headline: post.headline,
      ...(post.description && { description: post.description }),
      url: post.url,
      datePublished: post.datePublished,
      ...(post.dateModified && { dateModified: post.dateModified }),
      ...(post.author && {
        author: {
          '@type': 'Person',
          name: post.author,
        },
      }),
      ...(post.image && { image: ensureAbsoluteUrl(post.image) }),
    }));
  }

  return structuredData;
}

/**
 * Generate CollectionPage structured data
 * Creates schema.org CollectionPage JSON-LD
 * 
 * @param input - CollectionPage configuration
 * @returns CollectionPage structured data object
 */
export function generateCollectionPageStructuredData(input: {
  name: string;
  description: string;
  url: string;
  items: Array<{
    '@id'?: string;
    headline?: string;
    name?: string;
    url: string;
    datePublished?: string;
  }>;
  numberOfItems?: number;
}): object {
  const baseUrl = getBaseUrl();
  const absoluteUrl = ensureAbsoluteUrl(input.url);

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${absoluteUrl}#collectionpage`,
    name: input.name,
    description: input.description,
    url: absoluteUrl,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${baseUrl}#website`,
      name: SITE.name,
      url: baseUrl,
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: input.numberOfItems || input.items.length,
      itemListElement: input.items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'BlogPosting',
          ...(item['@id'] && { '@id': item['@id'] }),
          ...(item.headline && { headline: item.headline }),
          ...(item.name && { name: item.name }),
          url: ensureAbsoluteUrl(item.url),
          ...(item.datePublished && { datePublished: item.datePublished }),
        },
      })),
    },
  };
}

/**
 * Generate BlogPosting structured data
 * Creates schema.org BlogPosting JSON-LD (extends Article)
 * 
 * @param input - BlogPosting configuration
 * @returns BlogPosting structured data object
 */
export function generateBlogPostingStructuredData(input: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  authorImage?: string;
  authorLinkedIn?: string;
  image?: string;
  wordCount?: number;
  timeRequired?: string;
  blogUrl?: string;
  tags?: string[];
}): object {
  const baseUrl = getBaseUrl();
  const absoluteUrl = ensureAbsoluteUrl(input.url);
  const blogUrl = input.blogUrl ? ensureAbsoluteUrl(input.blogUrl) : `${baseUrl}/blog`;

  // Build author object with full schema
  let authorObject: any = null;
  if (input.author) {
    authorObject = {
      '@type': 'Person',
      name: input.author,
    };
    
    if (input.authorImage) {
      authorObject.image = ensureAbsoluteUrl(input.authorImage);
    }
    
    if (input.authorLinkedIn) {
      authorObject.sameAs = [input.authorLinkedIn];
    }
  }

  const structuredData: any = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${absoluteUrl}#blogposting`,
    headline: input.headline,
    description: input.description,
    url: absoluteUrl,
    datePublished: input.datePublished,
    ...(input.dateModified && { dateModified: input.dateModified }),
    ...(authorObject && { author: authorObject }),
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
        width: 200,
        height: 48,
      },
    },
    isPartOf: {
      '@type': 'Blog',
      '@id': `${blogUrl}#blog`,
      name: 'Pet Care Blog',
      url: blogUrl,
    },
    inLanguage: 'en-US',
  };

  if (input.image) {
    structuredData.image = {
      '@type': 'ImageObject',
      url: ensureAbsoluteUrl(input.image),
      width: 1200,
      height: 630,
    };
  }

  if (input.wordCount) {
    structuredData.wordCount = input.wordCount;
  }
  if (input.timeRequired) {
    structuredData.timeRequired = input.timeRequired;
  }
  if (input.tags && input.tags.length > 0) {
    structuredData.about = input.tags.map(tag => ({
      '@type': 'Thing',
      name: tag,
    }));
  }

  return structuredData;
}

/**
 * Generate HowTo structured data
 * Creates schema.org HowTo JSON-LD
 * 
 * @param input - HowTo configuration
 * @returns HowTo structured data object
 */
export function generateHowToStructuredData(input: {
  name: string;
  description: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  totalTime?: string;
  estimatedCost?: {
    currency: string;
    value: string;
  };
  tools?: string[];
  supplies?: string[];
  steps: Array<{
    name: string;
    text: string;
    url?: string;
    image?: string;
    duration?: string;
  }>;
}): object {
  const baseUrl = getBaseUrl();

  const structuredData: any = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: input.name,
    description: input.description,
    ...(input.image && { image: ensureAbsoluteUrl(input.image) }),
    ...(input.datePublished && { datePublished: input.datePublished }),
    ...(input.dateModified && { dateModified: input.dateModified }),
    ...(input.author && {
      author: {
        '@type': 'Person',
        name: input.author,
        url: `${baseUrl}/about`,
      },
    }),
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
        width: 200,
        height: 48,
      },
    },
    ...(input.totalTime && { totalTime: input.totalTime }),
  };

  if (input.estimatedCost) {
    structuredData.estimatedCost = {
      '@type': 'MonetaryAmount',
      currency: input.estimatedCost.currency,
      value: input.estimatedCost.value,
    };
  }

  if (input.tools && input.tools.length > 0) {
    structuredData.tool = input.tools.map(tool => ({
      '@type': 'HowToTool',
      name: tool,
    }));
  }

  if (input.supplies && input.supplies.length > 0) {
    structuredData.supply = input.supplies.map(supply => ({
      '@type': 'HowToSupply',
      name: supply,
    }));
  }

  if (input.steps && input.steps.length > 0) {
    structuredData.step = input.steps.map((step, index) => {
      const stepData: any = {
        '@type': 'HowToStep',
        position: index + 1,
        name: step.name,
        text: step.text,
        ...(step.url && { url: step.url }),
      };
      if (step.image) {
        stepData.image = ensureAbsoluteUrl(step.image);
      }
      return stepData;
    });
  }

  return structuredData;
}

/**
 * Generate AboutPage structured data
 * Creates schema.org AboutPage JSON-LD
 * 
 * @param input - AboutPage configuration
 * @returns AboutPage structured data object
 */
export function generateAboutPageStructuredData(input: {
  name: string;
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  organization?: {
    name: string;
    legalName?: string;
    description?: string;
    logo?: string;
    contactEmail?: string;
    sameAs?: string[];
    foundingDate?: string;
    knowsAbout?: string[];
  };
  breadcrumbs?: Array<{ name: string; url: string }>;
}): object {
  const baseUrl = getBaseUrl();
  const absoluteUrl = ensureAbsoluteUrl(input.url);

  const structuredData: any = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': absoluteUrl,
    name: input.name,
    headline: input.headline,
    description: input.description,
    url: absoluteUrl,
    inLanguage: 'en-US',
    ...(input.datePublished && { datePublished: input.datePublished }),
    ...(input.dateModified && { dateModified: input.dateModified }),
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${baseUrl}#website`,
      name: SITE.name,
      url: baseUrl,
    },
  };

  if (input.organization) {
    structuredData.mainEntity = {
      '@type': 'Organization',
      '@id': `${baseUrl}#organization`,
      name: input.organization.name,
      ...(input.organization.legalName && { legalName: input.organization.legalName }),
      ...(input.organization.description && { description: input.organization.description }),
      url: baseUrl,
      ...(input.organization.logo && {
        logo: {
          '@type': 'ImageObject',
          url: ensureAbsoluteUrl(input.organization.logo),
          width: 200,
          height: 48,
        },
      }),
      ...(input.organization.contactEmail && {
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          email: input.organization.contactEmail,
          areaServed: ['US', 'CA', 'GB', 'AU'],
          availableLanguage: ['English'],
        },
      }),
      ...(input.organization.sameAs && { sameAs: input.organization.sameAs }),
      ...(input.organization.foundingDate && { foundingDate: input.organization.foundingDate }),
      ...(input.organization.knowsAbout && { knowsAbout: input.organization.knowsAbout }),
    };
  }

  if (input.breadcrumbs && input.breadcrumbs.length > 0) {
    structuredData.breadcrumb = generateBreadcrumbStructuredData(input.breadcrumbs);
  }

  return structuredData;
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
  calculateLastmod,
  generateSEOMetadata,
  generateWebPageStructuredData,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  generateBlogStructuredData,
  generateCollectionPageStructuredData,
  generateBlogPostingStructuredData,
  generateHowToStructuredData,
  generateAboutPageStructuredData,
  jsonLdScriptProps,
  isProductionEnvironment,
};

export default seoUtils;