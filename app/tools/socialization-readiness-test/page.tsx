import type { Metadata } from 'next';
import SocializationReadinessTestClient from './SocializationReadinessTestClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Socialization Readiness Test',
  description: 'Assess if your pet is ready for socialization activities. Get recommendations based on age, health, vaccinations, and current behavior. Learn about safe socialization practices.',
  keywords: ['pet socialization', 'puppy socialization', 'kitten socialization', 'socialization readiness', 'socialization test', 'pet socialization guide', 'socialization age', 'socialization activities'],
  slug: 'socialization-readiness-test',
  category: 'Training & Behavior',
  features: [
    'Readiness assessment',
    'Age considerations',
    'Health and vaccination checks',
    'Activity recommendations',
    'Safety guidance',
  ],
  faqs: [
    {
      question: 'When should I start socializing my pet?',
      answer: 'The critical socialization period is 8-16 weeks for puppies and 2-7 weeks for kittens. However, socialization should continue throughout your pet\'s life. Start as soon as your pet is fully vaccinated and healthy. Early, positive socialization experiences are crucial for preventing fear and aggression later in life.',
    },
    {
      question: 'What is the critical socialization period?',
      answer: 'The critical socialization period is a window when pets are most receptive to new experiences. For puppies, this is 8-16 weeks of age. For kittens, it\'s 2-7 weeks. During this time, positive experiences with people, animals, sounds, and environments help shape a confident, well-adjusted pet. Missing this window can make socialization more difficult later.',
    },
    {
      question: 'How do I socialize my pet safely?',
      answer: 'Socialize safely by: ensuring your pet is fully vaccinated before meeting other animals, starting with controlled, low-stress situations, using positive reinforcement (treats, praise), gradually increasing exposure, watching for signs of stress and stopping if needed, introducing to calm, vaccinated pets first, and avoiding overwhelming situations. Always prioritize your pet\'s safety and comfort.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function SocializationReadinessTestPage() {
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
      <SocializationReadinessTestClient />
    </>
  );
}

