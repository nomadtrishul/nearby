import type { Metadata } from 'next';
import SeniorPetDietPlannerClient from './SeniorPetDietPlannerClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Senior Pet Diet Planner',
  description: 'Create a personalized diet plan for your senior pet based on age, weight, and health conditions. Get calorie recommendations, dietary needs, and foods to avoid.',
  keywords: ['senior pet diet', 'senior dog diet', 'senior cat diet', 'elderly pet nutrition', 'senior pet food', 'aging pet diet', 'senior pet nutrition', 'elderly pet feeding'],
  slug: 'senior-pet-diet-planner',
  category: 'Nutrition',
  features: [
    'Personalized diet planning',
    'Health condition considerations',
    'Calorie calculation',
    'Dietary needs analysis',
    'Food recommendations',
  ],
  faqs: [
    {
      question: 'What should I feed my senior pet?',
      answer: 'Senior pets typically need: high-quality, easily digestible protein; moderate fat (10-15% for dogs, 9-15% for cats); fiber for digestive health; and antioxidants (vitamins E, C). Calorie needs are usually reduced (about 20% less than adult maintenance) due to slower metabolism. Senior-specific commercial diets are formulated for aging pets and may include joint-supporting nutrients and cognitive health supplements.',
    },
    {
      question: 'How do health conditions affect a senior pet\'s diet?',
      answer: 'Health conditions significantly affect dietary needs. For example: kidney disease requires lower protein and phosphorus; heart disease needs low sodium; diabetes requires high fiber and consistent meal timing; arthritis benefits from omega-3 fatty acids and weight management; dental problems may require soft or wet food. Always consult your veterinarian for condition-specific dietary recommendations.',
    },
    {
      question: 'How much should I feed my senior pet?',
      answer: 'Senior pets typically need 20% fewer calories than adult maintenance due to reduced activity and slower metabolism. Feed 2-3 smaller meals per day for better digestion. Monitor weight monthly and adjust portions as needed. Always consult your veterinarian for personalized feeding recommendations based on your pet\'s specific needs, health conditions, and activity level.',
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

export default function SeniorPetDietPlannerPage() {
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
      <SeniorPetDietPlannerClient />
    </>
  );
}
