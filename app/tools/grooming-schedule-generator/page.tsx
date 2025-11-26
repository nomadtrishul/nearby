import type { Metadata } from 'next';
import GroomingScheduleGeneratorClient from './GroomingScheduleGeneratorClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Grooming Schedule Generator',
  description: 'Create a personalized grooming schedule for your pet based on coat type and lifestyle. Get recommendations for bathing, brushing, nail trimming, and more.',
  keywords: ['pet grooming schedule', 'dog grooming schedule', 'cat grooming schedule', 'grooming routine', 'pet grooming frequency', 'grooming calendar', 'pet hygiene schedule', 'grooming planner'],
  slug: 'grooming-schedule-generator',
  category: 'Grooming & Hygiene',
  features: [
    'Personalized grooming schedule',
    'Coat type-based recommendations',
    'Task frequency guidelines',
    'Lifestyle considerations',
    'Professional grooming advice',
  ],
  faqs: [
    {
      question: 'How often should I groom my pet?',
      answer: 'Grooming frequency depends on your pet\'s coat type. Short-coated pets may need bathing every 4-8 weeks and weekly brushing, while long-coated pets may need bathing every 3-4 weeks and daily brushing. Nail trimming is typically needed every 2-4 weeks, and ear cleaning weekly to monthly. Professional grooming is recommended every 4-8 weeks for long or curly coats, and every 8-12 weeks for short coats.',
    },
    {
      question: 'What grooming tasks should I do regularly?',
      answer: 'Regular grooming tasks include: bathing (frequency depends on coat type), brushing (daily for long coats, weekly for short coats), nail trimming (every 2-4 weeks), ear cleaning (weekly to monthly), and teeth brushing (daily ideal, or 3-4 times per week). Professional grooming may also be needed for trimming, styling, and thorough cleaning.',
    },
    {
      question: 'How do I know if my pet needs grooming?',
      answer: 'Signs your pet needs grooming include: strong odor, matted or tangled fur, overgrown nails (touching the ground or clicking on floors), dirty or waxy ears, visible dirt or debris in the coat, excessive shedding, and skin irritation. Regular grooming prevents these issues and keeps your pet healthy and comfortable.',
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

export default function GroomingScheduleGeneratorPage() {
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
      <GroomingScheduleGeneratorClient />
    </>
  );
}

