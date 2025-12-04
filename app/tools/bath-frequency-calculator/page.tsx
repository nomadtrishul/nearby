import type { Metadata } from 'next';
import BathFrequencyCalculatorClient from './BathFrequencyCalculatorClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Bath Frequency Calculator',
  description: 'Calculate the ideal bathing frequency for your pet based on coat type, lifestyle, activity level, and skin condition. Get personalized recommendations.',
  keywords: ['pet bathing frequency', 'how often to bathe dog', 'how often to bathe cat', 'bath frequency calculator', 'pet bathing schedule', 'grooming frequency', 'pet hygiene frequency', 'bathing calculator'],
  slug: 'bath-frequency-calculator',
  category: 'Grooming & Hygiene',
  features: [
    'Personalized frequency calculation',
    'Multiple factor analysis',
    'Coat type considerations',
    'Lifestyle adjustments',
    'Skin condition guidance',
  ],
  faqs: [
    {
      question: 'How often should I bathe my pet?',
      answer: 'Bathing frequency depends on several factors: coat type (short coats every 6-8 weeks, long coats every 3-4 weeks), lifestyle (outdoor pets need more frequent bathing), activity level (highly active pets may need more frequent bathing), and skin condition (dry or sensitive skin needs less frequent bathing). Most pets need bathing every 4-8 weeks. Bathe when your pet is dirty or smelly, and avoid over-bathing which can strip natural oils.',
    },
    {
      question: 'Can I bathe my pet too often?',
      answer: 'Yes, over-bathing can be harmful. Bathing too frequently can strip the natural oils from your pet\'s skin and coat, leading to dryness, irritation, and increased risk of skin infections. Most pets should not be bathed more than once a week, and many pets only need bathing every 4-8 weeks. Signs of over-bathing include dry, flaky skin, excessive scratching, and a dull coat. If your pet needs frequent cleaning, consider spot cleaning or using waterless shampoos between full baths.',
    },
    {
      question: 'What factors affect how often I should bathe my pet?',
      answer: 'Factors affecting bathing frequency include: coat type (long coats may need more frequent bathing), lifestyle (outdoor pets get dirtier), activity level (highly active pets may need more frequent bathing), skin condition (dry or sensitive skin needs less frequent bathing), and individual needs (some pets have naturally oily coats or skin conditions requiring specific schedules). Always consider your pet\'s individual needs and consult your veterinarian for pets with skin conditions.',
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

export default function BathFrequencyCalculatorPage() {
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
    applicationSubCategory: 'LifestyleApplication',
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
      <BathFrequencyCalculatorClient />
    </>
  );
}

