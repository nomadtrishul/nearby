'use client';

import { useState } from 'react';
import Image from 'next/image';
import Loader from "@/components/Loader";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Download, X, Facebook, Instagram, MessageCircle, Send, Linkedin, Copy, Check } from "lucide-react";
import Breadcrumb from '@/components/Breadcrumb';

const safeFoods = {
  dog: [
    { name: 'Cooked Chicken', safety: 'safe', notes: 'Plain, boneless, skinless. Great source of protein. Remove all bones.', serving: 'Small amounts as treat' },
    { name: 'Cooked Turkey', safety: 'safe', notes: 'Plain, boneless, skinless. Good protein source.', serving: 'Small amounts as treat' },
    { name: 'Salmon', safety: 'safe', notes: 'Cooked, boneless. Rich in omega-3 fatty acids. Never raw.', serving: 'Small amounts, 1-2 times per week' },
    { name: 'Carrots', safety: 'safe', notes: 'Raw or cooked. Great for dental health. Low calorie.', serving: 'Small pieces as treat' },
    { name: 'Green Beans', safety: 'safe', notes: 'Plain, cooked or raw. Low calorie, high fiber.', serving: 'Small amounts' },
    { name: 'Apples', safety: 'safe', notes: 'Remove seeds and core. Good source of vitamins.', serving: 'Small slices, no seeds' },
    { name: 'Blueberries', safety: 'safe', notes: 'Rich in antioxidants. Low calorie treat.', serving: 'A few berries as treat' },
    { name: 'Pumpkin', safety: 'safe', notes: 'Plain, cooked. Good for digestion. Not pumpkin pie filling.', serving: '1-2 tablespoons' },
    { name: 'Sweet Potatoes', safety: 'safe', notes: 'Cooked, plain. Rich in fiber and vitamins.', serving: 'Small amounts, cooked' },
    { name: 'Rice', safety: 'safe', notes: 'Plain, cooked white or brown rice. Good for upset stomachs.', serving: 'Small amounts mixed with food' },
    { name: 'Oatmeal', safety: 'safe', notes: 'Plain, cooked. Good source of fiber. No sugar or flavorings.', serving: 'Small amounts' },
    { name: 'Peanut Butter', safety: 'safe', notes: 'Plain, unsalted. Check for xylitol - it\'s toxic!', serving: 'Small amounts as treat' },
    { name: 'Eggs', safety: 'safe', notes: 'Cooked. Excellent protein source. Never raw.', serving: '1 egg, cooked' },
    { name: 'Plain Yogurt', safety: 'safe', notes: 'Plain, no sugar or artificial sweeteners. Good probiotics.', serving: 'Small amounts' },
    { name: 'Cucumber', safety: 'safe', notes: 'Low calorie, hydrating. Good for weight management.', serving: 'Small slices' },
    { name: 'Watermelon', safety: 'safe', notes: 'Remove seeds and rind. Hydrating, low calorie.', serving: 'Small pieces, no seeds' },
    { name: 'Bananas', safety: 'safe', notes: 'High in potassium. Moderation due to sugar content.', serving: 'Small slices, occasionally' },
    { name: 'Broccoli', safety: 'safe', notes: 'Cooked or raw. High in fiber. Small amounts to avoid gas.', serving: 'Small florets' },
    { name: 'Spinach', safety: 'safe', notes: 'Cooked is better. High in nutrients. Moderation.', serving: 'Small amounts, cooked' },
    { name: 'Cheese', safety: 'moderate', notes: 'Small amounts. Many dogs are lactose intolerant. Low-fat options better.', serving: 'Very small amounts, occasionally' },
  ],
  cat: [
    { name: 'Cooked Chicken', safety: 'safe', notes: 'Plain, boneless, skinless. Excellent protein source. Remove all bones.', serving: 'Small amounts as treat' },
    { name: 'Cooked Turkey', safety: 'safe', notes: 'Plain, boneless, skinless. Good protein source.', serving: 'Small amounts as treat' },
    { name: 'Salmon', safety: 'safe', notes: 'Cooked, boneless. Rich in omega-3. Never raw or as primary food.', serving: 'Small amounts, occasionally' },
    { name: 'Tuna', safety: 'moderate', notes: 'Cooked, in water. Not as primary food - can cause mercury poisoning.', serving: 'Very small amounts, rarely' },
    { name: 'Eggs', safety: 'safe', notes: 'Cooked. Excellent protein. Never raw due to salmonella risk.', serving: 'Small amounts, cooked' },
    { name: 'Pumpkin', safety: 'safe', notes: 'Plain, cooked. Good for digestion. Not pumpkin pie filling.', serving: '1-2 teaspoons' },
    { name: 'Carrots', safety: 'safe', notes: 'Cooked, small pieces. Cats may not be interested.', serving: 'Very small amounts' },
    { name: 'Green Beans', safety: 'safe', notes: 'Cooked, plain. Low calorie option.', serving: 'Small amounts' },
    { name: 'Blueberries', safety: 'safe', notes: 'Rich in antioxidants. Most cats won\'t eat them.', serving: 'A few berries if cat likes them' },
    { name: 'Cantaloupe', safety: 'safe', notes: 'Remove rind and seeds. Some cats enjoy the sweetness.', serving: 'Small pieces' },
    { name: 'Cooked Rice', safety: 'safe', notes: 'Plain, cooked. Good for upset stomachs.', serving: 'Small amounts mixed with food' },
    { name: 'Oatmeal', safety: 'safe', notes: 'Plain, cooked. Most cats won\'t eat it.', serving: 'Small amounts if cat accepts' },
    { name: 'Plain Yogurt', safety: 'moderate', notes: 'Plain, no sugar. Many cats are lactose intolerant.', serving: 'Very small amounts, test tolerance' },
    { name: 'Cheese', safety: 'moderate', notes: 'Small amounts. Most cats are lactose intolerant.', serving: 'Very small amounts, rarely' },
    { name: 'Cooked Fish', safety: 'moderate', notes: 'Cooked, boneless. Not as primary food. Variety is important.', serving: 'Small amounts, occasionally' },
  ]
};

export default function SafeHumanFoodsCheckerClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedFood, setSelectedFood] = useState<string | null>(null);

  const foods = safeFoods[petType];
  const filteredFoods = foods.filter(food => 
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedFoodData = foods.find(f => f.name === selectedFood);

  const getSafetyColor = (safety: string) => {
    switch (safety) {
      case 'safe': return 'bg-green-500 text-white';
      case 'moderate': return 'bg-yellow-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-6xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Safe Human Foods Checker', href: '/tools/safe-human-foods-checker' }
          ]} />
          
          <div className="mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Safe Human Foods Checker – Dog & Cat Safe Foods Guide
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Use our free safe human foods checker to identify which foods are safe to share with your dog or cat. Our dog safe foods checker and cat safe foods checker help you learn proper serving sizes, preparation methods, and safety guidelines for feeding human foods to pets.
              </p>
            </div>

            {/* Tool Screenshot/Image */}
            <div className="mb-8">
              <Image 
                src="/og-image.png" 
                alt="Safe Human Foods Checker - Identify safe foods for dogs and cats"
                width={1200}
                height={630}
                className="w-full rounded-lg shadow-lg"
                loading="lazy"
                priority={false}
              />
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 dark:border-blue-800 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-2xl">ℹ️</span>
              <div>
                <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-2">Important Guidelines</h3>
                <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-1">
                  <li>• Human foods should only be given as treats, not as a replacement for pet food</li>
                  <li>• Always introduce new foods gradually and watch for allergic reactions</li>
                  <li>• Remove all bones, seeds, pits, and inedible parts before feeding</li>
                  <li>• When in doubt, consult your veterinarian</li>
                </ul>
              </div>
            </div>
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
                    setSelectedFood(null);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Search for a Food
                </label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="e.g., chicken, apples, carrots..."
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
          </div>

          {selectedFoodData && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 mb-8 border-2 border-green-200 dark:border-green-800">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedFoodData.name}</h2>
                <button
                  onClick={() => setSelectedFood(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getSafetyColor(selectedFoodData.safety)}`}>
                    {selectedFoodData.safety.toUpperCase()}
                  </span>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Notes:</h3>
                  <p className="text-gray-700 dark:text-gray-300">{selectedFoodData.notes}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Recommended Serving:</h3>
                  <p className="text-gray-700 dark:text-gray-300">{selectedFoodData.serving}</p>
                </div>
              </div>
            </div>
          )}

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Safe Human Foods for {petType === 'dog' ? 'Dogs' : 'Cats'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredFoods.map((food, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedFood(food.name)}
                  className="text-left p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-green-400 dark:hover:border-green-600 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{food.name}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getSafetyColor(food.safety)}`}>
                      {food.safety}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{food.notes}</p>
                </button>
              ))}
            </div>
          </div>

          {/* How Safe Human Foods Checker Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Safe Human Foods Checker Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our safe human foods checker provides information about which human foods are safe to share with dogs and cats. The tool includes safety ratings, proper serving sizes, preparation methods, and important notes about each food. This helps you safely incorporate human foods into your pet's diet as treats or supplements.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Safe Foods for Pets</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Safe human foods for dogs include cooked chicken, turkey, salmon, carrots, green beans, apples (without seeds), blueberries, pumpkin, and sweet potatoes. For cats, safe foods include cooked chicken, turkey, salmon, eggs, and small amounts of cooked vegetables. Always remove bones, seeds, and pits, and introduce new foods gradually.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What human foods are safe for dogs?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Safe human foods for dogs include cooked chicken, turkey, salmon, carrots, green beans, apples (without seeds), blueberries, pumpkin, sweet potatoes, rice, oatmeal, eggs (cooked), and plain yogurt. Always remove bones, seeds, and pits. Introduce new foods gradually and in moderation.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What human foods are safe for cats?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Safe human foods for cats include cooked chicken, turkey, salmon (cooked), eggs (cooked), pumpkin, carrots, green beans, and small amounts of cooked rice. Cats are obligate carnivores, so most human foods should be protein-based. Always remove bones and introduce new foods gradually.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How much human food can I give my pet?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Human foods should make up no more than 10% of your pet's daily calorie intake. The majority of their diet should be high-quality commercial pet food formulated for their specific nutritional needs. Treats and human foods should be given in moderation and as supplements, not replacements for pet food.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/toxic-foods-checker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Toxic Foods Checker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Check which foods are toxic to your pet</p>
              </a>
              <a href="/tools/feeding-portion-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Feeding Portion Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate the right portion sizes for your pet</p>
              </a>
              <a href="/tools/calorie-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Calorie Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate daily calorie needs for your pet</p>
              </a>
              <a href="/pet-health" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Health Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn more about pet health and nutrition</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This list is not exhaustive. Individual pets may have allergies or sensitivities. Always introduce new foods gradually and consult your veterinarian if you have concerns. Human foods should make up no more than 10% of your pet's daily calorie intake.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

