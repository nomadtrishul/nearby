import Breadcrumb from './Breadcrumb';
import Image from 'next/image';

interface DogBreedHeroProps {
  breedName: string;
  description: string;
  emoji?: string;
  slug?: string;
  imageUrl?: string;
}

export default function DogBreedHero({ breedName, description, emoji = '🐕', slug, imageUrl }: DogBreedHeroProps) {
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
          { name: 'Dogs', href: '/pet-breeds/dogs' },
          { name: breedName, href: `/pet-breeds/dogs/${breedSlug}` }
        ]} />

        <div className="max-w-6xl mx-auto mt-8 sm:mt-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Image Section */}
            {imageUrl ? (
              <div className="w-full md:w-1/2 lg:w-2/5">
                <div className="relative aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 dark:border-gray-700/50">
                  <Image
                    src={imageUrl}
                    alt={`${breedName} dog breed`}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            ) : (
              <div className="w-full md:w-1/2 lg:w-2/5">
                <div className="text-8xl sm:text-9xl mb-6 animate-pulse text-center">{emoji}</div>
              </div>
            )}

            {/* Text Content */}
            <div className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
                <span className="text-2xl">{emoji}</span>
                <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Dog Breed Guide</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {breedName}
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

