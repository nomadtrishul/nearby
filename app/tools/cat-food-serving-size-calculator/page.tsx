import type { Metadata } from 'next';
import CatFoodServingSizeCalculatorClient from './CatFoodServingSizeCalculatorClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Cat Food Serving Size Calculator | Nearby Pet Care',
  description: 'Free cat food serving size calculator determines perfect portions based on weight, age, and activity level. Get RER and DER calculations and recommendations.',
  keywords: ['cat food serving size', 'cat food calculator', 'cat portion calculator', 'cat feeding calculator', 'cat food portions', 'cat serving size', 'cat feeding guide', 'cat nutrition calculator'],
  slug: 'cat-food-serving-size-calculator',
  category: 'Nutrition',
  features: [
    'Calculate daily serving sizes',
    'RER and DER calculations',
    'Age-specific recommendations',
    'Activity level adjustments',
    'Meal planning guidance',
  ],
  faqs: [
    {
      question: 'How much food should I feed my cat?',
      answer: 'The amount of food depends on your cat\'s weight, age, activity level, and the calorie content of the food. Use our calculator to determine the appropriate serving size based on RER (Resting Energy Requirement) and DER (Daily Energy Requirement) calculations. Kittens need more calories for growth, while senior cats may need fewer calories.',
    },
    {
      question: 'How many times a day should I feed my cat?',
      answer: 'Most adult cats do well with 2-3 meals per day. Kittens typically need 3-4 smaller meals per day. Senior cats may benefit from 2-3 smaller meals. Divide the daily serving size evenly across meals.',
    },
    {
      question: 'How do I know if I\'m feeding my cat the right amount?',
      answer: 'Monitor your cat\'s body condition score (BCS). You should be able to feel but not see their ribs. If your cat is gaining weight, reduce portions by 10-20%. If losing weight, increase portions. Indoor cats are prone to obesity, so monitor closely. Always consult with your veterinarian for personalized recommendations.',
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

export default function CatFoodServingSizeCalculatorPage() {
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
      <CatFoodServingSizeCalculatorClient />
    </>
  );
}
