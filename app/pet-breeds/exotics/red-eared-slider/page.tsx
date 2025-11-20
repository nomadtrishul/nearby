import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Red-Eared Slider Care Guide | Nearby Pet Care',
  description: 'Complete guide to keeping red-eared slider turtles as pets. Learn about their care, habitat, diet, and health considerations.',
  keywords: ['red-eared slider', 'turtle pets', 'red-eared slider care', 'turtle habitat', 'turtle diet'],
  openGraph: { title: 'Red-Eared Slider Care Guide | Nearby Pet Care', description: 'Complete guide to keeping red-eared slider turtles as pets.', type: 'article', url: 'https://nearbypetcare.com/pet-breeds/exotics/red-eared-slider' },
  alternates: { canonical: 'https://nearbypetcare.com/pet-breeds/exotics/red-eared-slider' },
};

export default function RedEaredSliderPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Pet Breeds', href: '/pet-breeds' },
            { name: 'Exotic Pets', href: '/pet-breeds/exotics' },
            { name: 'Red-Eared Slider', href: '/pet-breeds/exotics/red-eared-slider' }
          ]} />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Red-Eared Slider</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Red-eared sliders are popular aquatic turtles known for the distinctive red stripe behind each eye. They require specialized care and large aquatic habitats, making them a long-term commitment.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Characteristics</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Size: 7-12 inches (shell length)</li>
              <li>Lifespan: 20-30 years (can live up to 40+ years)</li>
              <li>Temperament: Active, curious, can be shy</li>
              <li>Activity Level: Moderate to high (diurnal - active during the day)</li>
              <li>Grooming: Minimal (occasional shell cleaning)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Habitat Requirements</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Red-eared sliders require a large aquatic habitat (minimum 75-100 gallons for adults) with both water and a dry basking area. They need a basking platform with a heat lamp (90-95°F), UVB lighting (essential for shell health), water heater (75-80°F), and a powerful filtration system. The water should be deep enough for swimming.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Diet</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Red-eared sliders are omnivores. Juveniles require more protein (commercial turtle pellets, insects, small fish) while adults need more vegetables (leafy greens, vegetables). They require calcium supplements. Food should be offered in the water.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Health Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Red-eared sliders can be prone to shell rot, respiratory infections, metabolic bone disease (from lack of UVB), and obesity. Proper habitat setup, water quality maintenance, diet, and regular veterinary check-ups with a reptile specialist are essential for their health.</p>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300"><strong>Important:</strong> Red-eared sliders can carry Salmonella. Always wash hands after handling and never release pet turtles into the wild.</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/exotics" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">← Back to Exotic Pets</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

