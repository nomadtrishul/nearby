import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AdoptionSidebar from '@/components/AdoptionSidebar';
import { 
  generateSEOMetadata,
  generateBlogPostingStructuredData,
  generateWebPageStructuredData,
  generateBreadcrumbStructuredData,
  jsonLdScriptProps
} from '@/lib/seo-utils';
import { getBaseUrl } from '@/lib/site-config';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Pet Adoption & Rescue Overview: Complete Guide',
  description: 'Complete overview of pet adoption and rescue. Learn why to adopt, what to expect, essential topics for successful adoption, and trust building.',
  keywords: ['pet adoption overview', 'rescue pets', 'adopting a pet', 'pet adoption guide', 'rescue pet guide', 'pet adoption process', 'adoption overview', 'rescue pet information'],
  pathname: '/pet-adoption/pillar',
  type: 'article',
  publishedTime: '2024-01-01T00:00:00Z',
  modifiedTime: new Date().toISOString(),
  author: 'Nearby Pet Care Team',
  section: 'Pet Adoption',
  tags: ['pet adoption', 'rescue pets', 'adoption overview'],
  image: '/og-image.png',
  locale: 'en-US',
  alternates: {
    languages: {
      'en-US': '/pet-adoption/pillar',
      'en-GB': '/pet-adoption/pillar',
      'en-CA': '/pet-adoption/pillar',
      'en-AU': '/pet-adoption/pillar',
    },
  },
});

export default function PetAdoptionPillarPage() {
  const baseUrl = getBaseUrl();
  const currentDate = new Date().toISOString();
  const publishedDate = '2024-01-01T00:00:00Z';

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Pet Adoption', url: '/pet-adoption' },
    { name: 'Overview', url: '/pet-adoption/pillar' },
  ];

  // Generate structured data using centralized utilities
  const blogPostingStructuredData = generateBlogPostingStructuredData({
    headline: 'Pet Adoption & Rescue Overview: Complete Guide',
    description: 'Complete overview of pet adoption and rescue. Learn why to adopt, what to expect, essential topics for successful adoption, understanding rescue pet behavior, and building trust.',
    url: '/pet-adoption/pillar',
    datePublished: publishedDate,
    dateModified: currentDate,
    author: 'Nearby Pet Care Team',
    tags: ['pet adoption overview', 'rescue pets', 'adopting a pet'],
  });

  const webPageStructuredData = generateWebPageStructuredData({
    name: 'Pet Adoption & Rescue Overview',
    description: 'Complete overview of pet adoption and rescue topics',
    url: '/pet-adoption/pillar',
    breadcrumbs,
  });

  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24" role="main" aria-label="Pet Adoption & Rescue Overview">
      {/* Structured Data Scripts - Using centralized utilities */}
      <script {...jsonLdScriptProps(blogPostingStructuredData)} />
      <script {...jsonLdScriptProps(webPageStructuredData)} />
      <script {...jsonLdScriptProps(breadcrumbStructuredData)} />
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden" aria-label="Hero Section">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Pet Adoption', href: '/pet-adoption' },
            { name: 'Overview', href: '/pet-adoption/pillar' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">❤️</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Adoption & Rescue</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">❤️</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Adoption & Rescue
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Adopting a rescue pet is one of the most meaningful decisions you can make. It's a journey that saves lives, transforms families, and creates bonds that last a lifetime. This comprehensive guide will walk you through every step of the adoption process.
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📋</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Adoption Checklist</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏡</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Home Preparation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔄</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Transition Guide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8" itemScope itemType="https://schema.org/Article">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
          <div className="prose prose-lg dark:prose-invert max-w-none">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-5">Why Adopt? The Impact of Your Decision</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              When you adopt a pet, you're doing more than just bringing home a companion—you're giving a second chance to an animal who needs one. Millions of pets enter shelters every year, and while many find homes, too many don't. By choosing adoption, you're directly saving a life and making room for another animal in need.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              But the benefits go both ways. Rescue pets often show incredible gratitude and loyalty. They bring unique personalities, resilience, and a special kind of love that comes from knowing they've been chosen. Many adopters say their rescue pets have changed their lives in ways they never expected.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-5">What to Expect: The Adoption Journey</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              The adoption process varies by organization, but understanding the general flow helps you prepare. Most adoptions involve an application, a meet-and-greet, a home check (in some cases), and an adoption fee. The process might seem lengthy, but it's designed to ensure the best match for both you and the pet.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              After adoption, there's an adjustment period. Some pets settle in immediately, while others need weeks or months to fully feel at home. This is normal and expected. The key is patience, consistency, and understanding that every pet has their own timeline.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-5">Essential Topics for Successful Adoption</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Successful adoption isn't just about finding the right pet—it's about being prepared for the journey ahead. Here are the key areas you'll need to understand:
            </p>

            <div className="bg-blue-50 dark:bg-gray-800/50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                <Link href="/pet-adoption/adoption-checklist" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Adoption Checklist →
                </Link>
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Before you even start looking, there's important preparation to do. Our comprehensive checklist covers everything from lifestyle assessment and financial planning to what to bring on adoption day. Being prepared before you meet your new pet makes the entire process smoother and sets you up for success.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-gray-800/50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                <Link href="/pet-adoption/preparing-home" className="hover:text-green-600 dark:hover:text-green-400">
                  Preparing Your Home →
                </Link>
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Your home needs to be ready before your pet arrives. This means gathering essential supplies, pet-proofing for safety, and creating a welcoming environment. From food bowls to safe spaces, we'll walk you through everything you need to have ready. A well-prepared home reduces stress for both you and your new pet and helps prevent accidents and behavioral issues.
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-gray-800/50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                <Link href="/pet-adoption/transitioning-a-rescue" className="hover:text-purple-600 dark:hover:text-purple-400">
                  Transitioning a Rescue Pet →
                </Link>
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The first days, weeks, and months are crucial for building trust and helping your rescue pet feel at home. This guide covers building trust, establishing routines, handling common challenges, and understanding the adjustment timeline. Learn how to read your pet's body language, respond to their needs, and create a foundation for a lifetime relationship.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-5">Understanding Rescue Pet Behavior</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Rescue pets often come with unknown histories. They may have experienced trauma, neglect, or simply the stress of being in a shelter environment. Understanding this helps you approach their behavior with empathy and patience.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Many rescue pets are initially fearful, anxious, or withdrawn. This is normal and usually improves with time, patience, and positive experiences. Some may have behavioral issues that need addressing, while others might be perfectly well-adjusted. The key is to meet your pet where they are, not where you expect them to be.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Learning to read your pet's body language is essential. Signs of stress, fear, or discomfort are often subtle, but recognizing them helps you respond appropriately and build trust. Positive reinforcement, consistency, and respect for boundaries are the foundations of helping a rescue pet feel safe and secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-5">Building Trust: The Foundation of Your Relationship</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Trust doesn't happen overnight, especially for pets who may have been let down by humans before. Building trust requires patience, consistency, and respect for your pet's boundaries. It means letting them come to you, not forcing interactions. It means being predictable and reliable in your actions and routines.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Every positive interaction builds trust. Every time you respect their need for space, every time you provide food and care consistently, every time you respond to their signals appropriately—you're building a foundation of trust that will last a lifetime.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-5">Common Challenges and Solutions</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Every adoption journey is unique, but there are some common challenges you might encounter:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-3">
              <li><strong>Fear and anxiety:</strong> Many rescue pets are initially fearful. This usually improves with time, positive experiences, and patience. Severe cases may benefit from professional help or medication.</li>
              <li><strong>House-training issues:</strong> Even previously house-trained pets may have accidents in a new environment. Consistent routines and positive reinforcement usually resolve this.</li>
              <li><strong>Destructive behavior:</strong> This can be due to anxiety, boredom, or lack of appropriate outlets. Providing enrichment, exercise, and appropriate alternatives helps.</li>
              <li><strong>Not eating:</strong> Many pets don't eat much in the first few days due to stress. This is usually temporary, but consult your vet if it persists.</li>
              <li><strong>Hiding or avoidance:</strong> Some pets need time to feel safe. Let them hide, provide what they need in their safe space, and let them come out on their own terms.</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Remember, most challenges are temporary and improve with time, patience, and the right approach. Don't hesitate to seek professional help if you're struggling or if behaviors are severe.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-5">The 3-3-3 Rule: A Realistic Timeline</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Many rescue organizations talk about the "3-3-3 rule" as a general guideline:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-3">
              <li><strong>3 days:</strong> Your pet is likely overwhelmed, may be hiding, and is still decompressing from the shelter.</li>
              <li><strong>3 weeks:</strong> Your pet is starting to settle in, learning routines, and beginning to show their personality.</li>
              <li><strong>3 months:</strong> Your pet is feeling at home, trusts you, and their true personality is emerging.</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              This is just a guideline—every pet is different. Some adjust faster, others need more time. The key is patience and meeting your pet where they are.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-5">When to Seek Professional Help</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              While patience and time solve many issues, sometimes professional help is needed. Don't hesitate to reach out if:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Your pet shows signs of aggression</li>
              <li>Fear or anxiety is severe and not improving</li>
              <li>Your pet isn't eating or drinking for more than 24-48 hours</li>
              <li>There are signs of illness</li>
              <li>Behavioral issues are getting worse</li>
              <li>You feel overwhelmed or unsure how to proceed</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Your veterinarian can rule out medical issues, and a certified animal behaviorist can help with behavioral challenges. Many shelters also offer post-adoption support.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 mt-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Your Journey Starts Here</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Adopting a rescue pet is a journey filled with challenges, rewards, and moments of pure joy. It requires preparation, patience, and commitment, but the relationship you'll build is worth every moment of effort. Whether you're just starting to consider adoption or you're ready to bring your new pet home, these guides will support you every step of the way.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                Remember, you're not just giving a pet a home—you're giving them a second chance at life, and they'll give you unconditional love in return. Take your time, do your research, and trust the process. Your perfect companion is waiting.
              </p>
            </div>

            <nav aria-label="Related Adoption Guides">
              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/pet-adoption/adoption-checklist" className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 rounded-lg hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" aria-label="Read Adoption Checklist guide">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Adoption Checklist</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Everything you need to prepare before adoption day</p>
                </Link>
                <Link href="/pet-adoption/preparing-home" className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-700 rounded-lg hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2" aria-label="Read Preparing Your Home guide">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Preparing Your Home</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Get your home ready for your new family member</p>
                </Link>
                <Link href="/pet-adoption/transitioning-a-rescue" className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-lg hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2" aria-label="Read Transitioning a Rescue guide">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Transitioning a Rescue</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Build trust and help your pet feel at home</p>
                </Link>
              </div>
            </nav>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-adoption" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded" aria-label="Back to Pet Adoption page">← Back to Pet Adoption</Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <AdoptionSidebar />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

