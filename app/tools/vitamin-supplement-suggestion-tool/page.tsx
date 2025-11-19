import type { Metadata } from 'next';
import VitaminSupplementSuggestionToolClient from './VitaminSupplementSuggestionToolClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Vitamin Supplement Suggestion Tool',
  description: 'Get personalized vitamin and supplement suggestions for your pet based on age, diet type, and health conditions. Learn about benefits, dosages, and safety considerations.',
  keywords: ['pet vitamins', 'pet supplements', 'dog vitamins', 'cat vitamins', 'pet vitamin supplements', 'pet nutrition supplements', 'vitamin recommendations pets', 'pet supplement guide'],
  slug: 'vitamin-supplement-suggestion-tool',
  category: 'Nutrition',
  features: [
    'Personalized supplement suggestions',
    'Age and diet-based recommendations',
    'Condition-specific vitamins',
    'Dosage guidance',
    'Safety information',
  ],
  faqs: [
    {
      question: 'What vitamins and supplements do pets need?',
      answer: 'Pets on complete commercial diets typically don\'t need additional vitamins, as commercial diets are formulated to be nutritionally complete. However, pets on homemade or raw diets may need multivitamins. Specific supplements may be beneficial for: joint health (glucosamine, chondroitin, omega-3), skin/coat (omega-3, biotin), digestive health (probiotics), senior pets (antioxidants), and specific health conditions. Always consult your veterinarian before adding supplements, as some can be toxic in excess.',
    },
    {
      question: 'Can I give my pet human vitamins?',
      answer: 'No, you should not give human vitamins to pets. Human vitamins may contain ingredients toxic to pets, have incorrect dosages, or lack nutrients pets need (like taurine for cats). Always use pet-specific vitamins and supplements, and only give them under veterinary guidance. Some vitamins (like vitamin A and D) can be toxic in excess, so proper dosage is critical. Quality matters - choose reputable pet supplement brands.',
    },
    {
      question: 'When should I give my pet supplements?',
      answer: 'Give supplements when: 1) Recommended by your veterinarian for a specific condition; 2) Your pet is on a homemade or raw diet (may need multivitamins); 3) Your pet has a specific health need (e.g., joint supplements for arthritis, omega-3 for skin issues); 4) Your veterinarian identifies a deficiency. However, pets on complete commercial diets typically don\'t need additional vitamins unless recommended by a veterinarian. More is not always better - some vitamins can be toxic in excess.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function VitaminSupplementSuggestionToolPage() {
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
      <VitaminSupplementSuggestionToolClient />
    </>
  );
}
