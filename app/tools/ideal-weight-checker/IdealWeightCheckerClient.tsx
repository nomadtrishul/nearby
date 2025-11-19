'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function IdealWeightCheckerClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [breed, setBreed] = useState<string>('');
  const [currentWeight, setCurrentWeight] = useState<string>('');
  const [weightUnit, setWeightUnit] = useState<'lbs' | 'kg'>('lbs');
  const [bcs, setBcs] = useState<number>(5);
  const [result, setResult] = useState<{
    idealWeight: { min: number; max: number };
    currentStatus: string;
    weightDifference: number;
    percentageDifference: number;
    recommendations: string[];
  } | null>(null);

  const breedIdealWeights: { [key: string]: { min: number; max: number } } = {
    // Dogs
    'Chihuahua': { min: 2, max: 6 },
    'Yorkshire Terrier': { min: 4, max: 7 },
    'Pomeranian': { min: 3, max: 7 },
    'French Bulldog': { min: 20, max: 28 },
    'Beagle': { min: 20, max: 30 },
    'Cocker Spaniel': { min: 20, max: 30 },
    'Border Collie': { min: 30, max: 45 },
    'Australian Shepherd': { min: 40, max: 65 },
    'Labrador Retriever': { min: 55, max: 80 },
    'Golden Retriever': { min: 55, max: 75 },
    'German Shepherd': { min: 50, max: 90 },
    'Boxer': { min: 55, max: 70 },
    'Great Dane': { min: 110, max: 175 },
    'Saint Bernard': { min: 120, max: 180 },
    // Cats
    'Persian': { min: 7, max: 12 },
    'Maine Coon': { min: 8, max: 18 },
    'Siamese': { min: 6, max: 14 },
    'British Shorthair': { min: 7, max: 17 },
  };

  const calculateIdealWeight = () => {
    const weightNum = parseFloat(currentWeight);
    if (!weightNum || weightNum <= 0) {
      alert('Please enter a valid weight');
      return;
    }

    const weightLbs = weightUnit === 'lbs' ? weightNum : weightNum * 2.20462;
    let idealWeight = { min: 0, max: 0 };

    // Check if breed is in database
    const breedKey = Object.keys(breedIdealWeights).find(
      key => breed.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(breed.toLowerCase())
    );

    if (breedKey) {
      idealWeight = breedIdealWeights[breedKey];
    } else {
      // Estimate based on BCS and current weight
      if (bcs <= 3) {
        idealWeight = { min: weightLbs * 1.1, max: weightLbs * 1.2 };
      } else if (bcs === 4) {
        idealWeight = { min: weightLbs * 1.05, max: weightLbs * 1.1 };
      } else if (bcs === 5) {
        idealWeight = { min: weightLbs * 0.95, max: weightLbs * 1.05 };
      } else if (bcs === 6) {
        idealWeight = { min: weightLbs * 0.85, max: weightLbs * 0.95 };
      } else if (bcs >= 7) {
        idealWeight = { min: weightLbs * 0.75, max: weightLbs * 0.85 };
      }
    }

    const idealAvg = (idealWeight.min + idealWeight.max) / 2;
    const weightDifference = weightLbs - idealAvg;
    const percentageDifference = (weightDifference / idealAvg) * 100;

    let currentStatus = 'Ideal';
    const recommendations: string[] = [];

    if (weightLbs < idealWeight.min) {
      currentStatus = 'Underweight';
      recommendations.push(`Your pet is ${Math.abs(weightDifference).toFixed(1)} lbs below ideal weight`);
      recommendations.push('Consult your veterinarian to rule out health issues');
      recommendations.push('May need increased food portions or higher calorie diet');
    } else if (weightLbs > idealWeight.max) {
      currentStatus = 'Overweight';
      recommendations.push(`Your pet is ${weightDifference.toFixed(1)} lbs above ideal weight`);
      recommendations.push('Gradual weight loss is recommended (1-2% per week)');
      recommendations.push('Reduce portions by 10-20% and increase exercise');
      recommendations.push('Consult your veterinarian for a weight loss plan');
    } else {
      currentStatus = 'Ideal Weight';
      recommendations.push('Your pet is within the ideal weight range!');
      recommendations.push('Maintain current diet and exercise routine');
      recommendations.push('Continue monitoring weight monthly');
    }

    recommendations.push(`Ideal weight range: ${idealWeight.min.toFixed(1)} - ${idealWeight.max.toFixed(1)} lbs`);

    setResult({
      idealWeight,
      currentStatus,
      weightDifference: Math.round(weightDifference * 10) / 10,
      percentageDifference: Math.round(percentageDifference * 10) / 10,
      recommendations,
    });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Ideal Weight Checker', href: '/tools/ideal-weight-checker' }
          ]} />
          
          <div className="text-center mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Ideal Weight Checker
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Determine if your pet is at their ideal weight based on breed and body condition
            </p>
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
                  Breed (optional - helps with accuracy)
                </label>
                <input
                  type="text"
                  value={breed}
                  onChange={(e) => setBreed(e.target.value)}
                  placeholder="e.g., Labrador Retriever, Persian"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Current Weight
                </label>
                <div className="flex gap-4">
                  <input
                    type="number"
                    value={currentWeight}
                    onChange={(e) => setCurrentWeight(e.target.value)}
                    placeholder="Enter weight"
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                  <select
                    value={weightUnit}
                    onChange={(e) => setWeightUnit(e.target.value as 'lbs' | 'kg')}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="lbs">lbs</option>
                    <option value="kg">kg</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Body Condition Score (1-9 scale, 5 is ideal)
                </label>
                <input
                  type="range"
                  min="1"
                  max="9"
                  value={bcs}
                  onChange={(e) => setBcs(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>1 (Emaciated)</span>
                  <span className="font-semibold">Current: {bcs}</span>
                  <span>9 (Morbidly Obese)</span>
                </div>
              </div>

              <button
                onClick={calculateIdealWeight}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Check Ideal Weight
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Weight Assessment</h2>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Current Status</div>
                  <div className={`text-3xl font-bold ${
                    result.currentStatus === 'Ideal Weight' ? 'text-green-600 dark:text-green-400' :
                    result.currentStatus === 'Underweight' ? 'text-orange-600 dark:text-orange-400' :
                    'text-red-600 dark:text-red-400'
                  }`}>
                    {result.currentStatus}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Ideal Weight Range</div>
                  <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    {result.idealWeight.min.toFixed(1)} - {result.idealWeight.max.toFixed(1)} lbs
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Weight Difference</div>
                  <div className={`text-xl font-bold ${
                    result.weightDifference === 0 ? 'text-green-600 dark:text-green-400' :
                    result.weightDifference > 0 ? 'text-red-600 dark:text-red-400' :
                    'text-orange-600 dark:text-orange-400'
                  }`}>
                    {result.weightDifference > 0 ? '+' : ''}{result.weightDifference} lbs
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">% from Ideal</div>
                  <div className={`text-xl font-bold ${
                    Math.abs(result.percentageDifference) < 5 ? 'text-green-600 dark:text-green-400' :
                    Math.abs(result.percentageDifference) < 15 ? 'text-yellow-600 dark:text-yellow-400' :
                    'text-red-600 dark:text-red-400'
                  }`}>
                    {result.percentageDifference > 0 ? '+' : ''}{result.percentageDifference}%
                  </div>
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

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This tool provides general guidelines. Individual pets may have different ideal weights based on frame size, muscle mass, and other factors. Always consult with your veterinarian for personalized recommendations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

