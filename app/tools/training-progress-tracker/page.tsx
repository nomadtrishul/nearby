import type { Metadata } from 'next';
import TrainingProgressTrackerClient from './TrainingProgressTrackerClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Training Progress Tracker',
  description: 'Free training progress tracker logs command mastery, behaviors, and milestones for dogs and cats. Get personalized recommendations and next training steps.',
  keywords: ['pet training tracker', 'dog training progress', 'training tracker', 'obedience training tracker', 'training assessment', 'pet training level', 'training progress', 'training goals'],
  slug: 'training-progress-tracker',
  category: 'Training & Behavior',
  features: [
    'Command progress tracking',
    'Behavior progress tracking',
    'Overall progress calculation',
    'Next steps recommendations',
    'Training level assessment',
  ],
  faqs: [
    {
      question: 'How do I track my pet\'s training progress?',
      answer: 'Track training progress by: setting clear goals for each command or behavior, practicing regularly and consistently, marking progress levels (not started, learning, improving, mastered), updating your tracker regularly, and celebrating milestones. Use our training progress tracker to monitor multiple commands and behaviors at once and get personalized recommendations.',
    },
    {
      question: 'How long does it take to train a pet?',
      answer: 'Training time varies by pet, command complexity, and consistency. Basic commands like "sit" may take a few days to a week, while more complex behaviors like "stay" or "come" may take weeks or months. House training typically takes 4-6 months. Consistency, positive reinforcement, and regular practice are key to successful training.',
    },
    {
      question: 'What should I do if my pet isn\'t making progress?',
      answer: 'If training isn\'t progressing: review your training methods (use positive reinforcement), break behaviors into smaller steps, ensure you\'re being consistent, check for distractions or environmental issues, consider if the pet is ready for that level of training, consult a professional trainer for guidance, and rule out medical issues that might affect learning.',
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

export default function TrainingProgressTrackerPage() {
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
      <TrainingProgressTrackerClient />
    </>
  );
}

