import type { Metadata } from 'next';
import ObedienceLevelAssessmentToolClient from './ObedienceLevelAssessmentToolClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Obedience Level Assessment Tool',
  description: 'Assess your pet\'s current obedience level through a comprehensive questionnaire. Get personalized training recommendations based on your pet\'s strengths and areas for improvement.',
  keywords: ['obedience assessment', 'dog obedience test', 'pet obedience level', 'obedience evaluation', 'training assessment', 'obedience skills', 'pet training level', 'obedience test'],
  slug: 'obedience-level-assessment-tool',
  category: 'Training & Behavior',
  features: [
    'Comprehensive obedience assessment',
    'Score calculation',
    'Level determination',
    'Strengths identification',
    'Personalized recommendations',
  ],
  faqs: [
    {
      question: 'How do I assess my pet\'s obedience level?',
      answer: 'Assess obedience by evaluating how reliably your pet responds to basic commands (sit, stay, come, down, leave it, heel) in different situations and with distractions. Consider consistency, response time, and whether commands work in various environments. Our assessment tool provides a structured way to evaluate multiple aspects of obedience and get personalized recommendations.',
    },
    {
      question: 'What are the different obedience levels?',
      answer: 'Obedience levels typically include: Advanced (85%+) - excellent reliability even with distractions, Intermediate (65-84%) - good basic obedience with some inconsistency, Beginner (40-64%) - learning basics but needs more practice, and Needs Training (<40%) - requires fundamental training. Levels are based on consistency, reliability, and performance with distractions.',
    },
    {
      question: 'How can I improve my pet\'s obedience level?',
      answer: 'Improve obedience by: practicing commands regularly and consistently, using positive reinforcement, gradually increasing difficulty and distractions, practicing in different environments, keeping training sessions short and positive, focusing on one command at a time, and considering professional training or obedience classes. Consistency and patience are key to improving obedience.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function ObedienceLevelAssessmentToolPage() {
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
      <ObedienceLevelAssessmentToolClient />
    </>
  );
}

