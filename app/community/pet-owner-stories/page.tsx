import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import BlogSidebar from '@/components/BlogSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Pet Owner Stories: Inspiring Experiences & Community | Nearby Pet Care',
  description:
    'Read inspiring stories from pet owners. Share experiences, tips, and connect with the pet care community. Discover adoption stories and training successes.',
  keywords: [
    'pet owner stories',
    'pet stories',
    'pet experiences',
    'pet community',
    'adoption stories',
    'pet training stories',
    'pet health stories',
    'pet owner experiences',
  ],
  pathname: '/community/pet-owner-stories',
  type: 'article',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Pet Owner Stories - Inspiring Experiences',
      type: 'image/png',
    },
  ],
});

export default function PetOwnerStoriesPage() {
  const baseUrl = 'https://nearbypetcare.com';
  const pageUrl = `${baseUrl}/community/pet-owner-stories`;
  const publishedTime = '2024-01-01T00:00:00Z';
  const modifiedTime = new Date().toISOString();

  // Breadcrumb Structured Data (defined first to avoid reference errors)
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Community',
        item: `${baseUrl}/community`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Pet Owner Stories',
        item: pageUrl,
      },
    ],
  };

  // Article Structured Data
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${pageUrl}#article`,
    headline: 'Pet Owner Stories - Inspiring Experiences & Community',
    description: 'Read inspiring stories from pet owners. Share experiences, tips, and connect with the pet care community.',
    image: {
      '@type': 'ImageObject',
      url: `${baseUrl}/og-image.png`,
      width: 1200,
      height: 630,
      alt: 'Pet Owner Stories',
    },
    datePublished: publishedTime,
    dateModified: modifiedTime,
    author: {
      '@type': 'Person',
      '@id': `${baseUrl}/about#author`,
      name: 'Nearby Pet Care Team',
      url: `${baseUrl}/about`,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${baseUrl}#organization`,
      name: 'Nearby Pet Care',
      legalName: 'Nearby Pet Care',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
        width: 200,
        height: 48,
      },
      url: baseUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
    },
    articleSection: 'Community',
    keywords: 'pet owner stories, pet stories, pet experiences, pet community',
    inLanguage: 'en-US',
    wordCount: 3000,
    timeRequired: 'PT19M',
    about: [
      {
        '@type': 'Thing',
        name: 'Pet Owner Stories',
      },
      {
        '@type': 'Thing',
        name: 'Pet Community',
      },
      {
        '@type': 'Thing',
        name: 'Pet Experiences',
      },
    ],
  };

  // WebPage Structured Data
  const webPageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    name: 'Pet Owner Stories',
    description: 'Read inspiring stories from pet owners. Share experiences, tips, and connect with the pet care community.',
    url: pageUrl,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${baseUrl}#website`,
      name: 'Nearby Pet Care',
      url: baseUrl,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${baseUrl}/og-image.png`,
      width: 1200,
      height: 630,
    },
    datePublished: publishedTime,
    dateModified: modifiedTime,
    breadcrumb: breadcrumbStructuredData,
    about: {
      '@type': 'Thing',
      name: 'Pet Owner Stories',
    },
  };

  // FAQ Structured Data
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why are pet owner stories important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pet owner stories create connection, build community, and remind us that we\'re not alone in our journey. They provide practical tips, lessons learned, and insights that help other pet owners. Stories also remind us of the profound impact pets have on our lives and help others understand the depth of the human-animal bond.',
        },
      },
      {
        '@type': 'Question',
        name: 'What types of pet owner stories are shared?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pet owner stories include adoption and rescue stories, training success stories, health and recovery journeys, special bonds and relationships, and lessons learned and tips shared. These stories celebrate the real experiences of pet owners, sharing both triumphs and struggles.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I share my pet owner story?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Every pet owner has experiences worth sharing. Your perspective is unique, and what seems ordinary to you might be exactly what someone else needs to hear. Whether you\'re a first-time pet owner or have decades of experience, your story has value and contributes to our collective understanding of pet care.',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24" role="main" aria-label="Pet Owner Stories">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      
      {/* Hero Section - Optimized for Core Web Vitals */}
      <section 
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Decorative background elements - Optimized for performance */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl" aria-hidden="true"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl" aria-hidden="true"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Community', href: '/community' },
            { name: 'Pet Owner Stories', href: '/community/pet-owner-stories' },
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm" role="status" aria-label="Content type">
              <span className="text-2xl" aria-hidden="true">📖</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Stories</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6" aria-hidden="true">📖</div>
            
            {/* Title - H1 for SEO */}
            <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Owner Stories
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Connect with the pet care community through inspiring stories from pet owners. Discover real experiences, learn from others, and celebrate the joy that pets bring to our lives.
            </p>
            
            {/* Key Points */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-10" role="list" aria-label="Key features">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/70 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm" role="listitem">
                <span aria-hidden="true">🏠</span>
                <span>Adoption Stories</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/70 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm" role="listitem">
                <span aria-hidden="true">🎓</span>
                <span>Training Success</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/70 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm" role="listitem">
                <span aria-hidden="true">💚</span>
                <span>Health Journeys</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8" itemScope itemType="https://schema.org/Article">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              <div className="prose prose-lg dark:prose-invert max-w-none" itemProp="articleBody">
                <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  Every pet owner has a story worth telling. Whether it's the moment you first met your furry friend, the challenges you've overcome together, or the everyday moments that make your bond special—these stories connect us, inspire us, and remind us why we do what we do for our pets. Here, we celebrate the real experiences of pet owners, sharing both the triumphs and the struggles that come with caring for our animal companions.
                </p>

                <section className="mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-6">Why Stories Matter</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    There's something powerful about hearing from someone who's been where you are. When you're struggling with a difficult training challenge, reading about someone who overcame the same issue can give you hope. When you're celebrating a milestone, sharing it with others who understand multiplies the joy. Stories create connection, build community, and remind us that we're not alone in this journey.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Beyond the emotional connection, stories are also practical. They're filled with real-world tips, lessons learned the hard way, and insights that you won't find in any manual. Someone else's experience might just solve a problem you've been wrestling with, or help you avoid a mistake they made. Every story is a chance to learn something new.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Perhaps most importantly, stories remind us of the profound impact pets have on our lives. They change us, challenge us, and bring us joy in ways we never expected. Sharing these experiences honors that relationship and helps others understand the depth of the human-animal bond.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-6">Adoption and Rescue Stories</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    There's nothing quite like the story of a pet finding their forever home. These stories often start with uncertainty—a pet in a shelter, a rescue situation, or a chance encounter. They unfold through patience, trust-building, and the gradual realization that this is meant to be. Every adoption story is unique, but they all share a common thread: transformation.
                  </p>

                  <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-xl p-6 sm:p-8 mb-8">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">Max's Second Chance - Sarah's Story</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      "I wasn't planning to adopt a senior dog. I went to the shelter looking for a puppy, but there was Max—a 10-year-old golden retriever who had been surrendered after his owner passed away. He was sitting in the corner, not making eye contact with anyone. Something about him just broke my heart.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      The first month was tough. Max wouldn't eat much, he'd hide under my bed, and he flinched every time I moved too quickly. I almost wondered if I'd made a mistake. But I kept showing up—gentle touches, quiet words, letting him come to me on his own terms.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      Three months later, I came home to find Max waiting at the door with his tail wagging. That was the moment I knew we'd made it. Now, two years later, he's the most loving, goofy dog. He follows me everywhere, sleeps with his head on my lap, and has this incredible ability to sense when I'm stressed. Adopting a senior dog was the best decision I never planned to make."
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">— Sarah Chen, 34, New York</p>
                  </div>

                  <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-xl p-6 sm:p-8 mb-8">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">Luna's Transformation - Michael's Story</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      "Luna was a feral kitten found in a parking lot. The rescue organization warned me she might never be fully socialized—she was terrified of humans, would hiss and hide, and had never been touched by a person. But I had experience with difficult cats, and something told me to give her a chance.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      For the first two weeks, I barely saw her. She lived under my couch, only coming out at night to eat. I'd sit on the floor near her hiding spot and just talk to her, read books out loud, let her get used to my voice. I never forced contact—just let her know I was there, and I was safe.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      The breakthrough came on day 18. I was sitting on the floor, and she actually came out and sat a few feet away from me. A week later, she let me pet her. Now, a year later, Luna is the most affectionate cat I've ever had. She sleeps on my chest, greets me at the door, and has this hilarious habit of 'talking' to me with little chirps. Patience and respect for her boundaries changed everything."
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">— Mike Rodriguez, 28, California</p>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-6">Training Success Stories</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    Training a pet is rarely a straight line from problem to solution. It's more like a winding path with setbacks, breakthroughs, and moments of doubt. That's what makes training success stories so relatable and inspiring. They show the reality of the process—the frustration, the small wins, the persistence required, and ultimately, the satisfaction of seeing your hard work pay off.
                  </p>

                  <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-xl p-6 sm:p-8 mb-8">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">From Chaos to Calm - Emma's Story with Bella</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      "Bella, my border collie mix, was a nightmare on walks. She'd pull so hard my shoulders ached, bark at every dog we passed, and once dragged me into a puddle because she saw a squirrel. I tried everything—choke chains, prong collars, those 'no-pull' harnesses. Nothing worked, and I was getting desperate.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      A friend suggested positive reinforcement training, and I was skeptical. How could treats possibly work when she was that reactive? But I was willing to try anything. We started with basic focus exercises in the house, then the backyard, then quiet streets. It took three months of daily practice before we could walk past another dog without a meltdown.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      The key was understanding that Bella wasn't being 'bad'—she was overwhelmed and didn't know how to handle her emotions. Teaching her to look at me when she felt anxious, rewarding calm behavior, and gradually exposing her to triggers changed everything. Now we can walk through busy parks, and she checks in with me instead of reacting. The training didn't just fix our walks—it transformed our entire relationship."
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">— Emily Johnson, 31, Texas</p>
                  </div>

                  <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-xl p-6 sm:p-8 mb-8">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">The Litter Box Breakthrough - James's Story</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      "My cat, Whiskers, started peeing outside the litter box when he was about two years old. I tried everything—different litters, multiple boxes, cleaning more frequently, even those pheromone diffusers. Nothing worked, and I was at my wit's end. My vet suggested it might be behavioral, not medical.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      I started keeping a journal of when and where he'd have accidents. That's when I noticed the pattern—it always happened when I had guests over or when there were loud noises outside. Whiskers was stressed, and the litter box was in a high-traffic area of my apartment.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      I moved the litter box to a quiet corner, added a second one in another location, and started giving Whiskers extra attention and playtime before stressful situations. Within two weeks, the accidents stopped. The solution wasn't about the litter box itself—it was about understanding what was causing his stress and addressing that. Sometimes the problem isn't what it seems."
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">— Jamie Williams, 42, Florida</p>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-6">Health and Recovery Journeys</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    When a pet faces a health challenge, it can feel overwhelming. These stories show the resilience of both pets and their owners, the importance of early detection, and the power of never giving up. They're often emotional, sometimes difficult to read, but always filled with hope and determination.
                  </p>

                  <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-xl p-6 sm:p-8 mb-8">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">Rocky's Comeback - Lisa's Story</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      "Rocky, my 8-year-old lab, suddenly stopped eating and became lethargic. I thought it was just a stomach bug, but when he didn't improve after two days, I took him to the vet. They found a mass in his spleen and recommended immediate surgery. The diagnosis was scary, but the vet was optimistic.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      The surgery went well, but recovery was harder than I expected. Rocky had to wear a cone, couldn't run or jump for weeks, and needed medication every eight hours. I set alarms on my phone, slept on the couch next to him, and learned to give him pills wrapped in cheese (his favorite trick).
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      Three months later, Rocky is back to his old self—chasing balls, going on long walks, and stealing food off the counter when I'm not looking. The whole experience taught me to trust my instincts, advocate for my pet, and never underestimate the power of routine veterinary care. Early detection saved his life."
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">— Lisa Martinez, 45, Colorado</p>
                  </div>

                  <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-xl p-6 sm:p-8 mb-8">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">Mittens' Diabetes Journey - David's Story</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      "When Mittens was diagnosed with diabetes at age 12, I was terrified. The vet said she'd need insulin injections twice a day for the rest of her life. I'd never given a shot before, and the thought of sticking a needle into my cat made me queasy. But I knew I had to learn.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      The first week was rough. Mittens hated the injections, I was nervous, and we both ended up stressed. But my vet showed me techniques to make it easier—warming the insulin, using the right needle size, finding the right spot. I also learned to monitor her blood glucose and adjust her diet.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      Now, a year later, giving injections is just part of our routine. Mittens actually comes to me when it's time—she knows she gets a treat afterward. Her diabetes is well-controlled, and she's healthier than she's been in years. Managing a chronic condition isn't easy, but it's absolutely doable with the right support and information."
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">— Dave Thompson, 38, Oregon</p>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-6">Special Bonds and Relationships</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    Some stories are simply about the extraordinary connections that form between pets and their people. These might be stories of pets who helped their owners through difficult times, or owners who went above and beyond for their pets. They might be about unlikely friendships, remarkable intelligence, or moments of understanding that took your breath away.
                  </p>

                  <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-xl p-6 sm:p-8 mb-8">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">Charlie Saved Me - Maria's Story</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      "I got Charlie, my golden retriever, right after my divorce. I was in a dark place—depressed, anxious, barely leaving my apartment. I thought getting a dog would force me to get outside, but I had no idea how much he would change my life.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      Charlie didn't care that I was sad. He needed walks, so we walked. He needed playtime, so we played. He needed routine, so I built one. Slowly, his needs became my structure, and that structure pulled me out of the darkness.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      But it's more than that. Charlie seems to know when I'm having a bad day. He'll come and rest his head on my lap, or bring me his favorite toy, or just sit quietly next to me. He's taught me about unconditional love, about being present, about finding joy in simple moments. I got him to help me, but he's done so much more than that—he's shown me how to live again."
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">— Maria Garcia, 36, Illinois</p>
                  </div>

                  <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-xl p-6 sm:p-8 mb-8">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">The Unlikely Friendship - Tom's Story</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      "I have a German Shepherd named Rex and a rescue cat named Shadow. When I first brought Shadow home, I was worried—Rex had never been around cats, and Shadow was terrified of dogs. I kept them separated for weeks, doing slow introductions.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      One day, I came home to find them both on the couch together. Shadow was curled up against Rex's side, and Rex had his head resting gently on Shadow's back. I couldn't believe it. They'd worked it out on their own.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      Now they're inseparable. Shadow grooms Rex's ears, Rex lets Shadow steal his food, and they sleep together every night. They have this whole language of their own—little chirps and tail wags and head bumps. Watching their friendship develop has been one of the most beautiful things I've ever witnessed. It reminds me that sometimes, the best relationships happen when you just let things unfold naturally."
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">— Thomas Anderson, 29, Washington</p>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-6">Lessons Learned and Tips Shared</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    Every pet owner accumulates wisdom over time—things they wish they'd known from the start, mistakes they made and learned from, and insights that only come with experience. These stories are like a collective knowledge base, where pet owners share what they've learned so others can benefit.
                  </p>

                  <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-xl p-6 sm:p-8 mb-8">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">What I Wish I'd Known - Rachel's Advice</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      "I've had pets my whole life, and I've made every mistake in the book. Here's what I wish someone had told me when I started:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                      <li><strong>Start training early, but be patient.</strong> Puppies and kittens learn fast, but they're also easily distracted. Short, frequent training sessions work better than long ones.</li>
                      <li><strong>Regular vet visits aren't optional.</strong> I learned this the hard way when my cat developed a condition that could have been caught earlier. Annual check-ups save money and heartache in the long run.</li>
                      <li><strong>Pet insurance is worth it.</strong> I used to think it was a waste of money until my dog needed emergency surgery that cost $5,000. Insurance covered 80% of it.</li>
                      <li><strong>Your pet's behavior is communication.</strong> When my dog started acting out, I thought he was being 'bad.' Turns out he was in pain from a dental issue. Always rule out medical causes first.</li>
                      <li><strong>Socialization is crucial, but it's never too late.</strong> My rescue dog was fearful of people, but with patience and positive experiences, he's now the friendliest dog at the dog park.</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      The biggest lesson? Trust your instincts. You know your pet better than anyone. If something feels off, it probably is."
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">— Rachel Kim, 40, Massachusetts</p>
                  </div>

                  <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-xl p-6 sm:p-8 mb-8">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">The Power of Routine - Kevin's Story</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      "My cat, Princess, was anxious and destructive. She'd scratch furniture, knock things over, and meow constantly. I tried everything—toys, cat trees, calming sprays. Nothing worked until I realized the problem: I had no routine.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      Cats thrive on predictability. I started feeding her at the same times every day, playing with her for 15 minutes in the morning and evening, and keeping her bedtime routine consistent. Within two weeks, her behavior completely changed. She was calmer, happier, and the destructive behavior stopped.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      The same principle applies to dogs. Regular meal times, consistent walk schedules, and predictable routines help pets feel secure. It seems simple, but it's one of the most powerful tools for managing pet behavior. Sometimes the solution isn't buying more stuff—it's just being consistent."
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">— Kevin Patel, 33, Arizona</p>
                  </div>
                </section>

                <section className="mb-10 bg-green-50 dark:bg-green-900/20 p-6 sm:p-8 rounded-xl">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Your Story Matters Too</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Every pet owner has experiences worth sharing. Maybe you think your story isn't dramatic enough, or that others won't find it interesting. But the truth is, your perspective is unique, and what seems ordinary to you might be exactly what someone else needs to hear. Your challenges, your successes, your everyday moments—they all contribute to this rich tapestry of pet ownership experiences.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Whether you're a first-time pet owner navigating the learning curve, or someone who's shared your life with pets for decades, your story has value. The pet care community is built on these shared experiences, and every story adds to our collective understanding of what it means to care for and love our animal companions.
                  </p>
                </section>
              </div>
              
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <Link href="/community" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline transition-colors min-h-[44px]">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Community
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
