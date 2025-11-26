import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import BlogSidebar from '@/components/BlogSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Latest Pet Care Research: Evidence-Based Information | Nearby Pet Care',
  description:
    'Stay updated with the latest pet care research and scientific findings. Evidence-based information about pet health, nutrition, and wellness.',
  keywords: [
    'pet care research',
    'pet health research',
    'veterinary research',
    'pet science',
    'pet nutrition research',
    'pet behavior research',
    'evidence-based pet care',
    'pet wellness research',
  ],
  pathname: '/community/latest-research',
  type: 'article',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Latest Pet Care Research - Evidence-Based Information',
      type: 'image/png',
    },
  ],
});

export default function LatestResearchPage() {
  const baseUrl = 'https://nearbypetcare.com';
  const pageUrl = `${baseUrl}/community/latest-research`;
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
        name: 'Latest Research',
        item: pageUrl,
      },
    ],
  };

  // Article Structured Data
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${pageUrl}#article`,
    headline: 'Latest Pet Care Research - Evidence-Based Information',
    description: 'Stay updated with the latest pet care research and scientific findings. Evidence-based information about pet health, nutrition, behavior, and wellness.',
    image: {
      '@type': 'ImageObject',
      url: `${baseUrl}/og-image.png`,
      width: 1200,
      height: 630,
      alt: 'Latest Pet Care Research',
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
    keywords: 'pet care research, veterinary research, pet science, evidence-based pet care',
    inLanguage: 'en-US',
    wordCount: 2800,
    timeRequired: 'PT18M',
    about: [
      {
        '@type': 'Thing',
        name: 'Pet Care Research',
      },
      {
        '@type': 'Thing',
        name: 'Veterinary Science',
      },
      {
        '@type': 'Thing',
        name: 'Pet Health',
      },
    ],
  };

  // WebPage Structured Data
  const webPageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    name: 'Latest Pet Care Research',
    description: 'Stay updated with the latest pet care research and scientific findings. Evidence-based information about pet health and wellness.',
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
      name: 'Pet Care Research',
    },
  };

  // FAQ Structured Data
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why is pet care research important for pet owners?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pet care research helps pet owners make informed decisions about their pets\' health and wellbeing. Scientific studies reveal what truly works, what might be harmful, and what could make a real difference in your pet\'s quality of life. Staying informed means you\'re giving your pet the benefit of the latest knowledge.',
        },
      },
      {
        '@type': 'Question',
        name: 'What research areas are covered in pet care?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pet care research covers multiple areas including pet nutrition and diet, behavioral studies and mental health, disease prevention and treatment advances, and longevity and wellness research. These studies help us understand how to better care for our pets.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you translate research findings for pet owners?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We take complex scientific studies and break them down into clear, practical insights. We evaluate the methodology, consider sample sizes, and assess whether findings are applicable to real-world situations. We connect the dots between scientific discovery and practical pet care.',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24" role="main" aria-label="Latest Pet Care Research">
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
            { name: 'Latest Research', href: '/community/latest-research' },
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm" role="status" aria-label="Content type">
              <span className="text-2xl" aria-hidden="true">🔬</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Research</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6" aria-hidden="true">🔬</div>
            
            {/* Title - H1 for SEO */}
            <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Latest Pet Care Research
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Stay informed with the latest pet care research and scientific findings. We translate complex studies into practical, actionable information to help you make better decisions for your pet's health and wellbeing.
            </p>
            
            {/* Key Points */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-10" role="list" aria-label="Key features">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/70 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm" role="listitem">
                <span aria-hidden="true">📊</span>
                <span>Evidence-Based</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/70 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm" role="listitem">
                <span aria-hidden="true">🔍</span>
                <span>Scientific Studies</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/70 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm" role="listitem">
                <span aria-hidden="true">💡</span>
                <span>Practical Insights</span>
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
                  The world of pet care is constantly evolving, with researchers uncovering new insights about our furry companions every day. Here, we dive into the latest scientific discoveries that can help you make better decisions for your pet's health and wellbeing. We translate complex research into practical, actionable information you can actually use.
                </p>

                <section className="mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-6">Why Research Matters for Your Pet</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Scientific research isn't just for veterinarians and academics—it's for every pet owner who wants to give their companion the best possible life. When researchers study thousands of pets over years, they discover patterns and insights that can transform how we care for our animals. These findings help us understand what truly works, what might be harmful, and what could make a real difference in your pet's quality of life.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Think about it: just a decade ago, we knew far less about pet nutrition, behavior, and preventive care. Today, research has revealed the importance of early socialization, the role of gut health in overall wellness, and how mental stimulation can extend your pet's healthy years. Staying informed means you're giving your pet the benefit of the latest knowledge.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-6">Key Research Areas We Follow</h2>
                  
                  <div className="mb-8">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Pet Nutrition and Diet Research</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      Nutrition science for pets has exploded in recent years. Researchers are now studying how different proteins affect digestion, the role of probiotics in gut health, and how meal timing impacts metabolism. Recent studies have shown that the quality of ingredients matters more than we once thought, and that one-size-fits-all diets might not be optimal for every pet.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      What this means for you: Understanding the latest nutrition research helps you choose foods that truly support your pet's health, not just fill their bowl. We break down studies on ingredient quality, feeding schedules, and how to read pet food labels with a critical eye.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Behavioral Studies and Mental Health</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      Pet behavior research has revealed that our companions are far more complex than we once understood. Studies now explore how early experiences shape behavior, the connection between physical health and mental wellbeing, and how environmental enrichment can prevent behavioral issues before they start.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      Researchers are finding that mental stimulation is just as important as physical exercise. Puzzle toys, training sessions, and social interaction aren't just fun—they're essential for preventing anxiety, depression, and destructive behaviors. The latest research shows that a mentally engaged pet is a happier, healthier pet.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Disease Prevention and Treatment Advances</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      Veterinary medicine is advancing rapidly, with new treatments and preventive strategies emerging regularly. Research is uncovering better ways to detect diseases early, more effective treatment protocols, and innovative approaches to managing chronic conditions. From cancer treatments to pain management, the field is constantly improving.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      What's particularly exciting is the focus on prevention. Studies are showing how regular check-ups, appropriate vaccinations, and lifestyle choices can significantly reduce the risk of serious health issues. Early detection through routine screening is becoming more sophisticated, giving pets better outcomes when problems do arise.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Longevity and Wellness Research</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      How can we help our pets live longer, healthier lives? This question drives much of the current research in pet care. Scientists are studying everything from the genetics of aging to the impact of lifestyle factors on lifespan. The goal isn't just adding years—it's adding quality years filled with vitality and joy.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      Recent findings suggest that factors like maintaining a healthy weight, providing mental stimulation, managing stress, and building strong social bonds can all contribute to longevity. Researchers are also exploring how early life experiences and preventive care in younger years set the foundation for healthy aging.
                    </p>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-6">How We Translate Research for You</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Scientific papers can be dense and filled with jargon. Our goal is to take these complex studies and break them down into clear, practical insights. We look at the methodology, consider the sample sizes, and evaluate whether the findings are applicable to your situation. Not all research is created equal, and we help you understand what's truly meaningful.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    When we share research findings, we always consider: Does this apply to your pet? What are the practical implications? Are there any limitations to the study? How does this fit with what we already know? We connect the dots between scientific discovery and real-world pet care.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-6">Staying Current in a Changing Field</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    The pet care landscape changes quickly. What was considered best practice five years ago might be outdated today. That's why we regularly review new studies from leading veterinary journals, research institutions, and professional organizations. We stay connected to the scientific community so you don't have to.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Our commitment is to bring you evidence-based information that you can trust. We're not here to promote trends or fads—we're here to share what the science actually says. When research is preliminary or conflicting, we'll tell you that too. Transparency and accuracy matter when it comes to your pet's health.
                  </p>
                </section>

                <section className="mb-10 bg-blue-50 dark:bg-blue-900/20 p-6 sm:p-8 rounded-xl">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Remember: Research Informs, But Your Vet Decides</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    While research provides valuable insights, every pet is unique. What works in a study with hundreds of animals might not be right for your individual companion. Always discuss research findings with your veterinarian, who knows your pet's specific health history, breed characteristics, and current needs.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Think of research as one piece of the puzzle. Your vet's expertise, your pet's individual needs, and your own observations all come together to create the best care plan. Research empowers you to have informed conversations with your vet, but it doesn't replace professional veterinary advice.
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
