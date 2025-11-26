import type { Metadata } from 'next';
import GroomingToolsRecommenderClient from './GroomingToolsRecommenderClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Grooming Tools Recommender',
  description: 'Get personalized grooming tool recommendations based on your pet\'s coat type and grooming needs. Find essential, recommended, and optional tools for effective pet grooming.',
  keywords: ['pet grooming tools', 'dog grooming tools', 'cat grooming tools', 'grooming brush', 'grooming supplies', 'pet grooming equipment', 'grooming tool guide', 'pet brush types'],
  slug: 'grooming-tools-recommender',
  category: 'Grooming & Hygiene',
  features: [
    'Personalized tool recommendations',
    'Coat type-specific suggestions',
    'Essential vs. optional tools',
    'Usage instructions',
    'Grooming tips',
  ],
  faqs: [
    {
      question: 'What grooming tools do I need for my pet?',
      answer: 'Essential grooming tools include: nail clippers (for trimming nails every 2-4 weeks), ear cleaner (for weekly to monthly ear cleaning), toothbrush and pet toothpaste (for daily or regular dental care), and appropriate brushes for your pet\'s coat type (slicker brushes for medium/long coats, soft brushes for short coats, undercoat rakes for double coats). Additional tools like combs, detangling sprays, and bathing supplies may be recommended based on your pet\'s specific needs.',
    },
    {
      question: 'What brush should I use for my pet\'s coat type?',
      answer: 'Brush selection depends on coat type: Short/smooth coats need soft bristle brushes or grooming mitts. Medium coats need slicker brushes and combs. Long coats need slicker brushes, wide-tooth combs, and possibly pin brushes. Double coats need undercoat rakes and slicker brushes, plus deshedding tools. Curly coats need pin brushes and wide-tooth combs. Always use appropriate tools for your pet\'s specific coat to avoid damage or discomfort.',
    },
    {
      question: 'How often should I replace grooming tools?',
      answer: 'Replace grooming tools when they show signs of wear: brushes with bent, broken, or missing bristles, nail clippers that are dull or don\'t cut cleanly, or any tool that\'s damaged or no longer functions properly. Quality tools can last years with proper care. Clean tools after each use, store them properly, and inspect regularly for damage. Investing in quality tools initially can save money long-term.',
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

export default function GroomingToolsRecommenderPage() {
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
      <GroomingToolsRecommenderClient />
    </>
  );
}

