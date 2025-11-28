import type { Metadata } from 'next';
import ToxicFoodsCheckerClient from './ToxicFoodsCheckerClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Toxic Foods Checker | Nearby Pet Care',
  description: 'Free toxic foods checker identifies dangerous foods for dogs and cats. Learn about symptoms, severity, and emergency actions to keep your pet safe.',
  keywords: ['toxic foods for pets', 'toxic foods for dogs', 'toxic foods for cats', 'pet poison foods', 'dangerous foods for pets', 'foods toxic to dogs', 'foods toxic to cats', 'pet food safety'],
  slug: 'toxic-foods-checker',
  category: 'Health & Wellness',
  features: [
    'Toxic food database for dogs and cats',
    'Severity ratings',
    'Symptom information',
    'Emergency action guidance',
    'Search functionality',
  ],
  faqs: [
    {
      question: 'What foods are toxic to dogs?',
      answer: 'Common toxic foods for dogs include chocolate, grapes and raisins, onions and garlic, xylitol (found in sugar-free products), alcohol, caffeine, macadamia nuts, cooked bones, and many others. Even small amounts of some foods can be dangerous. When in doubt, consult your veterinarian before feeding any human food to your dog.',
    },
    {
      question: 'What foods are toxic to cats?',
      answer: 'Toxic foods for cats include chocolate, grapes and raisins, onions and garlic, xylitol, alcohol, caffeine, raw fish (can cause thiamine deficiency), raw eggs, bones, and excessive tuna. Cats are also more sensitive to certain toxins than dogs. Always consult your veterinarian before feeding human food to your cat.',
    },
    {
      question: 'What should I do if my pet ate something toxic?',
      answer: 'If your pet has ingested a toxic food, seek immediate veterinary care. Do not wait for symptoms to appear. Contact your veterinarian or animal poison control center (ASPCA Animal Poison Control: 888-426-4435) immediately. Do not induce vomiting unless specifically instructed by a veterinarian, as this can sometimes make the situation worse.',
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

export default function ToxicFoodsCheckerPage() {
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
      <ToxicFoodsCheckerClient />
    </>
  );
}
