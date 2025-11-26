'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function VitaminSupplementSuggestionToolClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [age, setAge] = useState<string>('adult');
  const [dietType, setDietType] = useState<string>('commercial');
  const [healthConditions, setHealthConditions] = useState<string[]>([]);
  const [result, setResult] = useState<{
    supplements: Array<{ name: string; benefit: string; dosage: string; notes: string; priority: string }>;
    warnings: string[];
  } | null>(null);

  const conditions = [
    'Joint Issues',
    'Skin/Coat Problems',
    'Digestive Issues',
    'Heart Health',
    'Kidney Disease',
    'Dental Health',
    'Cognitive Health',
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

  const generateSuggestions = () => {
    const supplements: Array<{ name: string; benefit: string; dosage: string; notes: string; priority: string }> = [];
    const warnings: string[] = [];

    // General supplements
    if (dietType === 'homemade' || dietType === 'raw') {
      supplements.push({
        name: 'Complete Multivitamin',
        benefit: 'Ensures all essential vitamins and minerals are provided',
        dosage: 'As directed by veterinarian or product label',
        notes: 'Essential for homemade/raw diets',
        priority: 'High'
      });
    }

    // Age-based
    if (age === 'senior') {
      supplements.push({
        name: 'Omega-3 Fatty Acids (EPA/DHA)',
        benefit: 'Supports joint health, cognitive function, and reduces inflammation',
        dosage: '20-30mg per kg body weight daily',
        notes: 'Fish oil or krill oil',
        priority: 'High'
      });
      supplements.push({
        name: 'Antioxidants (Vitamins E & C)',
        benefit: 'Supports immune system and reduces oxidative stress',
        dosage: 'As directed by veterinarian',
        notes: 'Important for aging pets',
        priority: 'Moderate'
      });
    }

    // Condition-based
    if (healthConditions.includes('Joint Issues')) {
      supplements.push({
        name: 'Glucosamine & Chondroitin',
        benefit: 'Supports joint health and cartilage repair',
        dosage: 'As directed by product label or veterinarian',
        notes: 'Especially important for large breed dogs and senior pets',
        priority: 'High'
      });
      supplements.push({
        name: 'MSM (Methylsulfonylmethane)',
        benefit: 'Anti-inflammatory, supports joint health',
        dosage: 'As directed by veterinarian',
        notes: 'Often combined with glucosamine',
        priority: 'Moderate'
      });
    }

    if (healthConditions.includes('Skin/Coat Problems')) {
      supplements.push({
        name: 'Omega-3 Fatty Acids',
        benefit: 'Improves skin and coat condition, reduces inflammation',
        dosage: '20-30mg per kg body weight daily',
        notes: 'Fish oil is most effective',
        priority: 'High'
      });
      supplements.push({
        name: 'Biotin',
        benefit: 'Supports healthy skin and coat',
        dosage: 'As directed by veterinarian',
        notes: 'Often included in skin/coat supplements',
        priority: 'Moderate'
      });
    }

    if (healthConditions.includes('Digestive Issues')) {
      supplements.push({
        name: 'Probiotics',
        benefit: 'Supports healthy gut bacteria and digestion',
        dosage: 'As directed by product label',
        notes: 'Choose pet-specific probiotics',
        priority: 'High'
      });
      supplements.push({
        name: 'Digestive Enzymes',
        benefit: 'Aids in food digestion and nutrient absorption',
        dosage: 'As directed by product label',
        notes: 'May help with digestive issues',
        priority: 'Moderate'
      });
    }

    if (healthConditions.includes('Heart Health')) {
      supplements.push({
        name: 'Omega-3 Fatty Acids',
        benefit: 'Supports heart health and reduces inflammation',
        dosage: '20-30mg per kg body weight daily',
        notes: 'Consult vet for pets with heart conditions',
        priority: 'High'
      });
      supplements.push({
        name: 'Coenzyme Q10',
        benefit: 'Supports heart muscle function',
        dosage: 'As directed by veterinarian',
        notes: 'Important for pets with heart disease',
        priority: 'High'
      });
    }

    if (healthConditions.includes('Kidney Disease')) {
      supplements.push({
        name: 'Omega-3 Fatty Acids',
        benefit: 'May slow progression of kidney disease',
        dosage: 'As directed by veterinarian',
        notes: 'Must be dosed carefully for kidney patients',
        priority: 'High'
      });
      warnings.push('⚠️ Supplements for kidney disease must be approved by your veterinarian');
    }

    if (healthConditions.includes('Dental Health')) {
      supplements.push({
        name: 'Dental Chews/Enzymes',
        benefit: 'Helps reduce plaque and tartar buildup',
        dosage: 'As directed by product label',
        notes: 'Not a substitute for dental care',
        priority: 'Moderate'
      });
    }

    if (healthConditions.includes('Cognitive Health')) {
      supplements.push({
        name: 'Omega-3 Fatty Acids (DHA)',
        benefit: 'Supports brain health and cognitive function',
        dosage: '20-30mg per kg body weight daily',
        notes: 'Important for senior pets',
        priority: 'High'
      });
      supplements.push({
        name: 'Antioxidants',
        benefit: 'Reduces oxidative stress in brain',
        dosage: 'As directed by veterinarian',
        notes: 'May help with cognitive decline',
        priority: 'Moderate'
      });
    }

    // Cat-specific
    if (petType === 'cat' && dietType === 'homemade') {
      supplements.push({
        name: 'Taurine',
        benefit: 'Essential amino acid for cats - prevents heart disease and blindness',
        dosage: 'As directed by veterinarian',
        notes: 'CRITICAL for cats - must be supplemented in homemade diets',
        priority: 'Critical'
      });
    }

    warnings.push('⚠️ Always consult your veterinarian before adding supplements');
    warnings.push('⚠️ Some supplements can interact with medications');
    warnings.push('⚠️ Quality matters - choose reputable brands');
    warnings.push('⚠️ More is not always better - follow dosage instructions');

    setResult({ supplements, warnings });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'bg-red-500 text-white';
      case 'High': return 'bg-orange-500 text-white';
      case 'Moderate': return 'bg-yellow-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Vitamin & Supplement Suggestion Tool', href: '/tools/vitamin-supplement-suggestion-tool' }
          ]} />
          
          <div className="text-center mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Vitamin & Supplement Suggestion Tool
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get personalized supplement recommendations based on your pet's needs
            </p>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-800 rounded-xl p-6 mb-8">
            <p className="text-sm text-red-800 dark:text-red-300">
              <strong>Important:</strong> Always consult your veterinarian before adding any supplements to your pet's diet. Some supplements can interact with medications or be harmful if dosed incorrectly.
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
                  Health Concerns (select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
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
                onClick={generateSuggestions}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Supplement Suggestions
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Supplement Recommendations</h2>
              
              {result.supplements.length > 0 ? (
                <div className="space-y-4 mb-6">
                  {result.supplements.map((supp, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{supp.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(supp.priority)}`}>
                          {supp.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Benefit:</strong> {supp.benefit}</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Dosage:</strong> {supp.dosage}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic">{supp.notes}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                  <p className="text-gray-700 dark:text-gray-300">If your pet is on a complete commercial diet and has no specific health concerns, additional supplements may not be necessary. Consult your veterinarian if you have questions.</p>
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

          {/* How Vitamin Supplement Suggestion Tool Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Vitamin Supplement Suggestion Tool Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our vitamin supplement suggestion tool provides personalized supplement recommendations based on your pet's age, diet type, and health conditions. The tool considers that pets on complete commercial diets typically don't need additional vitamins, while pets on homemade or raw diets may need multivitamins. It also suggests condition-specific supplements such as joint health supplements, skin/coat supplements, digestive health probiotics, and antioxidants for senior pets.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Pet Supplements</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Pets on complete commercial diets typically don't need additional vitamins, as commercial diets are formulated to be nutritionally complete. However, pets on homemade or raw diets may need multivitamins. Specific supplements may be beneficial for joint health, skin/coat, digestive health, and senior pets. Always consult your veterinarian before adding supplements, as some can be toxic in excess or interact with medications. Never give human vitamins to pets.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What vitamins and supplements do pets need?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Pets on complete commercial diets typically don't need additional vitamins, as commercial diets are formulated to be nutritionally complete. However, pets on homemade or raw diets may need multivitamins. Specific supplements may be beneficial for: joint health (glucosamine, chondroitin, omega-3), skin/coat (omega-3, biotin), digestive health (probiotics), senior pets (antioxidants), and specific health conditions. Always consult your veterinarian before adding supplements, as some can be toxic in excess.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Can I give my pet human vitamins?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  No, you should not give human vitamins to pets. Human vitamins may contain ingredients toxic to pets, have incorrect dosages, or lack nutrients pets need (like taurine for cats). Always use pet-specific vitamins and supplements, and only give them under veterinary guidance. Some vitamins (like vitamin A and D) can be toxic in excess, so proper dosage is critical. Quality matters - choose reputable pet supplement brands.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">When should I give my pet supplements?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Give supplements when: 1) Recommended by your veterinarian for a specific condition; 2) Your pet is on a homemade or raw diet (may need multivitamins); 3) Your pet has a specific health need (e.g., joint supplements for arthritis, omega-3 for skin issues); 4) Your veterinarian identifies a deficiency. However, pets on complete commercial diets typically don't need additional vitamins unless recommended by a veterinarian. More is not always better - some vitamins can be toxic in excess.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/multivitamin-needs-analyzer" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Multivitamin Needs Analyzer</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Determine if supplements are needed</p>
              </a>
              <a href="/tools/nutrient-deficiency-checker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Nutrient Deficiency Checker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Identify potential deficiencies</p>
              </a>
              <a href="/tools/homemade-food-nutrition-analyzer" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Homemade Food Nutrition Analyzer</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Analyze homemade diet nutrition</p>
              </a>
              <a href="/pet-nutrition" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Nutrition Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn about balanced pet nutrition</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This tool provides general suggestions. Always consult your veterinarian before starting any supplements, especially if your pet has health conditions or is on medication.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

