import type { Metadata } from 'next';
import PetBMIBodyConditionScoreClient from './PetBMIBodyConditionScoreClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Pet BMI / Body Condition Score Calculator | 9-Point BCS Assessment Tool',
  description: 'Free pet BMI and body condition score calculator assesses your pet using the 9-point scale. Get BCS assessment, visual guides, and personalized weight management recommendations.',
  keywords: ['pet body condition score', 'pet BCS', 'pet BMI', 'body condition score calculator', 'pet weight assessment', 'pet body condition', 'pet weight score', 'pet health assessment'],
  slug: 'pet-bmi-body-condition-score',
  category: 'Health & Wellness',
  features: [
    '9-point body condition scale',
    'Visual assessment guide',
    'Personalized recommendations',
    'Weight management guidance',
    'Health risk assessment',
  ],
  faqs: [
    {
      question: 'What is a body condition score (BCS)?',
      answer: 'Body Condition Score (BCS) is a standardized 9-point scale used to assess a pet\'s body condition. A score of 1 indicates emaciated, 5 is ideal, and 9 is morbidly obese. It\'s assessed by feeling ribs, viewing the waist from above, and checking the abdominal tuck from the side. This is more accurate than weight alone as it accounts for body composition.',
    },
    {
      question: 'What is the ideal body condition score for my pet?',
      answer: 'The ideal body condition score is 4-5 on a 9-point scale. At this score, ribs can be easily felt but not seen, there\'s a visible waist when viewed from above, and an abdominal tuck when viewed from the side. This indicates your pet is at a healthy weight with appropriate body fat.',
    },
    {
      question: 'How often should I check my pet\'s body condition score?',
      answer: 'Check your pet\'s body condition score monthly, or more frequently if they\'re on a weight management program. Regular monitoring helps catch weight changes early. If your pet scores outside the ideal range (4-5), consult your veterinarian for a professional assessment and personalized weight management plan.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function PetBMIBodyConditionScorePage() {
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
      <PetBMIBodyConditionScoreClient />
    </>
  );
}
