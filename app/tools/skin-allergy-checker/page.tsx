import type { Metadata } from 'next';
import SkinAllergyCheckerClient from './SkinAllergyCheckerClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Skin Allergy Checker | Nearby Pet Care',
  description: 'Free skin allergy checker helps identify potential food, environmental, flea, or contact allergies in dogs and cats. Review symptoms and get recommendations.',
  keywords: ['pet skin allergies', 'dog allergies', 'cat allergies', 'skin allergy symptoms', 'pet allergy checker', 'food allergies pets', 'environmental allergies pets', 'flea allergy dermatitis'],
  slug: 'skin-allergy-checker',
  category: 'Health & Wellness',
  features: [
    'Symptom-based allergy identification',
    'Multiple allergy type detection',
    'Management recommendations',
    'Trigger identification',
    'Veterinary guidance',
  ],
  faqs: [
    {
      question: 'What are the most common types of skin allergies in pets?',
      answer: 'The most common types of skin allergies in pets are: 1) Food allergies - reactions to specific ingredients like chicken, beef, dairy, or wheat; 2) Environmental allergies (atopy) - reactions to pollen, dust mites, mold, grass, or trees; 3) Flea allergy dermatitis - severe reaction to flea saliva; 4) Contact allergies - reactions to substances that touch the skin like shampoos, cleaning products, or fabrics.',
    },
    {
      question: 'How do I know if my pet has a skin allergy?',
      answer: 'Common symptoms of skin allergies include excessive scratching, licking paws, chewing on skin, red or inflamed skin, hair loss, hot spots, ear infections, skin infections, rash, bumps or hives, dry or flaky skin, odor, or discharge from skin. If your pet shows these symptoms, consult your veterinarian for proper diagnosis through testing.',
    },
    {
      question: 'How are skin allergies treated in pets?',
      answer: 'Treatment depends on the type of allergy. Food allergies may require an elimination diet trial (8-12 weeks) with a novel protein or hydrolyzed protein diet. Environmental allergies may require allergy testing, avoidance of triggers, antihistamines, or immunotherapy (allergy shots). Flea allergies require strict year-round flea control. All treatments should be supervised by a veterinarian.',
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

export default function SkinAllergyCheckerPage() {
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
      <SkinAllergyCheckerClient />
    </>
  );
}
