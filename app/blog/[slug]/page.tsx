import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getPostBySlug, getAllSlugs, getAllPosts } from '@/lib/blog';
import BlogSidebar from '@/components/BlogSidebar';
import CopyButton from '@/components/CopyButton';
import RelatedArticles from '@/components/RelatedArticles';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found | Nearby Pet Care Blog',
    };
  }

  const publishedTime = new Date(post.date).toISOString();
  const modifiedTime = new Date(post.date).toISOString();

  return {
    title: `${post.title} | Nearby Pet Care Blog`,
    description: post.excerpt,
    keywords: post.tags || [],
    authors: [{ name: post.author || 'Trishul D N.' }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: [post.author || 'Trishul D N.'],
      tags: post.tags || [],
      url: `https://nearbypetcare.com/blog/${slug}`,
      images: post.image ? [post.image] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
    alternates: {
      canonical: `https://nearbypetcare.com/blog/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'article:published_time': publishedTime,
      'article:modified_time': modifiedTime,
      'article:author': post.author || 'Trishul D N.',
      'article:section': post.category || 'General',
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related articles (same category or recent)
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter(p => p.slug !== slug && (p.category === post.category || p.tags?.some(tag => post.tags?.includes(tag))))
    .slice(0, 3);

  const publishedTime = new Date(post.date).toISOString();
  const modifiedTime = new Date(post.date).toISOString();

  // Article Structured Data
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image || 'https://nearbypetcare.com/og-image.jpg',
    datePublished: publishedTime,
    dateModified: modifiedTime,
    author: {
      '@type': 'Person',
      name: post.author || 'Trishul D N.',
      url: 'https://nearbypetcare.com/about'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nearbypetcare.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://nearbypetcare.com/blog/${slug}`
    },
    articleSection: post.category || 'General',
    keywords: post.tags?.join(', ') || '',
    wordCount: post.content.split(' ').length,
    timeRequired: `PT${post.readingTime || 5}M`,
    inLanguage: 'en-US'
  };

  // Breadcrumb Structured Data
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://nearbypetcare.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://nearbypetcare.com/blog'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://nearbypetcare.com/blog/${slug}`
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      {/* Hero Section */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <nav className="mb-6 sm:mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center justify-center space-x-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-gray-400 dark:text-gray-600">/</li>
              <li>
                <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li className="text-gray-400 dark:text-gray-600">/</li>
              <li className="text-gray-900 dark:text-white font-medium transition-colors" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
              {post.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 transition-colors">
              {post.excerpt}
            </p>
            
            {/* Meta Information */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              {/* Author */}
              {post.author && (
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="font-medium text-gray-900 dark:text-white">{post.author}</span>
                </div>
              )}
              
              {/* Date */}
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              
              {/* Reading Time */}
              {post.readingTime && (
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{post.readingTime} min read</span>
                </div>
              )}
              
              {/* Views */}
              {post.views !== undefined && (
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>{post.views.toLocaleString()} views</span>
                </div>
              )}
              
              {/* Copy Button */}
              <div className="flex items-center">
                <CopyButton 
                  content={`${post.title}\n\n${post.excerpt}\n\nRead more: https://nearbypetcare.com/blog/${post.slug}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="flex-1">
              {/* Category and Tags */}
              <div className="mb-4 sm:mb-6">
                {post.category && (
                  <div className="mb-3">
                    <span className="px-2.5 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium transition-colors">
                      {post.category}
                    </span>
                  </div>
                )}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog?tag=${encodeURIComponent(tag)}`}
                        className="px-2.5 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Article Image */}
              {post.image && (
                <div className="mb-4 sm:mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={1200}
                    height={630}
                    className="w-full h-auto rounded-lg sm:rounded-xl"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  />
                </div>
              )}

              {/* Article Content */}
              <div
                className="prose prose-xs sm:prose-sm lg:prose-base max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-strong:text-gray-900 dark:prose-strong:text-white prose-code:text-gray-900 dark:prose-code:text-white prose-pre:bg-gray-900 dark:prose-pre:bg-gray-800 prose-img:rounded-lg prose-img:shadow-lg"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Related Articles */}
              <RelatedArticles 
                articles={relatedPosts.map(p => ({
                  slug: p.slug,
                  title: p.title,
                  excerpt: p.excerpt,
                  category: p.category,
                  date: p.date,
                }))}
                currentSlug={slug}
              />

              {/* Article Footer */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 dark:border-white/10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors">
                      <strong className="text-gray-900 dark:text-white">Category:</strong> {post.category}
                    </p>
                  </div>
                  <Link
                    href="/blog"
                    className="inline-flex items-center px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-xs sm:text-sm"
                  >
                    <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Blog
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

