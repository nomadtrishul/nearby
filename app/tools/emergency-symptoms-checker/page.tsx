import type { Metadata } from 'next';
import EmergencySymptomsCheckerClient from './EmergencySymptomsCheckerClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Emergency Symptoms Checker | Pet Emergency Signs & Action Guide',
  description: 'Free emergency symptoms checker highlights critical, urgent, and moderate signs in dogs and cats with immediate action steps and emergency guidance.',
  keywords: ['pet emergency symptoms', 'dog emergency', 'cat emergency', 'veterinary emergency', 'pet emergency signs', 'when to take pet to vet', 'pet emergency symptoms', 'critical pet symptoms'],
  slug: 'emergency-symptoms-checker',
  category: 'Health & Wellness',
  features: [
    'Emergency symptom identification',
    'Critical, urgent, and moderate level classification',
    'Immediate action guidance',
    'Pet type-specific symptoms',
    'Emergency contact information',
  ],
  faqs: [
    {
      question: 'What are critical emergency symptoms in pets?',
      answer: 'Critical emergency symptoms that require immediate veterinary care include: difficulty breathing, collapse/unconsciousness, seizures, bloated/hard abdomen (dogs), straining to urinate (cats), pale gums, and inability to urinate. These are life-threatening and require immediate veterinary attention. Do not delay - time is critical.',
    },
    {
      question: 'When should I take my pet to the emergency vet?',
      answer: 'Take your pet to the emergency vet immediately if they show critical symptoms like difficulty breathing, collapse, seizures, bloated abdomen, pale gums, or inability to urinate. Also seek immediate care for urgent symptoms like vomiting blood, bloody diarrhea, ingested toxic substances, trauma/injury, extreme pain, or high fever (over 104°F). When in doubt, contact your veterinarian or emergency clinic.',
    },
    {
      question: 'What should I do in a pet emergency?',
      answer: 'In a pet emergency: 1) Stay calm and assess the situation; 2) Call your veterinarian or emergency clinic immediately; 3) If after hours, go to the nearest emergency veterinary clinic; 4) Keep your pet calm and safe during transport; 5) Do not give human medications unless specifically instructed by a veterinarian; 6) Have emergency contact information readily available, including ASPCA Animal Poison Control: (888) 426-4435.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function EmergencySymptomsCheckerPage() {
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
      <EmergencySymptomsCheckerClient />
    </>
  );
}
