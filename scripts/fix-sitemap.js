#!/usr/bin/env node

/**
 * Post-processing script to fix sitemap issues:
 * 1. Remove duplicate URLs (keep the one with better priority/changefreq)
 * 2. Remove unused namespaces
 * 3. Ensure proper formatting
 * 4. Standardize date formats to YYYY-MM-DD
 */

const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, '../public/sitemap.xml');

if (!fs.existsSync(sitemapPath)) {
  console.error('Sitemap file not found:', sitemapPath);
  process.exit(1);
}

console.log('Reading sitemap...');
let xmlContent = fs.readFileSync(sitemapPath, 'utf8');

// Parse URLs using regex (simpler than full XML parser for this use case)
const urlRegex = /<url>(.*?)<\/url>/gs;
const locRegex = /<loc>(.*?)<\/loc>/;
const lastmodRegex = /<lastmod>(.*?)<\/lastmod>/;
const changefreqRegex = /<changefreq>(.*?)<\/changefreq>/;
const priorityRegex = /<priority>(.*?)<\/priority>/;

const urlMatches = [...xmlContent.matchAll(urlRegex)];
console.log(`Found ${urlMatches.length} URLs in sitemap`);

// Track seen URLs and keep the best entry for each
const urlMap = new Map();

urlMatches.forEach((match) => {
  const urlBlock = match[1];
  const locMatch = urlBlock.match(locRegex);
  const lastmodMatch = urlBlock.match(lastmodRegex);
  const changefreqMatch = urlBlock.match(changefreqRegex);
  const priorityMatch = urlBlock.match(priorityRegex);

  if (!locMatch) return;

  const loc = locMatch[1].trim();
  const lastmod = lastmodMatch ? lastmodMatch[1].trim() : null;
  const changefreq = changefreqMatch ? changefreqMatch[1].trim() : null;
  const priority = priorityMatch ? parseFloat(priorityMatch[1].trim()) : null;

  // Standardize lastmod to YYYY-MM-DD format
  let formattedLastmod = null;
  if (lastmod) {
    try {
      const date = new Date(lastmod);
      if (!isNaN(date.getTime())) {
        formattedLastmod = date.toISOString().split('T')[0];
      } else {
        // Try to extract date part if it's already in a date format
        formattedLastmod = lastmod.split('T')[0];
      }
    } catch (e) {
      formattedLastmod = lastmod.split('T')[0];
    }
  }

  if (!urlMap.has(loc)) {
    urlMap.set(loc, {
      loc,
      lastmod: formattedLastmod,
      changefreq,
      priority,
      originalBlock: urlBlock,
    });
  } else {
    // If duplicate, keep the one with higher priority or better changefreq
    const existing = urlMap.get(loc);
    const existingPriority = existing.priority || 0;
    const newPriority = priority || 0;

    // Prefer higher priority, or if equal, prefer more frequent changefreq
    const changefreqOrder = { daily: 4, weekly: 3, monthly: 2, yearly: 1 };
    const existingFreq = changefreqOrder[existing.changefreq] || 0;
    const newFreq = changefreqOrder[changefreq] || 0;

    if (
      newPriority > existingPriority ||
      (newPriority === existingPriority && newFreq > existingFreq)
    ) {
      urlMap.set(loc, {
        loc,
        lastmod: formattedLastmod || existing.lastmod,
        changefreq,
        priority,
        originalBlock: urlBlock,
      });
    }
  }
});

console.log(`After deduplication: ${urlMap.size} unique URLs`);

// Convert to array and sort: homepage first, then by priority (desc), then alphabetically
const cleanedUrls = Array.from(urlMap.values()).sort((a, b) => {
  // Homepage always first
  if (a.loc === 'https://nearbypetcare.com/') return -1;
  if (b.loc === 'https://nearbypetcare.com/') return 1;

  const priorityA = a.priority || 0;
  const priorityB = b.priority || 0;

  if (priorityB !== priorityA) {
    return priorityB - priorityA;
  }

  return a.loc.localeCompare(b.loc);
});

// Build new XML
let newXml = '<?xml version="1.0" encoding="UTF-8"?>\n';
newXml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

cleanedUrls.forEach((entry) => {
  newXml += '  <url>\n';
  newXml += `    <loc>${entry.loc}</loc>\n`;

  if (entry.lastmod) {
    newXml += `    <lastmod>${entry.lastmod}</lastmod>\n`;
  }

  if (entry.changefreq) {
    newXml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
  }

  if (entry.priority !== null && entry.priority !== undefined) {
    newXml += `    <priority>${entry.priority}</priority>\n`;
  }

  newXml += '  </url>\n';
});

newXml += '</urlset>\n';

fs.writeFileSync(sitemapPath, newXml, 'utf8');
console.log('Sitemap fixed and saved successfully!');
console.log(`- Removed ${urlMatches.length - urlMap.size} duplicate entries`);
console.log('- Standardized date formats to YYYY-MM-DD');
console.log('- Removed unused namespaces');
console.log('- Cleaned up whitespace');
console.log(`- Final sitemap contains ${urlMap.size} unique URLs`);

