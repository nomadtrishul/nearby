import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import TrainingSidebar from '@/components/TrainingSidebar';

export const metadata: Metadata = {
  title: 'Obedience Training for Pets: Complete Guide to Teaching Basic Commands | Nearby Pet Care',
  description: 'Master obedience training with our comprehensive guide. Learn how to teach your dog or cat essential commands using positive reinforcement techniques that actually work.',
  keywords: ['obedience training', 'dog training commands', 'pet training basics', 'positive reinforcement', 'how to train a dog', 'dog training tips', 'teaching dogs commands', 'puppy training', 'cat training', 'dog obedience'],
  authors: [{ name: 'Nearby Pet Care Team' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Obedience Training for Pets: Complete Guide to Teaching Basic Commands | Nearby Pet Care',
    description: 'Master obedience training with our comprehensive guide. Learn how to teach your dog or cat essential commands using positive reinforcement techniques that actually work.',
    type: 'article',
    locale: 'en_US',
    url: 'https://nearbypetcare.com/pet-training/obedience-training',
    siteName: 'Nearby Pet Care',
    publishedTime: '2024-01-01T00:00:00+00:00',
    modifiedTime: new Date().toISOString(),
    authors: ['Nearby Pet Care Team'],
    section: 'Pet Training',
    tags: ['obedience training', 'dog training', 'pet training', 'positive reinforcement', 'puppy training'],
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Obedience Training for Pets - Complete Guide',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Obedience Training for Pets: Complete Guide | Nearby Pet Care',
    description: 'Master obedience training with our comprehensive guide. Learn how to teach your dog or cat essential commands using positive reinforcement.',
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
    canonical: 'https://nearbypetcare.com/pet-training/obedience-training',
  },
  category: 'Pet Training',
};

export default function ObedienceTrainingPage() {
  const currentDate = new Date().toISOString();
  
  // Comprehensive Article Structured Data for SEO
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Obedience Training for Pets: Complete Guide to Teaching Basic Commands',
    description: 'Master obedience training with our comprehensive guide. Learn how to teach your dog or cat essential commands using positive reinforcement techniques that actually work.',
    url: 'https://nearbypetcare.com/pet-training/obedience-training',
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
      '@id': 'https://nearbypetcare.com/pet-training/obedience-training',
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Obedience Training for Pets - Complete Guide',
    },
    articleSection: 'Pet Training',
    articleBody: 'Comprehensive guide to obedience training for pets, covering essential commands, positive reinforcement techniques, and training tips for dogs and cats.',
    keywords: 'obedience training, dog training commands, pet training basics, positive reinforcement, how to train a dog, dog training tips, teaching dogs commands',
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    wordCount: 2500,
    timeRequired: 'PT30M',
    educationalLevel: 'Beginner',
    about: {
      '@type': 'Thing',
      name: 'Pet Training',
    },
    mentions: [
      { '@type': 'Thing', name: 'Dog Training' },
      { '@type': 'Thing', name: 'Cat Training' },
      { '@type': 'Thing', name: 'Positive Reinforcement' },
      { '@type': 'Thing', name: 'Pet Behavior' },
    ],
  };

  // Breadcrumb Structured Data
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
        name: 'Pet Training',
        item: 'https://nearbypetcare.com/pet-training',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Obedience Training',
        item: 'https://nearbypetcare.com/pet-training/obedience-training',
      },
    ],
  };

  // FAQPage Structured Data (if applicable)
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is obedience training for pets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Obedience training teaches your pet basic commands and good manners. It involves teaching essential commands like sit, stay, come, down, leave it, and heel using positive reinforcement techniques.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to train a dog basic commands?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most dogs can learn basic commands within a few weeks with consistent daily training sessions of 5-15 minutes. However, the time varies depending on the dog\'s age, breed, and individual learning pace.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is positive reinforcement in pet training?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Positive reinforcement means rewarding behaviors you want to see more of. When your pet does something right, they get something they like (a treat, praise, or play), which makes them want to repeat that behavior.',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24" itemScope itemType="https://schema.org/Article">
      {/* Article Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Pet Training', href: '/pet-training' },
            { name: 'Obedience Training', href: '/pet-training/obedience-training' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🎓</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Obedience Training</span>
            </div>
            
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6">🎓</div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Obedience Training for Pets
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your relationship with your pet through effective obedience training. Learn how to teach essential commands that keep your pet safe, well-behaved, and happy.
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
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Obedience training isn't just about teaching your pet to follow commands—it's about building communication, trust, and a stronger bond. When done right, training becomes a fun activity that both you and your pet look forward to. Whether you're working with a bouncy puppy who can't sit still or an older dog who needs a refresher, the principles of effective training remain the same: patience, consistency, and positive reinforcement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Why Obedience Training Matters</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You might think obedience training is optional, especially if your pet is generally well-behaved. But training offers benefits that go far beyond basic manners:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Safety:</strong> A reliable "come" command can prevent your dog from running into traffic or approaching dangerous situations</li>
              <li><strong>Mental stimulation:</strong> Training exercises your pet's brain, preventing boredom and destructive behaviors</li>
              <li><strong>Better communication:</strong> When you and your pet understand each other, daily life becomes smoother and less frustrating</li>
              <li><strong>Social acceptance:</strong> Well-trained pets are welcome in more places and situations</li>
              <li><strong>Confidence building:</strong> Learning new skills boosts your pet's confidence and reduces anxiety</li>
              <li><strong>Strengthened bond:</strong> Training together creates positive shared experiences that deepen your relationship</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The Foundation: Positive Reinforcement</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Before diving into specific commands, it's crucial to understand positive reinforcement—the most effective and humane training method. Positive reinforcement means rewarding behaviors you want to see more of. When your pet does something right, they get something they like (a treat, praise, or play), which makes them want to repeat that behavior.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This approach works because it focuses on what your pet is doing right rather than punishing what they're doing wrong. It builds trust, creates a positive association with training, and makes learning enjoyable. The key is timing: reward immediately when your pet performs the desired behavior, so they make the connection between their action and the reward.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Essential Commands Every Pet Should Know</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Sit</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              "Sit" is often the first command people teach, and for good reason—it's relatively easy to learn and incredibly useful. A dog who can sit on command is easier to manage in various situations, from greeting visitors to waiting at crosswalks.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>How to teach it:</strong> Hold a treat near your pet's nose, then slowly move it up and back over their head. As their head follows the treat, their bottom will naturally lower. The moment their rear touches the ground, say "sit" and give them the treat. Repeat this several times, gradually adding the verbal cue before they sit. Practice in different locations and with increasing distractions.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Stay</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              "Stay" teaches your pet self-control and is essential for safety. It's particularly useful when you need your pet to remain in place, whether you're opening a door, crossing a street, or greeting someone.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>How to teach it:</strong> Start with your pet in a sit or down position. Hold your hand up like a stop sign, say "stay," and take one step back. If they stay, immediately return, reward, and release with "okay" or "free." Gradually increase the distance and duration. If your pet breaks the stay, calmly return them to the original position and try again with a shorter duration. Never punish them for breaking—just reset and try again.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Come (Recall)</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A reliable recall is one of the most important commands you can teach. It can literally save your pet's life. The challenge is making coming to you more rewarding than whatever else might be interesting in the environment.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>How to teach it:</strong> Start in a quiet, distraction-free area. Say your pet's name followed by "come" in an enthusiastic, happy tone. When they come to you, reward them with high-value treats and lots of praise. Never call your pet to you for something unpleasant (like a bath or nail trim), as this teaches them that "come" means bad things happen. Practice with increasing distances and distractions, always making coming to you a positive experience.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Down</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              "Down" is useful for calming an excited pet, keeping them in place for longer periods, and teaching impulse control. It's also a more relaxed position than sit for longer waits.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>How to teach it:</strong> Start with your pet in a sit. Hold a treat near their nose, then slowly lower it straight down to the ground between their front paws. As they follow the treat, their body should lower. Once they're fully down, say "down" and give the treat. Some pets may need you to move the treat slightly forward to encourage them to lie down completely. Be patient—this command can take longer to master than sit.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Leave It</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              "Leave it" teaches your pet to ignore something tempting, whether it's food on the ground, a dangerous object, or another animal. This command can prevent your pet from eating something harmful or getting into trouble.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>How to teach it:</strong> Place a treat in your closed hand. When your pet sniffs, licks, or paws at your hand, ignore them completely. The moment they back away or look at you, say "leave it" and reward them with a different treat from your other hand. Gradually progress to placing a treat on the floor and covering it with your hand, then uncovering it. Eventually, you can practice with the treat visible and uncovered. Always reward with a different treat than the one they're leaving alone.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Heel</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              "Heel" teaches your pet to walk calmly beside you rather than pulling on the leash. This makes walks more enjoyable for both of you and prevents injuries from pulling.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>How to teach it:</strong> Start in a quiet area with minimal distractions. Hold treats in the hand closest to your pet. Begin walking, and when your pet is in the correct position (close to your side), reward them frequently. If they pull ahead, stop walking. When they return to your side or look at you, resume walking and reward. Use a consistent side (usually the left) and keep the leash loose. Gradually increase the distance between rewards as your pet improves.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Training Tips for Success</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Keep sessions short:</strong> Most pets learn best in 5-15 minute sessions. Multiple short sessions throughout the day are more effective than one long session</li>
              <li><strong>End on a positive note:</strong> Always finish training with a command your pet knows well, so they end feeling successful</li>
              <li><strong>Be consistent:</strong> Use the same words and hand signals every time. If multiple people are training, make sure everyone uses the same cues</li>
              <li><strong>Practice everywhere:</strong> Once your pet knows a command at home, practice in different locations with varying levels of distraction</li>
              <li><strong>Use high-value rewards:</strong> Save special treats for training sessions to keep your pet motivated</li>
              <li><strong>Be patient:</strong> Every pet learns at their own pace. Some commands take days, others take weeks. Don't rush the process</li>
              <li><strong>Make it fun:</strong> Training should be enjoyable for both of you. If you're frustrated, take a break and try again later</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Common Training Mistakes to Avoid</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Even with the best intentions, it's easy to make mistakes that slow down training progress. Here are some common pitfalls to avoid:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Repeating commands:</strong> If you say "sit" multiple times before your pet responds, they learn they don't need to respond immediately. Say the command once, then wait or help them into position</li>
              <li><strong>Training when frustrated:</strong> If you're having a bad day, skip training. Your pet will pick up on your frustration, making the session unproductive</li>
              <li><strong>Moving too fast:</strong> Don't add distractions or increase difficulty until your pet is consistently successful at the current level</li>
              <li><strong>Using punishment:</strong> Yelling, hitting, or using aversive methods damages trust and can create fear or aggression. Stick to positive reinforcement</li>
              <li><strong>Inconsistent rewards:</strong> In the early stages, reward every correct response. Once the behavior is solid, you can gradually reduce to intermittent rewards</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Training Cats vs. Dogs</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              While the principles of positive reinforcement apply to both cats and dogs, there are some differences in approach. Cats are often more independent and may be less food-motivated than dogs, though many cats respond well to training with high-value treats like freeze-dried chicken or tuna.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Training sessions with cats should be even shorter—just 2-5 minutes—and it's important to let the cat initiate. If your cat walks away, respect that and try again later. Cats can learn all the same basic commands as dogs, though they may take longer to master them. The key is patience and finding what motivates your individual cat.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Remember:</strong> Obedience training is a journey, not a destination. Even after your pet masters the basics, continue practicing regularly to maintain their skills. Training is an ongoing conversation between you and your pet that strengthens your bond and makes life together more enjoyable.
              </p>
            </div>
              </div>
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <Link href="/pet-training" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Pet Training Guides</Link>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <TrainingSidebar />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

