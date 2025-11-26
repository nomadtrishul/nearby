import type { Metadata } from 'next';
import { generateSEOMetadata, generateBreadcrumbStructuredData, generateWebPageStructuredData, generateFAQStructuredData } from '@/lib/seo-utils';
import NewYorkClient from './NewYorkClient';
import { allServiceCategories } from '@/lib/servicesData';
import { sampleBusinesses } from '@/lib/businessesData';
import { getBaseUrl } from '@/lib/site-config';

// Enhanced SEO metadata following latest Google, Bing, and AdSense guidelines (Nov 2025)
export const metadata: Metadata = generateSEOMetadata({
  title: 'Pet Care Services in New York - Find Trusted Pet Care Providers | Nearby Pet Care',
  description: 'Discover comprehensive pet care services in New York. Find pet sitting, boarding, grooming, training, and veterinary care. Connect with trusted professionals.',
  keywords: [
    'pet care services New York',
    'pet sitting New York',
    'dog walking New York',
    'pet grooming New York',
    'pet boarding New York',
    'veterinary care New York',
    'pet training New York',
    'mobile pet grooming New York',
    'pet daycare New York',
    'pet services NYC',
    'New York pet care',
    'NYC pet services',
    'pet care Manhattan',
    'pet care Brooklyn',
    'pet care Queens',
    'professional pet care New York',
    'trusted pet sitters NYC',
    'dog walkers New York',
    'cat care New York',
  ],
  pathname: '/new-york',
  type: 'website',
});

export default function NewYorkPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'New York', url: '/new-york' }
  ];

  const baseUrl = getBaseUrl();
  const pageUrl = `${baseUrl}/new-york`;

  // Breadcrumb structured data
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);

  // WebPage structured data
  const webpageStructuredData = generateWebPageStructuredData({
    name: 'Pet Care Services in New York',
    description: 'Comprehensive directory of pet care services in New York including pet sitting, boarding, grooming, training, veterinary care, and more.',
    url: '/new-york',
    breadcrumbs,
  });

  // City structured data
  const cityStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'City',
    name: 'New York',
    alternateName: ['NYC', 'New York City'],
    containedIn: {
      '@type': 'State',
      name: 'New York',
      containedIn: {
        '@type': 'Country',
        name: 'United States'
      }
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '40.7128',
      longitude: '-74.0060'
    }
  };

  // Service ItemList structured data - All available services
  const serviceItemList = allServiceCategories.flatMap((category, catIndex) =>
    category.services.map((service, svcIndex) => ({
      '@type': 'ListItem',
      position: catIndex * 100 + svcIndex + 1,
      item: {
        '@type': 'Service',
        name: service.name,
        serviceType: category.title,
        provider: {
          '@type': 'Organization',
          name: 'Nearby Pet Care',
          url: baseUrl
        },
        areaServed: {
          '@type': 'City',
          name: 'New York',
          containedIn: {
            '@type': 'State',
            name: 'New York'
          }
        },
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceUrl: `${pageUrl}?service=${encodeURIComponent(service.name)}`
        }
      }
    }))
  );

  const serviceListStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Pet Care Services Available in New York',
    description: 'Complete list of pet care services available in New York, including pet sitting, boarding, grooming, training, and veterinary care.',
    numberOfItems: serviceItemList.length,
    itemListElement: serviceItemList
  };

  // LocalBusiness Collection structured data
  const localBusinessCollectionStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Pet Care Services in New York',
    description: 'Find trusted pet care providers in New York. Comprehensive directory of pet sitting, boarding, grooming, training, and veterinary services.',
    url: pageUrl,
    about: {
      '@type': 'City',
      name: 'New York',
      containedIn: {
        '@type': 'State',
        name: 'New York'
      }
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: sampleBusinesses.length,
      itemListElement: sampleBusinesses.map((business, index) => {
        const businessItem: any = {
          '@type': 'LocalBusiness',
          '@id': `${pageUrl}#business-${business.id}`,
          name: business.name,
          description: business.description,
          areaServed: {
            '@type': 'City',
            name: 'New York'
          },
        };
        
        if (business.image) businessItem.image = business.image;
        if (business.phone) businessItem.telephone = business.phone;
        if (business.email) businessItem.email = business.email;
        if (business.website) businessItem.url = business.website;
        if (business.address) {
          businessItem.address = {
            '@type': 'PostalAddress',
            streetAddress: business.address.split(',')[0],
            addressLocality: 'New York',
            addressRegion: 'NY',
            addressCountry: 'US'
          };
        }
        if (business.priceRange) businessItem.priceRange = business.priceRange;
        if (business.rating && business.reviewCount) {
          businessItem.aggregateRating = {
            '@type': 'AggregateRating',
            ratingValue: business.rating.toString(),
            reviewCount: business.reviewCount.toString(),
            bestRating: '5',
            worstRating: '1'
          };
        }
        if (business.services && business.services.length > 0) {
          businessItem.hasOfferCatalog = {
            '@type': 'OfferCatalog',
            name: 'Pet Care Services',
            itemListElement: business.services.map((service, svcIndex) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: service
              }
            }))
          };
        }
        
        return {
          '@type': 'ListItem',
          position: index + 1,
          item: businessItem
        };
      })
    }
  };

  // FAQ structured data for common questions
  const faqs = [
    {
      question: 'What pet care services are available in New York?',
      answer: 'New York offers a comprehensive range of pet care services including pet sitting, boarding, dog walking, mobile grooming, training, veterinary care, exotic pet care, pet waste removal, and more. You can filter by city, service category, and specific services to find exactly what you need.'
    },
    {
      question: 'How do I find pet care services in New York?',
      answer: 'Use our search filters to select New York as your city, then choose a service category (like Pet Sitting or Grooming), and finally select a specific service. You\'ll see all available businesses that match your criteria with ratings, reviews, and contact information.'
    },
    {
      question: 'Are the pet care providers in New York verified?',
      answer: 'We work with trusted pet care professionals in New York. Each provider is listed with their ratings, reviews, and contact information so you can make informed decisions. We recommend contacting providers directly to verify credentials and discuss your pet\'s specific needs.'
    },
    {
      question: 'What areas of New York are covered?',
      answer: 'Our directory includes pet care services throughout New York, covering Manhattan, Brooklyn, Queens, the Bronx, and Staten Island. Use the location filter to find services in your specific neighborhood.'
    },
    {
      question: 'How much do pet care services cost in New York?',
      answer: 'Pet care service costs in New York vary depending on the type of service, duration, and provider. Prices are typically indicated with a price range ($, $$, $$$). Contact individual providers for specific pricing and to discuss your pet\'s needs.'
    },
    {
      question: 'Can I book pet care services online?',
      answer: 'While our directory helps you discover and compare pet care providers in New York, booking is typically done directly with each provider. Contact information including phone, email, and website links are provided for each business listing.'
    }
  ];

  const faqStructuredData = generateFAQStructuredData(faqs);

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      {/* Structured Data Scripts - Critical for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webpageStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cityStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceListStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessCollectionStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      <NewYorkClient breadcrumbs={breadcrumbs} />

      {/* Additional Information Section - Enhanced for SEO */}
      <section 
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors"
        aria-labelledby="why-choose-heading"
      >
        <div className="container mx-auto max-w-7xl">
          <header className="text-center mb-10 sm:mb-12">
            <h2 id="why-choose-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Pet Care Services in New York?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
              New York offers a diverse range of professional pet care services to meet all your pet's needs. From Manhattan to Brooklyn, Queens, and beyond, find trusted professionals who treat your pets like family.
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <article className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl">
              <div className="text-4xl mb-4" aria-hidden="true">🌟</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Professional Services
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Connect with experienced and certified pet care professionals who are dedicated to providing the best care for your pets. All providers are verified and rated by pet owners.
              </p>
            </article>
            <article className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl">
              <div className="text-4xl mb-4" aria-hidden="true">📍</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Convenient Locations
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Find pet care services throughout New York, from Manhattan to Brooklyn, Queens, the Bronx, and Staten Island. Services are available in your neighborhood.
              </p>
            </article>
            <article className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl">
              <div className="text-4xl mb-4" aria-hidden="true">💼</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Comprehensive Care
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Access a full range of services from basic pet sitting to specialized care for exotic pets and senior animals. Whatever your pet needs, we have you covered.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced for SEO and User Experience */}
      <section 
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors"
        aria-labelledby="faq-heading"
      >
        <div className="container mx-auto max-w-4xl">
          <header className="text-center mb-10 sm:mb-12">
            <h2 id="faq-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions About Pet Care in New York
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
              Find answers to common questions about finding and booking pet care services in New York.
            </p>
          </header>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <article key={index} className="p-6 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced for SEO */}
      <section 
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors"
        aria-labelledby="cta-heading"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center p-8 sm:p-10 md:p-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl sm:rounded-3xl backdrop-blur-sm">
            <h2 id="cta-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Are You a Pet Care Service Provider in New York?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Join our directory and connect with pet owners looking for trusted care services. List your business and reach more customers in New York. Get discovered by pet owners searching for quality pet care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="List your pet care service in New York"
              >
                List Your Service
              </a>
              <a
                href="/about"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gray-100 dark:bg-white/10 backdrop-blur-sm text-gray-900 dark:text-white border border-gray-300 dark:border-white/20 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-gray-200 dark:hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                aria-label="Learn more about Nearby Pet Care"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
