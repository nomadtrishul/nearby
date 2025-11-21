import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import TrainingSidebar from '@/components/TrainingSidebar';

export const metadata: Metadata = {
  title: 'Crate Training for Pets: Complete Step-by-Step Guide | Nearby Pet Care',
  description: 'Master crate training with our comprehensive guide. Learn how to make the crate a safe, comfortable space your pet loves. Step-by-step instructions for successful crate training.',
  keywords: ['crate training', 'dog crate training', 'pet crate', 'crate training tips', 'how to crate train a dog', 'crate training puppies'],
  openGraph: { 
    title: 'Crate Training for Pets: Complete Guide | Nearby Pet Care', 
    description: 'Master crate training with our comprehensive guide. Learn how to make the crate a safe, comfortable space your pet loves.', 
    type: 'article', 
    url: 'https://nearbypetcare.com/pet-training/crate-training',
    images: [{
      url: 'https://nearbypetcare.com/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Crate Training for Pets',
    }],
  },
  alternates: { canonical: 'https://nearbypetcare.com/pet-training/crate-training' },
};

export default function CrateTrainingPage() {
  const currentDate = new Date().toISOString();
  
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Crate Training for Pets: Complete Step-by-Step Guide',
    description: 'Master crate training with our comprehensive guide. Learn how to make the crate a safe, comfortable space your pet loves.',
    url: 'https://nearbypetcare.com/pet-training/crate-training',
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
            { name: 'Crate Training', href: '/pet-training/crate-training' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">📦</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Crate Training</span>
            </div>
            
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6">📦</div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Crate Training for Pets
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform the crate from a scary box into your pet's favorite safe haven. Learn how to crate train effectively with patience and positive reinforcement.
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
              Crate training is one of the most valuable skills you can teach your pet, but it's often misunderstood. When done correctly, a crate becomes your pet's safe space—a cozy den where they feel secure and comfortable. It's not about confinement or punishment; it's about giving your pet a place of their own. Whether you're training a new puppy, helping an adult dog adjust, or even working with a cat, crate training offers numerous benefits for both you and your pet.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Why Crate Training Matters</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Many people wonder if crate training is necessary or even humane. The truth is, when done properly, crate training taps into your pet's natural instincts. Dogs are den animals—in the wild, they seek out small, enclosed spaces for safety and rest. A crate mimics this natural den, providing a sense of security.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Key Benefits of Crate Training</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>House training aid:</strong> Dogs naturally avoid soiling their sleeping area, so a properly sized crate helps them learn to hold their bladder and bowels</li>
              <li><strong>Safety when unsupervised:</strong> Prevents your pet from getting into dangerous situations, chewing electrical cords, or ingesting harmful substances when you can't watch them</li>
              <li><strong>Prevents destructive behavior:</strong> Keeps your pet from damaging furniture, shoes, or other belongings when left alone</li>
              <li><strong>Travel convenience:</strong> A crate-trained pet is easier and safer to transport, whether by car or plane</li>
              <li><strong>Veterinary and grooming:</strong> Pets comfortable in crates handle vet visits and grooming appointments more calmly</li>
              <li><strong>Recovery and rest:</strong> After surgery or during illness, a crate provides a quiet space for healing</li>
              <li><strong>Reduces anxiety:</strong> Having a safe space can help anxious pets feel more secure, especially during stressful events like thunderstorms or parties</li>
              <li><strong>Multi-pet households:</strong> Provides a safe retreat when pets need space from each other</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Choosing the Right Crate</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The first step to successful crate training is choosing the right crate. There are several types available, each with pros and cons:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Types of Crates</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Wire crates:</strong> Most popular and versatile. Good ventilation, collapsible for storage, and allow your pet to see their surroundings. Best for most dogs</li>
              <li><strong>Plastic crates:</strong> More enclosed and den-like, making some pets feel more secure. Required for airline travel. Less ventilation but more privacy</li>
              <li><strong>Soft-sided crates:</strong> Lightweight and portable, but less durable. Not suitable for dogs who might chew or scratch. Best for well-trained, calm dogs</li>
              <li><strong>Furniture-style crates:</strong> Designed to blend into your home decor. Often more expensive but can serve dual purposes as end tables or nightstands</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Sizing Your Crate</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Size matters enormously. The crate should be large enough for your pet to stand up, turn around, and lie down comfortably, but not so large that they can use one end as a bathroom and the other as a bedroom. For puppies, you have two options:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Buy a crate that fits their adult size</strong> and use a divider to make it smaller while they're growing. This is more economical long-term</li>
              <li><strong>Buy multiple crates</strong> as they grow, which can be expensive but ensures perfect sizing at each stage</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Measure your pet from nose to tail and from floor to top of head (or top of ears if they're erect) to determine the right size. Add a few inches for comfort, but not too much.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Step-by-Step Crate Training Process</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Crate training should be gradual and positive. Rushing the process creates negative associations that can be difficult to overcome. Follow these steps at your pet's pace—some pets take days, others take weeks.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Step 1: Introduce the Crate</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Place the crate in a common area where your family spends time, not hidden away in a back room. Leave the door open and remove it if it's detachable. Let your pet investigate on their own terms. Don't force them inside or close the door. This is just exploration time.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Make the crate inviting by placing soft bedding inside (if your pet won't chew it), a favorite toy, and maybe a treat or two. You can also feed meals near the crate to create positive associations.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Step 2: Encourage Entry</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Once your pet is comfortable being near the crate, encourage them to go inside. Toss treats into the crate, and let them go in and out freely. Praise them when they enter. You can also place their food bowl just inside the crate entrance, then gradually move it further back as they become more comfortable.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Never push or force your pet into the crate. This creates fear and resistance. Let them choose to enter.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Step 3: Close the Door Briefly</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Once your pet is willingly entering the crate to get treats or food, you can start closing the door. Start with just a few seconds while you're right there. Give them a treat through the door, then open it immediately. Gradually increase the time the door stays closed, always staying nearby.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If your pet whines or seems distressed, you've moved too fast. Go back to the previous step and proceed more slowly.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Step 4: Increase Duration</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              As your pet becomes comfortable with the door closed, gradually increase how long they stay inside. Start with 5 minutes, then 10, then 15. During this time, you can move around the room, but stay nearby. Give them a special treat or toy that they only get in the crate to keep them occupied.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Kong toys stuffed with treats or frozen peanut butter are excellent for keeping pets occupied in their crates.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Step 5: Leave the Room</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Once your pet is comfortable being crated while you're in the room, start leaving for short periods. Leave for 30 seconds, then return. Gradually increase to a few minutes, then longer. Don't make a big deal about leaving or returning—keep it calm and matter-of-fact.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If your pet becomes distressed when you leave, you've moved too fast. Go back to shorter absences and build up more gradually.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Step 6: Overnight Crating</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Many people start crate training at night because puppies need to go out frequently anyway. Place the crate in your bedroom initially so your pet doesn't feel isolated. You'll hear if they need to go out, and your presence provides comfort.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Take your pet out for potty breaks during the night as needed. Young puppies may need to go out every 2-3 hours initially. As they get older and can hold it longer, you can gradually reduce nighttime trips.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Common Crate Training Mistakes to Avoid</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Using the crate as punishment:</strong> Never send your pet to the crate when they've done something wrong. The crate should always be a positive place</li>
              <li><strong>Moving too fast:</strong> Rushing the process creates anxiety and resistance. Let your pet set the pace</li>
              <li><strong>Leaving them too long:</strong> Puppies especially can't hold their bladder for extended periods. Don't crate a puppy for longer than they can physically hold it</li>
              <li><strong>Responding to whining:</strong> If your pet whines in the crate, wait for a moment of quiet before letting them out. Otherwise, you're teaching them that whining gets them released</li>
              <li><strong>Wrong size crate:</strong> Too big defeats the house training purpose; too small is uncomfortable and inhumane</li>
              <li><strong>Forcing entry:</strong> Never physically force your pet into the crate. This creates fear and can make training much more difficult</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">How Long Can Pets Stay in a Crate?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This depends on your pet's age, size, and individual needs:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Puppies:</strong> General rule is one hour per month of age, up to about 4-5 hours maximum. A 2-month-old puppy can typically hold it for 2 hours</li>
              <li><strong>Adult dogs:</strong> Most adult dogs can be crated for 6-8 hours during the day, though this shouldn't be a daily routine. Dogs need exercise, mental stimulation, and social interaction</li>
              <li><strong>Overnight:</strong> Most dogs can sleep through the night in a crate, as long as they've had adequate exercise and potty breaks during the day</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Remember: crating is a tool, not a lifestyle. Your pet should spend most of their time outside the crate, interacting with you and their environment. The crate is for specific situations, not all-day confinement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Troubleshooting Common Problems</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Whining or Crying</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Some whining is normal, especially in the beginning. However, if it's excessive or persistent, check if your pet needs to go out, is uncomfortable, or if you've moved too fast in training. Make sure they've had exercise and a potty break before crating.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Escape Attempts</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If your pet is trying to escape, they may be anxious or the crate may be too small. Ensure proper sizing and go back to earlier training steps to rebuild positive associations. Some pets may need a different type of crate (more enclosed vs. more open).
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Soiling in the Crate</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If your pet is eliminating in the crate, the crate may be too large, they may be crated too long, or they may have a medical issue. Check with your veterinarian to rule out health problems, ensure proper sizing, and make sure you're not exceeding their ability to hold it.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Remember:</strong> Crate training is a process that requires patience and consistency. Every pet is different—some take to crates immediately, while others need more time. The goal is to make the crate a positive, safe space your pet chooses to use, not a place they're forced into. With time and positive reinforcement, most pets learn to love their crate as their own special den.
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

