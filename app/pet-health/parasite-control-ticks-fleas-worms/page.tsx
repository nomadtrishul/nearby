import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import HealthSidebar from '@/components/HealthSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Parasite Control Guide: Ticks, Fleas & Worms',
  description: 'Complete guide to parasite control for pets. Learn about preventing and treating ticks, fleas, heartworms, and intestinal parasites.',
  keywords: ['pet parasites', 'flea control', 'tick prevention', 'heartworm prevention', 'pet deworming', 'flea treatment', 'tick removal', 'intestinal parasites', 'pet parasite prevention', 'flea and tick control'],
  pathname: '/pet-health/parasite-control-ticks-fleas-worms',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Parasite Control Guide',
    type: 'image/png',
  }],
});

export default function ParasiteControlPage() {
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbypetcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Pet Health', item: 'https://nearbypetcare.com/pet-health' },
      { '@type': 'ListItem', position: 3, name: 'Parasite Control', item: 'https://nearbypetcare.com/pet-health/parasite-control-ticks-fleas-worms' },
    ],
  };

  const authorStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Veterinary Content Team',
    jobTitle: 'Veterinary Health Content Specialists',
    worksFor: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
    },
    knowsAbout: ['Veterinary Medicine', 'Parasite Control', 'Flea and Tick Prevention', 'Heartworm Prevention'],
  };

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Parasite Control for Pets: Complete Guide to Ticks, Fleas & Worms',
    description: 'Complete guide to preventing and treating parasites in pets, including ticks, fleas, heartworms, and intestinal parasites.',
    url: 'https://nearbypetcare.com/pet-health/parasite-control-ticks-fleas-worms',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://nearbypetcare.com/pet-health/parasite-control-ticks-fleas-worms',
    },
    datePublished: '2024-01-01T00:00:00+00:00',
    dateModified: new Date().toISOString(),
    author: {
      '@type': 'Person',
      name: 'Veterinary Content Team',
      jobTitle: 'Veterinary Health Content Specialists',
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
    image: {
      '@type': 'ImageObject',
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
    },
    articleSection: 'Pet Health',
    inLanguage: 'en-US',
    keywords: 'pet parasites, flea control, tick prevention, heartworm prevention, pet deworming',
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How often should I treat my pet for fleas and ticks?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most flea and tick preventives should be applied monthly, year-round. Even in colder climates, fleas can survive indoors, and ticks can be active in mild winter weather. Year-round prevention is the most effective approach to protect your pet from parasites.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best way to prevent heartworm disease?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Monthly heartworm preventive medication is the best way to prevent heartworm disease. All dogs should be on heartworm prevention year-round, regardless of where you live. Prevention is much safer and more cost-effective than treatment, which is complex and risky.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I know if my pet has parasites?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Signs of parasites vary by type. Fleas may cause scratching, visible fleas or flea dirt, and skin irritation. Ticks are visible on the skin. Intestinal parasites may cause diarrhea, vomiting, weight loss, or visible worms in stool. Heartworm may show no early signs. Regular veterinary check-ups and fecal exams help detect parasites early.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use the same parasite prevention for dogs and cats?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, you should never use dog parasite preventives on cats, as some ingredients are toxic to cats. Always use products specifically labeled for your pet\'s species. Some products are safe for both, but always check the label and consult your veterinarian.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are natural parasite preventives effective?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While some natural products may have limited effectiveness, most have not been proven as reliable as prescription or over-the-counter preventives recommended by veterinarians. For serious parasites like heartworms, proven preventives are essential. Discuss options with your veterinarian to find the best approach for your pet.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I do if I find a tick on my pet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Remove the tick promptly using fine-tipped tweezers, grasping it as close to the skin as possible and pulling straight out with steady pressure. Clean the area with antiseptic. Save the tick in a sealed container if possible, and monitor your pet for signs of tick-borne illness. Contact your veterinarian if you have concerns.',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorStructuredData) }} />
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
            { name: 'Parasite Control', href: '/pet-health/parasite-control-ticks-fleas-worms' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🐛</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Parasite Prevention</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🐛</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Parasite Control
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Comprehensive guide to preventing and treating ticks, fleas, worms, and other parasites that can affect your pet's health. Learn about prevention methods, treatment options, and when to seek veterinary care.
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🪲</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Fleas & Ticks</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🪱</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Worms</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🛡️</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Prevention</span>
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
              Effective parasite control is essential for your pet's health and wellbeing. Parasites can cause discomfort, transmit diseases, and in some cases, be life-threatening. This comprehensive guide covers prevention and treatment of common parasites including fleas, ticks, heartworms, and intestinal worms. Understanding how to protect your pet from parasites is one of the most important aspects of responsible pet ownership.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300"><strong>Important:</strong> Always consult with your veterinarian before starting any parasite prevention or treatment program. Your veterinarian can recommend the most appropriate products based on your pet's species, age, weight, health status, and lifestyle. Never use dog products on cats, as some ingredients are toxic to felines.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Understanding Pet Parasites</h2>
            <p className="mb-4">
              Parasites are organisms that live on or inside your pet and derive nutrients at your pet's expense. They can cause a range of problems from mild irritation to serious illness. Some parasites can also be transmitted to humans (zoonotic diseases), making prevention important for both your pet's health and your family's health.
            </p>
            <p className="mb-4">
              The most common parasites affecting pets include external parasites like fleas and ticks, and internal parasites like heartworms and intestinal worms. Each type requires different prevention and treatment approaches. A comprehensive parasite control program addresses all types of parasites your pet may encounter.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Flea Prevention and Control</h2>
            <p className="mb-4">
              Fleas are small, wingless insects that feed on your pet's blood. They can cause skin irritation, allergic reactions, transmit diseases, and in severe cases, lead to anemia. Fleas reproduce rapidly, making early intervention crucial.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Signs of Fleas</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Excessive scratching, biting, or licking</li>
              <li>Visible fleas on your pet's skin or in their fur</li>
              <li>Flea dirt (small black specks that turn red when wet) on your pet's skin or bedding</li>
              <li>Red, irritated skin or hot spots</li>
              <li>Hair loss, especially around the base of the tail</li>
              <li>Restlessness or discomfort</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Prevention Methods</h3>
            <p className="mb-3">Effective flea prevention involves multiple approaches:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Monthly preventives:</strong> Use veterinarian-recommended monthly flea preventives year-round. These come in various forms including topical treatments, oral medications, and collars.</li>
              <li><strong>Environmental control:</strong> Regularly vacuum carpets, furniture, and pet bedding. Wash pet bedding in hot water frequently. Consider professional pest control for severe infestations.</li>
              <li><strong>Regular grooming:</strong> Regular brushing helps detect fleas early and removes some fleas and flea dirt.</li>
              <li><strong>Yard maintenance:</strong> Keep grass trimmed and remove debris where fleas can hide. Consider yard treatments if fleas are a persistent problem.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Treatment Options</h3>
            <p className="mb-3">If your pet has fleas, treatment should address both your pet and the environment:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Pet treatment:</strong> Use veterinarian-recommended flea treatment products. These may include topical treatments, oral medications, or shampoos. Follow product instructions carefully.</li>
              <li><strong>Environmental treatment:</strong> Vacuum thoroughly and frequently, wash all bedding, and consider using environmental flea control products. Severe infestations may require professional pest control.</li>
              <li><strong>Ongoing prevention:</strong> Continue monthly preventives to prevent reinfestation. It may take several months to completely eliminate a flea infestation.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Tick Prevention</h2>
            <p className="mb-4">
              Ticks are arachnids that attach to your pet's skin and feed on blood. They can transmit serious diseases including Lyme disease, ehrlichiosis, and anaplasmosis. Tick prevention is especially important in areas where ticks are prevalent.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Signs of Ticks</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Visible ticks attached to your pet's skin</li>
              <li>Small bumps or lumps on the skin</li>
              <li>Redness or irritation at the tick attachment site</li>
              <li>Symptoms of tick-borne diseases (fever, lameness, lethargy, loss of appetite)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Prevention Methods</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Monthly preventives:</strong> Use veterinarian-recommended tick preventives year-round. Many products protect against both fleas and ticks.</li>
              <li><strong>Regular tick checks:</strong> Check your pet for ticks after outdoor activities, especially in wooded or grassy areas. Pay attention to areas like ears, neck, armpits, and between toes.</li>
              <li><strong>Yard maintenance:</strong> Keep grass trimmed, remove leaf litter, and create barriers between wooded areas and your yard.</li>
              <li><strong>Avoid tick habitats:</strong> When possible, avoid areas known to have high tick populations, especially during peak tick season.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">How to Remove a Tick</h3>
            <p className="mb-3">If you find a tick on your pet, remove it promptly:</p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>Use fine-tipped tweezers to grasp the tick as close to the skin as possible</li>
              <li>Pull straight out with steady, even pressure - avoid twisting or jerking</li>
              <li>Clean the bite area with antiseptic</li>
              <li>Dispose of the tick by flushing it down the toilet or placing it in alcohol</li>
              <li>Monitor the area for signs of infection or irritation</li>
              <li>Watch your pet for symptoms of tick-borne illness over the next few weeks</li>
            </ol>
            <p className="mb-4">If you're uncomfortable removing the tick or if part of it remains in the skin, contact your veterinarian.</p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Heartworm Prevention</h2>
            <p className="mb-4">
              Heartworm disease is a serious and potentially fatal condition caused by parasitic worms that live in the heart, lungs, and blood vessels. It is transmitted through mosquito bites and can affect both dogs and cats. Prevention is much safer and more cost-effective than treatment.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Understanding Heartworm Disease</h3>
            <p className="mb-3">
              When an infected mosquito bites your pet, it can transmit heartworm larvae. These larvae mature into adult worms that can grow up to 12 inches long and live in the heart and lungs. The disease can cause severe damage and is difficult and expensive to treat.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Prevention Methods</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Monthly preventives:</strong> All dogs should be on monthly heartworm prevention year-round, regardless of where you live. Mosquitoes can be active even in winter, and prevention is essential.</li>
              <li><strong>Annual testing:</strong> Dogs should be tested annually for heartworm disease, even if they're on prevention. This ensures the prevention is working and detects any infections early.</li>
              <li><strong>Cat prevention:</strong> While less common, cats can also get heartworms. Discuss prevention options with your veterinarian if you live in an area with mosquitoes.</li>
              <li><strong>Mosquito control:</strong> Reduce mosquito populations around your home by eliminating standing water, using mosquito repellents, and keeping pets indoors during peak mosquito hours.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Treatment</h3>
            <p className="mb-4">
              Heartworm treatment is complex, expensive, and can be risky. It involves killing adult worms with medication, which must be done under strict veterinary supervision. The pet must be kept quiet and restricted from exercise during treatment. Prevention is strongly recommended over treatment.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Intestinal Parasites</h2>
            <p className="mb-4">
              Intestinal parasites include various types of worms that live in your pet's digestive system. Common types include roundworms, hookworms, tapeworms, and whipworms. These parasites can cause various health problems and some can be transmitted to humans.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Types of Intestinal Parasites</h3>
            <p className="mb-3"><strong>Roundworms:</strong> Common in puppies and kittens, roundworms can cause diarrhea, vomiting, and a pot-bellied appearance. They can be transmitted to humans, especially children.</p>
            <p className="mb-3"><strong>Hookworms:</strong> These parasites attach to the intestinal wall and feed on blood, potentially causing anemia. They can also be transmitted to humans through skin contact.</p>
            <p className="mb-3"><strong>Tapeworms:</strong> Usually transmitted through fleas or by ingesting infected prey, tapeworms may cause mild symptoms but can be visible in stool or around the anus.</p>
            <p className="mb-4"><strong>Whipworms:</strong> These parasites live in the large intestine and can cause diarrhea, weight loss, and anemia.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Prevention and Treatment</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Regular deworming:</strong> Puppies and kittens should be dewormed multiple times as part of their initial care. Adult pets may need regular deworming based on risk factors.</li>
              <li><strong>Fecal examinations:</strong> Regular fecal exams help detect intestinal parasites early. Your veterinarian may recommend annual or more frequent testing.</li>
              <li><strong>Preventive medications:</strong> Some heartworm preventives also protect against certain intestinal parasites. Discuss options with your veterinarian.</li>
              <li><strong>Good hygiene:</strong> Clean up pet waste promptly, practice good personal hygiene, and prevent pets from eating feces or hunting prey.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Creating a Comprehensive Parasite Control Program</h2>
            <p className="mb-4">
              An effective parasite control program addresses all types of parasites and is tailored to your pet's specific needs:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Year-round prevention:</strong> Use preventives year-round, not just during peak season. Parasites can be active in various conditions.</li>
              <li><strong>Multiple parasite protection:</strong> Many products protect against multiple parasites. Discuss combination products with your veterinarian.</li>
              <li><strong>Regular veterinary care:</strong> Annual check-ups and testing help ensure your prevention program is working and detect any problems early.</li>
              <li><strong>Environmental management:</strong> Keep your home and yard clean and well-maintained to reduce parasite habitats.</li>
              <li><strong>Monitor your pet:</strong> Regularly check your pet for signs of parasites and watch for any changes in behavior or health.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Choosing the Right Products</h2>
            <p className="mb-4">
              With many parasite prevention products available, choosing the right one can be overwhelming. Your veterinarian is the best resource for recommendations based on:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Your pet's species, age, and weight</li>
              <li>Your pet's health status and any medical conditions</li>
              <li>Your geographic location and local parasite risks</li>
              <li>Your pet's lifestyle and exposure to other animals</li>
              <li>Your preferences for application method (topical, oral, collar)</li>
            </ul>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300"><strong>Important Safety Note:</strong> Never use dog parasite preventives on cats, as some ingredients (like permethrin) are toxic to cats. Always use products specifically labeled for your pet's species. If you have both dogs and cats, be careful to apply products correctly and prevent cats from coming into contact with dog products.</p>
            </div>
          </div>

            {/* FAQ Section */}
            <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How often should I treat my pet for fleas and ticks?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Most flea and tick preventives should be applied monthly, year-round. Even in colder climates, fleas can survive indoors, and ticks can be active in mild winter weather. Year-round prevention is the most effective approach to protect your pet from parasites and prevent infestations.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What is the best way to prevent heartworm disease?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Monthly heartworm preventive medication is the best way to prevent heartworm disease. All dogs should be on heartworm prevention year-round, regardless of where you live. Prevention is much safer and more cost-effective than treatment, which is complex, expensive, and risky. Annual testing ensures prevention is working.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do I know if my pet has parasites?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Signs of parasites vary by type. Fleas may cause scratching, visible fleas or flea dirt, and skin irritation. Ticks are visible on the skin. Intestinal parasites may cause diarrhea, vomiting, weight loss, or visible worms in stool. Heartworm may show no early signs. Regular veterinary check-ups, fecal exams, and heartworm testing help detect parasites early, even before symptoms appear.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Can I use the same parasite prevention for dogs and cats?</h3>
                  <p className="text-gray-700 dark:text-gray-300">No, you should never use dog parasite preventives on cats, as some ingredients are toxic to cats. Always use products specifically labeled for your pet's species. Some products are safe for both, but always check the label and consult your veterinarian. If you have both dogs and cats, be extra careful to apply products correctly.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Are natural parasite preventives effective?</h3>
                  <p className="text-gray-700 dark:text-gray-300">While some natural products may have limited effectiveness, most have not been proven as reliable as prescription or over-the-counter preventives recommended by veterinarians. For serious parasites like heartworms, proven preventives are essential. Discuss options with your veterinarian to find the best approach for your pet that balances effectiveness and safety.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What should I do if I find a tick on my pet?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Remove the tick promptly using fine-tipped tweezers, grasping it as close to the skin as possible and pulling straight out with steady pressure. Clean the area with antiseptic. Save the tick in a sealed container if possible, and monitor your pet for signs of tick-borne illness over the next few weeks. Contact your veterinarian if you have concerns or if your pet shows any symptoms.</p>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Pet Health Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/pet-health/common-diseases" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Common Pet Diseases</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn about diseases that parasites can transmit and how to recognize symptoms.</p>
                </Link>
                <Link href="/pet-health/vaccination-schedules" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Vaccination Schedules</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn about vaccinations that work alongside parasite prevention to protect your pet.</p>
                </Link>
                <Link href="/pet-health/signs-your-pet-needs-a-vet" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Signs Your Pet Needs a Vet</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn to recognize when parasite-related symptoms require veterinary attention.</p>
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

