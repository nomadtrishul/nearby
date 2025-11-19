import { allServiceCategories } from '@/lib/servicesData';
import ServiceCategory from './ServiceCategory';

interface ServiceListProps {
  cityName?: string;
  defaultExpanded?: boolean;
}

export default function ServiceList({ cityName, defaultExpanded = false }: ServiceListProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">
            {cityName ? `Pet Care Services in ${cityName}` : 'All Pet Care Services'}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors">
            Explore our comprehensive range of pet care services. Click on any category to view available services.
          </p>
        </div>
        
        <div className="space-y-4 sm:space-y-6">
          {allServiceCategories.map((category) => (
            <ServiceCategory
              key={category.id}
              category={category}
              defaultExpanded={defaultExpanded}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

