import type { Metadata } from 'next';
import ToolsClient from './ToolsClient';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Pet Care Tools - Advanced Calculators & Helpers',
  description: 'Free pet care tools and calculators. Calculate weight, feeding portions, find breeds, set vaccine reminders, track age, and estimate costs.',
  keywords: ['pet tools', 'pet calculator', 'weight calculator', 'feeding calculator', 'breed selector', 'vaccine reminder', 'pet age calculator', 'pet exercise calculator', 'pet cost calculator', 'pet health tracker'],
  pathname: '/tools',
  type: 'website',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Pet Care Tools',
      type: 'image/png',
    },
  ],
});

export default function ToolsPage() {
  return <ToolsClient />;
}
