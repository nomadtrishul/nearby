import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import SeniorPetsSidebar from '@/components/SeniorPetsSidebar';

export const metadata: Metadata = {
  title: 'End-of-Life Care for Senior Pets | Nearby Pet Care',
  description: 'Compassionate guide to end-of-life care for senior pets. Learn about quality of life assessment, palliative care, and making difficult decisions.',
  keywords: ['end of life pet care', 'pet palliative care', 'pet quality of life', 'pet hospice', 'pet euthanasia', 'senior pet care', 'pet loss support', 'pet quality of life assessment'],
  authors: [{ name: 'Nearby Pet Care Team' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'End-of-Life Care for Senior Pets | Nearby Pet Care',
    description: 'Compassionate guide to end-of-life care for senior pets. Learn about quality of life assessment, palliative care, and making difficult decisions.',
    type: 'article',
    locale: 'en-US',
    url: 'https://nearbypetcare.com/senior-pets/end-of-life-care',
    siteName: 'Nearby Pet Care',
    publishedTime: '2024-01-01T00:00:00+00:00',
    modifiedTime: new Date().toISOString(),
    authors: ['Nearby Pet Care Team'],
    section: 'Senior Pets',
    tags: ['senior pet care', 'end of life care', 'pet palliative care', 'pet quality of life'],
    images: [{
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
      alt: 'End-of-Life Care for Senior Pets',
      type: 'image/png',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'End-of-Life Care for Senior Pets | Nearby Pet Care',
    description: 'Compassionate guide to end-of-life care for senior pets. Learn about quality of life assessment, palliative care, and making difficult decisions.',
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
    canonical: 'https://nearbypetcare.com/senior-pets/end-of-life-care',
  },
  category: 'Pet Care',
};

export default function EndOfLifeCarePage() {
  const currentDate = new Date().toISOString();
  
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'End-of-Life Care for Senior Pets: Compassionate Guide',
    description: 'Compassionate guide to end-of-life care for senior pets. Learn about quality of life assessment, palliative care, making difficult decisions, and supporting your pet through their final days.',
    url: 'https://nearbypetcare.com/senior-pets/end-of-life-care',
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
      '@id': 'https://nearbypetcare.com/senior-pets/end-of-life-care',
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
      alt: 'End-of-Life Care for Senior Pets',
    },
    articleSection: 'Senior Pets',
    articleBody: 'Compassionate guide covering quality of life assessment, palliative care options, making difficult decisions, and supporting pets through their final days with dignity and love.',
    keywords: 'end of life pet care, pet palliative care, pet quality of life, pet hospice, pet euthanasia, senior pet care, pet loss support',
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    wordCount: 3000,
    timeRequired: 'PT25M',
    educationalLevel: 'Beginner',
    about: {
      '@type': 'Thing',
      name: 'End-of-Life Pet Care',
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
        name: 'End-of-Life Care',
        item: 'https://nearbypetcare.com/senior-pets/end-of-life-care',
      },
    ],
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I assess my senior pet\'s quality of life?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Assess quality of life by monitoring factors like pain levels, appetite, mobility, interest in activities, overall happiness, and ability to maintain basic functions with dignity. Consider whether your pet is experiencing more good days than bad days. Work closely with your veterinarian to evaluate your pet\'s condition objectively. Trust your instincts—you know your pet better than anyone.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is palliative care for pets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Palliative care focuses on comfort and quality of life rather than cure. This includes effective pain management, comfort measures like soft bedding and easy access to essentials, adjustments to daily routines, and ensuring your pet feels secure and loved. The goal is to make every remaining day as good as possible.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I know when it\'s time to say goodbye to my pet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This is one of the hardest decisions you\'ll make. Consider whether your pet is suffering more than they\'re enjoying life, if bad days outnumber good days, and if they can still find comfort and happiness. Work with your veterinarian to understand your pet\'s condition and options. Trust your instincts and your love for your pet to guide you. There\'s no perfect time, but choosing to end suffering with dignity and love is an act of compassion.',
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
            { name: 'End-of-Life Care', href: '/senior-pets/end-of-life-care' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl" aria-hidden="true">💝</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Compassionate Care</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6" aria-hidden="true">❤️</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                End-of-Life Care for Senior Pets
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Providing comfort, dignity, and love during your pet's final days. A compassionate guide to quality of life, palliative care, and making difficult decisions with your veterinarian.
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
              Facing the end of your pet's life is one of the most difficult experiences a pet owner can go through. After years of companionship, love, and shared memories, the thought of saying goodbye can feel overwhelming. This is a time when your pet needs you most—not just for medical care, but for comfort, reassurance, and the familiar presence that has meant so much to them throughout their life. While there's no way to make this easy, understanding your options and knowing how to provide the best possible care can help you navigate this challenging time with love and compassion.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Understanding Quality of Life</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Quality of life is about more than just being alive—it's about whether your pet is experiencing more good days than bad days, whether they can still enjoy the things that make them happy, and whether they're comfortable and free from significant pain or distress. This is a deeply personal assessment, and there's no single right answer. What matters is being honest with yourself about your pet's condition and working closely with your veterinarian to understand what's happening.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Some days might be better than others, and that's normal. The question isn't whether your pet has a perfect day every day, but whether the overall trend is toward more comfort and enjoyment or more struggle and discomfort. Trust your instincts—you know your pet better than anyone, and you'll recognize when things are changing.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Signs to Watch For</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              There are several factors to consider when assessing your pet's quality of life. These aren't meant to be a checklist that determines everything, but rather guideposts to help you think through your pet's situation:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Pain:</strong> Is your pet in pain that can't be adequately managed? Do they seem uncomfortable even with medication?</li>
              <li><strong>Appetite:</strong> Is your pet eating and drinking? Loss of appetite can indicate pain, nausea, or other problems</li>
              <li><strong>Mobility:</strong> Can your pet move around comfortably? Can they get to their food, water, and favorite spots?</li>
              <li><strong>Interest in activities:</strong> Does your pet still show interest in things they used to enjoy, even if they can't do them the same way?</li>
              <li><strong>Happiness:</strong> Does your pet seem content? Do they still respond to you and show signs of enjoyment?</li>
              <li><strong>Dignity:</strong> Can your pet maintain their basic functions without significant struggle or distress?</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Remember, one bad day doesn't necessarily mean it's time. But if you're seeing a pattern of decline, if the bad days are outnumbering the good ones, or if your pet seems to be struggling more than they're enjoying life, it's time to have a conversation with your veterinarian.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Palliative Care: Comfort and Dignity</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Palliative care focuses on comfort and quality of life rather than cure. This doesn't mean giving up—it means shifting the focus from trying to fix everything to ensuring your pet is as comfortable and happy as possible for whatever time remains. Palliative care can be provided at home, and it's about making every day as good as it can be.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Pain Management</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Effective pain management is crucial. Your veterinarian can prescribe medications to keep your pet comfortable. Don't hesitate to communicate if you feel your pet's pain isn't well-controlled—there are many options available, and your vet can adjust medications or try different approaches. Your pet shouldn't have to suffer, and good pain management can significantly improve their quality of life.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Comfort Measures</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Small things can make a big difference in your pet's comfort. Make sure they have soft, warm bedding in a quiet, comfortable location. Keep food and water easily accessible. Help with grooming if they're having trouble. Provide gentle companionship and reassurance. If your pet has mobility issues, make sure they can get to their favorite spots or help them get there. These aren't just practical measures—they're acts of love that show your pet they're still important and cared for.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Adjusting Daily Routines</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              As your pet's needs change, you might need to adjust their daily routines. Shorter, more frequent meals might be easier than large meals. Gentle, shorter walks might be more appropriate than long ones. More rest time, less stimulation, and a quieter environment might be what they need. Pay attention to what your pet seems to want and need, and be flexible in adapting to their changing abilities and preferences.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Making Difficult Decisions</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Deciding when it's time to say goodbye is one of the hardest decisions you'll ever make. There's no perfect time, no moment when it becomes easy. What matters is making the decision with love, compassion, and your pet's best interests at heart. This isn't about giving up—it's about recognizing when continuing to live means more suffering than comfort, and choosing to end that suffering with dignity and love.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Working With Your Veterinarian</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Your veterinarian is an invaluable partner in this process. They can help you understand your pet's condition, assess their quality of life objectively, and discuss your options. Don't be afraid to ask questions, express your concerns, or ask for their honest opinion. A good veterinarian will be honest with you while also being compassionate and understanding of how difficult this is.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Sometimes, the decision becomes clear when your pet's condition deteriorates significantly. Other times, it's more subtle—a gradual decline that makes you realize your pet isn't enjoying life the way they used to. There's no shame in asking for help making this decision, and there's no shame in taking time to think it through.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Trusting Your Instincts</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              You know your pet better than anyone. You know their personality, their preferences, what makes them happy, and what they struggle with. Trust that knowledge. If you feel in your heart that your pet is suffering more than they're enjoying life, that's important information. If you feel they're still finding joy and comfort in their days, that's important too. Your love for your pet is what guides you, and that love will help you make the right decision.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">The Gift of a Peaceful Goodbye</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              When the time comes, euthanasia can be a final act of love—a way to end suffering and allow your pet to pass peacefully. Many veterinarians offer in-home euthanasia services, which can be less stressful for your pet and allow you to say goodbye in a familiar, comfortable environment. The process is typically very peaceful, and your pet will simply fall asleep. You can be with them, holding them, talking to them, letting them know how much they're loved.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              It's okay to cry. It's okay to feel heartbroken. This is one of the hardest things you'll ever do, and your grief is a testament to the love you shared. But remember that you're giving your pet the gift of a peaceful end, free from pain and struggle. That's an act of profound love and compassion.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Creating Meaningful Moments</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              However much time you have left with your pet, make the most of it. Spend time together doing things they enjoy, even if it's just sitting quietly together. Take photos and videos. Give them their favorite treats. Let them know how much they're loved. These moments matter, both for you and for your pet. They're a way to honor the life you've shared together and create final memories that you'll treasure.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Don't feel guilty about still finding joy in your time together, even as you're facing difficult decisions. Your pet doesn't know what's coming, and they can still experience happiness and comfort in the present moment. Being present with them, loving them, and making them comfortable is what matters most.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">After the Loss</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Grieving the loss of a pet is real and valid. Your pet was a member of your family, and losing them is losing a beloved companion. Give yourself permission to grieve. There's no timeline for grief, and there's no right or wrong way to feel. Some people find comfort in creating a memorial, planting a tree, or making a donation in their pet's name. Others find comfort in talking about their pet, looking at photos, or joining a pet loss support group.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Remember the good times. Remember the love you shared. Remember that you gave your pet a wonderful life, and that you were there for them until the very end. That's what matters most.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">You're Not Alone</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                This is an incredibly difficult time, and you don't have to go through it alone. Reach out to:
              </p>
              <ul className="list-disc pl-6 mb-2 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Your veterinarian for medical guidance and support</li>
                <li>Pet loss support groups (many are available online or in person)</li>
                <li>Counselors or therapists who specialize in pet loss</li>
                <li>Friends and family who understand what you're going through</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                There's no shame in needing support, and there's no shame in grieving. Your love for your pet is real, and so is your loss. Be gentle with yourself, and remember that you did everything you could to give your pet a good life and a peaceful passing. That's what love looks like.
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
