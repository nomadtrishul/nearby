import type { Metadata } from 'next';
import SeniorHealthChecklistGeneratorClient from './SeniorHealthChecklistGeneratorClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Senior Health Checklist Generator',
  description: 'Generate a comprehensive health checklist for your senior pet. Get age-appropriate monitoring items, veterinary care recommendations, and wellness guidelines.',
  keywords: ['senior pet health', 'elderly pet care', 'senior dog health', 'senior cat health', 'aging pet checklist', 'senior pet wellness', 'elderly pet monitoring', 'senior pet care'],
  slug: 'senior-health-checklist-generator',
  category: 'Health & Wellness',
  features: [
    'Age-appropriate health checklist',
    'Veterinary care recommendations',
    'Monitoring guidelines',
    'Wellness items',
    'Senior pet care guidance',
  ],
  faqs: [
    {
      question: 'What health issues should I monitor in senior pets?',
      answer: 'Monitor senior pets for: changes in appetite or water intake, weight changes, mobility issues (stiffness, limping, difficulty getting up), changes in behavior (confusion, disorientation, increased sleeping), dental problems, vision or hearing changes, lumps or bumps, changes in urination or defecation, coughing or breathing changes, and skin/coat changes. Senior pets should have veterinary checkups every 6 months (or more frequently if health issues are present) to catch problems early.',
    },
    {
      question: 'How often should senior pets see the veterinarian?',
      answer: 'Senior pets should see the veterinarian at least every 6 months for wellness exams, even if they appear healthy. More frequent visits (every 3-4 months) may be recommended if your pet has chronic health conditions. Regular checkups allow for early detection of age-related diseases, monitoring of existing conditions, and adjustments to medications or treatments. Blood work, urinalysis, and other diagnostic tests are often recommended annually or semi-annually for senior pets.',
    },
    {
      question: 'What special care do senior pets need?',
      answer: 'Senior pets need: 1) More frequent veterinary checkups (every 6 months); 2) Regular monitoring of weight, appetite, and behavior; 3) Appropriate exercise (adjusted for mobility); 4) Comfortable bedding and easy access to food/water; 5) Senior-appropriate diet; 6) Dental care; 7) Joint supplements if needed; 8) Environmental modifications (ramps, non-slip surfaces); 9) Mental stimulation; 10) Patience and understanding of age-related changes. Work with your veterinarian to develop a senior care plan tailored to your pet\'s needs.',
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

export default function SeniorHealthChecklistGeneratorPage() {
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
      <SeniorHealthChecklistGeneratorClient />
    </>
  );
}
