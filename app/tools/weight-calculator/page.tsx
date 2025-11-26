import type { Metadata } from 'next';
import WeightCalculatorClient from './WeightCalculatorClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Pet Weight Calculator | Dog & Cat Ideal Weight & BMI Calculator',
  description: 'Free pet weight calculator determines ideal weight range, body condition score, and BMI for dogs and cats. Get breed-specific recommendations.',
  keywords: ['pet weight calculator', 'dog weight calculator', 'cat weight calculator', 'ideal pet weight', 'body condition score', 'pet BMI calculator', 'pet weight management', 'healthy pet weight'],
  slug: 'weight-calculator',
  category: 'Health & Wellness',
  features: [
    'Calculate ideal weight range based on body condition score',
    'Breed-specific ideal weight recommendations',
    'BMI calculation for pets',
    'Weight difference analysis',
    'Personalized weight management recommendations',
  ],
  faqs: [
    {
      question: 'How do I calculate my pet\'s ideal weight?',
      answer: 'Use our pet weight calculator by entering your pet\'s current weight, body condition score (BCS), and optionally their breed. The calculator will determine the ideal weight range based on BCS and provide breed-specific recommendations if available.',
    },
    {
      question: 'What is a body condition score (BCS) for pets?',
      answer: 'Body Condition Score (BCS) is a 9-point scale used to assess a pet\'s body fat. A score of 5 is ideal, with 1-3 indicating underweight, 4-5 ideal, 6-7 overweight, and 8-9 obese. It helps determine if your pet needs to gain or lose weight.',
    },
    {
      question: 'How accurate is the pet weight calculator?',
      answer: 'The calculator provides estimates based on body condition scoring and breed averages. Individual pets may vary based on frame size, muscle mass, and health conditions. Always consult your veterinarian for accurate weight assessment and personalized recommendations.',
    },
    {
      question: 'What should I do if my pet is overweight?',
      answer: 'If your pet is overweight, consult your veterinarian for a safe weight loss plan. Gradual weight loss (1-2% per week) is recommended. This typically involves reducing portions by 10-20%, increasing exercise, and potentially switching to a weight management diet.',
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

export default function WeightCalculatorPage() {
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
      <WeightCalculatorClient />
    </>
  );
}
