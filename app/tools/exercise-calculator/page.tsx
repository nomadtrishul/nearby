import type { Metadata } from 'next';
import ExerciseCalculatorClient from './ExerciseCalculatorClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Pet Exercise Calculator | Dog & Cat Daily Exercise Needs Calculator',
  description: 'Free pet exercise calculator determines daily exercise needs for dogs and cats. Get breed-specific recommendations and personalized activity plans based on age and activity level.',
  keywords: ['pet exercise calculator', 'dog exercise calculator', 'cat exercise calculator', 'pet exercise needs', 'daily exercise for pets', 'pet activity calculator', 'exercise recommendations', 'pet fitness'],
  slug: 'exercise-calculator',
  category: 'Health & Wellness',
  features: [
    'Calculate daily exercise needs',
    'Breed-specific recommendations',
    'Age-appropriate exercise plans',
    'Activity type suggestions',
    'Weekly exercise totals',
  ],
  faqs: [
    {
      question: 'How much exercise does my pet need?',
      answer: 'Exercise needs vary by breed, age, and activity level. Most adult dogs need 30-60 minutes of exercise per day, while cats typically need 15-30 minutes of interactive play. High-energy breeds need more exercise, while low-energy breeds need less. Puppies and kittens need shorter, more frequent sessions.',
    },
    {
      question: 'What types of exercise are best for my pet?',
      answer: 'Dogs benefit from walking, running, fetch, and agility training. Cats benefit from interactive play with toys that mimic hunting behaviors. The best exercise type depends on your pet\'s breed, age, and energy level. Always consider your pet\'s physical limitations and health conditions.',
    },
    {
      question: 'How do I know if my pet is getting enough exercise?',
      answer: 'Signs of adequate exercise include: your pet is calm and relaxed at home, maintains a healthy weight, sleeps well, and doesn\'t display destructive behaviors. If your pet is restless, gaining weight, or showing behavioral issues, they may need more exercise.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function ExerciseCalculatorPage() {
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
      <ExerciseCalculatorClient />
    </>
  );
}
