import type { Metadata } from 'next';
import DentalHealthScoreToolClient from './DentalHealthScoreToolClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Pet Dental Health Score Tool | Dog & Cat Dental Assessment',
  description: 'Free pet dental health score tool rates breath, gums, teeth, and tartar to assess dog and cat dental health. Get personalized dental care recommendations.',
  keywords: ['pet dental health', 'dog dental care', 'cat dental care', 'dental health assessment', 'pet dental score', 'dental hygiene pets', 'pet dental checkup', 'dental disease pets'],
  slug: 'dental-health-score-tool',
  category: 'Health & Wellness',
  features: [
    'Dental health scoring system',
    'Multi-factor assessment',
    'Personalized recommendations',
    'Urgency level determination',
    'Veterinary guidance',
  ],
  faqs: [
    {
      question: 'How do I assess my pet\'s dental health?',
      answer: 'You can assess your pet\'s dental health by rating four key aspects: breath odor (1 = fresh, 5 = very bad), gum condition (1 = pink and healthy, 5 = red/swollen/bleeding), tooth condition (1 = clean and white, 5 = discolored/broken), and tartar buildup (1 = none, 5 = heavy buildup). The tool calculates an average score and provides recommendations based on the result.',
    },
    {
      question: 'What does a high dental health score mean?',
      answer: 'A high dental health score (4-5) indicates poor dental health that needs immediate attention. This may require professional dental cleaning under anesthesia, possible extractions, and a daily dental care routine. Dental disease can affect overall health, so prompt veterinary care is important.',
    },
    {
      question: 'How often should I check my pet\'s dental health?',
      answer: 'You should check your pet\'s dental health regularly, ideally weekly. Look for signs of bad breath, red or swollen gums, discolored or broken teeth, and tartar buildup. Schedule annual dental checkups with your veterinarian, and more frequently if your pet has dental issues. Daily brushing is recommended for optimal dental health.',
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

export default function DentalHealthScoreToolPage() {
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
      <DentalHealthScoreToolClient />
    </>
  );
}
