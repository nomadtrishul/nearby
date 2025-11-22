/**
 * Site Configuration Utility
 * Centralized configuration for SEO and site URLs
 * Uses environment variables with fallback to production URL
 */

/**
 * Get the base URL for the site
 * Uses NEXT_PUBLIC_SITE_URL environment variable if set, otherwise defaults to production URL
 * This ensures preview/staging environments don't pollute production indexing
 */
export function getBaseUrl(): string {
  // In production, use environment variable if set, otherwise default to production URL
  // This allows for preview deployments and staging environments
  if (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  
  // Default to production URL
  return 'https://nearbypetcare.com';
}

/**
 * Get the default OG image URL
 */
export function getDefaultOgImage(): string {
  return `${getBaseUrl()}/og-image.png`;
}

/**
 * Get the site name
 */
export function getSiteName(): string {
  return 'Nearby Pet Care';
}

/**
 * Ensure URL is absolute (starts with http/https)
 * If relative, prepends base URL
 */
export function ensureAbsoluteUrl(url: string): string {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  
  // Handle protocol-relative URLs
  if (url.startsWith('//')) {
    return `https:${url}`;
  }
  
  // Handle absolute paths
  if (url.startsWith('/')) {
    return `${getBaseUrl()}${url}`;
  }
  
  // Relative paths - prepend base URL
  return `${getBaseUrl()}/${url}`;
}

/**
 * Get verification meta tags only if environment variables are set
 * Prevents empty verification tags that can confuse search engines
 */
export function getVerificationMeta() {
  const verification: {
    google?: string;
    yandex?: string;
    yahoo?: string;
    other?: Record<string, string>;
  } = {};
  
  if (process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION) {
    verification.google = process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION;
  }
  
  if (process.env.NEXT_PUBLIC_YANDEX_VERIFICATION) {
    verification.yandex = process.env.NEXT_PUBLIC_YANDEX_VERIFICATION;
  }
  
  if (process.env.NEXT_PUBLIC_YAHOO_VERIFICATION) {
    verification.yahoo = process.env.NEXT_PUBLIC_YAHOO_VERIFICATION;
  }
  
  // Bing verification goes in 'other' field
  if (process.env.NEXT_PUBLIC_BING_VERIFICATION) {
    verification.other = {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION,
    };
  }
  
  // Only return if we have at least one verification
  return Object.keys(verification).length > 0 ? verification : undefined;
}

