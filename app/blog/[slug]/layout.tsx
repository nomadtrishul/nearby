interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export default async function BlogPostLayout({ children, params }: LayoutProps) {
  // Structured data is handled comprehensively in page.tsx to avoid duplication
  // Layout only provides the wrapper structure
  return <>{children}</>;
}

