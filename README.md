# Nearby Pet Care

A modern Next.js application for nearbypetcare.com - Professional pet care services platform connecting pet owners with trusted pet care providers.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Environment Setup

1. Copy the example environment file:
```bash
cp .env.example .env.local
```

2. Fill in your environment variables in `.env.local`:
   - Get Google verification code from [Google Search Console](https://search.google.com/search-console)
   - Get Bing verification code from [Bing Webmaster Tools](https://www.bing.com/webmasters)
   - Add your contact email
   - Add social media URLs (optional)

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build

Build for production:

```bash
npm run build
npm start
```

The production build will be optimized and ready for deployment.

## Project Structure

```
petcare/
├── app/                # App Router directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # Reusable components
├── lib/               # Utility functions
├── public/            # Static assets
└── styles/            # Additional styles
```

## Tech Stack

- **Next.js 16.0.0** - React framework with App Router, Turbopack as default bundler
- **React 19.2.0** - Latest React with Server Components support
- **TypeScript 5.9.2** - Enhanced type safety and developer experience
- **Tailwind CSS 3.4.17** - Utility-first CSS framework with improved dark mode
- **ESLint 9.39.0** - Code linting and quality assurance

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Production Deployment

### Pre-Deployment Checklist

- [ ] Create `.env.local` with all required environment variables
- [ ] Create `/public/og-image.jpg` (1200x630px) for social sharing
- [ ] Verify all verification codes are set
- [ ] Test production build: `npm run build`
- [ ] Submit sitemap to Google Search Console and Bing Webmaster Tools

### Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production

Make sure to set these in your hosting platform:
- `NEXT_PUBLIC_GOOGLE_VERIFICATION`
- `NEXT_PUBLIC_BING_VERIFICATION`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_SITE_URL`
- Social media URLs (optional)

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## SEO Architecture

This project implements a **complete, production-grade SEO architecture** following November 2025 best practices. The SEO system is centralized, type-safe, and easy to use across all pages.

### Overview

The SEO architecture consists of:

- **Central SEO Utility Module** (`lib/seo-utils.ts`) - Core SEO functions and configuration
- **SEO Server Component** (`components/SEO.server.tsx`) - Reusable component for rendering SEO tags
- **Sitemap Integration** (`next-sitemap.config.js`) - Automatic sitemap generation with image support
- **SEO Validator** (`scripts/seo-check.js`) - CI-ready validation script

### Quick Start

#### 1. Using SEO Component in Pages

The easiest way to add SEO to any page is using the `SEO` server component:

```tsx
// app/services/[slug]/page.tsx
import SEO from '@/components/SEO.server';

export default async function ServicePage({ params }) {
  const service = await getService(params.slug);
  
  return (
    <>
      <SEO seo={{
        title: service.title,
        description: service.excerpt,
        pathname: `/services/${params.slug}`,
        image: service.ogImage,
      }} />
      <main>{/* Your content */}</main>
    </>
  );
}
```

#### 2. Using with Markdown Blog Posts

For blog posts rendered from markdown (using gray-matter + remark):

```tsx
// app/blog/[slug]/page.tsx
import SEO from '@/components/SEO.server';
import { getPostBySlug } from '@/lib/blog';

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  return (
    <>
      <SEO seo={{
        title: post.title,
        description: post.excerpt,
        pathname: `/blog/${slug}`,
        image: post.image, // From front-matter
        type: 'article',
        publishedTime: post.date,
        modifiedTime: post.dateModified || post.date,
        author: post.author,
        section: post.category,
        tags: post.tags,
      }} />
      <article>{/* Your content */}</article>
    </>
  );
}
```

#### 3. Static Pages

For static pages with fixed content:

```tsx
// app/about/page.tsx
import SEO from '@/components/SEO.server';

export default function AboutPage() {
  return (
    <>
      <SEO seo={{
        title: 'About Us',
        description: 'Learn about Nearby Pet Care and our mission to connect pet owners with trusted care providers.',
        pathname: '/about',
      }} />
      <main>{/* Your content */}</main>
    </>
  );
}
```

### SEO Input Options

The `SEO` component accepts a `seo` prop with the following options:

```typescript
interface SeoInput {
  title?: string;              // Page title (auto-merged with template)
  description?: string;        // Meta description (120-160 chars ideal)
  keywords?: string[];          // Keywords array
  pathname?: string;           // Canonical pathname (e.g., '/blog/my-post')
  canonical?: string;          // Full canonical URL (overrides pathname)
  image?: string;              // OG image URL (relative or absolute)
  images?: Array<{...}>;       // Multiple OG images
  type?: 'website' | 'article'; // Content type
  publishedTime?: string;      // ISO 8601 date for articles
  modifiedTime?: string;        // ISO 8601 date for articles
  author?: string;             // Author name
  section?: string;            // Article section/category
  tags?: string[];             // Article tags
  breadcrumbs?: Array<{...}>;   // Breadcrumbs for structured data
  noindex?: boolean;           // Disable indexing
  nofollow?: boolean;          // Disable following links
  locale?: string;             // Locale override
  alternates?: {               // Alternate language URLs
    languages?: Record<string, string>;
  };
  isPaginated?: boolean;       // Pagination support
  page?: number;               // Current page number
  totalPages?: number;         // Total pages
}
```

### Environment Variables

Required environment variable:

```bash
NEXT_PUBLIC_SITE_URL=https://nearbypetcare.com
```

This is used for:
- Building absolute canonical URLs
- Generating absolute OG image URLs
- Sitemap generation

**Important:** Always set this to your production domain in production. For preview/staging deployments, the system automatically prevents indexing.

### Running SEO Validation

Validate SEO for all pages:

```bash
node scripts/seo-check.js
```

This script:
- Collects SEO from all blog posts, tips, and static pages
- Validates title length, description length, image URLs, etc.
- Prints warnings and errors
- Exits with non-zero code if critical errors found

**CI Integration Example (GitHub Actions):**

```yaml
# .github/workflows/seo-check.yml
name: SEO Check
on: [push, pull_request]
jobs:
  seo:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: node scripts/seo-check.js
```

### Sitemap Generation

The sitemap is automatically generated during build using `next-sitemap`. It includes:

- All static routes
- All blog posts (from `content/blog/`)
- All pet care tips (from `content/pet-tips/`)
- Image sitemap entries (2025 best practice)
- Automatic `lastmod` timestamps

The sitemap is generated at build time:

```bash
npm run build  # Automatically runs next-sitemap post-build
```

Sitemap location: `https://nearbypetcare.com/sitemap.xml`

### Advanced Usage

#### Using seo-utils Directly

For more control, you can use the utility functions directly:

```tsx
import { mergeSeo, buildMetaTags, buildCanonical } from '@/lib/seo-utils';

// In your page component
const merged = mergeSeo({
  title: 'My Page',
  description: 'Page description',
  pathname: '/my-page',
});

const tags = buildMetaTags(merged);
const canonical = buildCanonical('/my-page');
```

#### Custom Structured Data

The `generateJsonLd` function creates schema.org structured data. You can extend it:

```tsx
import { generateJsonLd, mergeSeo } from '@/lib/seo-utils';

const merged = mergeSeo({...});
const jsonLd = generateJsonLd(merged);
// jsonLd is a JSON string ready for <script type="application/ld+json">
```

### SEO Best Practices (2025)

This implementation follows:

- ✅ Title length: <70 characters (ideal)
- ✅ Description length: 120-160 characters (ideal)
- ✅ Absolute OG image URLs (required)
- ✅ Absolute canonical URLs (required)
- ✅ Article/WebPage JSON-LD structured data
- ✅ Image sitemap support
- ✅ Multi-lingual alternates support
- ✅ Automatic environment-based indexing control
- ✅ Pagination support (rel="prev"/rel="next")

### Troubleshooting

**Issue:** SEO tags not appearing
- Ensure you're using the `SEO` component in a Server Component
- Check that the component is placed before your main content
- Verify `NEXT_PUBLIC_SITE_URL` is set correctly

**Issue:** Images not showing in social previews
- Ensure OG images are absolute URLs (use `absoluteImage()` helper)
- Verify images are at least 1200x630px
- Check that images are publicly accessible

**Issue:** Sitemap not updating
- Run `npm run build` to regenerate sitemap
- Check `next-sitemap.config.js` configuration
- Verify blog/tips files are in correct directories

### Additional Resources

- [Next.js Metadata Documentation](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Schema.org Documentation](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)
- [Open Graph Protocol](https://ogp.me/)

