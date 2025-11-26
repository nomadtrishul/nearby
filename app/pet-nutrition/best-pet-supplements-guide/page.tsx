import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import NutritionSidebar from '@/components/NutritionSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Best Pet Supplements Guide - Omega-3, Probiotics & More | Nearby Pet Care',
  description: 'Learn about essential supplements for pets including omega-3 fatty acids, probiotics, vitamins, and minerals. When and why to supplement your pet\'s diet. Veterinary recommendations.',
  keywords: ['pet supplements', 'dog supplements', 'cat supplements', 'omega 3 for pets', 'pet probiotics', 'pet vitamins', 'pet joint supplements', 'pet health supplements'],
  pathname: '/pet-nutrition/best-pet-supplements-guide',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Best Pet Supplements Guide - Complete Guide to Pet Supplements',
    type: 'image/png',
  }],
});

export default function BestPetSupplementsPage() {
  const currentDate = new Date().toISOString();
  
  // Breadcrumb Schema
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbypetcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Pet Nutrition', item: 'https://nearbypetcare.com/pet-nutrition' },
      { '@type': 'ListItem', position: 3, name: 'Best Pet Supplements Guide', item: 'https://nearbypetcare.com/pet-nutrition/best-pet-supplements-guide' },
    ],
  };

  // Article Schema
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Pet Supplements Guide - Omega-3, Probiotics & More',
    description: 'Learn about essential supplements for pets including omega-3 fatty acids, probiotics, vitamins, and minerals. When and why to supplement your pet\'s diet.',
    url: 'https://nearbypetcare.com/pet-nutrition/best-pet-supplements-guide',
    datePublished: '2024-01-01T00:00:00+00:00',
    dateModified: currentDate,
    author: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      url: 'https://nearbypetcare.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nearbypetcare.com/logo.png',
        width: 600,
        height: 60,
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nearbypetcare.com/logo.png',
        width: 600,
        height: 60,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://nearbypetcare.com/pet-nutrition/best-pet-supplements-guide',
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
    },
    articleSection: 'Pet Nutrition',
    inLanguage: 'en-US',
    keywords: 'pet supplements, omega-3, probiotics, pet vitamins, pet health',
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24" itemScope itemType="https://schema.org/Article">
      {/* Structured Data - Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      {/* Structured Data - Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
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
            { name: 'Pet Nutrition', href: '/pet-nutrition' },
            { name: 'Best Pet Supplements Guide', href: '/pet-nutrition/best-pet-supplements-guide' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">💊</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Supplements</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">💊</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Best Pet Supplements Guide
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Learn about essential supplements for pets including omega-3 fatty acids, probiotics, vitamins, and minerals. When and why to supplement your pet's diet.
            </p>
          </div>
        </div>
      </section>

      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Walk into any pet store or browse online, and you'll find shelves full of supplements promising to improve your pet's health. From omega-3s to probiotics to joint support, the options can be overwhelming. The truth is, most pets eating a balanced, high-quality commercial diet don't need supplements. But in certain situations, the right supplement can make a real difference. This guide will help you understand when supplements might be beneficial, which ones have scientific backing, and how to use them safely.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Do Pets Really Need Supplements?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The short answer: usually not. A well-formulated commercial pet food that meets AAFCO standards should provide all the nutrients your pet needs. However, there are situations where supplements can be helpful or even necessary:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Pets on homemade diets (supplements are often essential to ensure nutritional completeness)</li>
              <li>Pets with specific health conditions that benefit from targeted supplementation</li>
              <li>Senior pets who might need extra support for aging joints or cognitive function</li>
              <li>Pets with certain deficiencies identified by your veterinarian</li>
              <li>Pets with skin, coat, or digestive issues that might benefit from specific supplements</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The key is understanding that supplements should complement a good diet, not replace it. And more isn't always better—over-supplementation can be dangerous.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Omega-3 Fatty Acids</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Omega-3 fatty acids, particularly EPA and DHA, are among the most well-researched and beneficial supplements for pets.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Benefits</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Skin and coat health:</strong> Can reduce inflammation, improve coat shine, and help with dry, itchy skin</li>
              <li><strong>Anti-inflammatory effects:</strong> May help with arthritis, allergies, and other inflammatory conditions</li>
              <li><strong>Brain and eye development:</strong> Important for puppies and kittens, and may support cognitive function in seniors</li>
              <li><strong>Heart health:</strong> Some evidence suggests benefits for cardiovascular health</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Sources</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Fish oil (from cold-water fish like salmon, sardines, or anchovies) is the best source of EPA and DHA. Flaxseed oil provides ALA (alpha-linolenic acid), which pets can convert to EPA and DHA, but less efficiently. For maximum benefit, choose a high-quality fish oil supplement specifically formulated for pets.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Dosage and Safety</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Follow your veterinarian's recommendations. Too much can cause digestive upset, interfere with blood clotting, or contribute to weight gain. Quality matters—look for products that are tested for purity and freshness.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Probiotics</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Probiotics are beneficial bacteria that support gut health. The research on probiotics for pets is growing, and they show promise for certain conditions.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Benefits</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Digestive health:</strong> May help with diarrhea, especially after antibiotic use or dietary changes</li>
              <li><strong>Immune support:</strong> A significant portion of the immune system is in the gut</li>
              <li><strong>Gut microbiome balance:</strong> Can help restore healthy bacteria after illness or medication</li>
              <li><strong>Potential benefits for allergies:</strong> Some research suggests probiotics might help with allergic conditions</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Sources</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Probiotic supplements for pets contain specific strains of beneficial bacteria. Some commercial pet foods also include probiotics. Look for products with multiple strains and adequate colony-forming units (CFUs). Different strains may have different benefits, so discuss with your veterinarian which might be best for your pet.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">When to Use</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Probiotics are often recommended during or after antibiotic treatment, when switching foods, or for pets with chronic digestive issues. They're generally safe, but quality and proper storage matter—probiotics are living organisms that can die if not stored correctly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Glucosamine and Chondroitin</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These are popular supplements for joint health, especially for older pets or those with arthritis.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Benefits</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Joint health:</strong> May help maintain cartilage and joint fluid</li>
              <li><strong>Arthritis support:</strong> Can reduce inflammation and improve mobility in some pets</li>
              <li><strong>Prevention:</strong> Some evidence suggests they might help prevent joint issues in large breed dogs</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">How They Work</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Glucosamine is a building block of cartilage, and chondroitin helps maintain cartilage elasticity. The research on their effectiveness is mixed—some studies show benefits, others don't. However, many veterinarians and pet owners report positive results, and they're generally considered safe.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Sources</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Available as standalone supplements or combined. Some pet foods include them. MSM (methylsulfonylmethane) is sometimes added to joint supplements. Look for products with adequate dosages—many over-the-counter products are under-dosed.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Multivitamins</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Most pets eating balanced commercial diets don't need multivitamins. In fact, adding them can be risky because it's easy to over-supplement certain vitamins and minerals.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">When They Might Be Needed</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Pets on homemade diets (but work with a nutritionist to determine specific needs)</li>
              <li>Pets with specific deficiencies identified by blood work</li>
              <li>Pets with conditions that affect nutrient absorption</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Risks of Over-Supplementation</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Fat-soluble vitamins (A, D, E, K) can build up in the body and cause toxicity. Excess calcium can cause skeletal problems. Too much of certain minerals can interfere with the absorption of others. This is why "just in case" supplementation isn't recommended—it can do more harm than good.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Other Supplements to Consider</h2>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Digestive Enzymes</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              May help pets with pancreatic insufficiency or digestive issues. Generally safe, but should be used under veterinary guidance.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Antioxidants</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Vitamins C and E, beta-carotene, and other antioxidants may support immune function and cognitive health in seniors. Many high-quality pet foods already include adequate antioxidants.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Fiber Supplements</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Psyllium, pumpkin, or other fiber sources can help with constipation or diarrhea. Often better to get fiber from whole foods, but supplements can be useful in specific situations.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Calming Supplements</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Products containing L-theanine, chamomile, or other calming ingredients may help with anxiety. Research is limited, but many owners report benefits. Not a substitute for addressing underlying anxiety issues.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Choosing Quality Supplements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Not all supplements are created equal. Here's what to look for:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Veterinary-recommended brands:</strong> Products recommended by veterinarians are more likely to be properly formulated and tested</li>
              <li><strong>Third-party testing:</strong> Look for products tested for purity and potency</li>
              <li><strong>Proper storage:</strong> Some supplements (like probiotics) need refrigeration</li>
              <li><strong>Adequate dosages:</strong> Many over-the-counter products are under-dosed</li>
              <li><strong>Expiration dates:</strong> Check and follow expiration dates</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Safety Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Supplements can interact with medications, cause side effects, or be dangerous if over-dosed. Always:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Consult your veterinarian before starting any supplement</li>
              <li>Disclose all supplements when your vet asks about medications</li>
              <li>Follow dosage instructions carefully</li>
              <li>Watch for side effects and report them to your vet</li>
              <li>Don't assume "natural" means safe—many natural substances can be harmful</li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Important Reminder:</strong> Supplements should never replace proper veterinary care or a balanced diet. If your pet has health issues, work with your veterinarian to address the root cause rather than just treating symptoms with supplements. And remember—most healthy pets eating quality commercial food don't need supplements at all. When in doubt, ask your vet.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The Bottom Line</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Supplements can be valuable tools when used appropriately, but they're not magic bullets. The foundation of your pet's health should always be a balanced, high-quality diet, regular exercise, and proper veterinary care. If you're considering supplements, have a conversation with your veterinarian about whether they're appropriate for your pet's specific situation. They can help you choose the right products, determine proper dosages, and monitor for any issues. Your pet's health is worth getting it right.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-nutrition" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
              ← Back to Pet Nutrition Guides
            </Link>
          </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <NutritionSidebar />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

