import type { Metadata } from 'next';
import Link from 'next/link';
import GroomingSidebar from '@/components/GroomingSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Ear and Eye Care for Pets',
  description: 'Learn how to properly clean and care for your pet\'s ears and eyes. Prevent infections and maintain good hygiene.',
  keywords: ['pet ear care', 'pet eye care', 'cleaning pet ears', 'pet eye cleaning'],
  pathname: '/pet-grooming/ear-and-eye-care',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Ear and Eye Care for Pets',
    type: 'image/png',
  }],
});

export default function EarAndEyeCarePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
                <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/pet-grooming" className="hover:text-blue-600 dark:hover:text-blue-400">Pet Grooming</Link>
                <span className="mx-2">/</span>
                <span>Ear and Eye Care</span>
              </nav>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Ear and Eye Care for Pets
              </h1>

              <div className="prose prose-lg dark:prose-invert max-w-none">

<p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
Ear and eye care are two of the most frequently overlooked aspects of routine pet
grooming in the United States, yet they are among the most medically significant.
Problems affecting the ears and eyes often progress silently, causing discomfort
long before obvious symptoms appear. By the time many pets show clear signs of
pain or irritation, infections or injuries may already be advanced.
</p>

<p>
Modern veterinary and grooming standards emphasize proactive care. Regular ear
and eye maintenance helps prevent infections, supports sensory health, and allows
owners to identify problems early. When performed correctly, these routines are
safe, simple, and highly effective at reducing veterinary visits related to
preventable conditions.
</p>

<h2>The Importance of Ear and Eye Health</h2>
<p>
The ears and eyes are among the most sensitive structures in your pet’s body.
They are constantly exposed to environmental debris, allergens, moisture, and
microorganisms. Certain breeds, coat types, and lifestyles increase risk even
further. Floppy ears, narrow ear canals, excessive hair growth, and frequent
swimming all create environments where infections can thrive.
</p>

<p>
Eye health is equally critical. Tear production, eyelid structure, and facial
anatomy vary widely among breeds. Flat-faced dogs, long-haired cats, and animals
with prominent eyes are especially prone to irritation, discharge, and injury.
Routine care supports comfort and helps preserve vision throughout your pet’s
life.
</p>

<h2>Understanding Pet Ear Anatomy</h2>
<p>
A pet’s ear canal is very different from a human’s. Dogs and cats have a long,
L-shaped ear canal that traps moisture and debris. This anatomy makes ears more
susceptible to bacterial and yeast infections, especially when airflow is
restricted.
</p>

<p>
Healthy ears are pale pink, odor-free, and relatively clean. Mild wax is normal.
Strong odor, redness, swelling, discharge, or frequent scratching are not.
Recognizing the difference is a critical part of responsible pet ownership.
</p>

<h2>Routine Ear Care: What It Should Look Like</h2>
<p>
Most pets benefit from weekly ear checks, even if cleaning is not required every
time. The goal is observation first, cleaning second. Over-cleaning can irritate
the ear canal and disrupt its natural defenses.
</p>

{/* Affiliate link opportunity: pet ear cleaner */}
{/* Affiliate link opportunity: cotton pads or ear wipes */}

<p>
When cleaning is needed, only use a veterinarian-approved, pet-safe ear cleaner.
Never use alcohol, hydrogen peroxide, or homemade solutions unless specifically
directed by a veterinarian. Apply the cleaner as instructed, gently massage the
base of the ear to loosen debris, and allow your pet to shake their head before
wiping away excess material with a cotton pad.
</p>

<p>
Cotton swabs should never be inserted into the ear canal. This common mistake can
push debris deeper and risk injury to the eardrum.
</p>

<h2>Signs of Ear Problems You Should Never Ignore</h2>
<p>
Early signs of ear issues include head shaking, scratching, redness, and mild
odor. As infections progress, discharge may become thick, dark, or foul-smelling.
Painful ears often cause behavioral changes such as irritability, withdrawal, or
reluctance to be touched.
</p>

<p>
Chronic ear infections are especially common in certain dog breeds and can lead
to permanent canal damage if left untreated. Prompt veterinary evaluation is
essential when symptoms persist or worsen.
</p>

<h2>Special Ear Care Considerations</h2>
<p>
Dogs that swim frequently require more vigilant ear care, as moisture trapped in
the canal creates ideal conditions for infection. Hairy ear canals may need
periodic trimming or plucking by a professional groomer, depending on veterinary
recommendation.
</p>

<p>
Cats generally require less ear maintenance, but ear mites remain a common issue,
particularly in multi-pet households. Regular checks help identify infestations
early.
</p>

<h2>Understanding Eye Anatomy and Tear Function</h2>
<p>
The eyes are protected by tears, eyelids, and surrounding facial structures.
Tears lubricate the surface, flush out debris, and deliver antimicrobial
proteins. When tear production or drainage is impaired, irritation and infection
can develop quickly.
</p>

<p>
Some breeds naturally produce more tears, leading to staining around the eyes.
While tear staining itself is often cosmetic, underlying causes should always be
evaluated.
</p>

<h2>Routine Eye Care at Home</h2>
<p>
Daily observation is the foundation of good eye care. Clear, bright eyes with no
excessive discharge indicate good health. Small amounts of clear or light-colored
discharge may be normal, especially after sleep.
</p>

{/* Affiliate link opportunity: pet eye wipes */}
{/* Affiliate link opportunity: sterile saline solution */}

<p>
To clean the eyes, use a soft, damp cloth or pet-specific eye wipe. Always wipe
from the inner corner outward, using a fresh section of cloth for each eye to
avoid cross-contamination. Never apply pressure directly to the eye itself.
</p>

<h2>Common Eye Problems in Pets</h2>
<p>
Conjunctivitis, corneal ulcers, dry eye, and foreign body irritation are among the
most frequently diagnosed eye conditions in US veterinary clinics. Symptoms may
include redness, squinting, cloudiness, excessive tearing, or changes in eye
color.
</p>

<p>
Eye problems should always be treated promptly. Delayed care can result in
permanent vision loss or chronic discomfort.
</p>

<h2>Tear Staining: Cosmetic or Medical?</h2>
<p>
Tear staining is especially common in small dogs and flat-faced breeds. While
often harmless, persistent staining can indicate blocked tear ducts, allergies,
or infection. Regular cleaning helps manage staining, but underlying causes
should be addressed with veterinary guidance.
</p>

<h2>Puppies, Kittens, and Early Care</h2>
<p>
Early exposure to ear and eye handling helps pets become comfortable with care
routines later in life. Short, positive sessions paired with treats build trust
and reduce stress.
</p>

<p>
Young animals are particularly susceptible to parasites and infections, making
early monitoring essential.
</p>

<h2>Senior Pets and Sensory Health</h2>
<p>
Aging pets are more prone to chronic ear disease, vision changes, and reduced
immune response. Regular care becomes even more important with age. Gentle
handling and patience are key when caring for senior pets.
</p>

<h2>Common Mistakes to Avoid</h2>
<p>
Using human products, over-cleaning, ignoring early symptoms, or attempting to
treat infections at home are among the most common mistakes owners make. Ear and
eye tissues are delicate, and improper care can worsen existing problems.
</p>

<h2>When to Seek Veterinary Care</h2>
<p>
Any signs of pain, persistent discharge, swelling, cloudiness, or behavioral
changes warrant veterinary evaluation. Over-the-counter products are not a
substitute for diagnosis and treatment when disease is present.
</p>

<h2>Building a Sustainable Care Routine</h2>
<p>
The most effective ear and eye care routines are simple and consistent. Regular
checks, gentle cleaning when needed, and prompt attention to changes protect your
pet’s comfort and long-term health.
</p>

<p>
By integrating these practices into your grooming routine, you reduce the risk
of preventable infections and support your pet’s quality of life at every stage.
</p>

              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <Link href="/pet-grooming" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                  ← Back to Pet Grooming Guides
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <GroomingSidebar />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
