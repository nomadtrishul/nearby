import type { Metadata } from 'next';
import FleaTickPreventionPlannerClient from './FleaTickPreventionPlannerClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Flea/Tick Prevention Planner',
  description: 'Create a year-round prevention plan for fleas and ticks based on your pet\'s lifestyle and location. Get monthly schedules, product recommendations, and prevention guidelines.',
  keywords: ['flea prevention', 'tick prevention', 'flea tick prevention plan', 'pet parasite prevention', 'flea prevention schedule', 'tick prevention schedule', 'year-round flea prevention', 'flea tick products'],
  slug: 'flea-tick-prevention-planner',
  category: 'Health & Wellness',
  features: [
    'Year-round prevention planning',
    'Monthly schedule generation',
    'Product recommendations',
    'Lifestyle-based risk assessment',
    'Geographic area consideration',
  ],
  faqs: [
    {
      question: 'How often should I give my pet flea and tick prevention?',
      answer: 'Most flea and tick preventives are given monthly, year-round. Year-round prevention is recommended for most pets, especially those in high-risk areas (rural areas, outdoor pets) or areas with mild winters. Indoor pets in urban areas may use seasonal prevention (typically March-October), but year-round is still recommended for optimal protection.',
    },
    {
      question: 'What types of flea and tick prevention are available?',
      answer: 'Common types of flea and tick prevention include: 1) Topical (spot-on) treatments - applied to skin between shoulder blades monthly; 2) Oral chewables/tablets - given by mouth monthly; 3) Collars - worn around neck, provide continuous protection for 6-8 months. Always use products specifically labeled for your pet type (dog vs cat) and weight. Never use dog products on cats - can be fatal.',
    },
    {
      question: 'Can I use dog flea/tick products on cats?',
      answer: 'No, you should never use dog flea/tick products on cats. Many dog products contain permethrin, which is highly toxic to cats and can be fatal. Always use products specifically labeled for your pet type (dog vs cat). Read labels carefully and consult your veterinarian for the best product for your pet\'s weight and lifestyle.',
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

export default function FleaTickPreventionPlannerPage() {
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
      <FleaTickPreventionPlannerClient />
    </>
  );
}
