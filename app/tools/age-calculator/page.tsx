import type { Metadata } from 'next';
import AgeCalculatorClient from './AgeCalculatorClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Pet Age Calculator',
  description: 'Free pet age calculator converts dog and cat years to human years. Get breed-specific calculations and age-appropriate care recommendations.',
  keywords: ['pet age calculator', 'dog age calculator', 'cat age calculator', 'pet age in human years', 'pet life stage', 'dog years calculator', 'cat years calculator', 'pet age converter', 'dog years to human years', 'cat years to human years'],
  slug: 'age-calculator',
  category: 'Health & Wellness',
  features: [
    'Convert pet age to human years',
    'Breed-specific aging calculations',
    'Life stage identification',
    'Age-appropriate care recommendations',
    'Support for dogs and cats',
  ],
  faqs: [
    {
      question: 'How do you calculate pet age in human years?',
      answer: 'Pet age conversion varies by species and size. For dogs: the first year equals 15 human years, the second year equals 9 human years, then it varies by size (small dogs age slower than large dogs). For cats: the first year equals 15 human years, the second year equals 9 human years, then each year equals 4 human years.',
    },
    {
      question: 'Do larger dogs age faster than smaller dogs?',
      answer: 'Yes, larger dog breeds generally age faster than smaller breeds. Giant breeds may age at a rate of 7.5 human years per dog year after age 2, while small breeds age at about 4 human years per dog year. This is why larger dogs typically have shorter lifespans.',
    },
    {
      question: 'What are the different life stages for pets?',
      answer: 'Pets go through several life stages: Puppy/Kitten (under 1 year), Young Adult (1-2 years), Adult (2-7 years for dogs, 2-7 years for cats), Mature Adult (7-10 years for dogs, 7-11 years for cats), and Senior (10+ years for dogs, 11+ years for cats). Each stage has different care requirements.',
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

export default function AgeCalculatorPage() {
  const baseUrl = getBaseUrl();
  const toolUrl = ensureAbsoluteUrl(`/tools/${config.slug}`);
  
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Tools', url: '/tools' },
    { name: config.title.split('|')[0].trim(), url: `/tools/${config.slug}` },
  ];

  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);
  
  const faqStructuredData = config.faqs.length > 0 
    ? generateFAQStructuredData(config.faqs)
    : null;

  const softwareApplicationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: config.title.split('|')[0].trim(),
    description: config.description,
    url: toolUrl,
    applicationCategory: 'UtilityApplication',
    applicationSubCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    featureList: config.features,
  };

  return (
    <>
      <script {...jsonLdScriptProps(softwareApplicationStructuredData)} />
      <script {...jsonLdScriptProps(breadcrumbStructuredData)} />
      {faqStructuredData && <script {...jsonLdScriptProps(faqStructuredData)} />}
      <AgeCalculatorClient />
    </>
  );
}
