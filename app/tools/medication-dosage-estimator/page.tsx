import type { Metadata } from 'next';
import MedicationDosageEstimatorClient from './MedicationDosageEstimatorClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Pet Medication Dosage Estimator | Nearby Pet Care',
  description: 'Free pet medication dosage estimator calculates weight-based doses for common medications. Includes dosage ranges, frequency guidance, and safety warnings.',
  keywords: ['pet medication dosage', 'dog medication dosage', 'cat medication dosage', 'medication calculator pets', 'pet drug dosage', 'medication dosing pets', 'pet medication calculator', 'drug dosage calculator'],
  slug: 'medication-dosage-estimator',
  category: 'Health & Wellness',
  features: [
    'Weight-based dosage calculation',
    'Common medication database',
    'Dosage frequency recommendations',
    'Safety warnings',
    'Veterinary guidance',
  ],
  faqs: [
    {
      question: 'How do I calculate medication dosage for my pet?',
      answer: 'Medication dosage is typically calculated based on your pet\'s weight in kilograms and the medication\'s dosage per kg. First, convert your pet\'s weight to kg (if in lbs, divide by 2.2). Then multiply the weight in kg by the dosage per kg. For example, if a medication is 10mg/kg and your pet weighs 5kg, the dosage would be 50mg. However, always follow your veterinarian\'s specific instructions, as dosages can vary based on the condition, medication formulation, and individual pet factors.',
    },
    {
      question: 'Can I use human medications for my pet?',
      answer: 'No, you should never give human medications to pets without explicit veterinary guidance. Many human medications are toxic to pets, and even medications that are safe for humans may have different dosages, formulations, or side effects in pets. Some human medications (like acetaminophen, ibuprofen, and certain cold medications) can be fatal to pets. Always use medications prescribed specifically for your pet by a veterinarian.',
    },
    {
      question: 'What should I do if I miss a medication dose?',
      answer: 'If you miss a medication dose: 1) If it\'s close to the next scheduled dose, skip the missed dose and continue with the regular schedule (don\'t double dose); 2) If it\'s been less than half the time until the next dose, give the missed dose and adjust the schedule; 3) Contact your veterinarian for specific guidance, as it depends on the medication type. Never double dose to make up for a missed dose. Keep a medication log to track doses and avoid missing them.',
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

export default function MedicationDosageEstimatorPage() {
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
      <MedicationDosageEstimatorClient />
    </>
  );
}
