import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import HealthSidebar from '@/components/HealthSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'First Aid for Pets Guide',
  description: 'Essential first aid guide for pets. Learn how to handle common emergencies, create a pet first aid kit, and know when to seek immediate veterinary care.',
  keywords: ['pet first aid', 'pet emergency care', 'pet first aid kit', 'pet emergency', 'pet injury', 'pet first aid procedures', 'emergency pet care', 'pet CPR', 'pet choking', 'pet bleeding'],
  pathname: '/pet-health/first-aid-for-pets',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Pet First Aid Guide',
    type: 'image/png',
  }],
});

export default function FirstAidForPetsPage() {
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbypetcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Pet Health', item: 'https://nearbypetcare.com/pet-health' },
      { '@type': 'ListItem', position: 3, name: 'First Aid for Pets', item: 'https://nearbypetcare.com/pet-health/first-aid-for-pets' },
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
    knowsAbout: ['Veterinary Medicine', 'Pet First Aid', 'Emergency Care', 'Pet Health'],
  };

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'First Aid for Pets: Emergency Care Guide & Procedures',
    description: 'Essential first aid guide for pets, including emergency care procedures and how to handle common pet emergencies.',
    url: 'https://nearbypetcare.com/pet-health/first-aid-for-pets',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://nearbypetcare.com/pet-health/first-aid-for-pets',
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
    keywords: 'pet first aid, emergency care, pet emergencies, pet health',
  };

  const howToStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Create a Pet First Aid Kit',
    description: 'Step-by-step guide to creating a comprehensive first aid kit for pets',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Gather Basic Supplies',
        text: 'Collect essential items including gauze pads, bandages, adhesive tape, antiseptic solution, digital thermometer, tweezers, and emergency contact numbers.',
      },
      {
        '@type': 'HowToStep',
        name: 'Add Medications',
        text: 'Include any medications your pet regularly takes, as well as basic first aid medications recommended by your veterinarian.',
      },
      {
        '@type': 'HowToStep',
        name: 'Include Emergency Information',
        text: 'Add a list of emergency contact numbers including your veterinarian, emergency veterinary clinic, and poison control hotline.',
      },
      {
        '@type': 'HowToStep',
        name: 'Store Properly',
        text: 'Keep the kit in an easily accessible location and ensure all family members know where it is. Check expiration dates regularly and replace items as needed.',
      },
    ],
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What should be in a pet first aid kit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A pet first aid kit should include gauze pads and bandages, adhesive tape, antiseptic solution, digital thermometer, tweezers, emergency contact numbers, any regular medications, and basic first aid supplies. Your veterinarian can provide specific recommendations based on your pet\'s needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'When should I seek emergency veterinary care for my pet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Seek immediate emergency care for difficulty breathing, collapse, severe trauma, seizures, severe bleeding, suspected poisoning, inability to urinate (especially in male cats), severe vomiting or diarrhea with blood, or signs of extreme pain. When in doubt, contact your veterinarian or emergency clinic immediately.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I perform CPR on a pet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pet CPR should only be performed if the pet is unconscious and not breathing. The technique varies by pet size. For small pets, you may use mouth-to-nose breathing and chest compressions. For larger pets, chest compressions are performed differently. It\'s best to learn proper technique from a certified pet first aid course, as incorrect technique can cause harm.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I do if my pet is choking?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If your pet is conscious and choking, try to look in their mouth and remove the object if visible and safe to do so. Be careful not to get bitten. For small pets, you may try gentle back blows. For larger pets, you may need to perform a modified Heimlich maneuver. If unsuccessful, seek immediate veterinary care.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I stop bleeding in my pet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Apply direct pressure to the wound using a clean cloth or gauze pad. Maintain pressure for several minutes. If bleeding is severe or doesn\'t stop, continue applying pressure while transporting to a veterinarian immediately. Do not remove objects that are impaled in the wound - stabilize them and seek immediate veterinary care.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I do if I suspect my pet has been poisoned?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If you suspect poisoning, contact your veterinarian or poison control hotline immediately. Do not induce vomiting unless specifically instructed to do so, as some poisons can cause more damage if vomited. Bring the poison container or information about the substance with you to the veterinarian.',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToStructuredData) }} />
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
            { name: 'First Aid for Pets', href: '/pet-health/first-aid-for-pets' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🩹</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Emergency Care</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🩹</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                First Aid for Pets
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Essential first aid guide for pets. Learn how to handle common emergencies, create a pet first aid kit, perform basic first aid procedures, and know when to seek immediate veterinary care.
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚨</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Emergency Care</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏥</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">First Aid Kit</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Quick Response</span>
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
              Knowing basic first aid for pets can help you respond effectively in emergencies and potentially save your pet's life. This comprehensive guide covers essential first aid procedures, how to handle common emergencies, and when to seek immediate veterinary care. While first aid is not a substitute for professional veterinary care, it can help stabilize your pet and prevent conditions from worsening until you can reach a veterinarian.
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300 font-bold mb-2">Emergency: For life-threatening situations, contact your veterinarian or emergency animal hospital immediately. This guide provides general information but is not a substitute for professional veterinary care.</p>
              <p className="text-gray-700 dark:text-gray-300">Keep emergency contact numbers readily available: your veterinarian, nearest emergency veterinary clinic, and animal poison control hotline.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Pet First Aid Kit Essentials</h2>
            <p className="mb-4">
              Having a well-stocked first aid kit is essential for handling pet emergencies. Keep your kit in an easily accessible location and ensure all family members know where it is. Check expiration dates regularly and replace items as needed.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Basic Supplies</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Gauze pads and rolls:</strong> For covering wounds and controlling bleeding</li>
              <li><strong>Adhesive tape:</strong> For securing bandages (use pet-safe tape that won't pull fur)</li>
              <li><strong>Antiseptic solution:</strong> For cleaning wounds (use pet-safe products - avoid hydrogen peroxide on deep wounds)</li>
              <li><strong>Digital thermometer:</strong> Pet-specific rectal thermometer (normal temperature: 100-102.5°F for dogs and cats)</li>
              <li><strong>Tweezers:</strong> For removing splinters, ticks, or foreign objects</li>
              <li><strong>Scissors:</strong> For cutting bandages and tape</li>
              <li><strong>Disposable gloves:</strong> For your protection when handling wounds</li>
              <li><strong>Cold pack:</strong> For reducing swelling (wrap in cloth before applying)</li>
              <li><strong>Blanket or towel:</strong> For warmth, restraint, or creating a stretcher</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Emergency Information</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Veterinarian's phone number and address</li>
              <li>Emergency veterinary clinic phone number and address</li>
              <li>Animal poison control hotline (ASPCA: 888-426-4435, Pet Poison Helpline: 855-764-7661)</li>
              <li>Your pet's medical records and vaccination history</li>
              <li>List of your pet's medications and dosages</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Additional Items</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Saline solution for flushing eyes or wounds</li>
              <li>Pet-safe antibiotic ointment (check with your veterinarian)</li>
              <li>Styptic powder or cornstarch for stopping minor bleeding from nails</li>
              <li>Muzzle (even friendly pets may bite when in pain - never muzzle if pet is vomiting or having difficulty breathing)</li>
              <li>Leash for restraint and transport</li>
              <li>Pet carrier for safe transport</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Common Emergency Situations</h2>
            <p className="mb-4">
              Understanding how to handle common emergencies can help you respond quickly and effectively. Always prioritize safety - both yours and your pet's. Injured or frightened pets may bite or scratch, even if they're normally gentle.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Choking</h3>
            <p className="mb-3">If your pet is choking:</p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>Stay calm and assess the situation - look for signs of choking (pawing at mouth, difficulty breathing, blue gums)</li>
              <li>If your pet is conscious, try to look in their mouth and remove the object if it's visible and safe to do so</li>
              <li>Be very careful not to get bitten - use caution when opening your pet's mouth</li>
              <li>For small pets, you may try gentle back blows between the shoulder blades</li>
              <li>For larger pets, you may need to perform a modified Heimlich maneuver (consult your veterinarian for proper technique)</li>
              <li>If unsuccessful, transport to a veterinarian immediately while continuing to monitor breathing</li>
            </ol>
            <p className="mb-4"><strong>Important:</strong> Never stick your fingers blindly into your pet's mouth, as you may push the object further down or get bitten.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Bleeding</h3>
            <p className="mb-3">To control bleeding:</p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>Apply direct pressure to the wound using a clean cloth or gauze pad</li>
              <li>Maintain pressure for several minutes - don't lift to check too soon</li>
              <li>If bleeding is severe, continue applying pressure while transporting to a veterinarian</li>
              <li>Elevate the injured area if possible (if no fractures are suspected)</li>
              <li>Do not remove objects that are impaled in the wound - stabilize them and seek immediate veterinary care</li>
            </ol>
            <p className="mb-4">For minor cuts, clean with antiseptic and apply a bandage. For severe bleeding, seek immediate veterinary care.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Poisoning</h3>
            <p className="mb-3">If you suspect poisoning:</p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>Contact your veterinarian or poison control hotline immediately - time is critical</li>
              <li>Do not induce vomiting unless specifically instructed to do so - some poisons can cause more damage if vomited</li>
              <li>If your pet has vomited, save a sample for the veterinarian</li>
              <li>Bring the poison container or information about the substance with you</li>
              <li>Note the amount ingested and time of ingestion if known</li>
              <li>Transport to a veterinarian immediately</li>
            </ol>
            <p className="mb-4">Common pet poisons include chocolate, grapes, onions, xylitol, certain plants, medications, and household chemicals.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Heatstroke</h3>
            <p className="mb-3">Signs of heatstroke include excessive panting, drooling, rapid heartbeat, weakness, collapse, and high body temperature. If you suspect heatstroke:</p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>Move your pet to a cool, shaded area immediately</li>
              <li>Cool your pet gradually using cool (not cold) water - avoid ice water which can cause shock</li>
              <li>Apply cool, wet towels to your pet's body, especially the head, neck, and chest</li>
              <li>Offer small amounts of cool water if your pet is conscious</li>
              <li>Transport to a veterinarian immediately - heatstroke can cause organ damage</li>
            </ol>
            <p className="mb-4"><strong>Prevention:</strong> Never leave pets in cars, even with windows cracked. Provide shade and water during hot weather, and limit exercise during the hottest parts of the day.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Seizures</h3>
            <p className="mb-3">If your pet has a seizure:</p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>Stay calm and do not try to restrain your pet</li>
              <li>Move objects away that could cause injury</li>
              <li>Do not put anything in your pet's mouth</li>
              <li>Time the seizure if possible</li>
              <li>Keep your pet calm and quiet after the seizure</li>
              <li>Contact your veterinarian immediately, especially if the seizure lasts more than a few minutes or if multiple seizures occur</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Fractures</h3>
            <p className="mb-3">If you suspect a fracture:</p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>Do not try to set or manipulate the fracture</li>
              <li>Keep your pet as still as possible</li>
              <li>If you must move your pet, use a board or blanket as a stretcher</li>
              <li>Support the injured area to prevent further damage</li>
              <li>Transport to a veterinarian immediately</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Basic First Aid Procedures</h2>
            <p className="mb-4">
              While professional veterinary care is always best, knowing basic first aid procedures can help in emergency situations. Always prioritize getting your pet to a veterinarian as soon as possible.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Checking Vital Signs</h3>
            <p className="mb-3">Knowing how to check your pet's vital signs can help you assess their condition:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Temperature:</strong> Normal is 100-102.5°F for dogs and cats. Use a pet-specific rectal thermometer.</li>
              <li><strong>Heart rate:</strong> Normal is 60-140 beats per minute for dogs (varies by size) and 140-220 for cats. Feel the pulse on the inside of the thigh.</li>
              <li><strong>Breathing rate:</strong> Normal is 10-30 breaths per minute. Watch the chest rise and fall.</li>
              <li><strong>Gum color:</strong> Should be pink. Pale, blue, or white gums indicate a serious problem requiring immediate care.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Wound Care</h3>
            <p className="mb-3">For minor wounds:</p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>Clean the wound gently with saline solution or clean water</li>
              <li>Apply pet-safe antiseptic if recommended by your veterinarian</li>
              <li>Cover with a clean bandage</li>
              <li>Monitor for signs of infection (redness, swelling, discharge)</li>
              <li>Contact your veterinarian if the wound is deep, won't stop bleeding, or shows signs of infection</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">When to Seek Immediate Veterinary Care</h2>
            <p className="mb-4">
              Some situations require immediate emergency veterinary care. Don't delay - call your veterinarian or emergency clinic right away for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Difficulty breathing or severe respiratory distress</li>
              <li>Unconsciousness or collapse</li>
              <li>Severe trauma or injury</li>
              <li>Seizures or convulsions</li>
              <li>Severe bleeding that won't stop</li>
              <li>Suspected poisoning</li>
              <li>Inability to urinate (especially in male cats - this is a life-threatening emergency)</li>
              <li>Severe vomiting or diarrhea, especially with blood</li>
              <li>Signs of extreme pain or distress</li>
              <li>Heatstroke or hypothermia</li>
              <li>Eye injuries</li>
              <li>Burns</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Transporting an Injured Pet</h2>
            <p className="mb-4">
              When transporting an injured pet to the veterinarian:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Keep your pet as still and calm as possible</li>
              <li>Use a pet carrier, blanket, or board as a stretcher if needed</li>
              <li>Support injured areas to prevent further damage</li>
              <li>Keep your pet warm with a blanket</li>
              <li>Drive carefully and safely</li>
              <li>Call ahead to let the clinic know you're coming</li>
            </ul>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300"><strong>Important:</strong> This guide provides general first aid information. It is not a substitute for professional veterinary care. In any emergency situation, contact your veterinarian or emergency veterinary clinic immediately. Consider taking a pet first aid course to learn hands-on techniques properly.</p>
            </div>
            </div>

            {/* FAQ Section */}
            <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What should be in a pet first aid kit?</h3>
                  <p className="text-gray-700 dark:text-gray-300">A pet first aid kit should include gauze pads and bandages, adhesive tape, antiseptic solution, digital thermometer, tweezers, emergency contact numbers, any regular medications, and basic first aid supplies. Your veterinarian can provide specific recommendations based on your pet's needs. Keep the kit in an easily accessible location and check expiration dates regularly.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">When should I seek emergency veterinary care for my pet?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Seek immediate emergency care for difficulty breathing, collapse, severe trauma, seizures, severe bleeding, suspected poisoning, inability to urinate (especially in male cats), severe vomiting or diarrhea with blood, or signs of extreme pain. When in doubt, contact your veterinarian or emergency clinic immediately. It's always better to err on the side of caution.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do I perform CPR on a pet?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Pet CPR should only be performed if the pet is unconscious and not breathing. The technique varies by pet size. For small pets, you may use mouth-to-nose breathing and chest compressions. For larger pets, chest compressions are performed differently. It's best to learn proper technique from a certified pet first aid course, as incorrect technique can cause harm. Consider taking a pet first aid and CPR course to learn these skills properly.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What should I do if my pet is choking?</h3>
                  <p className="text-gray-700 dark:text-gray-300">If your pet is conscious and choking, try to look in their mouth and remove the object if visible and safe to do so. Be careful not to get bitten. For small pets, you may try gentle back blows. For larger pets, you may need to perform a modified Heimlich maneuver. If unsuccessful, seek immediate veterinary care. Never stick your fingers blindly into your pet's mouth.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do I stop bleeding in my pet?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Apply direct pressure to the wound using a clean cloth or gauze pad. Maintain pressure for several minutes. If bleeding is severe or doesn't stop, continue applying pressure while transporting to a veterinarian immediately. Do not remove objects that are impaled in the wound - stabilize them and seek immediate veterinary care. Elevate the injured area if possible, but only if no fractures are suspected.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What should I do if I suspect my pet has been poisoned?</h3>
                  <p className="text-gray-700 dark:text-gray-300">If you suspect poisoning, contact your veterinarian or poison control hotline immediately. Do not induce vomiting unless specifically instructed to do so, as some poisons can cause more damage if vomited. Bring the poison container or information about the substance with you to the veterinarian. Note the amount ingested and time of ingestion if known. Time is critical in poisoning cases.</p>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Pet Health Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/pet-health/signs-your-pet-needs-a-vet" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Signs Your Pet Needs a Vet</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn to recognize when your pet needs immediate veterinary attention.</p>
                </Link>
                <Link href="/pet-health/common-diseases" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Common Pet Diseases</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn about common diseases and how to recognize symptoms early.</p>
                </Link>
                <Link href="/pet-health/parasite-control-ticks-fleas-worms" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Parasite Control</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn about preventing parasites that can cause health problems.</p>
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

