import Image from 'next/image';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import ActivityExerciseLevelPlannerClient from './ActivityExerciseLevelPlannerClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Activity & Exercise Level Planner | Pet Activity Plan Generator',
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

      <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
          <div className="container mx-auto max-w-4xl">
            <Breadcrumb items={breadcrumbItems} />

            <div className="mb-8 sm:mb-10 mt-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                {toolTitle}
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                {config.description}
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400">
                Build personalized daily and weekly exercise plans so your pet stays engaged, maintains a healthy weight, and enjoys safe activity minutes tailored to their breed and life stage.
              </p>

              <div className="mt-8 mb-8">
                <Image
                  src="/og-image.png"
                  alt="Pet activity and exercise level planner interface"
                  width={1200}
                  height={630}
                  className="w-full rounded-lg shadow-lg"
                  loading="lazy"
                  priority={false}
                />
              </div>
            </div>

            <ActivityExerciseLevelPlannerClient />

            <div className="mt-12 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Activity & Exercise Planner Works</h2>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We combine breed information, age group, body weight, and current activity level to determine a safe baseline of daily minutes. The planner then recommends weekly totals, divides minutes into manageable sessions, and lists suggested activities that match your selections.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Why Personalization Matters</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  High-energy herding breeds need very different routines than senior toy breeds or indoor cats. Tailoring minutes and activities prevents overexertion, reduces boredom, and supports healthy weight.
                </p>
              </div>
            </div>

            <div className="mt-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {config.faqs.map((faqItem) => (
                  <div key={faqItem.question} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{faqItem.question}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{faqItem.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="/tools/exercise-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Exercise Calculator</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate precise exercise minutes</p>
                </a>
                <a href="/tools/calorie-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Calorie Calculator</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Align nutrition with activity output</p>
                </a>
                <a href="/tools/weight-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Weight Calculator</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Monitor ideal body condition</p>
                </a>
                <a href="/tools/training-progress-tracker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Training Progress Tracker</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Log skills and behavior improvements</p>
                </a>
              </div>
            </div>

            <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Note:</strong> This plan provides general guidelines. Adjust based on your pet's individual needs, health conditions, and energy level. Always consult your veterinarian before starting new exercise routines, especially for puppies, senior pets, or pets with health conditions.
              </p>
            </div>
          </div>
        </section>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<section aria-label="Activity & Exercise Planner fallback"><h2>${escapeHtml(
              toolTitle
            )}</h2><p>${escapeHtml(config.description)}</p>${faqMarkup}</section>`,
          }}
        />
      </main>
    </>
  );
}

