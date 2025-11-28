import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import HealthSidebar from '@/components/HealthSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Signs Your Pet Needs a Vet',
  description: 'Learn to recognize signs that indicate your pet needs veterinary attention. Know when symptoms require immediate emergency care or regular appointments.',
  keywords: ['pet emergency signs', 'when to take pet to vet', 'pet illness symptoms', 'pet health warning signs', 'pet emergency', 'signs pet needs vet', 'pet health symptoms'],
  pathname: '/pet-health/signs-your-pet-needs-a-vet',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Signs Your Pet Needs a Vet Guide',
    type: 'image/png',
  }],
});

export default function SignsYourPetNeedsVetPage() {
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbypetcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Pet Health', item: 'https://nearbypetcare.com/pet-health' },
      { '@type': 'ListItem', position: 3, name: 'Signs Your Pet Needs a Vet', item: 'https://nearbypetcare.com/pet-health/signs-your-pet-needs-a-vet' },
    ],
  };

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Signs Your Pet Needs a Vet: When to Seek Veterinary Care',
    description: 'Learn to recognize signs that indicate your pet needs veterinary attention and when to seek emergency care.',
    url: 'https://nearbypetcare.com/pet-health/signs-your-pet-needs-a-vet',
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
        name: 'What are the most urgent signs that my pet needs immediate veterinary care?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Seek immediate emergency care for difficulty breathing, collapse or unconsciousness, severe trauma, seizures, severe bleeding, suspected poisoning, inability to urinate (especially in male cats), severe vomiting or diarrhea with blood, or signs of extreme pain. These are life-threatening situations requiring immediate attention.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long should I wait before taking my pet to the vet for symptoms?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For severe symptoms like difficulty breathing, collapse, or severe bleeding, seek immediate care. For milder symptoms like loss of appetite, lethargy, or mild digestive issues, if they persist more than 24-48 hours, schedule a veterinary appointment. When in doubt, it\'s always better to consult with your veterinarian sooner rather than later.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are common signs of illness in pets that require veterinary attention?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Common signs include loss of appetite lasting more than 24 hours, persistent vomiting or diarrhea, lethargy or unusual behavior, difficulty urinating or defecating, excessive drinking or urination, visible pain or discomfort, changes in breathing patterns, coughing or sneezing, changes in weight, and any sudden behavioral changes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I take my pet to the vet for minor symptoms?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Minor symptoms that resolve quickly may not require immediate veterinary care, but if symptoms persist, worsen, or you\'re concerned, it\'s always best to consult with your veterinarian. Some seemingly minor symptoms can indicate underlying serious conditions. Your veterinarian can help determine if treatment is needed.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I do if my pet is showing signs of pain?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If your pet is showing signs of pain, contact your veterinarian. Signs of pain include limping, reluctance to move, vocalizing, changes in behavior, loss of appetite, or guarding a body part. Do not give human pain medications to pets, as many are toxic. Your veterinarian can provide safe and appropriate pain management.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I tell if my pet\'s symptoms are an emergency?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Emergency symptoms include difficulty breathing, collapse, severe bleeding, seizures, inability to urinate, severe trauma, suspected poisoning, or signs of extreme distress. If your pet cannot wait for a regular appointment, it\'s an emergency. When in doubt, contact your veterinarian or emergency clinic for guidance.',
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
            { name: 'Signs Your Pet Needs a Vet', href: '/pet-health/signs-your-pet-needs-a-vet' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">⚠️</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Emergency Signs</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">⚠️</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Signs Your Pet Needs a Vet
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Learn to recognize the warning signs that indicate your pet needs immediate veterinary attention. Early recognition of symptoms can make a critical difference in your pet's health and recovery.
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚨</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Emergency Signs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">👀</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Early Detection</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Quick Action</span>
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
              Recognizing when your pet needs veterinary care is crucial for their health and wellbeing. This comprehensive guide helps you identify symptoms that require immediate attention versus those that can wait for a regular appointment. Early recognition and prompt veterinary care can make a significant difference in treatment outcomes and your pet's recovery.
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300 font-bold mb-2">Seek Immediate Emergency Care For:</p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Difficulty breathing or severe respiratory distress</li>
                <li>Unconsciousness or collapse</li>
                <li>Severe bleeding that won't stop</li>
                <li>Suspected poisoning</li>
                <li>Seizures or convulsions</li>
                <li>Severe trauma or injury</li>
                <li>Inability to urinate (especially in male cats - this is a life-threatening emergency)</li>
                <li>Severe vomiting or diarrhea with blood</li>
                <li>Signs of extreme pain or distress</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Understanding Emergency vs. Non-Emergency Situations</h2>
            <p className="mb-4">
              Not all health concerns require immediate emergency care, but knowing the difference can help you respond appropriately. Emergency situations are those that could be life-threatening or cause permanent damage if not addressed immediately. Non-emergency situations still require veterinary attention but can typically wait for a scheduled appointment.
            </p>
            <p className="mb-4">
              When in doubt, it's always better to err on the side of caution and contact your veterinarian or emergency clinic. They can help you determine whether your pet needs immediate care or can wait for a regular appointment.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Life-Threatening Emergency Signs</h2>
            <p className="mb-4">
              These signs require immediate emergency veterinary care. Do not wait - contact your veterinarian or emergency clinic right away:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Difficulty Breathing</h3>
            <p className="mb-3">Signs of breathing problems include:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Rapid, shallow, or labored breathing</li>
              <li>Open-mouth breathing in cats (cats rarely pant like dogs)</li>
              <li>Blue or pale gums</li>
              <li>Gasping for air</li>
              <li>Wheezing or choking sounds</li>
              <li>Inability to catch breath</li>
            </ul>
            <p className="mb-4">Breathing problems can indicate serious conditions like heart failure, respiratory disease, or airway obstruction and require immediate attention.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Collapse or Unconsciousness</h3>
            <p className="mb-3">If your pet collapses or loses consciousness:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>This is always an emergency</li>
              <li>Can indicate heart problems, severe illness, or trauma</li>
              <li>Requires immediate veterinary care</li>
              <li>Keep your pet calm and transport carefully to a veterinarian</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Severe Bleeding</h3>
            <p className="mb-3">Seek immediate care for:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Bleeding that won't stop with direct pressure</li>
              <li>Bleeding from the nose, mouth, or rectum</li>
              <li>Blood in urine or vomit</li>
              <li>Severe wounds or trauma</li>
            </ul>
            <p className="mb-4">Apply direct pressure while transporting to a veterinarian. Do not remove impaled objects - stabilize them and seek immediate care.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Inability to Urinate (Especially Male Cats)</h3>
            <p className="mb-3">This is a life-threatening emergency, especially in male cats:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Straining to urinate with little or no urine produced</li>
              <li>Frequent attempts to urinate</li>
              <li>Signs of pain or distress</li>
              <li>Can lead to kidney failure and death if not treated immediately</li>
            </ul>
            <p className="mb-4">This requires immediate emergency veterinary care - do not wait.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Seizures</h3>
            <p className="mb-3">Seek immediate care if:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Seizure lasts more than a few minutes</li>
              <li>Multiple seizures occur in a short time</li>
              <li>Your pet doesn't recover between seizures</li>
              <li>It's your pet's first seizure</li>
            </ul>
            <p className="mb-4">Even single, brief seizures should be evaluated by a veterinarian as soon as possible.</p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Common Signs Requiring Veterinary Attention</h2>
            <p className="mb-4">
              These signs indicate your pet needs veterinary care. While not always emergencies, they should be addressed promptly:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Loss of Appetite</h3>
            <p className="mb-3">When to be concerned:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Complete loss of appetite for more than 24 hours</li>
              <li>Reduced appetite lasting more than 2-3 days</li>
              <li>Loss of appetite combined with other symptoms</li>
              <li>Sudden change in eating habits</li>
            </ul>
            <p className="mb-4">While a single missed meal may not be concerning, persistent loss of appetite can indicate serious health problems and should be evaluated by a veterinarian.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Vomiting or Diarrhea</h3>
            <p className="mb-3">Seek veterinary care if:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Vomiting or diarrhea persists for more than 24 hours</li>
              <li>Blood is present in vomit or stool</li>
              <li>Your pet appears dehydrated (dry gums, sunken eyes, lethargy)</li>
              <li>Vomiting or diarrhea is severe or frequent</li>
              <li>Accompanied by other symptoms like lethargy or loss of appetite</li>
            </ul>
            <p className="mb-4">Occasional vomiting or diarrhea may not be serious, but persistent or severe cases require veterinary attention.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Lethargy or Unusual Behavior</h3>
            <p className="mb-3">Watch for:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Unusual tiredness or lack of energy</li>
              <li>Reluctance to move or exercise</li>
              <li>Hiding or withdrawal from normal activities</li>
              <li>Changes in personality or behavior</li>
              <li>Confusion or disorientation</li>
            </ul>
            <p className="mb-4">While some lethargy can be normal (after exercise, in hot weather), persistent or severe lethargy, especially combined with other symptoms, warrants veterinary evaluation.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Difficulty Urinating or Defecating</h3>
            <p className="mb-3">Seek care if your pet:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Strains to urinate or defecate</li>
              <li>Cries or shows pain when urinating or defecating</li>
              <li>Has blood in urine or stool</li>
              <li>Urinates or defecates more or less frequently than normal</li>
              <li>Has accidents in the house (if previously house-trained)</li>
            </ul>
            <p className="mb-4">Remember: inability to urinate in male cats is a life-threatening emergency requiring immediate care.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Excessive Drinking or Urination</h3>
            <p className="mb-3">Increased thirst and urination can indicate:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Diabetes</li>
              <li>Kidney disease</li>
              <li>Urinary tract infections</li>
              <li>Hormonal disorders</li>
              <li>Other serious health conditions</li>
            </ul>
            <p className="mb-4">If you notice a significant increase in drinking or urination, schedule a veterinary appointment for evaluation.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Visible Pain or Discomfort</h3>
            <p className="mb-3">Signs of pain include:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Limping or favoring a limb</li>
              <li>Reluctance to move or jump</li>
              <li>Vocalizing (whining, crying, growling)</li>
              <li>Changes in posture or movement</li>
              <li>Guarding a body part</li>
              <li>Aggression when touched in a specific area</li>
            </ul>
            <p className="mb-4">Do not give human pain medications to pets - many are toxic. Contact your veterinarian for appropriate pain management.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Changes in Breathing Patterns</h3>
            <p className="mb-3">Be concerned if you notice:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Rapid or shallow breathing at rest</li>
              <li>Coughing that persists</li>
              <li>Wheezing or labored breathing</li>
              <li>Open-mouth breathing in cats</li>
              <li>Blue or pale gums</li>
            </ul>
            <p className="mb-4">Any breathing difficulties should be evaluated promptly, as they can indicate serious respiratory or cardiac problems.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Changes in Weight</h3>
            <p className="mb-3">Unexplained weight changes can indicate health problems:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Sudden weight loss (especially if eating normally)</li>
              <li>Rapid weight gain</li>
              <li>Changes in body condition</li>
            </ul>
            <p className="mb-4">Weight changes, especially when combined with other symptoms, should be evaluated by a veterinarian.</p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">When to Schedule a Regular Appointment</h2>
            <p className="mb-4">
              Some symptoms, while not emergencies, still require veterinary attention. Schedule an appointment if your pet shows:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Mild digestive issues that persist for more than 24-48 hours</li>
              <li>Minor skin irritations or changes</li>
              <li>Mild behavioral changes</li>
              <li>Gradual changes in appetite, energy, or weight</li>
              <li>Minor limping or stiffness</li>
              <li>Changes in drinking or urination habits</li>
              <li>Any concerns about your pet's health or behavior</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Monitoring Your Pet's Health</h2>
            <p className="mb-4">
              Regular monitoring helps you notice changes early. Pay attention to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Eating and drinking habits</li>
              <li>Energy levels and activity</li>
              <li>Behavior and personality</li>
              <li>Appearance (coat, eyes, skin)</li>
              <li>Elimination habits</li>
              <li>Breathing patterns</li>
              <li>Weight and body condition</li>
            </ul>
            <p className="mb-4">
              Knowing what's normal for your pet makes it easier to recognize when something is wrong. When in doubt, consult with your veterinarian.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300"><strong>Remember:</strong> This guide provides general information about when to seek veterinary care. Every pet is different, and symptoms can vary. When in doubt, it's always better to contact your veterinarian for guidance. Early intervention often leads to better outcomes and can prevent conditions from becoming more serious.</p>
            </div>
          </div>

            {/* FAQ Section */}
            <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What are the most urgent signs that my pet needs immediate veterinary care?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Seek immediate emergency care for difficulty breathing, collapse or unconsciousness, severe trauma, seizures, severe bleeding, suspected poisoning, inability to urinate (especially in male cats), severe vomiting or diarrhea with blood, or signs of extreme pain. These are life-threatening situations requiring immediate attention. Do not delay - contact your veterinarian or emergency clinic right away.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How long should I wait before taking my pet to the vet for symptoms?</h3>
                  <p className="text-gray-700 dark:text-gray-300">For severe symptoms like difficulty breathing, collapse, or severe bleeding, seek immediate care - do not wait. For milder symptoms like loss of appetite, lethargy, or mild digestive issues, if they persist more than 24-48 hours, schedule a veterinary appointment. When in doubt, it's always better to consult with your veterinarian sooner rather than later. Early intervention often leads to better outcomes.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What are common signs of illness in pets that require veterinary attention?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Common signs include loss of appetite lasting more than 24 hours, persistent vomiting or diarrhea, lethargy or unusual behavior, difficulty urinating or defecating, excessive drinking or urination, visible pain or discomfort, changes in breathing patterns, coughing or sneezing, changes in weight, and any sudden behavioral changes. If you notice any of these signs, especially if they persist or worsen, consult with your veterinarian.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Should I take my pet to the vet for minor symptoms?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Minor symptoms that resolve quickly may not require immediate veterinary care, but if symptoms persist, worsen, or you're concerned, it's always best to consult with your veterinarian. Some seemingly minor symptoms can indicate underlying serious conditions. Your veterinarian can help determine if treatment is needed. It's better to be cautious and have minor symptoms checked than to miss something serious.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What should I do if my pet is showing signs of pain?</h3>
                  <p className="text-gray-700 dark:text-gray-300">If your pet is showing signs of pain, contact your veterinarian. Signs of pain include limping, reluctance to move, vocalizing, changes in behavior, loss of appetite, or guarding a body part. Do not give human pain medications to pets, as many are toxic and can cause serious harm or death. Your veterinarian can provide safe and appropriate pain management based on your pet's specific needs.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How can I tell if my pet's symptoms are an emergency?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Emergency symptoms include difficulty breathing, collapse, severe bleeding, seizures, inability to urinate, severe trauma, suspected poisoning, or signs of extreme distress. If your pet cannot wait for a regular appointment, it's an emergency. When in doubt, contact your veterinarian or emergency clinic for guidance. They can help you determine whether immediate care is needed or if you can schedule a regular appointment.</p>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Pet Health Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/pet-health/first-aid-for-pets" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">First Aid for Pets</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn essential first aid procedures for handling pet emergencies.</p>
                </Link>
                <Link href="/pet-health/common-diseases" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Common Pet Diseases</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn about common diseases and their symptoms to watch for.</p>
                </Link>
                <Link href="/pet-health/diagnostics-and-tests" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Diagnostics & Tests</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn about diagnostic tests your veterinarian may recommend.</p>
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
