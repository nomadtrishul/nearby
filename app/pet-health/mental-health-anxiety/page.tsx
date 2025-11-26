import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import HealthSidebar from '@/components/HealthSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Pet Mental Health & Anxiety: Complete Guide',
  description: 'Learn about pet mental health, anxiety, and stress. Understand signs of anxiety in pets, common causes, and how to help anxious pets feel more comfortable.',
  keywords: ['pet anxiety', 'pet mental health', 'pet stress', 'separation anxiety', 'pet behavior', 'anxious pets', 'pet anxiety symptoms', 'pet stress management', 'pet mental wellness'],
  pathname: '/pet-health/mental-health-anxiety',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Pet Mental Health & Anxiety Guide',
    type: 'image/png',
  }],
});

export default function MentalHealthAnxietyPage() {
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbypetcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Pet Health', item: 'https://nearbypetcare.com/pet-health' },
      { '@type': 'ListItem', position: 3, name: 'Mental Health & Anxiety', item: 'https://nearbypetcare.com/pet-health/mental-health-anxiety' },
    ],
  };

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pet Mental Health & Anxiety: Complete Guide',
    description: 'Learn about pet mental health, anxiety, and stress management, including signs, causes, and how to help anxious pets.',
    url: 'https://nearbypetcare.com/pet-health/mental-health-anxiety',
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
        name: 'What are signs of anxiety in pets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Signs of anxiety in pets include excessive panting or drooling, destructive behavior, hiding or withdrawal, excessive barking or meowing, changes in appetite, aggression or fearfulness, pacing, restlessness, trembling, and changes in elimination habits. If you notice these signs, especially if they persist or interfere with your pet\'s quality of life, consult with your veterinarian.',
        },
      },
      {
        '@type': 'Question',
        name: 'What causes anxiety in pets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Common causes of pet anxiety include separation anxiety, loud noises (thunderstorms, fireworks), changes in routine, new environments, past trauma, lack of socialization, medical conditions, or genetic predisposition. Identifying the cause is the first step in helping your pet. Some pets may have multiple contributing factors.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I help my anxious pet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Help anxious pets by providing a safe space, maintaining consistent routines, using calming techniques, ensuring adequate exercise and mental stimulation, avoiding punishment, and considering professional help from a veterinarian or certified animal behaviorist for severe cases. Some pets may benefit from medications or supplements as recommended by a veterinarian.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is separation anxiety in pets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Separation anxiety is a condition where pets become extremely anxious when left alone. Signs include destructive behavior, excessive vocalization, house soiling, pacing, and attempts to escape. Treatment may include behavior modification, gradual desensitization, environmental enrichment, and in some cases, medications as recommended by a veterinarian.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can pet anxiety be treated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, pet anxiety can often be managed or treated. Treatment approaches may include behavior modification, environmental changes, training, medications, supplements, or a combination of these. The best approach depends on the cause and severity of the anxiety. Consult with your veterinarian or a certified animal behaviorist for a treatment plan tailored to your pet\'s needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'When should I seek professional help for my pet\'s anxiety?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Seek professional help if anxiety is severe, persistent, interferes with your pet\'s quality of life, causes destructive behavior, leads to self-injury, or if you\'re unable to manage it on your own. Your veterinarian can rule out medical causes and may refer you to a certified animal behaviorist for specialized treatment.',
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
            { name: 'Mental Health & Anxiety', href: '/pet-health/mental-health-anxiety' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🧠</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Mental Wellness</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🧠</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Mental Health & Anxiety
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Understanding and managing your pet's mental health and anxiety. Learn to recognize signs of stress, anxiety, and behavioral issues, and discover effective strategies to support your pet's emotional wellbeing.
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">😰</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Anxiety Signs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🧘</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Stress Relief</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💚</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Wellbeing</span>
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
              Just like humans, pets can experience anxiety and stress. Understanding your pet's mental health is important for their overall wellbeing and quality of life. This comprehensive guide covers signs of anxiety, common causes, and practical strategies to help anxious pets feel more comfortable and secure. Mental health is an essential component of your pet's overall health.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300"><strong>Important:</strong> If your pet's anxiety is severe, persistent, or interferes with their quality of life, consult with your veterinarian. Some anxiety may be related to underlying medical conditions, and severe cases may require professional treatment including behavior modification or medications.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Understanding Pet Mental Health</h2>
            <p className="mb-4">
              Mental health in pets encompasses their emotional wellbeing, ability to cope with stress, and overall quality of life. Pets can experience various mental health challenges including anxiety, stress, fear, and depression. Recognizing and addressing these issues is important for your pet's happiness and health.
            </p>
            <p className="mb-4">
              Mental health problems can also affect physical health. Chronic stress and anxiety can weaken the immune system, contribute to behavioral problems, and impact overall wellbeing. Addressing mental health concerns benefits your pet's entire health picture.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Signs of Anxiety in Pets</h2>
            <p className="mb-4">
              Recognizing signs of anxiety is the first step in helping your pet. Anxiety can manifest in various ways, and signs may vary between individual pets and species.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Physical Signs</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Excessive panting or drooling (especially in dogs)</li>
              <li>Trembling or shaking</li>
              <li>Pacing or restlessness</li>
              <li>Increased heart rate</li>
              <li>Dilated pupils</li>
              <li>Excessive shedding</li>
              <li>Changes in body posture (cowering, tail tucking)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Behavioral Signs</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Destructive behavior (chewing, scratching, digging)</li>
              <li>Hiding or withdrawal from normal activities</li>
              <li>Excessive barking, meowing, or vocalization</li>
              <li>Changes in appetite (increased or decreased)</li>
              <li>Aggression or fearfulness</li>
              <li>House soiling (in previously house-trained pets)</li>
              <li>Excessive licking or grooming</li>
              <li>Attempts to escape</li>
              <li>Following you excessively (clingy behavior)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">When to Be Concerned</h3>
            <p className="mb-4">
              Occasional anxiety in response to specific situations (like thunderstorms) may be normal. However, if anxiety is frequent, severe, persistent, or interferes with your pet's quality of life, it's time to seek help. Chronic anxiety can significantly impact your pet's wellbeing and may require professional intervention.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Common Causes of Pet Anxiety</h2>
            <p className="mb-4">
              Understanding what causes anxiety in your pet helps you address the root cause and develop effective management strategies. Common causes include:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Separation Anxiety</h3>
            <p className="mb-3">
              Separation anxiety occurs when pets become extremely anxious when left alone. This is one of the most common anxiety disorders in pets, especially dogs. Signs typically occur when you're preparing to leave or when you're gone, and may include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Destructive behavior when left alone</li>
              <li>Excessive vocalization</li>
              <li>House soiling</li>
              <li>Attempts to escape</li>
              <li>Pacing or restlessness</li>
              <li>Excessive drooling or panting</li>
            </ul>
            <p className="mb-4">Treatment may include gradual desensitization, behavior modification, environmental enrichment, and in some cases, medications as recommended by a veterinarian.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Loud Noises</h3>
            <p className="mb-3">
              Many pets are afraid of loud noises such as:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Thunderstorms</li>
              <li>Fireworks</li>
              <li>Loud construction or machinery</li>
              <li>Gunshots</li>
              <li>Vacuum cleaners or other household appliances</li>
            </ul>
            <p className="mb-4">Noise phobias can be managed through desensitization, providing safe spaces, using calming techniques, and in some cases, medications during known stressful events.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Changes in Routine</h3>
            <p className="mb-4">
              Pets thrive on routine, and significant changes can cause anxiety:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Moving to a new home</li>
              <li>Changes in family structure (new baby, new pet, loss of family member)</li>
              <li>Changes in work schedule</li>
              <li>Changes in daily routine</li>
            </ul>
            <p className="mb-4">Maintaining consistency when possible and gradually introducing changes can help reduce anxiety.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">New Environments</h3>
            <p className="mb-4">
              New places, people, or situations can be overwhelming for some pets. Proper socialization and gradual exposure can help, but some pets may always be more anxious in new situations.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Past Trauma</h3>
            <p className="mb-4">
              Pets with a history of abuse, neglect, or traumatic experiences may be more prone to anxiety. These pets may need extra patience, understanding, and professional help to overcome their fears.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Lack of Socialization</h3>
            <p className="mb-4">
              Pets that weren't properly socialized during their critical development periods may be more anxious around new people, animals, or situations. Early socialization is important, but older pets can still benefit from gradual, positive exposure.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Medical Conditions</h3>
            <p className="mb-4">
              Some medical conditions can cause or contribute to anxiety. Pain, hormonal imbalances, neurological conditions, or other health issues may manifest as anxiety. It's important to rule out medical causes with your veterinarian.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Helping Anxious Pets</h2>
            <p className="mb-4">
              There are many strategies you can use to help reduce your pet's anxiety and improve their quality of life:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Provide a Safe Space</h3>
            <p className="mb-3">Create a quiet, comfortable area where your pet can retreat when feeling anxious:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>A quiet room or area away from noise and activity</li>
              <li>Comfortable bedding</li>
              <li>Familiar items (toys, blankets with your scent)</li>
              <li>Access to food and water</li>
              <li>A crate or covered area for pets that prefer enclosed spaces</li>
            </ul>
            <p className="mb-4">Make this space a positive place - don't use it for punishment. Allow your pet to use it whenever they need to.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Maintain Consistent Routines</h3>
            <p className="mb-4">
              Predictable routines help reduce anxiety. Try to maintain consistent:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Feeding schedules</li>
              <li>Exercise routines</li>
              <li>Bedtime and wake-up times</li>
              <li>Daily activities</li>
            </ul>
            <p className="mb-4">When changes are necessary, introduce them gradually when possible.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Exercise and Mental Stimulation</h3>
            <p className="mb-4">
              Regular exercise and mental stimulation can help reduce anxiety:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Daily exercise appropriate for your pet's age and health</li>
              <li>Interactive toys and puzzles</li>
              <li>Training sessions (positive reinforcement)</li>
              <li>Playtime and enrichment activities</li>
            </ul>
            <p className="mb-4">A tired, mentally stimulated pet is often a calmer pet.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Calming Techniques</h3>
            <p className="mb-3">Various calming techniques can help anxious pets:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Gentle massage or petting (if your pet enjoys it)</li>
              <li>Calming music or white noise</li>
              <li>Pheromone products (available as diffusers, sprays, or collars)</li>
              <li>Calming supplements (consult your veterinarian first)</li>
              <li>Thunder shirts or anxiety wraps (for some pets)</li>
            </ul>
            <p className="mb-4">What works varies by individual pet - experiment to find what helps your pet.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Avoid Punishment</h3>
            <p className="mb-4">
              Never punish an anxious pet. Punishment increases anxiety and can worsen the problem. Instead, focus on positive reinforcement, creating a safe environment, and addressing the underlying cause of anxiety.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Gradual Desensitization</h3>
            <p className="mb-4">
              For specific fears (like loud noises or separation), gradual desensitization can help. This involves slowly and gradually exposing your pet to the feared stimulus at a low intensity, paired with positive experiences, and gradually increasing exposure. This should be done carefully and may require professional guidance.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">When to Seek Professional Help</h2>
            <p className="mb-4">
              While many cases of mild anxiety can be managed at home, professional help may be needed if:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Anxiety is severe or persistent</li>
              <li>Anxiety interferes with your pet's quality of life</li>
              <li>Your pet shows destructive behavior or self-injury</li>
              <li>You're unable to manage the anxiety on your own</li>
              <li>Anxiety is getting worse despite your efforts</li>
              <li>Your pet's anxiety affects your family's quality of life</li>
            </ul>
            <p className="mb-4">
              Your veterinarian can rule out medical causes and may recommend:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Behavior modification programs</li>
              <li>Referral to a certified animal behaviorist</li>
              <li>Medications to help manage anxiety (when appropriate)</li>
              <li>Combination approaches</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Preventing Anxiety</h2>
            <p className="mb-4">
              While not all anxiety can be prevented, there are steps you can take to promote good mental health:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Early socialization:</strong> Properly socialize puppies and kittens during their critical development periods</li>
              <li><strong>Positive experiences:</strong> Expose pets to various situations in a positive, controlled manner</li>
              <li><strong>Consistent routines:</strong> Maintain predictable daily routines</li>
              <li><strong>Mental and physical exercise:</strong> Provide adequate exercise and mental stimulation</li>
              <li><strong>Safe environment:</strong> Create a safe, comfortable living environment</li>
              <li><strong>Regular veterinary care:</strong> Address health issues promptly, as physical health affects mental health</li>
            </ul>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300"><strong>Remember:</strong> This guide provides general information about pet mental health and anxiety. Individual pets may have unique needs, and severe or persistent anxiety should be evaluated by a veterinarian. Your veterinarian can help determine the best approach for your pet's specific situation, which may include behavior modification, environmental changes, or medications when appropriate.</p>
            </div>
          </div>

            {/* FAQ Section */}
            <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What are signs of anxiety in pets?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Signs of anxiety in pets include excessive panting or drooling, destructive behavior, hiding or withdrawal, excessive barking or meowing, changes in appetite, aggression or fearfulness, pacing, restlessness, trembling, and changes in elimination habits. If you notice these signs, especially if they persist or interfere with your pet's quality of life, consult with your veterinarian to determine the cause and appropriate treatment.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What causes anxiety in pets?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Common causes of pet anxiety include separation anxiety, loud noises (thunderstorms, fireworks), changes in routine, new environments, past trauma, lack of socialization, medical conditions, or genetic predisposition. Identifying the cause is the first step in helping your pet. Some pets may have multiple contributing factors, and a veterinarian can help determine the underlying causes.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How can I help my anxious pet?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Help anxious pets by providing a safe space, maintaining consistent routines, using calming techniques, ensuring adequate exercise and mental stimulation, avoiding punishment, and considering professional help from a veterinarian or certified animal behaviorist for severe cases. Some pets may benefit from medications or supplements as recommended by a veterinarian. The approach should be tailored to your pet's specific needs and the cause of their anxiety.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What is separation anxiety in pets?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Separation anxiety is a condition where pets become extremely anxious when left alone. Signs typically occur when you're preparing to leave or when you're gone, and may include destructive behavior, excessive vocalization, house soiling, attempts to escape, and pacing. Treatment may include behavior modification, gradual desensitization, environmental enrichment, and in some cases, medications as recommended by a veterinarian. Professional help is often beneficial for separation anxiety.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Can pet anxiety be treated?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Yes, pet anxiety can often be managed or treated. Treatment approaches may include behavior modification, environmental changes, training, medications, supplements, or a combination of these. The best approach depends on the cause and severity of the anxiety. Consult with your veterinarian or a certified animal behaviorist for a treatment plan tailored to your pet's needs. Many pets can significantly improve with appropriate treatment.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">When should I seek professional help for my pet's anxiety?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Seek professional help if anxiety is severe, persistent, interferes with your pet's quality of life, causes destructive behavior, leads to self-injury, or if you're unable to manage it on your own. Your veterinarian can rule out medical causes and may refer you to a certified animal behaviorist for specialized treatment. Early intervention often leads to better outcomes.</p>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Pet Health Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/pet-training" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Pet Training</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn training techniques that can help reduce anxiety and build confidence.</p>
                </Link>
                <Link href="/pet-health/signs-your-pet-needs-a-vet" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Signs Your Pet Needs a Vet</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn when anxiety symptoms require veterinary attention.</p>
                </Link>
                <Link href="/pet-health/common-diseases" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Common Pet Diseases</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn about health conditions that can contribute to anxiety.</p>
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
