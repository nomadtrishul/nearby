import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pet Care Tip | Nearby Pet Care',
  description: 'Expert pet care how-to guide with step-by-step instructions.',
};

export default function PetTipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

