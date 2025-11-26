import type { Metadata } from 'next';
import HomemadeFoodNutritionAnalyzerClient from './HomemadeFoodNutritionAnalyzerClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Homemade Food Nutrition Analyzer',
  description: 'Analyze the nutritional content of homemade pet food recipes. Get calorie, protein, fat, carbohydrate, and fiber analysis with recommendations.',
  keywords: ['homemade pet food', 'homemade dog food', 'homemade cat food', 'pet food nutrition analysis', 'homemade pet diet', 'pet food calculator', 'pet nutrition analyzer', 'homemade pet recipes'],
  slug: 'homemade-food-nutrition-analyzer',
  category: 'Nutrition',
  features: [
    'Nutritional content analysis',
    'Calorie calculation',
    'Macronutrient breakdown',
    'Pet type-specific recommendations',
    'Safety warnings',
  ],
  faqs: [
    {
      question: 'Is homemade pet food safe?',
      answer: 'Homemade pet food can be safe if properly formulated and supplemented. However, it requires careful planning to ensure all essential nutrients, vitamins, and minerals are provided in correct amounts. Homemade diets are more prone to nutrient deficiencies or imbalances. Always consult with a board-certified veterinary nutritionist before feeding homemade diets long-term to ensure your pet receives complete and balanced nutrition.',
    },
    {
      question: 'What nutrients do pets need in homemade food?',
      answer: 'Pets need: protein (18-25% for dogs, 26-40% for cats), fat (5-15% for dogs, 9-15% for cats), carbohydrates, fiber, vitamins (A, B complex, C, D, E, K), minerals (calcium, phosphorus, iron, zinc, etc.), and for cats, taurine (essential amino acid). The calcium:phosphorus ratio is critical (1.2:1 to 2:1). Homemade diets require proper supplementation to meet all nutritional needs.',
    },
    {
      question: 'What ingredients are safe for homemade pet food?',
      answer: 'Safe ingredients include: lean meats (chicken, turkey, beef), fish (salmon, tuna), eggs, cooked grains (rice, oats), vegetables (carrots, sweet potatoes, broccoli, pumpkin), and small amounts of fruits. Always avoid toxic foods like onions, garlic, grapes, raisins, chocolate, and xylitol. Ensure all ingredients are properly cooked and prepared. Consult a veterinary nutritionist for complete recipe formulation.',
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

export default function HomemadeFoodNutritionAnalyzerPage() {
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
      <HomemadeFoodNutritionAnalyzerClient />
    </>
  );
}
