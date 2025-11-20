export default function BlogLayout({ children }: { children: React.ReactNode }) {
  // Structured data is handled in page.tsx for better control and to avoid duplication
  // Layout only provides the wrapper structure
  return <>{children}</>;
}

