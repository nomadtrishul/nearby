import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import GroomingSidebar from '@/components/GroomingSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Pet Bathing Guides',
  description: 'Comprehensive guide to bathing your pet safely and effectively. Learn how often to bathe, choose the right products, and master bathing techniques.',
  keywords: ['pet bathing', 'how to bathe dog', 'how to bathe cat', 'pet shampoo', 'pet bathing tips', 'dog bathing guide', 'cat bathing guide', 'pet hygiene', 'bathing frequency'],
  pathname: '/pet-grooming/bathing-guides',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Pet Bathing Guides - Complete Guide to Bathing Dogs & Cats',
    type: 'image/png',
  }],
});

export default function BathingGuidesPage() {
  // Article Structured Data for SEO
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pet Bathing Guides - Complete Guide to Bathing Dogs & Cats',
    description: 'Comprehensive guide to bathing your pet safely and effectively. Learn how often to bathe, choose the right products, and master bathing techniques.',
    image: 'https://nearbypetcare.com/og-image.png',
    datePublished: '2024-01-01T00:00:00Z',
    dateModified: new Date().toISOString(),
    author: {
      '@type': 'Person',
      name: 'Nearby Pet Care Team',
      url: 'https://nearbypetcare.com/about'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nearbypetcare.com/logo.png',
        width: 200,
        height: 48
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://nearbypetcare.com/pet-grooming/bathing-guides'
    },
    articleSection: 'Pet Grooming',
    keywords: 'pet bathing, how to bathe dog, how to bathe cat, pet shampoo, pet bathing tips, dog bathing guide, cat bathing guide, pet hygiene, bathing frequency',
    inLanguage: 'en-US',
    wordCount: 2500,
    timeRequired: 'PT15M'
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
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Pet Grooming',
        item: 'https://nearbypetcare.com/pet-grooming'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Bathing Guides',
        item: 'https://nearbypetcare.com/pet-grooming/bathing-guides'
      }
    ]
  };

  // FAQPage Structured Data
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How often should I bathe my dog?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bathing frequency varies by breed and lifestyle. Short-haired breeds typically need baths every 4-6 weeks, while long-haired breeds may need them every 3-4 weeks. Active outdoor dogs may need baths every 2-3 weeks or after getting dirty.'
        }
      },
      {
        '@type': 'Question',
        name: 'How often should I bathe my cat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most cats are excellent self-groomers and rarely need baths. Hairless breeds may need weekly baths, while long-haired cats that can\'t groom effectively may need baths every 4-6 weeks. Most cats only need baths when they get into something sticky, toxic, or particularly dirty.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I use human shampoo on my pet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, you should never use human shampoo on pets. Human skin has a different pH balance (5.5-6.5) compared to pet skin (6.2-7.4). Human shampoos can disrupt the natural pH balance, causing dryness, irritation, and making pets more susceptible to infections. Always use pet-specific, pH-balanced shampoos.'
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
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
    __html: JSON.stringify(breadcrumbStructuredData),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqStructuredData),
  }}
/>

{/* Hero Section */}
<section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 w-full h-full"
    style={{
      backgroundImage:
        'url(https://res.cloudinary.com/dxxzhrmpm/image/upload/v1763577046/pet-bathing_i67ddb.webp)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-indigo-50/85 to-purple-50/90 dark:from-gray-900/90 dark:via-gray-800/85 dark:to-gray-900/90"></div>
  </div>

  {/* Decorative elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
  </div>

  <div className="container mx-auto max-w-7xl relative z-10">
    <Breadcrumb
      items={[
        { name: 'Home', href: '/' },
        { name: 'Pet Grooming', href: '/pet-grooming' },
        { name: 'Bathing Guides', href: '/pet-grooming/bathing-guides' },
      ]}
    />

    <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
      <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
        <span className="text-2xl">🛁</span>
        <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
          Bathing & Hygiene
        </span>
      </div>

      <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">
        🛁
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Pet Bathing Guides
        </span>
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
        Bathing is not just about keeping your pet clean. It plays a critical role
        in skin health, coat condition, odor control, and early detection of
        medical issues. This guide is written from a professional grooming and
        veterinary hygiene perspective to help you bathe dogs and cats safely,
        confidently, and correctly using methods recommended across the United
        States as of December 2025.
      </p>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🐕</span>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Dog Bathing
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl">🐈</span>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Cat Bathing
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl">✨</span>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Vet-Aligned Methods
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

<article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
  <div className="container mx-auto max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
      <div className="lg:col-span-2">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Disclosure:</strong> This article contains affiliate links. We may earn a commission if you make a purchase, at no extra cost to you.
            </p>
          </div>

<h2>How Often Should You Bathe Your Pet?</h2>
<p>
There is no universal bathing schedule that works for every pet. Frequency is
determined by coat type, skin biology, lifestyle, environmental exposure, and
existing medical conditions. In the US, most veterinarians now emphasize
“condition-based bathing” rather than fixed schedules. This approach protects
the skin barrier while maintaining hygiene.
</p>

<h3>Dogs</h3>
<p>
Dogs that live primarily indoors and have short coats often need less frequent
baths than outdoor or working dogs. Long-haired and double-coated breeds require
more maintenance to prevent matting and trapped debris, which can lead to skin
infections if ignored.
</p>
<ul>
  <li>Short-haired breeds typically do well with baths every four to six weeks.</li>
  <li>Long-haired and double-coated breeds often need bathing every three to four weeks.</li>
  <li>Highly active or outdoor dogs may require bathing every two to three weeks.</li>
  <li>Dogs with dermatological conditions should follow veterinarian-prescribed schedules.</li>
  <li>Puppies benefit from early exposure, starting with gentle monthly baths.</li>
</ul>

<h3>Cats</h3>
<p>
Healthy adult cats are exceptional self-groomers and usually do not require
routine bathing. However, certain breeds and life stages do require intervention.
In US grooming practices, bathing is considered a targeted solution rather than
routine care for cats.
</p>
<ul>
  <li>Hairless breeds require regular bathing every one to two weeks.</li>
  <li>Long-haired or overweight cats may need assistance every four to six weeks.</li>
  <li>Senior cats may require monthly bathing as grooming ability declines.</li>
  <li>Any exposure to toxic or sticky substances warrants immediate bathing.</li>
</ul>

<div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
<p>
<strong>Clinical insight:</strong> Over-bathing damages the lipid layer that
protects your pet’s skin. This is one of the leading causes of chronic itching
and secondary infections seen in US veterinary clinics.
</p>
</div>

<h2>Essential Bathing Supplies</h2>
<p>
Professional groomers prepare everything before introducing water. This reduces
stress for the pet and prevents rushed mistakes. Using pet-specific products is
not optional. It is a medical requirement.
</p>

{/* Affiliate link opportunity: premium pet shampoo */}
<div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700 my-4">
  <a href="https://amzn.to/3Ld21JM" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
    Wahl 4-in-1 Calming Formula Pet Shampoo & Conditioner
  </a>
  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
    This premium lavender chamomile formula cleans, conditions, detangles, and moisturizes in one step. 
    Paraben and alcohol-free with a pH-balanced formula that's gentle on your pet's skin while providing 
    a calming bath experience.
  </p>
</div>
{/* Affiliate link opportunity: non-slip bath mat */}
{/* Affiliate link opportunity: grooming towels */}

<ul>
  <li>Veterinary-approved pet shampoo formulated for animal skin pH</li>
  <li>Conditioner designed for your pet’s coat type</li>
  <li>Non-slip bath or shower mat</li>
  <li>High-absorbency towels</li>
  <li>Quality brush or comb suited to the coat</li>
  <li>Cotton balls for ear protection</li>
  <li>High-value treats for positive reinforcement</li>
</ul>

<h2>Choosing the Right Shampoo</h2>
<p>
Shampoo selection has a direct impact on skin health. In 2025, US veterinary
guidelines strongly discourage fragranced or human-grade products due to rising
cases of contact dermatitis in pets.
</p>

<h3>Shampoo Categories</h3>
<p>
General-purpose shampoos are suitable for healthy pets, while medicated formulas
should only be used under veterinary supervision. Oatmeal-based products remain
the gold standard for mild itching and dryness.
</p>

{/* Affiliate link opportunity: hypoallergenic shampoo */}
{/* Affiliate link opportunity: medicated shampoo */}

<div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
<p>
<strong>Why human shampoo is harmful:</strong> Human skin is acidic. Pet skin is
near neutral. Using human shampoo disrupts the microbiome and increases infection
risk.
</p>
</div>

<h2>Step-by-Step Bathing Guide for Dogs</h2>
<p>
A successful dog bath follows a predictable, calm sequence. Rushing is the
primary cause of accidents and stress-related behavior issues.
</p>

<h3>Preparation</h3>
<p>
Brushing before bathing is mandatory. Mats tighten when wet and can cause pain
during drying. Water temperature should always be lukewarm, never hot.
</p>

<h3>Bathing Process</h3>
<p>
Always start at the neck to prevent shampoo runoff into the eyes. Thorough
rinsing is critical. Residual soap is one of the most common causes of post-bath
itching.
</p>

<h3>Drying</h3>
<p>
Blot, do not rub. Excessive friction damages hair cuticles and increases
shedding. Hair dryers should only be used on low heat and never near the face.
</p>

<h2>Step-by-Step Bathing Guide for Cats</h2>
<p>
Bathing cats requires precision and restraint-free handling. Most injuries
during cat baths occur due to panic responses, not aggression.
</p>

<h3>Preparation</h3>
<p>
A quiet, warm room and shallow water significantly reduce stress. Having a
second person improves safety and efficiency.
</p>

<h3>Bathing Process</h3>
<p>
Water should never be poured over a cat’s head. Face cleaning must be done using
a damp cloth only.
</p>

<h3>Drying</h3>
<p>
Most cats should air-dry in a warm room. Forced drying increases anxiety and can
damage trust.
</p>

<div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-6">
<p>
<strong>Professional guidance:</strong> If a cat becomes highly distressed,
stop immediately. Waterless grooming methods are safer and more humane.
</p>
</div>

<h2>Waterless Bathing Alternatives</h2>
<p>
Waterless products are now widely recommended by US veterinarians for anxious
pets. They are effective for odor control and light cleaning without stress.
</p>

{/* Affiliate link opportunity: waterless shampoo */}
{/* Affiliate link opportunity: pet wipes */}

<h2>When to Seek Professional Help</h2>
<p>
Professional groomers and veterinary technicians are trained to handle difficult
cases safely. Seeking help is not a failure. It is responsible pet ownership.
</p>

<h2>After-Bath Care</h2>
<p>
Positive reinforcement after bathing builds long-term tolerance. Monitor the
skin for redness or irritation over the next 24 hours.
</p>

<div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
<p>
<strong>Expert tip:</strong> Early, positive bathing experiences reduce grooming
stress for life. Consistency matters more than frequency.
</p>
</div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link
            href="/pet-grooming"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to Pet Grooming Guides
          </Link>
        </div>
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-1">
        <div className="lg:sticky lg:top-24 lg:h-fit">
          <GroomingSidebar />
        </div>
      </div>
    </div>
  </div>
</article>
    </main>
  );
}

