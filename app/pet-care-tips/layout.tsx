import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pet Care Tips - Expert Advice & Guides | Nearby Pet Care',
  description: 'Discover expert pet care tips, guides, and advice for keeping your pets healthy and happy. Learn about grooming, nutrition, and training.',
  keywords: ['pet care tips', 'pet care advice', 'pet care guides', 'dog care tips', 'cat care tips', 'pet health tips', 'pet grooming tips', 'pet training tips'],
  openGraph: {
    title: 'Pet Care Tips - Expert Advice & Guides | Nearby Pet Care',
    description: 'Discover expert pet care tips, guides, and advice for keeping your pets healthy and happy.',
    type: 'website',
    url: 'https://nearbypetcare.com/pet-care-tips',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Care Tips - Expert Advice & Guides | Nearby Pet Care',
    description: 'Discover expert pet care tips, guides, and advice for keeping your pets healthy and happy.',
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/pet-care-tips',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PetCareTipsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

