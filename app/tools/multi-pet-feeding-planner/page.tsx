import type { Metadata } from 'next';
import MultiPetFeedingPlannerClient from './MultiPetFeedingPlannerClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Multi-Pet Feeding Planner',
  description: 'Plan feeding schedules for multiple pets in your household. Get personalized feeding plans for each pet based on their individual needs, weight, age, and activity level.',
  keywords: ['multi-pet feeding', 'multiple pets feeding', 'pet feeding schedule', 'household pet feeding', 'feeding multiple pets', 'pet meal planning', 'multi-pet nutrition', 'feeding planner'],
  slug: 'multi-pet-feeding-planner',
  category: 'Nutrition',
  features: [
    'Multiple pet management',
    'Individual feeding plans',
    'Personalized calculations',
    'Schedule coordination',
    'Pet-specific recommendations',
  ],
  faqs: [
    {
      question: 'How do I feed multiple pets with different needs?',
      answer: 'To feed multiple pets with different needs: 1) Feed each pet separately in different locations to prevent food stealing; 2) Use different foods if needed (e.g., puppy food vs senior food, prescription diets); 3) Monitor each pet\'s food intake to ensure they\'re eating their own food; 4) Feed at the same times but in separate areas; 5) Consider using microchip-activated feeders for automatic separation; 6) Monitor each pet\'s weight and body condition separately. Each pet should have a feeding plan tailored to their individual needs.',
    },
    {
      question: 'Should all my pets eat the same food?',
      answer: 'Not necessarily. Pets may need different foods based on: age (puppies/kittens vs adults vs seniors), health conditions (prescription diets), activity level, weight management needs, and food allergies. While it\'s convenient to feed the same food, it\'s more important that each pet receives nutrition appropriate for their individual needs. Consult your veterinarian to determine if your pets can share food or need different diets.',
    },
    {
      question: 'How do I prevent one pet from eating another pet\'s food?',
      answer: 'To prevent food stealing: 1) Feed pets in separate rooms or areas; 2) Use physical barriers (baby gates, closed doors); 3) Supervise meal times; 4) Use microchip-activated feeders that only open for the specific pet; 5) Feed at the same time so pets are occupied with their own meals; 6) Remove food bowls after meals; 7) Train pets to stay in their designated feeding areas. This is especially important when one pet needs a prescription diet or weight management food.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function MultiPetFeedingPlannerPage() {
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
      <MultiPetFeedingPlannerClient />
    </>
  );
}
