import type { Metadata } from 'next';
import ParasiteRiskAssessmentClient from './ParasiteRiskAssessmentClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Parasite Risk Assessment Tool | Dog & Cat Parasite Prevention Guide',
  description: 'Free parasite risk assessment tool evaluates your pet\'s risk for fleas, ticks, heartworm, and intestinal worms. Get personalized prevention recommendations based on lifestyle and location.',
  keywords: ['parasite risk assessment', 'pet parasite prevention', 'flea tick risk', 'heartworm risk', 'parasite prevention', 'pet parasite assessment', 'flea prevention', 'tick prevention'],
  slug: 'parasite-risk-assessment',
  category: 'Health & Wellness',
  features: [
    'Comprehensive risk assessment',
    'Parasite-specific risk analysis',
    'Lifestyle-based recommendations',
    'Prevention guidelines',
    'Risk scoring system',
  ],
  faqs: [
    {
      question: 'How do I know if my pet is at risk for parasites?',
      answer: 'Parasite risk depends on several factors including age (puppies/kittens are higher risk), lifestyle (outdoor pets have higher risk), geographic location (rural areas have higher tick risk), use of preventive medications, and contact with other pets. Use our assessment tool to evaluate your pet\'s specific risk level.',
    },
    {
      question: 'What parasites should I be concerned about?',
      answer: 'Common parasites include fleas, ticks, heartworm, and intestinal worms (roundworms, hookworms, whipworms). Cats may also be at risk for ear mites. The risk level varies based on your pet\'s lifestyle, location, and preventive care. Year-round prevention is recommended for most pets.',
    },
    {
      question: 'How often should I give my pet parasite prevention?',
      answer: 'Most parasite preventives are given monthly, year-round. This includes flea, tick, and heartworm prevention. Some products combine multiple preventives. Always follow your veterinarian\'s recommendations, as they can provide the best prevention plan based on your pet\'s specific risk factors and local parasite prevalence.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function ParasiteRiskAssessmentPage() {
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
      <ParasiteRiskAssessmentClient />
    </>
  );
}
