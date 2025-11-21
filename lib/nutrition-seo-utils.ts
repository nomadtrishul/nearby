/**
 * SEO Utility Functions for Pet Nutrition Pages
 * Optimized for Google, Bing, and AdSense compliance (November 2025)
 */

export interface NutritionPageSEOConfig {
  title: string;
  description: string;
  keywords: string[];
  url: string;
  articleType?: 'Article' | 'Guide' | 'HowTo';
  datePublished?: string;
  hasFAQ?: boolean;
  faqItems?: Array<{ question: string; answer: string }>;
}

export function generateNutritionMetadata(config: NutritionPageSEOConfig) {
  const currentDate = new Date().toISOString();
  const currentDateShort = currentDate.split('T')[0];
  
  return {
    title: `${config.title} | Nearby Pet Care`,
    description: config.description,
    keywords: [...config.keywords, 'pet nutrition', 'AAFCO', 'pet food standards'],
    authors: [{ name: 'Nearby Pet Care Team', url: 'https://nearbypetcare.com' }],
    creator: 'Nearby Pet Care',
    publisher: 'Nearby Pet Care',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: `${config.title} | Nearby Pet Care`,
      description: config.description,
      type: 'article',
      url: `https://nearbypetcare.com${config.url}`,
      siteName: 'Nearby Pet Care',
      locale: 'en_US',
      alternateLocale: ['en_GB', 'en_CA', 'en_AU'],
      publishedTime: config.datePublished || '2024-01-01T00:00:00+00:00',
      modifiedTime: currentDate,
      authors: ['Nearby Pet Care Team'],
      images: [
        {
          url: 'https://nearbypetcare.com/og-image.png',
          width: 1200,
          height: 630,
          alt: `${config.title} - Nearby Pet Care`,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${config.title} | Nearby Pet Care`,
      description: config.description,
      images: ['https://nearbypetcare.com/og-image.png'],
      creator: '@nearbypetcare',
      site: '@nearbypetcare',
    },
    alternates: {
      canonical: `https://nearbypetcare.com${config.url}`,
      languages: {
        'en-US': `https://nearbypetcare.com${config.url}`,
        'en-GB': `https://nearbypetcare.com${config.url}`,
        'en-CA': `https://nearbypetcare.com${config.url}`,
        'en-AU': `https://nearbypetcare.com${config.url}`,
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
    other: {
      'article:published_time': config.datePublished || '2024-01-01T00:00:00+00:00',
      'article:modified_time': currentDate,
      'article:author': 'Nearby Pet Care Team',
      'article:section': 'Pet Nutrition',
      'article:tag': config.keywords.join(', '),
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nearby Pet Care',
    url: 'https://nearbypetcare.com',
    logo: 'https://nearbypetcare.com/logo.png',
    description: 'Comprehensive pet care guides and resources for pet owners. Expert advice on pet nutrition, health, grooming, and training.',
    sameAs: [
      'https://www.facebook.com/nearbypetcare',
      'https://twitter.com/nearbypetcare',
      'https://www.instagram.com/nearbypetcare',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English'],
    },
  };
}

export function generateArticleSchema(config: NutritionPageSEOConfig) {
  const currentDate = new Date().toISOString();
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: config.title,
    description: config.description,
    url: `https://nearbypetcare.com${config.url}`,
    datePublished: config.datePublished || '2024-01-01T00:00:00+00:00',
    dateModified: currentDate,
    author: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      url: 'https://nearbypetcare.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nearbypetcare.com/logo.png',
        width: 600,
        height: 60,
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nearbypetcare.com/logo.png',
        width: 600,
        height: 60,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://nearbypetcare.com${config.url}`,
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
    },
    articleSection: 'Pet Nutrition',
    inLanguage: 'en-US',
    keywords: config.keywords.join(', '),
    about: {
      '@type': 'Thing',
      name: 'Pet Nutrition',
    },
  };
}

export function generateBreadcrumbSchema(url: string, breadcrumbItems: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(faqItems: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

