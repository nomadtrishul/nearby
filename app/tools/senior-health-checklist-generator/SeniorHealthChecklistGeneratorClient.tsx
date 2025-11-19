'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function SeniorHealthChecklistGeneratorClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [age, setAge] = useState<string>('');
  const [result, setResult] = useState<{
    checklist: Array<{ category: string; items: string[] }>;
    recommendations: string[];
  } | null>(null);

  const generateChecklist = () => {
    const ageNum = parseFloat(age);
    if (!ageNum || ageNum <= 0) {
      alert('Please enter a valid age');
      return;
    }

    const checklist: Array<{ category: string; items: string[] }> = [];
    const recommendations: string[] = [];

    checklist.push({
      category: 'Veterinary Care',
      items: [
        'Semi-annual veterinary exams (every 6 months)',
        'Annual blood work (CBC, chemistry panel)',
        'Urinalysis',
        'Blood pressure monitoring',
        'Thyroid function testing',
        'Dental exam and cleaning (as needed)',
        'Weight monitoring',
        'Body condition scoring',
      ]
    });

    checklist.push({
      category: 'Daily Monitoring',
      items: [
        'Appetite and water intake',
        'Energy level and activity',
        'Mobility and stiffness',
        'Changes in behavior',
        'Lumps or bumps',
        'Coughing or breathing changes',
        'Vision and hearing',
        'Bathroom habits',
      ]
    });

    checklist.push({
      category: 'Home Environment',
      items: [
        'Comfortable, supportive bedding',
        'Easy access to food and water',
        'Ramps or steps for furniture access',
        'Non-slip surfaces (rugs, mats)',
        'Warm, draft-free sleeping area',
        'Easy access to litter box (cats)',
        'Reduced stairs or obstacles',
        'Good lighting for vision-impaired pets',
      ]
    });

    checklist.push({
      category: 'Diet & Nutrition',
      items: [
        'Senior-specific diet (if recommended)',
        'Appropriate calorie intake for activity level',
        'High-quality, easily digestible protein',
        'Joint-supporting nutrients',
        'Adequate hydration',
        'Supplements (as recommended by vet)',
        'Regular meal schedule',
        'Monitor for weight changes',
      ]
    });

    checklist.push({
      category: 'Exercise & Activity',
      items: [
        'Regular, low-impact exercise',
        'Shorter, more frequent walks',
        'Mental stimulation (puzzles, toys)',
        'Gentle play activities',
        'Monitor for fatigue or pain',
        'Adjust activity based on ability',
        'Physical therapy (if recommended)',
      ]
    });

    checklist.push({
      category: 'Grooming & Hygiene',
      items: [
        'Regular brushing (coat care)',
        'Nail trimming (may need more frequent)',
        'Dental care (brushing, dental chews)',
        'Ear cleaning (as needed)',
        'Bathing (as needed, with gentle products)',
        'Check for skin issues',
        'Monitor for lumps or growths',
      ]
    });

    checklist.push({
      category: 'Medications & Supplements',
      items: [
        'Administer medications as prescribed',
        'Joint supplements (glucosamine, chondroitin)',
        'Omega-3 fatty acids',
        'Pain management (if needed)',
        'Monitor for medication side effects',
        'Keep medication schedule consistent',
        'Regular medication reviews with vet',
      ]
    });

    recommendations.push(`Your ${ageNum}-year-old ${petType} is considered senior`);
    recommendations.push('Senior pets need more frequent veterinary care (every 6 months)');
    recommendations.push('Monitor for common senior health issues: arthritis, kidney disease, heart disease, cognitive decline');
    recommendations.push('Be patient with changes in behavior or mobility');
    recommendations.push('Quality of life is important - discuss with your veterinarian');
    recommendations.push('Keep detailed records of health changes and veterinary visits');

    setResult({ checklist, recommendations });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Senior Health Checklist Generator', href: '/tools/senior-health-checklist-generator' }
          ]} />
          
          <div className="text-center mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Senior Health Checklist Generator
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Generate a comprehensive health checklist for your senior pet
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
                  Pet Age (years)
                </label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="e.g., 10"
                  min="1"
                  max="25"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <button
                onClick={generateChecklist}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Generate Health Checklist
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Senior Pet Health Checklist</h2>
              
              <div className="space-y-4 mb-6">
                {result.checklist.map((category, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">{category.category}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <input type="checkbox" className="mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
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
              <strong>Note:</strong> This checklist provides general guidelines. Senior pets have individual needs. Work closely with your veterinarian to develop a personalized care plan for your senior pet.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

