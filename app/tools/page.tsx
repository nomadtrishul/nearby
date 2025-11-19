import type { Metadata } from 'next';
import ToolsClient from './ToolsClient';

export const metadata: Metadata = {
  title: 'Pet Care Tools - Advanced Calculators & Helpers | Nearby Pet Care',
  description: 'Free advanced pet care tools and calculators. Calculate ideal weight, feeding portions, find the perfect breed, set vaccine reminders, track pet age, exercise needs, and estimate pet ownership costs.',
  keywords: ['pet tools', 'pet calculator', 'weight calculator', 'feeding calculator', 'breed selector', 'vaccine reminder', 'pet age calculator', 'pet exercise calculator', 'pet cost calculator', 'pet health tracker'],
  openGraph: {
    title: 'Pet Care Tools - Advanced Calculators & Helpers | Nearby Pet Care',
    description: 'Free advanced pet care tools and calculators to help you provide the best care for your pets.',
    type: 'website',
    url: 'https://nearbypetcare.com/tools',
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pet Care Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Care Tools - Advanced Calculators & Helpers | Nearby Pet Care',
    description: 'Free advanced pet care tools and calculators to help you care for your pets.',
    images: ['https://nearbypetcare.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/tools',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ToolsPage() {
  return <ToolsClient />;
}
