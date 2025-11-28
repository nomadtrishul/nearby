import type { Metadata } from 'next';
import RabiesExposureCheckerClient from './RabiesExposureCheckerClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Rabies Exposure Checker | Nearby Pet Care',
  description: 'Free rabies exposure checker provides guidance if your pet may have been exposed to rabies. Assess risk level and get immediate action steps.',
  keywords: ['rabies exposure', 'rabies risk', 'pet rabies', 'rabies exposure assessment', 'rabies prevention', 'rabies symptoms', 'rabies vaccination', 'rabies exposure guidance'],
  slug: 'rabies-exposure-checker',
  category: 'Health & Wellness',
  features: [
    'Risk level assessment',
    'Immediate action guidance',
    'Vaccination status evaluation',
    'Emergency protocols',
    'Veterinary guidance',
  ],
  faqs: [
    {
      question: 'What should I do if my pet has been exposed to rabies?',
      answer: 'If your pet has been bitten or scratched by a wild animal or unvaccinated animal, contact your veterinarian and local health department immediately (within 24 hours). If your pet is not vaccinated or vaccination is overdue, this is URGENT. Your pet may need immediate rabies booster and quarantine. Always follow your veterinarian\'s and health department\'s instructions exactly.',
    },
    {
      question: 'Is my pet at risk if they are vaccinated against rabies?',
      answer: 'Vaccinated pets have significantly lower risk, but they may still need a rabies booster vaccination after exposure. Contact your veterinarian immediately if your vaccinated pet has been exposed. Quarantine may be required depending on local regulations. Monitor your pet closely for any signs of illness.',
    },
    {
      question: 'How urgent is rabies exposure?',
      answer: 'Rabies exposure is extremely urgent. Rabies is fatal once symptoms appear, and there is no cure. Time is critical - contact your veterinarian and local health department immediately. If your pet is not vaccinated or vaccination is overdue, this is an emergency situation requiring immediate action.',
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

export default function RabiesExposureCheckerPage() {
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
      <RabiesExposureCheckerClient />
    </>
  );
}
