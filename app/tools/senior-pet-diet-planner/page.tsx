import type { Metadata } from 'next';
import SeniorPetDietPlannerClient from './SeniorPetDietPlannerClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Senior Pet Diet Planner',
  description: 'Create a personalized diet plan for your senior pet based on age, weight, and health conditions. Get calorie recommendations, dietary needs, and foods to avoid.',
  keywords: ['senior pet diet', 'senior dog diet', 'senior cat diet', 'elderly pet nutrition', 'senior pet food', 'aging pet diet', 'senior pet nutrition', 'elderly pet feeding'],
  slug: 'senior-pet-diet-planner',
  category: 'Nutrition',
  features: [
    'Personalized diet planning',
    'Health condition considerations',
    'Calorie calculation',
    'Dietary needs analysis',
    'Food recommendations',
  ],
  faqs: [
    {
      question: 'What should I feed my senior pet?',
      answer: 'Senior pets typically need: high-quality, easily digestible protein; moderate fat (10-15% for dogs, 9-15% for cats); fiber for digestive health; and antioxidants (vitamins E, C). Calorie needs are usually reduced (about 20% less than adult maintenance) due to slower metabolism. Senior-specific commercial diets are formulated for aging pets and may include joint-supporting nutrients and cognitive health supplements.',
    },
    {
      question: 'How do health conditions affect a senior pet\'s diet?',
      answer: 'Health conditions significantly affect dietary needs. For example: kidney disease requires lower protein and phosphorus; heart disease needs low sodium; diabetes requires high fiber and consistent meal timing; arthritis benefits from omega-3 fatty acids and weight management; dental problems may require soft or wet food. Always consult your veterinarian for condition-specific dietary recommendations.',
    },
    {
      question: 'How much should I feed my senior pet?',
      answer: 'Senior pets typically need 20% fewer calories than adult maintenance due to reduced activity and slower metabolism. Feed 2-3 smaller meals per day for better digestion. Monitor weight monthly and adjust portions as needed. Always consult your veterinarian for personalized feeding recommendations based on your pet\'s specific needs, health conditions, and activity level.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function SeniorPetDietPlannerPage() {
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
      <SeniorPetDietPlannerClient />
    </>
  );
}
