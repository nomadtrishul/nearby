'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function MultivitaminNeedsAnalyzerClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [age, setAge] = useState<string>('adult');
  const [dietType, setDietType] = useState<string>('commercial');
  const [healthConditions, setHealthConditions] = useState<string[]>([]);
  const [result, setResult] = useState<{
    needsMultivitamin: boolean;
    recommendedVitamins: Array<{ vitamin: string; benefit: string; dosage: string; notes: string }>;
    warnings: string[];
  } | null>(null);

  const conditions = [
    'Homemade Diet',
    'Raw Diet',
    'Picky Eater',
    'Recovery from Illness',
    'Pregnancy/Nursing',
    'Joint Issues',
    'Skin/Coat Problems',
    'Digestive Issues',
    'None'
  ];

  const toggleCondition = (condition: string) => {
    if (condition === 'None') {
      setHealthConditions(['None']);
    } else {
      setHealthConditions(prev => {
        const filtered = prev.filter(c => c !== 'None');
        if (prev.includes(condition)) {
          return filtered.filter(c => c !== condition);
        } else {
          return [...filtered, condition];
        }
      });
    }
  };

  const analyzeNeeds = () => {
    let needsMultivitamin = false;
    const recommendedVitamins: Array<{ vitamin: string; benefit: string; dosage: string; notes: string }> = [];
    const warnings: string[] = [];

    // Determine if multivitamin is needed
    if (dietType === 'homemade' || dietType === 'raw' || healthConditions.includes('Homemade Diet') || healthConditions.includes('Raw Diet')) {
      needsMultivitamin = true;
      recommendedVitamins.push({
        vitamin: 'Complete Multivitamin',
        benefit: 'Ensures all essential vitamins and minerals are provided',
        dosage: 'As directed by veterinarian or product label',
        notes: 'Essential for homemade/raw diets - commercial diets are complete'
      });
    }

    // Age-based needs
    if (age === 'senior') {
      recommendedVitamins.push({
        vitamin: 'Vitamin E',
        benefit: 'Antioxidant, supports immune system',
        dosage: 'As directed by veterinarian',
        notes: 'Important for aging pets'
      });
      recommendedVitamins.push({
        vitamin: 'Vitamin C',
        benefit: 'Antioxidant, supports immune system',
        dosage: 'As directed by veterinarian',
        notes: 'May help with cognitive function'
      });
    }

    // Condition-based
    if (healthConditions.includes('Joint Issues')) {
      recommendedVitamins.push({
        vitamin: 'Glucosamine & Chondroitin',
        benefit: 'Supports joint health',
        dosage: 'As directed by product label',
        notes: 'Not technically a vitamin but important supplement'
      });
    }

    if (healthConditions.includes('Skin/Coat Problems')) {
      recommendedVitamins.push({
        vitamin: 'Biotin',
        benefit: 'Supports healthy skin and coat',
        dosage: 'As directed by veterinarian',
        notes: 'Often included in skin/coat supplements'
      });
      recommendedVitamins.push({
        vitamin: 'Omega-3 Fatty Acids',
        benefit: 'Improves skin and coat condition',
        dosage: '20-30mg per kg body weight daily',
        notes: 'Fish oil is most effective'
      });
    }

    if (healthConditions.includes('Pregnancy/Nursing')) {
      recommendedVitamins.push({
        vitamin: 'Prenatal Multivitamin',
        benefit: 'Supports pregnancy and nursing',
        dosage: 'As directed by veterinarian',
        notes: 'Essential during pregnancy and nursing'
      });
      recommendedVitamins.push({
        vitamin: 'Calcium',
        benefit: 'Supports bone development in puppies/kittens',
        dosage: 'As directed by veterinarian',
        notes: 'Important but must be balanced with phosphorus'
      });
    }

    if (petType === 'cat' && (dietType === 'homemade' || healthConditions.includes('Homemade Diet'))) {
      recommendedVitamins.push({
        vitamin: 'Taurine',
        benefit: 'Essential amino acid for cats - prevents heart disease and blindness',
        dosage: 'As directed by veterinarian',
        notes: 'CRITICAL for cats - must be supplemented in homemade diets'
      });
    }

    // General recommendations
    if (dietType === 'commercial' && healthConditions.length === 0) {
      warnings.push('Pets on complete commercial diets typically do not need multivitamins');
      warnings.push('Commercial diets are formulated to be nutritionally complete');
      warnings.push('Adding vitamins without need can lead to toxicity');
    }

    warnings.push('⚠️ Always consult your veterinarian before adding vitamins or supplements');
    warnings.push('⚠️ More is not always better - some vitamins can be toxic in excess');
    warnings.push('⚠️ Use pet-specific vitamins - human vitamins can be harmful');
    warnings.push('⚠️ Quality matters - choose reputable brands');

    setResult({ needsMultivitamin, recommendedVitamins, warnings });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Multivitamin Needs Analyzer', href: '/tools/multivitamin-needs-analyzer' }
          ]} />
          
          <div className="text-center mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Multivitamin Needs Analyzer
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Determine if your pet needs multivitamins or specific vitamin supplements
            </p>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-800 rounded-xl p-6 mb-8">
            <p className="text-sm text-red-800 dark:text-red-300">
              <strong>Important:</strong> Always consult your veterinarian before adding vitamins or supplements. Some vitamins can be toxic in excess, and pets on complete commercial diets typically do not need additional vitamins.
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
                  Age
                </label>
                <select
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="puppy">Puppy/Kitten</option>
                  <option value="adult">Adult</option>
                  <option value="senior">Senior</option>
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
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Special Circumstances (select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {conditions.map((condition) => (
                    <button
                      key={condition}
                      onClick={() => toggleCondition(condition)}
                      className={`p-2 rounded-lg border-2 text-sm ${
                        healthConditions.includes(condition)
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                          : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300'
                      }`}
                    >
                      {condition}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={analyzeNeeds}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Analyze Vitamin Needs
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Vitamin Needs Analysis</h2>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Multivitamin Needed?</div>
                  <div className={`text-3xl font-bold ${
                    result.needsMultivitamin ? 'text-orange-600 dark:text-orange-400' : 'text-green-600 dark:text-green-400'
                  }`}>
                    {result.needsMultivitamin ? 'Yes' : 'Likely No'}
                  </div>
                </div>
              </div>

              {result.recommendedVitamins.length > 0 ? (
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Recommended Vitamins/Supplements:</h3>
                  <div className="space-y-3">
                    {result.recommendedVitamins.map((vit, index) => (
                      <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{vit.vitamin}</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-1"><strong>Benefit:</strong> {vit.benefit}</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-1"><strong>Dosage:</strong> {vit.dosage}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 italic">{vit.notes}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                  <p className="text-gray-700 dark:text-gray-300">If your pet is on a complete commercial diet and has no special circumstances, additional vitamins may not be necessary. Commercial diets are formulated to be nutritionally complete.</p>
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

          {/* How Multivitamin Needs Analyzer Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Multivitamin Needs Analyzer Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our multivitamin needs analyzer evaluates your pet's vitamin requirements based on age, diet type, and health conditions. The tool considers that pets on complete commercial diets typically receive adequate vitamins, while pets on homemade or raw diets often need supplementation. The analyzer also accounts for life stage (puppies, kittens, seniors) and specific health conditions that may increase vitamin needs.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Vitamin Needs</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Most pets on complete commercial diets do not need multivitamins, as these diets are formulated to be nutritionally complete. However, pets on homemade or raw diets typically need multivitamins to ensure all essential vitamins and minerals are provided. Senior pets, pregnant/nursing pets, and pets with specific health conditions may also benefit from targeted vitamin supplements, but always under veterinary guidance.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Do pets need multivitamins?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Most pets on complete commercial diets do not need multivitamins, as commercial diets are formulated to be nutritionally complete. However, pets on homemade or raw diets typically need multivitamins to ensure all essential vitamins and minerals are provided. Senior pets, pregnant/nursing pets, and pets with specific health conditions may also benefit from targeted vitamin supplements. Always consult your veterinarian before adding vitamins.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What vitamins do pets need?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Essential vitamins for pets include: Vitamin A (vision, skin), B vitamins (energy, nervous system), Vitamin C (antioxidant, immune system), Vitamin D (bone health), Vitamin E (antioxidant, immune system), and Vitamin K (blood clotting). Cats also require taurine, an essential amino acid. However, pets on complete commercial diets typically receive adequate vitamins. Only supplement if recommended by a veterinarian.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Can I give my pet human vitamins?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  No, you should not give your pet human vitamins. Human vitamins can be harmful to pets, as they may contain ingredients toxic to pets or incorrect dosages. Always use pet-specific vitamins and supplements, and only give them under veterinary guidance. Some vitamins can be toxic in excess, so proper dosage is critical.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/nutrient-deficiency-checker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Nutrient Deficiency Checker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Identify potential nutrient deficiencies</p>
              </a>
              <a href="/tools/calorie-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Calorie Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate daily nutritional needs</p>
              </a>
              <a href="/tools/feeding-portion-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Feeding Portion Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate proper feeding amounts</p>
              </a>
              <a href="/pet-nutrition" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Nutrition Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn about balanced pet nutrition</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This analyzer provides general guidance. Always consult your veterinarian before adding any vitamins or supplements. Pets on complete commercial diets typically do not need additional vitamins unless recommended by a veterinarian.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

