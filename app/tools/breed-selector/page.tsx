import type { Metadata } from 'next';
import BreedSelectorClient from './BreedSelectorClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Pet Breed Selector | Dog & Cat Breed Finder & Matching Tool',
  description: 'Find the perfect pet breed for your lifestyle. Answer questions about living space and activity level to get personalized breed recommendations.',
  keywords: ['pet breed selector', 'dog breed finder', 'cat breed finder', 'best dog breed', 'best cat breed', 'breed matching tool', 'pet adoption guide', 'choose pet breed'],
  slug: 'breed-selector',
  category: 'Adoption',
  features: [
    'Lifestyle-based breed matching',
    'Dog and cat breed recommendations',
    'Living space compatibility',
    'Activity level matching',
    'Grooming preference matching',
    'Family and pet compatibility',
  ],
  faqs: [
    {
      question: 'How does the pet breed selector work?',
      answer: 'The breed selector asks questions about your living space, activity level, grooming preferences, and whether you have children or other pets. It then matches your answers against breed characteristics to recommend breeds that best fit your lifestyle.',
    },
    {
      question: 'What factors should I consider when choosing a pet breed?',
      answer: 'Consider your living space (apartment vs house), activity level, grooming preferences, whether you have children or other pets, and your lifestyle. Different breeds have different needs for exercise, grooming, and attention.',
    },
    {
      question: 'Are breed recommendations accurate?',
      answer: 'The tool provides general recommendations based on breed characteristics. However, individual pets within a breed can vary significantly. Always spend time with a pet before adoption and consider adopting from shelters where you can meet the individual animal.',
    },
    {
      question: 'Should I choose a purebred or mixed breed?',
      answer: 'Both purebreds and mixed breeds can make wonderful pets. Mixed breeds often have fewer genetic health issues and are available at shelters. Purebreds have predictable characteristics but may have breed-specific health concerns. Consider your needs and visit local shelters to meet available pets.',
    },
  ],
};

export const metadata: Metadata = generateSEOMetadata({
  title: config.title,
  description: config.description,
  keywords: config.keywords,
  pathname: `/tools/${config.slug}`,
  type: 'website',
});

export default function BreedSelectorPage() {
  const baseUrl = getBaseUrl();
  const toolUrl = ensureAbsoluteUrl(`/tools/${config.slug}`);
  const toolTitle = config.title.split('|')[0].trim();
  
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Tools', url: '/tools' },
    { name: toolTitle, url: `/tools/${config.slug}` },
  ];

  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);
  
  const faqStructuredData = config.faqs && config.faqs.length > 0 
    ? generateFAQStructuredData(config.faqs)
    : null;

  const webApplicationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: toolTitle,
    description: config.description,
    url: toolUrl,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: config.features || [],
  };

  return (
    <>
      <script {...jsonLdScriptProps(webApplicationStructuredData)} />
      <script {...jsonLdScriptProps(breadcrumbStructuredData)} />
      {faqStructuredData && <script {...jsonLdScriptProps(faqStructuredData)} />}
      <BreedSelectorClient />
    </>
  );
}
