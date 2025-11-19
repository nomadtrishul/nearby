import type { Metadata } from 'next';
import ToxicFoodsCheckerClient from './ToxicFoodsCheckerClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Toxic Foods Checker | Dog & Cat Poisonous Foods Guide',
  description: 'Free toxic foods checker identifies dangerous foods for dogs and cats. Learn about symptoms, severity, and emergency actions. Keep your pet safe from poisonous foods.',
  keywords: ['toxic foods for pets', 'toxic foods for dogs', 'toxic foods for cats', 'pet poison foods', 'dangerous foods for pets', 'foods toxic to dogs', 'foods toxic to cats', 'pet food safety'],
  slug: 'toxic-foods-checker',
  category: 'Health & Wellness',
  features: [
    'Toxic food database for dogs and cats',
    'Severity ratings',
    'Symptom information',
    'Emergency action guidance',
    'Search functionality',
  ],
  faqs: [
    {
      question: 'What foods are toxic to dogs?',
      answer: 'Common toxic foods for dogs include chocolate, grapes and raisins, onions and garlic, xylitol (found in sugar-free products), alcohol, caffeine, macadamia nuts, cooked bones, and many others. Even small amounts of some foods can be dangerous. When in doubt, consult your veterinarian before feeding any human food to your dog.',
    },
    {
      question: 'What foods are toxic to cats?',
      answer: 'Toxic foods for cats include chocolate, grapes and raisins, onions and garlic, xylitol, alcohol, caffeine, raw fish (can cause thiamine deficiency), raw eggs, bones, and excessive tuna. Cats are also more sensitive to certain toxins than dogs. Always consult your veterinarian before feeding human food to your cat.',
    },
    {
      question: 'What should I do if my pet ate something toxic?',
      answer: 'If your pet has ingested a toxic food, seek immediate veterinary care. Do not wait for symptoms to appear. Contact your veterinarian or animal poison control center (ASPCA Animal Poison Control: 888-426-4435) immediately. Do not induce vomiting unless specifically instructed by a veterinarian, as this can sometimes make the situation worse.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function ToxicFoodsCheckerPage() {
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
      <ToxicFoodsCheckerClient />
    </>
  );
}
