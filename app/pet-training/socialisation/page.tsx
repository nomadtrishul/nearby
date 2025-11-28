import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import TrainingSidebar from '@/components/TrainingSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Pet Socialisation Guide',
  description: 'Master pet socialization with our comprehensive guide. Learn about the critical socialization period and how to build confidence in puppies and kittens.',
  keywords: ['pet socialization', 'puppy socialization', 'kitten socialization', 'socializing pets', 'puppy socialization checklist', 'socialization period'],
  pathname: '/pet-training/socialisation',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Pet Socialisation Guide',
    type: 'image/png',
  }],
});

export default function SocialisationPage() {
  const currentDate = new Date().toISOString();
  
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pet Socialisation Guide: How to Socialize Puppies and Kittens',
    description: 'Master pet socialization with our comprehensive guide. Learn about the critical socialization period and how to build confidence in your pet.',
    url: 'https://nearbypetcare.com/pet-training/socialisation',
    datePublished: '2024-01-01T00:00:00+00:00',
    dateModified: currentDate,
    author: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
    },
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
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
            { name: 'Socialisation', href: '/pet-training/socialisation' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">👥</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Socialisation</span>
            </div>
            
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6">👥</div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Socialisation Guide
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Build a confident, well-adjusted pet through proper socialization. Learn how to expose your puppy or kitten to the world in a positive, safe way.
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
              Socialization is one of the most important things you can do for your pet, especially during their early months. It's the process of exposing your pet to a wide variety of people, animals, environments, sounds, and experiences in a positive way. Proper socialization helps prevent fear, anxiety, and aggression later in life, setting your pet up for success in a human world. Think of it as giving your pet a toolkit of positive experiences they can draw from when they encounter new situations throughout their life.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Understanding the Critical Socialization Period</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Puppies and kittens have a critical window of development when their brains are most receptive to new experiences. During this time, positive exposures create lasting positive associations, while negative experiences or lack of exposure can lead to fear and anxiety that's much harder to overcome later.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Puppy Socialization Period</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              For puppies, the primary socialization period is typically between 3 and 14 weeks of age. This is when they're most open to new experiences and can form positive associations easily. However, socialization should continue throughout the first year and beyond—the critical period is just when it's most impactful.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              During this time, puppies are learning what's safe and what's not. Every new person, place, sound, and experience helps shape their worldview. The goal is to expose them to as many different things as possible while ensuring every experience is positive or at least neutral.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Kitten Socialization Period</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Kittens have a shorter critical period, typically between 2 and 7 weeks of age. During this time, they learn to interact with people, other cats, and their environment. Kittens who aren't handled during this period may remain fearful of humans throughout their lives.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              However, socialization continues to be important throughout a kitten's first few months. The experiences they have during this time significantly influence their adult personality and behavior.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">What to Socialize Your Pet To</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Effective socialization means exposing your pet to a wide variety of experiences. Here's what to focus on:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">People</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Your pet needs to meet and have positive experiences with many different types of people:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Men, women, and children of various ages</li>
              <li>People of different ethnicities and appearances</li>
              <li>People wearing hats, sunglasses, uniforms, or carrying items like umbrellas or bags</li>
              <li>People with different body types and mobility aids (wheelchairs, canes, etc.)</li>
              <li>People with beards, long hair, or other distinctive features</li>
              <li>People making different sounds (laughing, talking loudly, etc.)</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The key is variety. If your pet only meets one type of person, they may become fearful of people who look or act differently.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Other Animals</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Socialization with other animals is crucial, but it must be done carefully and safely:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Other dogs:</strong> Puppies should meet well-vaccinated, friendly adult dogs and other puppies. Puppy classes are excellent for this</li>
              <li><strong>Other cats:</strong> If you have multiple cats or plan to, proper introductions are essential. Even if you only have one cat, exposure to other cats can be helpful</li>
              <li><strong>Different species:</strong> Exposure to other animals (birds, small mammals, etc.) should be supervised and positive</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Always ensure interactions are positive. One bad experience with another animal can create lasting fear or aggression.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Environments and Surfaces</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Expose your pet to different places and surfaces:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Different types of flooring (carpet, tile, wood, grass, gravel, sand)</li>
              <li>Various locations (parks, pet stores, friends' homes, urban areas, quiet areas)</li>
              <li>Different types of vehicles (cars, elevators, if appropriate)</li>
              <li>Indoor and outdoor spaces</li>
              <li>Busy places and quiet places</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Sounds</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Many pets develop noise phobias because they weren't exposed to various sounds during their critical period. Expose your pet to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Household sounds (vacuum, blender, doorbell, phone ringing)</li>
              <li>Outdoor sounds (traffic, construction, sirens, lawn mowers)</li>
              <li>Weather sounds (thunder, wind, rain—use recordings if needed)</li>
              <li>People sounds (children playing, crowds, music)</li>
              <li>Other animal sounds</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Start with sounds at low volume and pair them with positive things like treats or play. Gradually increase volume as your pet becomes comfortable.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Handling and Grooming</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Pets need to be comfortable being touched and handled for veterinary care, grooming, and daily life:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Being touched all over their body (ears, paws, tail, mouth)</li>
              <li>Being picked up and held</li>
              <li>Having their nails trimmed</li>
              <li>Being brushed or groomed</li>
              <li>Having their teeth examined</li>
              <li>Being examined like a veterinarian would (checking eyes, ears, etc.)</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Make handling a positive experience with treats and praise. Start with brief touches and gradually increase duration and intensity.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">How to Socialize Safely and Effectively</h2>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Make Every Experience Positive</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The goal of socialization isn't just exposure—it's positive exposure. Every new experience should be paired with something your pet loves: treats, praise, play, or affection. If your pet seems scared or overwhelmed, back off and try again more gradually.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Never force your pet into a situation they're clearly uncomfortable with. Forced exposure can create fear rather than confidence.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Go at Your Pet's Pace</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Every pet is different. Some are naturally bold and curious, while others are more cautious. Respect your pet's personality and comfort level. Push them slightly outside their comfort zone, but don't overwhelm them.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Watch for signs of stress: hiding, trembling, excessive panting, trying to escape, or shutting down. If you see these signs, the experience is too much. Make it easier or try again another day.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Safety First</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Before your pet is fully vaccinated, socialization must be done carefully. Avoid dog parks, areas with unknown dogs, or places where unvaccinated animals might have been. However, you can still socialize safely:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Carry your puppy or use a stroller to expose them to sights and sounds</li>
              <li>Invite vaccinated, healthy dogs to your home</li>
              <li>Take your pet to friends' homes (if they don't have pets or have vaccinated pets)</li>
              <li>Use puppy classes that require vaccinations and health checks</li>
              <li>Expose them to different surfaces, sounds, and people in safe environments</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Use Puppy and Kitten Classes</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Well-run puppy and kitten classes are excellent for socialization. They provide controlled environments where your pet can meet others of similar age and size, learn basic skills, and have positive experiences. Look for classes that use positive reinforcement and require vaccinations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Socialization Checklist</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Use this checklist to ensure you're covering all the bases. Try to expose your pet to as many of these as possible during their critical period:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>✓ People of different ages, genders, and appearances</li>
              <li>✓ Well-behaved, vaccinated dogs and cats</li>
              <li>✓ Different types of flooring and surfaces</li>
              <li>✓ Various environments (busy, quiet, indoor, outdoor)</li>
              <li>✓ Different sounds (household, outdoor, weather)</li>
              <li>✓ Being handled and touched all over</li>
              <li>✓ Car rides (for dogs)</li>
              <li>✓ Being left alone for short periods</li>
              <li>✓ Different types of toys and objects</li>
              <li>✓ Various weather conditions</li>
              <li>✓ Different times of day</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Socializing Adult Pets</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              While the critical period is most important, socialization doesn't end there. Adult pets can still learn to be comfortable with new experiences, though it may take more time and patience. The same principles apply: go slowly, make it positive, and respect your pet's comfort level.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you've adopted an adult pet who wasn't properly socialized, work with a professional trainer or behaviorist. They can help you create a safe, gradual socialization plan that addresses your pet's specific fears and needs.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Remember:</strong> Socialization is an investment in your pet's future. The time and effort you put in during those early months pays dividends throughout their life. A well-socialized pet is more confident, less fearful, and better equipped to handle the challenges and changes that come with living in a human world. Start early, go slowly, and make it fun for both of you.
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

