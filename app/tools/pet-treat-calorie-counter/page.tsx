import type { Metadata } from 'next';
import PetTreatCalorieCounterClient from './PetTreatCalorieCounterClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Pet Treat Calorie Counter | Dog & Cat Treat Allowance Calculator',
  description: 'Free pet treat calorie counter tracks treat calories and ensures they stay within 10% of daily intake. Calculate treat allowances and get recommendations for healthy treat consumption.',
  keywords: ['pet treat calories', 'treat calorie counter', 'dog treat calories', 'cat treat calories', 'treat allowance calculator', 'pet treat calculator', 'treat calorie tracker', 'pet nutrition treats'],
  slug: 'pet-treat-calorie-counter',
  category: 'Nutrition',
  features: [
    'Treat calorie tracking',
    '10% rule calculator',
    'Multiple treat support',
    'Daily calorie calculations',
    'Warning system',
  ],
  faqs: [
    {
      question: 'How many calories should treats be for my pet?',
      answer: 'Treats should make up no more than 10% of your pet\'s total daily calorie intake. For example, if your pet needs 800 calories per day, treats should be limited to 80 calories or less. This ensures your pet gets proper nutrition from their regular food while still enjoying treats.',
    },
    {
      question: 'What happens if I give my pet too many treats?',
      answer: 'Too many treats can lead to weight gain, nutritional imbalances, and health issues. Treats are often high in calories and may not provide complete nutrition. If treats exceed 10-15% of daily calories, your pet may not get enough essential nutrients from their regular food.',
    },
    {
      question: 'What are good low-calorie treats for pets?',
      answer: 'Good low-calorie treats for dogs include carrots, green beans, apple slices (no seeds), and small pieces of plain cooked chicken. For cats, good options include small pieces of cooked chicken, freeze-dried meat, or commercial low-calorie cat treats. Always check calorie content and use treats in moderation.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function PetTreatCalorieCounterPage() {
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
      <PetTreatCalorieCounterClient />
    </>
  );
}
