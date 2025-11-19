import type { Metadata } from 'next';
import VaccinationScheduleGeneratorClient from './VaccinationScheduleGeneratorClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Vaccination Schedule Generator',
  description: 'Generate a complete vaccination schedule for your pet from birth to adulthood. Get personalized vaccine recommendations for dogs and cats based on age and lifestyle.',
  keywords: ['pet vaccination schedule', 'puppy vaccination schedule', 'kitten vaccination schedule', 'dog vaccines', 'cat vaccines', 'pet vaccine schedule', 'vaccination timeline', 'pet immunization schedule'],
  slug: 'vaccination-schedule-generator',
  category: 'Health & Wellness',
  features: [
    'Complete vaccination timeline',
    'Puppy and kitten schedules',
    'Lifestyle-based recommendations',
    'Adult booster schedules',
    'Vaccine information',
  ],
  faqs: [
    {
      question: 'When should my puppy or kitten get their first vaccines?',
      answer: 'Puppies and kittens typically receive their first vaccines at 6-8 weeks of age. This includes core vaccines like DHPP for dogs and FVRCP for cats. They\'ll need booster shots at 10-12 weeks and 14-16 weeks to build full immunity. Rabies vaccines are usually given at 14-16 weeks.',
    },
    {
      question: 'How often do adult pets need vaccines?',
      answer: 'Adult pets need annual boosters for most core vaccines, though some vaccines (like rabies) may be given every 1-3 years depending on local regulations and vaccine type. Your veterinarian will create a personalized schedule based on your pet\'s health, lifestyle, and local requirements.',
    },
    {
      question: 'Are all vaccines necessary for my pet?',
      answer: 'Core vaccines (like DHPP for dogs and FVRCP for cats) are essential for all pets. Non-core vaccines (like Lyme disease or FeLV) depend on your pet\'s lifestyle, location, and risk factors. Your veterinarian can help determine which vaccines are necessary based on your pet\'s specific situation.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function VaccinationScheduleGeneratorPage() {
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
      <VaccinationScheduleGeneratorClient />
    </>
  );
}
