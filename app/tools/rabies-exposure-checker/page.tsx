import type { Metadata } from 'next';
import RabiesExposureCheckerClient from './RabiesExposureCheckerClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Rabies Exposure Checker | Pet Rabies Risk Assessment & Action Guide',
  description: 'Free rabies exposure checker provides guidance if your pet may have been exposed to rabies. Assess risk level and get immediate action steps. Always consult a veterinarian immediately.',
  keywords: ['rabies exposure', 'rabies risk', 'pet rabies', 'rabies exposure assessment', 'rabies prevention', 'rabies symptoms', 'rabies vaccination', 'rabies exposure guidance'],
  slug: 'rabies-exposure-checker',
  category: 'Health & Wellness',
  features: [
    'Risk level assessment',
    'Immediate action guidance',
    'Vaccination status evaluation',
    'Emergency protocols',
    'Veterinary guidance',
  ],
  faqs: [
    {
      question: 'What should I do if my pet has been exposed to rabies?',
      answer: 'If your pet has been bitten or scratched by a wild animal or unvaccinated animal, contact your veterinarian and local health department immediately (within 24 hours). If your pet is not vaccinated or vaccination is overdue, this is URGENT. Your pet may need immediate rabies booster and quarantine. Always follow your veterinarian\'s and health department\'s instructions exactly.',
    },
    {
      question: 'Is my pet at risk if they are vaccinated against rabies?',
      answer: 'Vaccinated pets have significantly lower risk, but they may still need a rabies booster vaccination after exposure. Contact your veterinarian immediately if your vaccinated pet has been exposed. Quarantine may be required depending on local regulations. Monitor your pet closely for any signs of illness.',
    },
    {
      question: 'How urgent is rabies exposure?',
      answer: 'Rabies exposure is extremely urgent. Rabies is fatal once symptoms appear, and there is no cure. Time is critical - contact your veterinarian and local health department immediately. If your pet is not vaccinated or vaccination is overdue, this is an emergency situation requiring immediate action.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function RabiesExposureCheckerPage() {
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
      <RabiesExposureCheckerClient />
    </>
  );
}
