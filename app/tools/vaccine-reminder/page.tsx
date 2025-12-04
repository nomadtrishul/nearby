import type { Metadata } from 'next';
import VaccineReminderClient from './VaccineReminderClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'Pet Vaccine Reminder',
  description: 'Set up personalized vaccine reminders for your pets. Track vaccination schedules, get reminders for upcoming vaccines, and export to calendar.',
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

export const metadata: Metadata = generateSEOMetadata({
  title: config.title,
  description: config.description,
  keywords: config.keywords,
  pathname: `/tools/${config.slug}`,
  type: 'website',
});

export default function VaccineReminderPage() {
  const baseUrl = getBaseUrl();
  const toolUrl = ensureAbsoluteUrl(`/tools/${config.slug}`);
  const toolTitle = config.title.split('|')[0].trim();
  
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Tools', url: '/tools' },
    { name: toolTitle, url: `/tools/${config.slug}` },
  ];

  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);
  
  const faqStructuredData = config.faqs && config.faqs.length > 0 
    ? generateFAQStructuredData(config.faqs)
    : null;

  const softwareApplicationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: toolTitle,
    description: config.description,
    url: toolUrl,
    applicationCategory: 'UtilityApplication',
    applicationSubCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    featureList: config.features || [],
  };

  return (
    <>
      <script {...jsonLdScriptProps(softwareApplicationStructuredData)} />
      <script {...jsonLdScriptProps(breadcrumbStructuredData)} />
      {faqStructuredData && <script {...jsonLdScriptProps(faqStructuredData)} />}
      <VaccineReminderClient />
    </>
  );
}
