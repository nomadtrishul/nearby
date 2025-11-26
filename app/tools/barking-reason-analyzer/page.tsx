import type { Metadata } from 'next';
import BarkingReasonAnalyzerClient from './BarkingReasonAnalyzerClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Barking Reason Analyzer',
  description: 'Identify why your dog is barking and get targeted solutions. Analyze barking behavior based on context, type, frequency, and duration to determine the cause.',
  keywords: ['dog barking', 'excessive barking', 'barking problems', 'why dogs bark', 'barking solutions', 'dog behavior', 'barking training', 'stop dog barking'],
  slug: 'barking-reason-analyzer',
  category: 'Training & Behavior',
  features: [
    'Context-based analysis',
    'Barking type identification',
    'Trigger identification',
    'Targeted solutions',
    'Urgency assessment',
  ],
  faqs: [
    {
      question: 'Why do dogs bark?',
      answer: 'Dogs bark for many reasons: alerting to danger or intruders (territorial/alert barking), seeking attention, expressing excitement, showing fear or anxiety, responding to boredom, separation anxiety when left alone, reactivity to other dogs or people, or learned behavior. Understanding the specific reason for barking is essential for effective training.',
    },
    {
      question: 'How can I stop my dog from excessive barking?',
      answer: 'To reduce excessive barking: identify the cause (use our analyzer), address the underlying issue (boredom, anxiety, etc.), teach a "quiet" command using positive reinforcement, provide adequate exercise and mental stimulation, avoid reinforcing barking (don\'t give attention when barking), use desensitization for specific triggers, and consider professional training for persistent issues. Never use punishment or bark collars, as they can worsen the problem.',
    },
    {
      question: 'Is it normal for dogs to bark?',
      answer: 'Yes, barking is a normal form of communication for dogs. However, excessive, constant, or prolonged barking may indicate an underlying problem such as anxiety, boredom, lack of training, or medical issues. If barking is causing problems or seems excessive, it\'s worth investigating the cause and working on training solutions.',
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

export default function BarkingReasonAnalyzerPage() {
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
      <BarkingReasonAnalyzerClient />
    </>
  );
}

