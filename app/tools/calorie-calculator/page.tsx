import type { Metadata } from 'next';
import CalorieCalculatorClient from './CalorieCalculatorClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Pet Calorie Calculator | Nearby Pet Care',
  description: 'Free pet calorie calculator determines daily calorie needs for dogs and cats. Calculate RER, DER, and get personalized recommendations for weight management.',
  keywords: ['pet calorie calculator', 'dog calorie calculator', 'cat calorie calculator', 'pet calorie needs', 'daily calories for pets', 'pet RER calculator', 'pet DER calculator', 'pet nutrition calculator'],
  slug: 'calorie-calculator',
  category: 'Nutrition',
  features: [
    'Calculate RER (Resting Energy Requirement)',
    'Calculate DER (Daily Energy Requirement)',
    'Maintenance calorie recommendations',
    'Weight loss and weight gain calories',
    'Activity level adjustments',
    'Life stage considerations',
  ],
  faqs: [
    {
      question: 'How many calories does my pet need per day?',
      answer: 'Daily calorie needs depend on your pet\'s weight, age, activity level, and health status. The calculator uses RER (Resting Energy Requirement) and DER (Daily Energy Requirement) formulas. RER is the base metabolic rate, while DER accounts for activity level and life stage. Puppies and kittens need more calories for growth, while senior pets may need fewer calories.',
    },
    {
      question: 'What is RER and DER?',
      answer: 'RER (Resting Energy Requirement) is the number of calories your pet needs at rest to maintain basic bodily functions. DER (Daily Energy Requirement) is the total calories needed per day, accounting for activity level, life stage, and health conditions. DER is calculated by multiplying RER by an activity factor.',
    },
    {
      question: 'How do I help my pet lose weight?',
      answer: 'For weight loss, reduce daily calories by 20-30% from maintenance needs and increase exercise. Aim for gradual weight loss of 1-2% body weight per week. Always consult with your veterinarian before starting a weight loss program, as rapid weight loss can be dangerous. Monitor your pet\'s progress and adjust as needed.',
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

export default function CalorieCalculatorPage() {
  const baseUrl = getBaseUrl();
  const toolUrl = ensureAbsoluteUrl(`/tools/${config.slug}`);
  const toolTitle = config.title.split('|')[0].trim();
  
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Tools', url: '/tools' },
    { name: toolTitle, url: `/tools/${config.slug}` },
  ];

  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);
  
  const faqStructuredData = config.faqs.length > 0 
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
    featureList: config.features,
  };

  return (
    <>
      <script {...jsonLdScriptProps(webApplicationStructuredData)} />
      <script {...jsonLdScriptProps(breadcrumbStructuredData)} />
      {faqStructuredData && <script {...jsonLdScriptProps(faqStructuredData)} />}
      <CalorieCalculatorClient />
    </>
  );
}
