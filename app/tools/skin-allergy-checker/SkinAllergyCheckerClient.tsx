'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export default function SkinAllergyCheckerClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [result, setResult] = useState<{
    possibleAllergies: Array<{ type: string; description: string; triggers: string[]; management: string[] }>;
    recommendations: string[];
  } | null>(null);

  const allSymptoms = [
    'Excessive scratching',
    'Licking paws',
    'Chewing on skin',
    'Red/inflamed skin',
    'Hair loss',
    'Hot spots',
    'Ear infections',
    'Skin infections',
    'Rash',
    'Bumps/hives',
    'Dry/flaky skin',
    'Odor',
    'Discharge from skin',
  ];

  const toggleSymptom = (symptom: string) => {
    if (symptoms.includes(symptom)) {
      setSymptoms(symptoms.filter(s => s !== symptom));
    } else {
      setSymptoms([...symptoms, symptom]);
    }
  };

  const checkAllergies = () => {
    const possibleAllergies: Array<{ type: string; description: string; triggers: string[]; management: string[] }> = [];
    const recommendations: string[] = [];

    // Food allergies
    if (symptoms.some(s => ['Excessive scratching', 'Licking paws', 'Ear infections', 'Skin infections'].includes(s))) {
      possibleAllergies.push({
        type: 'Food Allergy',
        description: 'Allergic reaction to specific food ingredients (common: chicken, beef, dairy, wheat)',
        triggers: ['Chicken', 'Beef', 'Dairy', 'Wheat', 'Soy', 'Corn', 'Eggs'],
        management: [
          'Elimination diet trial (8-12 weeks)',
          'Switch to novel protein or hydrolyzed protein diet',
          'Avoid treats and table scraps during trial',
          'Work with veterinarian for proper diagnosis'
        ]
      });
    }

    // Environmental allergies
    if (symptoms.some(s => ['Excessive scratching', 'Red/inflamed skin', 'Hair loss', 'Hot spots'].includes(s))) {
      possibleAllergies.push({
        type: 'Environmental Allergy (Atopy)',
        description: 'Allergic reaction to environmental allergens (pollen, dust mites, mold)',
        triggers: ['Pollen', 'Dust mites', 'Mold', 'Grass', 'Weeds', 'Trees'],
        management: [
          'Allergy testing (skin or blood test)',
          'Avoidance of triggers when possible',
          'Antihistamines (as prescribed by vet)',
          'Immunotherapy (allergy shots)',
          'Regular bathing with hypoallergenic shampoo',
          'Omega-3 fatty acid supplements'
        ]
      });
    }

    // Flea allergy
    if (symptoms.some(s => ['Excessive scratching', 'Hair loss', 'Hot spots', 'Red/inflamed skin'].includes(s))) {
      possibleAllergies.push({
        type: 'Flea Allergy Dermatitis',
        description: 'Severe allergic reaction to flea saliva',
        triggers: ['Flea bites', 'Flea saliva'],
        management: [
          'Strict flea control (year-round prevention)',
          'Treat all pets in household',
          'Treat environment (home and yard)',
          'Regular grooming and flea combing',
          'Medications to control itching (as prescribed)'
        ]
      });
    }

    // Contact allergy
    if (symptoms.some(s => ['Rash', 'Red/inflamed skin', 'Bumps/hives'].includes(s))) {
      possibleAllergies.push({
        type: 'Contact Allergy',
        description: 'Allergic reaction to substances that touch the skin',
        triggers: ['Shampoos', 'Cleaning products', 'Fabrics', 'Plastics', 'Plants'],
        management: [
          'Identify and remove the allergen',
          'Use hypoallergenic products',
          'Wash bedding with fragrance-free detergent',
          'Avoid known irritants'
        ]
      });
    }

    recommendations.push('Consult your veterinarian for proper diagnosis');
    recommendations.push('Skin allergies often require veterinary testing to identify the specific allergen');
    recommendations.push('Treatment may include medications, dietary changes, or immunotherapy');
    recommendations.push('Keep a symptom diary to help identify triggers');
    recommendations.push('Do not use human allergy medications without veterinary approval');

    setResult({ possibleAllergies, recommendations });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Skin Allergy Checker', href: '/tools/skin-allergy-checker' }
          ]} />
          
        <div className="mb-8 sm:mb-10 mt-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Skin Allergy Checker – Dog & Cat Skin Allergy Symptom Guide
          </h1>
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Use our skin allergy checker to review your pet's symptoms and identify whether food, environmental, flea, or contact allergies might be involved. This tool helps you prepare for vet visits with a list of potential triggers and management steps.
            </p>
          </div>

          {/* Tool Screenshot/Image */}
          <div className="mb-8">
            <Image
              src="/og-image.png"
              alt="Skin Allergy Checker - Identify pet skin allergy symptoms"
              width={1200}
              height={630}
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
              priority={false}
            />
          </div>
        </div>

          <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-800 rounded-xl p-6 mb-8">
            <p className="text-sm text-red-800 dark:text-red-300">
              <strong>Note:</strong> This tool is for informational purposes only. Always consult your veterinarian for proper diagnosis and treatment of skin allergies.
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
                  onChange={(e) => {
                    setPetType(e.target.value as 'dog' | 'cat');
                    setSymptoms([]);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
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
                onClick={checkAllergies}
                disabled={symptoms.length === 0}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Check for Allergies
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Possible Allergies</h2>
              
              {result.possibleAllergies.length > 0 ? (
                <div className="space-y-4 mb-6">
                  {result.possibleAllergies.map((allergy, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">{allergy.type}</h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{allergy.description}</p>
                      <div className="mb-3">
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Common Triggers:</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{allergy.triggers.join(', ')}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Management:</p>
                        <ul className="space-y-1">
                          {allergy.management.map((item, idx) => (
                            <li key={idx} className="text-sm text-gray-600 dark:text-gray-400">• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                  <p className="text-gray-700 dark:text-gray-300">Based on selected symptoms, consult your veterinarian for proper diagnosis. Skin issues can have many causes beyond allergies.</p>
                </div>
              )}

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

          {/* How Skin Allergy Checker Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Skin Allergy Checker Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Select the symptoms your pet is experiencing. The tool matches those symptoms to typical patterns of food, environmental, flea, or contact allergies and suggests likely categories with management tips to discuss with your veterinarian.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Common Allergy Triggers</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Food proteins (chicken, beef, dairy), pollens, dust mites, fleas, cleaning products, and fabrics are common culprits. Seasonal itching points to environmental triggers, while year-round symptoms may indicate food allergies.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What are the most common types of skin allergies in pets?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Food allergies, environmental allergies (atopy), flea allergy dermatitis, and contact allergies. Each requires different testing and treatment.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do I know if my pet has a skin allergy?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Watch for persistent itching, paw licking, hot spots, recurrent ear infections, hair loss, or inflamed skin. Veterinary evaluation is required for diagnosis.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How are skin allergies treated?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Treatment depends on the allergy type and may include elimination diets, antihistamines, immunotherapy, strict flea control, medicated baths, or prescription medications. Always work with your veterinarian.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/symptom-checker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">General Symptom Checker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Review other health concerns</p>
              </a>
              <a href="/tools/toxic-foods-checker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Toxic Foods Checker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Ensure treats aren’t causing issues</p>
              </a>
              <a href="/tools/dental-health-score-tool" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Dental Health Score Tool</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Check for oral causes of discomfort</p>
              </a>
              <a href="/pet-health" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Health Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn more about allergy care</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This tool provides general information. Skin allergies require proper veterinary diagnosis through testing. Treatment should be supervised by a veterinarian.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

