import type { Metadata } from 'next';
import EarCleaningReminderToolClient from './EarCleaningReminderToolClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Ear-Cleaning Reminder Tool',
  description: 'Track your pet\'s ear cleaning schedule and get personalized reminders based on ear type and condition. Learn proper ear cleaning techniques and frequency recommendations.',
  keywords: ['pet ear cleaning', 'dog ear cleaning', 'cat ear cleaning', 'ear cleaning reminder', 'ear care schedule', 'ear hygiene', 'ear cleaning frequency', 'pet ear health'],
  slug: 'ear-cleaning-reminder-tool',
  category: 'Grooming & Hygiene',
  features: [
    'Personalized cleaning schedule',
    'Ear type considerations',
    'Condition-based frequency',
    'Cleaning instructions',
    'Reminder tracking',
  ],
  faqs: [
    {
      question: 'How often should I clean my pet\'s ears?',
      answer: 'Ear cleaning frequency depends on your pet\'s ear type and condition. Most pets need ear cleaning every 1-2 weeks. Floppy-eared dogs may need weekly cleaning, while upright ears may need cleaning every 2 weeks. Pets with waxy ears, allergies, or excess ear hair may need more frequent cleaning. Always check ears weekly for signs of problems, and clean when they appear dirty or waxy.',
    },
    {
      question: 'How do I clean my pet\'s ears safely?',
      answer: 'To clean ears safely: use a pet-specific ear cleaner recommended by your veterinarian, apply cleaner to the ear canal, gently massage the base of the ear, let your pet shake their head, then wipe away debris from the outer ear and visible parts of the ear canal with a soft cloth or cotton ball. Never use cotton swabs deep in the ear canal, and stop if your pet shows signs of pain or discomfort.',
    },
    {
      question: 'What are signs of ear problems in pets?',
      answer: 'Signs of ear problems include: redness or swelling, foul odor, discharge (brown, yellow, or bloody), excessive scratching or head shaking, pain when touching ears, tilting head to one side, loss of balance, or behavioral changes. If you notice any of these signs, stop cleaning and consult your veterinarian immediately. Do not attempt to clean infected ears without veterinary guidance.',
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

export default function EarCleaningReminderToolPage() {
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
      <EarCleaningReminderToolClient />
    </>
  );
}

