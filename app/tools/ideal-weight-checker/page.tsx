import type { Metadata } from 'next';
import IdealWeightCheckerClient from './IdealWeightCheckerClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Ideal Weight Checker',
  description: 'Check if your pet is at their ideal weight based on breed, current weight, and body condition score. Get personalized recommendations for weight management.',
  keywords: ['pet ideal weight', 'dog ideal weight', 'cat ideal weight', 'pet weight check', 'ideal weight calculator', 'pet weight management', 'body condition score', 'pet weight assessment'],
  slug: 'ideal-weight-checker',
  category: 'Health & Wellness',
  features: [
    'Breed-specific ideal weights',
    'Body condition score integration',
    'Weight difference calculation',
    'Personalized recommendations',
    'Weight management guidance',
  ],
  faqs: [
    {
      question: 'How do I know if my pet is at their ideal weight?',
      answer: 'You can determine if your pet is at their ideal weight by: 1) Checking breed-specific ideal weight ranges; 2) Using body condition scoring (BCS) - you should be able to feel ribs with light pressure, see a waist when viewed from above, and see an abdominal tuck when viewed from the side; 3) Consulting your veterinarian for a professional assessment. Ideal weight varies by breed, age, and individual body structure.',
    },
    {
      question: 'What is body condition score (BCS)?',
      answer: 'Body condition score (BCS) is a standardized way to assess a pet\'s body fat. It typically uses a 1-9 scale where: 1-3 = underweight (ribs, spine, and hip bones easily visible), 4-5 = ideal weight (ribs easily felt, visible waist, abdominal tuck), 6-7 = overweight (ribs difficult to feel, no waist, rounded abdomen), 8-9 = obese (ribs not felt, no waist, prominent fat deposits). Your veterinarian can help you assess your pet\'s BCS.',
    },
    {
      question: 'How can I help my pet reach their ideal weight?',
      answer: 'To help your pet reach their ideal weight: 1) Consult your veterinarian for a weight management plan; 2) Measure food portions accurately and avoid free-feeding; 3) Reduce treats and table scraps; 4) Increase exercise gradually (appropriate for your pet\'s age and health); 5) Consider weight management pet food; 6) Monitor progress monthly; 7) Be patient - healthy weight loss is gradual (1-2% body weight per week). Never put your pet on a crash diet without veterinary supervision.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function IdealWeightCheckerPage() {
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
      <IdealWeightCheckerClient />
    </>
  );
}
