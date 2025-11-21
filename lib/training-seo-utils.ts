// SEO utility functions for pet-training pages

export interface ArticleSEOData {
  title: string;
  description: string;
  url: string;
  keywords: string[];
  datePublished?: string;
  dateModified?: string;
  articleBody?: string;
  wordCount?: number;
  faqs?: Array<{ question: string; answer: string }>;
}

export function generateArticleStructuredData(data: ArticleSEOData) {
  const currentDate = new Date().toISOString();
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data.description,
    url: data.url,
    datePublished: data.datePublished || '2024-01-01T00:00:00+00:00',
    dateModified: data.dateModified || currentDate,
    author: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      url: 'https://nearbypetcare.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nearbypetcare.com/logo.png',
        width: 200,
        height: 48,
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      url: 'https://nearbypetcare.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nearbypetcare.com/logo.png',
        width: 200,
        height: 48,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': data.url,
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
      alt: data.title,
    },
    articleSection: 'Pet Training',
    articleBody: data.articleBody || data.description,
    keywords: data.keywords.join(', '),
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    wordCount: data.wordCount || 2000,
    timeRequired: 'PT30M',
    educationalLevel: 'Beginner',
    about: {
      '@type': 'Thing',
      name: 'Pet Training',
    },
    mentions: data.keywords.slice(0, 5).map(keyword => ({
      '@type': 'Thing',
      name: keyword,
    })),
  };
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; href: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://nearbypetcare.com${item.href}`,
    })),
  };
}

export function generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
  if (!faqs || faqs.length === 0) return null;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateEnhancedMetadata(data: {
  title: string;
  description: string;
  keywords: string[];
  url: string;
  type?: 'article' | 'website';
}) {
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    authors: [{ name: 'Nearby Pet Care Team' }],
    creator: 'Nearby Pet Care',
    publisher: 'Nearby Pet Care',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      type: data.type || 'article',
      locale: 'en_US',
      url: data.url,
      siteName: 'Nearby Pet Care',
      publishedTime: data.type === 'article' ? '2024-01-01T00:00:00+00:00' : undefined,
      modifiedTime: data.type === 'article' ? new Date().toISOString() : undefined,
      authors: data.type === 'article' ? ['Nearby Pet Care Team'] : undefined,
      section: data.type === 'article' ? 'Pet Training' : undefined,
      tags: data.type === 'article' ? data.keywords.slice(0, 5) : undefined,
      images: [
        {
          url: 'https://nearbypetcare.com/og-image.png',
          width: 1200,
          height: 630,
          alt: data.title,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: data.title,
      description: data.description,
      images: ['https://nearbypetcare.com/og-image.png'],
      creator: '@nearbypetcare',
      site: '@nearbypetcare',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: data.url,
    },
    category: 'Pet Training',
  };
}

