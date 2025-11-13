import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch | Nearby Pet Care',
  description: 'Contact Nearby Pet Care for questions, support, or to book pet care services. We\'re here to help you find the perfect care for your pets.',
  keywords: ['contact pet care', 'pet care support', 'pet care questions', 'pet care help'],
  openGraph: {
    title: 'Contact Us - Get in Touch | Nearby Pet Care',
    description: 'Contact Nearby Pet Care for questions, support, or to book pet care services.',
    type: 'website',
    url: 'https://nearbypetcare.com/contact',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Us - Get in Touch | Nearby Pet Care',
    description: 'Contact Nearby Pet Care for questions, support, or to book pet care services.',
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

