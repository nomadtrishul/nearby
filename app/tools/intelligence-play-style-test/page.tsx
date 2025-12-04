import type { Metadata } from 'next';
import IntelligencePlayStyleTestClient from './IntelligencePlayStyleTestClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Intelligence & Play Style Test',
  description: 'Discover your pet\'s intelligence level and preferred play style through a comprehensive assessment. Get personalized activity recommendations based on your pet\'s cognitive abilities and play preferences.',
  keywords: ['pet intelligence test', 'dog intelligence', 'cat intelligence', 'play style test', 'pet play preferences', 'intelligence assessment', 'pet activities', 'play style'],
  slug: 'intelligence-play-style-test',
  category: 'Training & Behavior',
  features: [
    'Intelligence level assessment',
    'Play style identification',
    'Personalized activity recommendations',
    'Characteristic analysis',
    'Training guidance',
  ],
  faqs: [
    {
      question: 'How do you measure pet intelligence?',
      answer: 'Pet intelligence is measured by factors such as: problem-solving ability (how quickly they solve puzzles), learning speed (how fast they learn new commands), attention span (ability to focus on tasks), curiosity (interest in exploring new things), and adaptability. Intelligence varies significantly between individual pets and breeds. High intelligence doesn\'t always mean easier training - intelligent pets may also be more independent or easily bored.',
    },
    {
      question: 'What are different play styles in pets?',
      answer: 'Common play styles include: High-Energy Interactive (loves active play with owner, high energy), Problem-Solving/Mental (enjoys puzzles and mental challenges), Physical/Active (prefers running, fetching, physical activities), and Independent/Self-Entertainment (enjoys playing alone with toys). Understanding your pet\'s play style helps you provide appropriate activities and enrichment.',
    },
    {
      question: 'How can I provide appropriate activities for my pet\'s intelligence and play style?',
      answer: 'Match activities to your pet\'s intelligence and play style: High-intelligence pets need challenging puzzles and varied training. High-energy pets need plenty of physical exercise. Problem-solving pets enjoy puzzle toys and games. Independent pets benefit from self-entertaining toys. Provide both mental and physical stimulation, rotate activities to prevent boredom, and adjust difficulty based on your pet\'s abilities.',
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

export default function IntelligencePlayStyleTestPage() {
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
    applicationSubCategory: 'EducationApplication',
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
      <IntelligencePlayStyleTestClient />
    </>
  );
}

