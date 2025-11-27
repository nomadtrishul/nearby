/**
 * Site Configuration Utility
 * Centralized configuration for SEO and site URLs
 * Uses environment variables with fallback to production URL
 */

/**
 * Preferred domain configuration
 * Set to 'www' to prefer www.nearbypetcare.com, 'non-www' to prefer nearbypetcare.com
 * Can be overridden via NEXT_PUBLIC_PREFERRED_DOMAIN environment variable
 */
export function getPreferredDomain(): 'www' | 'non-www' {
  if (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_PREFERRED_DOMAIN) {
    const preferred = process.env.NEXT_PUBLIC_PREFERRED_DOMAIN.toLowerCase();
    if (preferred === 'www') return 'www';
    if (preferred === 'non-www' || preferred === 'nonwww') return 'non-www';
  }
  // Default to non-www (current production setup)
  return 'non-www';
}

/**
 * Normalize domain to preferred version
 * Ensures consistent canonical URLs by enforcing www vs non-www preference
 * 
 * @param url - URL to normalize
 * @returns Normalized URL with preferred domain
 */
export function normalizeToPreferredDomain(url: string): string {
  const preferred = getPreferredDomain();
  
  try {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname;
    const hasWww = hostname.startsWith('www.');
    
    if (preferred === 'www' && !hasWww) {
      // Add www
      urlObj.hostname = `www.${hostname}`;
      return urlObj.toString();
    } else if (preferred === 'non-www' && hasWww) {
      // Remove www
      urlObj.hostname = hostname.replace(/^www\./, '');
      return urlObj.toString();
    }
    
    return url;
  } catch {
    // Invalid URL, return as-is
    return url;
  }
}

/**
 * Get the base URL for the site
 * Uses NEXT_PUBLIC_SITE_URL environment variable if set, otherwise defaults to production URL
 * This ensures preview/staging environments don't pollute production indexing
 * Normalizes to preferred domain (www vs non-www)
 */
export function getBaseUrl(): string {
  let baseUrl: string;
  
  // In production, use environment variable if set, otherwise default to production URL
  // This allows for preview deployments and staging environments
  if (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_SITE_URL) {
    baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  } else {
    // Default to production URL
    baseUrl = 'https://nearbypetcare.com';
  }
  
  // Normalize to preferred domain
  return normalizeToPreferredDomain(baseUrl);
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

