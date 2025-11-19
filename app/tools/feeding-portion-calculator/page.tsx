import type { Metadata } from 'next';
import FeedingPortionCalculatorClient from './FeedingPortionCalculatorClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Pet Feeding Portion Calculator | Dog & Cat Food Portion Size Calculator',
  description: 'Free pet feeding portion calculator determines the right amount of food for dogs and cats. Calculate daily portions based on weight, age, and activity level.',
  keywords: ['pet feeding calculator', 'dog food portion calculator', 'cat food portion calculator', 'pet portion size', 'feeding calculator', 'pet meal planner', 'pet calorie calculator', 'pet feeding schedule'],
  slug: 'feeding-portion-calculator',
  category: 'Nutrition',
  features: [
    'Calculate daily portion sizes based on weight and age',
    'Meal planning with multiple meals per day',
    'Treat allowance calculator (10% of daily calories)',
    'Support for dry and wet food',
    'Activity level adjustments',
    'Spayed/neutered adjustments',
  ],
  faqs: [
    {
      question: 'How do I calculate the right portion size for my pet?',
      answer: 'Use our feeding portion calculator by entering your pet\'s weight, age, activity level, and food type. The calculator uses standard veterinary formulas (RER and DER) to determine daily calorie needs, then calculates the appropriate portion size based on your food\'s calorie content.',
    },
    {
      question: 'How many meals per day should I feed my pet?',
      answer: 'Most adult pets do well with 2 meals per day. Puppies and kittens typically need 3-4 meals per day. The calculator allows you to divide the daily portion across multiple meals and provides a meal breakdown.',
    },
    {
      question: 'How much should I feed my puppy or kitten?',
      answer: 'Puppies and kittens need more calories per pound than adults due to growth. Puppies typically need 3x their resting energy requirement, while kittens need 2.5x. Feed 3-4 smaller meals per day and use puppy/kitten-specific food formulas.',
    },
    {
      question: 'How many treats can I give my pet?',
      answer: 'Treats should make up no more than 10% of your pet\'s total daily calories. The calculator automatically calculates treat allowance and subtracts treat calories from food portions to maintain proper nutrition.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function FeedingPortionCalculatorPage() {
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
      <FeedingPortionCalculatorClient />
    </>
  );
}
