import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - Trusted Pet Care Information & Education | Nearby Pet Care',
  description: 'Learn about Nearby Pet Care, an independent platform providing trusted pet care tips, guides, and information. We help pet owners learn how to care for dogs, cats, and pets with practical, evidence-based advice.',
  keywords: ['about pet care', 'pet care education', 'pet care information', 'pet care tips', 'how to care for pets', 'pet care guide', 'trusted pet care advice', 'pet care resources', 'pet care platform', 'pet owner education'],
  authors: [{ name: 'Nearby Pet Care Team' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  metadataBase: new URL('https://nearbypetcare.com'),
  openGraph: {
    title: 'About Us - Independent Educational Pet Care Platform | Nearby Pet Care',
    description: 'An independent educational platform providing practical guidance on pet nutrition, health, grooming, training, and overall wellbeing.',
    type: 'website',
    url: 'https://nearbypetcare.com/about',
    siteName: 'Nearby Pet Care',
    locale: 'en_US',
    alternateLocale: ['en_GB', 'en_CA', 'en_AU'],
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About Nearby Pet Care - Independent Educational Pet Care Platform',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Independent Educational Pet Care Platform | Nearby Pet Care',
    description: 'An independent educational platform providing practical guidance on pet nutrition, health, grooming, training, and overall wellbeing.',
    images: ['https://nearbypetcare.com/og-image.png'],
    creator: '@nearbypetcare',
    site: '@nearbypetcare',
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/about',
    languages: {
      'en-US': 'https://nearbypetcare.com/about',
      'en-GB': 'https://nearbypetcare.com/about',
      'en-CA': 'https://nearbypetcare.com/about',
      'en-AU': 'https://nearbypetcare.com/about',
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
    'bingbot': {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    'article:author': 'Nearby Pet Care Team',
    'og:updated_time': new Date().toISOString(),
  },
};

export default function AboutPage() {
  const baseUrl = 'https://nearbypetcare.com';
  const currentDate = new Date().toISOString();

  // Enhanced AboutPage Structured Data (Schema.org)
  const aboutStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${baseUrl}/about`,
    name: 'About Nearby Pet Care',
    headline: 'About Us - Trusted Pet Care Information & Education',
    description: 'Learn about Nearby Pet Care, an independent platform providing trusted pet care tips, guides, and information. We help pet owners learn how to care for dogs, cats, and pets with practical, evidence-based advice.',
    url: `${baseUrl}/about`,
    inLanguage: 'en-US',
    datePublished: '2024-01-01T00:00:00Z',
    dateModified: currentDate,
    mainEntity: {
      '@type': 'Organization',
      '@id': `${baseUrl}#organization`,
      name: 'Nearby Pet Care',
      legalName: 'Nearby Pet Care',
      description: 'An independent educational platform dedicated to helping pet owners make informed decisions about everyday pet care through practical, step-by-step guidance.',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
        width: 200,
        height: 48,
      },
      image: {
        '@type': 'ImageObject',
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@nearbypetcare.com',
        areaServed: ['US', 'CA', 'GB', 'AU'],
        availableLanguage: ['English'],
      },
      sameAs: [
        'https://www.facebook.com/nearbypetcare',
        'https://www.instagram.com/nearbypetcare',
        'https://www.youtube.com/@nearbypetcare',
        'https://www.linkedin.com/company/nearbypetcare',
      ],
      foundingDate: '2024',
      knowsAbout: [
        'Pet Care',
        'Pet Nutrition',
        'Pet Health',
        'Pet Grooming',
        'Pet Training',
        'Pet Safety',
        'Pet Adoption',
      ],
    },
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${baseUrl}#website`,
      name: 'Nearby Pet Care',
      url: baseUrl,
    },
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
          name: 'About',
          item: `${baseUrl}/about`,
        },
      ],
    },
  };

  // Enhanced WebPage Structured Data
  const webPageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${baseUrl}/about#webpage`,
    name: 'About Us - Nearby Pet Care',
    description: 'Learn about Nearby Pet Care, an independent platform providing trusted pet care tips, guides, and information.',
    url: `${baseUrl}/about`,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${baseUrl}#website`,
      name: 'Nearby Pet Care',
      url: baseUrl,
    },
    about: {
      '@type': 'Organization',
      '@id': `${baseUrl}#organization`,
      name: 'Nearby Pet Care',
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${baseUrl}/og-image.png`,
      width: 1200,
      height: 630,
    },
    datePublished: '2024-01-01T00:00:00Z',
    dateModified: currentDate,
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
          name: 'About',
          item: `${baseUrl}/about`,
        },
      ],
    },
  };

  // Breadcrumb Structured Data (separate for better compatibility)
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
        name: 'About',
        item: `${baseUrl}/about`,
      },
    ],
  };

  // FAQ Structured Data for common questions
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Nearby Pet Care?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nearby Pet Care is an independent educational platform providing trusted pet care tips, guides, and information. We help pet owners learn how to care for dogs, cats, and pets with practical, evidence-based advice.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Nearby Pet Care affiliated with any pet care businesses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, we are completely independent. We do not sell pet food, run veterinary clinics, or represent any pet care business. Our only job is to help you understand pet care topics so you can make better decisions for your pets.',
        },
      },
      {
        '@type': 'Question',
        name: 'What kind of pet care information do you provide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide comprehensive guides covering pet nutrition, health, grooming, training, safety, and adoption. Our content includes step-by-step instructions, practical tips, and evidence-based advice that pet owners can easily understand and apply.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you ensure the quality of your pet care information?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All our content is based on widely accepted pet care practices and current understanding of animal health, nutrition, and behavior. We focus on providing practical, evidence-based guidance that helps pet owners make informed decisions.',
        },
      },
    ],
  };

  const values = [
    {
      title: 'Independence',
      description: 'We operate as an independent platform with no affiliations to businesses, clinics, or service providers. Our content is created solely to help pet owners make informed decisions.',
      icon: '🔍'
    },
    {
      title: 'Practical Guidance',
      description: 'We provide step-by-step instructions and practical advice that pet owners can easily understand and apply in their everyday pet care routines.',
      icon: '📋'
    },
    {
      title: 'Evidence-Based',
      description: 'All our content is based on widely accepted pet care practices and current understanding of animal health, nutrition, and behavior.',
      icon: '✅'
    },
    {
      title: 'Accessibility',
      description: 'We believe pet care information should be accessible to everyone. Our guides are written in clear, simple language that all pet owners can understand.',
      icon: '💡'
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors" role="main" aria-label="About Nearby Pet Care">
      {/* Structured Data Scripts - All schemas for maximum SEO coverage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutStructuredData),
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
        className="relative pb-16 sm:pb-20 md:pb-24 lg:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors"
        aria-labelledby="hero-heading"
      >
        {/* Decorative Background Elements - Optimized for performance */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" aria-hidden="true"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" aria-hidden="true"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl" aria-hidden="true"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10 pt-16 sm:pt-20 md:pt-24 lg:pt-28">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-white/10 backdrop-blur-md border border-blue-200/50 dark:border-white/20 rounded-full shadow-sm" role="status" aria-label="Platform type">
              <span className="text-2xl" aria-hidden="true">📚</span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">Independent Educational Platform</span>
            </div>

            {/* Main Heading - H1 for SEO */}
            <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Empowering Pet Owners
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Through Education
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 max-w-3xl mx-auto leading-relaxed font-medium">
              If you've ever searched for "how to care for a dog" or "pet care tips" and found yourself drowning in conflicting advice, you know exactly why we created Nearby Pet Care. We're an independent platform that cuts through the noise to give you practical, trustworthy pet care information you can actually use.
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
              Whether you're learning how to care for a cat for the first time or looking for advanced pet training techniques, our mission is simple: make pet care information accessible, understandable, and actionable for every pet owner.
            </p>

            {/* Key Points - Optimized for mobile touch targets (min 48x48px) */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12" role="list" aria-label="Key features">
              {[
                { icon: '📖', text: 'Educational Resources' },
                { icon: '🎯', text: 'Practical Guidance' },
                { icon: '🔍', text: 'Independent Information' }
              ].map((point, index) => (
                <div
                  key={index}
                  role="listitem"
                  className="inline-flex items-center gap-2 px-4 py-2 min-h-[48px] bg-white/70 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm"
                >
                  <span aria-hidden="true">{point.icon}</span>
                  <span>{point.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section - Semantic HTML for SEO */}
      <section 
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors"
        aria-labelledby="story-heading"
      >
        <div className="container mx-auto max-w-7xl">
          <article className="max-w-4xl mx-auto">
            <h2 id="story-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center transition-colors">
              Our Story
            </h2>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
              <p>
                Here's the thing: when you're searching for pet care advice online, you're probably looking for answers to real questions. "How do I know if my dog is getting the right nutrition?" "What's the best way to groom a cat?" "How can I train my puppy without losing my mind?" These are the kinds of questions pet owners ask every day, and they deserve clear, practical answers.
              </p>
              <p>
                That's where we come in. Nearby Pet Care was born from watching too many pet owners struggle to find reliable information. We saw people getting overwhelmed by conflicting advice, marketing messages disguised as pet care tips, and information that was either too basic or way too technical. So we decided to create something different: a place where you can find straightforward pet care information that actually helps you care for your pet better.
              </p>
              <p>
                <strong className="font-semibold">Here's what you should know:</strong> We're completely independent. We don't sell pet food, we don't run a veterinary clinic, and we don't represent any pet care business. Our only job is to help you understand pet care topics so you can make better decisions for your furry, feathered, or scaled family members. Think of us as your go-to resource for pet care tips and information—nothing more, nothing less.
              </p>
              <p>
                When pet owners have access to clear, practical pet care information, amazing things happen. They catch health issues earlier. They choose better pet food. They understand their pet's behavior better. They feel more confident as pet parents. That's why we create guides on everything from "how to care for a new puppy" to "senior pet care tips"—always written in plain language that makes sense, always based on what actually works.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Philosophy Section - Semantic HTML */}
      <section 
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors"
        aria-labelledby="philosophy-heading"
      >
        <div className="container mx-auto max-w-7xl">
          <article className="max-w-4xl mx-auto">
            <h2 id="philosophy-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center transition-colors">
              Our Philosophy
            </h2>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
              <p>
                We believe every pet owner—whether you're figuring out how to care for a dog for the first time or you've been a pet parent for decades—deserves access to information that actually helps. Your pet is family, and caring for them means making dozens of decisions: What food should I feed them? How often should I groom them? Is this behavior normal? These questions matter, and you deserve answers that make sense.
              </p>
              <p>
                That's why we keep things simple and independent. You won't find us pushing products or services. Instead, you'll find pet care tips and guides that are practical, based on widely accepted practices, and written in language you can actually understand. No veterinary jargon. No marketing fluff. Just clear information that helps you make better decisions for your pet.
              </p>
              <p>
                Our goal is to help you feel confident as a pet owner. Whether you're dealing with everyday pet care routines or learning about something new—like how to care for a senior pet or understanding pet nutrition basics—we want you to have the information you need. Every guide we create, every pet care tip we share, is designed with one thing in mind: helping you provide better care for your pet.
              </p>
              <p>
                Maybe you're a first-time pet owner searching for "how to care for a cat" and feeling overwhelmed. Maybe you're an experienced dog owner looking for advanced training techniques. Or maybe you're somewhere in between, just trying to figure out the best way to care for your pet. Wherever you are in your pet care journey, we're here to help with practical, trustworthy information that makes a real difference.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Values Section - Optimized grid for mobile-first */}
      <section 
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors"
        aria-labelledby="values-heading"
      >
        <div className="container mx-auto max-w-7xl">
          <h2 id="values-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 sm:mb-12 md:mb-16 text-center transition-colors">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" role="list" aria-label="Core values">
            {values.map((value, index) => (
              <article
                key={index}
                role="listitem"
                className="p-6 sm:p-8 bg-gradient-to-br from-gray-100/50 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl text-center transition-colors"
              >
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6" aria-hidden="true">{value.icon}</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 transition-colors leading-relaxed">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section - Semantic HTML */}
      <section 
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors"
        aria-labelledby="what-we-do-heading"
      >
        <div className="container mx-auto max-w-7xl">
          <article className="max-w-4xl mx-auto">
            <h2 id="what-we-do-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center transition-colors">
              What We Do
            </h2>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
              <p>
                <strong className="font-semibold">Let's be clear about what we do:</strong> We're an independent educational platform that provides pet care information and guides. That's it. We don't offer veterinary services, we don't sell pet products, and we don't represent any pet care business. Our job is simple: help you understand pet care topics so you can make informed decisions for your pet.
              </p>
              <p>
                What does that look like in practice? We create comprehensive pet care guides that cover everything from the basics—like "how to care for a new puppy" or "cat grooming basics"—to more advanced topics like understanding pet nutrition labels or recognizing early signs of health issues. Every guide includes step-by-step instructions, practical pet care tips, and real-world advice you can actually use. We take complex topics and break them down into simple, actionable steps because we know you're busy and you need information that works.
              </p>
              <p>
                We're always adding new content and updating existing guides based on the latest pet care research and best practices. Whether you need help with dog training tips, cat health information, pet nutrition advice, or anything else related to pet care, our goal is to be your trusted source for practical, reliable information. Think of us as your pet care library—always available, always helpful, always focused on what's best for your pet.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Community Focus Section - Semantic HTML */}
      <section 
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors"
        aria-labelledby="community-heading"
      >
        <div className="container mx-auto max-w-7xl">
          <article className="max-w-4xl mx-auto">
            <h2 id="community-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center transition-colors">
              Built for Pet Owners, By Pet Lovers
            </h2>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
              <p>
                Here's what drives everything we do: pet owners deserve better information. We know how much your pet means to you. We understand the joy they bring, the responsibility you feel, and the countless questions that come with pet ownership. That's why we've built a platform that gives you access to clear, practical pet care information—no strings attached, no hidden agendas.
              </p>
              <p>
                Whether you're a first-time pet owner searching for "how to care for a dog" or an experienced caregiver looking for advanced pet care tips, we're here to help. Our guides are designed to be practical and actionable because we know you want information you can use right away. From basic pet care routines to complex topics like pet nutrition and behavior, we break everything down into steps you can actually follow.
              </p>
              <p>
                Our mission hasn't changed since day one: help pet owners make better decisions through education. When you have access to clear, trustworthy pet care information, you can catch health issues earlier, choose better products, understand your pet's behavior, and ultimately provide better care. That's why every guide we create, every pet care tip we share, is designed to empower you with knowledge that makes a real difference in your pet's life.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* CTA Section - Optimized for mobile touch targets */}
      <section 
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors"
        aria-labelledby="cta-heading"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center p-8 sm:p-10 md:p-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl sm:rounded-3xl backdrop-blur-sm">
            <h2 id="cta-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">
              Start Learning Today
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 transition-colors leading-relaxed">
              Ready to learn how to care for your pet better? Explore our comprehensive pet care guides covering everything from pet nutrition and health to grooming and training. Whether you need dog care tips, cat care advice, or information on any aspect of pet ownership, we've got practical answers that work.
            </p>
            <nav className="flex flex-col sm:flex-row gap-4 justify-center" aria-label="Main navigation">
              <Link
                href="/pet-care-tips"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 min-h-[48px] flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Browse all pet care guides"
              >
                Browse All Guides
              </Link>
              <Link
                href="/blog"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 min-h-[48px] flex items-center justify-center bg-gray-100 dark:bg-white/10 backdrop-blur-sm text-gray-900 dark:text-white border border-gray-300 dark:border-white/20 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-200 dark:hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                aria-label="Read our blog articles"
              >
                Read Our Blog
              </Link>
            </nav>
          </div>
        </div>
      </section>
    </main>
  );
}
