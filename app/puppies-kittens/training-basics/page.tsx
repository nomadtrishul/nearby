import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PuppiesKittensSidebar from '@/components/PuppiesKittensSidebar';

export const metadata: Metadata = {
  title: 'Puppy & Kitten Training Basics: Essential Guide for Young Pets | Nearby Pet Care',
  description: 'Essential training basics for puppies and kittens. Learn how to start training early, use positive reinforcement, and build good habits. Expert tips included.',
  keywords: ['puppy training', 'kitten training', 'young pet training', 'early training', 'puppy house training', 'kitten litter training', 'positive reinforcement', 'pet training basics'],
  authors: [{ name: 'Nearby Pet Care Team' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Puppy & Kitten Training Basics | Nearby Pet Care',
    description: 'Essential training basics for puppies and kittens. Learn how to start training early and build good habits.',
    type: 'article',
    locale: 'en_US',
    url: 'https://nearbypetcare.com/puppies-kittens/training-basics',
    siteName: 'Nearby Pet Care',
    publishedTime: '2024-01-01T00:00:00+00:00',
    modifiedTime: new Date().toISOString(),
    authors: ['Nearby Pet Care Team'],
    section: 'Puppies & Kittens',
    tags: ['puppy training', 'kitten training', 'pet training', 'positive reinforcement'],
    images: [{
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Puppy & Kitten Training Basics',
      type: 'image/png',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Puppy & Kitten Training Basics | Nearby Pet Care',
    description: 'Essential training basics for puppies and kittens. Learn how to start training early and build good habits.',
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
    canonical: 'https://nearbypetcare.com/puppies-kittens/training-basics',
  },
  category: 'Pet Care',
};

export default function TrainingBasicsPage() {
  const currentDate = new Date().toISOString();
  
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Puppy & Kitten Training Basics: Essential Guide for Young Pets',
    description: 'Essential training basics for puppies and kittens. Learn how to start training early, use positive reinforcement, and build good habits.',
    url: 'https://nearbypetcare.com/puppies-kittens/training-basics',
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
      '@id': 'https://nearbypetcare.com/puppies-kittens/training-basics',
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Puppy & Kitten Training Basics',
    },
    articleSection: 'Puppies & Kittens',
    articleBody: 'Complete guide to training basics for puppies and kittens, covering positive reinforcement, house training, basic commands, and early socialization techniques.',
    keywords: 'puppy training, kitten training, young pet training, early training, positive reinforcement, house training, pet training basics',
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    wordCount: 2800,
    timeRequired: 'PT25M',
    educationalLevel: 'Beginner',
    about: {
      '@type': 'Thing',
      name: 'Pet Training',
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
        name: 'Training Basics',
        item: 'https://nearbypetcare.com/puppies-kittens/training-basics',
      },
    ],
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'When should I start training my puppy or kitten?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can start training as soon as you bring your new pet home. Begin with very short sessions (2-3 minutes) focusing on name recognition and simple commands. Keep training fun and use positive reinforcement with treats and praise. Remember, they\'re babies, so patience is key.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is positive reinforcement training?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Positive reinforcement means rewarding the behaviors you want to see more of. When your pet does something right, they get something good—a treat, praise, or playtime. This creates positive associations and makes them want to repeat that behavior. It\'s the most effective and humane training method.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long should training sessions be for puppies and kittens?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Keep training sessions very short—just 2-5 minutes at a time, several times a day. Young pets have short attention spans, so multiple short, successful sessions are much better than one long, frustrating one. Always end on a positive note.',
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
            { name: 'Training Basics', href: '/puppies-kittens/training-basics' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl" aria-hidden="true">🎓</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Training Basics</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6" aria-hidden="true">🐕</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Puppy & Kitten Training Basics
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Build a strong foundation for good behavior from day one. Learn essential training techniques that work for both puppies and kittens, using positive reinforcement and patience.
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
                  Training your puppy or kitten isn't just about teaching them tricks—it's about building communication, trust, and setting them up for a lifetime of good behavior. The good news? Starting early makes everything easier. Young pets are like sponges, ready to learn and eager to please (well, most of the time). With patience, consistency, and the right approach, you'll be amazed at how quickly they pick things up.
                </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">The Foundation: Positive Reinforcement</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              The most effective training method for young pets is positive reinforcement. This simply means rewarding the behaviors you want to see more of. When your pet does something right, they get something good—a treat, praise, or playtime. This creates a positive association and makes them want to repeat that behavior. It's not about being permissive; it's about being smart and kind.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Why does this work so well? Because it builds trust. Your pet learns that good things happen when they listen to you, which strengthens your bond and makes training something they actually enjoy. Plus, it's much more effective than punishment-based methods, which can damage your relationship and create fear or anxiety.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Training Puppies: The Basics</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Name Recognition</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              This is where it all starts. Say your puppy's name, and when they look at you, immediately give them a treat and lots of praise. Do this throughout the day, in different situations. Soon, they'll learn that their name means "pay attention to me"—and that good things follow.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Sit Command</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              "Sit" is usually the first command puppies learn, and for good reason—it's useful in countless situations. Hold a treat near your puppy's nose, then slowly move it up and back over their head. As their head follows the treat, their bottom will naturally go down. The moment their rear touches the ground, say "sit" and give them the treat. Repeat this several times, and soon they'll sit on command.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Come When Called</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              This command can literally be a lifesaver. Start in a quiet, distraction-free area. Get down to your puppy's level, say their name followed by "come," and when they approach, reward them enthusiastically. Make coming to you the best thing ever—use high-value treats and lots of praise. Never call them to you for something negative (like a bath or nail trim), or they'll learn to avoid coming when called.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">House Training</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Consistency is everything here. Take your puppy outside frequently—after waking up, after eating, after playing, and every 1-2 hours when they're awake. Always go to the same spot, use a consistent phrase like "go potty," and when they do their business, celebrate like they just won the lottery. If accidents happen inside (and they will), clean them up without scolding—your puppy won't understand why you're upset, and it can actually make house training harder.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Crate Training</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              A crate isn't a prison—it's your puppy's den, a safe space where they can relax. Start by making the crate inviting with soft bedding and treats. Feed meals near the crate, then inside the crate with the door open. Gradually work up to closing the door for short periods while you're home. Never use the crate as punishment. When done right, your puppy will see it as their cozy retreat.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Training Kittens: The Basics</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Yes, you can train kittens! While they might not be as eager to please as puppies, they're definitely trainable. The key is understanding that cats respond best to training when it's on their terms and when the rewards are worth their while.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Litter Box Training</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Most kittens naturally understand the litter box, but you can help them succeed. Place the box in a quiet, easily accessible location. Keep it clean—scoop daily and change the litter regularly. If your kitten has an accident, don't scold them. Instead, place them in the litter box and gently scratch their front paws in the litter. Most kittens catch on quickly.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Name Recognition</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Just like with puppies, start by saying your kitten's name and rewarding them when they look at you. Use treats they really love—kittens can be picky, so find what motivates them. Be patient and consistent, and they'll learn to respond to their name.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Come When Called</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Yes, you can teach a cat to come! Start by calling their name and shaking a treat bag or using a clicker. When they come, give them the treat. Do this regularly, especially at mealtimes. Many cats learn to come running when they hear their name or the treat bag.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Scratching Post Training</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Redirecting scratching behavior is crucial. When you see your kitten scratching something they shouldn't, gently pick them up and place them at the scratching post. You can encourage them by rubbing catnip on the post or dangling a toy near it. When they use the post, reward them with treats and praise. Make sure the post is tall enough for them to fully stretch and sturdy enough that it won't tip over.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Gentle Handling</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Get your kitten used to being handled from an early age. Gently touch their paws, ears, and mouth regularly. This makes future vet visits, nail trims, and grooming much easier. Always pair handling with positive experiences—treats, play, or cuddles. If your kitten seems uncomfortable, back off and try again later.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Training Tips That Work for Both</h2>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Keep Sessions Short</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Young pets have short attention spans. Aim for 2-5 minute sessions, several times a day. It's much better to have multiple short, successful sessions than one long, frustrating one. End each session on a positive note, even if it's just one successful repetition.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Timing is Everything</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Reward immediately when your pet does what you want. If you wait even a few seconds, they might not connect the reward with the behavior. This is especially important for puppies and kittens who are still learning cause and effect.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Be Consistent</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Use the same words for commands, and make sure everyone in the household is on the same page. If you say "sit" but your partner says "sit down," your pet will be confused. Consistency helps them learn faster and more reliably.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Make It Fun</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Training should be enjoyable for both of you. If you're frustrated, your pet will pick up on that. Take breaks when needed, and don't be afraid to laugh when things don't go as planned. Remember, they're babies—they're going to make mistakes, and that's okay.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Set Realistic Expectations</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Every pet learns at their own pace. Some will pick things up quickly, while others need more time and repetition. Don't compare your pet to others, and don't get discouraged if progress is slow. Celebrate small wins, and remember that training is a journey, not a destination.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Common Training Mistakes to Avoid</h2>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Being inconsistent:</strong> Changing rules or commands confuses your pet</li>
              <li><strong>Training when frustrated:</strong> Your pet will sense your mood and training won't be effective</li>
              <li><strong>Punishing mistakes:</strong> This creates fear and damages trust—redirect instead</li>
              <li><strong>Expecting too much too soon:</strong> Be patient and celebrate progress, no matter how small</li>
              <li><strong>Skipping socialization:</strong> Training isn't just about commands—exposing your pet to new experiences is crucial</li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Remember: Training is a Relationship</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The most important thing to remember is that training is about building a relationship with your pet. It's about communication, trust, and mutual respect. When you approach training with patience, kindness, and consistency, you're not just teaching commands—you're creating a bond that will last a lifetime. Enjoy the process, celebrate the victories (big and small), and don't forget to have fun along the way. Your pet is learning, and so are you!
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
