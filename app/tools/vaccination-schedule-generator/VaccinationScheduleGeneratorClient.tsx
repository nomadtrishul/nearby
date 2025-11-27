'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export default function VaccinationScheduleGeneratorClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [birthDate, setBirthDate] = useState<string>('');
  const [lifestyle, setLifestyle] = useState<string>('indoor');
  const [result, setResult] = useState<{
    schedule: Array<{ age: string; vaccines: string[]; notes: string }>;
    recommendations: string[];
  } | null>(null);

  const generateSchedule = () => {
    if (!birthDate) {
      alert('Please enter birth date');
      return;
    }

    const birth = new Date(birthDate);
    const schedule: Array<{ age: string; vaccines: string[]; notes: string }> = [];

    if (petType === 'dog') {
      schedule.push({
        age: '6-8 weeks',
        vaccines: ['DHPP (Distemper, Hepatitis, Parvovirus, Parainfluenza)'],
        notes: 'First puppy vaccination. Start socialization after this vaccine.'
      });
      schedule.push({
        age: '10-12 weeks',
        vaccines: ['DHPP', 'Bordetella (Kennel Cough)'],
        notes: 'Second round of core vaccines.'
      });
      schedule.push({
        age: '14-16 weeks',
        vaccines: ['DHPP', 'Rabies'],
        notes: 'Final puppy vaccination. Rabies required by law in most areas.'
      });
      schedule.push({
        age: '12-16 months',
        vaccines: ['DHPP', 'Rabies'],
        notes: 'First adult booster. Follow your veterinarian\'s recommendations for 1-year vs 3-year rabies.'
      });
      schedule.push({
        age: 'Annually',
        vaccines: ['DHPP', 'Bordetella'],
        notes: 'Annual boosters. Some vaccines may be given every 3 years based on local regulations and vet recommendations.'
      });
      schedule.push({
        age: 'Every 1-3 years',
        vaccines: ['Rabies'],
        notes: 'Rabies booster frequency depends on local laws and vaccine type (1-year vs 3-year).'
      });

      if (lifestyle === 'outdoor' || lifestyle === 'mixed') {
        schedule.push({
          age: '12-16 weeks (if in high-risk area)',
          vaccines: ['Lyme Disease'],
          notes: 'Recommended for dogs in tick-endemic areas or with outdoor exposure.'
        });
        schedule.push({
          age: 'Annually (if in high-risk area)',
          vaccines: ['Lyme Disease'],
          notes: 'Annual booster if in tick-endemic area.'
        });
      }
    } else {
      // Cat schedule
      schedule.push({
        age: '6-8 weeks',
        vaccines: ['FVRCP (Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia)'],
        notes: 'First kitten vaccination.'
      });
      schedule.push({
        age: '10-12 weeks',
        vaccines: ['FVRCP'],
        notes: 'Second round of core vaccines.'
      });
      schedule.push({
        age: '14-16 weeks',
        vaccines: ['FVRCP', 'Rabies'],
        notes: 'Final kitten vaccination. Rabies required by law in most areas.'
      });
      schedule.push({
        age: '12-16 weeks (if at risk)',
        vaccines: ['FeLV (Feline Leukemia)'],
        notes: 'Recommended for outdoor cats, multi-cat households, or cats with unknown FeLV status.'
      });
      schedule.push({
        age: '12-16 months',
        vaccines: ['FVRCP', 'Rabies', 'FeLV (if at risk)'],
        notes: 'First adult booster.'
      });
      schedule.push({
        age: 'Annually',
        vaccines: ['FVRCP'],
        notes: 'Annual booster. Some vaccines may be given every 3 years based on vet recommendations.'
      });
      schedule.push({
        age: 'Every 1-3 years',
        vaccines: ['Rabies'],
        notes: 'Rabies booster frequency depends on local laws and vaccine type.'
      });
      schedule.push({
        age: 'Annually (if at risk)',
        vaccines: ['FeLV'],
        notes: 'Annual booster for cats at risk of exposure.'
      });
    }

    const recommendations: string[] = [];
    recommendations.push('This is a general schedule. Always follow your veterinarian\'s specific recommendations.');
    recommendations.push('Vaccination schedules may vary based on your pet\'s health, local regulations, and risk factors.');
    recommendations.push('Keep a record of all vaccinations in your pet\'s health file.');
    recommendations.push('Some vaccines may be combined into a single injection.');
    recommendations.push('Discuss any concerns about vaccinations with your veterinarian.');

    setResult({ schedule, recommendations });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Vaccination Schedule Generator', href: '/tools/vaccination-schedule-generator' }
          ]} />
          
          <div className="mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Vaccination Schedule Generator
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Generate a complete vaccination schedule for your pet from birth to adulthood
              </p>
            </div>

            {/* Tool Screenshot/Image */}
            <div className="mb-8">
              <Image 
                src="/og-image.png" 
                alt="Vaccination Schedule Generator - Generate a complete vaccination schedule"
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
                  Birth Date
                </label>
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Lifestyle
                </label>
                <select
                  value={lifestyle}
                  onChange={(e) => setLifestyle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="indoor">Primarily Indoor</option>
                  <option value="mixed">Indoor/Outdoor</option>
                  <option value="outdoor">Primarily Outdoor</option>
                </select>
              </div>

              <button
                onClick={generateSchedule}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Generate Vaccination Schedule
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Vaccination Schedule</h2>
              
              <div className="space-y-4 mb-6">
                {result.schedule.map((item, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{item.age}</h3>
                    </div>
                    <div className="mb-2">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Vaccines:</p>
                      <ul className="list-disc list-inside space-y-1">
                        {item.vaccines.map((vaccine, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-400">{vaccine}</li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">{item.notes}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Important Notes:</h3>
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

          {/* How Vaccination Schedule Generator Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Vaccination Schedule Generator Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our vaccination schedule generator creates a complete vaccination timeline for your pet from birth to adulthood. The tool considers your pet's age, type (dog or cat), and lifestyle to recommend appropriate vaccines. It includes core vaccines (essential for all pets) and non-core vaccines (based on lifestyle and risk factors). The schedule shows when each vaccine should be given and provides information about vaccine types and purposes.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Pet Vaccinations</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Puppies and kittens typically receive their first vaccines at 6-8 weeks of age, with booster shots at 10-12 weeks and 14-16 weeks to build full immunity. Core vaccines (like DHPP for dogs and FVRCP for cats) are essential for all pets. Non-core vaccines depend on lifestyle, location, and risk factors. Adult pets need annual boosters for most core vaccines, though some may be given every 1-3 years depending on local regulations and vaccine type.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">When should my puppy or kitten get their first vaccines?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Puppies and kittens typically receive their first vaccines at 6-8 weeks of age. This includes core vaccines like DHPP for dogs and FVRCP for cats. They'll need booster shots at 10-12 weeks and 14-16 weeks to build full immunity. Rabies vaccines are usually given at 14-16 weeks.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How often do adult pets need vaccines?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Adult pets need annual boosters for most core vaccines, though some vaccines (like rabies) may be given every 1-3 years depending on local regulations and vaccine type. Your veterinarian will create a personalized schedule based on your pet's health, lifestyle, and local requirements.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Are all vaccines necessary for my pet?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Core vaccines (like DHPP for dogs and FVRCP for cats) are essential for all pets. Non-core vaccines (like Lyme disease or FeLV) depend on your pet's lifestyle, location, and risk factors. Your veterinarian can help determine which vaccines are necessary based on your pet's specific situation.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/vaccine-reminder" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Vaccine Reminder</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Track vaccination schedules</p>
              </a>
              <a href="/tools/heat-cycle-tracker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Heat Cycle Tracker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Track reproductive cycles</p>
              </a>
              <a href="/tools/pregnancy-due-date-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pregnancy Due Date Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate pregnancy due dates</p>
              </a>
              <a href="/pet-health" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Health Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn about pet health and wellness</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This schedule is a general guideline. Always consult with your veterinarian for a personalized vaccination schedule based on your pet's specific needs, health status, local regulations, and risk factors.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

