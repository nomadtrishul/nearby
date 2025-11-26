import type { Metadata } from 'next';
import MultivitaminNeedsAnalyzerClient from './MultivitaminNeedsAnalyzerClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Multivitamin Needs Analyzer',
  description: 'Determine if your pet needs multivitamins or specific vitamin supplements based on age, diet type, and health conditions. Get personalized recommendations.',
  keywords: ['pet multivitamins', 'dog vitamins', 'cat vitamins', 'pet supplements', 'vitamin supplements pets', 'pet nutrition supplements', 'multivitamin pets', 'pet vitamin needs'],
  slug: 'multivitamin-needs-analyzer',
  category: 'Nutrition',
  features: [
    'Vitamin needs assessment',
    'Age and diet-based analysis',
    'Condition-specific recommendations',
    'Dosage guidance',
    'Safety warnings',
  ],
  faqs: [
    {
      question: 'Do pets need multivitamins?',
      answer: 'Most pets on complete commercial diets do not need multivitamins, as commercial diets are formulated to be nutritionally complete. However, pets on homemade or raw diets typically need multivitamins to ensure all essential vitamins and minerals are provided. Senior pets, pregnant/nursing pets, and pets with specific health conditions may also benefit from targeted vitamin supplements. Always consult your veterinarian before adding vitamins.',
    },
    {
      question: 'What vitamins do pets need?',
      answer: 'Essential vitamins for pets include: Vitamin A (vision, skin), B vitamins (energy, nervous system), Vitamin C (antioxidant, immune system), Vitamin D (bone health), Vitamin E (antioxidant, immune system), and Vitamin K (blood clotting). Cats also require taurine, an essential amino acid. However, pets on complete commercial diets typically receive adequate vitamins. Only supplement if recommended by a veterinarian.',
    },
    {
      question: 'Can I give my pet human vitamins?',
      answer: 'No, you should not give your pet human vitamins. Human vitamins can be harmful to pets, as they may contain ingredients toxic to pets or incorrect dosages. Always use pet-specific vitamins and supplements, and only give them under veterinary guidance. Some vitamins can be toxic in excess, so proper dosage is critical.',
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

export default function MultivitaminNeedsAnalyzerPage() {
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
      <MultivitaminNeedsAnalyzerClient />
    </>
  );
}
