'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export default function AgeCalculatorClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [birthDate, setBirthDate] = useState<string>('');
  const [breed, setBreed] = useState<string>('');
  const [result, setResult] = useState<{
    petAge: { years: number; months: number; days: number };
    humanAge: number;
    lifeStage: string;
    lifeStageDescription: string;
    recommendations: string[];
  } | null>(null);

  const dogBreeds = [
    'Small (under 20 lbs)',
    'Medium (20-50 lbs)',
    'Large (50-90 lbs)',
    'Giant (over 90 lbs)',
  ];

  const catBreeds = [
    'Small/Medium',
    'Large',
  ];

  const calculateAge = () => {
    if (!birthDate) {
      alert('Please enter your pet\'s birth date');
      return;
    }

    const birth = new Date(birthDate);
    const today = new Date();
    
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    // Calculate human age based on pet type and size
    let humanAge = 0;
    let lifeStage = '';
    let lifeStageDescription = '';
    const recommendations: string[] = [];

    if (petType === 'dog') {
      // Dog aging: First year = 15 human years, second year = 9, then varies by size
      if (years === 0) {
        humanAge = Math.round(months * 1.25);
      } else if (years === 1) {
        humanAge = 15 + Math.round(months * 0.75);
      } else {
        let sizeFactor = 4; // Medium dog default
        if (breed.includes('Small')) sizeFactor = 4;
        else if (breed.includes('Medium')) sizeFactor = 5;
        else if (breed.includes('Large')) sizeFactor = 6;
        else if (breed.includes('Giant')) sizeFactor = 7.5;

        humanAge = 24 + (years - 2) * sizeFactor;
      }

      // Determine life stage
      if (years < 1) {
        lifeStage = 'Puppy';
        lifeStageDescription = 'Your dog is still a puppy and growing rapidly.';
        recommendations.push('Feed puppy-specific food with higher protein and calories');
        recommendations.push('Socialize with people, other dogs, and new environments');
        recommendations.push('Begin basic training and housebreaking');
        recommendations.push('Schedule vaccinations and regular veterinary check-ups');
      } else if (years < 2) {
        lifeStage = 'Young Adult';
        lifeStageDescription = 'Your dog is a young adult, full of energy and still developing.';
        recommendations.push('Transition to adult food');
        recommendations.push('Maintain regular exercise and training');
        recommendations.push('Continue socialization');
        recommendations.push('Annual veterinary check-ups');
      } else if (years < 7) {
        lifeStage = 'Adult';
        lifeStageDescription = 'Your dog is in their prime adult years.';
        recommendations.push('Maintain consistent exercise routine');
        recommendations.push('Feed balanced adult diet');
        recommendations.push('Annual veterinary check-ups');
        recommendations.push('Dental care and preventive health measures');
      } else if (years < 10) {
        lifeStage = 'Mature Adult';
        lifeStageDescription = 'Your dog is entering their mature years.';
        recommendations.push('Consider senior-specific food if needed');
        recommendations.push('Monitor for signs of aging');
        recommendations.push('Semi-annual veterinary check-ups recommended');
        recommendations.push('Adjust exercise as needed');
      } else {
        lifeStage = 'Senior';
        lifeStageDescription = 'Your dog is a senior and may need special care.';
        recommendations.push('Feed senior-specific diet');
        recommendations.push('Semi-annual veterinary check-ups');
        recommendations.push('Monitor for age-related health issues');
        recommendations.push('Adjust exercise and activity levels');
        recommendations.push('Consider supplements for joint health');
      }
    } else {
      // Cat aging: First year = 15, second = 9, then 4 per year
      if (years === 0) {
        humanAge = Math.round(months * 1.25);
      } else if (years === 1) {
        humanAge = 15 + Math.round(months * 0.75);
      } else {
        humanAge = 24 + (years - 2) * 4;
      }

      // Determine life stage
      if (years < 1) {
        lifeStage = 'Kitten';
        lifeStageDescription = 'Your cat is still a kitten and growing rapidly.';
        recommendations.push('Feed kitten-specific food with higher protein and calories');
        recommendations.push('Socialize and handle gently');
        recommendations.push('Begin litter box training');
        recommendations.push('Schedule vaccinations and regular veterinary check-ups');
      } else if (years < 2) {
        lifeStage = 'Young Adult';
        lifeStageDescription = 'Your cat is a young adult, full of energy.';
        recommendations.push('Transition to adult food');
        recommendations.push('Maintain play and exercise');
        recommendations.push('Annual veterinary check-ups');
        recommendations.push('Consider spaying/neutering if not already done');
      } else if (years < 7) {
        lifeStage = 'Adult';
        lifeStageDescription = 'Your cat is in their prime adult years.';
        recommendations.push('Maintain consistent feeding and exercise');
        recommendations.push('Annual veterinary check-ups');
        recommendations.push('Dental care and preventive health measures');
        recommendations.push('Monitor weight and body condition');
      } else if (years < 11) {
        lifeStage = 'Mature Adult';
        lifeStageDescription = 'Your cat is entering their mature years.';
        recommendations.push('Consider mature adult food if needed');
        recommendations.push('Monitor for signs of aging');
        recommendations.push('Semi-annual veterinary check-ups recommended');
        recommendations.push('Adjust activity as needed');
      } else {
        lifeStage = 'Senior';
        lifeStageDescription = 'Your cat is a senior and may need special care.';
        recommendations.push('Feed senior-specific diet');
        recommendations.push('Semi-annual veterinary check-ups');
        recommendations.push('Monitor for age-related health issues');
        recommendations.push('Provide easy access to food, water, and litter');
        recommendations.push('Consider supplements for joint health');
      }
    }

    setResult({
      petAge: { years, months, days },
      humanAge: Math.round(humanAge),
      lifeStage,
      lifeStageDescription,
      recommendations,
    });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Age Calculator', href: '/tools/age-calculator' }
          ]} />
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Pet Age Calculator – Convert Dog & Cat Years to Human Years
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Use our free pet age calculator to convert your dog or cat's age to human years. Our dog age calculator and cat age calculator use breed-specific formulas to accurately determine your pet's equivalent human age, helping you understand their life stage and provide age-appropriate care.
            </p>
          </div>

          {/* Tool Screenshot/Image */}
          <div className="mb-8">
            <Image 
              src="/og-image.png" 
              alt="Pet Age Calculator - Convert dog and cat years to human years with breed-specific calculations"
              width={1200}
              height={630}
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
              priority={false}
            />
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6 sm:p-8 mb-8">
            <div className="space-y-6">
              {/* Pet Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Pet Type
                </label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setPetType('dog')}
                    className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                      petType === 'dog'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    🐕 Dog
                  </button>
                  <button
                    type="button"
                    onClick={() => setPetType('cat')}
                    className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                      petType === 'cat'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    🐱 Cat
                  </button>
                </div>
              </div>

              {/* Birth Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Pet's Birth Date
                </label>
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Breed Size (for dogs) */}
              {petType === 'dog' && (
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Dog Size/Breed Category
                  </label>
                  <select
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select size category...</option>
                    {dogBreeds.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Size affects aging rate - larger dogs age faster
                  </p>
                </div>
              )}

              {/* Calculate Button */}
              <button
                onClick={calculateAge}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Calculate Age
              </button>
            </div>
          </div>

          {/* Results */}
          {result && (
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 sm:p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Results</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Pet's Age
                    </h3>
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      {result.petAge.years} {result.petAge.years === 1 ? 'year' : 'years'}, {result.petAge.months} {result.petAge.months === 1 ? 'month' : 'months'}
                    </p>
                    {result.petAge.days > 0 && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {result.petAge.days} {result.petAge.days === 1 ? 'day' : 'days'}
                      </p>
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Equivalent Human Age
                    </h3>
                    <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                      {result.humanAge} {result.humanAge === 1 ? 'year' : 'years'} old
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Life Stage: {result.lifeStage}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {result.lifeStageDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Age-Appropriate Recommendations
                  </h3>
                  <ul className="space-y-2">
                    {result.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* How Pet Age is Calculated Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Pet Age is Calculated</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Dog Age Calculator Formula</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The dog age calculator uses a breed-specific formula: the first year equals 15 human years, the second year equals 9 human years, then each subsequent year varies by size. Small dogs age at approximately 4 human years per dog year, medium dogs at 5 years, large dogs at 6 years, and giant breeds at 7.5 years per dog year.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Cat Age Calculator Formula</h3>
              <p className="text-gray-700 dark:text-gray-300">
                The cat age calculator uses a simpler formula: the first year equals 15 human years, the second year equals 9 human years, then each subsequent year equals 4 human years. This formula works for most cats regardless of size.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do you calculate pet age in human years?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Pet age conversion varies by species and size. For dogs: the first year equals 15 human years, the second year equals 9 human years, then it varies by size (small dogs age slower than large dogs). For cats: the first year equals 15 human years, the second year equals 9 human years, then each year equals 4 human years.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Do larger dogs age faster than smaller dogs?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes, larger dog breeds generally age faster than smaller breeds. Giant breeds may age at a rate of 7.5 human years per dog year after age 2, while small breeds age at about 4 human years per dog year. This is why larger dogs typically have shorter lifespans.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What are the different life stages for pets?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Pets go through several life stages: Puppy/Kitten (under 1 year), Young Adult (1-2 years), Adult (2-7 years for dogs, 2-7 years for cats), Mature Adult (7-10 years for dogs, 7-11 years for cats), and Senior (10+ years for dogs, 11+ years for cats). Each stage has different care requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/weight-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Weight Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate your pet's ideal weight and BMI</p>
              </a>
              <a href="/tools/exercise-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Exercise Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate daily exercise needs for your pet</p>
              </a>
              <a href="/tools/calorie-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Calorie Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate daily calorie needs for your pet</p>
              </a>
              <a href="/pet-health" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Health Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn more about pet health and wellness</p>
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Disclaimer:</strong> Age conversion to human years is an estimate based on general aging patterns. Individual pets may age differently based on genetics, health, and lifestyle. The life stage and recommendations are general guidelines. Always consult with your veterinarian for personalized care recommendations based on your pet's specific needs and health status.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

