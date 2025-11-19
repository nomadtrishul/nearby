import type { Metadata } from 'next';
import CoatTypeIdentificationToolClient from './CoatTypeIdentificationToolClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Coat Type Identification Tool',
  description: 'Identify your pet\'s coat type based on characteristics to get personalized grooming recommendations. Learn about different coat types and their specific grooming needs.',
  keywords: ['pet coat type', 'dog coat type', 'cat coat type', 'coat identification', 'grooming by coat type', 'pet coat characteristics', 'coat type guide', 'grooming needs'],
  slug: 'coat-type-identification-tool',
  category: 'Grooming & Hygiene',
  features: [
    'Coat type identification',
    'Characteristic-based analysis',
    'Personalized grooming recommendations',
    'Tool recommendations',
    'Breed-specific guidance',
  ],
  faqs: [
    {
      question: 'What are the different types of pet coats?',
      answer: 'Common coat types include: Short/Smooth (minimal grooming, weekly brushing), Medium (moderate grooming, 2-3 times per week), Long (daily brushing, frequent bathing), Double Coat (heavy shedding, daily brushing especially during shedding season), Curly (frequent brushing to prevent matting), and Wiry (coarse hair, may need hand-stripping). Each coat type has specific grooming requirements.',
    },
    {
      question: 'How do I identify my pet\'s coat type?',
      answer: 'To identify your pet\'s coat type, observe: hair length (short, medium, long), texture (smooth, wiry, curly), number of layers (single or double coat), shedding amount, and overall feel (soft, coarse, oily). Select these characteristics in our tool to get an identification and personalized grooming recommendations.',
    },
    {
      question: 'Why is knowing my pet\'s coat type important?',
      answer: 'Knowing your pet\'s coat type is important because different coats require different grooming routines, tools, and frequencies. For example, long coats need daily brushing to prevent matting, while short coats may only need weekly brushing. Using the wrong grooming approach can cause skin irritation, matting, or damage to the coat. Proper identification helps you provide appropriate care.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function CoatTypeIdentificationToolPage() {
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
      <CoatTypeIdentificationToolClient />
    </>
  );
}

