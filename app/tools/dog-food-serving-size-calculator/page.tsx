import type { Metadata } from 'next';
import DogFoodServingSizeCalculatorClient from './DogFoodServingSizeCalculatorClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Dog Food Serving Size Calculator | Daily Portion Size Calculator',
  description: 'Free dog food serving size calculator determines perfect portions based on weight, age, and activity level. Get RER and DER calculations and personalized feeding recommendations.',
  keywords: ['dog food serving size', 'dog food calculator', 'dog portion calculator', 'dog feeding calculator', 'dog food portions', 'dog serving size', 'dog feeding guide', 'dog nutrition calculator'],
  slug: 'dog-food-serving-size-calculator',
  category: 'Nutrition',
  features: [
    'Calculate daily serving sizes',
    'RER and DER calculations',
    'Age-specific recommendations',
    'Activity level adjustments',
    'Meal planning guidance',
  ],
  faqs: [
    {
      question: 'How much food should I feed my dog?',
      answer: 'The amount of food depends on your dog\'s weight, age, activity level, and the calorie content of the food. Use our calculator to determine the appropriate serving size based on RER (Resting Energy Requirement) and DER (Daily Energy Requirement) calculations. Puppies need more calories for growth, while senior dogs may need fewer calories.',
    },
    {
      question: 'How many times a day should I feed my dog?',
      answer: 'Most adult dogs do well with 2 meals per day. Puppies typically need 3-4 smaller meals per day. Senior dogs may benefit from 2-3 smaller meals. Divide the daily serving size evenly across meals.',
    },
    {
      question: 'How do I know if I\'m feeding my dog the right amount?',
      answer: 'Monitor your dog\'s body condition score (BCS). You should be able to feel but not see their ribs. If your dog is gaining weight, reduce portions by 10-20%. If losing weight, increase portions. Always consult with your veterinarian for personalized recommendations.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function DogFoodServingSizeCalculatorPage() {
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
      <DogFoodServingSizeCalculatorClient />
    </>
  );
}
