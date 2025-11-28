import type { Metadata } from 'next';
import AggressionTypeCheckerClient from './AggressionTypeCheckerClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Pet Aggression Type Checker | Nearby Pet Care',
  description: 'Free pet aggression type checker helps identify fear, territorial, resource guarding, and other aggression triggers in dogs and cats with tailored guidance.',
  keywords: ['pet aggression', 'dog aggression', 'cat aggression', 'aggression types', 'aggression diagnosis', 'aggressive behavior', 'resource guarding', 'fear aggression'],
  slug: 'aggression-type-checker',
  category: 'Training & Behavior',
  features: [
    'Aggression type identification',
    'Trigger analysis',
    'Target identification',
    'Behavior assessment',
    'Professional guidance',
  ],
  faqs: [
    {
      question: 'What are the different types of aggression in pets?',
      answer: 'Common types of aggression include: resource guarding (protecting food, toys, or items), territorial aggression (protecting home/territory), fear-based aggression (defensive response to fear), inter-dog/cat aggression (aggression toward other animals), pain-induced aggression (response to pain or discomfort), protective aggression (protecting owner), and dominance aggression. Each type requires different treatment approaches.',
    },
    {
      question: 'How do I know if my pet\'s aggression is serious?',
      answer: 'Aggression is serious if: your pet has bitten or attempted to bite, aggression is escalating, aggression occurs frequently, or it poses a safety risk. Any aggression, especially involving biting, requires immediate professional help from a certified animal behaviorist or veterinarian. Never attempt to handle severe aggression on your own.',
    },
    {
      question: 'Can aggression be treated?',
      answer: 'Yes, many types of aggression can be treated or managed with professional help, behavior modification, and in some cases, medication. Treatment success depends on the type and severity of aggression, underlying causes, and consistency of treatment. Resource guarding and fear-based aggression often respond well to behavior modification. Always work with a certified professional for aggression issues.',
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

export default function AggressionTypeCheckerPage() {
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
      <AggressionTypeCheckerClient />
    </>
  );
}

