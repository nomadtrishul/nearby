'use client';

import { useState } from 'react';
import Image from 'next/image';
import Loader from "@/components/Loader";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Download, X, Facebook, Instagram, MessageCircle, Send, Linkedin, Copy, Check } from "lucide-react";
import Breadcrumb from '@/components/Breadcrumb';

export default function DewormingReminderClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [age, setAge] = useState<string>('puppy');
  const [lastDeworming, setLastDeworming] = useState<string>('');
  const [result, setResult] = useState<{
    nextDue: string;
    daysUntil: number;
    schedule: Array<{ age: string; frequency: string; notes: string }>;
    recommendations: string[];
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const calculateReminder = () => {

    setIsLoading(true);

    // Simulate AI processing with 3-second delay
    setTimeout(() => {
    if (!lastDeworming) {
      alert('Please enter last deworming date');
      return;
    }

    const lastDate = new Date(lastDeworming);
    const today = new Date();
    
    let daysUntil = 0;
    let nextDue = '';
    const schedule: Array<{ age: string; frequency: string; notes: string }> = [];

    if (age === 'puppy' || age === 'kitten') {
      // Puppies and kittens need frequent deworming
      const nextDate = new Date(lastDate);
      nextDate.setDate(nextDate.getDate() + 14); // Every 2 weeks
      daysUntil = Math.ceil((nextDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      nextDue = nextDate.toISOString().split('T')[0];
      
      schedule.push({
        age: '2-8 weeks',
        frequency: 'Every 2 weeks',
        notes: 'Start deworming at 2 weeks of age. Continue every 2 weeks until 8 weeks.'
      });
      schedule.push({
        age: '8-12 weeks',
        frequency: 'Every 2 weeks',
        notes: 'Continue every 2 weeks until 12 weeks of age.'
      });
      schedule.push({
        age: '3-6 months',
        frequency: 'Monthly',
        notes: 'Monthly deworming until 6 months of age.'
      });
    } else {
      // Adult pets
      const nextDate = new Date(lastDate);
      nextDate.setMonth(nextDate.getMonth() + 3); // Every 3 months
      daysUntil = Math.ceil((nextDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      nextDue = nextDate.toISOString().split('T')[0];
      
      schedule.push({
        age: 'Adult (6+ months)',
        frequency: 'Every 3 months',
        notes: 'Quarterly deworming is recommended for most adult pets.'
      });
      schedule.push({
        age: 'High-risk pets',
        frequency: 'Monthly',
        notes: 'Pets that hunt, have contact with other animals, or live in high-risk areas may need monthly deworming.'
      });
    }

    const recommendations: string[] = [];
    recommendations.push(`Next deworming due: ${nextDue} (${daysUntil > 0 ? `${daysUntil} days` : 'Overdue'})`);
    recommendations.push('Always use deworming medications recommended by your veterinarian');
    recommendations.push('Different medications target different parasites - your vet can recommend the best option');
    recommendations.push('Annual fecal exams are recommended to check for parasites');
    recommendations.push('Treat all pets in the household if one pet has worms');

    setResult({ nextDue, daysUntil, schedule, recommendations });
    setIsLoading(false);
    }, 3000); // 3-second delay
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Deworming Reminder', href: '/tools/deworming-reminder' }
          ]} />
          
        <div className="mb-8 sm:mb-10 mt-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Deworming Reminder Tool – Dog & Cat Deworming Schedule Calculator
          </h1>
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Use our deworming reminder tool to calculate when your pet's next deworming is due. Enter basic information to view recommended schedules for puppies, kittens, and adult pets based on age and risk factors, then get personalized reminders.
            </p>
          </div>

          {/* Tool Screenshot/Image */}
          <div className="mb-8">
            <Image
              src="/og-image.png"
              alt="Deworming Reminder Tool - Calculate deworming schedules for pets"
              width={1200}
              height={630}
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
              priority={false}
            />
          </div>
        </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Pet Type
                </label>
                <select
                  value={petType}
                  onChange={(e) => setPetType(e.target.value as 'dog' | 'cat')}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Age Category
                </label>
                <select
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="puppy">Puppy/Kitten</option>
                  <option value="adult">Adult</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Last Deworming Date
                </label>
                <input
                  type="date"
                  value={lastDeworming}
                  onChange={(e) => setLastDeworming(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <button
                onClick={calculateReminder}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Calculate Next Deworming
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Deworming Schedule</h2>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Next Deworming Due</div>
                  <div className={`text-3xl font-bold ${result.daysUntil <= 0 ? 'text-red-600 dark:text-red-400' : result.daysUntil <= 7 ? 'text-orange-600 dark:text-orange-400' : 'text-blue-600 dark:text-blue-400'}`}>
                    {result.nextDue}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {result.daysUntil > 0 ? `${result.daysUntil} days remaining` : 'OVERDUE - Schedule immediately'}
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Recommended Schedule:</h3>
                <div className="space-y-3">
                  {result.schedule.map((item, index) => (
                    <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-gray-900 dark:text-white">{item.age}</span>
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{item.frequency}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.notes}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Recommendations:</h3>
                <ul className="space-y-2">
                  {result.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* How Deworming Reminder Tool Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Deworming Reminder Tool Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The calculator uses veterinary guidelines to determine deworming intervals based on your pet's age category and last treatment date. Puppies and kittens require deworming every 2 weeks from 2-12 weeks, then monthly until 6 months. Adult pets typically need treatment every 3 months, with monthly protocols for high-risk lifestyles. The tool generates the next due date and a reference schedule.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Why Staying on Schedule Matters</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Intestinal parasites can cause digestive issues, weight loss, anemia, and zoonotic infections. Consistent deworming helps protect your pet and family members. Puppies and kittens can be born with worms, so early and frequent treatment is essential.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How often should I deworm my pet?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Puppies and kittens need deworming every 2 weeks from 2-12 weeks of age, then monthly until 6 months. Adult pets typically need deworming every 3 months, though high-risk pets may need monthly treatments. Always follow your veterinarian's recommendations.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">When should I start deworming my puppy or kitten?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Start at 2 weeks of age and continue every 2 weeks until 12 weeks. After that, switch to monthly treatments until 6 months. Young animals are more susceptible and can be born with or acquire worms from their mother.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Do adult pets need regular deworming?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes, adult pets should be dewormed regularly, typically every 3 months. Pets that hunt, have contact with other animals, or live in areas with high parasite risk may need monthly deworming. Annual fecal exams are also recommended.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="/tools/parasite-risk-assessment"
                className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Parasite Risk Assessment</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Evaluate your pet's parasite exposure</p>
              </a>
              <a
                href="/tools/vaccine-reminder"
                className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Vaccine Reminder</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Track vaccination schedules</p>
              </a>
              <a
                href="/tools/pet-hydration-calculator"
                className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Hydration Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Keep your pet hydrated during treatment</p>
              </a>
              <a
                href="/tools/safe-human-foods-checker"
                className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Safe Human Foods Checker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Find safe treats for after medication</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This tool provides general guidelines. Always consult with your veterinarian for personalized deworming recommendations based on your pet's specific needs, lifestyle, and risk factors.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

