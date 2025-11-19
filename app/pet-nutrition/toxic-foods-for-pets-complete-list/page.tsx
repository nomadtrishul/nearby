import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Toxic Foods for Pets - Complete List with Vet Warnings | Nearby Pet Care',
  description: 'Complete list of foods that are toxic or dangerous for dogs, cats, and other pets. Learn what foods to avoid and what to do if your pet ingests something toxic.',
  keywords: ['toxic foods for pets', 'foods dogs cant eat', 'foods cats cant eat', 'poisonous foods pets', 'pet food safety'],
  openGraph: {
    title: 'Toxic Foods for Pets - Complete List | Nearby Pet Care',
    description: 'Complete list of foods that are toxic or dangerous for dogs, cats, and other pets.',
    type: 'article',
    url: 'https://nearbypetcare.com/pet-nutrition/toxic-foods-for-pets-complete-list',
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/pet-nutrition/toxic-foods-for-pets-complete-list',
  },
};

export default function ToxicFoodsPage() {
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbypetcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Pet Nutrition', item: 'https://nearbypetcare.com/pet-nutrition' },
      { '@type': 'ListItem', position: 3, name: 'Toxic Foods for Pets', item: 'https://nearbypetcare.com/pet-nutrition/toxic-foods-for-pets-complete-list' },
    ],
  };

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Toxic Foods for Pets - Complete List',
    description: 'Complete list of foods that are toxic or dangerous for dogs, cats, and other pets.',
    url: 'https://nearbypetcare.com/pet-nutrition/toxic-foods-for-pets-complete-list',
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    author: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
    },
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pet-nutrition" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Nutrition</Link>
            <span className="mx-2">/</span>
            <span>Toxic Foods for Pets</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Toxic Foods for Pets: Complete List
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Many common human foods can be toxic or dangerous to pets. This comprehensive list helps you identify foods to avoid and understand the risks they pose.
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300 font-bold">
                Emergency: If your pet has ingested a toxic substance, contact your veterinarian or animal poison control immediately.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Common Toxic Foods</h2>
            <div className="space-y-4 mb-6">
              {[
                { food: 'Chocolate', risk: 'High', effects: 'Vomiting, diarrhea, seizures, death' },
                { food: 'Grapes & Raisins', risk: 'High', effects: 'Kidney failure' },
                { food: 'Onions & Garlic', risk: 'High', effects: 'Anemia, gastrointestinal issues' },
                { food: 'Xylitol', risk: 'Extreme', effects: 'Rapid insulin release, liver failure' },
                { food: 'Alcohol', risk: 'High', effects: 'Vomiting, coordination problems, coma' },
                { food: 'Caffeine', risk: 'High', effects: 'Rapid breathing, heart palpitations' },
                { food: 'Avocado', risk: 'Moderate', effects: 'Vomiting, diarrhea (dogs), toxic to birds' },
                { food: 'Macadamia Nuts', risk: 'Moderate', effects: 'Weakness, vomiting, hyperthermia' },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900 dark:text-white">{item.food}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      item.risk === 'Extreme' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' :
                      item.risk === 'High' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                    }`}>
                      {item.risk} Risk
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Effects: {item.effects}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-nutrition" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
              ← Back to Pet Nutrition Guides
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

