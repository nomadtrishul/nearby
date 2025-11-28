import type { Metadata } from 'next';
import SafeHumanFoodsCheckerClient from './SafeHumanFoodsCheckerClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Safe Human Foods Checker | Nearby Pet Care',
  description: 'Free safe human foods checker identifies which foods are safe for dogs and cats. Learn proper serving sizes, preparation methods, and safety guidelines.',
  keywords: ['safe foods for pets', 'safe human foods for dogs', 'safe human foods for cats', 'pet safe foods', 'human foods for pets', 'pet treat foods', 'safe foods to feed pets', 'pet food safety'],
  slug: 'safe-human-foods-checker',
  category: 'Nutrition',
  features: [
    'Safe food database for dogs and cats',
    'Safety ratings',
    'Serving size recommendations',
    'Preparation guidelines',
    'Search functionality',
  ],
  faqs: [
    {
      question: 'What human foods are safe for dogs?',
      answer: 'Safe human foods for dogs include cooked chicken, turkey, salmon, carrots, green beans, apples (without seeds), blueberries, pumpkin, sweet potatoes, rice, oatmeal, eggs (cooked), and plain yogurt. Always remove bones, seeds, and pits. Introduce new foods gradually and in moderation.',
    },
    {
      question: 'What human foods are safe for cats?',
      answer: 'Safe human foods for cats include cooked chicken, turkey, salmon (cooked), eggs (cooked), pumpkin, carrots, green beans, and small amounts of cooked rice. Cats are obligate carnivores, so most human foods should be protein-based. Always remove bones and introduce new foods gradually.',
    },
    {
      question: 'How much human food can I give my pet?',
      answer: 'Human foods should make up no more than 10% of your pet\'s daily calorie intake. The majority of their diet should be high-quality commercial pet food formulated for their specific nutritional needs. Treats and human foods should be given in moderation and as supplements, not replacements for pet food.',
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

export default function SafeHumanFoodsCheckerPage() {
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
      <SafeHumanFoodsCheckerClient />
    </>
  );
}
