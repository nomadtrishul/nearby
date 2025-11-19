import type { Metadata } from 'next';

export interface ToolSEOConfig {
  title: string;
  description: string;
  keywords: string[];
  slug: string;
  category: string;
  features?: string[];
  faqs?: Array<{ question: string; answer: string }>;
}

export function generateToolMetadata(config: ToolSEOConfig): Metadata {
  const baseUrl = 'https://nearbypetcare.com';
  const toolUrl = `${baseUrl}/tools/${config.slug}`;
  const ogImage = `${baseUrl}/og-image.png`;
  
  return {
    title: config.title.includes('|') ? config.title : `${config.title} | Nearby Pet Care`,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      title: config.title.includes('|') ? config.title : `${config.title} | Nearby Pet Care`,
      description: config.description,
      type: 'website',
      url: toolUrl,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title.includes('|') ? config.title.split('|')[0].trim() : config.title,
      description: config.description,
      images: [ogImage],
    },
    alternates: {
      canonical: toolUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateToolStructuredData(config: ToolSEOConfig) {
  const baseUrl = 'https://nearbypetcare.com';
  const toolUrl = `${baseUrl}/tools/${config.slug}`;
  const toolTitle = config.title.includes('|') ? config.title.split('|')[0].trim() : config.title;
  
  const webApplication = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    '@id': toolUrl,
    name: toolTitle,
    description: config.description,
    url: toolUrl,
    image: {
      '@type': 'ImageObject',
      url: `${baseUrl}/og-image.png`,
      width: 1200,
      height: 630,
    },
    screenshot: {
      '@type': 'ImageObject',
      url: `${baseUrl}/og-image.png`,
      width: 1200,
      height: 630,
    },
    applicationCategory: 'HealthApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: config.features || [],
    author: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
        width: 512,
        height: 512,
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${toolUrl}?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${toolUrl}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: {
          '@id': baseUrl,
          name: 'Home',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Tools',
        item: {
          '@id': `${baseUrl}/tools`,
          name: 'Tools',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: toolTitle,
        item: {
          '@id': toolUrl,
          name: toolTitle,
        },
      },
    ],
  };

  const faq = config.faqs && config.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: config.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  return { webApplication, breadcrumb, faq };
}

