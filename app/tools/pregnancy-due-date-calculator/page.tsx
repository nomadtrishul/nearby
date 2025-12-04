import type { Metadata } from 'next';
import PregnancyDueDateCalculatorClient from './PregnancyDueDateCalculatorClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Pregnancy Due Date Calculator',
  description: 'Calculate your pet\'s pregnancy due date and track development timeline. Get week-by-week development information and care recommendations for dogs and cats.',
  keywords: ['pet pregnancy calculator', 'dog pregnancy due date', 'cat pregnancy due date', 'pet gestation calculator', 'dog pregnancy timeline', 'cat pregnancy timeline', 'pet pregnancy care', 'whelping due date'],
  slug: 'pregnancy-due-date-calculator',
  category: 'Health & Wellness',
  features: [
    'Due date calculation',
    'Development timeline tracking',
    'Week-by-week care recommendations',
    'Pet type-specific information',
    'Veterinary care guidance',
  ],
  faqs: [
    {
      question: 'How long is a dog\'s pregnancy?',
      answer: 'A dog\'s pregnancy (gestation period) typically lasts 58-68 days, with an average of 63 days from breeding. The exact length can vary by breed and individual dog. It\'s important to track the breeding date and monitor the pregnancy closely. Schedule a veterinary checkup around day 30-35 for confirmation and health check.',
    },
    {
      question: 'How long is a cat\'s pregnancy?',
      answer: 'A cat\'s pregnancy (gestation period) typically lasts 63-67 days, with an average of 65 days from breeding. The exact length can vary by individual cat. Monitor the pregnancy closely and schedule a veterinary checkup around day 30-35 for confirmation and health check. Provide a quiet nesting area as the due date approaches.',
    },
    {
      question: 'What care does a pregnant pet need?',
      answer: 'Pregnant pets need: 1) Gradual increase in food starting week 5-6 (25-50% increase, up to 50-100% in later stages); 2) Quiet, comfortable nesting/whelping area; 3) Limited strenuous exercise in later stages; 4) Regular veterinary checkups (around day 30-35 for confirmation); 5) Monitoring for signs of complications (discharge, lethargy, loss of appetite); 6) Emergency veterinary contact ready. Always consult your veterinarian for proper prenatal care.',
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

export default function PregnancyDueDateCalculatorPage() {
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
    applicationSubCategory: 'HealthApplication',
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
      <PregnancyDueDateCalculatorClient />
    </>
  );
}
