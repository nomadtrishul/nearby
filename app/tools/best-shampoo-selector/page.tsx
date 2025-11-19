import type { Metadata } from 'next';
import BestShampooSelectorClient from './BestShampooSelectorClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Best Shampoo Selector',
  description: 'Find the best shampoo for your pet based on coat type, skin condition, and age. Get personalized shampoo recommendations with ingredient guidance.',
  keywords: ['pet shampoo', 'dog shampoo', 'cat shampoo', 'best pet shampoo', 'shampoo selector', 'pet grooming shampoo', 'hypoallergenic shampoo', 'pet shampoo guide'],
  slug: 'best-shampoo-selector',
  category: 'Grooming & Hygiene',
  features: [
    'Personalized shampoo recommendations',
    'Skin condition considerations',
    'Coat type-specific suggestions',
    'Age-appropriate formulas',
    'Ingredient guidance',
  ],
  faqs: [
    {
      question: 'What shampoo should I use for my pet?',
      answer: 'The best shampoo depends on your pet\'s coat type, skin condition, and age. For normal skin and coat, use a general purpose, pH-balanced pet shampoo. For sensitive or dry skin, choose hypoallergenic or moisturizing shampoos with oatmeal or aloe vera. For oily coats, use clarifying shampoos. For itchy skin, consider medicated or soothing shampoos. Puppies and kittens need tear-free, extra-mild formulas. Always use pet-specific shampoos, never human shampoos.',
    },
    {
      question: 'Can I use human shampoo on my pet?',
      answer: 'No, you should never use human shampoo on pets. Human shampoos have different pH levels (around 5.5) compared to pet skin (around 6.2-7.4 for dogs, 6.0-6.5 for cats). Using human shampoo can disrupt the skin\'s natural pH balance, cause dryness, irritation, and make pets more susceptible to skin infections. Always use shampoos specifically formulated for pets.',
    },
    {
      question: 'How often should I bathe my pet?',
      answer: 'Bathing frequency depends on your pet\'s coat type and lifestyle. Most pets need bathing every 4-8 weeks. Short-coated pets may need bathing every 4-8 weeks, while long-coated pets may need bathing every 3-4 weeks. Outdoor pets or those with skin conditions may need more frequent bathing. Over-bathing can strip natural oils and cause dry skin, so avoid bathing too frequently unless recommended by your veterinarian.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function BestShampooSelectorPage() {
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
      <BestShampooSelectorClient />
    </>
  );
}

