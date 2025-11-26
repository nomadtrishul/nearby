'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function HomemadeFoodNutritionAnalyzerClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [ingredients, setIngredients] = useState<Array<{ name: string; amount: string; unit: string }>>([
    { name: '', amount: '', unit: 'g' }
  ]);
  const [result, setResult] = useState<{
    totalCalories: number;
    protein: number;
    fat: number;
    carbs: number;
    fiber: number;
    analysis: string[];
    warnings: string[];
  } | null>(null);

  const addIngredient = () => {
    setIngredients([...ingredients, { name: '', amount: '', unit: 'g' }]);
  };

  const removeIngredient = (index: number) => {
    if (ingredients.length > 1) {
      setIngredients(ingredients.filter((_, i) => i !== index));
    }
  };

  const updateIngredient = (index: number, field: string, value: string) => {
    const updated = [...ingredients];
    updated[index] = { ...updated[index], [field]: value };
    setIngredients(updated);
  };

  const analyzeNutrition = () => {
    // Simplified nutrition database (approximate values per 100g)
    const nutritionDB: { [key: string]: { calories: number; protein: number; fat: number; carbs: number; fiber: number } } = {
      'chicken breast': { calories: 165, protein: 31, fat: 3.6, carbs: 0, fiber: 0 },
      'ground beef': { calories: 250, protein: 26, fat: 17, carbs: 0, fiber: 0 },
      'salmon': { calories: 208, protein: 20, fat: 13, carbs: 0, fiber: 0 },
      'rice': { calories: 130, protein: 2.7, fat: 0.3, carbs: 28, fiber: 0.4 },
      'sweet potato': { calories: 86, protein: 1.6, fat: 0.1, carbs: 20, fiber: 3 },
      'carrots': { calories: 41, protein: 0.9, fat: 0.2, carbs: 10, fiber: 2.8 },
      'broccoli': { calories: 34, protein: 2.8, fat: 0.4, carbs: 7, fiber: 2.6 },
      'pumpkin': { calories: 26, protein: 1, fat: 0.1, carbs: 7, fiber: 0.5 },
      'eggs': { calories: 155, protein: 13, fat: 11, carbs: 1.1, fiber: 0 },
      'liver': { calories: 135, protein: 20, fat: 4, carbs: 3.8, fiber: 0 },
    };

    let totalCalories = 0;
    let totalProtein = 0;
    let totalFat = 0;
    let totalCarbs = 0;
    let totalFiber = 0;

    ingredients.forEach(ing => {
      const name = ing.name.toLowerCase().trim();
      const amount = parseFloat(ing.amount) || 0;
      const unit = ing.unit;
      
      // Convert to grams
      let amountG = amount;
      if (unit === 'oz') amountG = amount * 28.35;
      else if (unit === 'lbs') amountG = amount * 453.592;
      else if (unit === 'cups') amountG = amount * 120; // Approximate

      // Find matching ingredient
      const match = Object.keys(nutritionDB).find(key => name.includes(key) || key.includes(name));
      if (match) {
        const nutrition = nutritionDB[match];
        const multiplier = amountG / 100;
        totalCalories += nutrition.calories * multiplier;
        totalProtein += nutrition.protein * multiplier;
        totalFat += nutrition.fat * multiplier;
        totalCarbs += nutrition.carbs * multiplier;
        totalFiber += nutrition.fiber * multiplier;
      }
    });

    const analysis: string[] = [];
    const warnings: string[] = [];

    // Analyze for dogs
    if (petType === 'dog') {
      const proteinPercent = (totalProtein * 4 / totalCalories) * 100;
      const fatPercent = (totalFat * 9 / totalCalories) * 100;
      
      analysis.push(`Total Calories: ${Math.round(totalCalories)} kcal`);
      analysis.push(`Protein: ${Math.round(totalProtein)}g (${proteinPercent.toFixed(1)}% of calories)`);
      analysis.push(`Fat: ${Math.round(totalFat)}g (${fatPercent.toFixed(1)}% of calories)`);
      analysis.push(`Carbohydrates: ${Math.round(totalCarbs)}g`);
      analysis.push(`Fiber: ${Math.round(totalFiber)}g`);

      if (proteinPercent < 18) warnings.push('⚠️ Protein content may be too low for dogs (recommended: 18-25%)');
      if (fatPercent < 5) warnings.push('⚠️ Fat content may be too low (recommended: 5-15%)');
      if (totalFiber > 10) warnings.push('⚠️ Fiber content is high - may cause digestive issues');
    } else {
      // Cats need higher protein
      const proteinPercent = (totalProtein * 4 / totalCalories) * 100;
      const fatPercent = (totalFat * 9 / totalCalories) * 100;
      
      analysis.push(`Total Calories: ${Math.round(totalCalories)} kcal`);
      analysis.push(`Protein: ${Math.round(totalProtein)}g (${proteinPercent.toFixed(1)}% of calories)`);
      analysis.push(`Fat: ${Math.round(totalFat)}g (${fatPercent.toFixed(1)}% of calories)`);
      analysis.push(`Carbohydrates: ${Math.round(totalCarbs)}g`);
      analysis.push(`Fiber: ${Math.round(totalFiber)}g`);

      if (proteinPercent < 26) warnings.push('⚠️ Protein content too low for cats (recommended: 26-40%)');
      if (fatPercent < 9) warnings.push('⚠️ Fat content may be too low for cats (recommended: 9-15%)');
      if (totalCarbs > 10) warnings.push('⚠️ Carbohydrate content is high - cats are obligate carnivores');
    }

    warnings.push('⚠️ This is a simplified analysis. Consult a veterinary nutritionist for complete homemade diet planning.');
    warnings.push('⚠️ Homemade diets require proper supplementation (calcium, vitamins, minerals)');
    warnings.push('⚠️ Ensure all ingredients are safe for pets (no onions, garlic, etc.)');

    setResult({
      totalCalories: Math.round(totalCalories),
      protein: Math.round(totalProtein),
      fat: Math.round(totalFat),
      carbs: Math.round(totalCarbs),
      fiber: Math.round(totalFiber),
      analysis,
      warnings,
    });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Homemade Food Nutrition Analyzer', href: '/tools/homemade-food-nutrition-analyzer' }
          ]} />
          
          <div className="text-center mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Homemade Food Nutrition Analyzer
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Analyze the nutritional content of homemade pet food recipes
            </p>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-800 rounded-xl p-6 mb-8">
            <p className="text-sm text-red-800 dark:text-red-300">
              <strong>Important:</strong> This tool provides basic nutritional analysis. Homemade pet diets require careful planning and supplementation. Always consult with a veterinary nutritionist before feeding homemade diets long-term.
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
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Ingredients</h3>
                  <button
                    onClick={addIngredient}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm"
                  >
                    + Add Ingredient
                  </button>
                </div>
                <div className="space-y-3">
                  {ingredients.map((ing, index) => (
                    <div key={index} className="grid grid-cols-12 gap-2">
                      <input
                        type="text"
                        value={ing.name}
                        onChange={(e) => updateIngredient(index, 'name', e.target.value)}
                        placeholder="Ingredient name"
                        className="col-span-5 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-sm"
                      />
                      <input
                        type="number"
                        value={ing.amount}
                        onChange={(e) => updateIngredient(index, 'amount', e.target.value)}
                        placeholder="Amount"
                        className="col-span-3 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-sm"
                      />
                      <select
                        value={ing.unit}
                        onChange={(e) => updateIngredient(index, 'unit', e.target.value)}
                        className="col-span-2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-sm"
                      >
                        <option value="g">g</option>
                        <option value="oz">oz</option>
                        <option value="lbs">lbs</option>
                        <option value="cups">cups</option>
                      </select>
                      {ingredients.length > 1 && (
                        <button
                          onClick={() => removeIngredient(index)}
                          className="col-span-2 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  Common ingredients: chicken breast, ground beef, salmon, rice, sweet potato, carrots, broccoli, pumpkin, eggs, liver
                </p>
              </div>

              <button
                onClick={analyzeNutrition}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Analyze Nutrition
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Nutrition Analysis</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Calories</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{result.totalCalories}</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Protein</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{result.protein}g</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Fat</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{result.fat}g</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Carbs</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{result.carbs}g</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Fiber</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{result.fiber}g</div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Analysis:</h3>
                <ul className="space-y-1">
                  {result.analysis.map((item, index) => (
                    <li key={index} className="text-sm text-gray-700 dark:text-gray-300">• {item}</li>
                  ))}
                </ul>
              </div>

              {result.warnings.length > 0 && (
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <h3 className="font-semibold mb-2 text-yellow-900 dark:text-yellow-200">Warnings & Notes:</h3>
                  <ul className="space-y-1">
                    {result.warnings.map((warning, index) => (
                      <li key={index} className="text-sm text-yellow-800 dark:text-yellow-200">{warning}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* How Homemade Food Nutrition Analyzer Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Homemade Food Nutrition Analyzer Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our homemade food nutrition analyzer evaluates the nutritional content of homemade pet food recipes by calculating calories, protein, fat, carbohydrates, and fiber based on the ingredients and quantities you provide. The tool uses approximate nutritional values for common pet food ingredients and compares the results to recommended nutrient levels for dogs and cats. It provides warnings about potential deficiencies or imbalances.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Homemade Pet Food</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Homemade pet food can be safe if properly formulated and supplemented. However, it requires careful planning to ensure all essential nutrients, vitamins, and minerals are provided in correct amounts. Homemade diets are more prone to nutrient deficiencies or imbalances. Pets need proper protein, fat, carbohydrates, fiber, vitamins, and minerals in the right ratios. The calcium:phosphorus ratio is critical. Always consult with a board-certified veterinary nutritionist before feeding homemade diets long-term.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Is homemade pet food safe?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Homemade pet food can be safe if properly formulated and supplemented. However, it requires careful planning to ensure all essential nutrients, vitamins, and minerals are provided in correct amounts. Homemade diets are more prone to nutrient deficiencies or imbalances. Always consult with a board-certified veterinary nutritionist before feeding homemade diets long-term to ensure your pet receives complete and balanced nutrition.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What nutrients do pets need in homemade food?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Pets need: protein (18-25% for dogs, 26-40% for cats), fat (5-15% for dogs, 9-15% for cats), carbohydrates, fiber, vitamins (A, B complex, C, D, E, K), minerals (calcium, phosphorus, iron, zinc, etc.), and for cats, taurine (essential amino acid). The calcium:phosphorus ratio is critical (1.2:1 to 2:1). Homemade diets require proper supplementation to meet all nutritional needs.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What ingredients are safe for homemade pet food?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Safe ingredients include: lean meats (chicken, turkey, beef), fish (salmon, tuna), eggs, cooked grains (rice, oats), vegetables (carrots, sweet potatoes, broccoli, pumpkin), and small amounts of fruits. Always avoid toxic foods like onions, garlic, grapes, raisins, chocolate, and xylitol. Ensure all ingredients are properly cooked and prepared. Consult a veterinary nutritionist for complete recipe formulation.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/calorie-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Calorie Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate daily calorie needs</p>
              </a>
              <a href="/tools/feeding-portion-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Feeding Portion Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate proper portion sizes</p>
              </a>
              <a href="/tools/nutrient-deficiency-checker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Nutrient Deficiency Checker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Identify potential deficiencies</p>
              </a>
              <a href="/pet-nutrition" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Nutrition Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn about balanced pet nutrition</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This analyzer uses approximate nutritional values. For complete homemade diet planning, consult with a board-certified veterinary nutritionist to ensure your pet receives all necessary nutrients, vitamins, and minerals.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

