import Breadcrumb from './Breadcrumb';

interface BreedHeroProps {
  breedName: string;
  description: string;
  emoji?: string;
  slug?: string;
  category: 'dogs' | 'cats' | 'birds' | 'small-mammals' | 'exotics';
  categoryName: string;
  categoryHref: string;
}

export default function BreedHero({ 
  breedName, 
  description, 
  emoji = '🐕', 
  slug,
  category,
  categoryName,
  categoryHref
}: BreedHeroProps) {
  const breedSlug = slug || breedName.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Pet Breeds', href: '/pet-breeds' },
          { name: categoryName, href: categoryHref },
          { name: breedName, href: `/pet-breeds/${category}/${breedSlug}` }
        ]} />
        
        <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
            <span className="text-2xl">{emoji}</span>
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">{categoryName} Guide</span>
          </div>
          
          {/* Icon */}
          <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">{emoji}</div>
          
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {breedName}
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

