import type { Metadata } from 'next';
import HeatCycleTrackerClient from './HeatCycleTrackerClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Heat Cycle Tracker',
  description: 'Track your pet\'s heat cycle and predict the next cycle. Get information about current phase, cycle length, and recommendations for dogs and cats.',
  keywords: ['heat cycle tracker', 'dog heat cycle', 'cat heat cycle', 'estrus tracker', 'pet heat cycle', 'reproductive cycle tracker', 'heat cycle calculator', 'estrus cycle'],
  slug: 'heat-cycle-tracker',
  category: 'Health & Wellness',
  features: [
    'Heat cycle prediction',
    'Current phase identification',
    'Cycle length tracking',
    'Pet type-specific information',
    'Reproductive health guidance',
  ],
  faqs: [
    {
      question: 'How often do dogs go into heat?',
      answer: 'Dogs typically go into heat every 5-8 months, with an average of 6 months (approximately 180 days). The heat cycle lasts approximately 2-3 weeks, with the fertile period usually occurring on days 10-18 of the cycle. However, cycle length can vary between individual dogs and breeds.',
    },
    {
      question: 'How often do cats go into heat?',
      answer: 'Cats are seasonally polyestrous, meaning they have multiple heat cycles during the breeding season (typically spring through fall). Heat cycles occur every 2-3 weeks during the breeding season, and cats can have multiple cycles until bred or the season ends. Each heat cycle typically lasts 4-7 days if the cat is not bred.',
    },
    {
      question: 'What are the phases of a dog\'s heat cycle?',
      answer: 'A dog\'s heat cycle has four phases: 1) Proestrus (Days 1-9) - bleeding/swelling, not receptive to males; 2) Estrus (Days 10-18) - receptive to males, fertile period, discharge changes to pink/straw-colored; 3) Diestrus (Days 19-60) - not receptive, pregnancy or false pregnancy possible; 4) Anestrus (Days 61-180) - resting phase, no reproductive activity.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function HeatCycleTrackerPage() {
  const { webApplication, breadcrumb, faq } = generateToolStructuredData(config);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplication) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {faq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
        />
      )}
      <HeatCycleTrackerClient />
    </>
  );
}
