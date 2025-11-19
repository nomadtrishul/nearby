import type { Metadata } from 'next';
import FeedingCostCalculatorClient from './FeedingCostCalculatorClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Feeding Cost Calculator',
  description: 'Calculate the cost of feeding your pet based on food type, price, and daily feeding amounts. Get daily, monthly, and yearly cost estimates for pet food.',
  keywords: ['pet food cost', 'feeding cost calculator', 'pet food expenses', 'dog food cost', 'cat food cost', 'pet feeding budget', 'food cost calculator', 'pet food price calculator'],
  slug: 'feeding-cost-calculator',
  category: 'Planning',
  features: [
    'Cost calculation',
    'Daily, monthly, yearly estimates',
    'Food type comparison',
    'Budget planning',
    'Cost breakdown',
  ],
  faqs: [
    {
      question: 'How much does it cost to feed a pet?',
      answer: 'The cost of feeding a pet varies significantly based on: pet size (larger pets eat more), food quality (premium foods cost more), food type (dry vs wet vs raw), and location. Small dogs may cost $20-40/month, medium dogs $40-80/month, large dogs $60-120/month. Cats typically cost $20-50/month. Premium or prescription diets can cost significantly more. Use our calculator to estimate costs based on your specific pet and food choices.',
    },
    {
      question: 'Is it cheaper to feed dry or wet food?',
      answer: 'Dry food is typically cheaper per calorie than wet food. However, wet food may be more palatable and provide more moisture, which can be beneficial for some pets. The cost difference depends on the specific brands and formulations. Some pets may need a combination of both. Consider your pet\'s preferences, health needs, and your budget when choosing. Premium dry foods may cost more than basic wet foods, so compare costs per calorie or per serving rather than just per package.',
    },
    {
      question: 'How can I reduce pet food costs?',
      answer: 'To reduce pet food costs: 1) Buy in bulk (larger bags often cost less per pound); 2) Look for sales and coupons; 3) Consider store brands or mid-range options (ensure they meet nutritional standards); 4) Avoid overfeeding (measure portions accurately); 5) Limit treats and table scraps; 6) Compare costs per calorie rather than per package. However, don\'t compromise on nutrition - choose foods that meet AAFCO standards and are appropriate for your pet\'s life stage and health needs.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function FeedingCostCalculatorPage() {
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
      <FeedingCostCalculatorClient />
    </>
  );
}
