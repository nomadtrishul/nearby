import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Pet Care Guide: How to Care for Dogs, Cats & Pets | Nearby Pet Care',
  description: 'Learn how to care for a dog, cat, or any pet with our practical pet care tips and guides. Expert advice on pet nutrition, health, grooming, training, and behavior. Trusted pet care information for pet owners.',
  keywords: ['how to care for a dog', 'how to care for a cat', 'pet care tips', 'pet care guide', 'dog care tips', 'cat care tips', 'pet nutrition', 'pet health', 'dog grooming', 'cat grooming', 'pet training', 'dog training tips', 'pet care advice', 'pet care information', 'how to care for pets'],
  openGraph: {
    title: 'Pet Care Guide: How to Care for Dogs, Cats & Pets | Nearby Pet Care',
    description: 'Learn how to care for your pet with practical pet care tips and guides. Expert advice on pet nutrition, health, grooming, and training from trusted pet care resources.',
    type: 'website',
    url: 'https://nearbypetcare.com',
    siteName: 'Nearby Pet Care',
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nearby Pet Care - Educational Pet Care Resources',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Care Guide: How to Care for Dogs, Cats & Pets',
    description: 'Learn how to care for your pet with practical pet care tips and guides. Expert advice on pet nutrition, health, grooming, and training.',
    images: ['https://nearbypetcare.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://nearbypetcare.com',
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
};

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  // Structured Data for Educational Content
  const educationalContentStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Nearby Pet Care',
    description: 'An independent educational platform providing practical guidance on pet care',
    url: 'https://nearbypetcare.com'
  };

  // Structured Data for FAQ
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What kind of information does Nearby Pet Care provide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide practical, step-by-step guidance on pet nutrition, health, grooming, training, behavior, product selection, and overall pet wellbeing. Our content is designed to help pet owners make informed decisions based on widely accepted pet care practices.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you provide pet care services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, we are an independent educational platform that provides informational resources only. We do not represent any business, clinic, or service provider. Our role is to help pet owners understand pet care topics so they can make informed decisions.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is the information on this site reliable?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, all our content is based on widely accepted pet care practices and designed to be easy to understand. We focus on providing practical, actionable guidance that pet owners can use in their everyday pet care routines.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I use this information to care for my pet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our content is designed to help you make informed decisions about everyday pet care. However, for specific health concerns or emergencies, always consult with a qualified veterinarian. Our guides complement professional veterinary care.'
        }
      }
    ]
  };

  // Breadcrumb Structured Data
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://nearbypetcare.com'
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(educationalContentStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-black transition-colors min-h-screen isolate">
        {/* Hero Image Background - Fixed on scroll, clipped to section */}
        <div 
          className="absolute inset-0 z-0 w-full h-full"
          style={{
            backgroundImage: 'url(/pet-care-hero.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            willChange: 'transform'
          }}
        >
        </div>


        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 rounded-full">
              <span className="text-black text-sm font-semibold drop-shadow-md">📚 Your Independent Guide to Pet Care</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-pink-600 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_1px_3px_rgba(0,0,0,0.15)]">
                Make Informed Decisions
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_1px_3px_rgba(0,0,0,0.15)]">
                About Your Pet's Care
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-black mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Whether you're wondering how to care for a dog, seeking cat health tips, or looking for pet care advice that actually works, you've come to the right place. We provide practical, step-by-step guidance on everything from pet nutrition and grooming to training and behavior—all written in plain language you can actually use. Every guide is based on widely accepted pet care practices, so you can trust the information you're getting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/pet-care-tips"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-sm sm:text-base hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Explore Pet Care Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Links Section - Moved up */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
              Explore Our Pet Care Resources
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
              Comprehensive guides and resources for every aspect of pet care
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {[
              { name: 'Pet Health', href: '/pet-health', icon: '🩺', desc: 'Health & Wellness' },
              { name: 'Pet Nutrition', href: '/pet-nutrition', icon: '🍽️', desc: 'Diet & Feeding' },
              { name: 'Pet Grooming', href: '/pet-grooming', icon: '✂️', desc: 'Grooming & Hygiene' },
              { name: 'Pet Training', href: '/pet-training', icon: '🎓', desc: 'Training & Behavior' },
              { name: 'Pet Safety', href: '/pet-safety', icon: '🛡️', desc: 'Safety & Travel' },
              { name: 'Pet Products', href: '/pet-products', icon: '🛍️', desc: 'Product Reviews' },
              { name: 'Pet Breeds', href: '/pet-breeds', icon: '🐾', desc: 'Breed Guides' },
              { name: 'Puppies & Kittens', href: '/puppies-kittens', icon: '👶', desc: 'Young Pet Care' },
              { name: 'Senior Pets', href: '/senior-pets', icon: '👴', desc: 'Senior Care' },
              { name: 'Pet Adoption', href: '/pet-adoption', icon: '❤️', desc: 'Adoption Guide' },
            ].map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className="group p-4 sm:p-5 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300 text-center"
              >
                <div className="text-3xl sm:text-4xl mb-3 transform group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 transition-colors">
                  {category.desc}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/tools"
                className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm"
              >
                🛠️ Tools
              </Link>
              <Link
                href="/buying-guides"
                className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm"
              >
                📚 Buying Guides
              </Link>
              <Link
                href="/comparisons"
                className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm"
              >
                ⚖️ Product Comparisons
              </Link>
              <Link
                href="/community"
                className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm"
              >
                👥 Community
              </Link>
              <Link
                href="/pet-care-tips"
                className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm"
              >
                💡 Pet Care Tips
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Published Tools Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
              Latest Published Tools
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
              New tools and calculators to help you care for your pets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'Pet Age Calculator',
                description: 'Convert your pet\'s age to human years with breed-specific calculations. Understand life stages and get age-appropriate care recommendations.',
                href: '/tools/age-calculator',
                icon: '🎂',
                category: 'Health & Wellness',
              },
              {
                title: 'Exercise Calculator',
                description: 'Calculate daily exercise needs based on breed, age, and activity level. Get personalized exercise plans and activity recommendations.',
                href: '/tools/exercise-calculator',
                icon: '🏃',
                category: 'Health & Wellness',
              },
              {
                title: 'Pet Cost Calculator',
                description: 'Estimate the total cost of pet ownership including food, veterinary care, grooming, insurance, and supplies. Plan your budget effectively.',
                href: '/tools/cost-calculator',
                icon: '💰',
                category: 'Planning',
              },
            ].map((tool, index) => (
              <Link
                key={index}
                href={tool.href}
                className="group p-6 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl sm:text-5xl flex-shrink-0 transform group-hover:scale-110 transition-transform">
                    {tool.icon}
                  </div>
                  <div className="flex-1">
                    <div className="inline-block px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium mb-3 transition-colors">
                      {tool.category}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed transition-colors">
                      {tool.description}
                    </p>
                    <div className="flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:underline transition-colors">
                      Use Tool
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Link
              href="/tools"
              className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm sm:text-base"
            >
              View All Tools
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
              Everything You Need to Know About Pet Care
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
              From first-time pet owners to experienced caregivers, find answers to your pet care questions with our comprehensive guides covering all aspects of pet health, nutrition, grooming, and training.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { 
                title: 'Pet Nutrition & Feeding', 
                description: 'Discover how to choose the best pet food, create proper feeding schedules, understand portion sizes, and learn what ingredients to look for. Whether you\'re comparing wet vs dry food or exploring homemade pet food recipes, we\'ve got you covered.',
                icon: '🍽️'
              },
              { 
                title: 'Pet Health & Wellness', 
                description: 'Learn to recognize common pet health issues, understand vaccination schedules, and know when it\'s time to visit the vet. Get practical advice on preventive care that keeps your dog or cat healthy and happy.',
                icon: '🩺'
              },
              { 
                title: 'Pet Grooming & Hygiene', 
                description: 'Master the basics of dog grooming and cat grooming with step-by-step guides. Learn how to bathe your pet, trim nails safely, brush their coat, and maintain dental hygiene—all at home.',
                icon: '✂️'
              },
              { 
                title: 'Pet Training & Behavior', 
                description: 'Find effective dog training tips and cat behavior solutions. Learn how to address common issues like potty training, crate training, and separation anxiety with proven techniques that actually work.',
                icon: '🎓'
              },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-xl text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
              Why Pet Owners Trust Our Pet Care Advice
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
              We know you want the best for your pet. That's why every guide we create is designed to be practical, easy to follow, and based on what actually works in real-world pet care situations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Clear, Step-by-Step Pet Care Guides',
                description: 'No more guessing or sifting through conflicting advice. Our how-to guides break down everything from "how to care for a new puppy" to "how to groom a cat" into simple steps you can follow right away.',
                icon: '📋'
              },
              {
                title: 'Trusted Pet Care Information',
                description: 'Every article is grounded in widely accepted veterinary practices and current pet care research. You can feel confident applying our advice because it\'s based on what veterinarians and pet care experts actually recommend.',
                icon: '✅'
              },
              {
                title: 'Written for Real Pet Owners',
                description: 'Whether you\'re learning how to care for a dog for the first time or looking for advanced pet training techniques, we write in plain language that makes sense. No veterinary degree required—just practical knowledge you can use.',
                icon: '💡'
              }
            ].map((item, index) => (
              <div key={index} className="p-6 sm:p-8 bg-gradient-to-br from-gray-100/50 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      {recentPosts.length > 0 && (
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
                Latest Pet Care Tips & Guides
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
                Expert advice and insights to help you provide the best care for your pets
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group p-6 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300"
                >
                  {post.category && (
                    <span className="inline-block px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium mb-3 transition-colors">
                      {post.category}
                    </span>
                  )}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 transition-colors">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-semibold group-hover:underline transition-colors">
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-10">
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm sm:text-base"
              >
                View All Blog Posts
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}


      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto text-center p-8 sm:p-10 md:p-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl sm:rounded-3xl backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">
              Ready to Give Your Pet the Best Care Possible?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto transition-colors">
              Join thousands of pet owners who use our guides to make better decisions about pet nutrition, health care, grooming routines, and training. Whether you need help choosing the right pet food, learning how to care for a senior pet, or understanding your pet's behavior, we've got practical answers that work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/pet-care-tips"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Browse All Guides
              </Link>
              <Link 
                href="/about"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gray-100 dark:bg-white/10 backdrop-blur-sm text-gray-900 dark:text-white border border-gray-300 dark:border-white/20 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-gray-200 dark:hover:bg-white/20 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

