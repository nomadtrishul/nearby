import type { Metadata } from 'next';
import Link from 'next/link';
import BreedHero from '@/components/BreedHero';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Persian Cat Breed Guide',
  description: 'Complete guide to Persian cats. Learn about their characteristics, temperament, grooming needs, and care requirements.',
  keywords: ['Persian cat', 'Persian breed', 'Persian cat care', 'Persian cat temperament', 'long-haired cat'],
  pathname: '/pet-breeds/cats/persian',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Persian Cat Breed Guide',
    type: 'image/png',
  }],
});

export default function PersianCatPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      <BreedHero
        breedName="Persian"
        description="Persian cats are known for their luxurious long coats, sweet personalities, and calm demeanor. They are one of the most popular cat breeds and make excellent indoor companions."
        emoji="🐈"
        slug="persian"
        category="cats"
        categoryName="Cats"
        categoryHref="/pet-breeds/cats"
      />
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Characteristics
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The Persian cat is one of the oldest, most recognizable, and most influential cat breeds in the world. Its identity is defined not by speed or athleticism, but by refinement, calm presence, and visual luxury. Over centuries, the Persian has been selectively bred for its distinctive appearance, resulting in a breed that prioritizes serenity, beauty, and companionship above all else.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Persian cats are medium to large in size, typically weighing between seven and twelve pounds, though their true mass is often concealed beneath a voluminous coat. Their bodies are compact, low to the ground, and heavily boned, giving them a solid and substantial feel when lifted. Short legs and a broad chest contribute to their grounded posture and relaxed movement.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The head is round and broad with full cheeks, a short muzzle, and a pronounced stop between the eyes. This flat facial structure, known as brachycephaly, is a defining feature of the modern Persian. Large, round eyes dominate the face and convey a gentle, open expression. Eye color varies depending on coat color and can include copper, blue, green, or odd-eyed combinations.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The coat is the Persian’s most iconic feature. Long, dense, and silky, it flows over the body and forms a dramatic ruff around the neck. The undercoat is thick and soft, while the outer coat provides length and texture. Persian cats appear in an extraordinary range of colors and patterns, including solid, tabby, bicolor, calico, smoke, shaded, and colorpoint varieties.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Persians mature slowly and often maintain a youthful softness in both appearance and behavior well into adulthood. With attentive care, they typically live between ten and seventeen years, though longevity is closely tied to grooming consistency, nutrition, and veterinary oversight.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Care Requirements
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Owning a Persian cat is a commitment to daily, hands-on care. This is not a breed suited for owners seeking minimal maintenance. The Persian thrives in environments where routine, patience, and attention to detail are part of daily life. In return, it offers a uniquely calm and emotionally soothing presence.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Daily grooming is non-negotiable. The Persian’s long coat mats easily if neglected, particularly around the neck, under the arms, and along the belly. Brushing removes loose hair, prevents painful tangles, and keeps the coat clean and comfortable against the skin. Grooming sessions also allow owners to monitor skin health and detect issues early.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Long-hair cat brushes, detangling combs */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Regular bathing is an essential part of Persian care. Many experienced owners bathe their Persians every four to six weeks to remove oils, reduce matting, and preserve coat texture. When introduced gradually and handled calmly, most Persians tolerate bathing well. Consistency is key, as irregular grooming routines increase stress and resistance.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Cat-safe shampoos, grooming kits */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Facial care is another daily responsibility. Due to the flat facial structure, tear drainage is often inefficient, leading to moisture accumulation around the eyes. Daily eye cleaning helps prevent staining, irritation, and infection. This simple routine significantly improves comfort and long-term eye health.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Eye cleaning wipes, facial care products */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Persians have low to moderate activity needs. They are not climbers or high-energy players and prefer gentle interaction over vigorous play. Short, calm play sessions help maintain joint mobility and prevent weight gain, but they do not require extensive exercise.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nutrition must be carefully managed. A high-quality, balanced diet supports skin health, coat quality, and overall wellbeing. Because Persians are relatively sedentary, portion control is essential to prevent obesity, which can exacerbate respiratory and joint issues.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Premium cat food, portion-control feeders */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Persians are strictly indoor cats. They are poorly equipped for outdoor environments due to coat length, facial structure, and low defensive instincts. A calm, clean, temperature-controlled indoor space allows them to remain healthy and stress-free.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Grooming
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Grooming is the defining responsibility of Persian cat ownership and should be approached as a daily wellness practice rather than a cosmetic task. Brushing should be thorough and gentle, working from the skin outward to prevent hidden mats from forming beneath the surface coat.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Neglected mats can tighten against the skin, causing pain, restricting movement, and leading to skin infections. Preventive grooming is far more humane and effective than attempting to remove severe matting later. Professional grooming may be necessary for owners unable to maintain a consistent routine.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nail trimming, ear cleaning, and dental hygiene should be integrated into regular care. Because Persians are tolerant and calm, they often accept grooming procedures better than more reactive breeds when routines are established early.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Nail trimmers, dental care products */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Grooming sessions also strengthen the bond between cat and owner. Many Persians come to view grooming as a comforting ritual, associating it with attention, warmth, and security.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Temperament and Behavior
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The Persian temperament is gentle, quiet, and emotionally stable. These cats are not demanding, destructive, or overly vocal. They prefer peaceful environments and predictable routines, making them ideal companions for individuals or families seeking a low-noise household.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Persians form deep attachments to their owners but express affection subtly. Rather than following constantly or demanding attention, they prefer to remain nearby, sharing space and offering quiet companionship. They enjoy being petted and held, but always on their own terms.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These cats are sensitive to environmental stress. Loud noises, frequent changes, or chaotic households can cause withdrawal or anxiety. A stable home with consistent routines allows their affectionate nature to flourish.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Persians typically do well with respectful children and calm pets when introductions are handled slowly. They are tolerant but not assertive, preferring harmony over confrontation.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Health Considerations
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Persian cats require proactive health management due to breed-specific risks. Their brachycephalic facial structure can contribute to breathing difficulties, particularly in hot or humid conditions. Maintaining a cool indoor environment is essential.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Polycystic kidney disease has historically been associated with Persian lines. Responsible breeders screen for this condition, but ongoing veterinary monitoring remains critical. Early detection allows for better long-term management.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Eye issues, dental disease, and skin infections can develop if grooming and hygiene are neglected. Regular veterinary checkups, combined with consistent home care, significantly reduce these risks.
            </p>
            {/* AFFILIATE LINK OPPORTUNITY: Pet insurance, cooling mats */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              With attentive care, ethical breeding, and a calm environment, Persian cats often enjoy long, comfortable lives marked by emotional closeness and physical tranquility.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              The Persian cat is not simply a pet. It is a living work of art that requires daily stewardship. For owners willing to invest time, patience, and care, the Persian offers unmatched serenity, beauty, and companionship. It is a breed that rewards devotion with quiet loyalty and a deeply soothing presence.
            </p>

          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/pet-breeds/cats" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
              ← Back to Cat Breeds
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
