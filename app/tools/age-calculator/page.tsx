import type { Metadata } from 'next';
import AgeCalculatorClient from './AgeCalculatorClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Pet Age Calculator | Dog & Cat Age to Human Years Converter',
  description: 'Free pet age calculator converts dog and cat years to human years. Get breed-specific calculations and age-appropriate care recommendations.',
  keywords: ['pet age calculator', 'dog age calculator', 'cat age calculator', 'pet age in human years', 'pet life stage', 'dog years calculator', 'cat years calculator', 'pet age converter', 'dog years to human years', 'cat years to human years'],
  slug: 'age-calculator',
  category: 'Health & Wellness',
  features: [
    'Convert pet age to human years',
    'Breed-specific aging calculations',
    'Life stage identification',
    'Age-appropriate care recommendations',
    'Support for dogs and cats',
  ],
  faqs: [
    {
      question: 'How do you calculate pet age in human years?',
      answer: 'Pet age conversion varies by species and size. For dogs: the first year equals 15 human years, the second year equals 9 human years, then it varies by size (small dogs age slower than large dogs). For cats: the first year equals 15 human years, the second year equals 9 human years, then each year equals 4 human years.',
    },
    {
      question: 'Do larger dogs age faster than smaller dogs?',
      answer: 'Yes, larger dog breeds generally age faster than smaller breeds. Giant breeds may age at a rate of 7.5 human years per dog year after age 2, while small breeds age at about 4 human years per dog year. This is why larger dogs typically have shorter lifespans.',
    },
    {
      question: 'What are the different life stages for pets?',
      answer: 'Pets go through several life stages: Puppy/Kitten (under 1 year), Young Adult (1-2 years), Adult (2-7 years for dogs, 2-7 years for cats), Mature Adult (7-10 years for dogs, 7-11 years for cats), and Senior (10+ years for dogs, 11+ years for cats). Each stage has different care requirements.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function AgeCalculatorPage() {
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
      <AgeCalculatorClient />
    </>
  );
}
