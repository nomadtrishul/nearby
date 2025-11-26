import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import TrainingSidebar from '@/components/TrainingSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Potty Training for Pets: Complete House Training Guide',
  description: 'Master potty training with our comprehensive guide. Learn effective house training techniques for dogs and litter box training for cats.',
  keywords: ['potty training', 'house training', 'litter box training', 'pet toilet training', 'puppy potty training', 'kitten litter training', 'housebreaking', 'dog house training', 'cat litter training'],
  pathname: '/pet-training/potty-training',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Potty Training for Pets - Complete Guide',
    type: 'image/png',
  }],
});

export default function PottyTrainingPage() {
  const currentDate = new Date().toISOString();
  
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Potty Training for Pets: Complete House Training Guide',
    description: 'Master potty training with our comprehensive guide. Learn effective house training techniques for dogs and litter box training for cats.',
    url: 'https://nearbypetcare.com/pet-training/potty-training',
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
      '@id': 'https://nearbypetcare.com/pet-training/potty-training',
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Potty Training for Pets - Complete Guide',
    },
    articleSection: 'Pet Training',
    articleBody: 'Comprehensive guide to potty training for pets, covering house training for dogs and litter box training for cats with practical tips and techniques.',
    keywords: 'potty training, house training, litter box training, pet toilet training, puppy potty training, kitten litter training',
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    wordCount: 2800,
    timeRequired: 'PT30M',
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
        name: 'Pet Training',
        item: 'https://nearbypetcare.com/pet-training',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Potty Training',
        item: 'https://nearbypetcare.com/pet-training/potty-training',
      },
    ],
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does it take to potty train a puppy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most puppies can be house trained within 4-6 months with consistent training. However, the timeline varies depending on the puppy\'s age, breed, and your consistency with the training schedule.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you train a cat to use a litter box?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most cats naturally use a litter box, but kittens may need guidance. Place the box in a quiet, accessible location, keep it clean, and use unscented litter. If your cat stops using the box, consult a veterinarian to rule out medical issues.',
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
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Pet Training', href: '/pet-training' },
            { name: 'Potty Training', href: '/pet-training/potty-training' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🚽</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Potty Training</span>
            </div>
            
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6">🚽</div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Potty Training for Pets
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Say goodbye to accidents and hello to a clean home. Learn proven techniques for house training dogs and litter box training cats that work for real pet owners.
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
              Potty training is one of the first and most important skills you'll teach your pet. While it can feel overwhelming at first, especially with a new puppy or kitten, the process becomes much easier when you understand the fundamentals. The key to success? Consistency, patience, and understanding your pet's natural instincts. Whether you're house training a dog or teaching a cat to use a litter box, the principles are similar: create a routine, reward success, and handle accidents calmly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">House Training Dogs: A Step-by-Step Guide</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              House training a dog requires understanding their natural instincts and working with them, not against them. Dogs are den animals, which means they naturally want to keep their sleeping area clean. This instinct is your greatest ally in house training.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Understanding Your Puppy's Schedule</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Puppies have small bladders and need to eliminate frequently. A general rule of thumb: puppies can hold their bladder for about one hour per month of age, up to about 8 hours. So a 2-month-old puppy needs to go out roughly every 2 hours. This means you'll be making many trips outside, especially in the early weeks.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The most critical times to take your puppy outside are:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>First thing in the morning (before you even have coffee!)</li>
              <li>Immediately after waking up from a nap</li>
              <li>Right after eating or drinking</li>
              <li>After playtime or exercise</li>
              <li>Before bedtime</li>
              <li>Every 1-2 hours during the day for young puppies</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Establishing a Routine</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Consistency is everything in house training. Feed your puppy at the same times each day, and take them out on a regular schedule. This helps their body establish a predictable rhythm, making accidents less likely. Keep a log if it helps—note when they eat, when they go out, and when they eliminate. You'll start to see patterns emerge.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When you take your puppy outside, always go to the same spot. The scent of previous eliminations will encourage them to go again. Use a specific phrase like "go potty" or "do your business" while they're eliminating, and they'll eventually learn to associate that phrase with the action.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Supervision and Confinement</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When you can't actively watch your puppy, they should be confined to a small area—either a crate or a puppy-proofed room. This prevents accidents and teaches them to hold it. Never leave a young puppy unsupervised in the house. If you can't watch them, they should be in their crate or confined area.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Watch for signs that your puppy needs to go: sniffing the ground, circling, whining, or suddenly stopping play. When you see these signs, immediately take them outside. Don't wait—puppies give very little warning.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Rewarding Success</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When your puppy eliminates outside, celebrate! Give them a treat immediately (within 1-2 seconds) and lots of praise. Make it a big deal—they need to understand that going outside is the best thing ever. Use high-value treats reserved just for potty training to make it extra special.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Don't rush back inside after they go. Let them explore and play for a few minutes so they don't learn that going potty means the fun ends.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Handling Accidents</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Accidents will happen—they're part of the learning process. If you catch your puppy in the act, interrupt them with a gentle "uh-uh" or clap, then immediately take them outside. If they finish outside, reward them. Never punish your puppy for an accident, especially if you didn't catch them in the act. They won't understand why you're upset, and punishment can create fear and anxiety around elimination.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Clean accidents thoroughly with an enzymatic cleaner designed for pet stains. Regular household cleaners won't remove the scent completely, and your puppy will be drawn back to that spot. The goal is to eliminate all traces of the accident so your puppy doesn't think that area is an acceptable bathroom.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Litter Box Training for Cats</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The good news about cats? Most of them are naturally inclined to use a litter box. In the wild, cats bury their waste to avoid attracting predators, so the instinct is already there. Your job is to make the litter box appealing and accessible.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Choosing the Right Litter Box</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The general rule is one litter box per cat, plus one extra. So if you have one cat, you need two boxes. If you have two cats, you need three boxes. This prevents territorial issues and gives your cat options.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The box should be large enough for your cat to comfortably turn around and dig. Many commercial boxes are too small. A good rule: the box should be at least 1.5 times the length of your cat from nose to tail. For kittens, start with a smaller box they can easily climb into, then upgrade as they grow.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Covered vs. uncovered is a matter of preference—for both you and your cat. Some cats prefer the privacy of a covered box, while others feel trapped. If you're not sure, start with an uncovered box and add a cover later if needed.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Location, Location, Location</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Where you place the litter box matters enormously. Cats want privacy, but they also want to feel safe. Avoid placing boxes in high-traffic areas, near loud appliances (like washing machines), or in areas where they might feel cornered. At the same time, don't hide the box so well that your cat has trouble finding it.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have multiple floors, place at least one box on each level. For older cats or cats with mobility issues, make sure boxes are easily accessible—avoid placing them in basements or areas that require climbing stairs.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Choosing the Right Litter</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Most cats prefer unscented, clumping litter that's soft on their paws. Avoid heavily scented litters—while you might like the smell, many cats find it overwhelming and will avoid the box. Start with a basic, unscented clumping litter, and stick with it once you find something your cat likes. Cats don't appreciate change, especially when it comes to their bathroom.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Fill the box with 2-3 inches of litter. Too little litter doesn't allow for proper digging and covering, while too much can be wasteful and messy.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Teaching Kittens to Use the Litter Box</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Most kittens learn to use the litter box from their mother, but if you're raising an orphaned kitten or one that needs a refresher, the process is straightforward. After meals, naps, and play sessions, place the kitten in the litter box. Gently scratch the litter with your finger to show them what to do. If they eliminate, praise them. If they jump out, place them back in. Be patient—they'll get it.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Make sure the box is easily accessible for small kittens. You may need to use a shallow box or create a step so they can climb in and out easily.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Keeping the Box Clean</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Cats are fastidious creatures, and a dirty litter box is the number one reason they'll stop using it. Scoop the box at least once daily—twice is even better. Completely change the litter and wash the box with mild soap and water weekly. Avoid harsh chemicals that might leave a scent your cat dislikes.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you notice your cat avoiding the box, the first thing to check is cleanliness. Even if it looks clean to you, your cat might disagree. When in doubt, clean it.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Troubleshooting Common Problems</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Dogs Having Accidents</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If your dog continues having accidents despite your best efforts, consider these possibilities:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Medical issues:</strong> Urinary tract infections, bladder stones, or other health problems can cause frequent accidents. If accidents are sudden or accompanied by other symptoms, see your veterinarian</li>
              <li><strong>Not enough opportunities:</strong> You might not be taking them out frequently enough. Increase the frequency of potty breaks</li>
              <li><strong>Inconsistent routine:</strong> Make sure everyone in the household is following the same schedule and rules</li>
              <li><strong>Anxiety or stress:</strong> Changes in the household, new pets, or other stressors can cause regression</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Cats Avoiding the Litter Box</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If your cat stops using the litter box, it's usually a sign that something is wrong. First, rule out medical issues—urinary problems are common and can cause cats to associate the box with pain. Then consider:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Cleanliness:</strong> The box might not be clean enough for your cat's standards</li>
              <li><strong>Location:</strong> Something might have changed that makes the location stressful</li>
              <li><strong>Litter preference:</strong> Your cat might not like the type of litter you're using</li>
              <li><strong>Box size or type:</strong> The box might be too small, or your cat might prefer covered/uncovered</li>
              <li><strong>Multi-cat issues:</strong> Another cat might be blocking access or intimidating your cat</li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Remember:</strong> Potty training takes time and patience. Setbacks are normal, especially during major life changes or when your pet is young. Stay consistent, stay positive, and don't hesitate to consult with a veterinarian or professional trainer if you're struggling. With the right approach, your pet will learn, and accidents will become a thing of the past.
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

