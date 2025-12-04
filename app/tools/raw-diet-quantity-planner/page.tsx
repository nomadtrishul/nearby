import type { Metadata } from 'next';
import RawDietQuantityPlannerClient from './RawDietQuantityPlannerClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Raw Diet Quantity Planner',
  description: 'Calculate the correct quantity of raw food for your pet based on weight, age, and activity level. Get daily feeding amounts and raw diet recommendations.',
  keywords: ['raw diet pets', 'raw food calculator', 'raw diet quantity', 'raw feeding pets', 'BARF diet calculator', 'raw pet food', 'raw diet planner', 'raw food portions'],
  slug: 'raw-diet-quantity-planner',
  category: 'Nutrition',
  features: [
    'Raw diet quantity calculation',
    'Weight and age-based planning',
    'Activity level consideration',
    'Daily feeding amounts',
    'Raw diet recommendations',
  ],
  faqs: [
    {
      question: 'How much raw food should I feed my pet?',
      answer: 'Raw food quantities depend on your pet\'s weight, age, and activity level. Generally, adult dogs need 2-3% of their body weight per day, while puppies need 5-10% of their expected adult weight. Adult cats typically need 2-4% of their body weight. Active pets may need more, while sedentary pets may need less. Always consult with a veterinary nutritionist or veterinarian experienced with raw diets to ensure proper nutrition and portion sizes.',
    },
    {
      question: 'Is a raw diet safe for pets?',
      answer: 'Raw diets can be safe if properly formulated and handled, but they carry risks including bacterial contamination (Salmonella, E. coli), nutritional imbalances, and potential for parasites. Raw diets require careful planning to ensure all essential nutrients are provided, proper food handling to prevent contamination, and regular veterinary monitoring. Always consult with a board-certified veterinary nutritionist before starting a raw diet, and ensure you follow proper food safety protocols.',
    },
    {
      question: 'What should be included in a raw diet?',
      answer: 'A balanced raw diet should include: muscle meat (variety of sources), organ meats (liver, kidney, heart), raw meaty bones (for calcium and dental health), vegetables and fruits (for fiber and nutrients), and supplements (to ensure complete nutrition, including calcium, vitamins, and minerals). The exact ratios depend on your pet\'s species (dog vs cat) and individual needs. Cats require more protein and taurine. Always work with a veterinary nutritionist to formulate a complete and balanced raw diet.',
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

export default function RawDietQuantityPlannerPage() {
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
      <RawDietQuantityPlannerClient />
    </>
  );
}
