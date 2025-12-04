import type { Metadata } from 'next';
import FeedingPortionCalculatorClient from './FeedingPortionCalculatorClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Pet Feeding Portion Calculator',
  description: 'Free pet feeding portion calculator determines the right amount of food for dogs and cats. Calculate daily portions based on weight, age, and activity level.',
  keywords: ['pet feeding calculator', 'dog food portion calculator', 'cat food portion calculator', 'pet portion size', 'feeding calculator', 'pet meal planner', 'pet calorie calculator', 'pet feeding schedule'],
  slug: 'feeding-portion-calculator',
  category: 'Nutrition',
  features: [
    'Calculate daily portion sizes based on weight and age',
    'Meal planning with multiple meals per day',
    'Treat allowance calculator (10% of daily calories)',
    'Support for dry and wet food',
    'Activity level adjustments',
    'Spayed/neutered adjustments',
  ],
  faqs: [
    {
      question: 'How do I calculate the right portion size for my pet?',
      answer: 'Use our feeding portion calculator by entering your pet\'s weight, age, activity level, and food type. The calculator uses standard veterinary formulas (RER and DER) to determine daily calorie needs, then calculates the appropriate portion size based on your food\'s calorie content.',
    },
    {
      question: 'How many meals per day should I feed my pet?',
      answer: 'Most adult pets do well with 2 meals per day. Puppies and kittens typically need 3-4 meals per day. The calculator allows you to divide the daily portion across multiple meals and provides a meal breakdown.',
    },
    {
      question: 'How much should I feed my puppy or kitten?',
      answer: 'Puppies and kittens need more calories per pound than adults due to growth. Puppies typically need 3x their resting energy requirement, while kittens need 2.5x. Feed 3-4 smaller meals per day and use puppy/kitten-specific food formulas.',
    },
    {
      question: 'How many treats can I give my pet?',
      answer: 'Treats should make up no more than 10% of your pet\'s total daily calories. The calculator automatically calculates treat allowance and subtracts treat calories from food portions to maintain proper nutrition.',
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

export default function FeedingPortionCalculatorPage() {
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
      <FeedingPortionCalculatorClient />
    </>
  );
}
