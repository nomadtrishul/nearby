import type { Metadata } from 'next';
import SkinAllergyCheckerClient from './SkinAllergyCheckerClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Skin Allergy Checker | Dog & Cat Skin Allergy Symptom Guide',
  description: 'Free skin allergy checker helps identify potential food, environmental, flea, or contact allergies in dogs and cats. Review symptoms and get management recommendations.',
  keywords: ['pet skin allergies', 'dog allergies', 'cat allergies', 'skin allergy symptoms', 'pet allergy checker', 'food allergies pets', 'environmental allergies pets', 'flea allergy dermatitis'],
  slug: 'skin-allergy-checker',
  category: 'Health & Wellness',
  features: [
    'Symptom-based allergy identification',
    'Multiple allergy type detection',
    'Management recommendations',
    'Trigger identification',
    'Veterinary guidance',
  ],
  faqs: [
    {
      question: 'What are the most common types of skin allergies in pets?',
      answer: 'The most common types of skin allergies in pets are: 1) Food allergies - reactions to specific ingredients like chicken, beef, dairy, or wheat; 2) Environmental allergies (atopy) - reactions to pollen, dust mites, mold, grass, or trees; 3) Flea allergy dermatitis - severe reaction to flea saliva; 4) Contact allergies - reactions to substances that touch the skin like shampoos, cleaning products, or fabrics.',
    },
    {
      question: 'How do I know if my pet has a skin allergy?',
      answer: 'Common symptoms of skin allergies include excessive scratching, licking paws, chewing on skin, red or inflamed skin, hair loss, hot spots, ear infections, skin infections, rash, bumps or hives, dry or flaky skin, odor, or discharge from skin. If your pet shows these symptoms, consult your veterinarian for proper diagnosis through testing.',
    },
    {
      question: 'How are skin allergies treated in pets?',
      answer: 'Treatment depends on the type of allergy. Food allergies may require an elimination diet trial (8-12 weeks) with a novel protein or hydrolyzed protein diet. Environmental allergies may require allergy testing, avoidance of triggers, antihistamines, or immunotherapy (allergy shots). Flea allergies require strict year-round flea control. All treatments should be supervised by a veterinarian.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function SkinAllergyCheckerPage() {
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
      <SkinAllergyCheckerClient />
    </>
  );
}
