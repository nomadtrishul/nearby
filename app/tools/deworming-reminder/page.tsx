import type { Metadata } from 'next';
import DewormingReminderClient from './DewormingReminderClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Deworming Reminder Tool | Dog & Cat Deworming Schedule Calculator',
  description: 'Free deworming reminder tool calculates when your pet\'s next deworming is due. Get reminders for puppies, kittens, and adult pets based on age and risk factors.',
  keywords: ['deworming reminder', 'pet deworming schedule', 'puppy deworming', 'kitten deworming', 'deworming calculator', 'parasite prevention', 'pet deworming schedule', 'worm prevention'],
  slug: 'deworming-reminder',
  category: 'Health & Wellness',
  features: [
    'Deworming date calculator',
    'Age-based schedules',
    'Reminder system',
    'Recommended frequencies',
    'Veterinary guidance',
  ],
  faqs: [
    {
      question: 'How often should I deworm my pet?',
      answer: 'Deworming frequency depends on your pet\'s age. Puppies and kittens need deworming every 2 weeks from 2-12 weeks of age, then monthly until 6 months. Adult pets typically need deworming every 3 months, though high-risk pets (those that hunt, have contact with other animals, or live in high-risk areas) may need monthly deworming. Always follow your veterinarian\'s recommendations.',
    },
    {
      question: 'When should I start deworming my puppy or kitten?',
      answer: 'Puppies and kittens should start deworming at 2 weeks of age, then continue every 2 weeks until 12 weeks. After that, monthly deworming is recommended until 6 months of age. This frequent schedule is necessary because young animals are more susceptible to parasites and can be born with or acquire worms from their mother.',
    },
    {
      question: 'Do adult pets need regular deworming?',
      answer: 'Yes, adult pets should be dewormed regularly, typically every 3 months. However, pets that hunt, have contact with other animals, or live in areas with high parasite risk may need monthly deworming. Annual fecal exams are also recommended to check for parasites. Your veterinarian can provide personalized recommendations based on your pet\'s lifestyle and risk factors.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function DewormingReminderPage() {
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
      <DewormingReminderClient />
    </>
  );
}
