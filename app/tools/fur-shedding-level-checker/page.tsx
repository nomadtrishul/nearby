import type { Metadata } from 'next';
import FurSheddingLevelCheckerClient from './FurSheddingLevelCheckerClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Fur Shedding Level Checker',
  description: 'Assess your pet\'s shedding level based on coat type, frequency, and amount. Get personalized management strategies and recommendations for controlling pet hair.',
  keywords: ['pet shedding', 'dog shedding', 'cat shedding', 'shedding level', 'shedding management', 'pet hair control', 'deshedding', 'shedding calculator'],
  slug: 'fur-shedding-level-checker',
  category: 'Grooming & Hygiene',
  features: [
    'Shedding level assessment',
    'Coat type analysis',
    'Management strategies',
    'Seasonal considerations',
    'Grooming recommendations',
  ],
  faqs: [
    {
      question: 'How much shedding is normal for pets?',
      answer: 'Normal shedding varies by breed and coat type. Low-shedding breeds (like Poodles, Bichons) shed minimally year-round. Moderate-shedding breeds shed regularly with seasonal increases. Heavy-shedding breeds (especially double-coated breeds like Huskies, Golden Retrievers) shed heavily, especially during spring and fall coat changes. Some shedding is always normal, but excessive or sudden changes may indicate health issues.',
    },
    {
      question: 'How can I reduce my pet\'s shedding?',
      answer: 'To reduce shedding: brush your pet regularly (daily for heavy shedders, 2-3 times per week for moderate shedders), use appropriate deshedding tools (undercoat rakes, Furminators), bathe regularly with deshedding shampoos, ensure a healthy diet with omega-3 fatty acids, keep your pet well-hydrated, and consider professional deshedding treatments. Regular grooming is the most effective way to manage shedding.',
    },
    {
      question: 'When should I be concerned about excessive shedding?',
      answer: 'Be concerned about shedding if you notice: sudden increase in shedding, bald patches or thinning areas, skin irritation or redness, excessive scratching, changes in coat texture, or if shedding is accompanied by other symptoms like lethargy or appetite changes. These may indicate health issues such as allergies, skin infections, parasites, nutritional deficiencies, or stress. Consult your veterinarian if you notice unusual shedding patterns.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function FurSheddingLevelCheckerPage() {
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
      <FurSheddingLevelCheckerClient />
    </>
  );
}

