import type { Metadata } from 'next';
import SeparationAnxietyRiskCheckerClient from './SeparationAnxietyRiskCheckerClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Separation Anxiety Risk Checker',
  description: 'Assess your pet\'s risk for separation anxiety based on behaviors, history, and lifestyle. Get prevention strategies and treatment recommendations for separation anxiety.',
  keywords: ['separation anxiety', 'dog separation anxiety', 'cat separation anxiety', 'separation anxiety test', 'anxiety in pets', 'pet anxiety assessment', 'separation anxiety symptoms', 'anxiety treatment'],
  slug: 'separation-anxiety-risk-checker',
  category: 'Training & Behavior',
  features: [
    'Risk level assessment',
    'Symptom identification',
    'History-based analysis',
    'Prevention strategies',
    'Treatment recommendations',
  ],
  faqs: [
    {
      question: 'What is separation anxiety in pets?',
      answer: 'Separation anxiety is a condition where pets become distressed when left alone or separated from their owners. Symptoms include destructive behavior, excessive vocalization, house soiling, pacing, drooling, attempts to escape, and self-injury. It\'s more common in dogs but can occur in cats. Separation anxiety requires professional treatment and behavior modification.',
    },
    {
      question: 'What causes separation anxiety?',
      answer: 'Separation anxiety can be caused by: being rehomed or rescued, lack of early socialization, sudden changes in routine, loss of a family member or pet, traumatic experiences, over-attachment to owner, or being left alone for long periods. Pets that spend most of their time with their owners are at higher risk.',
    },
    {
      question: 'How is separation anxiety treated?',
      answer: 'Treatment involves: gradual desensitization to being alone, creating a safe space with comfort items, providing mental stimulation (puzzle toys), avoiding making departures/arrivals a big deal, using positive reinforcement, and in severe cases, medication prescribed by a veterinarian. Professional help from a certified animal behaviorist is often necessary. Never punish anxious behavior.',
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

export default function SeparationAnxietyRiskCheckerPage() {
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
      <SeparationAnxietyRiskCheckerClient />
    </>
  );
}

