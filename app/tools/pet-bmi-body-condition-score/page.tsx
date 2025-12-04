import type { Metadata } from 'next';
import PetBMIBodyConditionScoreClient from './PetBMIBodyConditionScoreClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Pet BMI / Body Condition Score',
  description: 'Free pet BMI and body condition score calculator assesses your pet using the 9-point scale. Get BCS assessment and weight management recommendations.',
  keywords: ['pet body condition score', 'pet BCS', 'pet BMI', 'body condition score calculator', 'pet weight assessment', 'pet body condition', 'pet weight score', 'pet health assessment'],
  slug: 'pet-bmi-body-condition-score',
  category: 'Health & Wellness',
  features: [
    '9-point body condition scale',
    'Visual assessment guide',
    'Personalized recommendations',
    'Weight management guidance',
    'Health risk assessment',
  ],
  faqs: [
    {
      question: 'What is a body condition score (BCS)?',
      answer: 'Body Condition Score (BCS) is a standardized 9-point scale used to assess a pet\'s body condition. A score of 1 indicates emaciated, 5 is ideal, and 9 is morbidly obese. It\'s assessed by feeling ribs, viewing the waist from above, and checking the abdominal tuck from the side. This is more accurate than weight alone as it accounts for body composition.',
    },
    {
      question: 'What is the ideal body condition score for my pet?',
      answer: 'The ideal body condition score is 4-5 on a 9-point scale. At this score, ribs can be easily felt but not seen, there\'s a visible waist when viewed from above, and an abdominal tuck when viewed from the side. This indicates your pet is at a healthy weight with appropriate body fat.',
    },
    {
      question: 'How often should I check my pet\'s body condition score?',
      answer: 'Check your pet\'s body condition score monthly, or more frequently if they\'re on a weight management program. Regular monitoring helps catch weight changes early. If your pet scores outside the ideal range (4-5), consult your veterinarian for a professional assessment and personalized weight management plan.',
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

export default function PetBMIBodyConditionScorePage() {
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
      <PetBMIBodyConditionScoreClient />
    </>
  );
}
