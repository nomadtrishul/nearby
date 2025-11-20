# SEO Maintenance Guide

This guide helps maintain SEO standards when creating or updating pages.

## Quick Checklist for New Pages

### ✅ Required Meta Tags
```typescript
export const metadata: Metadata = {
  title: 'Page Title | Nearby Pet Care', // Always include site name
  description: 'Compelling 150-160 character description',
  keywords: ['relevant', 'keywords'],
  alternates: {
    canonical: 'https://nearbypetcare.com/page-url',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    'bingbot': {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Page Title | Nearby Pet Care',
    description: 'OG description',
    type: 'website', // or 'article' for blog posts
    url: 'https://nearbypetcare.com/page-url',
    siteName: 'Nearby Pet Care',
    locale: 'en_US',
    images: [{
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Image description',
      type: 'image/png',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Title',
    description: 'Twitter description',
    images: ['https://nearbypetcare.com/og-image.png'],
    creator: '@nearbypetcare',
    site: '@nearbypetcare',
  },
};
```

### ✅ Required Structured Data

#### For Article Pages
```typescript
const articleStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Article Title',
  description: 'Article description',
  image: 'https://nearbypetcare.com/og-image.png',
  datePublished: '2024-01-01T00:00:00Z',
  dateModified: new Date().toISOString(),
  author: {
    '@type': 'Person',
    name: 'Author Name',
    url: 'https://nearbypetcare.com/about'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Nearby Pet Care',
    logo: {
      '@type': 'ImageObject',
      url: 'https://nearbypetcare.com/logo.png',
      width: 200,
      height: 48
    }
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://nearbypetcare.com/page-url'
  },
  inLanguage: 'en-US',
};
```

#### Breadcrumbs (Always Required)
```typescript
const breadcrumbStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://nearbypetcare.com'
    },
    // Add more items as needed
  ]
};
```

### ✅ Using SEO Utilities

Use the utility functions from `lib/seo-utils.ts`:

```typescript
import { generateSEOMetadata, generateBreadcrumbStructuredData } from '@/lib/seo-utils';

export const metadata = generateSEOMetadata({
  title: 'Page Title',
  description: 'Page description',
  keywords: ['keyword1', 'keyword2'],
  url: '/page-url',
  type: 'article', // or 'website'
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'Category', url: '/category' },
    { name: 'Page', url: '/page-url' },
  ],
});
```

## Mobile-First Best Practices

1. **Viewport**: Already set in root layout, no need to add
2. **Font Sizes**: Use responsive classes (text-sm sm:text-base md:text-lg)
3. **Touch Targets**: Minimum 44x44px for buttons/links
4. **Images**: Always use Next.js Image component with proper sizing
5. **Content**: Ensure all content is visible on mobile (no hidden content)

## Performance Best Practices

1. **Images**: Use WebP/AVIF formats, proper sizing
2. **Scripts**: Load analytics after consent
3. **CSS**: Use Tailwind's purge to remove unused styles
4. **Fonts**: Use next/font for font optimization

## Testing Checklist

Before deploying:
- [ ] Test with Google Rich Results Test
- [ ] Validate structured data with Schema.org validator
- [ ] Check mobile-friendliness with Google's Mobile-Friendly Test
- [ ] Test page speed with PageSpeed Insights
- [ ] Verify canonical URLs
- [ ] Check robots.txt allows indexing
- [ ] Verify sitemap includes new page

## Common Issues to Avoid

1. ❌ Missing canonical URLs
2. ❌ Duplicate content without canonical
3. ❌ Missing alt text on images
4. ❌ Hidden content on mobile
5. ❌ Slow page load times
6. ❌ Missing structured data
7. ❌ Broken internal links
8. ❌ Missing breadcrumbs

## Resources

- [Google Search Central](https://developers.google.com/search)
- [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)
- [Schema.org Documentation](https://schema.org/)
- [AdSense Policies](https://support.google.com/adsense/answer/48182)

