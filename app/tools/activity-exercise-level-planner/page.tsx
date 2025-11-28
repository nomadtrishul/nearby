import type { Metadata } from 'next';
import ActivityExerciseLevelPlannerClient from './ActivityExerciseLevelPlannerClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Activity & Exercise Planner | Nearby Pet Care',
  description: 'Free activity and exercise level planner creates personalized daily and weekly routines for dogs and cats based on breed, age, and activity level.',
  keywords: ['pet exercise plan', 'dog exercise planner', 'cat exercise plan', 'pet activity planner', 'exercise schedule', 'pet fitness plan', 'daily exercise pets', 'pet exercise routine'],
  slug: 'activity-exercise-level-planner',
  category: 'Training & Behavior',
  features: [
    'Personalized exercise recommendations',
    'Breed and age considerations',
    'Daily and weekly totals',
    'Specific activity suggestions',
    'Safety tips',
  ],
  faqs: [
    {
      question: 'How much exercise does my pet need?',
      answer: 'Exercise needs vary by breed, age, and individual pet. Most adult dogs need 30-60 minutes of exercise per day, while cats typically need 15-30 minutes of interactive play. High-energy breeds need more exercise (60+ minutes), while low-energy breeds need less (20-30 minutes). Puppies and kittens need shorter, more frequent sessions, while senior pets need gentler exercise.',
    },
    {
      question: 'What types of exercise are best for my pet?',
      answer: 'For dogs: walking, running, fetch, agility training, and off-leash play. For cats: interactive play with wand toys, puzzle feeders, climbing structures, and training sessions. The best exercise type depends on your pet\'s breed, age, and energy level. Always consider your pet\'s physical limitations and health conditions.',
    },
    {
      question: 'How do I know if my pet is getting enough exercise?',
      answer: 'Signs of adequate exercise include: your pet is calm and relaxed at home, maintains a healthy weight, sleeps well, doesn\'t display destructive behaviors, and seems content. If your pet is restless, gaining weight, showing behavioral issues, or seems hyperactive, they may need more exercise. Consult your veterinarian if you\'re unsure.',
    },
  ],
};

const toolTitle = config.title.split('|')[0].trim();
const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export const metadata: Metadata = generateSEOMetadata({
  title: config.title,
  description: config.description,
  keywords: config.keywords,
  pathname: `/tools/${config.slug}`,
  type: 'website',
});

export default function ActivityExerciseLevelPlannerPage() {
  const baseUrl = getBaseUrl();
  const toolUrl = ensureAbsoluteUrl(`/tools/${config.slug}`);
  
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Tools', url: '/tools' },
    { name: toolTitle, url: `/tools/${config.slug}` },
  ];

  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);
  
  const faqStructuredData = config.faqs.length > 0 
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
    featureList: config.features,
  };

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Tools', href: '/tools' },
    { name: toolTitle, href: `/tools/${config.slug}` },
  ];

  const faqMarkup = config.faqs
    .map(
      (item) =>
        `<article><h3>${escapeHtml(item.question)}</h3><p>${escapeHtml(item.answer)}</p></article>`
    )
    .join('');

  return (
    <>
      <script {...jsonLdScriptProps(webApplicationStructuredData)} />
      <script {...jsonLdScriptProps(breadcrumbStructuredData)} />
      {faqStructuredData && <script {...jsonLdScriptProps(faqStructuredData)} />}
      <ActivityExerciseLevelPlannerClient />
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<section aria-label="Activity & Exercise Planner fallback"><h2>${escapeHtml(
            toolTitle
          )}</h2><p>${escapeHtml(config.description)}</p>${faqMarkup}</section>`,
        }}
      />
    </>
  );
}

