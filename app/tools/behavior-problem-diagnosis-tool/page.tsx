import type { Metadata } from 'next';
import BehaviorProblemDiagnosisToolClient from './BehaviorProblemDiagnosisToolClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Behavior Problem Diagnosis Tool',
  description: 'Identify potential causes of behavior problems in your pet and get guidance on solutions. Diagnose aggression, separation anxiety, and more.',
  keywords: ['pet behavior problems', 'dog behavior issues', 'cat behavior problems', 'behavior diagnosis', 'pet training problems', 'aggression in pets', 'separation anxiety', 'behavior modification'],
  slug: 'behavior-problem-diagnosis-tool',
  category: 'Training & Behavior',
  features: [
    'Behavior problem identification',
    'Symptom-based diagnosis',
    'Cause analysis',
    'Solution recommendations',
    'Urgency assessment',
  ],
  faqs: [
    {
      question: 'What are common behavior problems in pets?',
      answer: 'Common behavior problems include: excessive barking/meowing, destructive chewing, house soiling, aggression (toward people or other animals), separation anxiety, resource guarding, fear or phobias, jumping on people, pulling on leash, and not responding to commands. Many behavior problems can be addressed with proper training, but some require professional help.',
    },
    {
      question: 'When should I seek professional help for behavior problems?',
      answer: 'Seek professional help immediately for: aggression toward people or animals, severe separation anxiety, resource guarding that escalates, or any behavior that poses a safety risk. Also consult a professional if behavior problems persist despite training efforts, worsen over time, or if you\'re unsure how to address them safely. Certified animal behaviorists and professional trainers can provide effective solutions.',
    },
    {
      question: 'How can I prevent behavior problems?',
      answer: 'Prevent behavior problems by: providing adequate exercise and mental stimulation, consistent training from an early age, proper socialization, positive reinforcement training methods, addressing issues early before they become habits, and ensuring your pet\'s physical and mental needs are met. Early intervention is key to preventing behavior problems from developing or worsening.',
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

export default function BehaviorProblemDiagnosisToolPage() {
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
      <BehaviorProblemDiagnosisToolClient />
    </>
  );
}

