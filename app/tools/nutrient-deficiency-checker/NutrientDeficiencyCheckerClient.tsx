'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function NutrientDeficiencyCheckerClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [dietType, setDietType] = useState<string>('commercial');
  const [result, setResult] = useState<{
    possibleDeficiencies: Array<{ nutrient: string; symptoms: string[]; sources: string[]; recommendations: string }>;
    warnings: string[];
  } | null>(null);

  const allSymptoms = [
    'Dull coat',
    'Hair loss',
    'Dry/flaky skin',
    'Weakness',
    'Lethargy',
    'Poor growth',
    'Weight loss',
    'Muscle wasting',
    'Bone deformities',
    'Dental problems',
    'Vision problems',
    'Neurological issues',
    'Anemia',
    'Poor wound healing',
  ];

  const toggleSymptom = (symptom: string) => {
    if (symptoms.includes(symptom)) {
      setSymptoms(symptoms.filter(s => s !== symptom));
    } else {
      setSymptoms([...symptoms, symptom]);
    }
  };

  const checkDeficiencies = () => {
    const possibleDeficiencies: Array<{ nutrient: string; symptoms: string[]; sources: string[]; recommendations: string }> = [];
    const warnings: string[] = [];

    // Protein deficiency
    if (symptoms.some(s => ['Poor growth', 'Muscle wasting', 'Weight loss', 'Weakness'].includes(s))) {
      possibleDeficiencies.push({
        nutrient: 'Protein',
        symptoms: ['Poor growth', 'Muscle wasting', 'Weight loss', 'Weakness'],
        sources: ['Meat', 'Fish', 'Eggs', 'Dairy'],
        recommendations: 'Ensure adequate high-quality protein in diet (18-25% for dogs, 26-40% for cats)'
      });
    }

    // Omega-3 deficiency
    if (symptoms.some(s => ['Dull coat', 'Dry/flaky skin', 'Hair loss'].includes(s))) {
      possibleDeficiencies.push({
        nutrient: 'Omega-3 Fatty Acids',
        symptoms: ['Dull coat', 'Dry/flaky skin', 'Hair loss'],
        sources: ['Fish oil', 'Salmon', 'Flaxseed', 'Chia seeds'],
        recommendations: 'Add omega-3 supplements or increase fish in diet'
      });
    }

    // Calcium deficiency
    if (symptoms.some(s => ['Bone deformities', 'Dental problems', 'Weakness'].includes(s))) {
      possibleDeficiencies.push({
        nutrient: 'Calcium',
        symptoms: ['Bone deformities', 'Dental problems', 'Weakness'],
        sources: ['Bone meal', 'Dairy', 'Calcium supplements'],
        recommendations: 'Ensure proper calcium:phosphorus ratio (1.2:1 to 2:1)'
      });
    }

    // Vitamin A deficiency
    if (symptoms.some(s => ['Vision problems', 'Dry/flaky skin', 'Poor growth'].includes(s))) {
      possibleDeficiencies.push({
        nutrient: 'Vitamin A',
        symptoms: ['Vision problems', 'Dry/flaky skin', 'Poor growth'],
        sources: ['Liver', 'Eggs', 'Carrots', 'Sweet potatoes'],
        recommendations: 'Add vitamin A-rich foods or supplements (be careful with cats - can be toxic in excess)'
      });
    }

    // B-vitamin deficiency
    if (symptoms.some(s => ['Lethargy', 'Anemia', 'Neurological issues'].includes(s))) {
      possibleDeficiencies.push({
        nutrient: 'B Vitamins',
        symptoms: ['Lethargy', 'Anemia', 'Neurological issues'],
        sources: ['Meat', 'Organ meats', 'Whole grains', 'B-complex supplements'],
        recommendations: 'Ensure adequate B-vitamins in diet or consider B-complex supplement'
      });
    }

    // Iron deficiency
    if (symptoms.includes('Anemia')) {
      possibleDeficiencies.push({
        nutrient: 'Iron',
        symptoms: ['Anemia', 'Weakness', 'Lethargy'],
        sources: ['Red meat', 'Liver', 'Iron supplements'],
        recommendations: 'Add iron-rich foods or supplements (consult vet for proper dosage)'
      });
    }

    // Zinc deficiency
    if (symptoms.some(s => ['Poor wound healing', 'Hair loss', 'Skin problems'].includes(s))) {
      possibleDeficiencies.push({
        nutrient: 'Zinc',
        symptoms: ['Poor wound healing', 'Hair loss', 'Skin problems'],
        sources: ['Meat', 'Seafood', 'Zinc supplements'],
        recommendations: 'Ensure adequate zinc in diet'
      });
    }

    warnings.push('⚠️ These are potential deficiencies based on symptoms. Always consult your veterinarian for proper diagnosis.');
    warnings.push('⚠️ Many symptoms can indicate multiple conditions - professional evaluation is essential');
    warnings.push('⚠️ Do not supplement without veterinary guidance - some nutrients can be toxic in excess');

    if (dietType === 'homemade') {
      warnings.push('⚠️ Homemade diets are more prone to nutrient deficiencies - consult a veterinary nutritionist');
    }

    setResult({ possibleDeficiencies, warnings });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Nutrient-Deficiency Checker', href: '/tools/nutrient-deficiency-checker' }
          ]} />
          
          <div className="text-center mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Nutrient-Deficiency Checker
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Identify potential nutrient deficiencies based on your pet's symptoms
            </p>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-800 rounded-xl p-6 mb-8">
            <p className="text-sm text-red-800 dark:text-red-300">
              <strong>Important:</strong> This tool is for informational purposes only. Always consult your veterinarian for proper diagnosis and treatment. Do not supplement without veterinary guidance.
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
                  Diet Type
                </label>
                <select
                  value={dietType}
                  onChange={(e) => setDietType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="commercial">Commercial Food</option>
                  <option value="homemade">Homemade Food</option>
                  <option value="raw">Raw Diet</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  Select Symptoms (click to select/deselect)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-64 overflow-y-auto p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  {allSymptoms.map((symptom, index) => (
                    <button
                      key={index}
                      onClick={() => toggleSymptom(symptom)}
                      className={`p-2 text-left rounded-lg border-2 text-sm transition-colors ${
                        symptoms.includes(symptom)
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {symptom}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={checkDeficiencies}
                disabled={symptoms.length === 0}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Check for Deficiencies
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Potential Nutrient Deficiencies</h2>
              
              {result.possibleDeficiencies.length > 0 ? (
                <div className="space-y-4 mb-6">
                  {result.possibleDeficiencies.map((def, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">{def.nutrient}</h3>
                      <div className="mb-2">
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Associated Symptoms:</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{def.symptoms.join(', ')}</p>
                      </div>
                      <div className="mb-2">
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Food Sources:</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{def.sources.join(', ')}</p>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                        <p className="text-sm text-blue-800 dark:text-blue-200"><strong>Recommendation:</strong> {def.recommendations}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                  <p className="text-gray-700 dark:text-gray-300">No obvious nutrient deficiencies identified based on selected symptoms. However, consult your veterinarian if symptoms persist.</p>
                </div>
              )}

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h3 className="font-semibold mb-2 text-yellow-900 dark:text-yellow-200">Important Warnings:</h3>
                <ul className="space-y-1">
                  {result.warnings.map((warning, index) => (
                    <li key={index} className="text-sm text-yellow-800 dark:text-yellow-200">{warning}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This tool provides general information only. Nutrient deficiencies require proper veterinary diagnosis through blood tests and physical examination. Never supplement without veterinary guidance.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

