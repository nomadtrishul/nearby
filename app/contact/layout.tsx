import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch | Nearby Pet Care',
  description: 'Contact Nearby Pet Care for questions, support, or guidance. We\'re here to help you navigate pet care decisions with confidence.',
  keywords: ['contact pet care', 'pet care support', 'pet care questions', 'pet care help'],
  openGraph: {
    title: 'Contact Us - Get in Touch | Nearby Pet Care',
    description: 'Contact Nearby Pet Care for questions, support, or guidance on pet care decisions.',
    type: 'website',
    url: 'https://nearbypetcare.com/contact',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Us - Get in Touch | Nearby Pet Care',
    description: 'Contact Nearby Pet Care for questions, support, or guidance on pet care decisions.',
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/contact',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}












