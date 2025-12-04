import type { Metadata } from 'next';
import PetHydrationCalculatorClient from './PetHydrationCalculatorClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Pet Hydration Calculator',
  description: 'Free pet hydration calculator determines daily water needs for dogs and cats based on weight, activity level, and environment. Get hydration recommendations.',
  keywords: ['pet hydration calculator', 'dog water needs', 'cat water needs', 'pet water calculator', 'pet hydration needs', 'daily water for pets', 'pet dehydration signs', 'pet water intake'],
  slug: 'pet-hydration-calculator',
  category: 'Health & Wellness',
  features: [
    'Daily water needs calculation',
    'Activity level adjustments',
    'Environment considerations',
    'Dehydration signs guide',
    'Hydration recommendations',
  ],
  faqs: [
    {
      question: 'How much water does my pet need per day?',
      answer: 'Water needs vary by weight, activity level, and environment. Generally, pets need 50-60ml of water per kg of body weight per day. Active pets, pets in hot weather, and pets eating dry food need more water. Use our calculator to get personalized recommendations.',
    },
    {
      question: 'How can I tell if my pet is dehydrated?',
      answer: 'Signs of dehydration include dry, sticky gums, loss of skin elasticity (skin doesn\'t snap back when gently pulled), sunken eyes, lethargy, decreased urination, dark yellow urine, excessive panting, and loss of appetite. If you notice these signs, contact your veterinarian immediately.',
    },
    {
      question: 'Do cats need less water than dogs?',
      answer: 'Cats typically need slightly less water per kg of body weight than dogs, and they often get some hydration from wet food (which contains ~75% water). However, cats are prone to urinary issues, so adequate hydration is crucial. Consider a water fountain to encourage drinking.',
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

export default function PetHydrationCalculatorPage() {
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
      <PetHydrationCalculatorClient />
    </>
  );
}
