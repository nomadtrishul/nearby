import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Pet Health & Wellness Overview: Complete Guide | Nearby Pet Care',
  description: 'Comprehensive overview of pet health and wellness topics. Learn about maintaining your pet\'s health through preventive care, early detection, and understanding common health topics.',
  keywords: ['pet health overview', 'pet wellness', 'pet preventive care', 'pet health guide', 'pet health topics', 'pet wellness guide'],
  openGraph: {
    title: 'Pet Health & Wellness Overview: Complete Guide | Nearby Pet Care',
    description: 'Comprehensive overview of pet health and wellness topics and how to maintain your pet\'s health.',
    type: 'article',
    url: 'https://nearbypetcare.com/pet-health/pillar',
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pet Health & Wellness Overview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Health & Wellness Overview | Nearby Pet Care',
    description: 'Comprehensive overview of pet health and wellness topics.',
    images: ['https://nearbypetcare.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/pet-health/pillar',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PetHealthPillarPage() {
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbypetcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Pet Health', item: 'https://nearbypetcare.com/pet-health' },
      { '@type': 'ListItem', position: 3, name: 'Overview', item: 'https://nearbypetcare.com/pet-health/pillar' },
    ],
  };

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pet Health & Wellness Overview: Complete Guide',
    description: 'Comprehensive overview of pet health and wellness topics, including preventive care, early detection, and maintaining your pet\'s health.',
    url: 'https://nearbypetcare.com/pet-health/pillar',
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
        name: 'What are the key areas of pet health I should focus on?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Key areas of pet health include preventive care and vaccinations, parasite prevention and control, recognizing signs of illness, first aid and emergency care, mental health and behavioral wellness, nutrition, exercise, and regular veterinary care. A comprehensive approach to pet health addresses all these areas.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should I take my pet to the veterinarian?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Healthy adult pets typically need annual veterinary check-ups, while senior pets (usually 7+ years) may need semi-annual visits. Puppies and kittens need more frequent visits for vaccinations and initial care. Your veterinarian will recommend a schedule based on your pet\'s age, health status, and individual needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is preventive care for pets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Preventive care includes vaccinations, parasite prevention, regular health screenings, dental care, proper nutrition, exercise, and early detection of health problems. Preventive care helps keep pets healthy and can prevent or catch problems early when they\'re easier and less expensive to treat.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I help maintain my pet\'s health?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Maintain your pet\'s health by providing proper nutrition, ensuring regular exercise, keeping vaccinations and parasite prevention up to date, scheduling regular veterinary check-ups, monitoring your pet\'s health and behavior, providing mental stimulation, maintaining good hygiene, and addressing health concerns promptly.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are early warning signs of health problems in pets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Early warning signs include changes in appetite, energy levels, or behavior; vomiting or diarrhea; changes in drinking or urination; coughing or sneezing; limping or difficulty moving; skin changes; weight changes; and any other unusual symptoms. Regular monitoring helps you notice changes early.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is preventive care important for pets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Preventive care is important because it helps keep pets healthy, prevents diseases, catches problems early when they\'re easier to treat, can be more cost-effective than treating advanced conditions, and helps ensure your pet lives a long, healthy, happy life. Regular preventive care is an investment in your pet\'s wellbeing.',
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
            { name: 'Overview', href: '/pet-health/pillar' }
          ]} />

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Pet Health & Wellness Overview: Complete Guide
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Maintaining your pet's health requires a combination of preventive care, regular veterinary visits, and understanding common health issues. This comprehensive overview provides a foundation for understanding pet health and wellness, covering key areas of pet health, preventive care strategies, and how to recognize when your pet needs attention. A proactive approach to pet health helps ensure your pet lives a long, healthy, and happy life.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300"><strong>Important:</strong> This overview provides general information about pet health and wellness. Individual pets may have unique health needs based on their species, breed, age, and health status. Always consult with your veterinarian for personalized advice and recommendations for your specific pet.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Understanding Pet Health and Wellness</h2>
            <p className="mb-4">
              Pet health and wellness encompass physical health, mental wellbeing, and overall quality of life. A healthy pet is not just free from disease, but also has good nutrition, appropriate exercise, mental stimulation, and a safe, comfortable environment. Understanding the various aspects of pet health helps you provide comprehensive care for your pet.
            </p>
            <p className="mb-4">
              Preventive care is the foundation of pet health. By preventing problems before they occur and detecting issues early, you can help your pet avoid serious health problems and maintain good quality of life. Regular veterinary care, proper nutrition, exercise, and attention to your pet's needs all contribute to overall health and wellness.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Key Areas of Pet Health</h2>
            <p className="mb-4">
              Comprehensive pet health care addresses multiple areas. Understanding these key areas helps you provide well-rounded care for your pet:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Preventive Care and Vaccinations</h3>
            <p className="mb-3">
              Preventive care is the cornerstone of pet health. This includes:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Vaccinations:</strong> Protect against serious, preventable diseases. Follow your veterinarian's recommended vaccination schedule.</li>
              <li><strong>Parasite prevention:</strong> Year-round prevention for fleas, ticks, heartworms, and intestinal parasites.</li>
              <li><strong>Regular health screenings:</strong> Annual or semi-annual check-ups and diagnostic tests to detect problems early.</li>
              <li><strong>Dental care:</strong> Regular dental care helps prevent dental disease, which can affect overall health.</li>
            </ul>
            <p className="mb-4">Preventive care helps avoid serious health problems and is often more cost-effective than treating advanced conditions.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Parasite Prevention and Control</h3>
            <p className="mb-3">
              Parasites can cause various health problems and some can be transmitted to humans. Effective parasite control includes:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Year-round flea and tick prevention</li>
              <li>Monthly heartworm prevention</li>
              <li>Regular deworming and fecal examinations</li>
              <li>Environmental management</li>
            </ul>
            <p className="mb-4">Your veterinarian can recommend appropriate parasite prevention based on your pet's needs and risk factors.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Recognizing Signs of Illness</h3>
            <p className="mb-3">
              Early recognition of health problems allows for prompt treatment. Watch for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Changes in appetite, energy, or behavior</li>
              <li>Digestive problems (vomiting, diarrhea)</li>
              <li>Respiratory symptoms (coughing, difficulty breathing)</li>
              <li>Changes in urination or defecation</li>
              <li>Skin or coat changes</li>
              <li>Signs of pain or discomfort</li>
            </ul>
            <p className="mb-4">Knowing what's normal for your pet helps you recognize when something is wrong. When in doubt, consult your veterinarian.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">First Aid and Emergency Care</h3>
            <p className="mb-3">
              Knowing basic first aid can help you respond effectively in emergencies:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Having a pet first aid kit</li>
              <li>Knowing how to handle common emergencies</li>
              <li>Understanding when to seek immediate veterinary care</li>
              <li>Having emergency contact information readily available</li>
            </ul>
            <p className="mb-4">While first aid is not a substitute for veterinary care, it can help stabilize your pet until you can reach a veterinarian.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Mental Health and Behavioral Wellness</h3>
            <p className="mb-3">
              Mental health is an important component of overall health:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Providing mental stimulation and enrichment</li>
              <li>Recognizing and addressing anxiety or stress</li>
              <li>Ensuring adequate exercise and activity</li>
              <li>Maintaining consistent routines</li>
              <li>Addressing behavioral concerns promptly</li>
            </ul>
            <p className="mb-4">Mental health problems can affect physical health, making attention to behavioral wellness important.</p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Preventive Care Strategies</h2>
            <p className="mb-4">
              A comprehensive preventive care strategy includes multiple components:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Regular Veterinary Care</h3>
            <p className="mb-3">
              Regular veterinary visits are essential for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Annual or semi-annual health examinations</li>
              <li>Vaccination updates</li>
              <li>Health screenings and diagnostic tests</li>
              <li>Dental evaluations</li>
              <li>Discussion of health concerns and questions</li>
            </ul>
            <p className="mb-4">Your veterinarian can provide personalized recommendations based on your pet's specific needs.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Nutrition</h3>
            <p className="mb-3">
              Proper nutrition supports overall health:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Feed a balanced, high-quality diet appropriate for your pet's species, age, and health status</li>
              <li>Provide appropriate portion sizes to maintain healthy weight</li>
              <li>Ensure access to fresh, clean water at all times</li>
              <li>Avoid foods that are toxic to pets</li>
              <li>Discuss dietary needs with your veterinarian</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Exercise and Activity</h3>
            <p className="mb-3">
              Regular exercise supports physical and mental health:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide daily exercise appropriate for your pet's age, breed, and health status</li>
              <li>Include both physical exercise and mental stimulation</li>
              <li>Adapt exercise routines based on weather and your pet's needs</li>
              <li>Monitor for signs of overexertion or health problems during exercise</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Home Health Monitoring</h3>
            <p className="mb-3">
              Regular monitoring at home helps you notice changes early:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Observe your pet's behavior, appetite, and energy levels</li>
              <li>Check for changes in skin, coat, or body condition</li>
              <li>Monitor elimination habits</li>
              <li>Watch for signs of pain or discomfort</li>
              <li>Note any unusual symptoms or behaviors</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Common Health Topics</h2>
            <p className="mb-4">
              Understanding common health topics helps you provide better care and recognize when your pet needs attention:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Disease Prevention</h3>
            <p className="mb-4">
              Many serious pet diseases can be prevented through vaccination, parasite control, and good hygiene practices. Understanding common diseases, their symptoms, and prevention methods helps protect your pet's health.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Early Detection</h3>
            <p className="mb-4">
              Early detection of health problems often leads to better treatment outcomes. Regular health screenings, monitoring your pet's health, and recognizing early warning signs are all important for early detection.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Emergency Preparedness</h3>
            <p className="mb-4">
              Being prepared for emergencies helps you respond effectively when problems arise. This includes having a first aid kit, knowing basic first aid procedures, and understanding when to seek immediate veterinary care.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Working with Your Veterinarian</h2>
            <p className="mb-4">
              Your veterinarian is your partner in maintaining your pet's health:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Schedule regular check-ups and follow your veterinarian's recommendations</li>
              <li>Ask questions and communicate concerns</li>
              <li>Follow treatment plans and medication instructions</li>
              <li>Keep records of vaccinations, tests, and treatments</li>
              <li>Discuss preventive care strategies</li>
            </ul>
            <p className="mb-4">
              A good relationship with your veterinarian helps ensure your pet receives the best possible care.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Comprehensive Pet Health Resources</h2>
            <p className="mb-4">
              Our pet health section provides comprehensive guides on various health topics:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Link href="/pet-health/common-diseases" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Common Pet Diseases</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn about common diseases, their symptoms, and prevention methods.</p>
              </Link>
              <Link href="/pet-health/vaccination-schedules" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Vaccination Schedules</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Complete guide to pet vaccination schedules and requirements.</p>
              </Link>
              <Link href="/pet-health/parasite-control-ticks-fleas-worms" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Parasite Control</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Comprehensive guide to preventing and treating parasites.</p>
              </Link>
              <Link href="/pet-health/first-aid-for-pets" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">First Aid for Pets</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Essential first aid procedures and emergency care information.</p>
              </Link>
              <Link href="/pet-health/skin-and-coat-health" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Skin and Coat Health</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn how to maintain healthy skin and coat.</p>
              </Link>
              <Link href="/pet-health/signs-your-pet-needs-a-vet" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Signs Your Pet Needs a Vet</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn to recognize when your pet needs veterinary attention.</p>
              </Link>
              <Link href="/pet-health/mental-health-anxiety" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Mental Health & Anxiety</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Understanding and managing pet mental health and anxiety.</p>
              </Link>
              <Link href="/pet-health/diagnostics-and-tests" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Diagnostics & Tests</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn about common veterinary diagnostic tests and procedures.</p>
              </Link>
              <Link href="/pet-health/seasonal-health-tips" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Seasonal Health Tips</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Seasonal care considerations throughout the year.</p>
              </Link>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300"><strong>Remember:</strong> This overview provides general information about pet health and wellness. Individual pets may have unique health needs based on their species, breed, age, and health status. Always consult with your veterinarian for personalized advice and recommendations. Regular veterinary care is essential for maintaining your pet's health.</p>
            </div>

            {/* FAQ Section */}
            <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What are the key areas of pet health I should focus on?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Key areas of pet health include preventive care and vaccinations, parasite prevention and control, recognizing signs of illness, first aid and emergency care, mental health and behavioral wellness, nutrition, exercise, and regular veterinary care. A comprehensive approach to pet health addresses all these areas to ensure your pet's overall wellbeing.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How often should I take my pet to the veterinarian?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Healthy adult pets typically need annual veterinary check-ups, while senior pets (usually 7+ years) may need semi-annual visits. Puppies and kittens need more frequent visits for vaccinations and initial care. Your veterinarian will recommend a schedule based on your pet's age, health status, breed, and individual needs. Regular check-ups help detect problems early.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What is preventive care for pets?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Preventive care includes vaccinations, parasite prevention, regular health screenings, dental care, proper nutrition, exercise, and early detection of health problems. Preventive care helps keep pets healthy and can prevent or catch problems early when they're easier and less expensive to treat. It's an investment in your pet's long-term health and wellbeing.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How can I help maintain my pet's health?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Maintain your pet's health by providing proper nutrition, ensuring regular exercise, keeping vaccinations and parasite prevention up to date, scheduling regular veterinary check-ups, monitoring your pet's health and behavior, providing mental stimulation, maintaining good hygiene, and addressing health concerns promptly. A proactive approach to pet health helps ensure your pet stays healthy.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What are early warning signs of health problems in pets?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Early warning signs include changes in appetite, energy levels, or behavior; vomiting or diarrhea; changes in drinking or urination; coughing or sneezing; limping or difficulty moving; skin changes; weight changes; and any other unusual symptoms. Regular monitoring helps you notice changes early. When in doubt, consult your veterinarian.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Why is preventive care important for pets?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Preventive care is important because it helps keep pets healthy, prevents diseases, catches problems early when they're easier to treat, can be more cost-effective than treating advanced conditions, and helps ensure your pet lives a long, healthy, happy life. Regular preventive care is an investment in your pet's wellbeing and can significantly improve quality of life.</p>
                </div>
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
