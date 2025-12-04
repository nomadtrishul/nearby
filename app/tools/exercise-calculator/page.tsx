import type { Metadata } from 'next';
import ExerciseCalculatorClient from './ExerciseCalculatorClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Pet Exercise Calculator',
  description: 'Free pet exercise calculator determines daily exercise needs for dogs and cats. Get breed-specific recommendations and personalized activity plans.',
  keywords: ['pet exercise calculator', 'dog exercise calculator', 'cat exercise calculator', 'pet exercise needs', 'daily exercise for pets', 'pet activity calculator', 'exercise recommendations', 'pet fitness'],
  slug: 'exercise-calculator',
  category: 'Health & Wellness',
  features: [
    'Calculate daily exercise needs',
    'Breed-specific recommendations',
    'Age-appropriate exercise plans',
    'Activity type suggestions',
    'Weekly exercise totals',
  ],
  faqs: [
    {
      question: 'How much exercise does my pet need?',
      answer: 'Exercise needs vary by breed, age, and activity level. Most adult dogs need 30-60 minutes of exercise per day, while cats typically need 15-30 minutes of interactive play. High-energy breeds need more exercise, while low-energy breeds need less. Puppies and kittens need shorter, more frequent sessions.',
    },
    {
      question: 'What types of exercise are best for my pet?',
      answer: 'Dogs benefit from walking, running, fetch, and agility training. Cats benefit from interactive play with toys that mimic hunting behaviors. The best exercise type depends on your pet\'s breed, age, and energy level. Always consider your pet\'s physical limitations and health conditions.',
    },
    {
      question: 'How do I know if my pet is getting enough exercise?',
      answer: 'Signs of adequate exercise include: your pet is calm and relaxed at home, maintains a healthy weight, sleeps well, and doesn\'t display destructive behaviors. If your pet is restless, gaining weight, or showing behavioral issues, they may need more exercise.',
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

export default function ExerciseCalculatorPage() {
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
    applicationSubCategory: 'HealthApplication',
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
      <ExerciseCalculatorClient />
    </>
  );
}
