import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { generateSEOMetadata } from '@/lib/seo-utils';
import {
    Dog,
    Cat,
    Clock,
    DollarSign,
    Home,
    Heart,
    Activity,
    Brain,
    CheckCircle2,
    XCircle,
    ArrowRight
} from 'lucide-react';

export const metadata: Metadata = generateSEOMetadata({
    title: 'Puppy vs Kitten: Which Pet is Right for You?',
    description: 'Deciding between a puppy and a kitten? Compare costs, time commitment, lifestyle requirements, and training needs to find your perfect pet match.',
    keywords: ['puppy vs kitten', 'dog vs cat', 'first time pet owner', 'puppy care cost', 'kitten care cost', 'pet comparison'],
    pathname: '/comparisons/puppy-vs-kitten',
});

export default function PuppyVsKittenPage() {
    return (
        <main className="min-h-screen bg-gray-50 dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white dark:bg-gray-900 pb-16 sm:pb-20">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-60" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-50/50 dark:bg-purple-900/10 rounded-full blur-3xl opacity-60" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="pt-8 mb-8">
                        <Breadcrumb items={[
                            { name: 'Home', href: '/' },
                            { name: 'Comparisons', href: '/comparisons' },
                            { name: 'Puppy vs Kitten', href: '/comparisons/puppy-vs-kitten' }
                        ]} />
                    </div>

                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <div className="inline-flex items-center gap-4 text-4xl sm:text-6xl mb-4">
                            <span className="animate-bounce delay-100">🐶</span>
                            <span className="text-gray-300 dark:text-gray-700 font-light">VS</span>
                            <span className="animate-bounce delay-300">🐱</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Puppy vs. Kitten: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                The Ultimate Showdown
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Choosing between a puppy and a kitten is not a casual decision. It shapes your daily routine, your finances, your home environment, and even your emotional rhythm for years to come. Both offer companionship, affection, and joy, but they demand very different things in return.
                        </p>
                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            This guide breaks down the real-world differences between raising a puppy and raising a kitten, not in abstract terms, but in practical, lived experience. The goal is not to crown a winner, but to help you choose the animal that fits your life as it truly is, not as you wish it were.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Comparison Table */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-5xl">
                    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                        <div className="grid grid-cols-3 bg-gray-50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-700 p-6 text-center">
                            <div className="font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-xs sm:text-sm">Feature</div>
                            <div className="font-bold text-blue-600 dark:text-blue-400 text-lg sm:text-xl flex items-center justify-center gap-2">
                                <Dog className="w-5 h-5" /> Puppy
                            </div>
                            <div className="font-bold text-purple-600 dark:text-purple-400 text-lg sm:text-xl flex items-center justify-center gap-2">
                                <Cat className="w-5 h-5" /> Kitten
                            </div>
                        </div>

                        <div className="divide-y divide-gray-100 dark:divide-gray-700">
                            {[
                                { label: 'Time Commitment', puppy: 'High (training, walks, supervision)', kitten: 'Lower (independent by nature)', icon: Clock },
                                { label: 'Space Needed', puppy: 'Medium to high', kitten: 'Low, apartment-friendly', icon: Home },
                                { label: 'Monthly Cost', puppy: '$50 - $200+', kitten: '$30 - $100+', icon: DollarSign },
                                { label: 'Training Needs', puppy: 'Essential and ongoing', kitten: 'Minimal, mostly instinctive', icon: Brain },
                                { label: 'Activity Level', puppy: 'High and consistent', kitten: 'Short energetic bursts', icon: Activity },
                                { label: 'Affection Style', puppy: 'Constant and expressive', kitten: 'Selective and subtle', icon: Heart },
                            ].map((row, idx) => (
                                <div key={idx} className="grid grid-cols-3 p-6 items-center hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                                    <div className="flex items-center gap-3 font-medium text-gray-700 dark:text-gray-300">
                                        <row.icon className="w-5 h-5 text-gray-400" />
                                        <span className="hidden sm:inline">{row.label}</span>
                                    </div>
                                    <div className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base">{row.puppy}</div>
                                    <div className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base">{row.kitten}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Affiliate link opportunity: Pet starter kits, crates, litter boxes */}
                </div>
            </section>

            {/* Detailed Analysis */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-5xl space-y-20">

                    {/* Lifestyle Fit */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium">
                                <Home className="w-4 h-4" /> Lifestyle Fit
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Active Commitment vs. Quiet Adaptability</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Puppies demand structure. They need regular walks, consistent feeding schedules, bathroom breaks, and supervision that borders on constant during the early months. A puppy integrates itself into every part of your day, from morning routines to evening plans. If you enjoy being active, spending time outdoors, and building daily habits around your pet, a puppy can feel like a natural extension of your lifestyle.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Kittens, by contrast, adapt themselves to your life rather than reshaping it. Once litter trained, which typically happens quickly, they manage their own routines with minimal intervention. They are well suited for apartment living, irregular work schedules, and quieter households where independence is valued over constant interaction.
                            </p>
                            {/* Affiliate link opportunity: Dog walking gear, cat trees */}
                        </div>
                        <div className="order-1 md:order-2 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8 flex items-center justify-center">
                            <div className="text-[120px]">🏠</div>
                        </div>
                    </div>

                    {/* Training */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8 flex items-center justify-center">
                            <div className="text-[120px]">🎓</div>
                        </div>
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 text-sm font-medium">
                                <Brain className="w-4 h-4" /> Trainability
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Structured Learning vs. Natural Instinct</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Puppies are eager learners, motivated by food, praise, and attention. However, that eagerness comes with responsibility. Training is not optional. Without guidance, puppies develop habits that quickly become problematic. The reward for this effort is a companion that responds to commands, reads human emotion, and integrates deeply into family life.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Kittens rely far more on instinct than instruction. Litter box use is intuitive, grooming is automatic, and personal boundaries are largely self-regulated. Training a kitten focuses less on obedience and more on environment management, such as providing scratching posts and enrichment to guide behavior naturally.
                            </p>
                            {/* Affiliate link opportunity: Puppy training treats, scratching posts */}
                        </div>
                    </div>

                </div>
            </section>

            {/* Verdict Section */}
            <section className="py-16 bg-gray-900 text-white mt-16">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">The Verdict</h2>
                    <p className="text-gray-300 mb-12 leading-relaxed">
                        There is no universally better choice, only a better match. The right pet aligns with your energy level, your schedule, your living space, and your expectations. When those elements align, both puppies and kittens become deeply rewarding companions rather than sources of stress.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-blue-500 transition-colors">
                            <div className="text-5xl mb-6">🐕</div>
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Choose a Puppy If...</h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                You want a highly interactive companion that thrives on routine, training, and shared experiences. Puppies suit households where time, patience, and energy are available daily.
                            </p>
                            <div className="mt-8">
                                <Link href="/pet-breeds/dogs" className="block w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold transition-colors">
                                    Explore Dog Breeds
                                </Link>
                            </div>
                        </div>

                        <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-purple-500 transition-colors">
                            <div className="text-5xl mb-6">🐈</div>
                            <h3 className="text-2xl font-bold mb-4 text-purple-400">Choose a Kitten If...</h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                You value independence, flexibility, and a calmer household dynamic. Kittens are ideal companions for people who want connection without constant supervision.
                            </p>
                            <div className="mt-8">
                                <Link href="/pet-breeds/cats" className="block w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 font-semibold transition-colors">
                                    Explore Cat Breeds
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
