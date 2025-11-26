import type { Metadata } from 'next';
import FirstAidKitChecklistGeneratorClient from './FirstAidKitChecklistGeneratorClient';
import {
  generateSEOMetadata,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

const config = {
  title: 'First Aid Kit Checklist Generator',
  description: 'Generate a comprehensive first aid kit checklist for your pet. Get essential supplies, medications, and tools organized by category for basic and advanced kits.',
  keywords: ['pet first aid kit', 'dog first aid kit', 'cat first aid kit', 'pet emergency kit', 'first aid supplies pets', 'pet emergency supplies', 'pet first aid checklist', 'pet safety kit'],
  slug: 'first-aid-kit-checklist-generator',
  category: 'Health & Wellness',
  features: [
    'Comprehensive checklist generation',
    'Basic and advanced kit options',
    'Category-organized items',
    'Pet type-specific recommendations',
    'Emergency preparedness',
  ],
  faqs: [
    {
      question: 'What should be in a pet first aid kit?',
      answer: 'A pet first aid kit should include: essential supplies (gauze, bandages, adhesive tape, cotton balls, tweezers, scissors, thermometer, gloves), wound care (antiseptic solution, antibiotic ointment, saline solution), medications (hydrogen peroxide for inducing vomiting - only with vet guidance, activated charcoal), emergency tools (muzzle, blanket, flashlight), and important documents (veterinarian contact, pet medical records, emergency clinic info). Keep the kit easily accessible and check expiration dates regularly.',
    },
    {
      question: 'How often should I check my pet first aid kit?',
      answer: 'Check your pet first aid kit every 3-6 months to ensure all items are present, medications haven\'t expired, and supplies are in good condition. Replace expired medications, restock used items, and update contact information. Keep the kit in an easily accessible location and make sure all family members know where it is. Consider having a smaller travel kit for car trips.',
    },
    {
      question: 'When should I use a pet first aid kit?',
      answer: 'Use a pet first aid kit for minor injuries and emergencies while seeking or waiting for veterinary care. It can help with: minor cuts and scrapes, removing splinters or ticks, cleaning wounds, stabilizing injuries before transport, and managing minor burns. However, always seek veterinary care for serious injuries, poisoning, difficulty breathing, or any condition that seems severe. First aid is not a substitute for professional veterinary care.',
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

export default function FirstAidKitChecklistGeneratorPage() {
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

  const webApplicationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: toolTitle,
    description: config.description,
    url: toolUrl,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: config.features || [],
  };

  return (
    <>
      <script {...jsonLdScriptProps(webApplicationStructuredData)} />
      <script {...jsonLdScriptProps(breadcrumbStructuredData)} />
      {faqStructuredData && <script {...jsonLdScriptProps(faqStructuredData)} />}
      <FirstAidKitChecklistGeneratorClient />
    </>
  );
}
