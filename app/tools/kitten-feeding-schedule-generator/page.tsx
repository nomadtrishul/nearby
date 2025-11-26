import type { Metadata } from 'next';
import KittenFeedingScheduleGeneratorClient from './KittenFeedingScheduleGeneratorClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Kitten Feeding Schedule Generator | Meal Schedule & Portion Calculator',
  description: 'Free kitten feeding schedule generator creates personalized meal schedules based on age and weight. Get meal times, portion sizes, and feeding recommendations.',
  keywords: ['kitten feeding schedule', 'kitten feeding times', 'kitten meal schedule', 'kitten feeding guide', 'kitten nutrition schedule', 'kitten feeding plan', 'kitten meal planning', 'kitten feeding routine'],
  slug: 'kitten-feeding-schedule-generator',
  category: 'Nutrition',
  features: [
    'Age-based meal frequency',
    'Daily calorie calculations',
    'Meal timing recommendations',
    'Portion size guidance',
    'Growth stage considerations',
  ],
  faqs: [
    {
      question: 'How often should I feed my kitten?',
      answer: 'Kitten feeding frequency depends on age. Very young kittens (under 8 weeks) need 4 meals per day. Kittens 8-16 weeks need 3 meals per day. Older kittens (6+ months) can transition to 2 meals per day. Use our generator to get a personalized schedule based on your kitten\'s age.',
    },
    {
      question: 'How much should I feed my kitten?',
      answer: 'Kitten food portions depend on age and weight. Kittens need 2-3 times more calories per pound than adult cats for growth. Use our calculator to determine the exact daily calories and portion sizes based on your kitten\'s specific needs.',
    },
    {
      question: 'When should I transition my kitten to adult cat food?',
      answer: 'Most kittens can transition to adult cat food around 12 months of age. However, some large breed cats may benefit from staying on kitten food until 18 months. Always consult your veterinarian for personalized recommendations based on your kitten\'s growth and development.',
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

export default function KittenFeedingScheduleGeneratorPage() {
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
      <KittenFeedingScheduleGeneratorClient />
    </>
  );
}
