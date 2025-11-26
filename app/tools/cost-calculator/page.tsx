import type { Metadata } from 'next';
import CostCalculatorClient from './CostCalculatorClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Pet Ownership Cost Calculator | Dog & Cat Expenses Calculator',
  description: 'Free pet ownership cost calculator estimates total expenses for dogs and cats. Calculate food, veterinary care, grooming, insurance, and supplies costs.',
  keywords: ['pet cost calculator', 'pet ownership cost', 'pet expenses calculator', 'dog cost calculator', 'cat cost calculator', 'pet budget calculator', 'pet ownership expenses', 'pet financial planning'],
  slug: 'cost-calculator',
  category: 'Planning',
  features: [
    'Monthly and yearly cost estimates',
    'Lifetime cost projections',
    'Detailed cost breakdown',
    'Food, vet, grooming, insurance costs',
    'Supplies and training costs',
  ],
  faqs: [
    {
      question: 'How much does it cost to own a pet?',
      answer: 'Pet ownership costs vary significantly based on pet type, size, location, and lifestyle choices. On average, dog owners spend $1,200-$2,000 per year, while cat owners spend $800-$1,500 per year. This includes food, veterinary care, grooming, insurance, supplies, and other expenses. Emergency veterinary care and unexpected health issues can significantly increase costs.',
    },
    {
      question: 'What are the main costs of pet ownership?',
      answer: 'The main costs include: food and treats, routine veterinary care, emergency/unplanned veterinary care, pet insurance (optional), grooming, supplies and toys, training/classes, boarding/pet sitting, and licenses. Food and veterinary care typically make up the largest portion of pet expenses.',
    },
    {
      question: 'Is pet insurance worth it?',
      answer: 'Pet insurance can be valuable for covering unexpected veterinary expenses, especially emergency care and chronic conditions. It typically costs $25-$60 per month depending on coverage and pet type. Consider your pet\'s breed (some breeds have higher health risks), your financial situation, and ability to cover unexpected expenses when deciding.',
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

export default function CostCalculatorPage() {
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
      <CostCalculatorClient />
    </>
  );
}
