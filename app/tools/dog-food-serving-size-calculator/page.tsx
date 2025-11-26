import type { Metadata } from 'next';
import DogFoodServingSizeCalculatorClient from './DogFoodServingSizeCalculatorClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Dog Food Serving Size Calculator | Daily Portion Size Calculator',
  description: 'Free dog food serving size calculator determines perfect portions based on weight, age, and activity level. Get RER and DER calculations.',
  keywords: ['dog food serving size', 'dog food calculator', 'dog portion calculator', 'dog feeding calculator', 'dog food portions', 'dog serving size', 'dog feeding guide', 'dog nutrition calculator'],
  slug: 'dog-food-serving-size-calculator',
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
      question: 'How much food should I feed my dog?',
      answer: 'The amount of food depends on your dog\'s weight, age, activity level, and the calorie content of the food. Use our calculator to determine the appropriate serving size based on RER (Resting Energy Requirement) and DER (Daily Energy Requirement) calculations. Puppies need more calories for growth, while senior dogs may need fewer calories.',
    },
    {
      question: 'How many times a day should I feed my dog?',
      answer: 'Most adult dogs do well with 2 meals per day. Puppies typically need 3-4 smaller meals per day. Senior dogs may benefit from 2-3 smaller meals. Divide the daily serving size evenly across meals.',
    },
    {
      question: 'How do I know if I\'m feeding my dog the right amount?',
      answer: 'Monitor your dog\'s body condition score (BCS). You should be able to feel but not see their ribs. If your dog is gaining weight, reduce portions by 10-20%. If losing weight, increase portions. Always consult with your veterinarian for personalized recommendations.',
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

export default function DogFoodServingSizeCalculatorPage() {
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
      <DogFoodServingSizeCalculatorClient />
    </>
  );
}
