'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import Loader from '@/components/Loader';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Download, X, Facebook, Instagram, MessageCircle, Send, Linkedin, Copy, Check } from 'lucide-react';

export default function FeedingPortionCalculatorClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [weight, setWeight] = useState<string>('');
  const [weightUnit, setWeightUnit] = useState<'lbs' | 'kg'>('lbs');
  const [age, setAge] = useState<string>('adult');
  const [activityLevel, setActivityLevel] = useState<string>('moderate');
  const [spayedNeutered, setSpayedNeutered] = useState<boolean>(true);
  const [foodType, setFoodType] = useState<string>('dry');
  const [caloriesPerCup, setCaloriesPerCup] = useState<string>('350');
  const [mealsPerDay, setMealsPerDay] = useState<number>(2);
  const [treatCalories, setTreatCalories] = useState<string>('0');
  const [result, setResult] = useState<{
    dailyCalories: number;
    portionCups: number;
    portionGrams: number;
    mealBreakdown: { meal: number; cups: number; grams: number; calories: number }[];
    treatAllowance: number;
    foodCalories: number;
    recommendations: string[];
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const calculatePortion = () => {
    const weightNum = parseFloat(weight);
    const caloriesNum = parseFloat(caloriesPerCup);

    if (!weightNum || weightNum <= 0) {
      alert('Please enter a valid weight');
      return;
    }
    if (!caloriesNum || caloriesNum <= 0) {
      alert('Please enter valid calories per cup/can');
      return;
    }

    setIsLoading(true);

    // Simulate AI processing with 3-second delay
    setTimeout(() => {
      // Convert weight to kg
      const weightKg = weightUnit === 'lbs' ? weightNum * 0.453592 : weightNum;

      // Calculate RER (Resting Energy Requirement)
      const rer = 70 * Math.pow(weightKg, 0.75);

      // Calculate DER (Daily Energy Requirement) based on factors
      let activityFactor = 1.6; // Default for neutered adult

      if (age === 'puppy' || age === 'kitten') {
        activityFactor = age === 'puppy' ? 3.0 : 2.5;
      } else if (age === 'senior') {
        activityFactor = 1.2;
      } else {
        // Adult
        if (!spayedNeutered) {
          activityFactor = 1.8;
        } else {
          activityFactor = activityLevel === 'low' ? 1.4 : activityLevel === 'moderate' ? 1.6 : 2.0;
        }
      }

      const treatCaloriesNum = parseFloat(treatCalories) || 0;
      const dailyCalories = Math.round(rer * activityFactor);
      const treatAllowance = Math.round(dailyCalories * 0.1); // 10% for treats
      const foodCalories = dailyCalories - treatCaloriesNum; // Subtract treat calories from food

      // Calculate portion based on food calories (after treats)
      const portionCups = foodType === 'dry'
        ? foodCalories / caloriesNum
        : foodCalories / (caloriesNum * 0.5); // Assuming can is ~0.5 cups

      const portionGrams = portionCups * (foodType === 'dry' ? 120 : 125); // Approximate grams per cup

      // Calculate meal breakdown
      const mealBreakdown = [];
      const cupsPerMeal = portionCups / mealsPerDay;
      const gramsPerMeal = portionGrams / mealsPerDay;
      const caloriesPerMeal = foodCalories / mealsPerDay;

      for (let i = 1; i <= mealsPerDay; i++) {
        mealBreakdown.push({
          meal: i,
          cups: Math.round(cupsPerMeal * 10) / 10,
          grams: Math.round(gramsPerMeal),
          calories: Math.round(caloriesPerMeal),
        });
      }

      // Generate recommendations
      const recommendations: string[] = [];

      if (age === 'puppy' || age === 'kitten') {
        recommendations.push(`Feed ${mealsPerDay} times per day in smaller portions.`);
      } else {
        recommendations.push(`Feed ${mealsPerDay} times per day (divide daily portion evenly).`);
      }

      if (foodType === 'dry') {
        recommendations.push(`Feed approximately ${portionCups.toFixed(1)} cups per day (${cupsPerMeal.toFixed(2)} cups per meal).`);
      } else {
        recommendations.push(`Feed approximately ${portionCups.toFixed(1)} cans per day (${cupsPerMeal.toFixed(2)} cans per meal, assuming 5.5oz cans).`);
      }

      recommendations.push(`Total daily calories: ${dailyCalories} (${foodCalories} from food + ${treatCaloriesNum} from treats)`);
      recommendations.push(`Treat allowance: Up to ${treatAllowance} calories per day (10% of total)`);

      if (treatCaloriesNum > treatAllowance) {
        recommendations.push(`⚠️ Warning: Current treat calories (${treatCaloriesNum}) exceed recommended allowance. Consider reducing treats.`);
      }

      recommendations.push('Monitor your pet\'s weight and adjust portions if needed.');
      recommendations.push('Adjust meal frequency based on your pet\'s preferences and schedule.');

      setResult({
        dailyCalories,
        portionCups: Math.round(portionCups * 10) / 10,
        portionGrams: Math.round(portionGrams),
        mealBreakdown,
        treatAllowance,
        foodCalories: Math.round(foodCalories),
        recommendations,
      });
      setIsLoading(false);
    }, 3000); // 3-second delay
  };

  // Helper functions for enhanced features
  const getChartData = () => {
    if (!result) return [];

    return [
      { name: 'Food Calories', calories: result.foodCalories, color: '#3B82F6' },
      { name: 'Treat Calories', calories: parseFloat(treatCalories) || 0, color: '#F59E0B' },
      { name: 'Treat Allowance', calories: result.treatAllowance, color: '#10B981' }
    ];
  };

  const getPieData = () => {
    if (!result) return [];

    return [
      { name: 'Food', value: result.foodCalories, color: '#3B82F6' },
      { name: 'Treats', value: parseFloat(treatCalories) || 0, color: '#F59E0B' },
      { name: 'Remaining', value: Math.max(0, result.treatAllowance - (parseFloat(treatCalories) || 0)), color: '#E5E7EB' }
    ];
  };

  const getMealChartData = () => {
    if (!result) return [];

    return result.mealBreakdown.map(meal => ({
      name: `Meal ${meal.meal}`,
      calories: meal.calories,
      cups: meal.cups,
      grams: meal.grams
    }));
  };

  const downloadPDF = () => {
    if (!result) return;

    const content = `
Pet Feeding Portion Plan - NearbyPetCare.com
==========================================

Pet Details:
- Type: ${petType.charAt(0).toUpperCase() + petType.slice(1)}
- Weight: ${weight} ${weightUnit}
- Age: ${age}
- Activity Level: ${activityLevel}
- Food Type: ${foodType}
- Meals Per Day: ${mealsPerDay}

Feeding Recommendations:
- Daily Calories: ${result.dailyCalories} kcal
- Daily Portion: ${result.portionCups} cups (${result.portionGrams}g)
- Food Calories: ${result.foodCalories} kcal
- Treat Allowance: ${result.treatAllowance} kcal

Meal Breakdown:
${result.mealBreakdown.map(meal => `- Meal ${meal.meal}: ${meal.cups} cups (${meal.grams}g, ${meal.calories} kcal)`).join('\n')}

Recommendations:
${result.recommendations.map(r => `- ${r}`).join('\n')}

Generated by NearbyPetCare.com
    `.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pet-feeding-plan.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const shareOnSocial = (platform: string) => {
    if (!result) return;

    const url = window.location.href;
    const shareText = `🐾 My ${petType}'s feeding plan:
    
📊 Weight: ${weight} ${weightUnit} | Daily: ${result.portionCups} cups
🔥 Calories: ${result.dailyCalories} kcal/day
🍽️ ${mealsPerDay} meals per day | Food: ${foodType}
    
Get your personalized pet feeding plan at nearbypetcare.com! 🐕🐈`;

    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/dialog/share?app_id=966242223397117&href=${encodeURIComponent(url)}&quote=${encodeURIComponent(shareText)}`;
        break;
      case 'instagram':
        navigator.clipboard.writeText(shareText);
        setCopiedToClipboard(true);
        setTimeout(() => setCopiedToClipboard(false), 3000);
        setShowShareMenu(false);
        alert('Text copied to clipboard! Share it on Instagram with a screenshot of your results.');
        return;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + url)}`;
        break;
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(shareText)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=My ${petType} Feeding Plan&summary=${encodeURIComponent(shareText)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(shareText + ' ' + url);
        setCopiedToClipboard(true);
        setTimeout(() => setCopiedToClipboard(false), 3000);
        setShowShareMenu(false);
        return;
      default:
        return;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
    setShowShareMenu(false);
  };

  const PetIcon = ({ type, size = 'medium' }: { type: 'dog' | 'cat', size?: 'small' | 'medium' | 'large' }) => {
    const sizeClass = size === 'small' ? 'w-8 h-8' : size === 'large' ? 'w-16 h-16' : 'w-12 h-12';
    return (
      <div className={`${sizeClass} flex items-center justify-center`}>
        {type === 'dog' ? (
          <span className="text-4xl">🐕</span>
        ) : (
          <span className="text-4xl">🐈</span>
        )}
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Feeding Portion Calculator', href: '/tools/feeding-portion-calculator' }
          ]} />

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Pet Feeding Portion Calculator – Dog & Cat Food Portion Size Calculator
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Use our free pet feeding portion calculator to determine the right amount of food for your dog or cat. Our dog food portion calculator and cat food portion calculator calculate daily portions based on weight, age, activity level, and food type with meal planning and treat allowances.
            </p>
          </div>

          {/* Tool Screenshot/Image */}
          <div className="mb-8">
            <Image
              src="/og-image.png"
              alt="Pet Feeding Portion Calculator - Calculate the right portion sizes for dogs and cats"
              width={1200}
              height={630}
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
              priority={false}
            />
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6 sm:p-8 mb-8">
            <div className="space-y-6">
              {/* Pet Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Pet Type
                </label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setPetType('dog')}
                    className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${petType === 'dog'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                  >
                    🐕 Dog
                  </button>
                  <button
                    type="button"
                    onClick={() => setPetType('cat')}
                    className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${petType === 'cat'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                  >
                    🐱 Cat
                  </button>
                </div>
              </div>

              {/* Weight */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Current Weight
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Enter weight"
                    className="flex-1 px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="0"
                    step="0.1"
                  />
                  <select
                    value={weightUnit}
                    onChange={(e) => setWeightUnit(e.target.value as 'lbs' | 'kg')}
                    className="px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="lbs">lbs</option>
                    <option value="kg">kg</option>
                  </select>
                </div>
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Age / Life Stage
                </label>
                <select
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="puppy">{petType === 'dog' ? 'Puppy (under 1 year)' : 'Kitten (under 1 year)'}</option>
                  <option value="adult">Adult (1-7 years)</option>
                  <option value="senior">Senior (7+ years)</option>
                </select>
              </div>

              {/* Activity Level */}
              {age === 'adult' && (
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Activity Level
                  </label>
                  <select
                    value={activityLevel}
                    onChange={(e) => setActivityLevel(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="low">Low (Sedentary/Indoor)</option>
                    <option value="moderate">Moderate (Regular walks/play)</option>
                    <option value="high">High (Very active/Working)</option>
                  </select>
                </div>
              )}

              {/* Spayed/Neutered */}
              {age === 'adult' && (
                <div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={spayedNeutered}
                      onChange={(e) => setSpayedNeutered(e.target.checked)}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      Spayed/Neutered
                    </span>
                  </label>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 ml-8">
                    Spayed/neutered pets typically need 10-20% fewer calories
                  </p>
                </div>
              )}

              {/* Food Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Food Type
                </label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setFoodType('dry')}
                    className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${foodType === 'dry'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                  >
                    Dry Food
                  </button>
                  <button
                    type="button"
                    onClick={() => setFoodType('wet')}
                    className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${foodType === 'wet'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                  >
                    Wet Food
                  </button>
                </div>
              </div>

              {/* Calories per cup/can */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Calories per {foodType === 'dry' ? 'Cup' : 'Can'} (check food label)
                </label>
                <input
                  type="number"
                  value={caloriesPerCup}
                  onChange={(e) => setCaloriesPerCup(e.target.value)}
                  placeholder={foodType === 'dry' ? 'e.g., 350' : 'e.g., 250'}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                  step="1"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {foodType === 'dry'
                    ? 'Typical range: 300-400 calories per cup'
                    : 'Typical range: 200-300 calories per 5.5oz can'}
                </p>
              </div>

              {/* Meals per day */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Meals per Day
                </label>
                <select
                  value={mealsPerDay}
                  onChange={(e) => setMealsPerDay(parseInt(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="1">1 meal per day</option>
                  <option value="2">2 meals per day (Recommended)</option>
                  <option value="3">3 meals per day</option>
                  <option value="4">4 meals per day</option>
                </select>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {age === 'puppy' || age === 'kitten' ? 'Puppies and kittens typically need 3-4 meals per day' : 'Most adult pets do well with 2 meals per day'}
                </p>
              </div>

              {/* Treat calories */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Daily Treat Calories (Optional)
                </label>
                <input
                  type="number"
                  value={treatCalories}
                  onChange={(e) => setTreatCalories(e.target.value)}
                  placeholder="e.g., 50"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                  step="1"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Enter total calories from treats per day. This will be subtracted from food calories.
                </p>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculatePortion}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Calculate Portion Size
              </button>
            </div>
          </div>

          <Loader
            isLoading={isLoading}
            message="Our AI Model is Calculating"
            petType={petType}
            size="large"
          />

          {/* Results */}
          {result && !isLoading && (
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 sm:p-6 lg:p-8 mb-8">
              {/* Header with Pet Icon and Export Options */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <PetIcon type={petType} size="large" />
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Personalized Feeding Plan</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">For your {petType} ({weight} {weightUnit})</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full sm:w-auto">
                  <button
                    onClick={downloadPDF}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download the Results</span>
                  </button>

                  {/* Social Media Icons */}
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Share the results on socials</p>
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => shareOnSocial('twitter')}
                        className="p-2 text-black rounded-lg hover:bg-gray-100 transition-colors"
                        title="Share on X"
                      >
                        <X className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => shareOnSocial('facebook')}
                        className="p-2 text-[#1877F2] rounded-lg hover:bg-blue-50 transition-colors"
                        title="Share on Facebook"
                      >
                        <Facebook className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => shareOnSocial('instagram')}
                        className="p-2 text-pink-600 rounded-lg hover:bg-pink-50 transition-colors"
                        title="Share on Instagram"
                      >
                        <Instagram className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => shareOnSocial('whatsapp')}
                        className="p-2 text-[#25D366] rounded-lg hover:bg-green-50 transition-colors"
                        title="Share on WhatsApp"
                      >
                        <MessageCircle className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => shareOnSocial('telegram')}
                        className="p-2 text-[#0088CC] rounded-lg hover:bg-blue-50 transition-colors"
                        title="Share on Telegram"
                      >
                        <Send className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => shareOnSocial('linkedin')}
                        className="p-2 text-[#0A66C2] rounded-lg hover:bg-blue-50 transition-colors"
                        title="Share on LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => shareOnSocial('copy')}
                        className="p-2 text-[#6B7280] rounded-lg hover:bg-gray-100 transition-colors"
                        title="Copy Link"
                      >
                        {copiedToClipboard ? (
                          <Check className="w-5 h-5" />
                        ) : (
                          <Copy className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Daily Calories</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{result.dailyCalories}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">kcal/day</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Daily Portion</div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{result.portionCups}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{foodType === 'dry' ? 'cups' : 'cans'}</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Weight in Grams</div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">{result.portionGrams}g</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">per day</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Treat Allowance</div>
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{result.treatAllowance}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">kcal/day</div>
                </div>
              </div>

              {/* Charts Section */}
              <div className="space-y-6 mb-6">
                {/* Calorie Breakdown Chart */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Calorie Breakdown</h3>
                  <div className="h-64 sm:h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%" minWidth={300} minHeight={200}>
                      <BarChart data={getChartData()} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                        <YAxis tick={{ fontSize: 12 }} />
                        <Tooltip />
                        <Bar dataKey="calories" fill="#3B82F6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Meal Breakdown Chart */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Meal Distribution</h3>
                  <div className="h-64 sm:h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%" minWidth={300} minHeight={200}>
                      <BarChart data={getMealChartData()} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                        <YAxis tick={{ fontSize: 12 }} />
                        <Tooltip />
                        <Bar dataKey="calories" fill="#8B5CF6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Calorie Distribution Pie Chart */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Daily Calorie Distribution</h3>
                  <div className="h-64 sm:h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%" minWidth={300} minHeight={200}>
                      <PieChart>
                        <Pie
                          data={getPieData()}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, value }) => `${name}: ${value} kcal`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {getPieData().map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Enhanced Meal Breakdown Section */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <span>🍽️</span> Meal Breakdown
                </h3>
                <div className="space-y-4">
                  {result.mealBreakdown.map((meal) => (
                    <div key={meal.meal} className="border-l-4 border-blue-500 pl-4 bg-gray-50 dark:bg-gray-700 p-3 rounded-r-lg">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">Meal {meal.meal}</h4>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded w-fit">
                          {meal.calories} kcal
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        📏 Portion: {meal.cups} {foodType === 'dry' ? 'cups' : 'cans'} ({meal.grams}g)
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Recommendations Section */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <span>💡</span> Feeding Recommendations
                </h3>
                <ul className="space-y-2">
                  {result.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* How Feeding Portion Calculator Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Pet Feeding Portion Calculator Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our pet feeding portion calculator uses standard veterinary formulas (RER and DER) to determine your pet's daily calorie needs. RER (Resting Energy Requirement) is calculated based on weight, then multiplied by activity factors to get DER (Daily Energy Requirement). The calculator then divides this by your food's calorie content to determine the exact portion size needed.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Portion Sizes</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Portion sizes vary based on multiple factors: puppies and kittens need more calories per pound for growth, active pets need more than sedentary ones, and spayed/neutered pets typically need 10-20% fewer calories. The calculator accounts for all these factors to provide accurate portion recommendations.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do I calculate the right portion size for my pet?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Use our feeding portion calculator by entering your pet's weight, age, activity level, and food type. The calculator uses standard veterinary formulas (RER and DER) to determine daily calorie needs, then calculates the appropriate portion size based on your food's calorie content.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How many meals per day should I feed my pet?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Most adult pets do well with 2 meals per day. Puppies and kittens typically need 3-4 meals per day. The calculator allows you to divide the daily portion across multiple meals and provides a meal breakdown.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How much should I feed my puppy or kitten?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Puppies and kittens need more calories per pound than adults due to growth. Puppies typically need 3x their resting energy requirement, while kittens need 2.5x. Feed 3-4 smaller meals per day and use puppy/kitten-specific food formulas.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How many treats can I give my pet?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Treats should make up no more than 10% of your pet's total daily calories. The calculator automatically calculates treat allowance and subtracts treat calories from food portions to maintain proper nutrition.
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
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate daily calorie needs for your pet</p>
              </a>
              <a href="/tools/weight-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Weight Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate your pet's ideal weight range</p>
              </a>
              <a href="/tools/dog-food-serving-size-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Dog Food Serving Size Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate serving sizes specifically for dogs</p>
              </a>
              <a href="/tools/cat-food-serving-size-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Cat Food Serving Size Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate serving sizes specifically for cats</p>
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Disclaimer:</strong> This calculator provides estimates based on standard veterinary formulas. Individual needs may vary based on metabolism, health conditions, and specific food formulations. Always consult with your veterinarian for specific feeding recommendations, especially for pets with health issues or weight concerns.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
