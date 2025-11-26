import type { Metadata } from 'next';
import HeatCycleTrackerClient from './HeatCycleTrackerClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Heat Cycle Tracker',
  description: 'Track your pet\'s heat cycle and predict the next cycle. Get information about current phase, cycle length, and recommendations for dogs and cats.',
  keywords: ['heat cycle tracker', 'dog heat cycle', 'cat heat cycle', 'estrus tracker', 'pet heat cycle', 'reproductive cycle tracker', 'heat cycle calculator', 'estrus cycle'],
  slug: 'heat-cycle-tracker',
  category: 'Health & Wellness',
  features: [
    'Heat cycle prediction',
    'Current phase identification',
    'Cycle length tracking',
    'Pet type-specific information',
    'Reproductive health guidance',
  ],
  faqs: [
    {
      question: 'How often do dogs go into heat?',
      answer: 'Dogs typically go into heat every 5-8 months, with an average of 6 months (approximately 180 days). The heat cycle lasts approximately 2-3 weeks, with the fertile period usually occurring on days 10-18 of the cycle. However, cycle length can vary between individual dogs and breeds.',
    },
    {
      question: 'How often do cats go into heat?',
      answer: 'Cats are seasonally polyestrous, meaning they have multiple heat cycles during the breeding season (typically spring through fall). Heat cycles occur every 2-3 weeks during the breeding season, and cats can have multiple cycles until bred or the season ends. Each heat cycle typically lasts 4-7 days if the cat is not bred.',
    },
    {
      question: 'What are the phases of a dog\'s heat cycle?',
      answer: 'A dog\'s heat cycle has four phases: 1) Proestrus (Days 1-9) - bleeding/swelling, not receptive to males; 2) Estrus (Days 10-18) - receptive to males, fertile period, discharge changes to pink/straw-colored; 3) Diestrus (Days 19-60) - not receptive, pregnancy or false pregnancy possible; 4) Anestrus (Days 61-180) - resting phase, no reproductive activity.',
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

export default function HeatCycleTrackerPage() {
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
      <HeatCycleTrackerClient />
    </>
  );
}
