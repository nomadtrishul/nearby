import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Appointment - Schedule Pet Care Services | Nearby Pet Care',
  description: 'Book your pet care appointment online. Schedule grooming, boarding, daycare, or training services with trusted professionals near you.',
  keywords: ['book pet care', 'schedule pet care', 'pet care appointment', 'book pet grooming', 'book pet boarding'],
  openGraph: {
    title: 'Book Appointment - Schedule Pet Care Services | Nearby Pet Care',
    description: 'Book your pet care appointment online. Schedule grooming, boarding, daycare, or training services.',
    type: 'website',
    url: 'https://nearbypetcare.com/book',
  },
  twitter: {
    card: 'summary',
    title: 'Book Appointment - Schedule Pet Care Services | Nearby Pet Care',
    description: 'Book your pet care appointment online. Schedule grooming, boarding, daycare, or training services.',
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/book',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


