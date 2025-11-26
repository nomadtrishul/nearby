/**
 * Example: Blog Post Page with SEO Component
 * 
 * This file demonstrates how to use the SEO.server component
 * with markdown blog posts (gray-matter + remark).
 * 
 * To use this pattern, replace the generateMetadata approach
 * with the SEO component as shown below.
 */

import { notFound } from 'next/navigation';
import { getPostBySlug, getAllSlugs } from '@/lib/blog';
import SEO from '@/components/SEO.server';
// ... other imports

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // SEO configuration from markdown front-matter
  // The SEO component handles:
  // - Title truncation (<70 chars)
  // - Description truncation (120-160 chars)
  // - Absolute URL conversion
  // - JSON-LD structured data generation
  // - All meta tags (OG, Twitter, etc.)
  
  return (
    <>
      <SEO seo={{
        title: post.title,
        description: post.excerpt,
        pathname: `/blog/${slug}`,
        image: post.image, // From front-matter: image: '/path/to/image.jpg'
        type: 'article',
        publishedTime: post.date, // ISO 8601 from front-matter
        modifiedTime: post.date, // Use date as modifiedTime (add dateModified to BlogPost interface if needed)
        author: post.author, // From front-matter
        section: post.category, // From front-matter: category: 'Health'
        tags: post.tags, // From front-matter: tags: ['dog', 'health']
        breadcrumbs: [
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: post.title, url: `/blog/${slug}` },
        ],
      }} />
      
      <main>
        {/* Your page content */}
        <article>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>
    </>
  );
}

/**
 * Markdown Front-Matter Example:
 * 
 * ---
 * title: "How to Care for Your Pet"
 * date: "2025-01-15T10:00:00Z"
 * dateModified: "2025-01-20T10:00:00Z"  # Optional
 * excerpt: "Learn the best practices for pet care..."
 * author: "Dr. Jane Smith"
 * category: "Health"
 * tags: ["dog", "health", "care"]
 * image: "/images/blog/pet-care.jpg"  # Relative or absolute URL
 * ---
 * 
 * Your markdown content here...
 */
