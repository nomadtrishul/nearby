import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import BreedsSidebar from '@/components/BreedsSidebar';
import {
  generateSEOMetadata,
  generateWebPageStructuredData,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps
} from '@/lib/seo-utils';

// Import breed metadata from individual breed pages (only those that export it)
import { breedMetadata as labradorMetadata } from './labrador-retriever/page';
import { breedMetadata as goldenRetrieverMetadata } from './golden-retriever/page';
import { breedMetadata as germanShepherdMetadata } from './german-shepherd/page';
import { breedMetadata as frenchBulldogMetadata } from './french-bulldog/page';
import { breedMetadata as bulldogMetadata } from './bulldog/page';
import { breedMetadata as poodleMetadata } from './poodle/page';
import { breedMetadata as beagleMetadata } from './beagle/page';
import { breedMetadata as rottweilerMetadata } from './rottweiler/page';
import { breedMetadata as dachshundMetadata } from './dachshund/page';
import { breedMetadata as siberianHuskyMetadata } from './siberian-husky/page';
import { breedMetadata as shihTzuMetadata } from './shih-tzu/page';
import { breedMetadata as boxerMetadata } from './boxer/page';
import { breedMetadata as greatDaneMetadata } from './great-dane/page';
import { breedMetadata as yorkieMetadata } from './yorkie/page';
import { breedMetadata as australianShepherdMetadata } from './australian-shepherd/page';
import { breedMetadata as berneseMountainDogMetadata } from './bernese-mountain-dog/page';
import { breedMetadata as borderCollieMetadata } from './border-collie/page';
import { breedMetadata as caneCorsoMetadata } from './cane-corso/page';
import { breedMetadata as cavalierKingCharlesSpanielMetadata } from './cavalier-king-charles-spaniel/page';
import { breedMetadata as chihuahuaMetadata } from './chihuahua/page';
import { breedMetadata as cockerSpanielMetadata } from './cocker-spaniel/page';
import { breedMetadata as dobermanPinscherMetadata } from './doberman-pinscher/page';
import { breedMetadata as germanShorthairedPointerMetadata } from './german-shorthaired-pointer/page';
import { breedMetadata as miniatureSchnauzerMetadata } from './miniature-schnauzer/page';
import { breedMetadata as pembrokeWelshCorgiMetadata } from './pembroke-welsh-corgi/page';
import { breedMetadata as pomeranianMetadata } from './pomeranian/page';
import { breedMetadata as shibaInuMetadata } from './shiba-inu/page';
import { breedMetadata as saintBernardMetadata } from './saint-bernard/page';

// Consolidated breeds data with metadata
const breedsData = [
  labradorMetadata,
  goldenRetrieverMetadata,
  germanShepherdMetadata,
  frenchBulldogMetadata,
  bulldogMetadata,
  poodleMetadata,
  beagleMetadata,
  rottweilerMetadata,
  dachshundMetadata,
  siberianHuskyMetadata,
  shihTzuMetadata,
  boxerMetadata,
  greatDaneMetadata,
  yorkieMetadata,
  australianShepherdMetadata,
  berneseMountainDogMetadata,
  borderCollieMetadata,
  caneCorsoMetadata,
  cavalierKingCharlesSpanielMetadata,
  chihuahuaMetadata,
  cockerSpanielMetadata,
  dobermanPinscherMetadata,
  germanShorthairedPointerMetadata,
  miniatureSchnauzerMetadata,
  pembrokeWelshCorgiMetadata,
  pomeranianMetadata,
  shibaInuMetadata,
  saintBernardMetadata,
];

export const metadata: Metadata = generateSEOMetadata({
  title: 'Dog Breeds Guide - Complete Breed Information & Care Tips',
  description: 'Comprehensive guide to popular dog breeds. Discover breed characteristics, temperament, exercise needs, grooming requirements, health considerations, and training tips for over 25 dog breeds. Find the perfect dog breed for your lifestyle.',
  keywords: [
    'dog breeds',
    'dog breed guide',
    'dog breed information',
    'popular dog breeds',
    'dog characteristics',
    'dog temperament',
    'dog care guide',
    'choosing a dog breed',
    'family dog breeds',
    'small dog breeds',
    'large dog breeds',
    'medium dog breeds',
    'dog breed selector',
    'best dog breeds',
    'dog breed comparison',
    'AKC dog breeds',
    'purebred dogs',
    'dog breed traits',
    'dog exercise requirements',
    'dog grooming needs',
    'hypoallergenic dog breeds',
    'energetic dog breeds',
    'calm dog breeds',
    'intelligent dog breeds',
    'protective dog breeds'
  ],
  pathname: '/pet-breeds/dogs',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Dog Breeds Guide - Complete Breed Information',
    type: 'image/png',
  }],
  locale: 'en-US',
  alternates: {
    languages: {
      'en-US': '/pet-breeds/dogs',
      'en-GB': '/pet-breeds/dogs',
      'en-CA': '/pet-breeds/dogs',
      'en-AU': '/pet-breeds/dogs',
    },
  },
});

export default function DogBreedsPage() {
  // Breadcrumbs for structured data
  const breadcrumbs = [
    { name: 'Home', href: '/', url: '/' },
    { name: 'Pet Breeds', href: '/pet-breeds', url: '/pet-breeds' },
    { name: 'Dogs', href: '/pet-breeds/dogs', url: '/pet-breeds/dogs' },
  ];

  // Generate structured data
  const webPageStructuredData = generateWebPageStructuredData({
    name: 'Dog Breeds Guide - Complete Breed Information',
    description: 'Comprehensive guide to popular dog breeds with detailed information on characteristics, care, and training',
    url: '/pet-breeds/dogs',
    breadcrumbs,
  });

  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);

  const faqStructuredData = generateFAQStructuredData([
    {
      question: 'What are the most popular dog breeds?',
      answer: 'The most popular dog breeds include Labrador Retrievers, Golden Retrievers, German Shepherds, French Bulldogs, and Bulldogs. These breeds are loved for their friendly temperament, trainability, and adaptability to family life. Each breed has unique characteristics that make them suitable for different lifestyles and living situations.'
    },
    {
      question: 'How do I choose the right dog breed for my family?',
      answer: 'Choose a dog breed based on your lifestyle, living space, activity level, and family composition. Consider factors like the breed\'s size, energy requirements, grooming needs, temperament with children, and training requirements. Research breed-specific traits and health considerations to ensure a good match for your household.'
    },
    {
      question: 'What dog breeds are best for first-time owners?',
      answer: 'Great dog breeds for first-time owners include Labrador Retrievers, Golden Retrievers, Cavalier King Charles Spaniels, and Poodles. These breeds are generally friendly, trainable, and  adaptable. They respond well to positive reinforcement training and are forgiving of beginner mistakes while still being eager to please.'
    },
    {
      question: 'Which dog breeds require the least grooming?',
      answer: 'Low-maintenance grooming breeds include Beagles, Boxers, Labrador Retrievers, and Doberman Pinschers. These breeds have short coats that require minimal brushing and professional grooming. However, all dogs need basic care including nail trimming, ear cleaning, and dental hygiene regardless of coat type.'
    },
    {
      question: 'What are the most intelligent dog breeds?',
      answer: 'The most intelligent dog breeds include Border Collies, Poodles, German Shepherds, Golden Retrievers, and Australian Shepherds. These breeds excel in obedience training, problem-solving, and learning complex tasks. However, high intelligence often means they need substantial mental stimulation to prevent boredom and behavioral issues.'
    },
    {
      question: 'Which dog breeds are good with children?',
      answer: 'Family-friendly breeds that are typically good with children include Golden Retrievers, Labrador Retrievers, Beagles, Boxers, and Cavalier King Charles Spaniels. These breeds tend to be patient, gentle, and tolerant of children. Always supervise interactions between dogs and young children, and teach children how to properly interact with dogs.'
    },
    {
      question: 'What are the healthiest dog breeds?',
      answer: 'Generally healthy dog breeds include Australian Shepherds, Border Collies, Beagles, and mixed breeds. However, every breed can have genetic health concerns. Choose a responsible breeder who performs health testing, maintain regular veterinary care, provide proper nutrition and exercise, and be aware of breed-specific health issues.'
    },
    {
      question: 'Which dog breeds need the most exercise?',
      answer: 'High-energy breeds requiring substantial exercise (1.5-2+ hours daily) include Border Collies, Australian Shepherds, Siberian Huskies, German Shepherds, and German Shorthaired Pointers. These working and herding breeds need both physical activity and mental stimulation. Without adequate exercise, they may develop behavioral problems.'
    }
  ]);

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      {/* Structured Data Scripts */}
      <script {...jsonLdScriptProps(webPageStructuredData)} />
      <script {...jsonLdScriptProps(breadcrumbStructuredData)} />
      <script {...jsonLdScriptProps(faqStructuredData)} />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={breadcrumbs} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🐕</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Dog Breeds</span>
            </div>

            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🐕</div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Dog Breeds Guide
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Explore different dog breeds and learn about their unique characteristics, temperament, exercise needs, and care requirements. Each breed has specific traits that may make them more suitable for certain lifestyles.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Explore different dog breeds and learn about their unique characteristics, temperament, exercise needs, and care requirements. Each breed has specific traits that may make them more suitable for certain lifestyles.</p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-6">Popular Dog Breeds</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                  {breedsData.map((breed) => (
                    <Link
                      key={breed.slug}
                      href={`/pet-breeds/dogs/${breed.slug}`}
                      className="group flex flex-col bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300 overflow-hidden"
                    >
                      {/* Breed Image */}
                      <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden">
                        <Image
                          src={breed.imageUrl}
                          alt={`${breed.name} - Dog Breed`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Breed Info */}
                      <div className="p-6 flex flex-col items-center text-center">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{breed.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{breed.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Breed-Specific Care</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Different breeds have unique health considerations, exercise requirements, and grooming needs. Understanding breed-specific care helps ensure your dog lives a happy, healthy life.</p>

                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <Link href="/pet-breeds" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Breeds</Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <BreedsSidebar category="dogs" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors"
        aria-labelledby="faq-heading"
      >
        <div className="container mx-auto max-w-4xl">
          <header className="text-center mb-10 sm:mb-12">
            <h2 id="faq-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
              Common questions about choosing and caring for different dog breeds
            </p>
          </header>

          <div className="space-y-6">
            <article className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
                What are the most popular dog breeds?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                The most popular dog breeds include Labrador Retrievers, Golden Retrievers, German Shepherds, French Bulldogs, and Bulldogs. These breeds are loved for their friendly temperament, trainability, and adaptability to family life. Each breed has unique characteristics that make them suitable for different lifestyles and living situations.
              </p>
            </article>

            <article className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
                How do I choose the right dog breed for my family?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                Choose a dog breed based on your lifestyle, living space, activity level, and family composition. Consider factors like the breed's size, energy requirements, grooming needs, temperament with children, and training requirements. Research breed-specific traits and health considerations to ensure a good match for your household.
              </p>
            </article>

            <article className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
                What dog breeds are best for first-time owners?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                Great dog breeds for first-time owners include Labrador Retrievers, Golden Retrievers, Cavalier King Charles Spaniels, and Poodles. These breeds are generally friendly, trainable, and adaptable. They respond well to positive reinforcement training and are forgiving of beginner mistakes while still being eager to please.
              </p>
            </article>

            <article className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
                Which dog breeds require the least grooming?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                Low-maintenance grooming breeds include Beagles, Boxers, Labrador Retrievers, and Doberman Pinschers. These breeds have short coats that require minimal brushing and professional grooming. However, all dogs need basic care including nail trimming, ear cleaning, and dental hygiene regardless of coat type.
              </p>
            </article>

            <article className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
                What are the most intelligent dog breeds?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                The most intelligent dog breeds include Border Collies, Poodles, German Shepherds, Golden Retrievers, and Australian Shepherds. These breeds excel in obedience training, problem-solving, and learning complex tasks. However, high intelligence often means they need substantial mental stimulation to prevent boredom and behavioral issues.
              </p>
            </article>

            <article className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
                Which dog breeds are good with children?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                Family-friendly breeds that are typically good with children include Golden Retrievers, Labrador Retrievers, Beagles, Boxers, and Cavalier King Charles Spaniels. These breeds tend to be patient, gentle, and tolerant of children. Always supervise interactions between dogs and young children, and teach children how to properly interact with dogs.
              </p>
            </article>

            <article className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
                What are the healthiest dog breeds?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                Generally healthy dog breeds include Australian Shepherds, Border Collies, Beagles, and mixed breeds. However, every breed can have genetic health concerns. Choose a responsible breeder who performs health testing, maintain regular veterinary care, provide proper nutrition and exercise, and be aware of breed-specific health issues.
              </p>
            </article>

            <article className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
                Which dog breeds need the most exercise?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                High-energy breeds requiring substantial exercise (1.5-2+ hours daily) include Border Collies, Australian Shepherds, Siberian Huskies, German Shepherds, and German Shorthaired Pointers. These working and herding breeds need both physical activity and mental stimulation. Without adequate exercise, they may develop behavioral problems.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
