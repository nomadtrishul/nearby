import type { Metadata } from 'next';
import SymptomCheckerClient from './SymptomCheckerClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Pet Symptom Checker | Dog & Cat Health Symptom Guide',
  description: 'Free pet symptom checker helps identify potential health issues for dogs and cats. Get symptom information and guidance. Always consult a veterinarian.',
  keywords: ['pet symptom checker', 'dog symptom checker', 'cat symptom checker', 'pet health symptoms', 'pet illness symptoms', 'veterinary symptom guide', 'pet health assessment', 'pet symptom guide'],
  slug: 'symptom-checker',
  category: 'Health & Wellness',
  features: [
    'Symptom identification',
    'Severity assessment',
    'Recommended actions',
    'Emergency symptom alerts',
    'Dog and cat symptom database',
  ],
  faqs: [
    {
      question: 'Is this symptom checker a substitute for veterinary care?',
      answer: 'No, this tool is for informational purposes only and is NOT a substitute for professional veterinary diagnosis or treatment. If your pet is experiencing severe symptoms, appears to be in distress, or you have any concerns, seek immediate veterinary care. Always consult with a licensed veterinarian for proper diagnosis and treatment.',
    },
    {
      question: 'What should I do if my pet has emergency symptoms?',
      answer: 'If your pet is experiencing emergency symptoms such as difficulty breathing, seizures, collapse, bloated abdomen, pale gums, or inability to urinate, seek immediate veterinary care. Contact your nearest emergency veterinary clinic or animal poison control center immediately. Do not wait.',
    },
    {
      question: 'How do I know if my pet needs to see a veterinarian?',
      answer: 'If your pet has severe symptoms, multiple symptoms, symptoms that persist for more than 24 hours, or if you have any concerns about your pet\'s health, consult with a veterinarian. It\'s always better to err on the side of caution when it comes to your pet\'s health.',
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

export default function SymptomCheckerPage() {
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
      <SymptomCheckerClient />
    </>
  );
}
