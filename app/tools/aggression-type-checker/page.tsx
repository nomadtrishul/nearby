import type { Metadata } from 'next';
import AggressionTypeCheckerClient from './AggressionTypeCheckerClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Pet Aggression Type Checker | Identify Dog & Cat Behavior Triggers',
  description: 'Free pet aggression type checker helps you identify fear, territorial, resource guarding, and other aggression triggers in dogs and cats with tailored next-step guidance.',
  keywords: ['pet aggression', 'dog aggression', 'cat aggression', 'aggression types', 'aggression diagnosis', 'aggressive behavior', 'resource guarding', 'fear aggression'],
  slug: 'aggression-type-checker',
  category: 'Training & Behavior',
  features: [
    'Aggression type identification',
    'Trigger analysis',
    'Target identification',
    'Behavior assessment',
    'Professional guidance',
  ],
  faqs: [
    {
      question: 'What are the different types of aggression in pets?',
      answer: 'Common types of aggression include: resource guarding (protecting food, toys, or items), territorial aggression (protecting home/territory), fear-based aggression (defensive response to fear), inter-dog/cat aggression (aggression toward other animals), pain-induced aggression (response to pain or discomfort), protective aggression (protecting owner), and dominance aggression. Each type requires different treatment approaches.',
    },
    {
      question: 'How do I know if my pet\'s aggression is serious?',
      answer: 'Aggression is serious if: your pet has bitten or attempted to bite, aggression is escalating, aggression occurs frequently, or it poses a safety risk. Any aggression, especially involving biting, requires immediate professional help from a certified animal behaviorist or veterinarian. Never attempt to handle severe aggression on your own.',
    },
    {
      question: 'Can aggression be treated?',
      answer: 'Yes, many types of aggression can be treated or managed with professional help, behavior modification, and in some cases, medication. Treatment success depends on the type and severity of aggression, underlying causes, and consistency of treatment. Resource guarding and fear-based aggression often respond well to behavior modification. Always work with a certified professional for aggression issues.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function AggressionTypeCheckerPage() {
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
      <AggressionTypeCheckerClient />
    </>
  );
}

