#!/usr/bin/env node
/**
 * Submit all URLs from sitemap.xml to IndexNow
 * This script runs after sitemap generation to ensure all URLs are submitted
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { URL } from 'url';

const INDEXNOW_API_URL = 'https://api.indexnow.org/IndexNow';
const INDEXNOW_KEY = 'd482a54aae6e44a0b737708149ca3bce';
const SITEMAP_PATH = path.join(process.cwd(), 'public', 'sitemap.xml');
const MAX_URLS_PER_REQUEST = 10000;

function extractUrlsFromSitemap(sitemapPath) {
  try {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    const urlMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g);
    
    if (!urlMatches) {
      console.warn('⚠️  No URLs found in sitemap.xml');
      return [];
    }
    
    return urlMatches.map(match => match.replace(/<\/?loc>/g, ''));
  } catch (error) {
    console.error(`❌ Error reading sitemap: ${error.message}`);
    return [];
  }
}

function submitToIndexNow(urls, hostname) {
  return new Promise((resolve, reject) => {
    const urlsToSubmit = urls.slice(0, MAX_URLS_PER_REQUEST);
    
    const payload = {
      host: hostname,
      key: INDEXNOW_KEY,
      urlList: urlsToSubmit,
    };
    
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
      timeout: 15000, // 15 second timeout
    };
    
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        if (res.statusCode === 200 || res.statusCode === 202) {
          resolve({
            success: true,
            statusCode: res.statusCode,
            urlCount: urlsToSubmit.length,
          });
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${data || 'Unknown error'}`));
        }
      });
    });
    
    req.on('error', (error) => {
      reject(error);
    });
    
    req.on('timeout', () => {
      req.destroy();
      reject(new Error(`Request timeout after ${options.timeout}ms`));
    });
    
    req.write(postData);
    req.end();
  });
}

async function main() {
  // Check if sitemap exists
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error(`❌ Sitemap not found at ${SITEMAP_PATH}`);
    process.exit(1);
  }
  
  // Extract URLs from sitemap
  const urls = extractUrlsFromSitemap(SITEMAP_PATH);
  
  if (urls.length === 0) {
    console.warn('⚠️  No URLs to submit');
    process.exit(0);
  }
  
  // Extract hostname from first URL
  const firstUrl = new URL(urls[0]);
  const hostname = firstUrl.hostname;
  
  console.log(`📤 Submitting ${urls.length} URLs to IndexNow...`);
  
  try {
    const result = await submitToIndexNow(urls, hostname);
    console.log(`✅ IndexNow: Successfully submitted ${result.urlCount} URLs (Status: ${result.statusCode})`);
    
    if (urls.length > MAX_URLS_PER_REQUEST) {
      console.warn(`⚠️  Warning: ${urls.length} URLs exceed IndexNow limit of ${MAX_URLS_PER_REQUEST}. Submitted first ${MAX_URLS_PER_REQUEST} URLs.`);
    }
  } catch (error) {
    console.error(`❌ IndexNow: Failed to submit URLs - ${error.message}`);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(`❌ Unexpected error: ${error.message}`);
  process.exit(1);
});

