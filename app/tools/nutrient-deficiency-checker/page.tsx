import type { Metadata } from 'next';
import NutrientDeficiencyCheckerClient from './NutrientDeficiencyCheckerClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Nutrient Deficiency Checker',
  description: 'Identify potential nutrient deficiencies in your pet based on symptoms. Get information about protein, vitamins, minerals, and fatty acid deficiencies.',
  keywords: ['pet nutrient deficiency', 'dog nutrient deficiency', 'cat nutrient deficiency', 'pet nutrition', 'vitamin deficiency pets', 'mineral deficiency pets', 'pet diet analysis', 'nutritional deficiencies'],
  slug: 'nutrient-deficiency-checker',
  category: 'Nutrition',
  features: [
    'Symptom-based deficiency identification',
    'Multiple nutrient analysis',
    'Food source recommendations',
    'Diet type consideration',
    'Veterinary guidance',
  ],
  faqs: [
    {
      question: 'What are common nutrient deficiencies in pets?',
      answer: 'Common nutrient deficiencies in pets include: protein (poor growth, muscle wasting), omega-3 fatty acids (dull coat, dry skin), calcium (bone deformities, dental problems), vitamin A (vision problems, poor growth), B vitamins (lethargy, anemia, neurological issues), iron (anemia, weakness), and zinc (poor wound healing, hair loss). However, many symptoms can indicate multiple conditions, so professional veterinary evaluation is essential.',
    },
    {
      question: 'How do I know if my pet has a nutrient deficiency?',
      answer: 'Symptoms of nutrient deficiencies can include: dull coat, hair loss, dry or flaky skin, weakness, lethargy, poor growth, weight loss, muscle wasting, bone deformities, dental problems, vision problems, neurological issues, anemia, or poor wound healing. However, these symptoms can indicate many different conditions. Always consult your veterinarian for proper diagnosis through blood tests and physical examination.',
    },
    {
      question: 'Can I supplement my pet\'s diet without veterinary guidance?',
      answer: 'No, you should never supplement your pet\'s diet without veterinary guidance. Some nutrients can be toxic in excess (like vitamin A in cats), and improper supplementation can cause imbalances. Nutrient deficiencies require proper veterinary diagnosis through blood tests and physical examination. Your veterinarian can recommend appropriate supplements and dosages based on your pet\'s specific needs.',
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

export default function NutrientDeficiencyCheckerPage() {
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
      <NutrientDeficiencyCheckerClient />
    </>
  );
}
