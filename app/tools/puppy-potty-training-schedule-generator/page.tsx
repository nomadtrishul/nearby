import type { Metadata } from 'next';
import PuppyPottyTrainingScheduleGeneratorClient from './PuppyPottyTrainingScheduleGeneratorClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Puppy Potty Training Schedule Generator',
  description: 'Create a personalized potty training schedule for your puppy based on age and daily routine. Get day-by-day schedules with potty break times, feeding schedules, and training tips.',
  keywords: ['puppy potty training', 'house training schedule', 'puppy potty schedule', 'house training puppy', 'potty training guide', 'puppy training schedule', 'housebreaking schedule', 'puppy bathroom schedule'],
  slug: 'puppy-potty-training-schedule-generator',
  category: 'Training & Behavior',
  features: [
    'Age-based schedule generation',
    'Customizable wake and bedtime',
    'Meal and potty break timing',
    'Training timeline',
    'Training tips and guidance',
  ],
  faqs: [
    {
      question: 'How often should I take my puppy outside to potty?',
      answer: 'Puppies need frequent potty breaks. A general rule is that puppies can hold their bladder for their age in months plus one hour (e.g., an 8-week-old puppy can hold it for about 2-3 hours). Very young puppies (8-10 weeks) need potty breaks every 1-2 hours, while older puppies (12-16 weeks) can go 2-3 hours. Always take puppies outside immediately after waking, eating, playing, and before bedtime.',
    },
    {
      question: 'How long does it take to potty train a puppy?',
      answer: 'Most puppies are fully house trained by 4-6 months of age, though some may take longer. The process typically follows this timeline: Week 1-2 (establish routine, frequent breaks), Week 3-4 (puppy begins understanding routine), Week 5-8 (fewer accidents), Week 9-12 (mostly house trained), and 3-6 months (fully house trained). Consistency, patience, and positive reinforcement are key.',
    },
    {
      question: 'What should I do if my puppy has an accident?',
      answer: 'If you catch your puppy in the act, interrupt with a clap or "no" and immediately take them outside. If you find an accident after it happened, do not punish your puppy - they won\'t understand. Clean the area thoroughly with an enzyme cleaner to remove odors. Focus on prevention by following the schedule and supervising closely. Accidents are normal during training.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function PuppyPottyTrainingScheduleGeneratorPage() {
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
      <PuppyPottyTrainingScheduleGeneratorClient />
    </>
  );
}

