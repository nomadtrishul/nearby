import type { Metadata } from 'next';
import WeightCalculatorClient from './WeightCalculatorClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Pet Weight Calculator | Dog & Cat Ideal Weight & BMI Calculator',
  description: 'Free pet weight calculator determines ideal weight range, body condition score, and BMI for dogs and cats. Get breed-specific recommendations.',
  keywords: ['pet weight calculator', 'dog weight calculator', 'cat weight calculator', 'ideal pet weight', 'body condition score', 'pet BMI calculator', 'pet weight management', 'healthy pet weight'],
  slug: 'weight-calculator',
  category: 'Health & Wellness',
  features: [
    'Calculate ideal weight range based on body condition score',
    'Breed-specific ideal weight recommendations',
    'BMI calculation for pets',
    'Weight difference analysis',
    'Personalized weight management recommendations',
  ],
  faqs: [
    {
      question: 'How do I calculate my pet\'s ideal weight?',
      answer: 'Use our pet weight calculator by entering your pet\'s current weight, body condition score (BCS), and optionally their breed. The calculator will determine the ideal weight range based on BCS and provide breed-specific recommendations if available.',
    },
    {
      question: 'What is a body condition score (BCS) for pets?',
      answer: 'Body Condition Score (BCS) is a 9-point scale used to assess a pet\'s body fat. A score of 5 is ideal, with 1-3 indicating underweight, 4-5 ideal, 6-7 overweight, and 8-9 obese. It helps determine if your pet needs to gain or lose weight.',
    },
    {
      question: 'How accurate is the pet weight calculator?',
      answer: 'The calculator provides estimates based on body condition scoring and breed averages. Individual pets may vary based on frame size, muscle mass, and health conditions. Always consult your veterinarian for accurate weight assessment and personalized recommendations.',
    },
    {
      question: 'What should I do if my pet is overweight?',
      answer: 'If your pet is overweight, consult your veterinarian for a safe weight loss plan. Gradual weight loss (1-2% per week) is recommended. This typically involves reducing portions by 10-20%, increasing exercise, and potentially switching to a weight management diet.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function WeightCalculatorPage() {
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
      <WeightCalculatorClient />
    </>
  );
}
