/**
 * SEO Server Component
 * Renders SEO meta tags, links, and structured data for Next.js App Router
 * 
 * @module SEO.server
 * @description Server component that outputs SEO tags in the document head
 */

import { mergeSeo, buildMetaTags, type SeoInput } from '@/lib/seo-utils';

/**
 * SEO Component Props
 */
export interface SEOProps {
  /** SEO input configuration */
  seo: SeoInput;
}

/**
 * SEO Server Component
 * 
 * This component merges the provided SEO input with site defaults and renders
 * all necessary meta tags, links, and structured data in the document head.
 * 
 * Works natively with Next.js App Router's head injection system.
 * 
 * @example
 * ```tsx
 * import SEO from '@/components/SEO.server';
 * 
 * export default async function Page({ params }) {
 *   const data = await getService(params.slug);
 *   return (
 *     <>
 *       <SEO seo={{
 *         title: data.title,
 *         description: data.excerpt,
 *         pathname: `/services/${params.slug}`,
 *         image: data.ogImage,
 *       }} />
 *       <main>...</main>
 *     </>
 *   );
 * }
 * ```
 */
export default function SEO({ seo }: SEOProps) {
  // Merge SEO input with defaults
  const merged = mergeSeo(seo);
  
  // Build meta tags array
  const tags = buildMetaTags(merged);

  return (
    <>
      {tags.map((tagObj, index) => {
        const key = `${tagObj.tag}-${index}`;

        switch (tagObj.tag) {
          case 'title':
            return (
              <title key={key}>{tagObj.children}</title>
            );

          case 'meta':
            return (
              <meta
                key={key}
                {...(tagObj.props as Record<string, string>)}
              />
            );

          case 'link':
            return (
              <link
                key={key}
                {...(tagObj.props as Record<string, string>)}
              />
            );

          case 'script':
            return (
              <script
                key={key}
                {...(tagObj.props as Record<string, string>)}
                dangerouslySetInnerHTML={{
                  __html: tagObj.children || '',
                }}
              />
            );

          default:
            return null;
        }
      })}
    </>
  );
}
