import type { Metadata } from 'next';
import BestShampooSelectorClient from './BestShampooSelectorClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Best Shampoo Selector',
  description: 'Find the best shampoo for your pet based on coat type, skin condition, and age. Get personalized shampoo recommendations with ingredient guidance.',
  keywords: ['pet shampoo', 'dog shampoo', 'cat shampoo', 'best pet shampoo', 'shampoo selector', 'pet grooming shampoo', 'hypoallergenic shampoo', 'pet shampoo guide'],
  slug: 'best-shampoo-selector',
  category: 'Grooming & Hygiene',
  features: [
    'Personalized shampoo recommendations',
    'Skin condition considerations',
    'Coat type-specific suggestions',
    'Age-appropriate formulas',
    'Ingredient guidance',
  ],
  faqs: [
    {
      question: 'What shampoo should I use for my pet?',
      answer: 'The best shampoo depends on your pet\'s coat type, skin condition, and age. For normal skin and coat, use a general purpose, pH-balanced pet shampoo. For sensitive or dry skin, choose hypoallergenic or moisturizing shampoos with oatmeal or aloe vera. For oily coats, use clarifying shampoos. For itchy skin, consider medicated or soothing shampoos. Puppies and kittens need tear-free, extra-mild formulas. Always use pet-specific shampoos, never human shampoos.',
    },
    {
      question: 'Can I use human shampoo on my pet?',
      answer: 'No, you should never use human shampoo on pets. Human shampoos have different pH levels (around 5.5) compared to pet skin (around 6.2-7.4 for dogs, 6.0-6.5 for cats). Using human shampoo can disrupt the skin\'s natural pH balance, cause dryness, irritation, and make pets more susceptible to skin infections. Always use shampoos specifically formulated for pets.',
    },
    {
      question: 'How often should I bathe my pet?',
      answer: 'Bathing frequency depends on your pet\'s coat type and lifestyle. Most pets need bathing every 4-8 weeks. Short-coated pets may need bathing every 4-8 weeks, while long-coated pets may need bathing every 3-4 weeks. Outdoor pets or those with skin conditions may need more frequent bathing. Over-bathing can strip natural oils and cause dry skin, so avoid bathing too frequently unless recommended by your veterinarian.',
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

export default function BestShampooSelectorPage() {
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
      <BestShampooSelectorClient />
    </>
  );
}

