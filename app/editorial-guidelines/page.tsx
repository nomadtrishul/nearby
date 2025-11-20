import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

const baseUrl = 'https://nearbypetcare.com';
const pageUrl = `${baseUrl}/editorial-guidelines`;
const publishedTime = '2024-01-01T00:00:00Z';
const modifiedTime = new Date().toISOString();

export const metadata: Metadata = {
  title: 'Editorial Guidelines & Policy | Nearby Pet Care',
  description: 'Learn about our editorial guidelines, content standards, and sourcing policies. Discover how we ensure quality, accuracy, and trustworthiness in our educational pet care content through rigorous research and review processes.',
  keywords: ['editorial guidelines', 'content policy', 'editorial standards', 'content quality', 'pet care content', 'content standards', 'editorial process', 'content accuracy', 'pet care information', 'editorial policy'],
  authors: [{ name: 'Nearby Pet Care Team' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: 'Editorial Guidelines & Policy | Nearby Pet Care',
    description: 'Learn about our editorial guidelines, content standards, and sourcing policies. How we ensure quality and accuracy in our educational pet care content.',
    type: 'website',
    url: pageUrl,
    siteName: 'Nearby Pet Care',
    locale: 'en_US',
    alternateLocale: ['en_GB', 'en_CA', 'en_AU'],
    publishedTime,
    modifiedTime,
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Editorial Guidelines & Policy - Nearby Pet Care',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Editorial Guidelines & Policy | Nearby Pet Care',
    description: 'Learn about our editorial guidelines and content standards for educational pet care information.',
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
    bingbot: {
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

export default function EditorialGuidelinesPage() {
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
        name: 'Editorial Guidelines',
        item: pageUrl,
      },
    ],
  };

  // WebPage Structured Data
  const webPageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    name: 'Editorial Guidelines & Policy',
    description: 'Learn about our editorial guidelines, content standards, and sourcing policies. How we ensure quality and accuracy in our educational pet care content.',
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
      name: 'Editorial Guidelines',
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
          name: 'Editorial Guidelines',
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

  // FAQPage Structured Data
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are your editorial standards for content?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our editorial standards require all content to be accurate, clear, helpful, and complete. We base our information on widely accepted pet care practices, verify facts with reputable sources, write in clear and accessible language, and ensure content provides practical, actionable guidance. All content is reviewed by our editorial team before publication.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you ensure content accuracy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We ensure accuracy by sourcing information from reputable sources like veterinary medical associations, peer-reviewed journals, established pet care organizations, certified veterinary professionals, and government agencies. All content is fact-checked, reviewed for accuracy, and regularly updated to reflect current best practices. We clearly distinguish between established facts and emerging research.',
        },
      },
      {
        '@type': 'Question',
        name: 'What sources do you use for your content?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We prioritize information from veterinary medical associations, peer-reviewed veterinary journals, established pet care organizations, certified veterinary professionals, government agencies like the FDA and USDA, and academic institutions. We evaluate all sources for authority, credibility, recency, objectivity, and alignment with widely accepted practices.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often is your content updated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We regularly review and update our content to ensure it remains current and accurate. Content is updated when new information becomes available, when best practices change, or when errors are identified. We also monitor feedback and questions to identify areas for improvement. Significant updates are reflected in the modification date.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are you independent and objective in your content?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we maintain strict editorial independence. We do not accept payment for positive coverage, our content is not influenced by advertisers or sponsors, we clearly disclose any potential conflicts of interest, and we do not represent any business, clinic, or service provider. Our recommendations are based on educational value, not commercial relationships.',
        },
      },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <Breadcrumb items={[
              { name: 'Home', href: '/' },
              { name: 'Editorial Guidelines', href: '/editorial-guidelines' }
            ]} />
            
            <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-700/50 rounded-full shadow-sm">
                <span className="text-2xl">📝</span>
                <span className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">Editorial Standards</span>
              </div>
              
              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Editorial Guidelines & Policy
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                How we ensure quality, accuracy, and trustworthiness in everything we publish
              </p>
              
              {/* Stats or highlights */}
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50">
                  <span className="text-xl">✅</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Fact-Checked</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50">
                  <span className="text-xl">🔍</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Expert Reviewed</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50">
                  <span className="text-xl">🔄</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Regularly Updated</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8" itemScope itemType="https://schema.org/WebPage">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-6" itemProp="mainContentOfPage">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                At Nearby Pet Care, we take our responsibility to you seriously. Every article, guide, and piece of content we publish goes through a careful process to make sure it's accurate, helpful, and trustworthy. We know you're making decisions about your pet's care based on what you read here, and we don't take that lightly. This page explains exactly how we create content, what standards we hold ourselves to, and how we make sure you're getting information you can trust.
              </p>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">What We're All About</h2>
              <p className="mb-4 leading-relaxed">
                Here's our mission in plain terms: we want to help you become a better pet owner by giving you clear, practical information you can actually use. Whether you're trying to figure out what to feed your dog, how to groom your cat, or when to worry about a health symptom, we break things down in a way that makes sense. We cover everything from nutrition and health to grooming, training, behavior, and product selection—all with the goal of helping you make informed decisions about your pet's care.
              </p>
              <p className="mb-4 leading-relaxed">
                The important thing to know is that we're completely independent. We don't work for any pet food company, veterinary clinic, or pet product manufacturer. We're not trying to sell you anything or push you toward any particular service. We're just here to share what we've learned, help you understand pet care better, and give you the information you need to have better conversations with your veterinarian.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">The Standards We Hold Ourselves To</h2>
              <p className="mb-6 leading-relaxed">
                Before anything goes live on our site, it has to pass our editorial review. We're not just checking for typos—we're making sure every piece of content meets four key standards: accuracy, clarity, helpfulness, and completeness. Here's what each of those means in practice:
              </p>
              
              <div className="my-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-4 transition-colors">Accuracy: Getting It Right</h3>
                <p className="mb-3 leading-relaxed text-gray-700 dark:text-gray-300">
                  We fact-check everything. Every claim we make is backed up by reputable sources, and we only share information that's based on widely accepted pet care practices. When we write about something, we make sure it reflects the current understanding of animal health, nutrition, and behavior—not outdated information or unproven theories.
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>We verify facts with multiple reputable sources before publishing</li>
                  <li>We clearly distinguish between established facts and emerging research</li>
                  <li>When there are different viewpoints on a topic, we acknowledge that</li>
                  <li>We're honest when information is still evolving or when experts disagree</li>
                  <li>We don't make claims we can't back up with evidence</li>
                </ul>
              </div>

              <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500 dark:border-green-400 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-4 transition-colors">Clarity: Making It Understandable</h3>
                <p className="mb-3 leading-relaxed text-gray-700 dark:text-gray-300">
                  There's no point in having accurate information if you can't understand it. We write in plain English, avoiding unnecessary jargon and explaining technical terms when we have to use them. We organize information logically, use clear headings, and break down complex topics into manageable pieces.
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>We write like we're talking to a friend, not like we're writing a research paper</li>
                  <li>We explain technical terms in simple language</li>
                  <li>We use step-by-step instructions when they're helpful</li>
                  <li>We include examples and analogies to make things clearer</li>
                  <li>We structure content so it's easy to scan and find what you need</li>
                </ul>
              </div>

              <div className="my-8 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-4 transition-colors">Helpfulness: Actually Useful Information</h3>
                <p className="mb-3 leading-relaxed text-gray-700 dark:text-gray-300">
                  We don't just want to inform you—we want to help you. That means every piece of content should give you something you can actually use. Whether it's answering a specific question, solving a common problem, or helping you make a decision, our content should leave you feeling more capable and informed.
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>We focus on real questions pet owners actually have</li>
                  <li>We provide actionable advice you can implement</li>
                  <li>We help you understand the "why" behind recommendations, not just the "what"</li>
                  <li>We consider different experience levels—from first-time pet owners to experienced caregivers</li>
                  <li>We include context so you understand when and why advice applies</li>
                </ul>
              </div>

              <div className="my-8 p-6 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500 dark:border-amber-400 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-4 transition-colors">Completeness: Covering What Matters</h3>
                <p className="mb-3 leading-relaxed text-gray-700 dark:text-gray-300">
                  When we tackle a topic, we don't just scratch the surface. We cover it thoroughly, addressing common questions, potential concerns, and important caveats. We want you to have a complete picture, not just a partial one.
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>We address the questions you're likely to have, not just the obvious ones</li>
                  <li>We include important warnings and limitations where they matter</li>
                  <li>We link to related content so you can dive deeper if you want</li>
                  <li>We regularly review and update content to keep it current</li>
                  <li>We acknowledge when there's more to learn or when topics are complex</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">Where We Get Our Information</h2>
              <p className="mb-6 leading-relaxed">
                We don't just make things up or repeat what we've heard. Every piece of information we share comes from sources we've vetted carefully. We're committed to evidence-based content, which means we prioritize information from authoritative, reputable sources and we're always clear about the difference between established facts and opinions.
              </p>

              <div className="my-8 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">The Sources We Trust</h3>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  When we're researching a topic, we look to the experts first. Here's where we typically find reliable information:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-3 text-gray-700 dark:text-gray-300">
                  <li><strong>Veterinary medical associations</strong> and professional organizations—these groups set standards and guidelines based on the latest research</li>
                  <li><strong>Peer-reviewed veterinary journals</strong> and scientific research—studies that have been reviewed by other experts in the field</li>
                  <li><strong>Established pet care organizations</strong> and animal welfare groups with proven track records</li>
                  <li><strong>Certified veterinary professionals</strong> and animal behaviorists who are actively practicing</li>
                  <li><strong>Government agencies</strong> like the FDA and USDA that regulate pet food and animal health</li>
                  <li><strong>Academic institutions</strong> and veterinary schools that conduct research and train professionals</li>
                </ul>
              </div>

              <div className="my-8 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">How We Evaluate Sources</h3>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  Not all sources are created equal. Before we use information from anywhere, we ask ourselves:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-3 text-gray-700 dark:text-gray-300">
                  <li><strong>Is the author or organization credible?</strong> Do they have the expertise and authority to speak on this topic?</li>
                  <li><strong>Is the information current?</strong> Pet care knowledge evolves, so we prioritize recent information</li>
                  <li><strong>Is it objective?</strong> We look for sources without commercial bias or hidden agendas</li>
                  <li><strong>Does it align with widely accepted practices?</strong> We're cautious about information that contradicts what most experts agree on</li>
                  <li><strong>Is the research sound?</strong> For scientific studies, we consider the methodology and quality of the research</li>
                </ul>
              </div>

              <div className="my-8 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">How We Cite Our Sources</h3>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  We believe in transparency. When we make claims, especially about health and medical topics, we cite our sources. You'll find specific citations in individual articles when they're particularly important, and our <Link href="/sources" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Sources page</Link> gives you a general overview of where we get our information. When we can, we link directly to original sources so you can read them yourself.
                </p>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  Sometimes, information is based on general consensus among experts rather than a single study. When that's the case, we're upfront about it. We're not trying to hide anything—we want you to understand where our information comes from and how confident we are in it.
                </p>
              </div>

              <div className="my-8 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">When Experts Disagree</h3>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  Pet care isn't always black and white. Sometimes, even experts disagree about the best approach. When that happens, we don't pretend there's one clear answer. Instead, we:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-3 text-gray-700 dark:text-gray-300">
                  <li>Present different perspectives when they're all valid</li>
                  <li>Explain what the current consensus is and where there's debate</li>
                  <li>Encourage you to talk to your veterinarian, who can help you figure out what's right for your specific pet</li>
                  <li>Update our content as new research comes out and consensus shifts</li>
                </ul>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  We'd rather be honest about uncertainty than pretend we have all the answers. That's part of being trustworthy.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">How We Create Content</h2>
              <p className="mb-6 leading-relaxed">
                Creating good content isn't just about writing—it's about a process that ensures quality. Here's how every article, guide, and piece of content on our site comes together:
              </p>

              <div className="my-8 p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border-l-4 border-indigo-500 dark:border-indigo-400 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">Step 1: Research and Planning</h3>
                <p className="mb-3 leading-relaxed text-gray-700 dark:text-gray-300">
                  Before we write a single word, we do our homework. We start by identifying topics that pet owners actually need help with—the questions you're asking, the problems you're facing, the decisions you're trying to make. Then we dive into research, looking at current best practices, recent studies, and what experts are saying.
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>We choose topics based on real pet owner needs, not just what's trending</li>
                  <li>We research current best practices and widely accepted information</li>
                  <li>We figure out the key points and organize them in a way that makes sense</li>
                  <li>We think about who's reading—are they first-time pet owners or experienced caregivers?</li>
                </ul>
              </div>

              <div className="my-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">Step 2: Writing and Development</h3>
                <p className="mb-3 leading-relaxed text-gray-700 dark:text-gray-300">
                  This is where we turn research into readable, helpful content. We write in a way that's clear and conversational, using real examples and step-by-step instructions when they're helpful. We make sure important warnings and disclaimers are in the right places, and we keep our mission front and center: we're here to educate, not to sell or diagnose.
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>We write like we're talking to you, not at you</li>
                  <li>We use practical examples from real pet care situations</li>
                  <li>We include step-by-step instructions when they make things clearer</li>
                  <li>We place warnings and disclaimers where they're most relevant</li>
                  <li>We make sure everything aligns with our role as an educational platform</li>
                </ul>
              </div>

              <div className="my-8 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">Step 3: Review and Editing</h3>
                <p className="mb-3 leading-relaxed text-gray-700 dark:text-gray-300">
                  Nothing goes live without a thorough review. Our editorial team checks every piece of content for accuracy, clarity, and completeness. We verify facts, double-check sources, and make sure we're not making claims we can't back up. We also edit for grammar, style, and readability—because even the most accurate information isn't helpful if it's hard to read.
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>We fact-check everything before it goes live</li>
                  <li>We verify that sources actually support the claims we're making</li>
                  <li>We edit for clarity, flow, and readability</li>
                  <li>We make sure medical disclaimers are in the right places</li>
                  <li>We remove any unsubstantiated claims or vague statements</li>
                </ul>
              </div>

              <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500 dark:border-green-400 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">Step 4: Publication and Ongoing Updates</h3>
                <p className="mb-3 leading-relaxed text-gray-700 dark:text-gray-300">
                  Once content meets all our standards, we publish it. But our work doesn't stop there. We regularly go back and review our content to make sure it's still current and accurate. When we find errors, we fix them immediately. When new information comes out, we update our content. And we pay attention to your feedback and questions—they help us identify areas where we can do better.
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Content only goes live after it passes all our editorial checks</li>
                  <li>We regularly review older content to make sure it's still accurate</li>
                  <li>We fix errors as soon as we find them—no waiting, no excuses</li>
                  <li>We update content when new research or best practices emerge</li>
                  <li>We listen to your feedback and use it to improve our content</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">We Stay Independent</h2>
              <p className="mb-6 leading-relaxed">
                This is really important to us: we're completely independent, and we work hard to keep it that way. Our content isn't for sale, and our recommendations aren't influenced by who's paying us. Here's what that means in practice:
              </p>
              <div className="my-8 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
                <ul className="list-disc pl-6 mb-4 space-y-3 text-gray-700 dark:text-gray-300">
                  <li><strong>We don't take money for positive reviews.</strong> No company can pay us to say nice things about their product or service. If we recommend something, it's because we think it's genuinely helpful, not because we're getting paid.</li>
                  <li><strong>Advertisers don't influence our content.</strong> Having ads on our site doesn't mean we're going to write favorably about those advertisers. Our editorial decisions are completely separate from our advertising.</li>
                  <li><strong>We're transparent about conflicts of interest.</strong> If there's ever a situation where we might have a conflict of interest, we'll tell you about it. We believe in transparency.</li>
                  <li><strong>We don't represent anyone.</strong> We're not a marketing arm for any pet food company, veterinary clinic, or pet product manufacturer. We're just us—an independent educational platform.</li>
                  <li><strong>Our recommendations are based on value, not relationships.</strong> When we recommend something, it's because we think it has educational value or will genuinely help pet owners, not because we have a business relationship with the company.</li>
                  <li><strong>We give balanced information.</strong> Even when we're discussing products or services, we try to give you a balanced view—the pros, the cons, and what you should consider.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">How We Handle Health and Medical Content</h2>
              <p className="mb-6 leading-relaxed">
                When we write about pet health and medical topics, we're extra careful. We know this is sensitive information, and we want to make sure we're being responsible. Here's how we approach health-related content:
              </p>
              <div className="my-8 p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500 dark:border-red-400 transition-colors">
                <ul className="list-disc pl-6 mb-4 space-y-3 text-gray-700 dark:text-gray-300">
                  <li><strong>We're clear about what we are and aren't.</strong> We're an educational resource, not a substitute for veterinary care. We make sure you know that.</li>
                  <li><strong>We include disclaimers where they matter.</strong> You'll see reminders throughout our health content to consult your veterinarian. We're not trying to be annoying—we just want to make sure you know when to get professional help.</li>
                  <li><strong>We stick to general information.</strong> We share widely accepted practices and general guidance, not specific diagnoses or treatment plans for your individual pet.</li>
                  <li><strong>We don't diagnose or prescribe.</strong> We can't look at your pet and tell you what's wrong or what medication they need. That's your veterinarian's job.</li>
                  <li><strong>We emphasize when professional care is essential.</strong> Some situations absolutely require a veterinarian, and we make sure you know when that's the case.</li>
                  <li><strong>We help you recognize warning signs.</strong> We provide information about symptoms and situations that mean you should call your vet right away.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">We Make Mistakes—And We Fix Them</h2>
              <p className="mb-6 leading-relaxed">
                We're human, which means we're not perfect. Sometimes we make mistakes. Sometimes information becomes outdated. Sometimes new research changes what we thought we knew. When that happens, here's what we do:
              </p>
              <div className="my-8 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
                <ul className="list-disc pl-6 mb-4 space-y-3 text-gray-700 dark:text-gray-300">
                  <li><strong>We fix errors immediately.</strong> When we find a mistake, we don't wait. We fix it right away, because inaccurate information can be harmful.</li>
                  <li><strong>We keep content current.</strong> We regularly review our articles and guides to make sure they still reflect current best practices. Pet care knowledge evolves, and we evolve with it.</li>
                  <li><strong>We're transparent about significant changes.</strong> If we make a major correction or update that changes the meaning of our content, we'll acknowledge it when appropriate.</li>
                  <li><strong>We want to hear from you.</strong> If you spot an error, have a question, or think something needs updating, please tell us. Your feedback makes our content better.</li>
                  <li><strong>We review content regularly.</strong> We don't just publish and forget. We go back and check our content periodically to make sure it's still accurate and relevant.</li>
                </ul>
                <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300 mt-6">
                  If you notice something that seems wrong, outdated, or unclear, please reach out through our <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Contact Us</Link> page. We take your feedback seriously, and we appreciate you helping us maintain the quality of our content.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">User Comments and Feedback</h2>
              <p className="mb-6 leading-relaxed">
                If we allow comments, reviews, or other user-generated content on our site, we want to make sure it meets our standards. Here's how we handle it:
              </p>
              <div className="my-8 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
                <ul className="list-disc pl-6 mb-4 space-y-3 text-gray-700 dark:text-gray-300">
                  <li><strong>We moderate everything.</strong> We review user-generated content to make sure it's accurate, helpful, and appropriate</li>
                  <li><strong>We remove harmful content.</strong> If something is inaccurate, potentially harmful, or violates our terms, we'll remove it</li>
                  <li><strong>We make it clear what's ours and what's yours.</strong> We clearly distinguish between our editorial content and user-generated content, so you know what's coming from us and what's coming from other readers</li>
                  <li><strong>We don't endorse user opinions.</strong> Just because someone comments on our site doesn't mean we agree with them or endorse their views</li>
                  <li><strong>We reserve the right to moderate.</strong> We can edit or remove content that doesn't meet our community standards</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">Questions or Concerns?</h2>
              <p className="mb-6 leading-relaxed">
                We want to hear from you. If you have questions about our editorial guidelines, concerns about our content, or suggestions for how we can do better, please reach out through our <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Contact Us</Link> page. Your feedback helps us maintain the quality and trustworthiness of our content, and we're always looking for ways to improve.
              </p>
              <p className="mb-4 leading-relaxed">
                We're committed to maintaining the highest standards for our educational content, and that commitment includes being open to feedback, willing to correct mistakes, and dedicated to continuous improvement. Thank you for trusting us with your pet care questions—we don't take that trust lightly.
              </p>
            </section>
          </div>
        </div>
      </article>
    </main>
    </>
  );
}
