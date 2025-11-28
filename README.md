# Nearby Pet Care

A modern Next.js application for nearbypetcare.com - An independent educational platform providing practical, step-by-step guidance on pet care. We help pet owners make informed decisions about pet nutrition, health, grooming, training, behavior, and overall pet wellbeing.

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

The production build includes:
- **Pre-build**: Generates `llms.json` file for LLM-friendly content
- **Build**: Optimized Next.js production build with SWC minification
- **Post-build**: Generates sitemap and submits to IndexNow

**Build Scripts:**
- `npm run build` - Full production build
- `npm run generate:llms` - Generate llms.json file manually
- `npm run seo:check` - Validate SEO for all pages
- `npm run indexnow:submit` - Submit updated URLs to IndexNow

The production build is optimized with:
- SWC minification enabled
- CSS optimization
- Image optimization (AVIF/WebP)
- Compression enabled
- Security headers configured

## Project Structure

```
petcare/
├── app/                    # App Router directory
│   ├── layout.tsx          # Root layout with SEO and analytics
│   ├── page.tsx            # Homepage with hero section and CTAs
│   ├── globals.css         # Global styles and Tailwind imports
│   ├── blog/               # Blog posts and articles
│   ├── pet-care-tips/      # Pet care tips and guides
│   ├── tools/              # Interactive pet care tools and calculators
│   ├── pet-breeds/         # Breed information (dogs, cats, birds, etc.)
│   ├── pet-health/         # Health guides and information
│   ├── pet-nutrition/      # Nutrition guides and advice
│   ├── pet-grooming/       # Grooming guides and tips
│   ├── pet-training/       # Training guides and resources
│   ├── buying-guides/      # Product buying guides
│   ├── comparisons/        # Product comparison pages
│   ├── community/          # Community content and stories
│   └── llms.json/          # LLM-friendly content endpoint
├── components/             # Reusable React components
│   ├── SEO.server.tsx      # SEO metadata component
│   ├── Header.tsx          # Site header/navigation
│   ├── Footer.tsx          # Site footer
│   └── [Sidebar components] # Context-specific sidebars
├── lib/                    # Utility functions and helpers
│   ├── seo-utils.ts        # SEO utilities and metadata generation
│   ├── blog.ts             # Blog post processing
│   ├── petTips.ts          # Pet tips processing
│   ├── generate-llms.ts    # LLM content generation
│   └── site-config.ts      # Site configuration and URLs
├── content/                # Content files (Markdown)
│   ├── blog/               # Blog post markdown files
│   └── pet-tips/           # Pet care tip markdown files
├── scripts/                 # Build and utility scripts
│   ├── generate-llms.ts    # Generate llms.json file
│   ├── seo-check.js        # SEO validation script
│   └── submit-indexnow.js # IndexNow submission script
└── public/                  # Static assets
    ├── og-image.png         # Default Open Graph image
    └── [other assets]       # Images, icons, etc.
```

## Tech Stack

- **Next.js 16.0.0** - React framework with App Router, Server Components, and optimized production builds
- **React 19.2.0** - Latest React with Server Components support and improved performance
- **TypeScript 5.9.2** - Enhanced type safety and developer experience
- **Tailwind CSS 3.4.17** - Utility-first CSS framework with dark mode support
- **ESLint 9.39.0** - Code linting and quality assurance
- **Supabase** - Database and backend services
- **Vercel Analytics & Speed Insights** - Performance monitoring and analytics
- **next-sitemap** - Automatic sitemap generation with image support

## Key Features

### 🏠 Homepage
- Hero section with dual CTAs (Pet Care Guides & Pet Tools)
- Latest published tools showcase
- Resource cards for easy navigation
- Blog preview section
- FAQ section with structured data

### 🛠️ Tools & Calculators
- 100+ interactive pet care tools and calculators
- Categories: Health & Wellness, Nutrition, Adoption, Planning, Grooming, Training
- Tools sidebar with travel resources integration
- Popular tools quick access

### 📚 Content Sections
- **Blog**: Expert articles and in-depth guides
- **Pet Care Tips**: Practical tips and advice
- **Pet Breeds**: Comprehensive breed information
- **Buying Guides**: Product selection guides
- **Comparisons**: Side-by-side product comparisons
- **Community**: Pet owner stories and experiences

### 🎨 Design & UX
- Responsive design (mobile-first)
- Dark mode support
- Accessible components
- Optimized performance
- SEO-optimized structure

## Production Optimizations

This project includes several production-ready optimizations:

- ✅ **SWC Minification** - Faster builds and smaller bundles
- ✅ **CSS Optimization** - Experimental CSS optimization enabled
- ✅ **Image Optimization** - AVIF/WebP formats with responsive sizing
- ✅ **Compression** - Gzip/Brotli compression enabled
- ✅ **Security Headers** - PoweredBy header removed, CSP configured
- ✅ **Environment-aware Logging** - Console logs only in development
- ✅ **Build-time Content Generation** - LLM-friendly content generated at build
- ✅ **Automatic Sitemap** - Generated with image support
- ✅ **IndexNow Integration** - Automatic search engine notification

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Production Deployment

### Pre-Deployment Checklist

- [ ] Create `.env.local` with all required environment variables
- [ ] Verify `/public/og-image.png` exists (1200x630px) for social sharing
- [ ] Verify all verification codes are set (Google, Bing, etc.)
- [ ] Test production build: `npm run build`
- [ ] Run SEO validation: `npm run seo:check`
- [ ] Verify `llms.json` is generated correctly
- [ ] Submit sitemap to Google Search Console and Bing Webmaster Tools
- [ ] Test all major pages and tools functionality
- [ ] Verify analytics and tracking are working

### Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production

Make sure to set these in your hosting platform:

**Required:**
- `NEXT_PUBLIC_SITE_URL` - Your production domain (e.g., `https://nearbypetcare.com`)

**Optional but Recommended:**
- `NEXT_PUBLIC_GOOGLE_VERIFICATION` - Google Search Console verification code
- `NEXT_PUBLIC_BING_VERIFICATION` - Bing Webmaster Tools verification code
- `NEXT_PUBLIC_YANDEX_VERIFICATION` - Yandex verification code
- `NEXT_PUBLIC_YAHOO_VERIFICATION` - Yahoo verification code
- `NEXT_PUBLIC_CONTACT_EMAIL` - Contact email address
- `NEXT_PUBLIC_PREFERRED_DOMAIN` - Domain preference (`www` or `non-www`)

**Supabase (if using):**
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key

**Note:** The build process automatically handles environment detection. Preview/staging deployments are automatically set to `noindex` to prevent search engine indexing.

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

## Recent Updates

### Latest Changes
- ✅ Added "Explore Pet Tools" CTA button on homepage hero section
- ✅ Enhanced tools sidebar with travel resources card (Barry's Sky Lounge integration)
- ✅ Production optimizations: SWC minification, conditional logging, enhanced .gitignore
- ✅ Improved build process with pre/post-build scripts
- ✅ Enhanced SEO architecture with comprehensive validation

### Code Quality
- All console statements are production-appropriate (conditional or error logging only)
- Comprehensive .gitignore for build artifacts and IDE files
- TypeScript strict mode enabled
- ESLint configured for code quality
- No debugger statements or development-only code in production builds

## Contributing

When contributing to this project:

1. Follow the existing code style and patterns
2. Ensure all new pages include proper SEO metadata
3. Run `npm run seo:check` before committing
4. Test production build: `npm run build`
5. Update documentation as needed

## License

See [LICENSE](LICENSE) file for details.

