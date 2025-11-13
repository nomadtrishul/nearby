export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Nearby Pet Care Blog',
    description: 'Expert pet care advice, training tips, health guides, and the latest news from Nearby Pet Care.',
    url: 'https://nearbypetcare.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nearbypetcare.com/logo.png',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

