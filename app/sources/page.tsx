import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

const baseUrl = 'https://nearbypetcare.com';
const pageUrl = `${baseUrl}/sources`;
const publishedTime = '2024-01-01T00:00:00Z';
const modifiedTime = new Date().toISOString();

export const metadata: Metadata = {
  title: 'Sources & References | Nearby Pet Care',
  description: 'Sources and references used in our pet care content. Learn about our sourcing practices and the authoritative sources we rely on for accurate, evidence-based information.',
  keywords: ['sources', 'references', 'citations', 'pet care sources', 'veterinary sources', 'evidence-based', 'content sources', 'research sources', 'citation practices'],
  authors: [{ name: 'Nearby Pet Care Team' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: 'Sources & References | Nearby Pet Care',
    description: 'Sources and references used in our educational pet care content. Learn about our sourcing practices.',
    type: 'website',
    url: pageUrl,
    siteName: 'Nearby Pet Care',
    locale: 'en_US',
    alternateLocale: ['en_GB', 'en_CA', 'en_AU'],
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Sources & References - Nearby Pet Care',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sources & References | Nearby Pet Care',
    description: 'Sources and references used in our educational pet care content.',
    images: [`${baseUrl}/og-image.png`],
    creator: '@nearbypetcare',
    site: '@nearbypetcare',
  },
  alternates: {
    canonical: pageUrl,
    languages: {
      'en-US': pageUrl,
      'en-GB': pageUrl,
      'en-CA': pageUrl,
      'en-AU': pageUrl,
    },
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
  },
  other: {
    'og:updated_time': modifiedTime,
  },
};

export default function SourcesPage() {
  // Breadcrumb Structured Data
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Sources',
        item: pageUrl,
      },
    ],
  };

  // WebPage Structured Data
  const webPageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    name: 'Sources & References',
    description: 'Sources and references used in our educational pet care content. Learn about our sourcing practices.',
    url: pageUrl,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${baseUrl}#website`,
      name: 'Nearby Pet Care',
      url: baseUrl,
    },
    about: {
      '@type': 'Thing',
      name: 'Sources and References',
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${baseUrl}/og-image.png`,
      width: 1200,
      height: 630,
    },
    datePublished: publishedTime,
    dateModified: modifiedTime,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: baseUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Sources',
          item: pageUrl,
        },
      ],
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
        width: 200,
        height: 48,
      },
    },
  };

  return (
    <>
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageStructuredData) }}
      />
      <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
        <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <Breadcrumb items={[
              { name: 'Home', href: '/' },
              { name: 'Sources', href: '/sources' }
            ]} />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 mt-6">Sources & References</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              At Nearby Pet Care, we strive to provide accurate, evidence-based educational information. Our content is sourced from reputable veterinary organizations, peer-reviewed research, and established pet care authorities. This page explains our sourcing practices and the types of sources we rely on.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Our Sourcing Philosophy</h2>
              <p className="mb-4">
                We are committed to providing information based on widely accepted pet care practices and current understanding of animal health, nutrition, and behavior. Our sourcing philosophy prioritizes:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Authority:</strong> Information from recognized experts and reputable organizations</li>
                <li><strong>Evidence:</strong> Content backed by scientific research and peer-reviewed studies when available</li>
                <li><strong>Consensus:</strong> Practices that are widely accepted within the veterinary and pet care communities</li>
                <li><strong>Recency:</strong> Current information that reflects the latest understanding and best practices</li>
                <li><strong>Objectivity:</strong> Sources free from commercial bias or conflicts of interest</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Primary Source Categories</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Veterinary Medical Associations</h3>
              <p className="mb-3">We reference information from leading veterinary organizations, including:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>American Veterinary Medical Association (AVMA)</li>
                <li>American Animal Hospital Association (AAHA)</li>
                <li>American Association of Feline Practitioners (AAFP)</li>
                <li>World Small Animal Veterinary Association (WSAVA)</li>
                <li>Other national and international veterinary associations</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Peer-Reviewed Veterinary Journals</h3>
              <p className="mb-3">We consult research published in respected veterinary journals, such as:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Journal of the American Veterinary Medical Association (JAVMA)</li>
                <li>Journal of Feline Medicine and Surgery</li>
                <li>Veterinary Clinics of North America</li>
                <li>Other peer-reviewed veterinary and animal science publications</li>
              </ul>
              <p className="mb-4">
                When referencing scientific studies, we prioritize peer-reviewed research and consider the quality of the study design, sample size, and conclusions.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Established Pet Care Organizations</h3>
              <p className="mb-3">We reference information from recognized pet care and animal welfare organizations, including:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>American Society for the Prevention of Cruelty to Animals (ASPCA)</li>
                <li>Humane Society of the United States</li>
                <li>American Kennel Club (AKC)</li>
                <li>Cat Fanciers' Association (CFA)</li>
                <li>Other established pet care and breed organizations</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Certified Veterinary Professionals</h3>
              <p className="mb-4">
                We consult with and reference information from certified veterinary professionals, including veterinarians, veterinary technicians, and certified animal behaviorists. However, we emphasize that our content is educational and not a substitute for personalized veterinary advice.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Government Agencies and Regulatory Bodies</h3>
              <p className="mb-3">For regulatory and safety information, we reference:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>U.S. Food and Drug Administration (FDA) - for pet food and medication information</li>
                <li>U.S. Department of Agriculture (USDA) - for animal health and welfare standards</li>
                <li>Centers for Disease Control and Prevention (CDC) - for zoonotic disease information</li>
                <li>Other relevant government agencies</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Academic Institutions</h3>
              <p className="mb-4">
                We reference research and information from veterinary schools, universities, and academic institutions that conduct animal health and behavior research.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">How We Use Sources</h2>
              <p className="mb-4">
                Our approach to using sources ensures accuracy and reliability:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Multiple Sources:</strong> We consult multiple sources when researching topics to ensure accuracy and comprehensiveness</li>
                <li><strong>Source Evaluation:</strong> We evaluate sources for authority, credibility, recency, and objectivity before using them</li>
                <li><strong>Consensus Building:</strong> We prioritize information that represents consensus within the veterinary and pet care communities</li>
                <li><strong>Context Consideration:</strong> We consider the context and limitations of research when applying it to our content</li>
                <li><strong>Regular Updates:</strong> We review and update content as new research and information becomes available</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Citation Practices</h2>
              <p className="mb-4">
                Our citation practices vary depending on the type of content:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Health and Medical Content:</strong> We provide specific citations for health and medical information when applicable</li>
                <li><strong>General Information:</strong> For widely accepted general practices, we may reference categories of sources rather than specific studies</li>
                <li><strong>In-Article Citations:</strong> Important claims, especially health-related ones, are supported with source references within articles</li>
                <li><strong>Source Links:</strong> We link to original sources when they are publicly available and accessible</li>
                <li><strong>Transparency:</strong> We acknowledge when information is based on general consensus versus specific research</li>
              </ul>
              <p className="mb-4">
                Specific citations are provided within individual articles where applicable. If you're looking for sources for a particular article or topic, please check the article itself or contact us for more information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Limitations and Considerations</h2>
              <p className="mb-4">
                While we strive to provide accurate, evidence-based information, it's important to understand:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Evolving Knowledge:</strong> Pet care knowledge evolves over time, and new research may change best practices</li>
                <li><strong>General Information:</strong> Our content provides general guidance and may not apply to every individual pet</li>
                <li><strong>Not a Substitute:</strong> Our educational content is not a substitute for professional veterinary advice</li>
                <li><strong>Individual Variation:</strong> What works for one pet may not work for another due to individual differences</li>
                <li><strong>Regular Updates:</strong> We regularly review and update content, but some information may become outdated between updates</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Requesting Source Information</h2>
              <p className="mb-4">
                If you have questions about sources for specific content or would like more information about our sourcing practices, please contact us through our <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact Us</Link> page. We're happy to provide additional information about our sources when requested.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Our Commitment</h2>
              <p className="mb-4">
                We are committed to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Providing accurate, evidence-based educational information</li>
                <li>Using reputable, authoritative sources</li>
                <li>Being transparent about our sourcing practices</li>
                <li>Regularly reviewing and updating content as new information becomes available</li>
                <li>Correcting errors promptly when they are identified</li>
                <li>Maintaining editorial independence and objectivity</li>
            </ul>
            </section>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-8">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">Important Reminder:</p>
              <p className="text-gray-700 dark:text-gray-300">
                While we strive to provide accurate, evidence-based information, our content is educational and not a substitute for professional veterinary advice. Always consult with your veterinarian for personalized guidance about your pet's specific needs and health concerns.
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
    </>
  );
}
