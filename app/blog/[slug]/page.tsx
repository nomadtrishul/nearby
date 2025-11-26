import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getPostBySlug, getAllSlugs, getAllPosts } from '@/lib/blog';
import BlogSidebar from '@/components/BlogSidebar';
import CopyButton from '@/components/CopyButton';
import RelatedArticles from '@/components/RelatedArticles';
import { getBaseUrl, getDefaultOgImage, ensureAbsoluteUrl } from '@/lib/site-config';

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

  const baseUrl = 'https://nearbypetcare.com';
  const publishedTime = new Date(post.date).toISOString();
  const modifiedTime = new Date(post.date).toISOString();
  const postUrl = `${baseUrl}/blog/${slug}`;
  const postImage = post.image || `${baseUrl}/og-image.png`;

  const truncatedExcerpt = post.excerpt.length > 160 ? post.excerpt.substring(0, 157) + '...' : post.excerpt;
  
  return {
    title: `${post.title} | Nearby Pet Care Blog`,
    description: truncatedExcerpt,
    keywords: post.tags || [],
    authors: [{ name: post.author || 'Nearby Pet Care Team' }],
    creator: post.author || 'Nearby Pet Care Team',
    publisher: 'Nearby Pet Care',
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: post.title,
      description: truncatedExcerpt,
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: [post.author || 'Nearby Pet Care Team'],
      tags: post.tags || [],
      url: postUrl,
      siteName: 'Nearby Pet Care',
      locale: 'en_US',
      alternateLocale: ['en_GB', 'en_CA', 'en_AU'],
      images: [
        {
          url: postImage,
          width: 1200,
          height: 630,
          alt: post.title,
          type: 'image/png',
        },
      ],
      section: post.category || 'General',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: truncatedExcerpt,
      images: [postImage],
      creator: '@nearbypetcare',
      site: '@nearbypetcare',
    },
    alternates: {
      canonical: postUrl,
      languages: {
        'en-US': postUrl,
        'en-GB': postUrl,
        'en-CA': postUrl,
        'en-AU': postUrl,
      },
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
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    other: {
      'article:published_time': publishedTime,
      'article:modified_time': modifiedTime,
      'article:author': post.author || 'Nearby Pet Care Team',
      'article:section': post.category || 'General',
      ...(post.tags && post.tags.length > 0 && { 'article:tag': post.tags.join(', ') }),
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

  const baseUrl = getBaseUrl();
  const publishedTime = new Date(post.date).toISOString();
  const modifiedTime = new Date(post.date).toISOString();
  const postUrl = `${baseUrl}/blog/${slug}`;
  const postImage = post.image ? ensureAbsoluteUrl(post.image) : getDefaultOgImage();
  const wordCount = post.content.split(' ').length;
  const readingTime = post.readingTime || Math.ceil(wordCount / 200);

  // Enhanced Article Structured Data (Schema.org)
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${postUrl}#blogposting`,
    headline: post.title,
    description: post.excerpt,
    image: {
      '@type': 'ImageObject',
      url: postImage,
      width: 1200,
      height: 630,
    },
    datePublished: publishedTime,
    dateModified: modifiedTime,
    author: {
      '@type': 'Person',
      '@id': `${baseUrl}/about#author`,
      name: post.author || 'Nearby Pet Care Team',
      url: `${baseUrl}/about`,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${baseUrl}#organization`,
      name: 'Nearby Pet Care',
      legalName: 'Nearby Pet Care',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
        width: 200,
        height: 48,
      },
      url: baseUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${postUrl}#webpage`,
      url: postUrl,
    },
    articleSection: post.category || 'General',
    keywords: post.tags?.join(', ') || '',
    wordCount: wordCount,
    timeRequired: `PT${readingTime}M`,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'Blog',
      '@id': `${baseUrl}/blog#blog`,
      name: 'Pet Care Blog',
      url: `${baseUrl}/blog`,
    },
    ...(post.tags && post.tags.length > 0 && {
      about: post.tags.map((tag) => ({
        '@type': 'Thing',
        name: tag,
      })),
    }),
  };

  // WebPage Structured Data
  const webPageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${postUrl}#webpage`,
    name: post.title,
    description: post.excerpt,
    url: postUrl,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${baseUrl}#website`,
      name: 'Nearby Pet Care',
      url: baseUrl,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: postImage,
      width: 1200,
      height: 630,
    },
    datePublished: publishedTime,
    dateModified: modifiedTime,
  };

  // Breadcrumb Structured Data (separate for better compatibility)
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${baseUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24" role="main" aria-label={`Article: ${post.title}`}>
      {/* Structured Data Scripts - All schemas for maximum SEO coverage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      {/* Hero Section - Optimized for Core Web Vitals */}
      <section 
        className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors"
        aria-labelledby="article-heading"
      >
        <div className="container mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <nav className="mb-6 sm:mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center justify-center space-x-2 text-xs sm:text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" itemProp="item">
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li className="text-gray-400 dark:text-gray-600" aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" itemProp="item">
                  <span itemProp="name">Blog</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li className="text-gray-400 dark:text-gray-600" aria-hidden="true">/</li>
              <li className="text-gray-900 dark:text-white font-medium transition-colors" aria-current="page" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name">{post.title}</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <h1 id="article-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors" itemProp="headline">
              {post.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 transition-colors" itemProp="description">
              {post.excerpt}
            </p>
            
            {/* Meta Information - Semantic HTML */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400" itemScope itemType="https://schema.org/Article">
              <meta itemProp="datePublished" content={publishedTime} />
              <meta itemProp="dateModified" content={modifiedTime} />
              <meta itemProp="author" content={post.author || 'Nearby Pet Care Team'} />
              <meta itemProp="publisher" content="Nearby Pet Care" />
              <meta itemProp="wordCount" content={wordCount.toString()} />
              <meta itemProp="timeRequired" content={`PT${readingTime}M`} />
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

              {/* Article Image - Optimized for Core Web Vitals */}
              {post.image && (
                <div className="mb-4 sm:mb-6" itemProp="image" itemScope itemType="https://schema.org/ImageObject">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={1200}
                    height={630}
                    className="w-full h-auto rounded-lg sm:rounded-xl"
                    loading="eager"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    itemProp="url"
                  />
                  <meta itemProp="width" content="1200" />
                  <meta itemProp="height" content="630" />
                </div>
              )}

              {/* Article Content - Semantic HTML with proper structure */}
              <div
                className="prose prose-xs sm:prose-sm lg:prose-base max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-strong:text-gray-900 dark:prose-strong:text-white prose-code:text-gray-900 dark:prose-code:text-white prose-pre:bg-gray-900 dark:prose-pre:bg-gray-800 prose-img:rounded-lg prose-img:shadow-lg"
                dangerouslySetInnerHTML={{ __html: post.content }}
                itemProp="articleBody"
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
                    className="inline-flex items-center px-3 py-1.5 min-h-[44px] bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    aria-label="Back to blog listing"
                  >
                    <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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

