import type { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  url: string;
  type?: 'website' | 'article';
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  breadcrumbs?: Array<{ name: string; url: string }>;
  noindex?: boolean;
  nofollow?: boolean;
}

const baseUrl = 'https://nearbypetcare.com';
const defaultImage = 'https://nearbypetcare.com/og-image.png';
const siteName = 'Nearby Pet Care';

/**
 * Generate comprehensive metadata for SEO optimization
 * Follows latest Google, Bing, and AdSense guidelines (Nov 2025)
 */
export function generateSEOMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    url,
    type = 'website',
    image = defaultImage,
    publishedTime,
    modifiedTime,
    author = 'Nearby Pet Care Team',
    section,
    tags = [],
    noindex = false,
    nofollow = false,
  } = config;

  const fullTitle = title.includes('|') ? title : `${title} | ${siteName}`;
  const canonicalUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    authors: [{ name: author }],
    creator: author,
    publisher: siteName,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: type === 'article' ? 'article' : 'website',
      locale: 'en_US',
      alternateLocale: ['en_GB', 'en_CA', 'en_AU'],
      url: canonicalUrl,
      siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/png',
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime: modifiedTime || publishedTime,
        authors: [author],
        section,
        tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
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
    ...(type === 'article' && {
      other: {
        'article:published_time': publishedTime || new Date().toISOString(),
        'article:modified_time': modifiedTime || publishedTime || new Date().toISOString(),
        'article:author': author,
        ...(section && { 'article:section': section }),
        ...(tags.length > 0 && { 'article:tag': tags.join(', ') }),
      },
    }),
  };

  return metadata;
}

/**
 * Generate BreadcrumbList structured data
 */
export function generateBreadcrumbStructuredData(
  breadcrumbs: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url.startsWith('http') ? crumb.url : `${baseUrl}${crumb.url}`,
    })),
  };
}

/**
 * Generate Article structured data
 */
export function generateArticleStructuredData(config: {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
  section?: string;
  keywords?: string;
  wordCount?: number;
  timeRequired?: string;
}) {
  const {
    headline,
    description,
    image = defaultImage,
    datePublished,
    dateModified,
    author = 'Nearby Pet Care Team',
    url,
    section,
    keywords,
    wordCount,
    timeRequired,
  } = config;

  const articleUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author,
      url: `${baseUrl}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
        width: 200,
        height: 48,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    ...(section && { articleSection: section }),
    ...(keywords && { keywords }),
    ...(wordCount && { wordCount }),
    ...(timeRequired && { timeRequired }),
    inLanguage: 'en-US',
  };
}

/**
 * Generate FAQPage structured data
 */
export function generateFAQStructuredData(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate WebPage structured data
 */
export function generateWebPageStructuredData(config: {
  name: string;
  description: string;
  url: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
}) {
  const { name, description, url, breadcrumbs } = config;
  const pageUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: pageUrl,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: siteName,
      url: baseUrl,
    },
    ...(breadcrumbs && {
      breadcrumb: generateBreadcrumbStructuredData(breadcrumbs),
    }),
  };
}

/**
 * Generate LocalBusiness structured data
 * Following latest Google guidelines for local business listings
 */
export function generateLocalBusinessStructuredData(config: {
  name: string;
  description: string;
  image?: string;
  telephone?: string;
  email?: string;
  url?: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  };
  priceRange?: string;
  rating?: number;
  reviewCount?: number;
  services?: string[];
  areaServed?: string;
  geo?: {
    latitude: string;
    longitude: string;
  };
}) {
  const {
    name,
    description,
    image,
    telephone,
    email,
    url: businessUrl,
    address,
    priceRange,
    rating,
    reviewCount,
    services,
    areaServed,
    geo,
  } = config;

  const businessData: any = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    description,
    ...(image && { image }),
    ...(telephone && { telephone }),
    ...(email && { email }),
    ...(businessUrl && { url: businessUrl }),
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      ...(address.postalCode && { postalCode: address.postalCode }),
      addressCountry: address.addressCountry,
    },
    ...(priceRange && { priceRange }),
    ...(rating && reviewCount && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: rating.toString(),
        reviewCount: reviewCount.toString(),
        bestRating: '5',
        worstRating: '1',
      },
    }),
    ...(areaServed && {
      areaServed: {
        '@type': 'City',
        name: areaServed,
      },
    }),
    ...(geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: geo.latitude,
        longitude: geo.longitude,
      },
    }),
  };

  if (services && services.length > 0) {
    businessData.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      name: 'Pet Care Services',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
        },
      })),
    };
  }

  return businessData;
}

