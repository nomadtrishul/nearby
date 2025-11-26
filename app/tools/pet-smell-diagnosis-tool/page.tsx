import type { Metadata } from 'next';
import PetSmellDiagnosisToolClient from './PetSmellDiagnosisToolClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Pet Smell Diagnosis Tool',
  description: 'Identify potential causes of unpleasant odors in your pet. Get guidance on diagnosing and treating smell issues related to dental, ear, and skin problems.',
  keywords: ['pet smell', 'dog smell', 'cat smell', 'pet odor diagnosis', 'bad breath pets', 'ear infection smell', 'skin infection pets', 'pet hygiene issues'],
  slug: 'pet-smell-diagnosis-tool',
  category: 'Grooming & Hygiene',
  features: [
    'Smell location identification',
    'Symptom-based diagnosis',
    'Cause identification',
    'Treatment recommendations',
    'Urgency assessment',
  ],
  faqs: [
    {
      question: 'Why does my pet smell bad?',
      answer: 'Common causes of bad smells in pets include: dental disease (bad breath), ear infections (foul ear odor), skin infections or yeast overgrowth (musty or yeasty smell), anal gland issues (fishy smell), lack of regular grooming, rolling in something unpleasant, or underlying health conditions. The location and type of smell can help identify the cause. Persistent or severe odors, especially with other symptoms, should be evaluated by a veterinarian.',
    },
    {
      question: 'What does it mean if my pet\'s breath smells bad?',
      answer: 'Bad breath in pets is most commonly caused by dental disease (plaque, tartar, gingivitis, periodontal disease). Other causes include oral infections or abscesses, foreign objects stuck in teeth, kidney disease (ammonia-like smell), or diabetes (sweet or fruity smell). Regular dental care, including brushing and professional cleanings, can help prevent dental disease. If bad breath persists or is severe, consult your veterinarian.',
    },
    {
      question: 'When should I be concerned about my pet\'s smell?',
      answer: 'Be concerned and seek veterinary care if: the smell is severe or sudden, it\'s accompanied by other symptoms (lethargy, loss of appetite, excessive scratching, discharge), the smell persists despite regular grooming, your pet shows signs of pain or discomfort, or the smell is from a specific area (ears, mouth, skin) that may indicate infection. Some conditions, like severe infections or anal gland abscesses, require immediate veterinary attention.',
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

export default function PetSmellDiagnosisToolPage() {
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
      <PetSmellDiagnosisToolClient />
    </>
  );
}

