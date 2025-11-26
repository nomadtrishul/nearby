#!/usr/bin/env node

/**
 * SEO Validator Script
 * Validates SEO configuration for all pages in the application
 * 
 * Usage: node scripts/seo-check.js
 * 
 * This script:
 * - Loads SEO configurations from pages
 * - Validates each page's SEO setup
 * - Prints warnings and errors
 * - Exits with non-zero code if critical errors found
 */

const fs = require('fs');
const path = require('path');

// Try to import seo-utils
let seoUtils;
try {
  // Try TypeScript first (if ts-node is available)
  seoUtils = require('../lib/seo-utils.ts');
} catch (e) {
  try {
    // Fallback to compiled JS
    seoUtils = require('../lib/seo-utils.js');
  } catch (e2) {
    console.error('Error: Could not import seo-utils. Make sure the file exists.');
    process.exit(1);
  }
}

const { mergeSeo, validateSeoForPage, SITE } = seoUtils;

/**
 * Load SEO manifest (if exists)
 * This is a template file developers can create to define expected SEO for pages
 */
function loadSeoManifest() {
  const manifestPath = path.join(process.cwd(), 'seo-manifest.json');
  if (fs.existsSync(manifestPath)) {
    try {
      return JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    } catch (e) {
      console.warn('Warning: Could not parse seo-manifest.json');
      return {};
    }
  }
  return {};
}

/**
 * Collect SEO from blog posts
 */
function collectBlogSeo() {
  const blogDir = path.join(process.cwd(), 'content', 'blog');
  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
  const seoConfigs = [];

  files.forEach(file => {
    const filePath = path.join(blogDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Simple front-matter extraction (basic, not full gray-matter)
    const frontMatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (frontMatterMatch) {
      const frontMatter = frontMatterMatch[1];
      const slug = file.replace('.md', '');
      
      // Extract title and excerpt (basic parsing)
      const titleMatch = frontMatter.match(/title:\s*(.+)/);
      const excerptMatch = frontMatter.match(/excerpt:\s*(.+)/);
      const dateMatch = frontMatter.match(/date:\s*(.+)/);
      const imageMatch = frontMatter.match(/image:\s*(.+)/);
      
      const title = titleMatch ? titleMatch[1].trim().replace(/^["']|["']$/g, '') : 'Untitled';
      const excerpt = excerptMatch ? excerptMatch[1].trim().replace(/^["']|["']$/g, '') : '';
      const date = dateMatch ? dateMatch[1].trim().replace(/^["']|["']$/g, '') : new Date().toISOString();
      const image = imageMatch ? imageMatch[1].trim().replace(/^["']|["']$/g, '') : undefined;

      seoConfigs.push({
        title,
        description: excerpt,
        pathname: `/blog/${slug}`,
        image,
        type: 'article',
        publishedTime: date,
        modifiedTime: date,
      });
    }
  });

  return seoConfigs;
}

/**
 * Collect SEO from pet tips
 */
function collectTipsSeo() {
  const tipsDir = path.join(process.cwd(), 'content', 'pet-tips');
  if (!fs.existsSync(tipsDir)) {
    return [];
  }

  const files = fs.readdirSync(tipsDir).filter(f => f.endsWith('.md'));
  const seoConfigs = [];

  files.forEach(file => {
    const filePath = path.join(tipsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    const frontMatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (frontMatterMatch) {
      const frontMatter = frontMatterMatch[1];
      const slug = file.replace('.md', '');
      
      const titleMatch = frontMatter.match(/title:\s*(.+)/);
      const excerptMatch = frontMatter.match(/excerpt:\s*(.+)/);
      const dateMatch = frontMatter.match(/date:\s*(.+)/);
      const imageMatch = frontMatter.match(/image:\s*(.+)/);
      
      const title = titleMatch ? titleMatch[1].trim().replace(/^["']|["']$/g, '') : 'Untitled';
      const excerpt = excerptMatch ? excerptMatch[1].trim().replace(/^["']|["']$/g, '') : '';
      const date = dateMatch ? dateMatch[1].trim().replace(/^["']|["']$/g, '') : new Date().toISOString();
      const image = imageMatch ? imageMatch[1].trim().replace(/^["']|["']$/g, '') : undefined;

      seoConfigs.push({
        title,
        description: excerpt,
        pathname: `/pet-care-tips/${slug}`,
        image,
        type: 'article',
        publishedTime: date,
        modifiedTime: date,
      });
    }
  });

  return seoConfigs;
}

/**
 * Collect static page SEO from manifest
 */
function collectStaticPageSeo(manifest) {
  const staticPages = [
    { pathname: '/', title: 'Home', description: SITE.description },
    { pathname: '/blog', title: 'Blog', description: 'Pet care blog articles and guides' },
    { pathname: '/pet-care-tips', title: 'Pet Care Tips', description: 'Expert pet care tips and advice' },
    { pathname: '/about', title: 'About', description: 'About Nearby Pet Care' },
    { pathname: '/contact', title: 'Contact', description: 'Contact Nearby Pet Care' },
  ];

  return staticPages.map(page => {
    const manifestEntry = manifest[page.pathname];
    return {
      title: manifestEntry?.title || page.title,
      description: manifestEntry?.description || page.description,
      pathname: page.pathname,
    };
  });
}

/**
 * Main validation function
 */
function main() {
  console.log('🔍 SEO Validator - Checking all pages...\n');

  // Load manifest if exists
  const manifest = loadSeoManifest();

  // Collect SEO from all sources
  const allSeoInputs = [
    ...collectStaticPageSeo(manifest),
    ...collectBlogSeo(),
    ...collectTipsSeo(),
  ];

  if (allSeoInputs.length === 0) {
    console.log('⚠️  No pages found to validate.');
    return;
  }

  console.log(`Found ${allSeoInputs.length} pages to validate.\n`);

  // Merge and validate each
  const allMerged = allSeoInputs.map(input => mergeSeo(input));
  const allWarnings = {};

  allMerged.forEach(merged => {
    const warnings = validateSeoForPage(merged);
    if (warnings.length > 0) {
      allWarnings[merged.canonical] = warnings;
    }
  });

  // Print results
  const pagesWithWarnings = Object.keys(allWarnings).length;
  const totalWarnings = Object.values(allWarnings).flat().length;

  if (pagesWithWarnings === 0) {
    console.log('✅ All pages passed SEO validation!\n');
    process.exit(0);
  }

  console.log(`⚠️  Found ${totalWarnings} warning(s) across ${pagesWithWarnings} page(s):\n`);

  Object.entries(allWarnings).forEach(([url, warnings]) => {
    console.log(`📄 ${url}`);
    warnings.forEach(warning => {
      console.log(`   ⚠️  ${warning}`);
    });
    console.log('');
  });

  // Determine exit code
  const criticalErrors = Object.values(allWarnings).flat().filter(w => 
    w.includes('Missing title') || 
    w.includes('Missing description') ||
    w.includes('not absolute')
  );

  if (criticalErrors.length > 0) {
    console.log(`❌ Found ${criticalErrors.length} critical error(s). Please fix before deploying.\n`);
    process.exit(1);
  } else {
    console.log('⚠️  Warnings found but no critical errors. Review and fix when possible.\n');
    process.exit(0);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main, collectBlogSeo, collectTipsSeo, collectStaticPageSeo };
