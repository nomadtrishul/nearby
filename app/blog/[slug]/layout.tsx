import { getPostBySlug } from '@/lib/blog';

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export default async function BlogPostLayout({ children, params }: LayoutProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return <>{children}</>;
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image || 'https://nearbypetcare.com/images/default-blog.jpg',
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author || 'Nearby Pet Care Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nearbypetcare.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://nearbypetcare.com/blog/${slug}`,
    },
    articleSection: post.category || 'General',
    keywords: post.tags?.join(', ') || '',
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

