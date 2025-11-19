import type { Metadata } from 'next';
import TrainingProgressTrackerClient from './TrainingProgressTrackerClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Training Progress Tracker | Dog & Cat Behavior Progress Log',
  description: 'Free training progress tracker logs command mastery, behaviors, and milestones for dogs and cats. Get personalized recommendations and next training steps.',
  keywords: ['pet training tracker', 'dog training progress', 'training tracker', 'obedience training tracker', 'training assessment', 'pet training level', 'training progress', 'training goals'],
  slug: 'training-progress-tracker',
  category: 'Training & Behavior',
  features: [
    'Command progress tracking',
    'Behavior progress tracking',
    'Overall progress calculation',
    'Next steps recommendations',
    'Training level assessment',
  ],
  faqs: [
    {
      question: 'How do I track my pet\'s training progress?',
      answer: 'Track training progress by: setting clear goals for each command or behavior, practicing regularly and consistently, marking progress levels (not started, learning, improving, mastered), updating your tracker regularly, and celebrating milestones. Use our training progress tracker to monitor multiple commands and behaviors at once and get personalized recommendations.',
    },
    {
      question: 'How long does it take to train a pet?',
      answer: 'Training time varies by pet, command complexity, and consistency. Basic commands like "sit" may take a few days to a week, while more complex behaviors like "stay" or "come" may take weeks or months. House training typically takes 4-6 months. Consistency, positive reinforcement, and regular practice are key to successful training.',
    },
    {
      question: 'What should I do if my pet isn\'t making progress?',
      answer: 'If training isn\'t progressing: review your training methods (use positive reinforcement), break behaviors into smaller steps, ensure you\'re being consistent, check for distractions or environmental issues, consider if the pet is ready for that level of training, consult a professional trainer for guidance, and rule out medical issues that might affect learning.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function TrainingProgressTrackerPage() {
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
      <TrainingProgressTrackerClient />
    </>
  );
}

