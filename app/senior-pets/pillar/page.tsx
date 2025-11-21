import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import SeniorPetsSidebar from '@/components/SeniorPetsSidebar';

export const metadata: Metadata = {
  title: 'Senior Pet Care Overview: Complete Guide for Aging Pets | Nearby Pet Care',
  description: 'Complete overview of senior pet care topics. Learn how to support your aging pet\'s health, comfort, and quality of life through their golden years.',
  keywords: ['senior pet care overview', 'elderly pets', 'aging pets', 'senior dog care', 'senior cat care', 'pet aging', 'comprehensive senior pet care'],
  authors: [{ name: 'Nearby Pet Care Team' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Senior Pet Care Overview | Nearby Pet Care',
    description: 'Complete overview of senior pet care topics. Learn how to support your aging pet\'s health, comfort, and quality of life.',
    type: 'website',
    locale: 'en_US',
    url: 'https://nearbypetcare.com/senior-pets/pillar',
    siteName: 'Nearby Pet Care',
    images: [{
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Senior Pet Care Overview',
      type: 'image/png',
    }],
  },
  twitter: {
    card: 'summary_large_image',
  title: 'Senior Pet Care Overview | Nearby Pet Care',
    description: 'Complete overview of senior pet care topics. Learn how to support your aging pet\'s health, comfort, and quality of life.',
    images: ['https://nearbypetcare.com/og-image.png'],
    creator: '@nearbypetcare',
    site: '@nearbypetcare',
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
  alternates: { 
    canonical: 'https://nearbypetcare.com/senior-pets/pillar',
  },
  category: 'Pet Care',
};

export default function SeniorPetsPillarPage() {
  const currentDate = new Date().toISOString();
  
  const webPageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Senior Pet Care Overview',
    description: 'Complete overview of senior pet care topics. Learn how to support your aging pet\'s health, comfort, and quality of life through their golden years.',
    url: 'https://nearbypetcare.com/senior-pets/pillar',
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Nearby Pet Care',
      url: 'https://nearbypetcare.com',
    },
    about: {
      '@type': 'Thing',
      name: 'Senior Pet Care',
    },
    datePublished: '2024-01-01T00:00:00+00:00',
    dateModified: currentDate,
    publisher: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      url: 'https://nearbypetcare.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nearbypetcare.com/logo.png',
        width: 200,
        height: 48,
      },
    },
  };

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://nearbypetcare.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Senior Pets',
        item: 'https://nearbypetcare.com/senior-pets',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Overview',
        item: 'https://nearbypetcare.com/senior-pets/pillar',
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24" itemScope itemType="https://schema.org/WebPage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Senior Pets', href: '/senior-pets' },
            { name: 'Overview', href: '/senior-pets/pillar' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl" aria-hidden="true">📚</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Care Overview</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6" aria-hidden="true">❤️</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Senior Pet Care Overview
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Everything you need to know about caring for your aging pet. From mobility support and nutrition to comfort care and quality of life.
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
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Caring for a senior pet is both a privilege and a responsibility. Those gray whiskers and slower steps represent years of companionship, loyalty, and love. As your pet enters their golden years, their needs evolve, and understanding how to adapt your care can make all the difference in their comfort, health, and quality of life. This overview covers the essential aspects of senior pet care, helping you navigate this special chapter with confidence and compassion.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Understanding Senior Pet Needs</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Pets are generally considered "senior" around 7-10 years of age, though this varies by breed and size. Large breed dogs tend to age faster than small breeds, and cats often live longer than dogs. But age is just a number—what matters more is how your individual pet is doing. Some pets show signs of aging early, while others remain spry well into their senior years.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              As pets age, they may experience changes in mobility, metabolism, organ function, and overall health. These changes are normal, but they require adjustments in how you care for your pet. The goal isn't to stop aging—that's impossible—but to help your pet age gracefully, comfortably, and with the best possible quality of life.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Mobility Support and Joint Health</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Mobility issues are among the most common challenges senior pets face. Arthritis, joint stiffness, and general slowing down can affect your pet's ability to move comfortably. Supporting your pet's mobility involves a combination of weight management, appropriate exercise, joint supplements, comfortable bedding, and sometimes medications or alternative therapies.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Small changes around your home can make a big difference—ramps for getting into cars or onto furniture, non-slip surfaces, and easily accessible food and water bowls. Regular, gentle exercise helps maintain muscle strength and joint flexibility, while weight management reduces stress on aging joints. Working with your veterinarian to manage pain and inflammation can significantly improve your pet's comfort and mobility.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              <Link href="/senior-pets/mobility-support" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">Learn more about supporting your pet's mobility →</Link>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Senior-Specific Nutrition</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Nutrition plays a crucial role in supporting your senior pet's health. As pets age, their metabolic rate typically slows, they're usually less active, and they may develop health conditions that require dietary modifications. Senior pets often need fewer calories but still require high-quality nutrition to maintain muscle mass and support organ function.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Many senior pets benefit from foods specifically formulated for their life stage, which may include joint-supporting nutrients, easily digestible ingredients, and appropriate levels of protein, fiber, and other nutrients. Some pets develop health conditions like kidney disease or diabetes that require prescription diets. Working with your veterinarian to determine the right diet for your pet's specific needs is essential.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Weight management is particularly important for senior pets. Excess weight puts additional stress on joints and organs, while unintended weight loss can indicate health problems. Regular monitoring and adjustments to food intake can help maintain a healthy weight.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              <Link href="/senior-pets/senior-diet-guides" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">Explore senior pet nutrition guidelines →</Link>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Health Monitoring and Veterinary Care</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Regular veterinary care becomes even more important as pets age. Senior pets should typically see their veterinarian at least twice a year, and sometimes more frequently if they have health conditions. These visits allow your vet to monitor your pet's health, catch problems early, and adjust treatments as needed.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Common health issues in senior pets include arthritis, kidney disease, heart disease, dental problems, cognitive decline, and various types of cancer. Early detection and treatment can significantly impact outcomes and quality of life. Regular blood work, urinalysis, and other diagnostic tests can help identify problems before they become serious.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              At home, pay attention to changes in your pet's behavior, appetite, energy levels, mobility, and overall demeanor. You know your pet better than anyone, and you'll notice subtle changes that might indicate a problem. Don't hesitate to contact your veterinarian if something seems off—it's always better to check and find nothing than to miss something important.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Comfort and Quality of Life</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Maintaining your pet's comfort and quality of life is a primary goal of senior pet care. This means ensuring they're free from significant pain, can engage in activities they enjoy (even if modified), and feel secure and loved. Comfort measures might include soft, supportive bedding, easy access to food and water, help with grooming, and modifications to your home to accommodate mobility limitations.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Mental stimulation remains important for senior pets. While they might not be as active as they once were, they still benefit from gentle play, interaction, and engagement. Adapt activities to their current abilities—shorter walks, gentler play, or simply spending quiet time together can all be meaningful.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Pay attention to your pet's preferences and adjust your expectations. They might not want to do the same things they did when they were younger, and that's okay. The goal is to help them enjoy life at their current pace and ability level.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">End-of-Life Care Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              As difficult as it is to think about, planning for end-of-life care is an important part of being a responsible pet owner. This includes understanding quality of life assessment, knowing about palliative care options, and being prepared to make difficult decisions when the time comes. The goal is to ensure your pet's final days, weeks, or months are as comfortable and meaningful as possible.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Palliative care focuses on comfort and quality of life rather than cure. This might involve pain management, comfort measures, and adjustments to daily routines. When the time comes to say goodbye, euthanasia can be a final act of love—a way to end suffering and allow your pet to pass peacefully.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              These decisions are never easy, but working closely with your veterinarian and trusting your instincts can help you navigate this challenging time with compassion and love. Remember that you're not alone—your veterinarian, pet loss support groups, and others who have been through this can provide guidance and support.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              <Link href="/senior-pets/end-of-life-care" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">Learn more about end-of-life care →</Link>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Creating a Supportive Environment</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Your home environment plays a significant role in your senior pet's comfort and safety. Make sure your pet has easy access to everything they need—food, water, comfortable resting spots, and their litter box (for cats) or potty area (for dogs). Remove obstacles that could cause falls, and consider adding non-slip surfaces if you have hardwood or tile floors.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Temperature matters too—senior pets may be more sensitive to cold, so make sure they have warm, cozy places to rest. Keep their environment quiet and calm, as senior pets may be more easily stressed by loud noises or chaos.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">The Emotional Side of Senior Pet Care</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Caring for a senior pet can be emotionally challenging. Watching your once-vibrant companion slow down, dealing with health issues, and facing the reality of their mortality can be difficult. It's normal to feel sadness, worry, or even guilt. Remember that you're doing your best, and that your love and care make a real difference in your pet's quality of life.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              At the same time, this can be a deeply meaningful time. Senior pets often become even more affectionate and bonded with their families. The slower pace can create opportunities for quiet companionship and connection. Cherish these moments—they're precious, and they're what you'll remember most.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Remember: Every Pet is Unique</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                There's no one-size-fits-all approach to senior pet care. What works for one pet might not work for another. Some pets age gracefully with minimal issues, while others need more support. The key is working with your veterinarian to understand your pet's specific needs and adjusting your care accordingly. Be patient with yourself and with your pet. This is a journey you're on together, and your love, attention, and care are the most important things you can provide.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/senior-pets/mobility-support" className="p-6 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Mobility Support</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Help your pet stay active and comfortable</p>
              </Link>
              <Link href="/senior-pets/senior-diet-guides" className="p-6 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Senior Diet Guides</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Nutrition tailored to your aging pet's needs</p>
              </Link>
              <Link href="/senior-pets/end-of-life-care" className="p-6 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/30 dark:to-gray-900/30 border border-gray-200 dark:border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">End-of-Life Care</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Compassionate guidance for difficult times</p>
              </Link>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/senior-pets" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Senior Pets</Link>
            </div>
            </div>
            {/* Sidebar */}
            <aside className="lg:col-span-1" aria-label="Related resources">
              <SeniorPetsSidebar />
            </aside>
          </div>
        </div>
      </article>
    </main>
  );
}
