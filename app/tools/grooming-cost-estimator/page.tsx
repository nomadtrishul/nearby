import type { Metadata } from 'next';
import GroomingCostEstimatorClient from './GroomingCostEstimatorClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Grooming Cost Estimator',
  description: 'Estimate grooming costs for your pet based on size, coat type, grooming services, frequency, and location. Get cost breakdowns and annual estimates.',
  keywords: ['pet grooming cost', 'dog grooming price', 'cat grooming cost', 'grooming cost calculator', 'grooming expenses', 'pet grooming budget', 'grooming cost estimate', 'grooming fees'],
  slug: 'grooming-cost-estimator',
  category: 'Grooming & Hygiene',
  features: [
    'Cost per visit estimation',
    'Annual cost calculation',
    'Service breakdown',
    'Location-based pricing',
    'Cost-saving tips',
  ],
  faqs: [
    {
      question: 'How much does pet grooming cost?',
      answer: 'Pet grooming costs vary widely based on several factors: pet size (small pets $30-50, medium $45-65, large $60-80, extra large $75-100+), coat type (long or matted coats cost more), services needed (full grooming vs. bath only), location (urban areas cost 20-30% more), and groomer experience. On average, expect to pay $40-80 per visit for full grooming, with annual costs ranging from $480-960 for monthly grooming.',
    },
    {
      question: 'What factors affect grooming costs?',
      answer: 'Factors affecting grooming costs include: pet size (larger pets cost more), coat type and condition (matted coats require extra time and cost more), services needed (full grooming vs. individual services), location (urban vs. rural), groomer experience and reputation, pet behavior (difficult pets may incur additional fees), and add-on services (teeth cleaning, nail grinding, etc.). First-time visits may also cost more.',
    },
    {
      question: 'How can I save money on pet grooming?',
      answer: 'To save money on grooming: maintain regular grooming schedules to prevent matting (which costs extra to remove), learn basic grooming skills for between-visit maintenance, look for package deals or loyalty programs, consider mobile groomers for convenience (though they may cost more), groom during off-peak times, ask about add-on service costs upfront, and maintain your pet\'s coat between professional visits with regular brushing.',
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

export default function GroomingCostEstimatorPage() {
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
    applicationSubCategory: 'FinanceApplication',
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
      <GroomingCostEstimatorClient />
    </>
  );
}

