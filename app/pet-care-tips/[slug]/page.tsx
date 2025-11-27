import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getTipBySlug, getAllSlugs, getRecentTips, getAllCategories, getAllTags, getAllTips } from '@/lib/petTips';
import CopyButton from '@/components/CopyButton';
import TipsSidebar from '@/components/TipsSidebar';
import RelatedTips from '@/components/RelatedTips';
import { getBaseUrl, getDefaultOgImage, ensureAbsoluteUrl } from '@/lib/site-config';
import { 
  generateSEOMetadata, 
  generateHowToStructuredData,
  generateBreadcrumbStructuredData, 
  generateFAQStructuredData, 
  jsonLdScriptProps 
} from '@/lib/seo-utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tip = await getTipBySlug(slug);

  if (!tip) {
    return {
      title: 'Tip Not Found | Nearby Pet Care',
    };
  }

  const publishedTime = new Date(tip.date).toISOString();
  const modifiedTime = new Date(tip.dateModified || tip.date).toISOString();
  const tipImage = tip.image || '/og-image.png';

  return generateSEOMetadata({
    title: tip.title,
    description: tip.excerpt,
    keywords: tip.tags || [],
    pathname: `/pet-care-tips/${slug}`,
    type: 'article',
    image: tipImage,
    publishedTime,
    modifiedTime,
    author: tip.author || 'Nearby Pet Care Team',
    section: tip.category || 'General',
    tags: tip.tags || [],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Pet Care Tips', url: '/pet-care-tips' },
      { name: tip.title, url: `/pet-care-tips/${slug}` },
    ],
  });
}

export default async function PetTipPage({ params }: PageProps) {
  const { slug } = await params;
  const tip = await getTipBySlug(slug);

  if (!tip) {
    notFound();
  }

  // Get related tips (same category or shared tags)
  const allTips = getAllTips();
  const relatedTips = allTips
    .filter(t => t.slug !== slug && (t.category === tip.category || t.tags?.some(tag => tip.tags?.includes(tag))))
    .slice(0, 3);

  const publishedTime = new Date(tip.date).toISOString();
  const modifiedTime = new Date(tip.dateModified || tip.date).toISOString();
  const baseUrl = getBaseUrl();

  // Convert HTML to plain text for JSON-LD (Google requires plain text in structured data)
  const htmlToPlainText = (html: string): string => {
    return html
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .trim();
  };

  // Extract estimated cost if provided
  let estimatedCost: { currency: string; value: string } | undefined;
  if (tip.estimatedCost) {
    const costMatch = tip.estimatedCost.match(/\$?(\d+)/);
    if (costMatch) {
      estimatedCost = {
        currency: 'USD',
        value: costMatch[1],
      };
    }
  }

  // Generate HowTo structured data using centralized utility
  const howToStructuredData = generateHowToStructuredData({
    name: tip.title,
    description: tip.excerpt,
    image: tip.image || '/og-image.png',
    datePublished: publishedTime,
    dateModified: modifiedTime,
    author: tip.author || 'Nearby Pet Care Team',
    totalTime: tip.totalTime || `PT${tip.readingTime || 5}M`,
    ...(estimatedCost && { estimatedCost }),
    ...(tip.tools && tip.tools.length > 0 && { tools: tip.tools }),
    ...(tip.supplies && tip.supplies.length > 0 && { supplies: tip.supplies }),
    steps: tip.steps && tip.steps.length > 0
      ? tip.steps.map((step, index) => ({
          name: step.name,
          text: htmlToPlainText(step.text),
          url: step.url || `${baseUrl}/pet-care-tips/${slug}#step-${index + 1}`,
          ...(step.image && { image: step.image }),
          ...(step.duration && { duration: step.duration }),
        }))
      : [],
  });

  // Breadcrumbs for structured data
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Pet Care Tips', url: '/pet-care-tips' },
    { name: tip.title, url: `/pet-care-tips/${slug}` },
  ];
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);

  // FAQ Structured Data using centralized utility (if FAQs are provided)
  const faqStructuredData = tip.faq && tip.faq.length > 0 
    ? generateFAQStructuredData(tip.faq.map(faq => ({
        question: faq.question,
        answer: htmlToPlainText(faq.answer),
      })))
    : null;

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      {/* Structured Data Scripts */}
      <script {...jsonLdScriptProps(howToStructuredData)} />
      <script {...jsonLdScriptProps(breadcrumbStructuredData)} />
      {faqStructuredData && (
        <script {...jsonLdScriptProps(faqStructuredData)} />
      )}

      {/* Hero Section */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <nav className="mb-6 sm:mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center justify-center space-x-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-gray-400 dark:text-gray-600">/</li>
              <li>
                <Link href="/pet-care-tips" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Pet Care Tips
                </Link>
              </li>
              <li className="text-gray-400 dark:text-gray-600">/</li>
              <li className="text-gray-900 dark:text-white font-medium transition-colors" aria-current="page">
                {tip.title}
              </li>
            </ol>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
              {tip.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 transition-colors">
              {tip.excerpt}
            </p>
            
            {/* Meta Information */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              {tip.category && (
                <span className="px-2.5 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium transition-colors">
                  {tip.category}
                </span>
              )}
              {tip.difficulty && (
                <span className={`px-2.5 py-1 rounded-full font-medium ${
                  tip.difficulty === 'Beginner' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' :
                  tip.difficulty === 'Intermediate' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300' :
                  'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                }`}>
                  {tip.difficulty}
                </span>
              )}
              {tip.totalTime && (
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{tip.totalTime}</span>
                </div>
              )}
              {tip.readingTime && (
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>{tip.readingTime} min read</span>
                </div>
              )}
              {tip.estimatedCost && (
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{tip.estimatedCost}</span>
                </div>
              )}
              <div className="flex items-center">
                <CopyButton 
                  content={`${tip.title}\n\n${tip.excerpt}\n\nRead more: https://nearbypetcare.com/pet-care-tips/${tip.slug}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
            {/* Tools and Supplies */}
            {(tip.tools && tip.tools.length > 0) || (tip.supplies && tip.supplies.length > 0) ? (
              <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl">
                {tip.tools && tip.tools.length > 0 && (
                  <div className="mb-4">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Tools Needed
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {tip.tools.map((tool, index) => (
                        <li key={index}>{tool}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {tip.supplies && tip.supplies.length > 0 && (
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                      Supplies Needed
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {tip.supplies.map((supply, index) => (
                        <li key={index}>{supply}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : null}

            {/* Vet Note Warning */}
            {tip.vetNote && (
              <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded-lg">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-yellow-900 dark:text-yellow-200 mb-1">
                      When to See a Veterinarian
                    </h3>
                    <p className="text-sm sm:text-base text-yellow-800 dark:text-yellow-300">
                      {tip.vetNote}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Step-by-Step Instructions */}
            {tip.steps && tip.steps.length > 0 && (
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  Step-by-Step Instructions
                </h2>
                <ol className="space-y-4 sm:space-y-6">
                  {tip.steps.map((step, index) => (
                    <li key={index} id={`step-${index + 1}`} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-4 sm:p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            {step.name}
                          </h3>
                          {step.image && (
                            <div className="mb-3">
                              <Image
                                src={step.image}
                                alt={`Step ${index + 1}: ${step.name}`}
                                width={800}
                                height={450}
                                className="w-full h-auto rounded-lg"
                                loading="lazy"
                              />
                            </div>
                          )}
                          <div 
                            className="prose prose-sm max-w-none dark:prose-invert prose-p:text-gray-700 dark:prose-p:text-gray-300"
                            dangerouslySetInnerHTML={{ __html: step.text }}
                          />
                          {step.warning && (
                            <div className="mt-3 p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
                              <div className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                <p className="text-sm text-red-800 dark:text-red-300 font-medium">
                                  {step.warning}
                                </p>
                              </div>
                            </div>
                          )}
                          {step.duration && (
                            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                              <strong>Duration:</strong> {step.duration}
                            </p>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Article Image */}
            {tip.image && (
              <div className="mb-6 sm:mb-8">
                <Image
                  src={tip.image}
                  alt={tip.title}
                  width={1200}
                  height={630}
                  className="w-full h-auto rounded-lg sm:rounded-xl"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
            )}

            {/* FAQ Section */}
            {tip.faq && tip.faq.length > 0 && (
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {tip.faq.map((faq, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-4 sm:p-6">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {faq.question}
                      </h3>
                      <div 
                        className="prose prose-sm max-w-none dark:prose-invert prose-p:text-gray-700 dark:prose-p:text-gray-300"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Article Content */}
            <div
              className="prose prose-xs sm:prose-sm lg:prose-base max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-strong:text-gray-900 dark:prose-strong:text-white prose-code:text-gray-900 dark:prose-code:text-white prose-pre:bg-gray-900 dark:prose-pre:bg-gray-800 prose-img:rounded-lg prose-img:shadow-lg prose-ol:text-gray-700 dark:prose-ol:text-gray-300 prose-ul:text-gray-700 dark:prose-ul:text-gray-300"
              dangerouslySetInnerHTML={{ __html: tip.content }}
            />

            {/* Tags */}
            {tip.tags && tip.tags.length > 0 && (
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 dark:border-white/10">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-3">
                  Related Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tip.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs sm:text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Related Tips */}
            <RelatedTips 
              tips={relatedTips.map(t => ({
                slug: t.slug,
                title: t.title,
                excerpt: t.excerpt,
                category: t.category,
                date: t.date,
              }))}
              currentSlug={slug}
            />

            {/* Article Footer */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 dark:border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  <p className="mb-1">
                    <strong className="text-gray-900 dark:text-white">Published:</strong>{' '}
                    <time dateTime={tip.date}>
                      {new Date(tip.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </p>
                  {tip.dateModified && tip.dateModified !== tip.date && (
                    <p className="mb-1">
                      <strong className="text-gray-900 dark:text-white">Last Updated:</strong>{' '}
                      <time dateTime={tip.dateModified}>
                        {new Date(tip.dateModified).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </p>
                  )}
                  {tip.author && (
                    <p>
                      <strong className="text-gray-900 dark:text-white">Author:</strong> {tip.author}
                    </p>
                  )}
                </div>
                <Link
                  href="/pet-care-tips"
                  className="inline-flex items-center px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-xs sm:text-sm"
                >
                  <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Tips
                </Link>
              </div>
            </div>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <TipsSidebar
                recentTips={getRecentTips(5).map(t => ({
                  slug: t.slug,
                  title: t.title,
                  date: t.date,
                  formattedDate: new Date(t.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  }),
                  category: t.category,
                }))}
                categories={getAllCategories()}
                tags={getAllTags()}
              />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

