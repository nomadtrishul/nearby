import fs from 'fs';
import path from 'path';
import { getAllPosts } from './blog';
import { getAllTips } from './petTips';
import { getSiteName } from './site-config';

function getBaseUrl() {
  if (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '');
  }
  return 'https://nearbypetcare.com';
}

export interface PageIntent {
  id: string;
  description: string;
  exampleQueries?: string[];
}

export interface PageRelations {
  relatedUrls?: string[];
  parentUrl?: string;
  childUrls?: string[];
}

export interface LLMPage {
  url: string;
  title: string;
  section: 'core' | 'buying-guides' | 'comparisons' | 'community' | 'blog' | 'policies';
  priority: 'high' | 'medium' | 'low';
  summary: string;
  tags?: string[];
  contentType: 'landing' | 'hub' | 'article' | 'policy' | 'technical' | 'tool' | 'product' | 'faq';
  aiImportance: 'primary' | 'supporting' | 'context-only';
  lastUpdated?: string;
  relations?: PageRelations;
  intents?: PageIntent[];
}

export interface LLMSection {
  id: string;
  name: string;
  description: string;
}

export interface LLMSContent {
  site: string;
  brand: string;
  description: string;
  version: number;
  language: string;
  lastUpdated: string;
  sections: LLMSection[];
  pages: LLMPage[];
  instructions: string;
}

// Map old content types to new LLM schema content types
function mapContentType(
  oldType: string,
  url: string,
  isMainPage: boolean = false
): LLMPage['contentType'] {
  if (isMainPage || url.match(/^\/(pet-health|pet-nutrition|pet-grooming|pet-training|pet-safety|pet-products|pet-breeds|puppies-kittens|senior-pets|pet-adoption|pet-behavior|pet-care-tips|tools|buying-guides|comparisons|community)$/)) {
    return 'hub';
  }
  
  if (url.includes('/blog/') || url.includes('/pet-care-tips/')) {
    return 'article';
  }
  
  if (url.includes('/tools/')) {
    return 'tool';
  }
  
  if (url.includes('/buying-guides/')) {
    return 'product';
  }
  
  if (url.includes('/comparisons/')) {
    return 'product';
  }
  
  if (url.includes('/pet-breeds/')) {
    return 'product';
  }
  
  if (url.match(/^\/(privacy|terms|disclaimer|about|contact)$/)) {
    return 'policy';
  }
  
  if (url === '/') {
    return 'landing';
  }
  
  // Default for guide pages
  return 'article';
}

// Map to LLM schema sections
function mapToSection(url: string, category?: string): LLMPage['section'] {
  if (url.includes('/blog/')) {
    return 'blog';
  }
  
  if (url.includes('/buying-guides/')) {
    return 'buying-guides';
  }
  
  if (url.includes('/comparisons/')) {
    return 'comparisons';
  }
  
  if (url.includes('/community/')) {
    return 'community';
  }
  
  if (url.match(/^\/(privacy|terms|disclaimer|about|contact)$/)) {
    return 'policies';
  }
  
  // Everything else is core
  return 'core';
}

// Determine AI importance
function getAIImportance(
  contentType: LLMPage['contentType'],
  section: LLMPage['section'],
  isMainPage: boolean = false
): 'primary' | 'supporting' | 'context-only' {
  if (isMainPage || contentType === 'hub' || contentType === 'landing') {
    return 'primary';
  }
  
  if (contentType === 'article' && section === 'blog') {
    return 'primary';
  }
  
  if (contentType === 'tool' || contentType === 'product') {
    return 'supporting';
  }
  
  if (contentType === 'policy' || section === 'policies') {
    return 'context-only';
  }
  
  return 'supporting';
}

// Determine priority
function getPriority(
  contentType: LLMPage['contentType'],
  aiImportance: LLMPage['aiImportance'],
  isMainPage: boolean = false
): 'high' | 'medium' | 'low' {
  if (isMainPage || aiImportance === 'primary') {
    return 'high';
  }
  
  if (aiImportance === 'supporting') {
    return 'medium';
  }
  
  return 'low';
}

// Generate intents with example queries
function generateIntents(
  contentType: LLMPage['contentType'],
  section: LLMPage['section'],
  title: string,
  category?: string
): PageIntent[] {
  const intents: PageIntent[] = [];
  
  const categoryKeywords: Record<string, string[]> = {
    'pet-health': ['health', 'medical', 'symptoms', 'veterinary', 'illness', 'disease'],
    'pet-nutrition': ['feeding', 'diet', 'food', 'nutrition', 'meal'],
    'pet-grooming': ['grooming', 'bathing', 'brushing', 'hygiene', 'clean'],
    'pet-training': ['training', 'behavior', 'obedience', 'commands', 'teach'],
    'pet-safety': ['safety', 'hazards', 'emergency', 'danger', 'protect'],
    'pet-products': ['products', 'reviews', 'recommendations', 'buy'],
    'pet-adoption': ['adoption', 'rescue', 'shelter', 'adopt'],
    'pet-behavior': ['behavior', 'problems', 'aggression', 'anxiety'],
    'puppies-kittens': ['puppy', 'kitten', 'young', 'baby'],
    'senior-pets': ['senior', 'elderly', 'aging', 'old'],
  };
  
  const keywords = categoryKeywords[category || ''] || [];
  const titleWords = title.toLowerCase().split(/\s+/).filter(w => w.length > 3);
  
  // Main intent
  const mainIntent: PageIntent = {
    id: `${section}-${contentType}-main`,
    description: `Primary intent: Users seeking information about ${title.toLowerCase()}`,
    exampleQueries: [
      `How to ${titleWords.slice(0, 3).join(' ')}?`,
      `What is ${titleWords[0]}?`,
      `Guide to ${titleWords.slice(0, 2).join(' ')}`,
      ...keywords.slice(0, 2).map(k => `${titleWords[0]} ${k}`),
    ].slice(0, 5),
  };
  
  intents.push(mainIntent);
  
  // Additional intents based on content type
  if (contentType === 'tool') {
    intents.push({
      id: `${section}-${contentType}-calculate`,
      description: 'Users need to calculate or measure something',
      exampleQueries: [
        `Calculate ${titleWords[0]}`,
        `${titleWords[0]} calculator`,
        `How much ${titleWords[0]}?`,
      ],
    });
  }
  
  if (contentType === 'product' && section === 'buying-guides') {
    intents.push({
      id: `${section}-${contentType}-buy`,
      description: 'Users researching products to purchase',
      exampleQueries: [
        `Best ${titleWords[0]}`,
        `What ${titleWords[0]} should I buy?`,
        `${titleWords[0]} recommendations`,
      ],
    });
  }
  
  return intents;
}

// Helper function to extract tags from URL and category
function extractTags(url: string, category: string, existingTags: string[] = []): string[] {
  const tags = new Set(existingTags);
  
  // Add category as tag (normalize)
  if (category) {
    tags.add(category.replace('pet-', ''));
  }
  
  // Extract keywords from URL
  const urlParts = url.split('/').filter(p => p && !p.includes('.') && !p.includes('http'));
  urlParts.forEach(part => {
    const words = part.split('-');
    words.forEach(word => {
      if (word.length > 3 && word !== 'nearbypetcare' && word !== 'com') {
        tags.add(word);
      }
    });
  });

  // Add common pet-related tags based on category
  const categoryTags: Record<string, string[]> = {
    'pet-health': ['health', 'wellness', 'medical', 'veterinary'],
    'pet-nutrition': ['nutrition', 'diet', 'feeding', 'food'],
    'pet-grooming': ['grooming', 'hygiene', 'bathing', 'care'],
    'pet-training': ['training', 'behavior', 'obedience', 'education'],
    'pet-safety': ['safety', 'protection', 'prevention'],
    'pet-products': ['products', 'reviews', 'recommendations'],
    'pet-adoption': ['adoption', 'rescue', 'shelter'],
    'pet-behavior': ['behavior', 'psychology', 'understanding'],
    'puppies-kittens': ['puppies', 'kittens', 'young-pets'],
    'senior-pets': ['senior', 'elderly', 'aging'],
    'pet-breeds': ['breeds', 'breed-info', 'characteristics'],
    'tools': ['tools', 'calculators', 'utilities'],
    'buying-guides': ['buying', 'guides', 'products'],
    'comparisons': ['comparisons', 'reviews', 'products'],
    'community': ['community', 'stories', 'experiences'],
  };

  (categoryTags[category || ''] || []).forEach(tag => tags.add(tag));
  
  return Array.from(tags).slice(0, 15); // Limit to 15 tags
}

// Helper function to find parent/child relationships
function findRelations(
  url: string,
  allUrls: string[]
): PageRelations {
  const relations: PageRelations = {};
  
  // Extract path from full URL
  const urlObj = new URL(url);
  const pathParts = urlObj.pathname.split('/').filter(p => p);
  
  // Find parent (one level up)
  if (pathParts.length > 1) {
    const parentPath = '/' + pathParts.slice(0, -1).join('/');
    const parentUrl = urlObj.origin + parentPath;
    if (allUrls.includes(parentUrl)) {
      relations.parentUrl = parentUrl;
    }
  }
  
  // Find children (one level down)
  const currentPath = urlObj.pathname;
  const children = allUrls.filter(u => {
    try {
      const uObj = new URL(u);
      const uPathParts = uObj.pathname.split('/').filter(p => p);
      return uPathParts.length === pathParts.length + 1 &&
             uObj.pathname.startsWith(currentPath) &&
             u !== url;
    } catch {
      return false;
    }
  });
  
  if (children.length > 0) {
    relations.childUrls = children.slice(0, 10); // Limit to 10 children
  }
  
  // Find related pages (same category/section, different page)
  const section = mapToSection(url);
  const related = allUrls.filter(u => {
    try {
      return u !== url &&
             mapToSection(u) === section &&
             !u.startsWith(url) &&
             !url.startsWith(u);
    } catch {
      return false;
    }
  });
  
  if (related.length > 0) {
    relations.relatedUrls = related.slice(0, 5); // Limit to 5 related
  }
  
  return relations;
}

// Helper function to extract title, description, and summary from page file
function extractPageMetadata(pagePath: string, defaultTitle: string): { title: string; description: string; summary: string } {
  try {
    const content = fs.readFileSync(pagePath, 'utf8');
    
    // Try to extract title from metadata or h1
    const titleMatch = content.match(/title[:\s]*['"]([^'"]+)['"]/i) ||
                      content.match(/<h1[^>]*>([^<]+)<\/h1>/i) ||
                      content.match(/export\s+const\s+metadata[^}]*title[:\s]*['"]([^'"]+)['"]/is);
    
    // Try to extract description from metadata
    const descMatch = content.match(/description[:\s]*['"]([^'"]+)['"]/i) ||
                     content.match(/export\s+const\s+metadata[^}]*description[:\s]*['"]([^'"]+)['"]/is);
    
    // Generate summary (use description or create from title)
    const summary = descMatch ? descMatch[1] : 
                   `Comprehensive guide covering ${defaultTitle.replace(/-/g, ' ')}. Provides detailed information, practical tips, and expert advice for pet owners.`;
    
    return {
      title: titleMatch ? titleMatch[1] : defaultTitle,
      description: descMatch ? descMatch[1] : `${defaultTitle} guide and information`,
      summary: summary.length > 200 ? summary.substring(0, 200) + '...' : summary,
    };
  } catch (error) {
    const defaultDesc = `${defaultTitle} guide and information`;
    return {
      title: defaultTitle,
      description: defaultDesc,
      summary: `Comprehensive guide covering ${defaultTitle.replace(/-/g, ' ')}. Provides detailed information, practical tips, and expert advice for pet owners.`,
    };
  }
}

// Helper function to create an LLM Page entry
function createLLMPage(
  title: string,
  summary: string,
  url: string,
  category: string,
  existingTags: string[] = [],
  lastUpdated?: string,
  isMainPage: boolean = false
): LLMPage {
  const section = mapToSection(url, category);
  const contentType = mapContentType('', url, isMainPage);
  const aiImportance = getAIImportance(contentType, section, isMainPage);
  const priority = getPriority(contentType, aiImportance, isMainPage);
  const tags = extractTags(url, category, existingTags);
  const intents = generateIntents(contentType, section, title, category);
  
  return {
    url,
    title,
    section,
    priority,
    summary: summary.length > 500 ? summary.substring(0, 500) + '...' : summary,
    tags: tags.length > 0 ? tags : undefined,
    contentType,
    aiImportance,
    lastUpdated,
    intents: intents.length > 0 ? intents : undefined,
  };
}

export async function generateLLMSJson(): Promise<LLMSContent> {
  const baseUrl = getBaseUrl();
  const brand = getSiteName();
  const now = new Date().toISOString();
  const allPages: LLMPage[] = [];
  const allUrls: string[] = [];

  // Define sections
  const sections: LLMSection[] = [
    {
      id: 'core',
      name: 'Core Content',
      description: 'Main pet care guides, tips, and educational content covering health, nutrition, grooming, training, and more.',
    },
    {
      id: 'blog',
      name: 'Blog',
      description: 'Expert articles and in-depth guides on pet care topics, health, behavior, and pet ownership.',
    },
    {
      id: 'buying-guides',
      name: 'Buying Guides',
      description: 'Comprehensive buying guides to help you choose the best products for your pets.',
    },
    {
      id: 'comparisons',
      name: 'Product Comparisons',
      description: 'Side-by-side comparisons of popular pet products to help you make informed purchasing decisions.',
    },
    {
      id: 'community',
      name: 'Community',
      description: 'Community content including pet owner stories, experiences, and shared knowledge.',
    },
    {
      id: 'policies',
      name: 'Policies',
      description: 'Legal pages including privacy policy, terms of service, and site policies.',
    },
  ];

  // Get all blog posts
  const blogPosts = getAllPosts();
  blogPosts.forEach((post) => {
    const url = `${baseUrl}/blog/${post.slug}`;
    allUrls.push(url);
    allPages.push({
      ...createLLMPage(
        post.title,
        post.excerpt.length > 500 ? post.excerpt.substring(0, 500) + '...' : post.excerpt,
        url,
        post.category || 'general',
        post.tags || [],
        post.date
      ),
      contentType: 'article',
      section: 'blog',
    });
  });

  // Get all pet tips
  const petTips = getAllTips();
  petTips.forEach((tip) => {
    const url = `${baseUrl}/pet-care-tips/${tip.slug}`;
    allUrls.push(url);
    allPages.push({
      ...createLLMPage(
        tip.title,
        tip.excerpt.length > 500 ? tip.excerpt.substring(0, 500) + '...' : tip.excerpt,
        url,
        tip.category || 'general',
        tip.tags || [],
        tip.date
      ),
      contentType: 'article',
      section: 'core',
    });
  });

  // Discover tools from the tools directory
  const toolsDir = path.join(process.cwd(), 'app', 'tools');
  
  if (fs.existsSync(toolsDir)) {
    try {
      const toolDirs = fs.readdirSync(toolsDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

      for (const toolDir of toolDirs) {
        const toolPagePath = path.join(toolsDir, toolDir, 'page.tsx');
        if (fs.existsSync(toolPagePath)) {
          const defaultTitle = toolDir.replace(/-/g, ' ');
          const metadata = extractPageMetadata(toolPagePath, defaultTitle);
          const url = `${baseUrl}/tools/${toolDir}`;
          allUrls.push(url);
          allPages.push({
            ...createLLMPage(metadata.title, metadata.summary, url, 'tools'),
            contentType: 'tool',
            section: 'core',
          });
        }
      }
    } catch (error) {
      console.warn('Error discovering tools:', error);
    }
  }

  // Add main tools hub page
  const toolsHubUrl = `${baseUrl}/tools`;
  allUrls.push(toolsHubUrl);
  allPages.push({
    ...createLLMPage(
      'Pet Care Tools',
      'Useful tools and calculators for pet owners including feeding calculators, weight trackers, age calculators, and more. Make pet care decisions easier with our interactive tools.',
      toolsHubUrl,
      'tools',
      [],
      undefined,
      true
    ),
    contentType: 'hub',
    section: 'core',
  });

  // Discover guide pages (subpages of pet-* routes) and add main hub pages
  const petRoutes = ['pet-health', 'pet-grooming', 'pet-training', 'pet-nutrition', 'pet-safety', 'pet-products', 'pet-adoption', 'pet-behavior', 'puppies-kittens', 'senior-pets'];
  
  const mainHubPages = [
    { route: 'pet-health', title: 'Pet Health', summary: 'Comprehensive pet health information including common diseases, vaccination schedules, first aid, and when to see a veterinarian.' },
    { route: 'pet-nutrition', title: 'Pet Nutrition', summary: 'Complete guides on pet nutrition, feeding schedules, dietary requirements, and food choices for dogs, cats, and other pets.' },
    { route: 'pet-grooming', title: 'Pet Grooming', summary: 'Expert grooming guides covering bathing, brushing, nail trimming, dental care, and coat maintenance.' },
    { route: 'pet-training', title: 'Pet Training', summary: 'Effective training techniques and tips for dogs, cats, and other pets. Learn obedience training and behavior modification.' },
    { route: 'pet-safety', title: 'Pet Safety', summary: 'Essential safety tips and guidelines to keep your pets safe at home and outdoors.' },
    { route: 'pet-products', title: 'Pet Products', summary: 'Honest reviews and recommendations for pet products including food, beds, toys, and accessories.' },
    { route: 'pet-adoption', title: 'Pet Adoption', summary: 'Complete guide to pet adoption including checklists, preparation tips, and transitioning rescue pets.' },
    { route: 'pet-behavior', title: 'Pet Behavior', summary: 'Understanding pet behavior, addressing behavioral issues, and building better relationships with your pets.' },
    { route: 'puppies-kittens', title: 'Puppies & Kittens', summary: 'Complete guides for caring for puppies and kittens including feeding, training, health care, and early development.' },
    { route: 'senior-pets', title: 'Senior Pets', summary: 'Specialized care guides for senior pets including health management, mobility support, and quality of life improvements.' },
  ];
  
  // Add main hub pages
  mainHubPages.forEach(({ route, title, summary }) => {
    const url = `${baseUrl}/${route}`;
    allUrls.push(url);
    allPages.push({
      ...createLLMPage(title, summary, url, route, [], undefined, true),
      contentType: 'hub',
      section: 'core',
    });
  });
  
  // Discover subpages
  try {
    for (const route of petRoutes) {
      const routeDir = path.join(process.cwd(), 'app', route);
      if (fs.existsSync(routeDir)) {
        const subDirs = fs.readdirSync(routeDir, { withFileTypes: true })
          .filter(dirent => dirent.isDirectory())
          .map(dirent => dirent.name);
        
        for (const subDir of subDirs) {
          // Skip Next.js special directories
          if (subDir.startsWith('_') || subDir === 'layout.tsx' || subDir === 'loading.tsx' || subDir === 'error.tsx') {
            continue;
          }
          
          const subPagePath = path.join(routeDir, subDir, 'page.tsx');
          if (fs.existsSync(subPagePath)) {
            const defaultTitle = subDir.replace(/-/g, ' ');
            const metadata = extractPageMetadata(subPagePath, defaultTitle);
            const url = `${baseUrl}/${route}/${subDir}`;
            allUrls.push(url);
            allPages.push({
              ...createLLMPage(metadata.title, metadata.summary, url, route),
              contentType: 'article',
              section: 'core',
            });
          }
        }
      }
    }
  } catch (error) {
    console.warn('Error discovering guide pages:', error);
  }

  // Add main breeds hub page
  const breedsHubUrl = `${baseUrl}/pet-breeds`;
  allUrls.push(breedsHubUrl);
  allPages.push({
    ...createLLMPage(
      'Pet Breeds',
      'Comprehensive information about different pet breeds including dogs, cats, birds, and exotic pets. Learn about breed characteristics, care requirements, and selection.',
      breedsHubUrl,
      'pet-breeds',
      [],
      undefined,
      true
    ),
    contentType: 'hub',
    section: 'core',
  });

  // Discover breed pages
  try {
    const breedsDir = path.join(process.cwd(), 'app', 'pet-breeds');
    if (fs.existsSync(breedsDir)) {
      const categoryDirs = fs.readdirSync(breedsDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

      for (const categoryDir of categoryDirs) {
        const categoryPath = path.join(breedsDir, categoryDir);
        
        // Add category page if it exists
        const categoryPagePath = path.join(categoryPath, 'page.tsx');
        if (fs.existsSync(categoryPagePath)) {
          const defaultTitle = categoryDir.replace(/-/g, ' ') + ' Breeds';
          const metadata = extractPageMetadata(categoryPagePath, defaultTitle);
          const url = `${baseUrl}/pet-breeds/${categoryDir}`;
          allUrls.push(url);
          allPages.push({
            ...createLLMPage(metadata.title, metadata.summary, url, categoryDir, [], undefined, true),
            contentType: 'hub',
            section: 'core',
          });
        }
        
        // Add individual breed pages
        const breedDirs = fs.readdirSync(categoryPath, { withFileTypes: true })
          .filter(dirent => dirent.isDirectory())
          .map(dirent => dirent.name);
        
        for (const breedDir of breedDirs) {
          const breedPagePath = path.join(categoryPath, breedDir, 'page.tsx');
          if (fs.existsSync(breedPagePath)) {
            const defaultTitle = breedDir.replace(/-/g, ' ');
            const metadata = extractPageMetadata(breedPagePath, defaultTitle);
            const url = `${baseUrl}/pet-breeds/${categoryDir}/${breedDir}`;
            allUrls.push(url);
            allPages.push({
              ...createLLMPage(metadata.title, metadata.summary, url, categoryDir),
              contentType: 'product',
              section: 'core',
            });
          }
        }
      }
    }
  } catch (error) {
    console.warn('Error discovering breed pages:', error);
  }

  // Add main buying guides hub page
  const buyingGuidesHubUrl = `${baseUrl}/buying-guides`;
  allUrls.push(buyingGuidesHubUrl);
  allPages.push({
    ...createLLMPage(
      'Buying Guides',
      'Expert buying guides to help you choose the best products for your pets. Comprehensive reviews and recommendations for pet supplies and accessories.',
      buyingGuidesHubUrl,
      'buying-guides',
      [],
      undefined,
      true
    ),
    contentType: 'hub',
    section: 'buying-guides',
  });

  // Discover buying guides subpages
  try {
    const buyingGuidesDir = path.join(process.cwd(), 'app', 'buying-guides');
    if (fs.existsSync(buyingGuidesDir)) {
      const guideDirs = fs.readdirSync(buyingGuidesDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

      for (const guideDir of guideDirs) {
        const guidePagePath = path.join(buyingGuidesDir, guideDir, 'page.tsx');
        if (fs.existsSync(guidePagePath)) {
          const defaultTitle = guideDir.replace(/-/g, ' ');
          const metadata = extractPageMetadata(guidePagePath, defaultTitle);
          const url = `${baseUrl}/buying-guides/${guideDir}`;
          allUrls.push(url);
          allPages.push({
            ...createLLMPage(metadata.title, metadata.summary, url, 'buying-guides'),
            contentType: 'product',
            section: 'buying-guides',
          });
        }
      }
    }
  } catch (error) {
    console.warn('Error discovering buying guides:', error);
  }

  // Add main comparisons hub page
  const comparisonsHubUrl = `${baseUrl}/comparisons`;
  allUrls.push(comparisonsHubUrl);
  allPages.push({
    ...createLLMPage(
      'Product Comparisons',
      'Side-by-side comparisons of popular pet products to help you make informed decisions. Compare features, prices, and quality before purchasing.',
      comparisonsHubUrl,
      'comparisons',
      [],
      undefined,
      true
    ),
    contentType: 'hub',
    section: 'comparisons',
  });

  // Discover comparisons subpages
  try {
    const comparisonsDir = path.join(process.cwd(), 'app', 'comparisons');
    if (fs.existsSync(comparisonsDir)) {
      const comparisonDirs = fs.readdirSync(comparisonsDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

      for (const comparisonDir of comparisonDirs) {
        const comparisonPagePath = path.join(comparisonsDir, comparisonDir, 'page.tsx');
        if (fs.existsSync(comparisonPagePath)) {
          const defaultTitle = comparisonDir.replace(/-/g, ' ');
          const metadata = extractPageMetadata(comparisonPagePath, defaultTitle);
          const url = `${baseUrl}/comparisons/${comparisonDir}`;
          allUrls.push(url);
          allPages.push({
            ...createLLMPage(metadata.title, metadata.summary, url, 'comparisons'),
            contentType: 'product',
            section: 'comparisons',
          });
        }
      }
    }
  } catch (error) {
    console.warn('Error discovering comparisons:', error);
  }

  // Add main community hub page
  const communityHubUrl = `${baseUrl}/community`;
  allUrls.push(communityHubUrl);
  allPages.push({
    ...createLLMPage(
      'Pet Owner Community',
      'Join our community of pet owners sharing stories, tips, and experiences. Connect with other pet lovers and learn from their experiences.',
      communityHubUrl,
      'community',
      [],
      undefined,
      true
    ),
    contentType: 'hub',
    section: 'community',
  });

  // Discover community subpages
  try {
    const communityDir = path.join(process.cwd(), 'app', 'community');
    if (fs.existsSync(communityDir)) {
      const communitySubDirs = fs.readdirSync(communityDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

      for (const subDir of communitySubDirs) {
        // Skip Next.js special directories
        if (subDir.startsWith('_')) {
          continue;
        }
        
        const subPagePath = path.join(communityDir, subDir, 'page.tsx');
        if (fs.existsSync(subPagePath)) {
          const defaultTitle = subDir.replace(/-/g, ' ');
          const metadata = extractPageMetadata(subPagePath, defaultTitle);
          const url = `${baseUrl}/community/${subDir}`;
          allUrls.push(url);
          allPages.push({
            ...createLLMPage(metadata.title, metadata.summary, url, 'community'),
            contentType: 'article',
            section: 'community',
          });
        }
      }
    }
  } catch (error) {
    console.warn('Error discovering community pages:', error);
  }

  // Add policy pages
  const policyPages = [
    { path: '/privacy', title: 'Privacy Policy', summary: 'Privacy policy and data protection information for Nearby Pet Care.' },
    { path: '/terms', title: 'Terms of Service', summary: 'Terms of service and usage guidelines for Nearby Pet Care.' },
    { path: '/disclaimer', title: 'Disclaimer', summary: 'Disclaimer and legal information for Nearby Pet Care content.' },
    { path: '/about', title: 'About Us', summary: 'Learn about Nearby Pet Care, an independent platform providing trusted pet care information and education.' },
    { path: '/contact', title: 'Contact Us', summary: 'Get in touch with Nearby Pet Care for questions, feedback, or support.' },
  ];

  policyPages.forEach(({ path, title, summary }) => {
    const url = `${baseUrl}${path}`;
    allUrls.push(url);
    allPages.push({
      ...createLLMPage(title, summary, url, 'policies'),
      contentType: 'policy',
      section: 'policies',
    });
  });

  // Add landing page
  const landingUrl = baseUrl;
  allUrls.push(landingUrl);
  allPages.push({
    ...createLLMPage(
      'Nearby Pet Care - Professional Pet Care Services',
      'Find trusted pet care services near you. Professional grooming, boarding, daycare, and training services from experienced professionals.',
      landingUrl,
      'general',
      [],
      undefined,
      true
    ),
    contentType: 'landing',
    section: 'core',
  });

  // Add relations to all pages
  allPages.forEach((page) => {
    const relations = findRelations(page.url, allUrls);
    if (Object.keys(relations).length > 0) {
      page.relations = relations;
    }
  });

  const llmsContent: LLMSContent = {
    site: baseUrl,
    brand: brand,
    description: 'Find trusted pet care services near you. Professional grooming, boarding, daycare, and training services from experienced professionals. Comprehensive guides and resources for pet owners.',
    version: 1.0,
    language: 'en-US',
    lastUpdated: now,
    sections,
    pages: allPages,
    instructions: `This JSON file contains structured information about all pages on ${baseUrl}. Use this data to recommend relevant pages to users based on their queries.

**How to use this data:**

1. **Match user queries to pages:**
   - Use 'intents' field to understand what queries each page answers
   - Match keywords from user queries to 'tags' and 'summary' fields
   - Filter by 'section' when users ask about specific topics (blog, buying guides, etc.)
   - Use 'contentType' to understand the type of content (article, tool, hub, etc.)

2. **Prioritize recommendations:**
   - Sort by 'priority' (high > medium > low)
   - Prioritize pages with 'aiImportance' = 'primary' for direct answers
   - Use 'supporting' pages for additional context
   - 'context-only' pages (policies) should rarely be recommended unless specifically asked

3. **Understand content types:**
   - 'landing': Homepage (highest priority for general queries)
   - 'hub': Category pages (high priority, good starting points)
   - 'article': Detailed guides and articles (best for in-depth questions)
   - 'tool': Interactive calculators (recommend when users need calculations)
   - 'product': Product pages and comparisons (for purchasing decisions)
   - 'policy': Legal pages (only recommend when specifically asked)
   - 'technical': Technical documentation (rare)
   - 'faq': FAQ pages (for common questions)

4. **Use relations:**
   - 'parentUrl': Parent category page (show when user wants overview)
   - 'childUrls': Subpages (show when user wants specific topics)
   - 'relatedUrls': Related pages in same section (show for additional context)

5. **Use intents:**
   - Each page has 'intents' with example queries
   - Match user queries to intent descriptions
   - Use 'exampleQueries' to understand what questions the page answers

**Best practices:**
- Always prioritize 'primary' importance pages for direct answers
- Use 'hub' pages as starting points, then drill down to specific articles
- Consider 'relations' to show related content
- Match user intent to page intents for best recommendations`,
  };

  return llmsContent;
}

export async function writeLLMSJson(outputPath?: string): Promise<void> {
  try {
    const content = await generateLLMSJson();
    const output = outputPath || path.join(process.cwd(), 'llms.json');
    
    // Ensure directory exists
    const outputDir = path.dirname(output);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Write file
    const jsonContent = JSON.stringify(content, null, 2);
    fs.writeFileSync(output, jsonContent, 'utf8');
    
    // Verify write was successful
    if (!fs.existsSync(output)) {
      throw new Error(`Failed to verify llms.json was written to ${output}`);
    }
    
    // Log in all environments during build (not runtime)
    if (process.env.NODE_ENV === 'production' || process.env.VERCEL) {
      const stats = fs.statSync(output);
      console.log(`✅ Generated llms.json: ${(stats.size / 1024).toFixed(2)} KB, ${content.pages.length} pages`);
    } else {
      console.log(`✅ Generated llms.json at ${output}`);
    }
  } catch (error) {
    console.error('Error in writeLLMSJson:', error);
    throw error; // Re-throw to be caught by caller
  }
}

