import type { Metadata } from 'next';
import PetHydrationCalculatorClient from './PetHydrationCalculatorClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Pet Hydration Calculator | Dog & Cat Daily Water Needs Calculator',
  description: 'Free pet hydration calculator determines daily water needs for dogs and cats based on weight, activity level, and environment. Get hydration recommendations and dehydration signs.',
  keywords: ['pet hydration calculator', 'dog water needs', 'cat water needs', 'pet water calculator', 'pet hydration needs', 'daily water for pets', 'pet dehydration signs', 'pet water intake'],
  slug: 'pet-hydration-calculator',
  category: 'Health & Wellness',
  features: [
    'Daily water needs calculation',
    'Activity level adjustments',
    'Environment considerations',
    'Dehydration signs guide',
    'Hydration recommendations',
  ],
  faqs: [
    {
      question: 'How much water does my pet need per day?',
      answer: 'Water needs vary by weight, activity level, and environment. Generally, pets need 50-60ml of water per kg of body weight per day. Active pets, pets in hot weather, and pets eating dry food need more water. Use our calculator to get personalized recommendations.',
    },
    {
      question: 'How can I tell if my pet is dehydrated?',
      answer: 'Signs of dehydration include dry, sticky gums, loss of skin elasticity (skin doesn\'t snap back when gently pulled), sunken eyes, lethargy, decreased urination, dark yellow urine, excessive panting, and loss of appetite. If you notice these signs, contact your veterinarian immediately.',
    },
    {
      question: 'Do cats need less water than dogs?',
      answer: 'Cats typically need slightly less water per kg of body weight than dogs, and they often get some hydration from wet food (which contains ~75% water). However, cats are prone to urinary issues, so adequate hydration is crucial. Consider a water fountain to encourage drinking.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function PetHydrationCalculatorPage() {
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
      <PetHydrationCalculatorClient />
    </>
  );
}
