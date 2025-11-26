import type { Metadata } from 'next';
import ParasiteRiskAssessmentClient from './ParasiteRiskAssessmentClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Parasite Risk Assessment Tool | Dog & Cat Parasite Prevention Guide',
  description: 'Free parasite risk assessment tool evaluates your pet\'s risk for fleas, ticks, heartworm, and intestinal worms. Get personalized prevention recommendations based on lifestyle and location.',
  keywords: ['parasite risk assessment', 'pet parasite prevention', 'flea tick risk', 'heartworm risk', 'parasite prevention', 'pet parasite assessment', 'flea prevention', 'tick prevention'],
  slug: 'parasite-risk-assessment',
  category: 'Health & Wellness',
  features: [
    'Comprehensive risk assessment',
    'Parasite-specific risk analysis',
    'Lifestyle-based recommendations',
    'Prevention guidelines',
    'Risk scoring system',
  ],
  faqs: [
    {
      question: 'How do I know if my pet is at risk for parasites?',
      answer: 'Parasite risk depends on several factors including age (puppies/kittens are higher risk), lifestyle (outdoor pets have higher risk), geographic location (rural areas have higher tick risk), use of preventive medications, and contact with other pets. Use our assessment tool to evaluate your pet\'s specific risk level.',
    },
    {
      question: 'What parasites should I be concerned about?',
      answer: 'Common parasites include fleas, ticks, heartworm, and intestinal worms (roundworms, hookworms, whipworms). Cats may also be at risk for ear mites. The risk level varies based on your pet\'s lifestyle, location, and preventive care. Year-round prevention is recommended for most pets.',
    },
    {
      question: 'How often should I give my pet parasite prevention?',
      answer: 'Most parasite preventives are given monthly, year-round. This includes flea, tick, and heartworm prevention. Some products combine multiple preventives. Always follow your veterinarian\'s recommendations, as they can provide the best prevention plan based on your pet\'s specific risk factors and local parasite prevalence.',
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

export default function ParasiteRiskAssessmentPage() {
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
      <ParasiteRiskAssessmentClient />
    </>
  );
}
