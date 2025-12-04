import type { Metadata } from 'next';
import DietTransitionTimelineToolClient from './DietTransitionTimelineToolClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Diet Transition Timeline Tool',
  description: 'Create a step-by-step timeline for transitioning your pet to a new food. Get day-by-day feeding ratios and recommendations for smooth diet transitions.',
  keywords: ['pet diet transition', 'food transition timeline', 'switching pet food', 'diet change pets', 'food transition schedule', 'pet food change', 'gradual food transition', 'diet transition plan'],
  slug: 'diet-transition-timeline-tool',
  category: 'Nutrition',
  features: [
    'Step-by-step transition timeline',
    'Day-by-day feeding ratios',
    'Multiple transition types',
    'Recommendations and tips',
    'Smooth transition planning',
  ],
  faqs: [
    {
      question: 'How do I transition my pet to a new food?',
      answer: 'Transition your pet to a new food gradually over 7-10 days. Start with 25% new food and 75% old food for 2-3 days, then 50/50 for 2-3 days, then 75% new and 25% old for 2-3 days, and finally 100% new food. This gradual transition helps prevent digestive upset. Monitor your pet for any signs of digestive issues and slow down the transition if needed.',
    },
    {
      question: 'Why is a gradual food transition important?',
      answer: 'A gradual food transition is important because sudden diet changes can cause digestive upset, including vomiting, diarrhea, and loss of appetite. Pets have sensitive digestive systems, and gradually introducing new food allows their digestive enzymes and gut bacteria to adjust. This is especially important for pets with sensitive stomachs or those switching between very different food types (e.g., dry to wet, or different protein sources).',
    },
    {
      question: 'How long should a food transition take?',
      answer: 'A typical food transition should take 7-10 days. However, some pets may need a longer transition period (up to 2-3 weeks) if they have sensitive stomachs or are switching between very different food types. If your pet shows signs of digestive upset during the transition, slow down the process and extend the timeline. Always monitor your pet closely and consult your veterinarian if problems persist.',
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

export default function DietTransitionTimelineToolPage() {
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
    applicationSubCategory: 'NutritionCalculator',
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
      <DietTransitionTimelineToolClient />
    </>
  );
}
