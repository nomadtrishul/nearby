import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Pet Vaccination Schedules: Complete Guide for Dogs & Cats | Nearby Pet Care',
  description: 'Complete guide to pet vaccination schedules for dogs and cats. Learn about core vaccines, timing, booster requirements, puppy and kitten vaccination schedules, and when to vaccinate your pet.',
  keywords: ['pet vaccinations', 'dog vaccines', 'cat vaccines', 'vaccination schedule', 'pet immunization', 'puppy vaccines', 'kitten vaccines', 'core vaccines', 'booster shots', 'pet vaccination guide'],
  openGraph: {
    title: 'Pet Vaccination Schedules: Complete Guide for Dogs & Cats | Nearby Pet Care',
    description: 'Complete guide to pet vaccination schedules for dogs and cats, including core vaccines, timing, and booster requirements.',
    type: 'article',
    url: 'https://nearbypetcare.com/pet-health/vaccination-schedules',
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pet Vaccination Schedules Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Vaccination Schedules: Complete Guide | Nearby Pet Care',
    description: 'Complete guide to pet vaccination schedules for dogs and cats.',
    images: ['https://nearbypetcare.com/og-image.png'],
  },
  alternates: { canonical: 'https://nearbypetcare.com/pet-health/vaccination-schedules' },
  robots: {
    index: true,
    follow: true,
  },
};

export default function VaccinationSchedulesPage() {
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbypetcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Pet Health', item: 'https://nearbypetcare.com/pet-health' },
      { '@type': 'ListItem', position: 3, name: 'Vaccination Schedules', item: 'https://nearbypetcare.com/pet-health/vaccination-schedules' },
    ],
  };

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pet Vaccination Schedules: Complete Guide for Dogs & Cats',
    description: 'Complete guide to pet vaccination schedules, including core vaccines, timing, and booster requirements for dogs and cats.',
    url: 'https://nearbypetcare.com/pet-health/vaccination-schedules',
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
        name: 'When should puppies get their first vaccinations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Puppies typically receive their first vaccinations at 6-8 weeks of age. They then receive booster shots every 3-4 weeks until they are 16 weeks old. This series is crucial for building immunity, as maternal antibodies can interfere with early vaccinations.',
        },
      },
      {
        '@type': 'Question',
        name: 'When should kittens get their first vaccinations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kittens usually start vaccinations at 6-8 weeks of age, with boosters every 3-4 weeks until 16 weeks old. Core vaccines include FVRCP (feline viral rhinotracheitis, calicivirus, panleukopenia) and rabies. The exact schedule may vary based on your veterinarian\'s recommendations.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are core vaccines for dogs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Core vaccines for dogs include DHPP (distemper, hepatitis, parainfluenza, parvovirus) and rabies. These vaccines protect against serious, widespread diseases and are recommended for all dogs regardless of lifestyle or location.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are core vaccines for cats?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Core vaccines for cats include FVRCP (feline viral rhinotracheitis, calicivirus, panleukopenia) and rabies. These protect against serious, widespread diseases and are recommended for all cats. Additional vaccines may be recommended based on lifestyle and risk factors.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often do pets need booster vaccinations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Booster frequency varies by vaccine type. Some vaccines require annual boosters, while others may be given every three years after the initial series. Your veterinarian will determine the appropriate schedule based on vaccine type, your pet\'s age, health status, and local regulations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are there risks or side effects from pet vaccinations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most pets experience no side effects from vaccinations. Mild reactions may include temporary lethargy, mild fever, or soreness at the injection site. Serious reactions are rare but can occur. Discuss any concerns with your veterinarian, who can help assess risks and benefits for your specific pet.',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Pet Health', href: '/pet-health' },
            { name: 'Vaccination Schedules', href: '/pet-health/vaccination-schedules' }
          ]} />
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Pet Vaccination Schedules: Complete Guide for Dogs & Cats</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Vaccinations are essential for protecting your pet from serious diseases. This comprehensive guide outlines recommended vaccination schedules for dogs and cats, explains the difference between core and non-core vaccines, and helps you understand when and why your pet needs vaccinations. Following an appropriate vaccination schedule is one of the most important steps you can take to protect your pet's health.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300"><strong>Important:</strong> Vaccination schedules may vary based on your pet's health, lifestyle, breed, geographic location, and local regulations. Always consult with your veterinarian for a personalized vaccination schedule tailored to your pet's specific needs and circumstances.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Understanding Pet Vaccinations</h2>
            <p className="mb-4">
              Vaccinations work by stimulating your pet's immune system to produce protective antibodies against specific diseases. When your pet is exposed to the actual disease, these antibodies help fight off the infection. Vaccines are categorized as either core or non-core based on the risk of exposure and severity of the disease.
            </p>
            <p className="mb-4">
              <strong>Core vaccines</strong> protect against diseases that are widespread, highly contagious, or pose serious health risks. These are recommended for all pets regardless of their lifestyle or location. <strong>Non-core vaccines</strong> are recommended based on your pet's individual risk factors, such as geographic location, lifestyle, and exposure to other animals.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Puppy Vaccination Schedule</h2>
            <p className="mb-4">
              Puppies receive some immunity from their mother's milk, but this protection gradually decreases. The initial vaccination series is crucial for building your puppy's own immunity. Maternal antibodies can interfere with early vaccinations, which is why multiple doses are needed.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Initial Vaccination Series</h3>
            <p className="mb-3">
              Puppies typically receive their first vaccinations at 6-8 weeks of age, with booster shots every 3-4 weeks until they are 16 weeks old. This series ensures that as maternal antibodies decrease, the puppy's immune system is properly stimulated to produce its own protection.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>6-8 weeks:</strong> First DHPP vaccination (distemper, hepatitis, parainfluenza, parvovirus)</li>
              <li><strong>10-12 weeks:</strong> Second DHPP booster</li>
              <li><strong>14-16 weeks:</strong> Third DHPP booster and first rabies vaccination (as required by law)</li>
              <li><strong>12-16 weeks:</strong> Bordetella (kennel cough) if needed based on lifestyle</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Core Vaccines for Puppies</h3>
            <p className="mb-3"><strong>DHPP (Distemper, Hepatitis, Parainfluenza, Parvovirus):</strong> This combination vaccine protects against four serious diseases. Distemper affects multiple body systems and can be fatal. Hepatitis affects the liver. Parainfluenza contributes to kennel cough. Parvovirus causes severe gastrointestinal illness, especially dangerous in puppies.</p>
            <p className="mb-3"><strong>Rabies:</strong> Required by law in most areas, rabies is a fatal disease that can affect both pets and humans. The first rabies vaccine is typically given at 12-16 weeks, with boosters as required by local regulations (usually annually or every three years).</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Non-Core Vaccines for Puppies</h3>
            <p className="mb-3">Depending on your puppy's lifestyle and risk factors, your veterinarian may recommend:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Bordetella (Kennel Cough):</strong> Recommended for dogs that will be boarded, attend daycare, visit dog parks, or interact with many other dogs</li>
              <li><strong>Lyme Disease:</strong> Recommended in areas where Lyme disease is prevalent, especially for dogs that spend time outdoors in tick-infested areas</li>
              <li><strong>Canine Influenza:</strong> May be recommended in areas with outbreaks or for dogs in high-risk environments</li>
              <li><strong>Leptospirosis:</strong> Recommended for dogs with exposure to wildlife, standing water, or rural environments</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Adult Dog Vaccination Schedule</h2>
            <p className="mb-4">
              After the initial puppy series, adult dogs need regular booster vaccinations to maintain immunity. The frequency of boosters depends on the vaccine type, your dog's age, health status, and local regulations.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>DHPP:</strong> Typically boosted annually or every three years, depending on the vaccine type and your veterinarian's recommendations</li>
              <li><strong>Rabies:</strong> Required by law, typically boosted annually or every three years based on local regulations and vaccine type</li>
              <li><strong>Bordetella:</strong> Often boosted every 6-12 months for dogs at risk</li>
              <li><strong>Other non-core vaccines:</strong> Boosted according to your veterinarian's recommendations based on risk factors</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Kitten Vaccination Schedule</h2>
            <p className="mb-4">
              Like puppies, kittens receive some immunity from their mother, but this protection decreases over time. The initial vaccination series is essential for building your kitten's immunity.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Initial Vaccination Series</h3>
            <p className="mb-3">
              Kittens usually start vaccinations at 6-8 weeks of age, with boosters every 3-4 weeks until 16 weeks old. This ensures proper immune system development as maternal antibodies decrease.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>6-8 weeks:</strong> First FVRCP vaccination</li>
              <li><strong>10-12 weeks:</strong> Second FVRCP booster</li>
              <li><strong>14-16 weeks:</strong> Third FVRCP booster and first rabies vaccination (as required by law)</li>
              <li><strong>12-16 weeks:</strong> FeLV (feline leukemia) if at risk, typically for outdoor cats or cats in multi-cat households</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Core Vaccines for Kittens</h3>
            <p className="mb-3"><strong>FVRCP (Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia):</strong> This combination vaccine protects against three serious diseases. Rhinotracheitis and calicivirus cause upper respiratory infections. Panleukopenia (feline distemper) is a highly contagious and often fatal disease that affects the gastrointestinal tract and immune system.</p>
            <p className="mb-3"><strong>Rabies:</strong> Required by law in most areas, rabies vaccination is essential for both your cat's health and public safety. The first rabies vaccine is typically given at 12-16 weeks, with boosters as required by local regulations.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Non-Core Vaccines for Kittens</h3>
            <p className="mb-3">Based on your kitten's lifestyle and risk factors, your veterinarian may recommend:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>FeLV (Feline Leukemia Virus):</strong> Recommended for outdoor cats, cats in multi-cat households, or cats at risk of exposure to FeLV-positive cats</li>
              <li><strong>FIV (Feline Immunodeficiency Virus):</strong> Less commonly recommended, may be considered for high-risk cats</li>
              <li><strong>Chlamydophila:</strong> May be recommended in certain situations or areas</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Adult Cat Vaccination Schedule</h2>
            <p className="mb-4">
              After the initial kitten series, adult cats need regular booster vaccinations to maintain immunity. The schedule depends on vaccine type, your cat's lifestyle, and local regulations.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>FVRCP:</strong> Typically boosted annually or every three years, depending on the vaccine type and your veterinarian's recommendations</li>
              <li><strong>Rabies:</strong> Required by law, typically boosted annually or every three years based on local regulations and vaccine type</li>
              <li><strong>FeLV:</strong> Boosted annually for cats at continued risk</li>
              <li><strong>Other non-core vaccines:</strong> Boosted according to your veterinarian's recommendations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Understanding Vaccine Timing</h2>
            <p className="mb-4">
              The timing of vaccinations is important for several reasons. Maternal antibodies can interfere with early vaccinations, which is why multiple doses are needed in young animals. Waiting too long between boosters can leave your pet vulnerable, while vaccinating too frequently is unnecessary and may increase the risk of adverse reactions.
            </p>
            <p className="mb-4">
              Your veterinarian will consider factors such as your pet's age, health status, previous vaccination history, local disease prevalence, and legal requirements when determining the appropriate vaccination schedule. It's important to follow your veterinarian's recommendations rather than a generic schedule.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Vaccine Side Effects and Reactions</h2>
            <p className="mb-4">
              Most pets experience no side effects from vaccinations, or only mild, temporary reactions. Understanding what to expect can help you monitor your pet appropriately.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Common Mild Reactions</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Temporary lethargy or decreased activity</li>
              <li>Mild fever</li>
              <li>Soreness or swelling at the injection site</li>
              <li>Decreased appetite for a day or two</li>
              <li>Mild discomfort</li>
            </ul>
            <p className="mb-4">These reactions typically resolve within 24-48 hours and don't require treatment. If they persist or worsen, contact your veterinarian.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Serious Reactions (Rare)</h3>
            <p className="mb-3">Serious reactions are uncommon but can occur. Seek immediate veterinary care if your pet experiences:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Severe allergic reactions (facial swelling, hives, difficulty breathing)</li>
              <li>Vomiting or diarrhea</li>
              <li>Collapse or loss of consciousness</li>
              <li>Severe swelling at the injection site</li>
              <li>Persistent high fever</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Special Considerations</h2>
            <p className="mb-4">
              Certain situations may require adjustments to the standard vaccination schedule:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Senior pets:</strong> Older pets may have different vaccination needs. Your veterinarian may recommend titer testing or adjusted schedules based on health status.</li>
              <li><strong>Pets with health conditions:</strong> Pets with certain medical conditions may need modified vaccination schedules or may not be able to receive certain vaccines.</li>
              <li><strong>Pregnant or nursing pets:</strong> Vaccination during pregnancy or nursing requires special consideration and should be discussed with your veterinarian.</li>
              <li><strong>Previously unvaccinated adult pets:</strong> Adult pets that haven't been vaccinated may need a series similar to puppies or kittens, followed by regular boosters.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Keeping Track of Vaccinations</h2>
            <p className="mb-4">
              Maintaining accurate vaccination records is important for your pet's health and may be required for boarding, travel, or legal compliance. Keep a copy of all vaccination certificates and update them after each visit. Many veterinarians provide reminder services, but it's also helpful to mark important dates on your calendar.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300"><strong>Remember:</strong> This guide provides general information about vaccination schedules. Your veterinarian is the best source for personalized vaccination recommendations based on your pet's specific needs, health status, lifestyle, and local requirements. Always consult with your veterinarian before making decisions about your pet's vaccinations.</p>
            </div>

            {/* FAQ Section */}
            <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">When should puppies get their first vaccinations?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Puppies typically receive their first vaccinations at 6-8 weeks of age. They then receive booster shots every 3-4 weeks until they are 16 weeks old. This series is crucial for building immunity, as maternal antibodies can interfere with early vaccinations. Your veterinarian will provide a specific schedule based on your puppy's age and circumstances.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">When should kittens get their first vaccinations?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Kittens usually start vaccinations at 6-8 weeks of age, with boosters every 3-4 weeks until 16 weeks old. Core vaccines include FVRCP (feline viral rhinotracheitis, calicivirus, panleukopenia) and rabies. The exact schedule may vary based on your veterinarian's recommendations, your kitten's health, and local regulations.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What are core vaccines for dogs?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Core vaccines for dogs include DHPP (distemper, hepatitis, parainfluenza, parvovirus) and rabies. These vaccines protect against serious, widespread diseases and are recommended for all dogs regardless of lifestyle or location. These diseases can be severe or fatal, making vaccination essential for all dogs.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What are core vaccines for cats?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Core vaccines for cats include FVRCP (feline viral rhinotracheitis, calicivirus, panleukopenia) and rabies. These protect against serious, widespread diseases and are recommended for all cats. Additional vaccines may be recommended based on lifestyle and risk factors, such as FeLV for outdoor cats.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How often do pets need booster vaccinations?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Booster frequency varies by vaccine type. Some vaccines require annual boosters, while others may be given every three years after the initial series. Your veterinarian will determine the appropriate schedule based on vaccine type, your pet's age, health status, local regulations, and current vaccination guidelines. It's important to follow your veterinarian's recommendations.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Are there risks or side effects from pet vaccinations?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Most pets experience no side effects from vaccinations. Mild reactions may include temporary lethargy, mild fever, or soreness at the injection site. Serious reactions are rare but can occur. Discuss any concerns with your veterinarian, who can help assess risks and benefits for your specific pet. The benefits of vaccination generally far outweigh the risks.</p>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Pet Health Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/pet-health/common-diseases" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Common Pet Diseases</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn about diseases that vaccinations help prevent and how to recognize symptoms.</p>
                </Link>
                <Link href="/pet-health/parasite-control-ticks-fleas-worms" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Parasite Control</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Comprehensive guide to preventing parasites that can cause disease in pets.</p>
                </Link>
                <Link href="/pet-health/signs-your-pet-needs-a-vet" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Signs Your Pet Needs a Vet</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn to recognize when your pet needs veterinary attention.</p>
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
        </div>
      </article>
    </main>
  );
}
