import type { Metadata } from 'next';
import PuppyFeedingScheduleGeneratorClient from './PuppyFeedingScheduleGeneratorClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Puppy Feeding Schedule Generator | Meal Schedule & Portion Calculator',
  description: 'Free puppy feeding schedule generator creates personalized meal schedules based on age, breed size, and weight. Get meal times and portion sizes.',
  keywords: ['puppy feeding schedule', 'puppy feeding times', 'puppy meal schedule', 'puppy feeding guide', 'puppy nutrition schedule', 'puppy feeding plan', 'puppy meal planning', 'puppy feeding routine'],
  slug: 'puppy-feeding-schedule-generator',
  category: 'Nutrition',
  features: [
    'Age-based meal frequency',
    'Breed size considerations',
    'Daily calorie calculations',
    'Meal timing recommendations',
    'Portion size guidance',
  ],
  faqs: [
    {
      question: 'How often should I feed my puppy?',
      answer: 'Puppy feeding frequency depends on age. Very young puppies (under 8 weeks) need 4 meals per day. Puppies 8-16 weeks need 3 meals per day. Older puppies (6+ months) can transition to 2 meals per day. Use our generator to get a personalized schedule based on your puppy\'s age and breed size.',
    },
    {
      question: 'How much should I feed my puppy?',
      answer: 'Puppy food portions depend on age, weight, and breed size. Puppies need 2-3 times more calories per pound than adult dogs for growth. Use our calculator to determine the exact daily calories and portion sizes based on your puppy\'s specific needs.',
    },
    {
      question: 'When should I transition my puppy to adult food?',
      answer: 'Transition timing depends on breed size. Small breeds can transition around 9-12 months, medium breeds around 12-15 months, and large/giant breeds may need puppy food until 18-24 months. Always consult your veterinarian for breed-specific recommendations.',
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

export default function PuppyFeedingScheduleGeneratorPage() {
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
      <PuppyFeedingScheduleGeneratorClient />
    </>
  );
}
