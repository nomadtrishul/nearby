import type { Metadata } from 'next';
import VaccineReminderClient from './VaccineReminderClient';
import { generateToolMetadata, generateToolStructuredData } from '@/lib/tool-seo-helper';

const config = {
  title: 'Pet Vaccine Reminder | Dog & Cat Vaccination Schedule Tracker',
  description: 'Set up personalized vaccine reminders for your pets. Track vaccination schedules, get reminders for upcoming vaccines, and export to calendar. Supports multiple pets.',
  keywords: ['pet vaccine reminder', 'vaccination schedule', 'pet vaccine tracker', 'vaccine calendar', 'pet health reminder', 'dog vaccine schedule', 'cat vaccine schedule', 'vaccination reminder tool'],
  slug: 'vaccine-reminder',
  category: 'Health & Wellness',
  features: [
    'Multi-pet support',
    'Automatic vaccine schedule calculation',
    'Calendar export (ICS format)',
    'Vaccine due date tracking',
    'Overdue vaccine alerts',
    'Dog and cat vaccine schedules',
  ],
  faqs: [
    {
      question: 'How often do pets need vaccinations?',
      answer: 'Most core vaccines (like DHPP for dogs and FVRCP for cats) are given annually or every 3 years depending on the vaccine type and your veterinarian\'s protocol. Puppies and kittens need a series of vaccinations starting at 6-8 weeks, then every 3-4 weeks until 16 weeks old. Always follow your veterinarian\'s specific recommendations.',
    },
    {
      question: 'What vaccines does my pet need?',
      answer: 'Core vaccines are essential for all pets: DHPP and Rabies for dogs, FVRCP and Rabies for cats. Non-core vaccines (like Bordetella, Lyme, FeLV) depend on your pet\'s lifestyle, location, and risk factors. Your veterinarian can help determine which vaccines are appropriate for your pet.',
    },
    {
      question: 'Can I export vaccine reminders to my calendar?',
      answer: 'Yes, the tool allows you to export individual vaccine reminders to your calendar in ICS format. Simply click the "Export" button next to any vaccine reminder to download a calendar file that can be imported into Google Calendar, Outlook, Apple Calendar, or other calendar applications.',
    },
    {
      question: 'What if my pet\'s vaccine is overdue?',
      answer: 'If a vaccine is overdue, contact your veterinarian as soon as possible. They may recommend restarting the vaccination series or giving a booster, depending on how long overdue it is. Never delay vaccinations unnecessarily as they protect against serious diseases.',
    },
  ],
};

export const metadata: Metadata = generateToolMetadata(config);

export default function VaccineReminderPage() {
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
      <VaccineReminderClient />
    </>
  );
}
