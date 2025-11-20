'use client';

import Link from 'next/link';

interface BreedsSidebarProps {
  category?: 'dogs' | 'cats' | 'birds' | 'exotics' | 'small-mammals';
  currentBreed?: string;
}

export default function BreedsSidebar({ category, currentBreed }: BreedsSidebarProps) {
  const breedLinks = {
    dogs: [
      { name: 'Golden Retriever', href: '/pet-breeds/dogs/golden-retriever' },
      { name: 'Labrador Retriever', href: '/pet-breeds/dogs/labrador-retriever' },
      { name: 'German Shepherd', href: '/pet-breeds/dogs/german-shepherd' },
      { name: 'Beagle', href: '/pet-breeds/dogs/beagle' },
      { name: 'Bulldog', href: '/pet-breeds/dogs/bulldog' },
      { name: 'Poodle', href: '/pet-breeds/dogs/poodle' },
      { name: 'French Bulldog', href: '/pet-breeds/dogs/french-bulldog' },
      { name: 'Yorkshire Terrier', href: '/pet-breeds/dogs/yorkie' },
    ],
    cats: [
      { name: 'Persian', href: '/pet-breeds/cats/persian' },
      { name: 'Siamese', href: '/pet-breeds/cats/siamese' },
      { name: 'Maine Coon', href: '/pet-breeds/cats/maine-coon' },
      { name: 'British Shorthair', href: '/pet-breeds/cats/british-shorthair' },
      { name: 'Ragdoll', href: '/pet-breeds/cats/ragdoll' },
      { name: 'Bengal', href: '/pet-breeds/cats/bengal' },
      { name: 'Scottish Fold', href: '/pet-breeds/cats/scottish-fold' },
      { name: 'Sphynx', href: '/pet-breeds/cats/sphynx' },
    ],
    birds: [
      { name: 'Parrots', href: '/pet-breeds/birds/parrots' },
      { name: 'Canaries', href: '/pet-breeds/birds/canaries' },
      { name: 'Finches', href: '/pet-breeds/birds/finches' },
      { name: 'Cockatiels', href: '/pet-breeds/birds/cockatiels' },
      { name: 'Budgies', href: '/pet-breeds/birds/budgies' },
    ],
    exotics: [
      { name: 'Bearded Dragon', href: '/pet-breeds/exotics/bearded-dragon' },
      { name: 'Ball Python', href: '/pet-breeds/exotics/ball-python' },
      { name: 'Leopard Gecko', href: '/pet-breeds/exotics/leopard-gecko' },
      { name: 'Red-Eared Slider', href: '/pet-breeds/exotics/red-eared-slider' },
    ],
    'small-mammals': [
      { name: 'Rabbit', href: '/pet-breeds/small-mammals/rabbit' },
      { name: 'Guinea Pig', href: '/pet-breeds/small-mammals/guinea-pig' },
      { name: 'Hamster', href: '/pet-breeds/small-mammals/hamster' },
      { name: 'Ferret', href: '/pet-breeds/small-mammals/ferret' },
      { name: 'Rat', href: '/pet-breeds/small-mammals/rat' },
      { name: 'Mouse', href: '/pet-breeds/small-mammals/mouse' },
    ],
  };

  const categoryLinks = [
    { name: 'Dog Breeds', href: '/pet-breeds/dogs', icon: '🐕' },
    { name: 'Cat Breeds', href: '/pet-breeds/cats', icon: '🐈' },
    { name: 'Bird Breeds', href: '/pet-breeds/birds', icon: '🦜' },
    { name: 'Exotic Pets', href: '/pet-breeds/exotics', icon: '🦎' },
    { name: 'Small Mammals', href: '/pet-breeds/small-mammals', icon: '🐹' },
  ];

  return (
    <aside className="w-full lg:w-80 space-y-4 sm:space-y-5">
      {/* Breed Links - Show if on a category or breed page */}
      {category && breedLinks[category] && (
        <div className="p-3 sm:p-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg sm:rounded-xl transition-colors">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
            {category === 'dogs' && 'Dog Breeds'}
            {category === 'cats' && 'Cat Breeds'}
            {category === 'birds' && 'Bird Breeds'}
            {category === 'exotics' && 'Exotic Pets'}
            {category === 'small-mammals' && 'Small Mammals'}
          </h3>
          <ul className="space-y-1.5 sm:space-y-2">
            {breedLinks[category].map((breed) => (
              <li key={breed.href}>
                <Link
                  href={breed.href}
                  className={`text-xs sm:text-sm transition-colors flex items-center ${
                    currentBreed === breed.href
                      ? 'text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {breed.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Category Links */}
      <div className="p-3 sm:p-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg sm:rounded-xl transition-colors">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
          Pet Categories
        </h3>
        <ul className="space-y-1.5 sm:space-y-2">
          {categoryLinks.map((cat) => (
            <li key={cat.href}>
              <Link
                href={cat.href}
                className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
              >
                <span className="mr-2 text-base">{cat.icon}</span>
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Links */}
      <div className="p-3 sm:p-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg sm:rounded-xl transition-colors">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">
          Quick Links
        </h3>
        <ul className="space-y-1.5 sm:space-y-2">
          <li>
            <Link
              href="/pet-care-tips"
              className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
            >
              <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Pet Care Tips
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
            >
              <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Pet Care Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
            >
              <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

