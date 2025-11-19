'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

interface Pet {
  id: string;
  name: string;
  type: 'dog' | 'cat';
  weight: string;
  weightUnit: 'lbs' | 'kg';
  age: string;
  activityLevel: string;
}

export default function MultiPetFeedingPlannerClient() {
  const [pets, setPets] = useState<Pet[]>([
    { id: '1', name: '', type: 'dog', weight: '', weightUnit: 'lbs', age: 'adult', activityLevel: 'moderate' }
  ]);
  const [results, setResults] = useState<Array<{
    pet: string;
    dailyCalories: number;
    dailyAmount: string;
    recommendations: string[];
  }>>([]);

  const addPet = () => {
    setPets([...pets, { id: Date.now().toString(), name: '', type: 'dog', weight: '', weightUnit: 'lbs', age: 'adult', activityLevel: 'moderate' }]);
  };

  const removePet = (id: string) => {
    if (pets.length > 1) {
      setPets(pets.filter(pet => pet.id !== id));
    }
  };

  const updatePet = (id: string, field: keyof Pet, value: string) => {
    setPets(pets.map(pet => pet.id === id ? { ...pet, [field]: value } : pet));
  };

  const calculateFeeding = () => {
    const allResults: Array<{
      pet: string;
      dailyCalories: number;
      dailyAmount: string;
      recommendations: string[];
    }> = [];

    pets.forEach(pet => {
      if (!pet.name || !pet.weight) return;

      const weightNum = parseFloat(pet.weight);
      if (!weightNum || weightNum <= 0) return;

      const weightKg = pet.weightUnit === 'lbs' ? weightNum * 0.453592 : weightNum;
      const rer = 70 * Math.pow(weightKg, 0.75);
      
      let activityFactor = 1.6;
      if (pet.age === 'puppy' || pet.age === 'kitten') {
        activityFactor = pet.type === 'dog' ? 3.0 : 2.5;
      } else if (pet.age === 'senior') {
        activityFactor = 1.2;
      } else {
        if (pet.activityLevel === 'low') activityFactor = 1.4;
        else if (pet.activityLevel === 'high') activityFactor = 2.0;
      }

      const dailyCalories = Math.round(rer * activityFactor);
      const dailyAmount = `${(dailyCalories / 350).toFixed(1)} cups (${Math.round((dailyCalories / 350) * 120)}g)`;

      const recommendations: string[] = [];
      recommendations.push(`Feed ${pet.age === 'puppy' || pet.age === 'kitten' ? '3-4' : '2'} meals per day`);
      recommendations.push(`Daily calories: ${dailyCalories} kcal`);
      recommendations.push(`Daily amount: ${dailyAmount}`);

      allResults.push({ pet: pet.name, dailyCalories, dailyAmount, recommendations });
    });

    setResults(allResults);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Multi-Pet Feeding Planner', href: '/tools/multi-pet-feeding-planner' }
          ]} />
          
          <div className="text-center mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Multi-Pet Feeding Planner
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Plan feeding schedules for multiple pets at once
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
            <div className="space-y-6">
              {pets.map((pet, index) => (
                <div key={pet.id} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0 last:pb-0">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Pet {index + 1}</h3>
                    {pets.length > 1 && (
                      <button
                        onClick={() => removePet(pet.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        value={pet.name}
                        onChange={(e) => updatePet(pet.id, 'name', e.target.value)}
                        placeholder="Pet name"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Type</label>
                      <select
                        value={pet.type}
                        onChange={(e) => updatePet(pet.id, 'type', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      >
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Weight</label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          value={pet.weight}
                          onChange={(e) => updatePet(pet.id, 'weight', e.target.value)}
                          placeholder="Weight"
                          className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                        />
                        <select
                          value={pet.weightUnit}
                          onChange={(e) => updatePet(pet.id, 'weightUnit', e.target.value)}
                          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                        >
                          <option value="lbs">lbs</option>
                          <option value="kg">kg</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Age</label>
                      <select
                        value={pet.age}
                        onChange={(e) => updatePet(pet.id, 'age', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      >
                        <option value="puppy">Puppy/Kitten</option>
                        <option value="adult">Adult</option>
                        <option value="senior">Senior</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Activity Level</label>
                      <select
                        value={pet.activityLevel}
                        onChange={(e) => updatePet(pet.id, 'activityLevel', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      >
                        <option value="low">Low</option>
                        <option value="moderate">Moderate</option>
                        <option value="high">High</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={addPet}
                className="w-full py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                + Add Another Pet
              </button>

              <button
                onClick={calculateFeeding}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Calculate Feeding Plans
              </button>
            </div>
          </div>

          {results.length > 0 && (
            <div className="space-y-6">
              {results.map((result, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{result.pet}'s Feeding Plan</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400">Daily Calories</div>
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{result.dailyCalories} kcal</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400">Daily Amount</div>
                      <div className="text-xl font-bold text-blue-600 dark:text-blue-400">{result.dailyAmount}</div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Recommendations:</h3>
                    <ul className="space-y-2">
                      {result.recommendations.map((rec, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <span className="text-green-500 mt-1">✓</span>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This planner provides general guidelines. Individual pets may have different needs. Always consult with your veterinarian for personalized feeding recommendations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

