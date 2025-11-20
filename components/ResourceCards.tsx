import Link from 'next/link';

interface ResourceCard {
  name: string;
  href: string;
  icon: string;
  desc: string;
}

interface ResourceCardsProps {
  resources?: ResourceCard[];
}

const defaultResources: ResourceCard[] = [
  { name: 'Pet Health', href: '/pet-health', icon: '🩺', desc: 'Health & Wellness' },
  { name: 'Pet Nutrition', href: '/pet-nutrition', icon: '🍽️', desc: 'Diet & Feeding' },
  { name: 'Pet Grooming', href: '/pet-grooming', icon: '✂️', desc: 'Grooming & Hygiene' },
  { name: 'Pet Training', href: '/pet-training', icon: '🎓', desc: 'Training & Behavior' },
  { name: 'Pet Safety', href: '/pet-safety', icon: '🛡️', desc: 'Safety & Travel' },
  { name: 'Pet Products', href: '/pet-products', icon: '🛍️', desc: 'Product Reviews' },
  { name: 'Pet Breeds', href: '/pet-breeds', icon: '🐾', desc: 'Breed Guides' },
  { name: 'Puppies & Kittens', href: '/puppies-kittens', icon: '👶', desc: 'Young Pet Care' },
  { name: 'Senior Pets', href: '/senior-pets', icon: '👴', desc: 'Senior Care' },
  { name: 'Pet Adoption', href: '/pet-adoption', icon: '❤️', desc: 'Adoption Guide' },
  { name: 'Pet Care Tips', href: '/pet-care-tips', icon: '💡', desc: 'Tips & Advice' },
  { name: 'Tools', href: '/tools', icon: '🛠️', desc: 'Pet Care Tools' },
  { name: 'Buying Guides', href: '/buying-guides', icon: '📚', desc: 'Product Guides' },
  { name: 'Comparisons', href: '/comparisons', icon: '⚖️', desc: 'Product Comparisons' },
  { name: 'Community', href: '/community', icon: '👥', desc: 'Pet Community' },
];

export default function ResourceCards({ resources = defaultResources }: ResourceCardsProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
      {resources.map((resource, index) => (
        <div
          key={index}
          className="relative p-[1px] rounded-xl"
          style={{
            background: 'linear-gradient(to right, #ec4899, #a855f7)',
          }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-[8px] h-full w-full overflow-hidden">
            <Link
              href={resource.href}
              className="group flex flex-col items-center p-4 sm:p-5 transition-all duration-300 text-center h-full w-full"
            >
              {/* Icon - Top */}
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform">
                {resource.icon}
              </div>
              
              {/* Heading - Below Icon */}
              <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {resource.name}
              </h3>
              
              {/* Description - Below Heading */}
              <p className="text-xs text-gray-600 dark:text-gray-400 transition-colors">
                {resource.desc}
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

