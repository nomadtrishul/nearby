import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

export interface BlogPost {
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
  views?: number;
}

export function getAllPosts(): BlogPost[] {
  // Create directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || content.substring(0, 150) + '...',
        content,
        author: data.author || 'Trishul D N.',
        category: data.category || 'General',
        tags: data.tags || [],
        image: data.image,
        readingTime: data.readingTime || Math.ceil(content.split(' ').length / 200),
        views: data.views || 0,
      };
    })
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });

  return allPostsData;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
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
      views: data.views || 0,
    };
  } catch (error) {
    console.error('Error processing markdown:', error);
    return null;
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter((post) => post.category === category);
}

export function getRecentPosts(limit: number = 5): BlogPost[] {
  return getAllPosts().slice(0, limit);
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map((post) => post.category || 'General'));
  return Array.from(categories).sort();
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const allTags = posts.flatMap((post) => post.tags || []);
  return Array.from(new Set(allTags)).sort();
}

