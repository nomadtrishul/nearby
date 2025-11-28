import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import HealthSidebar from '@/components/HealthSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Pet Diagnostics & Tests Guide',
  description: 'Learn about common veterinary diagnostic tests and procedures. Understand what tests your pet might need, why they\'re performed, and how to prepare your pet for testing.',
  keywords: ['pet diagnostics', 'veterinary tests', 'pet blood tests', 'pet x-rays', 'pet health screening', 'veterinary diagnostics', 'pet lab tests', 'pet health tests'],
  pathname: '/pet-health/diagnostics-and-tests',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Pet Diagnostics & Tests Guide',
    type: 'image/png',
  }],
});

export default function DiagnosticsAndTestsPage() {
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbypetcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Pet Health', item: 'https://nearbypetcare.com/pet-health' },
      { '@type': 'ListItem', position: 3, name: 'Diagnostics & Tests', item: 'https://nearbypetcare.com/pet-health/diagnostics-and-tests' },
    ],
  };

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pet Diagnostics & Tests: Complete Guide to Veterinary Testing',
    description: 'Learn about common veterinary diagnostic tests and procedures, what they can tell you about your pet\'s health, and how to prepare for testing.',
    url: 'https://nearbypetcare.com/pet-health/diagnostics-and-tests',
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
        name: 'What are common diagnostic tests for pets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Common diagnostic tests include blood work (CBC and chemistry panel), urinalysis, fecal examinations, X-rays and imaging, heartworm and tick-borne disease testing, and biopsies. These tests help veterinarians assess your pet\'s health, diagnose conditions, and monitor treatment effectiveness.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why does my pet need blood tests?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Blood tests help assess organ function, detect infections, identify blood disorders, monitor medication effects, and screen for diseases. They can detect problems before symptoms appear and help veterinarians make informed decisions about your pet\'s health and treatment.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should my pet have health screenings?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Healthy adult pets typically need annual health screenings, while senior pets may need more frequent testing (every 6 months). Puppies and kittens need testing as part of their initial care. Your veterinarian will recommend a schedule based on your pet\'s age, health status, and risk factors.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do pets need to fast before blood tests?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Some blood tests require fasting (usually 8-12 hours), while others don\'t. Your veterinarian will provide specific instructions based on the tests being performed. Always follow your veterinarian\'s instructions for preparing your pet for testing.',
        },
      },
      {
        '@type': 'Question',
        name: 'What can X-rays tell us about my pet\'s health?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'X-rays can reveal bone fractures, joint problems, organ size and shape, foreign objects, tumors, and other abnormalities. They\'re particularly useful for diagnosing skeletal problems, respiratory issues, and some internal conditions. X-rays are a valuable diagnostic tool but may be combined with other tests for a complete picture.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are diagnostic tests safe for pets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, diagnostic tests are generally safe for pets. Blood tests, urinalysis, and fecal exams are non-invasive. X-rays use minimal radiation and are safe when performed by trained professionals. Some tests may require sedation for safety and accuracy, which is generally safe when performed by a veterinarian. Your veterinarian will discuss any risks specific to your pet.',
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
            { name: 'Diagnostics & Tests', href: '/pet-health/diagnostics-and-tests' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🔬</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Diagnostic Testing</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🔬</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Diagnostics & Tests
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Learn about common veterinary diagnostic tests, what they can tell you about your pet's health, when they're recommended, and how to prepare your pet for testing.
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🩸</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Blood Tests</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📷</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Imaging</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔍</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Early Detection</span>
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
              Veterinary diagnostic tests help identify health issues early, monitor your pet's health, and guide treatment decisions. This comprehensive guide explains common diagnostic tests, what they can tell you about your pet's health, when they're recommended, and how to prepare your pet for testing. Understanding these tests helps you work with your veterinarian to provide the best care for your pet.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300"><strong>Important:</strong> This guide provides general information about diagnostic tests. Your veterinarian will recommend specific tests based on your pet's individual needs, symptoms, age, and health status. Always follow your veterinarian's recommendations and instructions for preparing your pet for testing.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Understanding Diagnostic Testing</h2>
            <p className="mb-4">
              Diagnostic tests are tools veterinarians use to assess your pet's health, identify problems, monitor conditions, and guide treatment. These tests can detect issues before symptoms appear, confirm diagnoses, monitor treatment effectiveness, and help prevent problems through early detection.
            </p>
            <p className="mb-4">
              Regular health screenings are an important part of preventive care. They can catch problems early when they're often easier and less expensive to treat. Your veterinarian will recommend tests based on your pet's age, health status, symptoms, and risk factors.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Common Diagnostic Tests</h2>
            <p className="mb-4">
              Understanding what different tests can tell you helps you understand your veterinarian's recommendations and your pet's health status.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Blood Work</h3>
            <p className="mb-3">
              Blood tests are among the most common diagnostic tests and provide valuable information about your pet's health:
            </p>

            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-4 mb-2">Complete Blood Count (CBC)</h4>
            <p className="mb-3">A CBC evaluates the cellular components of blood:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Red blood cells:</strong> Indicate anemia or polycythemia (too many red blood cells)</li>
              <li><strong>White blood cells:</strong> Indicate infection, inflammation, or immune system problems</li>
              <li><strong>Platelets:</strong> Important for blood clotting</li>
            </ul>
            <p className="mb-4">A CBC helps detect infections, anemia, bleeding disorders, and other blood-related conditions.</p>

            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-4 mb-2">Chemistry Panel</h4>
            <p className="mb-3">A chemistry panel evaluates organ function and metabolic status:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Kidney function:</strong> BUN, creatinine levels</li>
              <li><strong>Liver function:</strong> ALT, AST, bilirubin levels</li>
              <li><strong>Blood sugar:</strong> Glucose levels (important for detecting diabetes)</li>
              <li><strong>Electrolytes:</strong> Sodium, potassium, chloride levels</li>
              <li><strong>Protein levels:</strong> Albumin, total protein</li>
            </ul>
            <p className="mb-4">Chemistry panels help assess organ health, detect metabolic disorders, and monitor treatment effectiveness.</p>

            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-4 mb-2">Thyroid Function Tests</h4>
            <p className="mb-4">
              Thyroid tests evaluate thyroid hormone levels. Both hypothyroidism (low thyroid) and hyperthyroidism (high thyroid) are common in pets and can cause various health problems. These tests are especially important for middle-aged and senior pets.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Urinalysis</h3>
            <p className="mb-3">
              Urinalysis evaluates urine composition and can reveal important information about:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Kidney function</li>
              <li>Urinary tract infections</li>
              <li>Diabetes</li>
              <li>Bladder stones or crystals</li>
              <li>Dehydration</li>
              <li>Kidney disease</li>
            </ul>
            <p className="mb-4">Urinalysis is often performed as part of routine health screenings and when urinary problems are suspected.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Fecal Examinations</h3>
            <p className="mb-3">
              Fecal exams check for intestinal parasites:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Roundworms</li>
              <li>Hookworms</li>
              <li>Whipworms</li>
              <li>Tapeworms</li>
              <li>Giardia and other protozoa</li>
            </ul>
            <p className="mb-4">Regular fecal exams are important, especially for puppies, kittens, and pets with gastrointestinal symptoms. Some parasites can be transmitted to humans, making detection and treatment important.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">X-Rays and Imaging</h3>
            <p className="mb-3">
              X-rays (radiographs) provide images of internal structures and can reveal:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Bone fractures or abnormalities</li>
              <li>Joint problems</li>
              <li>Organ size and shape</li>
              <li>Foreign objects</li>
              <li>Tumors or masses</li>
              <li>Respiratory problems</li>
              <li>Heart size and shape</li>
            </ul>
            <p className="mb-4">X-rays are particularly useful for diagnosing skeletal problems, respiratory issues, and some internal conditions. They're non-invasive and generally safe, though sedation may be needed for some pets to ensure clear images.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Ultrasound</h3>
            <p className="mb-3">
              Ultrasound uses sound waves to create images of internal organs and can provide detailed information about:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Organ structure and function</li>
              <li>Pregnancy</li>
              <li>Tumors or masses</li>
              <li>Fluid accumulation</li>
              <li>Heart function (echocardiography)</li>
            </ul>
            <p className="mb-4">Ultrasound is non-invasive and doesn't use radiation. It's particularly useful for evaluating soft tissues and organs.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Heartworm and Tick-Borne Disease Testing</h3>
            <p className="mb-3">
              These tests check for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Heartworm disease:</strong> Annual testing is recommended for all dogs, even those on prevention</li>
              <li><strong>Tick-borne diseases:</strong> Lyme disease, ehrlichiosis, anaplasmosis, and others</li>
            </ul>
            <p className="mb-4">Early detection of these diseases is important for effective treatment. Regular testing is recommended, especially in areas where these diseases are prevalent.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Biopsies</h3>
            <p className="mb-4">
              Biopsies involve taking a small sample of tissue for microscopic examination. They're used to diagnose:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Tumors or masses</li>
              <li>Skin conditions</li>
              <li>Organ diseases</li>
              <li>Inflammatory conditions</li>
            </ul>
            <p className="mb-4">Biopsies help determine whether growths are benign or malignant and guide treatment decisions.</p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Routine Health Screening</h2>
            <p className="mb-4">
              Regular health screenings help detect problems early, even before symptoms appear. Early detection often leads to better treatment outcomes and can prevent conditions from becoming more serious.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Puppy and Kitten Screening</h3>
            <p className="mb-3">Initial health screenings for young pets typically include:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Physical examination</li>
              <li>Fecal examination for parasites</li>
              <li>Blood tests to check for certain diseases (depending on species and risk factors)</li>
              <li>Baseline health information for future comparison</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Adult Pet Screening</h3>
            <p className="mb-3">Healthy adult pets typically need:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Annual physical examination</li>
              <li>Annual blood work (CBC and chemistry panel)</li>
              <li>Annual urinalysis</li>
              <li>Annual heartworm testing (dogs)</li>
              <li>Fecal examination (as recommended)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Senior Pet Screening</h3>
            <p className="mb-3">Senior pets (typically 7+ years) may need more frequent testing:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Semi-annual physical examinations</li>
              <li>More comprehensive blood work</li>
              <li>Thyroid function testing</li>
              <li>Additional tests based on health status and risk factors</li>
            </ul>
            <p className="mb-4">More frequent screening helps detect age-related health problems early.</p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Preparing Your Pet for Testing</h2>
            <p className="mb-4">
              Proper preparation helps ensure accurate test results:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Fasting Requirements</h3>
            <p className="mb-3">Some tests require fasting (usually 8-12 hours):</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Blood chemistry panels often require fasting for accurate results</li>
              <li>Your veterinarian will provide specific instructions</li>
              <li>Water is usually allowed during fasting</li>
              <li>Follow your veterinarian's instructions carefully</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Sample Collection</h3>
            <p className="mb-3">For certain tests, you may need to collect samples at home:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Urine samples:</strong> Collect fresh urine in a clean container</li>
              <li><strong>Fecal samples:</strong> Collect fresh stool (usually within 24 hours of testing)</li>
              <li>Your veterinarian will provide specific instructions for sample collection</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Sedation</h3>
            <p className="mb-4">
              Some tests may require sedation for safety and accuracy, especially if your pet is anxious or needs to stay still. Your veterinarian will discuss sedation if needed and ensure it's safe for your pet.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Understanding Test Results</h2>
            <p className="mb-4">
              Your veterinarian will explain test results and what they mean for your pet's health. It's important to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Ask questions if you don't understand something</li>
              <li>Understand what normal ranges mean for your pet</li>
              <li>Know what follow-up may be needed</li>
              <li>Keep records of test results for future reference</li>
            </ul>
            <p className="mb-4">
              Remember that test results are interpreted in context with your pet's symptoms, physical examination, and medical history. Your veterinarian will help you understand what the results mean for your specific pet.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Cost Considerations</h2>
            <p className="mb-4">
              Diagnostic testing is an investment in your pet's health. While costs vary, consider that:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Early detection through screening can prevent more expensive treatments later</li>
              <li>Diagnostic tests help ensure appropriate treatment, avoiding unnecessary costs</li>
              <li>Many veterinarians offer wellness plans that include routine testing</li>
              <li>Discuss costs and payment options with your veterinarian if you have concerns</li>
            </ul>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300"><strong>Remember:</strong> This guide provides general information about diagnostic tests. Your veterinarian will recommend specific tests based on your pet's individual needs, age, health status, and symptoms. Always follow your veterinarian's recommendations and ask questions if you need clarification about any tests or results.</p>
            </div>
          </div>

            {/* FAQ Section */}
            <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What are common diagnostic tests for pets?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Common diagnostic tests include blood work (CBC and chemistry panel), urinalysis, fecal examinations, X-rays and imaging, heartworm and tick-borne disease testing, and biopsies. These tests help veterinarians assess your pet's health, diagnose conditions, monitor treatment effectiveness, and detect problems early. Your veterinarian will recommend specific tests based on your pet's needs.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Why does my pet need blood tests?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Blood tests help assess organ function, detect infections, identify blood disorders, monitor medication effects, and screen for diseases. They can detect problems before symptoms appear and help veterinarians make informed decisions about your pet's health and treatment. Regular blood work is an important part of preventive care and can catch health issues early.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How often should my pet have health screenings?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Healthy adult pets typically need annual health screenings, while senior pets may need more frequent testing (every 6 months). Puppies and kittens need testing as part of their initial care. Your veterinarian will recommend a schedule based on your pet's age, health status, breed, and risk factors. Regular screening helps detect problems early when they're often easier to treat.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Do pets need to fast before blood tests?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Some blood tests require fasting (usually 8-12 hours), while others don't. Your veterinarian will provide specific instructions based on the tests being performed. Always follow your veterinarian's instructions for preparing your pet for testing. Fasting helps ensure accurate results for certain tests, particularly chemistry panels that evaluate blood sugar and other metabolic parameters.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What can X-rays tell us about my pet's health?</h3>
                  <p className="text-gray-700 dark:text-gray-300">X-rays can reveal bone fractures, joint problems, organ size and shape, foreign objects, tumors, and other abnormalities. They're particularly useful for diagnosing skeletal problems, respiratory issues, and some internal conditions. X-rays are a valuable diagnostic tool but may be combined with other tests for a complete picture of your pet's health.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Are diagnostic tests safe for pets?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Yes, diagnostic tests are generally safe for pets. Blood tests, urinalysis, and fecal exams are non-invasive. X-rays use minimal radiation and are safe when performed by trained professionals. Some tests may require sedation for safety and accuracy, which is generally safe when performed by a veterinarian. Your veterinarian will discuss any risks specific to your pet and the tests being performed.</p>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Pet Health Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/pet-health/signs-your-pet-needs-a-vet" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Signs Your Pet Needs a Vet</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn when symptoms may require diagnostic testing.</p>
                </Link>
                <Link href="/pet-health/common-diseases" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Common Pet Diseases</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn about diseases that diagnostic tests help detect.</p>
                </Link>
                <Link href="/pet-health/vaccination-schedules" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Vaccination Schedules</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn about preventive care that works alongside diagnostic testing.</p>
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
