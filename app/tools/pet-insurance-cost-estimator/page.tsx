import type { Metadata } from 'next';
import PetInsuranceCostEstimatorClient from './PetInsuranceCostEstimatorClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Pet Insurance Cost Estimator | Dog & Cat Insurance Cost Calculator',
  description: 'Free pet insurance cost estimator calculates monthly premiums based on pet age, size, location, and coverage type. Compare cost factors and get plan recommendations.',
  keywords: ['pet insurance cost', 'pet insurance calculator', 'dog insurance cost', 'cat insurance cost', 'pet insurance estimate', 'pet insurance pricing', 'pet insurance comparison', 'pet insurance quotes'],
  slug: 'pet-insurance-cost-estimator',
  category: 'Planning',
  features: [
    'Cost estimation calculator',
    'Multiple factor analysis',
    'Coverage type comparison',
    'Cost factor breakdown',
    'Insurance recommendations',
  ],
  faqs: [
    {
      question: 'How much does pet insurance cost?',
      answer: 'Pet insurance costs vary significantly based on several factors. Dogs typically cost $30-60 per month, while cats cost $20-40 per month. Factors that affect cost include: pet type (dogs cost more), age (senior pets cost significantly more), size (large/giant breeds cost more), location (urban areas cost more), and coverage type (comprehensive costs more than accident-only). Get quotes from multiple providers for accurate pricing.',
    },
    {
      question: 'What factors affect pet insurance costs?',
      answer: 'Key factors affecting pet insurance costs include: 1) Pet type - dogs typically cost more than cats; 2) Age - senior pets (7+ years) cost significantly more; 3) Size - large and giant dog breeds cost more; 4) Location - urban areas typically have higher costs; 5) Coverage type - comprehensive coverage costs more than accident-only; 6) Breed - some breeds have higher premiums due to predispositions; 7) Health history - pre-existing conditions may affect costs.',
    },
    {
      question: 'What should I consider when choosing pet insurance?',
      answer: 'When choosing pet insurance, consider: 1) Compare multiple providers to find the best rates; 2) Review deductible and reimbursement percentage options; 3) Check for breed-specific exclusions; 4) Understand waiting periods for coverage; 5) Consider your pet\'s health history and breed predispositions; 6) Evaluate coverage limits (annual or lifetime); 7) Read reviews and understand the claims process. Get quotes from multiple providers for accurate pricing.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function PetInsuranceCostEstimatorPage() {
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
      <PetInsuranceCostEstimatorClient />
    </>
  );
}
