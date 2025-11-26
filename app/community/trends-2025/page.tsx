import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import BlogSidebar from '@/components/BlogSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Pet Care Trends 2025: Latest Innovations & Practices | Nearby Pet Care',
  description:
    'Explore the latest pet care trends for 2025. Discover emerging products, services, and practices including personalized nutrition and smart technology.',
  keywords: [
    'pet care trends',
    'pet trends 2025',
    'pet industry trends',
    'pet care innovations',
    'pet technology 2025',
    'sustainable pet care',
    'holistic pet care',
    'pet wellness trends',
  ],
  pathname: '/community/trends-2025',
  type: 'article',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Pet Care Trends 2025 - Latest Innovations',
      type: 'image/png',
    },
  ],
});

export default function Trends2025Page() {
  const baseUrl = 'https://nearbypetcare.com';
  const pageUrl = `${baseUrl}/community/trends-2025`;
  const publishedTime = '2024-01-01T00:00:00Z';
  const modifiedTime = new Date().toISOString();

  // Breadcrumb Structured Data (defined first to avoid reference errors)
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
        name: 'Community',
        item: `${baseUrl}/community`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Trends 2025',
        item: pageUrl,
      },
    ],
  };

  // Article Structured Data
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${pageUrl}#article`,
    headline: 'Pet Care Trends 2025 - Latest Innovations & Practices',
    description: 'Explore the latest pet care trends for 2025. Discover emerging products, services, and practices in the pet care industry.',
    image: {
      '@type': 'ImageObject',
      url: `${baseUrl}/og-image.png`,
      width: 1200,
      height: 630,
      alt: 'Pet Care Trends 2025',
    },
    datePublished: publishedTime,
    dateModified: modifiedTime,
    author: {
      '@type': 'Person',
      '@id': `${baseUrl}/about#author`,
      name: 'Nearby Pet Care Team',
      url: `${baseUrl}/about`,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${baseUrl}#organization`,
      name: 'Nearby Pet Care',
      legalName: 'Nearby Pet Care',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
        width: 200,
        height: 48,
      },
      url: baseUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
    },
    articleSection: 'Community',
    keywords: 'pet care trends, pet industry trends, pet care innovations, 2025 trends',
    inLanguage: 'en-US',
    wordCount: 3200,
    timeRequired: 'PT20M',
    about: [
      {
        '@type': 'Thing',
        name: 'Pet Care Trends',
      },
      {
        '@type': 'Thing',
        name: 'Pet Industry',
      },
      {
        '@type': 'Thing',
        name: 'Pet Innovations',
      },
    ],
  };

  // WebPage Structured Data
  const webPageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    name: 'Pet Care Trends 2025',
    description: 'Explore the latest pet care trends for 2025. Discover emerging products, services, and practices in the pet care industry.',
    url: pageUrl,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${baseUrl}#website`,
      name: 'Nearby Pet Care',
      url: baseUrl,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${baseUrl}/og-image.png`,
      width: 1200,
      height: 630,
    },
    datePublished: publishedTime,
    dateModified: modifiedTime,
    breadcrumb: breadcrumbStructuredData,
    about: {
      '@type': 'Thing',
      name: 'Pet Care Trends',
    },
  };

  // FAQ Structured Data
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are the top pet care trends for 2025?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The top pet care trends for 2025 include personalized nutrition and meal plans, smart technology for pet wellness, sustainability and eco-conscious choices, holistic and natural care approaches, mental health and emotional wellbeing focus, and telemedicine and remote veterinary care.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is technology changing pet care in 2025?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Technology is revolutionizing pet care through smart collars that track activity and health, automatic feeders controlled via phone, pet cameras for remote monitoring, and data-driven insights that help detect health issues early. These tools help pet owners understand their pets better and provide proactive care.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I consider when evaluating new pet care trends?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'When evaluating new pet care trends, consider whether they genuinely improve your pet\'s quality of life, are backed by evidence or professional guidance, and align with your pet\'s specific needs. Always consult with your veterinarian before making significant changes to your pet\'s care routine.',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24" role="main" aria-label="Pet Care Trends 2025">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      
      {/* Hero Section - Optimized for Core Web Vitals */}
      <section 
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Decorative background elements - Optimized for performance */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl" aria-hidden="true"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl" aria-hidden="true"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Community', href: '/community' },
            { name: 'Trends 2025', href: '/community/trends-2025' },
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm" role="status" aria-label="Content type">
              <span className="text-2xl" aria-hidden="true">📈</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Trends</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6" aria-hidden="true">📈</div>
            
            {/* Title - H1 for SEO */}
            <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Care Trends 2025
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Discover the latest innovations shaping the pet care industry in 2025. From personalized nutrition to smart technology, explore what's new and meaningful for your pet's wellbeing.
            </p>
            
            {/* Key Points */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-10" role="list" aria-label="Key features">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/70 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm" role="listitem">
                <span aria-hidden="true">🍽️</span>
                <span>Personalized Nutrition</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/70 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm" role="listitem">
                <span aria-hidden="true">📱</span>
                <span>Smart Technology</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/70 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm" role="listitem">
                <span aria-hidden="true">🌱</span>
                <span>Sustainability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8" itemScope itemType="https://schema.org/Article">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              <div className="prose prose-lg dark:prose-invert max-w-none" itemProp="articleBody">
                <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  The pet care world is evolving faster than ever, and 2025 brings exciting innovations that are reshaping how we care for our companions. From personalized nutrition plans to smart technology that monitors your pet's health, this year's trends reflect a deeper understanding of what our pets truly need. Let's explore what's new, what's meaningful, and what might actually make a difference in your pet's life.
                </p>

                <section className="mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-6">Personalized Nutrition Takes Center Stage</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Gone are the days of one-size-fits-all pet food. In 2025, personalized nutrition is becoming the norm, not the exception. Companies are now offering meal plans tailored to your pet's breed, age, activity level, health conditions, and even genetic predispositions. It's like having a nutritionist create a custom meal plan, but for your furry friend.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    What makes this trend so powerful is the recognition that every pet is unique. A high-energy border collie has different nutritional needs than a laid-back senior cat. A pet with food sensitivities requires a different approach than one with a cast-iron stomach. Personalized nutrition means your pet gets exactly what they need, when they need it.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    The technology behind this is fascinating—some services use algorithms that consider dozens of factors to create optimal meal plans. Others offer subscription services that adjust portions and ingredients as your pet's needs change. It's convenience meets customization, and pet owners are loving the results they're seeing in their pets' energy levels, coat quality, and overall health.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-6">Smart Technology for Pet Wellness</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Technology is revolutionizing pet care in ways we couldn't have imagined just a few years ago. Smart collars now track activity levels, sleep patterns, and even detect potential health issues early. Automatic feeders can be controlled from your phone, ensuring your pet eats on schedule even when you're away. Pet cameras let you check in, talk to your pet, and even dispense treats remotely.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    But it's not just about gadgets—it's about data that helps you understand your pet better. These devices create a comprehensive picture of your pet's daily life, helping you spot changes that might indicate health problems. A sudden drop in activity could signal pain or illness. Changes in sleep patterns might indicate stress or discomfort. This kind of early detection can make all the difference.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    The most exciting development is how this technology is becoming more accessible and affordable. What was once a luxury is now within reach for many pet owners. And the best part? These tools don't replace the bond you have with your pet—they enhance it by giving you insights that help you care for them even better.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-6">Sustainability and Eco-Conscious Choices</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Pet owners are increasingly thinking about the environmental impact of their choices, and the industry is responding. In 2025, you'll find more eco-friendly options than ever before—from biodegradable poop bags to toys made from recycled materials, from sustainable pet food packaging to products that reduce waste.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    This trend goes beyond just "green" products. It's about a shift in mindset toward conscious consumption. Pet owners are asking: Where does this product come from? How is it made? What happens to it when we're done? Companies that can answer these questions well are winning over environmentally conscious pet parents.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    The good news is that sustainable doesn't mean sacrificing quality. Many eco-friendly products are actually better for your pet—natural materials, fewer chemicals, and simpler ingredients. It's a win-win situation where doing right by the planet also means doing right by your pet.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-6">Holistic and Natural Care Approaches</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    More pet owners are exploring holistic approaches to pet care, looking at the whole picture of their pet's wellbeing rather than just treating symptoms. This includes everything from acupuncture and massage therapy to herbal supplements and natural remedies. The focus is on prevention, balance, and supporting the body's natural healing abilities.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    What's important about this trend is that it's not about rejecting conventional veterinary medicine—it's about integrating complementary approaches. Many veterinarians now offer both traditional and holistic treatments, recognizing that different approaches work for different situations. A pet with chronic pain might benefit from both medication and acupuncture. A stressed pet might need both behavioral training and calming supplements.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    The key is working with qualified professionals who understand both approaches. Holistic doesn't mean unregulated or unproven—it means looking at your pet's health from multiple angles and choosing the best combination of treatments for their specific needs.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-6">Mental Health and Emotional Wellbeing</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Perhaps the most significant shift in 2025 is the recognition that pets have complex emotional lives and mental health needs. We're moving beyond just physical care to understanding and supporting our pets' psychological wellbeing. This includes recognizing signs of anxiety, depression, and stress, and taking proactive steps to address them.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Mental enrichment is becoming as important as physical exercise. Puzzle toys, training games, scent work, and interactive play aren't just fun—they're essential for keeping your pet's mind sharp and preventing behavioral issues. Pet owners are learning that a bored pet is often a destructive or anxious pet, and mental stimulation is the solution.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    There's also growing awareness of how our own stress and emotions affect our pets. They're incredibly attuned to our feelings, and creating a calm, positive environment benefits both of you. This trend recognizes the deep bond between pets and owners and how that relationship impacts both parties' wellbeing.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-6">Telemedicine and Remote Veterinary Care</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Virtual veterinary consultations have become mainstream, and they're here to stay. While they can't replace in-person exams for serious issues, they're incredibly useful for follow-up appointments, behavioral consultations, medication refills, and answering questions that don't require hands-on examination.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    This trend is particularly valuable for pet owners in rural areas, those with transportation challenges, or pets who get extremely stressed by vet visits. It's also great for quick questions that don't warrant a full office visit. Many vets now offer hybrid models—virtual consultations for appropriate cases, in-person visits when needed.
                  </p>
                </section>

                <section className="mb-10 bg-purple-50 dark:bg-purple-900/20 p-6 sm:p-8 rounded-xl">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Navigating Trends Wisely</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    With so many new trends emerging, it's important to approach them thoughtfully. Not every trend will be right for your pet, and not every new product lives up to its marketing. Ask questions, do your research, and most importantly, consult with your veterinarian before making significant changes to your pet's care routine.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The best trends are those that genuinely improve your pet's quality of life, not just those that are flashy or new. Focus on what matters: your pet's health, happiness, and wellbeing. If a trend aligns with those goals and is backed by evidence or professional guidance, it might be worth exploring. If it seems like a gimmick or makes promises that sound too good to be true, proceed with caution.
                  </p>
                </section>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <Link href="/community" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline transition-colors min-h-[44px]">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Community
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
