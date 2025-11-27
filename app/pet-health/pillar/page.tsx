import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import HealthSidebar from '@/components/HealthSidebar';
import { 
  generateSEOMetadata,
  generateBlogPostingStructuredData,
  generateWebPageStructuredData,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps
} from '@/lib/seo-utils';
import { getBaseUrl } from '@/lib/site-config';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Pet Health & Wellness Overview: Complete Guide',
  description: 'Comprehensive overview of pet health and wellness topics. Learn about maintaining your pet\'s health through preventive care, early detection, and understanding common health topics.',
  keywords: ['pet health overview', 'pet wellness', 'pet preventive care', 'pet health guide', 'pet health topics', 'pet wellness guide'],
  pathname: '/pet-health/pillar',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Pet Health & Wellness Overview',
    type: 'image/png',
  }],
});

export default function PetHealthPillarPage() {
  const baseUrl = getBaseUrl();
  const currentDate = new Date().toISOString();
  
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Pet Health', url: '/pet-health' },
    { name: 'Overview', url: '/pet-health/pillar' },
  ];

  // Generate structured data using centralized utilities
  const blogPostingStructuredData = generateBlogPostingStructuredData({
    headline: 'Pet Health & Wellness Overview: Complete Guide',
    description: 'Comprehensive overview of pet health and wellness topics, including preventive care, early detection, and maintaining your pet\'s health.',
    url: '/pet-health/pillar',
    datePublished: '2024-01-01T00:00:00Z',
    dateModified: currentDate,
    author: 'Nearby Pet Care Team',
  });

  const webPageStructuredData = generateWebPageStructuredData({
    name: 'Pet Health & Wellness Overview: Complete Guide',
    description: 'Comprehensive overview of pet health and wellness topics, including preventive care, early detection, and maintaining your pet\'s health.',
    url: '/pet-health/pillar',
    breadcrumbs,
  });

  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);

  const faqStructuredData = generateFAQStructuredData([
    {
      question: 'What are the key areas of pet health I should focus on?',
      answer: 'Key areas of pet health include preventive care and vaccinations, parasite prevention and control, recognizing signs of illness, first aid and emergency care, mental health and behavioral wellness, nutrition, exercise, and regular veterinary care. A comprehensive approach to pet health addresses all these areas.',
    },
    {
      question: 'How often should I take my pet to the veterinarian?',
      answer: 'Healthy adult pets typically need annual veterinary check-ups, while senior pets (usually 7+ years) may need semi-annual visits. Puppies and kittens need more frequent visits for vaccinations and initial care. Your veterinarian will recommend a schedule based on your pet\'s age, health status, and individual needs.',
    },
    {
      question: 'What is preventive care for pets?',
      answer: 'Preventive care includes vaccinations, parasite prevention, regular health screenings, dental care, proper nutrition, exercise, and early detection of health problems. Preventive care helps keep pets healthy and can prevent or catch problems early when they\'re easier and less expensive to treat.',
    },
    {
      question: 'How can I help maintain my pet\'s health?',
      answer: 'Maintain your pet\'s health by providing proper nutrition, ensuring regular exercise, keeping vaccinations and parasite prevention up to date, scheduling regular veterinary check-ups, monitoring your pet\'s health and behavior, providing mental stimulation, maintaining good hygiene, and addressing health concerns promptly.',
    },
    {
      question: 'What are early warning signs of health problems in pets?',
      answer: 'Early warning signs include changes in appetite, energy levels, or behavior; vomiting or diarrhea; changes in drinking or urination; coughing or sneezing; limping or difficulty moving; skin changes; weight changes; and any other unusual symptoms. Regular monitoring helps you notice changes early.',
    },
    {
      question: 'Why is preventive care important for pets?',
      answer: 'Preventive care is important because it helps keep pets healthy, prevents diseases, catches problems early when they\'re easier to treat, can be more cost-effective than treating advanced conditions, and helps ensure your pet lives a long, healthy, happy life. Regular preventive care is an investment in your pet\'s wellbeing.',
    },
  ]);

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      {/* Structured Data Scripts - Using centralized utilities */}
      <script {...jsonLdScriptProps(blogPostingStructuredData)} />
      <script {...jsonLdScriptProps(webPageStructuredData)} />
      <script {...jsonLdScriptProps(breadcrumbStructuredData)} />
      <script {...jsonLdScriptProps(faqStructuredData)} />
      
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
            { name: 'Overview', href: '/pet-health/pillar' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">💚</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Health & Wellness</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🩺</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Health & Wellness Overview
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Comprehensive overview of pet health and wellness topics. Learn about maintaining your pet's health through preventive care, early detection, and understanding common health topics.
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🛡️</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Prevention</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔍</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Early Detection</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💚</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Wellness</span>
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
