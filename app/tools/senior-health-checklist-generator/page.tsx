import type { Metadata } from 'next';
import SeniorHealthChecklistGeneratorClient from './SeniorHealthChecklistGeneratorClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Senior Health Checklist Generator',
  description: 'Generate a comprehensive health checklist for your senior pet. Get age-appropriate health monitoring items, veterinary care recommendations, and wellness guidelines.',
  keywords: ['senior pet health', 'elderly pet care', 'senior dog health', 'senior cat health', 'aging pet checklist', 'senior pet wellness', 'elderly pet monitoring', 'senior pet care'],
  slug: 'senior-health-checklist-generator',
  category: 'Health & Wellness',
  features: [
    'Age-appropriate health checklist',
    'Veterinary care recommendations',
    'Monitoring guidelines',
    'Wellness items',
    'Senior pet care guidance',
  ],
  faqs: [
    {
      question: 'What health issues should I monitor in senior pets?',
      answer: 'Monitor senior pets for: changes in appetite or water intake, weight changes, mobility issues (stiffness, limping, difficulty getting up), changes in behavior (confusion, disorientation, increased sleeping), dental problems, vision or hearing changes, lumps or bumps, changes in urination or defecation, coughing or breathing changes, and skin/coat changes. Senior pets should have veterinary checkups every 6 months (or more frequently if health issues are present) to catch problems early.',
    },
    {
      question: 'How often should senior pets see the veterinarian?',
      answer: 'Senior pets should see the veterinarian at least every 6 months for wellness exams, even if they appear healthy. More frequent visits (every 3-4 months) may be recommended if your pet has chronic health conditions. Regular checkups allow for early detection of age-related diseases, monitoring of existing conditions, and adjustments to medications or treatments. Blood work, urinalysis, and other diagnostic tests are often recommended annually or semi-annually for senior pets.',
    },
    {
      question: 'What special care do senior pets need?',
      answer: 'Senior pets need: 1) More frequent veterinary checkups (every 6 months); 2) Regular monitoring of weight, appetite, and behavior; 3) Appropriate exercise (adjusted for mobility); 4) Comfortable bedding and easy access to food/water; 5) Senior-appropriate diet; 6) Dental care; 7) Joint supplements if needed; 8) Environmental modifications (ramps, non-slip surfaces); 9) Mental stimulation; 10) Patience and understanding of age-related changes. Work with your veterinarian to develop a senior care plan tailored to your pet\'s needs.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function SeniorHealthChecklistGeneratorPage() {
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
      <SeniorHealthChecklistGeneratorClient />
    </>
  );
}
