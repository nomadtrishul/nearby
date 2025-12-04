import type { Metadata } from 'next';
import PetTreatCalorieCounterClient from './PetTreatCalorieCounterClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Pet Treat Calorie Counter',
  description: 'Free pet treat calorie counter tracks treat calories and ensures they stay within 10% of daily intake. Calculate treat allowances and get recommendations.',
  keywords: ['pet treat calories', 'treat calorie counter', 'dog treat calories', 'cat treat calories', 'treat allowance calculator', 'pet treat calculator', 'treat calorie tracker', 'pet nutrition treats'],
  slug: 'pet-treat-calorie-counter',
  category: 'Nutrition',
  features: [
    'Treat calorie tracking',
    '10% rule calculator',
    'Multiple treat support',
    'Daily calorie calculations',
    'Warning system',
  ],
  faqs: [
    {
      question: 'How many calories should treats be for my pet?',
      answer: 'Treats should make up no more than 10% of your pet\'s total daily calorie intake. For example, if your pet needs 800 calories per day, treats should be limited to 80 calories or less. This ensures your pet gets proper nutrition from their regular food while still enjoying treats.',
    },
    {
      question: 'What happens if I give my pet too many treats?',
      answer: 'Too many treats can lead to weight gain, nutritional imbalances, and health issues. Treats are often high in calories and may not provide complete nutrition. If treats exceed 10-15% of daily calories, your pet may not get enough essential nutrients from their regular food.',
    },
    {
      question: 'What are good low-calorie treats for pets?',
      answer: 'Good low-calorie treats for dogs include carrots, green beans, apple slices (no seeds), and small pieces of plain cooked chicken. For cats, good options include small pieces of cooked chicken, freeze-dried meat, or commercial low-calorie cat treats. Always check calorie content and use treats in moderation.',
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

export default function PetTreatCalorieCounterPage() {
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
    applicationSubCategory: 'NutritionCalculator',
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
      <PetTreatCalorieCounterClient />
    </>
  );
}
