/**
 * IndexNow Integration
 * Submits URLs to IndexNow API for instant search engine notification
 * 
 * IndexNow is supported by Bing, Yandex, and other search engines
 * Documentation: https://www.indexnow.org/
 */

const INDEXNOW_API_URL = 'https://api.indexnow.org/IndexNow';
const INDEXNOW_KEY = 'd482a54aae6e44a0b737708149ca3bce'; // From public/d482a54aae6e44a0b737708149ca3bce.txt
const MAX_URLS_PER_REQUEST = 10000; // IndexNow limit

interface IndexNowResponse {
  success: boolean;
  statusCode?: number;
  error?: string;
}

/**
 * Submit URLs to IndexNow API
 * IndexNow supports up to 10,000 URLs per request
 * 
 * @param urls - Array of absolute URLs to submit
 * @param host - Hostname (e.g., 'nearbypetcare.com')
 * @returns Promise resolving to success status
 */
export async function submitToIndexNow(
  urls: string[],
  host: string = 'nearbypetcare.com'
): Promise<IndexNowResponse> {
  if (!urls || urls.length === 0) {
    return {
      success: false,
      error: 'No URLs provided',
    };
  }

  // IndexNow requires absolute URLs
  const absoluteUrls = urls.map(url => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    // Assume https if protocol is missing
    return `https://${host}${url.startsWith('/') ? url : '/' + url}`;
  });

  // IndexNow supports up to 10,000 URLs per request
  // If we have more, we'd need to batch, but for now we'll submit all
  if (absoluteUrls.length > MAX_URLS_PER_REQUEST) {
    console.warn(
      `Warning: ${absoluteUrls.length} URLs exceed IndexNow limit of ${MAX_URLS_PER_REQUEST}. Submitting first ${MAX_URLS_PER_REQUEST} URLs.`
    );
    absoluteUrls.splice(MAX_URLS_PER_REQUEST);
  }

  const payload = {
    host,
    key: INDEXNOW_KEY,
    urlList: absoluteUrls,
  };

  try {
    const response = await fetch(INDEXNOW_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // IndexNow returns 200 for success, 202 for accepted
    if (response.status === 200 || response.status === 202) {
      return {
        success: true,
        statusCode: response.status,
      };
    }

    // Try to get error message
    let errorMessage = `HTTP ${response.status}`;
    try {
      const errorData = await response.text();
      if (errorData) {
        errorMessage = errorData;
      }
    } catch (e) {
      // Ignore error parsing
    }

    return {
      success: false,
      statusCode: response.status,
      error: errorMessage,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Submit URLs from sitemap entries to IndexNow
 * Extracts URLs from sitemap entry objects
 * 
 * @param entries - Array of sitemap entries with 'loc' property
 * @param host - Hostname (defaults to 'nearbypetcare.com')
 * @returns Promise resolving to success status
 */
export async function submitSitemapEntriesToIndexNow(
  entries: Array<{ loc: string }>,
  host: string = 'nearbypetcare.com'
): Promise<IndexNowResponse> {
  const urls = entries.map(entry => entry.loc);
  return submitToIndexNow(urls, host);
}

/**
 * Submit a single URL to IndexNow
 * Convenience function for single page updates
 * 
 * @param url - Absolute or relative URL
 * @param host - Hostname (defaults to 'nearbypetcare.com')
 * @returns Promise resolving to success status
 */
export async function submitUrlToIndexNow(
  url: string,
  host: string = 'nearbypetcare.com'
): Promise<IndexNowResponse> {
  return submitToIndexNow([url], host);
}

