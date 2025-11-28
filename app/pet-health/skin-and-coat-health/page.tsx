import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import HealthSidebar from '@/components/HealthSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Pet Skin & Coat Health Guide',
  description: 'Learn how to maintain healthy skin and coat for your pet. Tips on grooming, nutrition, identifying skin problems, and proper care.',
  keywords: ['pet skin health', 'pet coat health', 'pet grooming', 'pet skin problems', 'healthy pet coat', 'pet skin care', 'dog skin health', 'cat skin health', 'pet coat care'],
  pathname: '/pet-health/skin-and-coat-health',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Pet Skin and Coat Health Guide',
    type: 'image/png',
  }],
});

export default function SkinAndCoatHealthPage() {
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbypetcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Pet Health', item: 'https://nearbypetcare.com/pet-health' },
      { '@type': 'ListItem', position: 3, name: 'Skin and Coat Health', item: 'https://nearbypetcare.com/pet-health/skin-and-coat-health' },
    ],
  };

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pet Skin and Coat Health: Complete Care Guide',
    description: 'Learn how to maintain healthy skin and coat for your pet through proper grooming, nutrition, and care.',
    url: 'https://nearbypetcare.com/pet-health/skin-and-coat-health',
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    author: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nearbypetcare.com/logo.png',
      },
    },
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How often should I groom my pet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Grooming frequency depends on your pet\'s coat type. Long-haired pets may need daily brushing, while short-haired pets may need brushing 2-3 times per week. Regular grooming helps remove dead hair, distribute natural oils, prevent matting, and allows you to check for skin problems early. Your veterinarian or groomer can recommend a schedule based on your pet\'s specific needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'What causes dry, flaky skin in pets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dry, flaky skin can be caused by various factors including poor nutrition, allergies, parasites, environmental factors, over-bathing, underlying health conditions, or skin infections. If your pet has persistent dry skin, consult with your veterinarian to determine the cause and appropriate treatment.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I improve my pet\'s coat health?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Improve coat health by providing a balanced diet with adequate protein and essential fatty acids, regular grooming, appropriate bathing (not too frequent), ensuring your pet gets proper exercise, managing stress, and addressing any underlying health conditions. Omega-3 fatty acids from fish oil can also support healthy skin and coat.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are signs of skin problems in pets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Signs of skin problems include excessive scratching, redness, hair loss, dry or flaky skin, unusual odors, bumps or lumps, scabs or sores, changes in skin color, and visible parasites. If you notice any of these signs, especially if they persist or worsen, consult with your veterinarian.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can diet affect my pet\'s skin and coat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, diet significantly affects skin and coat health. A balanced diet with adequate high-quality protein, essential fatty acids (especially omega-3 and omega-6), vitamins, and minerals is essential for healthy skin and a shiny coat. Poor nutrition can lead to dull coat, dry skin, and other skin problems. Consult with your veterinarian about the best diet for your pet.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should I bathe my pet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bathing frequency depends on your pet\'s coat type, lifestyle, and skin condition. Most pets don\'t need frequent bathing - monthly or as needed is often sufficient. Over-bathing can strip natural oils and cause dry skin. Use pet-specific shampoos and follow your veterinarian\'s recommendations. Some pets with skin conditions may need medicated baths as prescribed by a veterinarian.',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Pet Health', href: '/pet-health' },
            { name: 'Skin and Coat Health', href: '/pet-health/skin-and-coat-health' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">✨</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Skin & Coat Care</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">✨</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Skin and Coat Health
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Learn how to maintain healthy skin and coat for your pet. Discover common skin conditions, prevention methods, treatment options, and when to seek veterinary care for skin and coat issues.
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🪮</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Coat Care</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🧴</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Skin Health</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💊</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Treatment</span>
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
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              A healthy skin and coat are indicators of your pet's overall wellbeing. Your pet's skin and coat condition can tell you a lot about their health, nutrition, and care. This comprehensive guide covers how to maintain healthy skin and coat through proper nutrition, grooming, and care, as well as how to identify and address common skin problems.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300"><strong>Important:</strong> Persistent skin problems, severe itching, hair loss, or other concerning skin changes should be evaluated by a veterinarian. Skin issues can indicate underlying health problems that require professional diagnosis and treatment.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Understanding Skin and Coat Health</h2>
            <p className="mb-4">
              Your pet's skin is their largest organ and serves as a protective barrier against the environment. The coat provides insulation, protection, and can indicate overall health. Healthy skin should be smooth, supple, and free of irritation. A healthy coat should be shiny, smooth, and free of excessive shedding, mats, or bald patches.
            </p>
            <p className="mb-4">
              Many factors influence skin and coat health, including nutrition, grooming practices, environmental factors, genetics, and underlying health conditions. Understanding these factors helps you provide the best care for your pet's skin and coat.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Nutrition for Healthy Skin and Coat</h2>
            <p className="mb-4">
              Proper nutrition is fundamental to healthy skin and coat. The nutrients your pet consumes directly affect the condition of their skin and fur.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Essential Nutrients</h3>
            <p className="mb-3"><strong>Protein:</strong> High-quality protein is essential for healthy skin and coat. Protein provides the building blocks for hair growth and skin cell regeneration. Ensure your pet's diet contains adequate, high-quality protein sources appropriate for their species and life stage.</p>
            <p className="mb-3"><strong>Omega-3 Fatty Acids:</strong> These essential fatty acids, found in fish oil and certain plant sources, help maintain healthy skin and promote a shiny coat. They can reduce inflammation and support skin barrier function. Omega-3 supplements may be beneficial, but consult your veterinarian before adding supplements to your pet's diet.</p>
            <p className="mb-3"><strong>Omega-6 Fatty Acids:</strong> Also important for skin health, omega-6 fatty acids are typically found in sufficient amounts in commercial pet foods. The balance between omega-3 and omega-6 is important for optimal skin health.</p>
            <p className="mb-3"><strong>Vitamins and Minerals:</strong> Vitamins A, E, and B-complex, as well as zinc and other minerals, play important roles in skin and coat health. A balanced, complete pet food should provide these nutrients in appropriate amounts.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Choosing the Right Diet</h3>
            <p className="mb-4">
              Select a high-quality, balanced diet appropriate for your pet's species, age, and health status. Look for foods that list high-quality protein sources first and contain essential fatty acids. If your pet has specific skin or coat issues, your veterinarian may recommend a special diet or supplements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Regular Grooming</h2>
            <p className="mb-4">
              Regular grooming is essential for maintaining healthy skin and coat. Grooming removes dead hair, distributes natural oils, prevents matting, and allows you to check for skin problems early.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Brushing</h3>
            <p className="mb-3">Regular brushing frequency depends on your pet's coat type:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Long-haired pets:</strong> May need daily brushing to prevent mats and tangles</li>
              <li><strong>Medium-haired pets:</strong> Typically need brushing 2-3 times per week</li>
              <li><strong>Short-haired pets:</strong> May need brushing 1-2 times per week</li>
              <li><strong>Double-coated breeds:</strong> May need more frequent brushing, especially during shedding seasons</li>
            </ul>
            <p className="mb-4">Use appropriate brushes and combs for your pet's coat type. Regular brushing helps remove dead hair, distribute natural oils throughout the coat, prevent matting, and allows you to check for skin problems, parasites, or abnormalities.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Bathing</h3>
            <p className="mb-3">Bathing frequency depends on your pet's needs:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Most pets don't need frequent bathing - monthly or as needed is often sufficient</li>
              <li>Over-bathing can strip natural oils and cause dry, irritated skin</li>
              <li>Use pet-specific shampoos that are pH-balanced for your pet's skin</li>
              <li>Some pets with skin conditions may need medicated baths as prescribed by a veterinarian</li>
              <li>Always rinse thoroughly to remove all shampoo residue</li>
            </ul>
            <p className="mb-4">When bathing, use lukewarm water, work shampoo into a lather, rinse thoroughly, and dry your pet completely. Avoid getting water in ears and eyes.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Nail Trimming</h3>
            <p className="mb-4">
              Regular nail trimming prevents overgrowth, which can cause discomfort and affect your pet's gait. Long nails can also break or split, causing pain and potential infection. Trim nails regularly, being careful to avoid the quick (the sensitive blood vessel inside the nail).
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Ear Care</h3>
            <p className="mb-4">
              Regular ear cleaning helps prevent infections and allows you to check for problems. Use pet-specific ear cleaners and cotton balls or gauze. Never use cotton swabs deep in the ear canal. Check ears regularly for redness, odor, discharge, or signs of irritation.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Signs of Skin Problems</h2>
            <p className="mb-4">
              Recognizing signs of skin problems early allows for prompt treatment and prevents conditions from worsening. Watch for these signs:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Common Signs</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Excessive scratching, licking, or biting:</strong> Can indicate allergies, parasites, or skin irritation</li>
              <li><strong>Redness or inflammation:</strong> May indicate infection, allergies, or irritation</li>
              <li><strong>Hair loss or bald patches:</strong> Can result from various causes including parasites, allergies, infections, or underlying health conditions</li>
              <li><strong>Dry or flaky skin:</strong> May indicate poor nutrition, allergies, parasites, or skin conditions</li>
              <li><strong>Unusual odors:</strong> Can indicate infection or skin conditions</li>
              <li><strong>Bumps, lumps, or sores:</strong> Should be evaluated by a veterinarian</li>
              <li><strong>Scabs or crusts:</strong> May indicate infection, parasites, or self-trauma from scratching</li>
              <li><strong>Changes in skin color:</strong> Can indicate various health issues</li>
              <li><strong>Visible parasites:</strong> Fleas, ticks, or mites require treatment</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">When to See a Veterinarian</h3>
            <p className="mb-4">
              Consult your veterinarian if you notice persistent skin problems, severe itching, hair loss, skin changes, or if your pet seems uncomfortable. Skin issues can indicate underlying health problems that require professional diagnosis and treatment. Early intervention often leads to better outcomes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Common Skin Problems</h2>
            <p className="mb-4">
              Understanding common skin problems helps you recognize issues early and seek appropriate care:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Allergies</h3>
            <p className="mb-3">Pets can develop allergies to various things including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Food ingredients</li>
              <li>Environmental allergens (pollen, dust, mold)</li>
              <li>Flea bites (flea allergy dermatitis)</li>
              <li>Contact allergens (certain materials, cleaning products)</li>
            </ul>
            <p className="mb-4">Allergies often cause itching, redness, and skin irritation. Treatment may include identifying and avoiding allergens, medications, special diets, or other therapies as recommended by your veterinarian.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Parasites</h3>
            <p className="mb-3">Parasites that can affect skin health include:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Fleas - cause itching, irritation, and can lead to flea allergy dermatitis</li>
              <li>Ticks - can cause irritation and transmit diseases</li>
              <li>Mites - can cause various skin conditions including mange</li>
            </ul>
            <p className="mb-4">Regular parasite prevention is essential for maintaining healthy skin. If you suspect parasites, consult your veterinarian for appropriate treatment.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Infections</h3>
            <p className="mb-3">Skin infections can be bacterial or fungal:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Bacterial infections often cause redness, pus, and odor</li>
              <li>Fungal infections (like ringworm) can cause circular lesions and hair loss</li>
              <li>Infections often require veterinary treatment with appropriate medications</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Hot Spots</h3>
            <p className="mb-4">
              Hot spots are areas of acute, moist dermatitis that can develop quickly. They're often caused by self-trauma from scratching or licking due to underlying irritation. Hot spots require veterinary treatment to prevent worsening and infection.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Promoting Healthy Skin and Coat</h2>
            <p className="mb-4">
              A comprehensive approach to skin and coat health includes:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Proper nutrition:</strong> Feed a balanced, high-quality diet appropriate for your pet</li>
              <li><strong>Regular grooming:</strong> Brush regularly, bathe as needed, and maintain good hygiene</li>
              <li><strong>Parasite prevention:</strong> Use year-round preventives for fleas, ticks, and other parasites</li>
              <li><strong>Environmental management:</strong> Reduce exposure to allergens and irritants when possible</li>
              <li><strong>Stress reduction:</strong> Minimize stress, which can affect skin health</li>
              <li><strong>Regular veterinary care:</strong> Annual check-ups help detect and address problems early</li>
              <li><strong>Exercise:</strong> Regular exercise supports overall health, including skin and coat</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Breed-Specific Considerations</h2>
            <p className="mb-4">
              Different breeds may have specific skin and coat care needs:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Some breeds are prone to specific skin conditions</li>
              <li>Coat types require different grooming approaches</li>
              <li>Some breeds may need professional grooming regularly</li>
              <li>Breed-specific health conditions may affect skin and coat</li>
            </ul>
            <p className="mb-4">Your veterinarian or a professional groomer can provide breed-specific recommendations for your pet.</p>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300"><strong>Remember:</strong> This guide provides general information about skin and coat health. Individual pets may have unique needs, and persistent or severe skin problems should be evaluated by a veterinarian. Your veterinarian can provide personalized recommendations based on your pet's specific needs and health status.</p>
            </div>
          </div>

            {/* FAQ Section */}
            <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How often should I groom my pet?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Grooming frequency depends on your pet's coat type. Long-haired pets may need daily brushing, while short-haired pets may need brushing 2-3 times per week. Regular grooming helps remove dead hair, distribute natural oils, prevent matting, and allows you to check for skin problems early. Your veterinarian or groomer can recommend a schedule based on your pet's specific needs and coat type.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What causes dry, flaky skin in pets?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Dry, flaky skin can be caused by various factors including poor nutrition, allergies, parasites, environmental factors, over-bathing, underlying health conditions, or skin infections. If your pet has persistent dry skin, consult with your veterinarian to determine the cause and appropriate treatment. Treatment may include dietary changes, supplements, medicated shampoos, or addressing underlying conditions.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How can I improve my pet's coat health?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Improve coat health by providing a balanced diet with adequate protein and essential fatty acids, regular grooming, appropriate bathing (not too frequent), ensuring your pet gets proper exercise, managing stress, and addressing any underlying health conditions. Omega-3 fatty acids from fish oil can also support healthy skin and coat, but consult your veterinarian before adding supplements.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What are signs of skin problems in pets?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Signs of skin problems include excessive scratching, redness, hair loss, dry or flaky skin, unusual odors, bumps or lumps, scabs or sores, changes in skin color, and visible parasites. If you notice any of these signs, especially if they persist or worsen, consult with your veterinarian. Early detection and treatment often lead to better outcomes.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Can diet affect my pet's skin and coat?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Yes, diet significantly affects skin and coat health. A balanced diet with adequate high-quality protein, essential fatty acids (especially omega-3 and omega-6), vitamins, and minerals is essential for healthy skin and a shiny coat. Poor nutrition can lead to dull coat, dry skin, and other skin problems. Consult with your veterinarian about the best diet for your pet's specific needs.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How often should I bathe my pet?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Bathing frequency depends on your pet's coat type, lifestyle, and skin condition. Most pets don't need frequent bathing - monthly or as needed is often sufficient. Over-bathing can strip natural oils and cause dry skin. Use pet-specific shampoos that are pH-balanced for your pet's skin and follow your veterinarian's recommendations. Some pets with skin conditions may need medicated baths as prescribed by a veterinarian.</p>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Pet Health Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/pet-grooming" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Pet Grooming Guides</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn detailed grooming techniques and tips for maintaining your pet's coat.</p>
                </Link>
                <Link href="/pet-health/parasite-control-ticks-fleas-worms" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Parasite Control</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn about preventing parasites that can affect skin health.</p>
                </Link>
                <Link href="/pet-health/common-diseases" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Common Pet Diseases</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn about diseases that can affect skin and coat health.</p>
                </Link>
                <Link href="/pet-health" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">All Pet Health Guides</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Explore all our comprehensive pet health and wellness guides.</p>
                </Link>
          </div>
            </section>

              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <Link href="/pet-health" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                  ← Back to Pet Health Guides
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <HealthSidebar />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
