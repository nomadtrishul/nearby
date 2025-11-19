import type { Metadata } from 'next';
import WeightBasedFeedingChartMakerClient from './WeightBasedFeedingChartMakerClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Weight-Based Feeding Chart Maker',
  description: 'Generate a feeding chart based on weight ranges for easy reference. Get daily calorie needs, cup measurements, and gram measurements for different weight ranges.',
  keywords: ['pet feeding chart', 'dog feeding chart', 'cat feeding chart', 'weight-based feeding', 'pet feeding guide', 'feeding chart generator', 'pet food portions', 'feeding calculator'],
  slug: 'weight-based-feeding-chart-maker',
  category: 'Nutrition',
  features: [
    'Weight range-based charts',
    'Calorie calculations',
    'Cup and gram measurements',
    'Pet type-specific ranges',
    'Easy reference format',
  ],
  faqs: [
    {
      question: 'How do I use a weight-based feeding chart?',
      answer: 'A weight-based feeding chart shows recommended daily food amounts for different weight ranges. Find your pet\'s weight range in the chart, then use the corresponding daily calories, cups, or grams. Divide the daily amount into 2-3 meals. Remember that these are general guidelines - individual pets may need adjustments based on activity level, age, metabolism, and health status. Always consult your veterinarian for personalized recommendations.',
    },
    {
      question: 'How do I know how many calories are in my pet\'s food?',
      answer: 'Check the pet food label for the calorie content, usually listed as "kcal/cup" or "kcal/kg". This information is typically found in the guaranteed analysis section or nutritional information panel. If not listed, contact the manufacturer. The calorie content varies significantly between different foods, so it\'s important to use the correct value for accurate feeding calculations.',
    },
    {
      question: 'Should I adjust the feeding chart based on my pet\'s activity level?',
      answer: 'Yes, activity level significantly affects calorie needs. Active pets may need 20-40% more calories, while sedentary pets may need 10-20% less. Puppies and kittens need more calories for growth, while senior pets typically need fewer calories. Pregnant or nursing pets need significantly more calories. Always monitor your pet\'s weight and body condition, and adjust portions accordingly. Consult your veterinarian for personalized recommendations.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function WeightBasedFeedingChartMakerPage() {
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
      <WeightBasedFeedingChartMakerClient />
    </>
  );
}
