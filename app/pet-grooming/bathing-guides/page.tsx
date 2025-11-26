import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import GroomingSidebar from '@/components/GroomingSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Pet Bathing Guides - Complete Guide to Bathing Dogs & Cats',
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
            backgroundImage: 'url(https://res.cloudinary.com/dxxzhrmpm/image/upload/v1763577046/pet-bathing_i67ddb.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-indigo-50/85 to-purple-50/90 dark:from-gray-900/90 dark:via-gray-800/85 dark:to-gray-900/90"></div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Pet Grooming', href: '/pet-grooming' },
            { name: 'Bathing Guides', href: '/pet-grooming/bathing-guides' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🛁</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Bathing & Hygiene</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🛁</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Bathing Guides
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Learn how to bathe your pet safely and effectively. From choosing the right shampoo to mastering step-by-step techniques for dogs and cats, our comprehensive guide covers everything you need to know about proper pet bathing and hygiene.
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🐕</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Dog Bathing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🐈</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Cat Bathing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✨</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Step-by-Step</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg dark:prose-invert max-w-none">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">How Often Should You Bathe Your Pet?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Bathing frequency varies significantly based on your pet's breed, coat type, lifestyle, and skin condition. Here's a general guide:
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Dogs</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Short-haired breeds:</strong> Every 4-6 weeks or as needed</li>
              <li><strong>Long-haired breeds:</strong> Every 3-4 weeks to prevent matting</li>
              <li><strong>Active/outdoor dogs:</strong> Every 2-3 weeks or after getting dirty</li>
              <li><strong>Dogs with skin conditions:</strong> As recommended by your veterinarian (may be more or less frequent)</li>
              <li><strong>Puppies:</strong> Start with monthly baths, increasing frequency as they grow and become more active</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Cats</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Most cats are excellent self-groomers and rarely need baths. However, bathing may be necessary for:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Hairless breeds (Sphynx, etc.) - every 1-2 weeks</li>
              <li>Long-haired cats that can't groom themselves effectively - every 4-6 weeks</li>
              <li>Cats with skin conditions or allergies - as directed by your vet</li>
              <li>Senior cats who have difficulty grooming - monthly or as needed</li>
              <li>After getting into something sticky, toxic, or particularly dirty</li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Important:</strong> Over-bathing can strip natural oils from your pet's skin and coat, leading to dryness, irritation, and skin problems. When in doubt, consult with your veterinarian about the ideal bathing schedule for your specific pet.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Essential Bathing Supplies</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Before you begin, gather all necessary supplies:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Pet-specific shampoo:</strong> pH-balanced for your pet's skin (never use human shampoo)</li>
              <li><strong>Conditioner (optional):</strong> Especially helpful for long-haired breeds</li>
              <li><strong>Non-slip mat:</strong> For bathtub or shower floor to prevent slipping</li>
              <li><strong>Towels:</strong> Multiple large, absorbent towels</li>
              <li><strong>Brush or comb:</strong> For pre-bath brushing and post-bath detangling</li>
              <li><strong>Cotton balls:</strong> To protect ears from water</li>
              <li><strong>Treats:</strong> For positive reinforcement</li>
              <li><strong>Hair dryer (optional):</strong> Set to low heat and low speed</li>
              <li><strong>Sprayer or pitcher:</strong> For rinsing (if not using a shower)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Choosing the Right Shampoo</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Selecting the appropriate shampoo is crucial for your pet's skin health. Here's what to consider:
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Shampoo Types</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>General purpose:</strong> For regular bathing of healthy pets</li>
              <li><strong>Hypoallergenic:</strong> For pets with sensitive skin or allergies</li>
              <li><strong>Medicated:</strong> For specific skin conditions (use only as directed by your vet)</li>
              <li><strong>Puppy/kitten formula:</strong> Gentler formulas for young pets</li>
              <li><strong>Oatmeal-based:</strong> Soothing for dry, itchy skin</li>
              <li><strong>Flea and tick:</strong> Contains insecticides (use carefully and as directed)</li>
              <li><strong>Whitening:</strong> For white or light-colored coats</li>
              <li><strong>Deodorizing:</strong> For pets with strong odors</li>
            </ul>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Warning:</strong> Never use human shampoo on pets. Human skin has a pH of 5.5-6.5, while pet skin is more neutral (6.2-7.4). Human shampoos can disrupt the natural pH balance, causing dryness, irritation, and making pets more susceptible to infections.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Step-by-Step Bathing Guide for Dogs</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Preparation</h3>
            <ol className="list-decimal pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Brush thoroughly:</strong> Remove all mats, tangles, and loose hair before bathing. Wetting matted fur makes it worse and nearly impossible to remove.</li>
              <li><strong>Set up the bathing area:</strong> Place a non-slip mat in the tub or shower. Have all supplies within easy reach.</li>
              <li><strong>Protect ears:</strong> Gently place cotton balls in your dog's ears to prevent water from entering the ear canal.</li>
              <li><strong>Test water temperature:</strong> Use lukewarm water (about 100°F or 38°C) - similar to what you'd use for a baby. Test with your wrist or elbow.</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Bathing Process</h3>
            <ol className="list-decimal pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Wet your dog thoroughly:</strong> Start from the neck and work your way down, avoiding the head initially. Use a gentle stream of water.</li>
              <li><strong>Apply shampoo:</strong> Dilute shampoo with water in your hand or a container, then apply starting at the neck. Work the lather down the body, massaging gently in circular motions.</li>
              <li><strong>Clean the head last:</strong> Use a damp washcloth to gently clean the face, avoiding eyes, nose, and mouth. Be extra careful around sensitive areas.</li>
              <li><strong>Let it sit:</strong> Allow medicated or conditioning shampoos to sit for 5-10 minutes as directed on the label.</li>
              <li><strong>Rinse thoroughly:</strong> This is crucial! Rinse from head to tail, ensuring all shampoo is removed. Leftover shampoo can cause skin irritation. Rinse until the water runs clear and feels slick-free.</li>
              <li><strong>Apply conditioner (if using):</strong> Follow the same process as shampoo, then rinse completely.</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Drying</h3>
            <ol className="list-decimal pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Remove cotton balls:</strong> Take out the ear protection carefully.</li>
              <li><strong>Initial towel dry:</strong> Use a large towel to blot and squeeze out excess water. Don't rub vigorously, as this can cause tangles in long-haired breeds.</li>
              <li><strong>Brush while damp:</strong> For long-haired dogs, gently brush while the coat is still slightly damp to prevent matting.</li>
              <li><strong>Hair dryer (optional):</strong> If using a hair dryer, use the lowest heat and speed settings. Keep it moving constantly and maintain a safe distance (at least 12 inches). Never point it directly at the face.</li>
              <li><strong>Keep warm:</strong> Ensure your dog stays warm until completely dry, especially in cooler weather.</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Step-by-Step Bathing Guide for Cats</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Bathing a cat requires extra patience and care. Most cats dislike water, so preparation and a calm approach are essential.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Preparation</h3>
            <ol className="list-decimal pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Trim nails:</strong> Trim your cat's nails a day or two before bathing to minimize scratches.</li>
              <li><strong>Brush thoroughly:</strong> Remove all mats and tangles. This is especially important for long-haired cats.</li>
              <li><strong>Prepare a calm environment:</strong> Close doors and windows, turn off loud noises, and ensure the room is warm.</li>
              <li><strong>Use a shallow basin or sink:</strong> Fill with just 2-3 inches of lukewarm water. Many cats prefer this to a full bathtub.</li>
              <li><strong>Have a helper:</strong> If possible, have someone assist you, especially for the first few baths.</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Bathing Process</h3>
            <ol className="list-decimal pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Gently place your cat in the water:</strong> Support their body and speak in a calm, reassuring voice.</li>
              <li><strong>Wet the body:</strong> Use a cup or sprayer to wet the body, avoiding the head. Work quickly but calmly.</li>
              <li><strong>Apply shampoo:</strong> Use a small amount of cat-specific shampoo and lather quickly. Focus on the body, avoiding the face.</li>
              <li><strong>Clean the face:</strong> Use a damp washcloth to gently wipe the face if needed. Never pour water over a cat's head.</li>
              <li><strong>Rinse thoroughly:</strong> Use a cup or sprayer to rinse all shampoo from the body. Ensure complete removal.</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Drying</h3>
            <ol className="list-decimal pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Wrap in a towel immediately:</strong> Most cats will want to shake and may try to escape. Wrap them securely but gently in a large towel.</li>
              <li><strong>Blot dry:</strong> Gently blot and squeeze out water. Use multiple towels if needed.</li>
              <li><strong>Keep in a warm room:</strong> Ensure the room is warm and draft-free until your cat is completely dry.</li>
              <li><strong>Avoid hair dryers:</strong> Most cats are frightened by hair dryers. Air drying in a warm room is usually best.</li>
            </ol>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Safety Note:</strong> If your cat becomes extremely stressed or aggressive during bathing, stop immediately. Consider using waterless shampoos, wipes, or professional grooming services instead. Never force a cat into a stressful bathing situation.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Special Considerations</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Puppies and Kittens</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Wait until they're at least 8 weeks old before the first bath</li>
              <li>Use gentle, puppy/kitten-specific formulas</li>
              <li>Keep baths short (5-10 minutes) to prevent stress</li>
              <li>Ensure the water is warm and the room is draft-free</li>
              <li>Make it a positive experience with treats and praise</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Senior Pets</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Use non-slip surfaces and provide extra support</li>
              <li>Keep baths shorter and less frequent if mobility is an issue</li>
              <li>Ensure the water temperature is comfortable (slightly warmer may be appreciated)</li>
              <li>Be gentle with arthritic joints</li>
              <li>Consider professional grooming if bathing becomes too difficult</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Different Coat Types</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Double-coated breeds:</strong> Ensure thorough rinsing to prevent skin irritation. Use a conditioner to help with shedding.</li>
              <li><strong>Curly coats (Poodles, etc.):</strong> Use moisturizing shampoos and conditioners. Brush while wet to prevent matting.</li>
              <li><strong>Wire-haired breeds:</strong> May require special stripping techniques; consult a professional groomer.</li>
              <li><strong>Hairless breeds:</strong> Need more frequent bathing (weekly) and may require special skin care products.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Common Mistakes to Avoid</h2>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Using human shampoo:</strong> Can cause skin irritation and pH imbalance</li>
              <li><strong>Incomplete rinsing:</strong> Leftover shampoo causes itching and skin problems</li>
              <li><strong>Water too hot or cold:</strong> Can cause discomfort and stress</li>
              <li><strong>Getting water in ears:</strong> Can lead to ear infections</li>
              <li><strong>Bathing too frequently:</strong> Strips natural oils, causing dry skin</li>
              <li><strong>Not brushing before bathing:</strong> Makes matting worse when wet</li>
              <li><strong>Rushing the process:</strong> Can stress your pet and lead to incomplete cleaning</li>
              <li><strong>Using high-heat hair dryers:</strong> Can burn sensitive skin</li>
              <li><strong>Leaving pets wet in cold conditions:</strong> Can lead to hypothermia</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">When to Seek Professional Help</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Consider professional grooming services if:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Your pet is extremely fearful or aggressive during bathing</li>
              <li>You're dealing with severe matting that can't be brushed out</li>
              <li>Your pet has skin conditions requiring special care</li>
              <li>You have a large or difficult-to-handle breed</li>
              <li>You lack the time, space, or confidence to bathe your pet properly</li>
              <li>Your pet requires breed-specific grooming techniques</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">After-Bath Care</h2>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Reward your pet:</strong> Give treats and praise to create positive associations with bathing</li>
              <li><strong>Check ears:</strong> Ensure ears are dry and clean</li>
              <li><strong>Monitor for irritation:</strong> Watch for signs of skin irritation or allergic reactions</li>
              <li><strong>Brush regularly:</strong> Maintain the coat between baths with regular brushing</li>
              <li><strong>Keep them warm:</strong> Ensure your pet stays warm until completely dry</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Waterless Bathing Alternatives</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              For pets who absolutely cannot tolerate water baths, consider these alternatives:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Waterless shampoos:</strong> Foam or spray-on products that don't require rinsing</li>
              <li><strong>Pet wipes:</strong> Pre-moistened wipes for spot cleaning</li>
              <li><strong>Dry shampoo:</strong> Powder-based products that absorb oils (use sparingly)</li>
              <li><strong>Professional grooming:</strong> Experienced groomers can handle difficult pets more effectively</li>
            </ul>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Pro Tip:</strong> Start bathing your pet when they're young to help them become accustomed to the process. Make it a positive experience with treats, praise, and patience. Regular, positive bathing experiences will make grooming much easier throughout your pet's life.
              </p>
            </div>
              </div>
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <Link href="/pet-grooming" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Grooming Guides</Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <GroomingSidebar />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

