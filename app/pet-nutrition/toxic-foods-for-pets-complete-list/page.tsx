import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import NutritionSidebar from '@/components/NutritionSidebar';

export const metadata: Metadata = {
  title: 'Toxic Foods for Pets - Complete List with Vet Warnings | Nearby Pet Care',
  description: 'Complete list of foods that are toxic or dangerous for dogs, cats, and other pets. Learn what foods to avoid and what to do if your pet ingests something toxic. Emergency contact information included.',
  keywords: ['toxic foods for pets', 'foods dogs cant eat', 'foods cats cant eat', 'poisonous foods pets', 'pet food safety', 'pet poisoning', 'emergency pet care', 'ASPCA poison control'],
  authors: [{ name: 'Nearby Pet Care Team', url: 'https://nearbypetcare.com' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Toxic Foods for Pets - Complete List | Nearby Pet Care',
    description: 'Complete list of foods that are toxic or dangerous for dogs, cats, and other pets. Learn what foods to avoid and emergency procedures.',
    type: 'article',
    url: 'https://nearbypetcare.com/pet-nutrition/toxic-foods-for-pets-complete-list',
    siteName: 'Nearby Pet Care',
    locale: 'en_US',
    alternateLocale: ['en_GB', 'en_CA', 'en_AU'],
    publishedTime: '2024-01-01T00:00:00+00:00',
    modifiedTime: new Date().toISOString(),
    authors: ['Nearby Pet Care Team'],
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Toxic Foods for Pets - Complete Safety Guide',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toxic Foods for Pets - Complete List | Nearby Pet Care',
    description: 'Complete list of foods that are toxic or dangerous for dogs, cats, and other pets.',
    images: ['https://nearbypetcare.com/og-image.png'],
    creator: '@nearbypetcare',
    site: '@nearbypetcare',
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/pet-nutrition/toxic-foods-for-pets-complete-list',
    languages: {
      'en-US': 'https://nearbypetcare.com/pet-nutrition/toxic-foods-for-pets-complete-list',
      'en-GB': 'https://nearbypetcare.com/pet-nutrition/toxic-foods-for-pets-complete-list',
      'en-CA': 'https://nearbypetcare.com/pet-nutrition/toxic-foods-for-pets-complete-list',
      'en-AU': 'https://nearbypetcare.com/pet-nutrition/toxic-foods-for-pets-complete-list',
    },
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
  other: {
    'article:published_time': '2024-01-01T00:00:00+00:00',
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Nearby Pet Care Team',
    'article:section': 'Pet Nutrition',
    'article:tag': 'toxic foods, pet safety, pet poisoning, emergency pet care',
  },
};

export default function ToxicFoodsPage() {
  const currentDate = new Date().toISOString();
  
  // Breadcrumb Schema
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbypetcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Pet Nutrition', item: 'https://nearbypetcare.com/pet-nutrition' },
      { '@type': 'ListItem', position: 3, name: 'Toxic Foods for Pets', item: 'https://nearbypetcare.com/pet-nutrition/toxic-foods-for-pets-complete-list' },
    ],
  };

  // Enhanced Article Schema
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Toxic Foods for Pets - Complete List',
    description: 'Complete list of foods that are toxic or dangerous for dogs, cats, and other pets. Learn what foods to avoid and what to do if your pet ingests something toxic.',
    url: 'https://nearbypetcare.com/pet-nutrition/toxic-foods-for-pets-complete-list',
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
      '@id': 'https://nearbypetcare.com/pet-nutrition/toxic-foods-for-pets-complete-list',
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
    },
    articleSection: 'Pet Nutrition',
    inLanguage: 'en-US',
    keywords: 'toxic foods, pet safety, pet poisoning, emergency pet care, foods dogs cant eat',
    about: {
      '@type': 'Thing',
      name: 'Pet Safety',
    },
  };

  // FAQ Schema for toxic foods
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What foods are toxic to dogs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Common toxic foods for dogs include chocolate, grapes, raisins, onions, garlic, xylitol (artificial sweetener), alcohol, caffeine, macadamia nuts, and raw yeast dough. If your dog ingests any of these, contact your veterinarian or animal poison control immediately.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I do if my pet eats something toxic?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If your pet ingests a toxic substance, contact your veterinarian or animal poison control immediately (ASPCA Animal Poison Control: 888-426-4435, Pet Poison Helpline: 855-764-7661). Do not induce vomiting unless specifically instructed by a professional. Collect information about what was ingested, how much, and when.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are grapes toxic to cats?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Grapes and raisins are highly toxic to dogs and can cause kidney failure. While less is known about their effects on cats, it\'s best to avoid feeding grapes to cats as well. Always err on the side of caution.',
        },
      },
    ],
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
      {/* Structured Data - FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-200/30 dark:bg-red-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200/30 dark:bg-orange-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Pet Nutrition', href: '/pet-nutrition' },
            { name: 'Toxic Foods for Pets', href: '/pet-nutrition/toxic-foods-for-pets-complete-list' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-red-200/50 dark:border-red-700/50 rounded-full shadow-sm">
              <span className="text-2xl">⚠️</span>
              <span className="text-sm font-semibold text-red-700 dark:text-red-300">Safety Guide</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">⚠️</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
                Toxic Foods for Pets
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Complete list of foods that are toxic or dangerous for dogs, cats, and other pets. Learn what foods to avoid and what to do if your pet ingests something toxic.
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
              Many common human foods can be toxic or dangerous to pets. This comprehensive list helps you identify foods to avoid and understand the risks they pose.
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300 font-bold">
                Emergency: If your pet has ingested a toxic substance, contact your veterinarian or animal poison control immediately.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Understanding Food Toxicity in Pets</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              What makes a food toxic to pets? Sometimes it's a compound that pets can't metabolize properly. Other times, it's a substance that's fine for humans but dangerous for animals due to differences in body size, metabolism, or digestive systems. The severity of toxicity depends on the amount consumed, the size of your pet, and sometimes the type of food (for example, dark chocolate is more dangerous than milk chocolate).
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              It's also important to understand that some foods are more dangerous to certain species. For instance, grapes are highly toxic to dogs but less is known about their effects on cats. Always err on the side of caution—if you're not sure whether something is safe, don't feed it to your pet.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Extremely Dangerous Foods</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These foods can cause severe illness or death even in small amounts. If your pet ingests any of these, seek immediate veterinary care:
            </p>

            <div className="space-y-4 mb-6">
              {[
                { 
                  food: 'Xylitol (Artificial Sweetener)', 
                  risk: 'Extreme', 
                  effects: 'Causes rapid insulin release leading to dangerously low blood sugar, liver failure, and death. Found in sugar-free gum, candy, baked goods, and some peanut butters.',
                  symptoms: 'Vomiting, weakness, collapse, seizures, liver failure',
                  amount: 'Even small amounts can be fatal'
                },
                { 
                  food: 'Chocolate', 
                  risk: 'Extreme to High', 
                  effects: 'Contains theobromine and caffeine, which pets metabolize slowly. Dark chocolate and baking chocolate are most dangerous.',
                  symptoms: 'Vomiting, diarrhea, rapid breathing, increased heart rate, seizures, death',
                  amount: 'Toxicity depends on type: dark chocolate is most dangerous, white chocolate least'
                },
                { 
                  food: 'Grapes and Raisins', 
                  risk: 'Extreme', 
                  effects: 'Can cause sudden kidney failure in dogs. The exact toxic compound is unknown, and sensitivity varies between dogs.',
                  symptoms: 'Vomiting, diarrhea, lethargy, decreased urination, kidney failure',
                  amount: 'Even small amounts can be dangerous; some dogs are more sensitive'
                },
              ].map((item, i) => (
                <div key={i} className="border-2 border-red-300 dark:border-red-700 rounded-lg p-4 bg-red-50 dark:bg-red-900/10">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-red-900 dark:text-red-300 text-lg">{item.food}</h3>
                    <span className="px-3 py-1 rounded text-xs font-semibold bg-red-200 text-red-900 dark:bg-red-900/30 dark:text-red-300">
                      {item.risk} Risk
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Effects:</strong> {item.effects}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Symptoms:</strong> {item.symptoms}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Dangerous Amount:</strong> {item.amount}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Highly Dangerous Foods</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These foods can cause serious illness and require immediate veterinary attention:
            </p>

            <div className="space-y-4 mb-6">
              {[
                { 
                  food: 'Onions, Garlic, Chives, and Leeks', 
                  risk: 'High', 
                  effects: 'Contain compounds that damage red blood cells, leading to hemolytic anemia. All forms are dangerous—raw, cooked, powdered, or in foods.',
                  symptoms: 'Weakness, pale gums, rapid breathing, red or brown urine, collapse',
                  amount: 'Cats are more sensitive; even small amounts can be dangerous'
                },
                { 
                  food: 'Alcohol', 
                  risk: 'High', 
                  effects: 'Pets are much more sensitive to alcohol than humans. Can cause severe intoxication, organ damage, and death.',
                  symptoms: 'Vomiting, diarrhea, difficulty breathing, tremors, coma, death',
                  amount: 'Even small amounts can be dangerous'
                },
                { 
                  food: 'Caffeine (Coffee, Tea, Energy Drinks)', 
                  risk: 'High', 
                  effects: 'Stimulates the nervous system and heart. Pets are much more sensitive than humans.',
                  symptoms: 'Restlessness, rapid breathing, heart palpitations, muscle tremors, seizures',
                  amount: 'Even small amounts can be dangerous'
                },
                { 
                  food: 'Macadamia Nuts', 
                  risk: 'High', 
                  effects: 'Can cause neurological symptoms in dogs. The exact mechanism is unknown.',
                  symptoms: 'Weakness, vomiting, tremors, hyperthermia, inability to walk',
                  amount: 'Even small amounts can cause symptoms'
                },
                { 
                  food: 'Raw Yeast Dough', 
                  risk: 'High', 
                  effects: 'Dough can rise in the stomach, causing bloating and potential rupture. Fermentation produces alcohol.',
                  symptoms: 'Bloating, vomiting, disorientation, difficulty breathing',
                  amount: 'Any amount can be dangerous'
                },
              ].map((item, i) => (
                <div key={i} className="border border-orange-300 dark:border-orange-700 rounded-lg p-4 bg-orange-50 dark:bg-orange-900/10">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-orange-900 dark:text-orange-300">{item.food}</h3>
                    <span className="px-2 py-1 rounded text-xs font-semibold bg-orange-200 text-orange-900 dark:bg-orange-900/30 dark:text-orange-300">
                      {item.risk} Risk
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Effects:</strong> {item.effects}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Symptoms:</strong> {item.symptoms}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Note:</strong> {item.amount}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Moderately Dangerous Foods</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These foods can cause illness, especially in larger amounts or with repeated exposure:
            </p>

            <div className="space-y-4 mb-6">
              {[
                { 
                  food: 'Avocado', 
                  risk: 'Moderate', 
                  effects: 'Contains persin, which can cause vomiting and diarrhea in dogs. The pit is a choking hazard. More toxic to birds and some other animals.',
                  symptoms: 'Vomiting, diarrhea, difficulty breathing (in birds)',
                  note: 'Flesh is less toxic than pit and skin; still best to avoid'
                },
                { 
                  food: 'Raw Potatoes and Green Potatoes', 
                  risk: 'Moderate', 
                  effects: 'Contain solanine, which can cause gastrointestinal and neurological symptoms. Green parts and sprouts are most dangerous.',
                  symptoms: 'Vomiting, diarrhea, lethargy, weakness',
                  note: 'Cooked potatoes (plain) are generally safe in small amounts'
                },
                { 
                  food: 'Tomatoes (Green/Unripe)', 
                  risk: 'Moderate', 
                  effects: 'Contain solanine. Ripe red tomatoes are generally safe in small amounts, but green parts are dangerous.',
                  symptoms: 'Gastrointestinal upset, weakness, confusion',
                  note: 'Ripe red tomatoes are less concerning but still best limited'
                },
                { 
                  food: 'Milk and Dairy Products', 
                  risk: 'Moderate', 
                  effects: 'Many pets are lactose intolerant and can\'t digest dairy properly, leading to digestive upset.',
                  symptoms: 'Vomiting, diarrhea, gas',
                  note: 'Not toxic per se, but often causes digestive issues'
                },
                { 
                  food: 'Raw Eggs', 
                  risk: 'Moderate', 
                  effects: 'Risk of Salmonella and E. coli. Raw egg whites contain avidin, which can interfere with biotin absorption.',
                  symptoms: 'Food poisoning, biotin deficiency with long-term feeding',
                  note: 'Cooked eggs are generally safe and nutritious'
                },
                { 
                  food: 'Salt and Salty Foods', 
                  risk: 'Moderate', 
                  effects: 'Excessive salt can cause sodium ion poisoning, leading to excessive thirst, urination, and potentially fatal complications.',
                  symptoms: 'Vomiting, diarrhea, excessive thirst, tremors, seizures',
                  note: 'Small amounts are fine, but avoid large quantities'
                },
                { 
                  food: 'Fatty Foods and Bones', 
                  risk: 'Moderate', 
                  effects: 'High-fat foods can cause pancreatitis. Cooked bones can splinter and cause choking or internal injuries.',
                  symptoms: 'Vomiting, diarrhea, abdominal pain (pancreatitis), choking, internal injuries (bones)',
                  note: 'Cooked bones are particularly dangerous; raw bones have risks too'
                },
              ].map((item, i) => (
                <div key={i} className="border border-yellow-300 dark:border-yellow-700 rounded-lg p-4 bg-yellow-50 dark:bg-yellow-900/10">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-yellow-900 dark:text-yellow-300">{item.food}</h3>
                    <span className="px-2 py-1 rounded text-xs font-semibold bg-yellow-200 text-yellow-900 dark:bg-yellow-900/30 dark:text-yellow-300">
                      {item.risk} Risk
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Effects:</strong> {item.effects}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Symptoms:</strong> {item.symptoms}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Note:</strong> {item.note}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Other Foods to Be Cautious About</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Nuts (other than macadamia):</strong> High in fat, can cause pancreatitis. Some nuts (like walnuts) can contain toxins. Best avoided.</li>
              <li><strong>Fruit pits and seeds:</strong> Can contain cyanide compounds and are choking hazards. Remove pits from peaches, plums, cherries, etc.</li>
              <li><strong>Rhubarb:</strong> Leaves contain oxalates that can cause kidney problems.</li>
              <li><strong>Mushrooms:</strong> Some wild mushrooms are extremely toxic. Best to avoid all mushrooms unless you're certain they're safe.</li>
              <li><strong>Hops (used in beer):</strong> Can cause malignant hyperthermia in dogs, which can be fatal.</li>
              <li><strong>Moldy or spoiled food:</strong> Can contain toxins that cause serious illness.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">What to Do If Your Pet Eats Something Toxic</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you suspect your pet has ingested something toxic:
            </p>
            <ol className="list-decimal pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Don't panic, but act quickly.</strong> Time matters in poisoning cases.</li>
              <li><strong>Call your veterinarian immediately</strong> or contact an animal poison control center (ASPCA Animal Poison Control: 888-426-4435, Pet Poison Helpline: 855-764-7661).</li>
              <li><strong>Don't induce vomiting</strong> unless specifically instructed by a professional. Some substances can cause more damage coming back up.</li>
              <li><strong>Collect information:</strong> What did they eat? How much? When? Bring the packaging or container if possible.</li>
              <li><strong>Follow professional advice.</strong> They may tell you to come in immediately or monitor at home.</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Prevention is Key</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The best approach is prevention:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Keep toxic foods out of reach—pets can be surprisingly resourceful</li>
              <li>Educate everyone in your household about what's dangerous</li>
              <li>Be careful with garbage—pets often get into things they shouldn't</li>
              <li>Read labels on products like peanut butter to check for xylitol</li>
              <li>When in doubt, don't feed it—there's no harm in being cautious</li>
              <li>Keep the number for poison control handy</li>
            </ul>
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

