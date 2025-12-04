import type { Metadata } from 'next';
import NailLengthCheckerClient from './NailLengthCheckerClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Nail Length Checker',
  description: 'Check if your pet\'s nails are at the ideal length based on measurement. Get recommendations for nail trimming and maintenance based on your pet\'s size and nail length.',
  keywords: ['pet nail length', 'dog nail length', 'cat nail length', 'nail trimming', 'nail length check', 'pet nail care', 'nail maintenance', 'nail health'],
  slug: 'nail-length-checker',
  category: 'Grooming & Hygiene',
  features: [
    'Nail length assessment',
    'Size-based ideal length calculation',
    'Urgency level determination',
    'Trimming recommendations',
    'Safety guidance',
  ],
  faqs: [
    {
      question: 'How long should my pet\'s nails be?',
      answer: 'Ideal nail length varies by pet size, but generally nails should not touch the ground when your pet is standing. For small pets (under 10 lbs), ideal length is typically 3-4mm. For medium pets (10-40 lbs), ideal length is 4-6mm. For large pets (over 40 lbs), ideal length is 5-7mm. The most important indicator is whether you can hear nails clicking on the floor - if so, they need trimming.',
    },
    {
      question: 'How often should I trim my pet\'s nails?',
      answer: 'Most pets need nail trimming every 2-4 weeks. Active pets that walk on hard surfaces may need less frequent trimming, while less active pets or those that walk primarily on soft surfaces may need more frequent trimming. Check nails weekly and trim when they start to touch the ground. Regular trimming helps keep the quick (blood vessel) short, making future trims easier.',
    },
    {
      question: 'What happens if my pet\'s nails are too long?',
      answer: 'Long nails can cause several problems: pain and discomfort when walking, difficulty walking or running, changes in posture and gait, increased risk of nail breakage or splitting, potential for nails to curl and grow into the paw pad, and permanent damage to toe structure. Very long nails can also cause the quick (blood vessel) to extend, making future trimming more difficult. Trim long nails gradually over multiple sessions.',
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

export default function NailLengthCheckerPage() {
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

  const softwareApplicationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: toolTitle,
    description: config.description,
    url: toolUrl,
    applicationCategory: 'UtilityApplication',
    applicationSubCategory: 'LifestyleApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    featureList: config.features || [],
  };

  return (
    <>
      <script {...jsonLdScriptProps(softwareApplicationStructuredData)} />
      <script {...jsonLdScriptProps(breadcrumbStructuredData)} />
      {faqStructuredData && <script {...jsonLdScriptProps(faqStructuredData)} />}
      <NailLengthCheckerClient />
    </>
  );
}

