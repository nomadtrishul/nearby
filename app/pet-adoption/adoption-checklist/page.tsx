import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AdoptionSidebar from '@/components/AdoptionSidebar';
import { 
  generateSEOMetadata,
  generateBlogPostingStructuredData,
  generateWebPageStructuredData,
  generateBreadcrumbStructuredData,
  generateHowToStructuredData,
  jsonLdScriptProps
} from '@/lib/seo-utils';
import { getBaseUrl } from '@/lib/site-config';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Pet Adoption Checklist Guide',
  description: 'Complete pet adoption checklist covering lifestyle assessment, financial planning, home preparation, and adoption day essentials. Ensure you\'re fully prepared to adopt a dog or cat with this comprehensive guide.',
  keywords: ['pet adoption checklist', 'adoption requirements', 'pet adoption preparation', 'adoption day checklist', 'pre-adoption checklist', 'pet adoption guide', 'adoption preparation', 'adopting a pet checklist'],
  pathname: '/pet-adoption/adoption-checklist',
  type: 'article',
  publishedTime: '2024-01-01T00:00:00Z',
  modifiedTime: new Date().toISOString(),
  author: 'Nearby Pet Care Team',
  section: 'Pet Adoption',
  tags: ['pet adoption', 'adoption checklist', 'pet preparation'],
  image: '/og-image.png',
  locale: 'en-US',
  alternates: {
    languages: {
      'en-US': '/pet-adoption/adoption-checklist',
      'en-GB': '/pet-adoption/adoption-checklist',
      'en-CA': '/pet-adoption/adoption-checklist',
      'en-AU': '/pet-adoption/adoption-checklist',
    },
  },
});

export default function AdoptionChecklistPage() {
  const baseUrl = getBaseUrl();
  const currentDate = new Date().toISOString();
  const publishedDate = '2024-01-01T00:00:00Z';

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Pet Adoption', url: '/pet-adoption' },
    { name: 'Adoption Checklist', url: '/pet-adoption/adoption-checklist' },
  ];

  // Generate structured data using centralized utilities
  const blogPostingStructuredData = generateBlogPostingStructuredData({
    headline: 'Pet Adoption Checklist: Complete Pre-Adoption Guide',
    description: 'Complete pet adoption checklist covering lifestyle assessment, financial planning, home preparation, and adoption day essentials.',
    url: '/pet-adoption/adoption-checklist',
    datePublished: publishedDate,
    dateModified: currentDate,
    author: 'Nearby Pet Care Team',
  });

  const howToStructuredData = generateHowToStructuredData({
    name: 'How to Prepare for Pet Adoption',
    description: 'Step-by-step checklist for preparing to adopt a pet, including lifestyle assessment, financial planning, and adoption day preparation.',
    datePublished: publishedDate,
    dateModified: currentDate,
    author: 'Nearby Pet Care Team',
    totalTime: 'PT1W',
    steps: [
      {
        name: 'Assess Your Lifestyle',
        text: 'Evaluate your schedule, living space, activity level, and research breeds or species that match your lifestyle. Consider your work hours, travel frequency, and daily routine.',
      },
      {
        name: 'Plan Financially',
        text: 'Budget for initial costs (adoption fees, supplies), monthly expenses (food, care), and unexpected costs (emergency vet visits). Consider pet insurance or an emergency fund.',
      },
      {
        name: 'Prepare Your Home',
        text: 'Pet-proof your home, gather essential supplies, set up a quiet space, and ensure all family members are on board with the adoption decision.',
      },
      {
        name: 'Find a Veterinarian',
        text: 'Research and select a local veterinarian before adoption. Schedule a meet-and-greet or initial wellness visit to establish a relationship.',
      },
      {
        name: 'Prepare for Adoption Day',
        text: 'Gather required documentation, prepare transportation supplies, bring comfort items, and prepare questions to ask the shelter staff about the pet.',
      },
    ],
  });

  const webPageStructuredData = generateWebPageStructuredData({
    name: 'Pet Adoption Checklist',
    description: 'Complete checklist for pet adoption',
    url: '/pet-adoption/adoption-checklist',
    breadcrumbs,
  });

  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24" role="main" aria-label="Pet Adoption Checklist Guide">
      {/* Structured Data Scripts - Using centralized utilities */}
      <script {...jsonLdScriptProps(blogPostingStructuredData)} />
      <script {...jsonLdScriptProps(howToStructuredData)} />
      <script {...jsonLdScriptProps(webPageStructuredData)} />
      <script {...jsonLdScriptProps(breadcrumbStructuredData)} />
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden" aria-label="Hero Section">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Pet Adoption', href: '/pet-adoption' },
            { name: 'Adoption Checklist', href: '/pet-adoption/adoption-checklist' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">📋</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Adoption Guide</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">📋</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Adoption Checklist
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Your complete guide to preparing for pet adoption. Ensure you're ready for this rewarding journey with our comprehensive checklist covering everything from lifestyle assessment to adoption day essentials.
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Pre-Adoption Prep</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📝</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Adoption Day</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏠</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">First Days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8" itemScope itemType="https://schema.org/Article">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Bringing a new pet into your life is exciting, but it's also a big commitment. Whether you're adopting your first furry friend or adding another member to your pack, taking time to prepare properly makes all the difference. This checklist will help you navigate the adoption process with confidence, ensuring you're ready for both the joys and responsibilities ahead.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-5">Before You Start Looking: The Foundation</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Before you fall in love with a photo online or meet that perfect pup at the shelter, there's some important groundwork to cover. These steps might not be as fun as browsing adorable pet profiles, but they'll save you stress later and help ensure you find the right match.
            </p>

            <div className="bg-blue-50 dark:bg-gray-800/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Lifestyle Assessment</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-3">
                <li><strong>Be honest about your schedule:</strong> Do you work long hours? Travel frequently? A high-energy dog might not be the best fit if you're rarely home, while a more independent cat could thrive. Consider your daily routine and how a pet will fit into it.</li>
                <li><strong>Think about your living space:</strong> A Great Dane in a studio apartment might work, but it requires creativity and commitment. Smaller spaces often suit cats, small dogs, or older pets who prefer quieter environments.</li>
                <li><strong>Consider your activity level:</strong> If you love hiking and running, an active dog could be your perfect companion. If you prefer quiet evenings at home, a senior pet or a more laid-back breed might be ideal.</li>
                <li><strong>Research breeds and species:</strong> Don't just go by looks. Learn about breed characteristics, energy levels, grooming needs, and common health issues. Mixed breeds can be wonderful, but understanding their likely traits helps set expectations.</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-gray-800/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Family and Household Considerations</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-3">
                <li><strong>Get everyone on board:</strong> This isn't just about you. Have a family meeting to discuss responsibilities, expectations, and who will handle daily care tasks. Even young children can help with age-appropriate pet care.</li>
                <li><strong>Consider existing pets:</strong> If you already have pets, think about how a new addition will affect them. Some pets are social butterflies, while others prefer being the only pet. Consider doing a meet-and-greet if possible.</li>
                <li><strong>Check housing policies:</strong> Review your lease or HOA rules carefully. Some places have breed restrictions, weight limits, or require pet deposits. Don't assume—verify everything in writing before you adopt.</li>
                <li><strong>Think about allergies:</strong> If anyone in your household has allergies, spend time with similar pets before committing. Some breeds are more hypoallergenic than others, but no pet is completely allergen-free.</li>
              </ul>
            </div>

            <div className="bg-yellow-50 dark:bg-gray-800/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Financial Planning</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Pets bring immeasurable joy, but they also come with real costs. Being realistic about expenses prevents difficult situations down the road.
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-3">
                <li><strong>Initial costs:</strong> Adoption fees typically range from $50 to $500, depending on the organization and whether the pet is already spayed/neutered and vaccinated. Budget for supplies like food bowls, beds, toys, crates, and initial vet visits.</li>
                <li><strong>Monthly expenses:</strong> Food, treats, litter (for cats), grooming supplies, and routine veterinary care. For a medium-sized dog, expect $100-200 per month; for a cat, $50-100 is more typical.</li>
                <li><strong>Unexpected costs:</strong> Emergency vet visits, unexpected illnesses, or accidents can cost hundreds or thousands. Consider pet insurance or setting up an emergency fund specifically for your pet.</li>
                <li><strong>Long-term planning:</strong> As pets age, medical costs typically increase. Factor in potential expenses for senior pet care, dental cleanings, and chronic conditions.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-5">Pre-Adoption Preparation</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Once you've decided you're ready, it's time to get your ducks in a row. Having everything prepared before adoption day makes the transition smoother for both you and your new pet.
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-3">
              <li><strong>Find a veterinarian:</strong> Don't wait until there's an emergency. Research local vets, read reviews, and schedule a meet-and-greet or initial wellness visit. Ask about their experience with rescue pets, as they may have unique needs.</li>
              <li><strong>Pet-proof your home:</strong> This goes beyond just hiding electrical cords. Remove toxic plants, secure trash cans, put away small objects that could be swallowed, and ensure windows and doors are secure. Create a safe space where your new pet can retreat when overwhelmed.</li>
              <li><strong>Gather essential supplies:</strong> Have food, water bowls, a bed or crate, appropriate toys, grooming tools, and identification tags ready before your pet arrives. If you're adopting a cat, you'll need a litter box and litter. For dogs, you'll need a leash, collar, and possibly a harness.</li>
              <li><strong>Set up a quiet space:</strong> Designate a room or area where your new pet can decompress. This should be away from high-traffic areas, with a bed, water, and some toys. This is especially important for rescue pets who may be overwhelmed initially.</li>
              <li><strong>Research training resources:</strong> Even if you're adopting an adult pet, some training or retraining may be needed. Look into local trainers, online resources, or training classes. Positive reinforcement methods work best for building trust.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-5">Adoption Day: What to Bring and Ask</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Adoption day is exciting, but it can also be overwhelming. Being prepared helps you make the most of this important day and ensures you have everything you need for a smooth transition home.
            </p>

            <div className="bg-purple-50 dark:bg-gray-800/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What to Bring</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-3">
                <li><strong>Required documentation:</strong> Most shelters need proof of address, ID, and sometimes landlord approval. Call ahead to confirm what's needed—requirements vary by organization.</li>
                <li><strong>Transportation supplies:</strong> A secure carrier for cats or small dogs, or a properly fitted harness and leash for larger dogs. Never transport a new pet loose in your car—it's unsafe and stressful for them.</li>
                <li><strong>Comfort items:</strong> Bring a blanket or towel that you can leave with the pet before adoption day, then bring it home with their scent. This familiar smell can be incredibly comforting during the transition.</li>
                <li><strong>Payment method:</strong> Adoption fees are typically required on adoption day. Most places accept cash, credit, or debit cards, but check ahead of time.</li>
              </ul>
            </div>

            <div className="bg-orange-50 dark:bg-gray-800/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Questions to Ask</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Don't be shy about asking questions. The shelter staff wants successful adoptions and should be happy to share information about the pet's history, personality, and needs.
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-3">
                <li><strong>Medical history:</strong> What vaccinations have they received? Are they spayed or neutered? Any known health issues or medications? When was their last vet visit?</li>
                <li><strong>Behavior and personality:</strong> How do they interact with people? Other pets? What's their energy level? Do they have any fears or triggers? What do they enjoy doing?</li>
                <li><strong>History and background:</strong> Where did they come from? How long have they been at the shelter? Do they know anything about their previous home? Understanding their past helps you understand their needs.</li>
                <li><strong>Daily care:</strong> What food are they currently eating? What's their feeding schedule? Any special dietary needs? What's their exercise routine?</li>
                <li><strong>Training and behavior:</strong> Are they house-trained? Do they know basic commands? Any behavioral concerns? What training methods have been used?</li>
                <li><strong>Post-adoption support:</strong> Does the shelter offer support after adoption? Can you contact them with questions? Do they have resources for training or behavioral issues?</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-5">The First Few Days: Setting Up for Success</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Those first days home are crucial. Your new pet is adjusting to a completely new environment, new people, and new routines. Setting the right tone now makes a huge difference in how smoothly the transition goes.
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-3">
              <li><strong>Schedule a veterinary checkup:</strong> Even if the shelter provided medical records, schedule a wellness visit within the first week. This establishes your relationship with your vet and ensures your pet is healthy.</li>
              <li><strong>Keep things calm and quiet:</strong> Resist the urge to have a big welcome party. Limit visitors, keep noise levels down, and give your pet time to explore at their own pace. This is especially important for rescue pets who may be anxious.</li>
              <li><strong>Maintain routines:</strong> Feed at the same times, take walks at consistent times (for dogs), and establish a bedtime routine. Predictability helps pets feel secure.</li>
              <li><strong>Be patient with house-training:</strong> Even if a pet was house-trained before, accidents can happen in a new environment. Be patient, consistent, and use positive reinforcement when they get it right.</li>
              <li><strong>Watch for signs of stress:</strong> Hiding, excessive panting, loss of appetite, or unusual behavior can indicate stress. Give them space and time, but don't hesitate to contact your vet if you're concerned.</li>
              <li><strong>Start training early:</strong> Begin basic training and establish boundaries from day one, but keep sessions short and positive. This helps build confidence and establishes your relationship.</li>
            </ul>

            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 mt-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Remember: Every Pet is Different</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                While this checklist covers the essentials, remember that every pet is unique. Some will settle in immediately, while others need weeks or even months to fully adjust. Trust your instincts, be patient, and don't hesitate to reach out for help from your veterinarian, the shelter, or a professional trainer if you need support. The most important thing you can bring to adoption day is an open heart and realistic expectations.
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-adoption" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded" aria-label="Back to Pet Adoption page">← Back to Pet Adoption</Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <AdoptionSidebar />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

