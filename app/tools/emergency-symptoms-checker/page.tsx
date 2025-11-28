import type { Metadata } from 'next';
import EmergencySymptomsCheckerClient from './EmergencySymptomsCheckerClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Emergency Symptoms Checker | Nearby Pet Care',
  description: 'Free emergency symptoms checker highlights critical, urgent, and moderate signs in dogs and cats with immediate action steps and emergency guidance.',
  keywords: ['pet emergency symptoms', 'dog emergency', 'cat emergency', 'veterinary emergency', 'pet emergency signs', 'when to take pet to vet', 'pet emergency symptoms', 'critical pet symptoms'],
  slug: 'emergency-symptoms-checker',
  category: 'Health & Wellness',
  features: [
    'Emergency symptom identification',
    'Critical, urgent, and moderate level classification',
    'Immediate action guidance',
    'Pet type-specific symptoms',
    'Emergency contact information',
  ],
  faqs: [
    {
      question: 'What are critical emergency symptoms in pets?',
      answer: 'Critical emergency symptoms that require immediate veterinary care include: difficulty breathing, collapse/unconsciousness, seizures, bloated/hard abdomen (dogs), straining to urinate (cats), pale gums, and inability to urinate. These are life-threatening and require immediate veterinary attention. Do not delay - time is critical.',
    },
    {
      question: 'When should I take my pet to the emergency vet?',
      answer: 'Take your pet to the emergency vet immediately if they show critical symptoms like difficulty breathing, collapse, seizures, bloated abdomen, pale gums, or inability to urinate. Also seek immediate care for urgent symptoms like vomiting blood, bloody diarrhea, ingested toxic substances, trauma/injury, extreme pain, or high fever (over 104°F). When in doubt, contact your veterinarian or emergency clinic.',
    },
    {
      question: 'What should I do in a pet emergency?',
      answer: 'In a pet emergency: 1) Stay calm and assess the situation; 2) Call your veterinarian or emergency clinic immediately; 3) If after hours, go to the nearest emergency veterinary clinic; 4) Keep your pet calm and safe during transport; 5) Do not give human medications unless specifically instructed by a veterinarian; 6) Have emergency contact information readily available, including ASPCA Animal Poison Control: (888) 426-4435.',
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

export default function EmergencySymptomsCheckerPage() {
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
      <EmergencySymptomsCheckerClient />
    </>
  );
}
