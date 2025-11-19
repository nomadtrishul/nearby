import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

const tipsDirectory = path.join(process.cwd(), 'content', 'pet-tips');

export interface PetTip {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  author?: string;
  category?: string;
  tags?: string[];
  image?: string;
  readingTime?: number;
  // HowTo specific fields
  estimatedCost?: string;
  totalTime?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  tools?: string[];
  supplies?: string[];
  steps?: Array<{
    name: string;
    text: string;
    image?: string;
    url?: string;
    duration?: string; // ISO 8601 duration for this step
    warning?: string; // Safety/caution warning for this step
  }>;
  faq?: Array<{
    question: string;
    answer: string;
  }>;
  vetNote?: string; // Note about when to see a vet
  dateModified?: string; // Last modification date
}

export function getAllTips(): PetTip[] {
  // Create directory if it doesn't exist
  if (!fs.existsSync(tipsDirectory)) {
    fs.mkdirSync(tipsDirectory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(tipsDirectory);
  const allTipsData = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(tipsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || content.substring(0, 150) + '...',
        content,
        author: data.author || 'Nearby Pet Care Team',
        category: data.category || 'General',
        tags: data.tags || [],
        image: data.image,
        readingTime: data.readingTime || Math.ceil(content.split(' ').length / 200),
        estimatedCost: data.estimatedCost,
        totalTime: data.totalTime,
        difficulty: data.difficulty || 'Beginner',
        tools: data.tools || [],
        supplies: data.supplies || [],
        steps: data.steps || [],
        faq: data.faq || [],
        vetNote: data.vetNote,
        dateModified: data.dateModified || data.date,
      };
    })
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });

  return allTipsData;
}

export async function getTipBySlug(slug: string): Promise<PetTip | null> {
  const fullPath = path.join(tipsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Convert markdown to HTML with table support
    const processedContent = await remark().use(remarkGfm).use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || content.substring(0, 150) + '...',
      content: contentHtml,
      author: data.author || 'Nearby Pet Care Team',
      category: data.category || 'General',
      tags: data.tags || [],
      image: data.image,
      readingTime: data.readingTime || Math.ceil(content.split(' ').length / 200),
      estimatedCost: data.estimatedCost,
      totalTime: data.totalTime,
      difficulty: data.difficulty || 'Beginner',
      tools: data.tools || [],
      supplies: data.supplies || [],
      steps: data.steps || [],
    };
  } catch (error) {
    // Log error in development, fail silently in production
    if (process.env.NODE_ENV === 'development') {
      console.error('Error processing markdown:', error);
    }
    return null;
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(tipsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(tipsDirectory);
  return fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

export function getTipsByCategory(category: string): PetTip[] {
  return getAllTips().filter((tip) => tip.category === category);
}

export function getRecentTips(limit: number = 5): PetTip[] {
  return getAllTips().slice(0, limit);
}

export function getAllCategories(): string[] {
  const tips = getAllTips();
  const categories = new Set(tips.map((tip) => tip.category || 'General'));
  return Array.from(categories).sort();
}

export function getAllTags(): string[] {
  const tips = getAllTips();
  const allTags = tips.flatMap((tip) => tip.tags || []);
  return Array.from(new Set(allTags)).sort();
}

