import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PuppiesKittensSidebar from '@/components/PuppiesKittensSidebar';

export const metadata: Metadata = {
  title: 'Puppy & Kitten Vaccination Timeline: Complete Schedule Guide | Nearby Pet Care',
  description: 'Complete vaccination timeline for puppies and kittens. Learn when to vaccinate, which vaccines are essential, and what to expect at vaccination appointments.',
  keywords: ['puppy vaccination', 'kitten vaccination', 'vaccination schedule', 'puppy vaccines', 'kitten vaccines', 'DHPP vaccine', 'FVRCP vaccine', 'rabies vaccine', 'pet vaccination schedule'],
  authors: [{ name: 'Nearby Pet Care Team' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Puppy & Kitten Vaccination Timeline | Nearby Pet Care',
    description: 'Complete vaccination timeline for puppies and kittens. Learn when to vaccinate and which vaccines are essential.',
    type: 'article',
    locale: 'en-US',
    url: 'https://nearbypetcare.com/puppies-kittens/vaccination-timeline',
    siteName: 'Nearby Pet Care',
    publishedTime: '2024-01-01T00:00:00+00:00',
    modifiedTime: new Date().toISOString(),
    authors: ['Nearby Pet Care Team'],
    section: 'Puppies & Kittens',
    tags: ['puppy vaccination', 'kitten vaccination', 'vaccination schedule', 'pet health'],
    images: [{
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Puppy & Kitten Vaccination Timeline',
      type: 'image/png',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Puppy & Kitten Vaccination Timeline | Nearby Pet Care',
    description: 'Complete vaccination timeline for puppies and kittens. Learn when to vaccinate and which vaccines are essential.',
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
    canonical: 'https://nearbypetcare.com/puppies-kittens/vaccination-timeline',
  },
  category: 'Pet Care',
};

export default function VaccinationTimelinePage() {
  const currentDate = new Date().toISOString();
  
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Puppy & Kitten Vaccination Timeline: Complete Schedule Guide',
    description: 'Complete vaccination timeline for puppies and kittens. Learn when to vaccinate, which vaccines are essential, and what to expect at vaccination appointments.',
    url: 'https://nearbypetcare.com/puppies-kittens/vaccination-timeline',
    datePublished: '2024-01-01T00:00:00+00:00',
    dateModified: currentDate,
    author: {
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
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://nearbypetcare.com/puppies-kittens/vaccination-timeline',
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Puppy & Kitten Vaccination Timeline',
    },
    articleSection: 'Puppies & Kittens',
    articleBody: 'Complete guide to puppy and kitten vaccination schedules, including DHPP, FVRCP, rabies, and other essential vaccines. Learn when to vaccinate and what to expect.',
    keywords: 'puppy vaccination, kitten vaccination, vaccination schedule, puppy vaccines, kitten vaccines, DHPP, FVRCP, rabies vaccine',
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    wordCount: 2200,
    timeRequired: 'PT15M',
    educationalLevel: 'Beginner',
    about: {
      '@type': 'Thing',
      name: 'Pet Vaccination',
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
        name: 'Puppies & Kittens',
        item: 'https://nearbypetcare.com/puppies-kittens',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Vaccination Timeline',
        item: 'https://nearbypetcare.com/puppies-kittens/vaccination-timeline',
      },
    ],
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'When should puppies get their first vaccinations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most puppies start their vaccination series around 6-8 weeks of age. The first round typically includes the DHPP combination vaccine, which protects against distemper, hepatitis, parainfluenza, and parvovirus. Boosters are given every 3-4 weeks until about 16 weeks old.',
        },
      },
      {
        '@type': 'Question',
        name: 'What vaccines do kittens need?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kittens typically receive the FVRCP vaccine starting at 6-8 weeks, which protects against feline viral rhinotracheitis, calicivirus, and panleukopenia. They may also need the FeLV (Feline Leukemia Virus) vaccine depending on their lifestyle, and rabies vaccination is required by law in most areas.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are normal reactions to vaccinations in pets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It\'s normal for pets to be slightly sleepy or less active for 24-48 hours after vaccinations. Some may have a small bump at the injection site or mild soreness. However, contact your veterinarian immediately if you notice severe lethargy, vomiting, difficulty breathing, or swelling around the face.',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24" itemScope itemType="https://schema.org/Article">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
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
            { name: 'Puppies & Kittens', href: '/puppies-kittens' },
            { name: 'Vaccination Timeline', href: '/puppies-kittens/vaccination-timeline' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl" aria-hidden="true">💉</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Vaccinations</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6" aria-hidden="true">🩺</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Puppy & Kitten Vaccination Timeline
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Protect your young pet's health with the right vaccinations at the right time. Learn when to vaccinate and which vaccines are essential for puppies and kittens.
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
                  Vaccinations are one of the most important things you can do to protect your new puppy or kitten. These shots help their developing immune systems fight off serious, sometimes life-threatening diseases. While the vaccination schedule might seem complicated at first, understanding the basics will help you work with your veterinarian to keep your pet healthy and protected.
                </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Why Vaccinations Matter</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              When puppies and kittens are born, they receive some protection from their mother's milk (called maternal antibodies). However, this protection fades over time, leaving them vulnerable to diseases. Vaccinations work by introducing a small, safe amount of a disease-causing agent (or a modified version of it) to train the immune system to recognize and fight off the real thing. It's like giving your pet's immune system a practice run before the real game.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Puppy Vaccination Schedule</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Most puppies start their vaccination series around 6-8 weeks of age, though this can vary depending on when they were weaned and their individual circumstances. The schedule typically involves a series of shots given every 3-4 weeks until they're about 16 weeks old.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">6-8 Weeks: First Round</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              This is usually when puppies get their first set of vaccinations. The core vaccine at this age is typically the DHPP combination, which protects against:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Distemper:</strong> A serious viral disease that affects the respiratory, gastrointestinal, and nervous systems</li>
              <li><strong>Hepatitis:</strong> A viral infection that can cause liver damage</li>
              <li><strong>Parainfluenza:</strong> One of the viruses that can cause kennel cough</li>
              <li><strong>Parvovirus:</strong> A highly contagious and often fatal disease, especially dangerous for puppies</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">10-12 Weeks: Second Round</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Your puppy will receive another DHPP booster, and your vet might also recommend additional vaccines based on your puppy's lifestyle and risk factors. These might include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Bordetella:</strong> Another component of kennel cough protection (especially important if your pup will be around other dogs)</li>
              <li><strong>Leptospirosis:</strong> A bacterial disease that can be transmitted to humans (often recommended for dogs who spend time outdoors)</li>
              <li><strong>Lyme:</strong> Protection against tick-borne Lyme disease (important in areas where ticks are common)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">14-16 Weeks: Final Puppy Shots</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              This round includes the final DHPP booster and often the first rabies vaccination. Rabies is required by law in most places, and this first shot is crucial. Your vet will provide you with a rabies certificate that you'll need to keep safe—you'll need it for licensing and travel.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">12-16 Months: Adolescent Boosters</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Around their first birthday, your dog will need booster shots for DHPP and rabies. After this, most vaccines are given every 1-3 years depending on the vaccine type and your veterinarian's recommendations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Kitten Vaccination Schedule</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Kittens follow a similar timeline to puppies, starting their vaccinations around 6-8 weeks of age. The core vaccines for cats protect against different diseases than dogs, reflecting the unique health risks felines face.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">6-8 Weeks: First Round</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Kittens typically receive their first FVRCP vaccine, which is a combination vaccine protecting against:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Feline Viral Rhinotracheitis:</strong> A severe upper respiratory infection (essentially the cat version of a cold, but much more serious)</li>
              <li><strong>Calicivirus:</strong> Another upper respiratory disease that can cause mouth ulcers and pneumonia</li>
              <li><strong>Panleukopenia:</strong> Also known as feline distemper, this is a highly contagious and often fatal disease</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">10-12 Weeks: Second Round</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Your kitten will get another FVRCP booster. At this visit, your vet will also discuss whether your kitten needs the FeLV (Feline Leukemia Virus) vaccine. This is typically recommended for:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Kittens who will spend time outdoors</li>
              <li>Cats who will live with other cats (especially if their FeLV status is unknown)</li>
              <li>Any cat at risk of exposure to the virus</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">14-16 Weeks: Final Kitten Shots</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              This visit includes the final FVRCP booster and the first rabies vaccination. If your kitten is receiving the FeLV vaccine, they'll likely get a second dose around this time as well.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">12-16 Months: Adolescent Boosters</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Just like puppies, kittens need booster shots around their first birthday. After this, your vet will establish a schedule for ongoing vaccinations, typically every 1-3 years depending on the vaccine and your cat's lifestyle.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">What to Expect at Vaccination Appointments</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Vaccination visits are about more than just shots. Your veterinarian will use these appointments to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Perform a thorough physical examination</li>
              <li>Check your pet's weight and growth progress</li>
              <li>Discuss nutrition and feeding schedules</li>
              <li>Answer any questions you have about behavior, training, or care</li>
              <li>Screen for parasites and discuss prevention</li>
              <li>Address any concerns you've noticed at home</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">After Vaccination: What's Normal?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              It's completely normal for pets to be a little sleepy or less active for 24-48 hours after vaccinations. Some might have a small bump at the injection site or be slightly sore. However, you should contact your veterinarian immediately if you notice:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Severe lethargy or weakness</li>
              <li>Vomiting or diarrhea</li>
              <li>Swelling around the face or injection site</li>
              <li>Difficulty breathing</li>
              <li>Loss of appetite lasting more than 24 hours</li>
              <li>Any behavior that seems concerning</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Serious reactions are rare, but it's always better to be safe and check with your vet if something doesn't seem right.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Important: Work With Your Veterinarian</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                While this timeline provides a general guide, your veterinarian will create a personalized vaccination schedule based on:
              </p>
              <ul className="list-disc pl-6 mb-2 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Your pet's age and health status</li>
                <li>Their lifestyle (indoor vs. outdoor, exposure to other animals, etc.)</li>
                <li>Local disease risks and regulations</li>
                <li>Any medical history or special circumstances</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Always follow your veterinarian's recommendations—they know your pet's specific needs and the risks in your area. Don't hesitate to ask questions if you're unsure about anything. Your vet is there to help you make the best decisions for your pet's health.
              </p>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <Link href="/puppies-kittens" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Puppies & Kittens</Link>
            </div>
              </div>
            </div>
            {/* Sidebar */}
            <aside className="lg:col-span-1" aria-label="Related resources">
              <PuppiesKittensSidebar />
            </aside>
          </div>
        </div>
      </article>
    </main>
  );
}
