'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function BestShampooSelectorClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [coatType, setCoatType] = useState<string>('normal');
  const [skinCondition, setSkinCondition] = useState<string>('normal');
  const [age, setAge] = useState<string>('adult');
  const [result, setResult] = useState<{
    shampooType: string;
    recommendations: Array<{ type: string; description: string; benefits: string[] }>;
    ingredients: string[];
    warnings: string[];
  } | null>(null);

  const selectShampoo = () => {
    const recommendations: Array<{ type: string; description: string; benefits: string[] }> = [];
    const ingredients: string[] = [];
    const warnings: string[] = [];
    let shampooType = '';

    // Base recommendation
    if (skinCondition === 'normal' && coatType === 'normal') {
      shampooType = 'General Purpose Shampoo';
      recommendations.push({
        type: 'General Purpose Shampoo',
        description: 'Mild, pH-balanced shampoo suitable for regular use',
        benefits: ['Cleans effectively', 'Maintains natural oils', 'Safe for frequent use', 'Suitable for most pets']
      });
      ingredients.push('Mild surfactants', 'pH-balanced formula', 'Natural moisturizers');
    }

    // Skin condition-based
    if (skinCondition === 'sensitive' || skinCondition === 'dry') {
      shampooType = 'Hypoallergenic/Moisturizing Shampoo';
      recommendations.push({
        type: 'Hypoallergenic/Moisturizing Shampoo',
        description: 'Gentle formula for sensitive or dry skin',
        benefits: ['Reduces irritation', 'Adds moisture', 'Fragrance-free options', 'Soothes dry skin']
      });
      ingredients.push('Oatmeal', 'Aloe vera', 'Chamomile', 'No harsh chemicals', 'Fragrance-free');
      warnings.push('Avoid shampoos with strong fragrances or harsh detergents');
    }

    if (skinCondition === 'oily') {
      recommendations.push({
        type: 'Clarifying Shampoo',
        description: 'Deep-cleansing formula for oily coats',
        benefits: ['Removes excess oil', 'Deep cleans', 'Prevents greasy buildup']
      });
      ingredients.push('Tea tree oil', 'Salicylic acid', 'Natural degreasing agents');
    }

    if (skinCondition === 'itchy' || skinCondition === 'allergies') {
      recommendations.push({
        type: 'Medicated/Soothing Shampoo',
        description: 'Formulated to relieve itching and skin irritation',
        benefits: ['Reduces itching', 'Soothes irritated skin', 'Anti-inflammatory properties']
      });
      ingredients.push('Oatmeal', 'Hydrocortisone (if prescribed)', 'Aloe vera', 'Colloidal silver');
      warnings.push('Consult veterinarian for severe skin conditions');
    }

    // Coat type-based
    if (coatType === 'white' || coatType === 'light') {
      recommendations.push({
        type: 'Whitening/Brightening Shampoo',
        description: 'Enhances white and light-colored coats',
        benefits: ['Removes yellowing', 'Brightens white coats', 'Prevents staining']
      });
      ingredients.push('Optical brighteners', 'Blue or purple tinting agents');
    }

    if (coatType === 'long' || coatType === 'curly') {
      recommendations.push({
        type: 'Conditioning Shampoo',
        description: 'Adds moisture and prevents matting',
        benefits: ['Prevents tangles', 'Adds shine', 'Makes brushing easier', 'Reduces static']
      });
      ingredients.push('Conditioning agents', 'Silicone derivatives', 'Natural oils');
    }

    if (coatType === 'double') {
      recommendations.push({
        type: 'Deshedding Shampoo',
        description: 'Helps reduce shedding in double-coated breeds',
        benefits: ['Reduces shedding', 'Loosens dead undercoat', 'Improves coat health']
      });
      ingredients.push('Omega-3 fatty acids', 'Conditioning agents', 'Natural oils');
    }

    // Age-based
    if (age === 'puppy' || age === 'kitten') {
      recommendations.push({
        type: 'Puppy/Kitten Shampoo',
        description: 'Extra gentle formula for young pets',
        benefits: ['Tear-free formula', 'Extra mild', 'Safe for frequent use', 'Suitable for sensitive skin']
      });
      ingredients.push('Mild surfactants', 'No harsh chemicals', 'Tear-free formula');
      warnings.push('Always use puppy/kitten-specific shampoos for young pets');
    }

    if (age === 'senior') {
      recommendations.push({
        type: 'Gentle/Senior Shampoo',
        description: 'Mild formula for aging skin',
        benefits: ['Extra gentle', 'Moisturizing', 'Reduces skin irritation']
      });
      ingredients.push('Oatmeal', 'Aloe vera', 'Natural moisturizers');
    }

    // General recommendations
    warnings.push('Always use pet-specific shampoos - human shampoos can be harmful');
    warnings.push('Avoid getting shampoo in eyes, ears, or mouth');
    warnings.push('Rinse thoroughly to prevent skin irritation');
    warnings.push('Consult veterinarian for persistent skin issues');

    setResult({ shampooType, recommendations, ingredients, warnings });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Best Shampoo Selector', href: '/tools/best-shampoo-selector' }
          ]} />
          
          <div className="text-center mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Best Shampoo Selector
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Find the best shampoo for your pet based on coat type, skin condition, and age
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
                  Coat Type/Color
                </label>
                <select
                  value={coatType}
                  onChange={(e) => setCoatType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="normal">Normal</option>
                  <option value="white">White/Light</option>
                  <option value="long">Long</option>
                  <option value="curly">Curly</option>
                  <option value="double">Double Coat</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Skin Condition
                </label>
                <select
                  value={skinCondition}
                  onChange={(e) => setSkinCondition(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="normal">Normal</option>
                  <option value="sensitive">Sensitive</option>
                  <option value="dry">Dry</option>
                  <option value="oily">Oily</option>
                  <option value="itchy">Itchy</option>
                  <option value="allergies">Allergies</option>
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

              <button
                onClick={selectShampoo}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Find Best Shampoo
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Shampoo Recommendations</h2>
              
              <div className="space-y-4 mb-6">
                {result.recommendations.map((rec, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">{rec.type}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{rec.description}</p>
                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Benefits:</p>
                      <ul className="space-y-1">
                        {rec.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-400">• {benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {result.ingredients.length > 0 && (
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Key Ingredients to Look For:</h3>
                  <div className="flex flex-wrap gap-2">
                    {result.ingredients.map((ing, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h3 className="font-semibold mb-2 text-yellow-900 dark:text-yellow-200">Important Notes:</h3>
                <ul className="space-y-1">
                  {result.warnings.map((warning, index) => (
                    <li key={index} className="text-sm text-yellow-800 dark:text-yellow-200">• {warning}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> Always use pet-specific shampoos. Human shampoos have different pH levels and can cause skin irritation. For persistent skin issues, consult your veterinarian who may recommend medicated shampoos.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

