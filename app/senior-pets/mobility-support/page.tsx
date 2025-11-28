import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import SeniorPetsSidebar from '@/components/SeniorPetsSidebar';

export const metadata: Metadata = {
  title: 'Senior Pet Mobility Support Guide | Nearby Pet Care',
  description: 'Learn how to support mobility and joint health in senior pets. Practical tips for managing arthritis, improving comfort, and maintaining quality of life.',
  keywords: ['senior pet mobility', 'pet arthritis', 'elderly pet mobility', 'joint health pets', 'senior dog mobility', 'senior cat mobility', 'pet joint supplements', 'arthritis in pets', 'senior pet joint care'],
  authors: [{ name: 'Nearby Pet Care Team' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Senior Pet Mobility Support | Nearby Pet Care',
    description: 'Learn how to support mobility and joint health in senior pets. Practical tips for managing arthritis and improving comfort.',
    type: 'article',
    locale: 'en-US',
    url: 'https://nearbypetcare.com/senior-pets/mobility-support',
    siteName: 'Nearby Pet Care',
    publishedTime: '2024-01-01T00:00:00+00:00',
    modifiedTime: new Date().toISOString(),
    authors: ['Nearby Pet Care Team'],
    section: 'Senior Pets',
    tags: ['senior pet care', 'mobility support', 'pet arthritis', 'joint health'],
    images: [{
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Mobility Support for Senior Pets',
      type: 'image/png',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Senior Pet Mobility Support | Nearby Pet Care',
    description: 'Learn how to support mobility and joint health in senior pets. Practical tips for managing arthritis and improving comfort.',
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
    canonical: 'https://nearbypetcare.com/senior-pets/mobility-support',
  },
  category: 'Pet Care',
};

export default function MobilitySupportPage() {
  const currentDate = new Date().toISOString();
  
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Mobility Support for Senior Pets: Joint Health & Arthritis Care',
    description: 'Learn how to support mobility and joint health in senior pets. Practical tips for managing arthritis, improving comfort, and maintaining quality of life for aging dogs and cats.',
    url: 'https://nearbypetcare.com/senior-pets/mobility-support',
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
      '@id': 'https://nearbypetcare.com/senior-pets/mobility-support',
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Mobility Support for Senior Pets',
    },
    articleSection: 'Senior Pets',
    articleBody: 'Comprehensive guide to supporting mobility and joint health in senior pets, covering arthritis management, joint supplements, exercise, home modifications, and comfort measures.',
    keywords: 'senior pet mobility, pet arthritis, elderly pet mobility, joint health pets, senior dog mobility, senior cat mobility, pet joint supplements',
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    wordCount: 2800,
    timeRequired: 'PT20M',
    educationalLevel: 'Beginner',
    about: {
      '@type': 'Thing',
      name: 'Senior Pet Mobility',
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
        name: 'Mobility Support',
        item: 'https://nearbypetcare.com/senior-pets/mobility-support',
      },
    ],
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How can I help my senior pet with mobility issues?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Support your senior pet\'s mobility by maintaining a healthy weight, providing joint supplements like glucosamine and chondroitin, ensuring gentle regular exercise, using comfortable supportive bedding, and making home modifications like ramps or non-slip surfaces. Work with your veterinarian to manage pain and inflammation with appropriate medications.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are signs of arthritis in senior pets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Signs of arthritis include limping, stiffness (especially after rest), reluctance to jump or climb stairs, decreased activity, difficulty getting up, and changes in behavior like irritability. If you notice these signs, schedule a veterinary visit for proper diagnosis and treatment.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are joint supplements effective for senior pets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Joint supplements containing glucosamine, chondroitin, and omega-3 fatty acids can help support joint health in senior pets. While they\'re not a cure, many pet owners notice improvements in mobility and comfort. It often takes several weeks to see results, so consistency is important. Always consult your veterinarian before starting supplements.',
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
            { name: 'Senior Pets', href: '/senior-pets' },
            { name: 'Mobility Support', href: '/senior-pets/mobility-support' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl" aria-hidden="true">🚶</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Mobility Support</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6" aria-hidden="true">🦴</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Mobility Support for Senior Pets
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Help your senior pet stay active and comfortable. Learn practical ways to support joint health, manage arthritis, and maintain mobility as your pet ages.
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
              Watching your once-energetic pet struggle with stairs or hesitate before jumping onto the couch can be heartbreaking. Mobility issues are one of the most common challenges senior pets face, but the good news is that there's a lot you can do to help. Whether your pet is dealing with arthritis, general stiffness, or just slowing down with age, understanding how to support their mobility can make a world of difference in their comfort and quality of life.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Recognizing Mobility Issues</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              The signs of mobility problems can be subtle at first. You might notice your pet taking longer to get up after resting, hesitating before jumping, or showing less interest in activities they used to love. Some pets become grumpy or withdrawn when they're in pain. Others might limp slightly, especially after exercise or first thing in the morning. Pay attention to these changes—they're your pet's way of telling you something isn't quite right.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              If you notice any of these signs, don't wait. Schedule a visit with your veterinarian. Early intervention can slow the progression of joint problems and help your pet stay comfortable longer. Your vet can assess your pet's condition, rule out other health issues, and create a personalized treatment plan.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Supporting Joint Health</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Maintaining healthy joints is about more than just managing pain—it's about creating an environment and routine that supports your pet's body as it ages. Here are some key strategies that can make a real difference:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Weight Management</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              This might be the single most important thing you can do for your pet's joints. Every extra pound puts additional stress on already-aging joints. If your pet is carrying extra weight, work with your veterinarian to create a safe, gradual weight loss plan. Even losing just a few pounds can dramatically reduce joint pain and improve mobility. It's not about depriving your pet—it's about giving them the gift of less pain and more movement.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Joint Supplements</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Supplements like glucosamine, chondroitin, and omega-3 fatty acids can help support joint health. These work by providing building blocks for cartilage and reducing inflammation. They're not a magic cure, but many pet owners notice improvements in their pet's mobility and comfort after starting supplements. Talk to your veterinarian about which supplements might be right for your pet and what dosage to use. It often takes several weeks to see results, so be patient and consistent.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Gentle, Regular Exercise</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              It might seem counterintuitive, but movement is actually good for stiff joints. The key is finding the right balance—enough activity to keep joints flexible and muscles strong, but not so much that it causes pain or exhaustion. Short, gentle walks are often better than one long walk. Swimming is excellent for pets with joint issues because it provides exercise without impact. Pay attention to your pet's signals—if they're limping or seem tired, it's time to rest.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              On days when your pet seems particularly stiff or sore, a shorter walk or even just some gentle stretching might be more appropriate. The goal is to keep them moving, not to push them beyond their limits.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Comfortable Bedding</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Your pet spends a lot of time resting, so make sure their bed is actually comfortable. Orthopedic beds with memory foam can provide excellent support for achy joints. Look for beds that are easy to get in and out of—low-profile beds or those with a slight edge can help. Place beds in warm, draft-free areas, as cold can make joint stiffness worse. You might even want to add a heating pad (set on low and covered with a blanket) for extra comfort, but always supervise your pet when using one.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Home Modifications</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Small changes around your home can make a big difference in your pet's ability to get around comfortably. Ramps or pet stairs can help your dog get onto the bed or into the car without jumping. Non-slip rugs or mats can prevent slips and falls on hardwood or tile floors. If your pet has trouble with stairs, consider blocking them off or installing a gate. For cats, make sure their favorite perches are easily accessible—you might need to add steps or rearrange furniture.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Managing Arthritis</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Arthritis is incredibly common in senior pets—in fact, most dogs and cats over the age of 10 will develop some degree of arthritis. The good news is that there are many ways to manage it and keep your pet comfortable.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Working With Your Veterinarian</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Your veterinarian is your best ally in managing arthritis. They can prescribe medications to reduce pain and inflammation, recommend supplements, and suggest other treatments. Don't be afraid to ask questions or express concerns about medications. Your vet can explain the benefits and risks, help you monitor for side effects, and adjust dosages as needed. Regular checkups are important so your vet can assess how well the treatment is working and make adjustments.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Pain Management</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Pain management is crucial for pets with arthritis. Your veterinarian may prescribe anti-inflammatory medications, pain relievers, or other medications. It's important to use these exactly as prescribed and never give your pet human medications without veterinary guidance—many human pain medications are toxic to pets. You might also notice that your pet seems stiffer in the morning or after resting—this is common with arthritis, and your vet can help you manage these flare-ups.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Alternative Therapies</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Many pet owners find that alternative therapies complement traditional treatments. Physical therapy can help maintain muscle strength and joint flexibility. Acupuncture has been shown to help some pets with arthritis pain. Massage can improve circulation and reduce stiffness. Hydrotherapy (swimming or underwater treadmill) is excellent for low-impact exercise. Talk to your veterinarian about which options might be appropriate for your pet.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Daily Comfort Measures</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Beyond medical treatments, there are simple things you can do every day to help your pet feel more comfortable:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Warm compresses:</strong> Applying a warm, damp towel to stiff joints for 10-15 minutes can help ease discomfort</li>
              <li><strong>Gentle massage:</strong> Light massage can improve circulation and help relax tense muscles</li>
              <li><strong>Keep them warm:</strong> Cold weather can make arthritis worse, so make sure your pet has warm, cozy places to rest</li>
              <li><strong>Easy access:</strong> Make sure food, water, and litter boxes are easily accessible without requiring jumping or climbing</li>
              <li><strong>Regular grooming:</strong> Help your pet maintain good hygiene, especially if they're having trouble reaching certain areas</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">When to Seek Help</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              If you notice sudden changes in your pet's mobility, significant limping, or signs of pain (like whining, reluctance to move, or changes in behavior), don't wait—contact your veterinarian. Sometimes what seems like a mobility issue can be a sign of something else that needs immediate attention. Trust your instincts—you know your pet better than anyone, and if something seems off, it's worth checking out.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Remember: Every Pet is Different</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                What works for one pet might not work for another. Some pets respond well to supplements, while others need medication. Some benefit from physical therapy, while others do best with just gentle exercise at home. The key is working with your veterinarian to find the right combination of treatments for your individual pet. Be patient—it often takes time to find what works best. And remember, even small improvements in comfort and mobility can make a big difference in your pet's quality of life.
              </p>
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
