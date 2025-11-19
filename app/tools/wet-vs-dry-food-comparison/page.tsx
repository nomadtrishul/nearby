import type { Metadata } from 'next';
import WetVsDryFoodComparisonClient from './WetVsDryFoodComparisonClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Wet vs Dry Food Comparison Tool | Dog & Cat Food Comparison Calculator',
  description: 'Free wet vs dry food comparison tool compares food options for dogs and cats based on cost, nutrition, and convenience. Get detailed comparisons to choose the best food type.',
  keywords: ['wet vs dry food', 'pet food comparison', 'dog food comparison', 'cat food comparison', 'wet food vs dry food', 'pet food cost comparison', 'best pet food type', 'pet nutrition comparison'],
  slug: 'wet-vs-dry-food-comparison',
  category: 'Nutrition',
  features: [
    'Cost comparison calculator',
    'Nutritional comparison',
    'Convenience analysis',
    'Suitability assessment',
    'Detailed feature comparison',
  ],
  faqs: [
    {
      question: 'Is wet food or dry food better for my pet?',
      answer: 'Both wet and dry food have advantages. Dry food is more cost-effective, convenient to store, and may help with dental health. Wet food provides better hydration, is more palatable for picky eaters, and can be better for weight management. Many pet owners use a combination of both. Consult your veterinarian to determine what\'s best for your pet\'s specific needs.',
    },
    {
      question: 'Is wet food more expensive than dry food?',
      answer: 'Generally, yes. Wet food typically costs more per calorie than dry food. However, costs vary significantly by brand and quality. Use our comparison tool to calculate the exact cost difference based on your pet\'s needs and the specific foods you\'re considering.',
    },
    {
      question: 'Can I feed my pet both wet and dry food?',
      answer: 'Yes, many pet owners successfully feed a combination of wet and dry food. This provides the benefits of both types. When combining, ensure the total daily calories don\'t exceed your pet\'s needs. A common approach is to feed dry food for main meals and wet food as a supplement or for picky eaters.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function WetVsDryFoodComparisonPage() {
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
      <WetVsDryFoodComparisonClient />
    </>
  );
}
