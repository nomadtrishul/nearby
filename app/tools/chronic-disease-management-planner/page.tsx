import type { Metadata } from 'next';
import ChronicDiseaseManagementPlannerClient from './ChronicDiseaseManagementPlannerClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Chronic Disease Management Planner',
  description: 'Create a comprehensive management plan for pets with chronic health conditions. Get medication schedules, monitoring guidelines, and dietary recommendations.',
  keywords: ['chronic disease management', 'pet disease management', 'diabetes management pets', 'kidney disease pets', 'heart disease pets', 'chronic illness pets', 'disease management plan', 'pet health management'],
  slug: 'chronic-disease-management-planner',
  category: 'Health & Wellness',
  features: [
    'Comprehensive management plans',
    'Medication schedules',
    'Monitoring guidelines',
    'Dietary recommendations',
    'Lifestyle modifications',
  ],
  faqs: [
    {
      question: 'How do I manage a pet with chronic disease?',
      answer: 'Managing a pet with chronic disease requires: 1) Working closely with your veterinarian to develop a comprehensive plan; 2) Following medication schedules exactly as prescribed; 3) Regular monitoring of symptoms and condition; 4) Dietary modifications as recommended; 5) Lifestyle adjustments (exercise, stress reduction); 6) Keeping detailed records of medications, symptoms, and veterinary visits; 7) Attending all scheduled checkups. Always follow your veterinarian\'s specific recommendations.',
    },
    {
      question: 'What chronic diseases are common in pets?',
      answer: 'Common chronic diseases in pets include: diabetes, kidney disease, heart disease, arthritis, allergies, thyroid disease (hyperthyroidism in cats, hypothyroidism in dogs), liver disease, inflammatory bowel disease (IBD), epilepsy, Cushing\'s disease, and Addison\'s disease. Each condition requires specific management approaches including medications, dietary modifications, and monitoring protocols.',
    },
    {
      question: 'How important is diet in managing chronic disease?',
      answer: 'Diet is crucial in managing chronic disease. Many conditions require prescription diets specifically formulated for the condition (e.g., kidney diets, diabetic diets, heart diets). Dietary modifications can help manage symptoms, slow disease progression, and improve quality of life. Always follow your veterinarian\'s dietary recommendations, as incorrect diets can worsen the condition. Never change your pet\'s diet without veterinary guidance.',
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

export default function ChronicDiseaseManagementPlannerPage() {
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
      <ChronicDiseaseManagementPlannerClient />
    </>
  );
}
