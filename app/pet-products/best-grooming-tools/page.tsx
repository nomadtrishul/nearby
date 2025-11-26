import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PetProductsSidebar from '@/components/PetProductsSidebar';

export const metadata: Metadata = {
  title: 'Best Grooming Tools - Reviews & Buying Guide | Nearby Pet Care',
  description: 'Comprehensive reviews and buying guide for the best pet grooming tools. Find brushes, clippers, nail trimmers, and more for your pet.',
  keywords: ['best grooming tools', 'pet grooming tools', 'dog grooming tools', 'cat grooming tools', 'pet brushes', 'nail clippers', 'grooming supplies'],
  authors: [{ name: 'Nearby Pet Care Team', url: 'https://nearbypetcare.com' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  openGraph: {
    title: 'Best Grooming Tools - Reviews & Buying Guide | Nearby Pet Care',
    description: 'Comprehensive reviews and buying guide for the best pet grooming tools. Find brushes, clippers, and more.',
    type: 'article',
    url: 'https://nearbypetcare.com/pet-products/best-grooming-tools',
    siteName: 'Nearby Pet Care',
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Best Grooming Tools Reviews & Buying Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Grooming Tools - Reviews & Buying Guide | Nearby Pet Care',
    description: 'Comprehensive reviews and buying guide for the best pet grooming tools.',
    images: ['https://nearbypetcare.com/og-image.png'],
  },
  alternates: { canonical: 'https://nearbypetcare.com/pet-products/best-grooming-tools' },
};

export default function BestGroomingToolsPage() {
  const currentDate = new Date().toISOString();

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Grooming Tools - Reviews & Buying Guide',
    description: 'Comprehensive reviews and buying guide for the best pet grooming tools. Find brushes, clippers, nail trimmers, and more.',
    url: 'https://nearbypetcare.com/pet-products/best-grooming-tools',
    datePublished: '2024-01-01T00:00:00+00:00',
    dateModified: currentDate,
    author: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      url: 'https://nearbypetcare.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nearbypetcare.com/logo.png',
      },
    },
  };

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbypetcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Pet Products', item: 'https://nearbypetcare.com/pet-products' },
      { '@type': 'ListItem', position: 3, name: 'Best Grooming Tools', item: 'https://nearbypetcare.com/pet-products/best-grooming-tools' },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Pet Products', href: '/pet-products' },
            { name: 'Best Grooming Tools', href: '/pet-products/best-grooming-tools' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">✂️</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Product Reviews</span>
            </div>
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">✂️</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Best Grooming Tools: Reviews & Buying Guide
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              The right grooming tools make all the difference. Discover which brushes, clippers, and accessories will keep your pet looking their best while making grooming a pleasant experience for both of you.
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
              Grooming your pet isn't just about keeping them looking good—though a well-groomed pet is certainly a beautiful sight. Regular grooming is essential for your pet's health, comfort, and wellbeing. It helps prevent mats and tangles, reduces shedding, keeps skin healthy, and gives you a chance to check for any health issues like lumps, bumps, or skin problems.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              But here's the thing: grooming can be a struggle if you don't have the right tools. The wrong brush can pull and hurt, making your pet dread grooming sessions. Cheap clippers can pull hair instead of cutting it. Poor-quality nail trimmers can crush nails instead of cutting them cleanly. Investing in quality grooming tools makes the entire process easier, faster, and more pleasant for everyone involved.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Essential Grooming Tools Every Pet Owner Needs</h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Building a good grooming kit doesn't mean buying everything at once. Start with the essentials for your pet's specific coat type and needs, then add specialized tools as needed.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Brushes and Combs</h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Brushing is the foundation of good grooming. The right brush removes loose hair, prevents mats, distributes natural oils, and stimulates the skin. But not all brushes are created equal, and different coat types need different tools.
            </p>

            <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">Slicker Brushes</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Slicker brushes have fine, short wires close together on a flat surface. They're excellent for removing mats, tangles, and loose hair from medium to long coats. They work well on dogs and cats with thick, curly, or wavy fur. Look for brushes with flexible pins that won't scratch the skin, and consider ones with protective tips for sensitive pets.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>Best for:</strong> Dogs and cats with medium to long coats, curly or wavy hair, or pets prone to matting. Great for daily brushing to prevent tangles.
            </p>

            <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">Bristle Brushes</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Bristle brushes use natural or synthetic bristles to smooth and polish the coat. They're gentle and work well for short-haired pets or as a finishing tool after using other brushes. Natural bristle brushes are often preferred because they distribute oils better and create less static.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>Best for:</strong> Short-haired dogs and cats, finishing touches after brushing, or pets with sensitive skin who need gentle grooming.
            </p>

            <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">Undercoat Rakes</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Undercoat rakes have long, widely spaced teeth designed to reach through the topcoat and remove the dense undercoat. They're essential for double-coated breeds like Huskies, Golden Retrievers, and German Shepherds, especially during shedding season. These tools can dramatically reduce shedding and prevent the undercoat from becoming matted.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>Best for:</strong> Double-coated breeds, heavy shedders, or during seasonal coat changes. Use carefully to avoid over-brushing and irritating the skin.
            </p>

            <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">De-shedding Tools</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              De-shedding tools like the Furminator use a special blade design to remove loose undercoat hair. They're incredibly effective at reducing shedding, but they should be used carefully and not too frequently, as they can damage the coat if overused. Follow the manufacturer's guidelines and don't use them more than once or twice a week.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>Best for:</strong> Heavy shedders, double-coated breeds, or when you need to dramatically reduce loose hair. Use sparingly to avoid coat damage.
            </p>

            <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">Combs</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Metal combs with both wide and fine teeth are versatile tools. Use the wide side first to work through tangles, then the fine side to catch smaller mats and finish the coat. Combs are especially useful for long-haired cats and dogs, and they're great for checking that you've removed all tangles after brushing.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>Best for:</strong> Long-haired pets, finishing after brushing, or working through stubborn tangles. Essential for show grooming.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Nail Clippers and Grinders</h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Keeping nails trimmed is crucial for your pet's comfort and health. Overgrown nails can cause pain, affect gait, and even lead to joint problems. The right tool makes nail trimming safe and stress-free.
            </p>

            <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">Guillotine-Style Clippers</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These clippers have a hole where you insert the nail and a blade that cuts when you squeeze the handles. They're popular because they're easy to use and give a clean cut. However, they can be harder to use on very thick nails, and the blade needs to be sharp to work effectively.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>Best for:</strong> Small to medium dogs and cats with average nail thickness. Easy to use for beginners.
            </p>

            <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">Scissor-Style Clippers</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These work like scissors with curved or straight blades. They give you more control and can handle thicker nails better than guillotine clippers. They're often preferred for larger dogs or pets with very thick nails.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>Best for:</strong> Large dogs, thick nails, or when you need more precision and control.
            </p>

            <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">Nail Grinders</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Grinders use a rotating file to gradually shorten nails. They're great for pets who are afraid of clippers, and they create a smooth edge that's less likely to snag. However, they can be noisy and some pets don't like the vibration. They also take longer than clipping.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>Best for:</strong> Nervous pets, black nails where the quick is hard to see, or when you want a very smooth finish. Great for maintenance between clippings.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Pet Clippers and Scissors</h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you're doing more than basic grooming, you'll need clippers for trimming and scissors for detail work. Quality matters here—cheap clippers can pull hair, overheat, and make grooming miserable for your pet.
            </p>

            <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">Electric Clippers</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Good clippers should be quiet, stay cool during use, and have sharp blades that cut cleanly without pulling. Cordless models offer more flexibility, but corded models often have more power. Look for clippers with multiple blade attachments for different lengths, and make sure replacement blades are readily available.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>Best for:</strong> Regular trimming, full-body cuts, or maintaining specific coat lengths. Essential for breeds that need regular clipping.
            </p>

            <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">Grooming Scissors</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Straight and curved scissors are essential for detail work around the face, feet, and tail. Quality grooming scissors are sharp, well-balanced, and comfortable to hold. Curved scissors are especially useful for shaping around the face and legs.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>Best for:</strong> Detail work, face trimming, finishing touches, or when you need precision that clippers can't provide.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Bathing and Cleaning Supplies</h3>
            
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">Shampoo and Conditioner</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Never use human shampoo on pets—their skin has a different pH balance. Choose a shampoo formulated specifically for dogs or cats, and consider your pet's specific needs. There are formulas for sensitive skin, dry skin, puppies, white coats, and more. Conditioner helps keep the coat soft and manageable, especially for long-haired pets.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>Best for:</strong> Regular bathing, addressing specific skin or coat issues, or maintaining a healthy, shiny coat.
            </p>

            <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">Ear Cleaning Solutions</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Regular ear cleaning prevents infections and keeps ears healthy. Use a solution specifically designed for pets, and never use cotton swabs deep in the ear canal. Look for solutions that help dissolve wax and have a gentle, pH-balanced formula.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>Best for:</strong> Regular ear maintenance, preventing infections, or pets prone to ear problems. Essential for floppy-eared breeds.
            </p>

            <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">Toothbrushes and Toothpaste</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Dental health is crucial for pets, and regular brushing is the best way to prevent dental disease. Use a toothbrush designed for pets (they're smaller and softer) and pet-specific toothpaste—human toothpaste can be toxic to pets. Start slowly and make it a positive experience.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>Best for:</strong> Maintaining dental health, preventing tartar buildup, and keeping breath fresh. Essential for all pets, especially as they age.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Choosing Tools Based on Your Pet's Coat Type</h2>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Short-Haired Pets</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Short-haired dogs and cats need less intensive grooming, but they still benefit from regular brushing. A bristle brush or rubber curry brush works well for removing loose hair and distributing oils. A de-shedding tool can help during heavy shedding periods.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Long-Haired Pets</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Long-haired pets need daily brushing to prevent mats and tangles. Start with a slicker brush to work through tangles, then use a comb to ensure everything is smooth. An undercoat rake may be needed for double-coated long-haired breeds. Regular trimming with scissors or clippers helps keep the coat manageable.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Curly or Wavy Coats</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Curly coats like those on Poodles or Bichons need regular brushing to prevent mats, which can form close to the skin. A slicker brush and comb are essential. These breeds typically need regular professional grooming or clipping at home.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Double-Coated Breeds</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Breeds with thick undercoats need special attention, especially during shedding season. An undercoat rake and de-shedding tool are essential. Be careful not to over-brush, which can damage the coat, but regular brushing prevents the undercoat from becoming impacted.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Tips for Successful Grooming</h2>

            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-3">
              <li><strong>Start young:</strong> Get pets used to grooming from an early age. Make it a positive experience with treats and praise.</li>
              <li><strong>Be gentle:</strong> Use gentle pressure and stop if your pet seems uncomfortable. Never pull through mats—work them out carefully or cut them out.</li>
              <li><strong>Check tools regularly:</strong> Dull blades and worn brushes don't work well and can hurt your pet. Replace or sharpen tools as needed.</li>
              <li><strong>Take breaks:</strong> Don't try to do everything at once. Break grooming into shorter sessions, especially for pets who aren't used to it.</li>
              <li><strong>Watch for skin issues:</strong> Grooming is a great time to check for lumps, bumps, rashes, or other skin problems. Report anything unusual to your vet.</li>
              <li><strong>Keep tools clean:</strong> Clean brushes and combs regularly to prevent spreading skin issues or parasites.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Investing in Quality</h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Quality grooming tools cost more upfront, but they're worth the investment. They work better, last longer, and make grooming easier and more pleasant for both you and your pet. Cheap tools can pull hair, hurt your pet, break easily, and make grooming a chore instead of a bonding experience.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Start with the essentials for your pet's coat type, and add specialized tools as needed. With the right tools and a bit of practice, grooming can become a pleasant routine that keeps your pet healthy, comfortable, and looking their absolute best.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-products" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
              ← Back to Pet Products
            </Link>
          </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <PetProductsSidebar />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
