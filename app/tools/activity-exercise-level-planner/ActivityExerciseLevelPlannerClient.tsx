'use client';

import { useState } from 'react';
import Image from 'next/image';
import Loader from "@/components/Loader";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { Download, X, Facebook, Instagram, MessageCircle, Send, Linkedin, Copy, Check, Share2, Twitter, Link2 } from "lucide-react";
import Breadcrumb from '@/components/Breadcrumb';

export default function ActivityExerciseLevelPlannerClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [breed, setBreed] = useState<string>('mixed');
  const [age, setAge] = useState<string>('adult');
  const [currentActivity, setCurrentActivity] = useState<string>('low');
  const [weight, setWeight] = useState<string>('');
  const [weightUnit, setWeightUnit] = useState<'lbs' | 'kg'>('lbs');
  const [result, setResult] = useState<{
    recommendedLevel: string;
    dailyMinutes: string;
    weeklyMinutes: string;
    activities: Array<{ type: string; duration: string; frequency: string; description: string }>;
    tips: string[];
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const calculatePlan = () => {
    const weightNum = parseFloat(weight);
    if (!weightNum || weightNum <= 0) {
      alert('Please enter a valid weight');
      return;
    }

    setIsLoading(true);

    // Simulate AI processing with 3-second delay
    setTimeout(() => {
      let baseMinutes = 30;
      let recommendedLevel = 'Moderate';
      const activities: Array<{ type: string; duration: string; frequency: string; description: string }> = [];
      const tips: string[] = [];

      // Age factor
      if (age === 'puppy' || age === 'kitten') {
        baseMinutes = 20;
        recommendedLevel = 'Moderate (age-appropriate)';
        tips.push('Puppies and kittens need shorter, more frequent exercise sessions');
        tips.push('Avoid high-impact activities that can damage growing joints');
      } else if (age === 'senior') {
        baseMinutes = 20;
        recommendedLevel = 'Low to Moderate';
        tips.push('Senior pets need gentler exercise');
        tips.push('Monitor for signs of fatigue or discomfort');
      }

    // Breed/energy level factor
      const highEnergyBreeds = ['border collie', 'australian shepherd', 'jack russell', 'husky', 'vizsla', 'weimaraner', 'pointer', 'setter'];
      const lowEnergyBreeds = ['bulldog', 'basset hound', 'great dane', 'mastiff', 'bernese', 'newfoundland', 'persian', 'ragdoll'];
      
      if (highEnergyBreeds.some(b => breed.toLowerCase().includes(b))) {
        baseMinutes = 60;
        recommendedLevel = 'High';
      } else if (lowEnergyBreeds.some(b => breed.toLowerCase().includes(b))) {
        baseMinutes = 20;
        recommendedLevel = 'Low to Moderate';
      }

      // Current activity adjustment
      if (currentActivity === 'very-low') {
        baseMinutes = Math.max(15, baseMinutes - 10);
        tips.push('Start slowly and gradually increase activity');
      } else if (currentActivity === 'high') {
        baseMinutes += 10;
      }

      // Calculate daily and weekly
      const dailyMinutes = `${baseMinutes}-${baseMinutes + 15} minutes`;
      const weeklyMinutes = `${baseMinutes * 7}-${(baseMinutes + 15) * 7} minutes`;

      // Generate activities
      if (petType === 'dog') {
        activities.push({
          type: 'Walking',
          duration: `${Math.floor(baseMinutes * 0.4)}-${Math.floor((baseMinutes + 15) * 0.4)} minutes`,
          frequency: 'Daily',
          description: 'Regular walks provide physical exercise and mental stimulation through new sights and smells.'
        });

        activities.push({
          type: 'Play/Fetch',
          duration: `${Math.floor(baseMinutes * 0.3)}-${Math.floor((baseMinutes + 15) * 0.3)} minutes`,
          frequency: 'Daily',
          description: 'Interactive play helps burn energy and strengthens the bond with your dog.'
        });

        activities.push({
          type: 'Training/Mental Exercise',
          duration: '10-15 minutes',
          frequency: 'Daily',
          description: 'Training sessions provide mental stimulation and can be as tiring as physical exercise.'
        });

        if (baseMinutes >= 45) {
          activities.push({
            type: 'Running/Jogging',
            duration: '15-30 minutes',
            frequency: '3-4 times per week',
            description: 'Higher energy dogs benefit from running or jogging. Wait until dogs are fully grown (12-18 months).'
          });
        }

        if (baseMinutes >= 40) {
          activities.push({
            type: 'Off-leash Play',
            duration: '20-30 minutes',
            frequency: '2-3 times per week',
            description: 'Safe off-leash play allows dogs to run freely and socialize with other dogs.'
          });
        }
      } else {
        // Cat activities
        activities.push({
          type: 'Interactive Play',
          duration: `${Math.floor(baseMinutes * 0.5)}-${Math.floor((baseMinutes + 15) * 0.5)} minutes`,
          frequency: '2-3 times daily',
          description: 'Use wand toys, laser pointers, or feather toys to engage your cat in active play.'
        });

        activities.push({
          type: 'Puzzle Toys/Feeders',
          duration: '15-20 minutes',
          frequency: 'Daily',
          description: 'Puzzle feeders and treat-dispensing toys provide mental stimulation and encourage natural hunting behaviors.'
        });

        activities.push({
          type: 'Climbing/Perching',
          duration: 'Throughout the day',
          frequency: 'Daily',
          description: 'Cat trees, shelves, and perches allow cats to climb and explore vertically.'
        });

        activities.push({
          type: 'Training Sessions',
          duration: '5-10 minutes',
          frequency: 'Daily',
          description: 'Cats can learn tricks and commands, providing mental exercise.'
        });
      }

      // General tips
      tips.push(`Recommended daily exercise: ${dailyMinutes}`);
      tips.push(`Weekly total: ${weeklyMinutes}`);
      tips.push('Divide exercise into multiple sessions throughout the day');
      tips.push('Adjust based on weather, your pet\'s energy level, and health');
      tips.push('Monitor for signs of fatigue or overexertion');
      tips.push('Provide mental stimulation in addition to physical exercise');
      tips.push('Consult your veterinarian before starting new exercise routines, especially for senior pets or those with health conditions');

    setResult({ recommendedLevel, dailyMinutes, weeklyMinutes, activities, tips });
      setIsLoading(false);
    }, 3000); // 3-second delay
  };

  // Helper functions for visualizations
  const getChartData = () => {
    if (!result) return [];
    
    return result.activities.map(activity => ({
      name: activity.type,
      duration: parseInt(activity.duration.split('-')[0]) || 15,
      frequency: activity.frequency
    }));
  };

  const getPieData = () => {
    if (!result) return [];
    
    const dailyMin = parseInt(result.dailyMinutes.split('-')[0]) || 30;
    return [
      { name: 'Exercise', value: dailyMin, color: '#3B82F6' },
      { name: 'Rest', value: 1440 - dailyMin, color: '#E5E7EB' }
    ];
  };

  const getHealthStatus = () => {
    const weightNum = parseFloat(weight);
    const weightInKg = weightUnit === 'lbs' ? weightNum * 0.453592 : weightNum;
    
    if (petType === 'dog') {
      if (weightInKg < 2) return { status: 'Underweight', color: 'text-yellow-600', bgColor: 'bg-yellow-100' };
      if (weightInKg > 45) return { status: 'High Risk', color: 'text-red-600', bgColor: 'bg-red-100' };
      return { status: 'Healthy Range', color: 'text-green-600', bgColor: 'bg-green-100' };
    } else {
      if (weightInKg < 2) return { status: 'Underweight', color: 'text-yellow-600', bgColor: 'bg-yellow-100' };
      if (weightInKg > 8) return { status: 'High Risk', color: 'text-red-600', bgColor: 'bg-red-100' };
      return { status: 'Healthy Range', color: 'text-green-600', bgColor: 'bg-green-100' };
    }
  };

  const getBreedAverage = () => {
    const breedLower = breed.toLowerCase();
    if (breedLower.includes('border collie') || breedLower.includes('australian shepherd')) return 60;
    if (breedLower.includes('bulldog') || breedLower.includes('basset')) return 30;
    if (breedLower.includes('husky') || breedLower.includes('pointer')) return 75;
    return 45; // average
  };

  const getComparisonData = () => {
    if (!result) return [];
    
    const petMinutes = parseInt(result.dailyMinutes.split('-')[0]) || 30;
    const breedAvg = getBreedAverage();
    
    return [
      { name: 'Your Pet', minutes: petMinutes, color: '#8B5CF6' },
      { name: 'Breed Average', minutes: breedAvg, color: '#6B7280' }
    ];
  };

  const downloadPDF = () => {
    // Create PDF content
    const content = `
Pet Exercise Plan - NearbyPetCare.com
=====================================

Pet Details:
- Type: ${petType.charAt(0).toUpperCase() + petType.slice(1)}
- Breed: ${breed}
- Age: ${age}
- Weight: ${weight} ${weightUnit}
- Current Activity: ${currentActivity}

Recommended Plan:
- Activity Level: ${result?.recommendedLevel}
- Daily Exercise: ${result?.dailyMinutes}
- Weekly Exercise: ${result?.weeklyMinutes}

Activities:
${result?.activities.map(a => `- ${a.type}: ${a.duration} (${a.frequency})`).join('\n')}

Tips:
${result?.tips.map(t => `- ${t}`).join('\n')}

Generated by NearbyPetCare.com
    `.trim();

    // Create blob and download
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pet-exercise-plan.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const shareOnSocial = (platform: string) => {
    if (!result) return;
    
    const url = window.location.href;
    const activitiesText = result.activities.slice(0, 3).map(a => `${a.type} (${a.duration})`).join(', ');
    
    const shareText = `🐾 My ${petType} ${breed}'s Exercise Plan:
    
📊 Activity Level: ${result.recommendedLevel}
⏰ Daily: ${result.dailyMinutes} 
🗓️ Weekly: ${result.weeklyMinutes}
🎯 Activities: ${activitiesText}
⚖️ Weight: ${weight} ${weightUnit} | Age: ${age}

Get your personalized pet exercise plan at nearbypetcare.com! 🐕🐈`;
    
    let shareUrl = '';
    switch(platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        // Updated Facebook sharing URL for 2025
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
        // Updated LinkedIn sharing URL for 2025
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=My ${petType} ${breed}'s Exercise Plan&summary=${encodeURIComponent(shareText)}`;
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
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Activity & Exercise Level Planner', href: '/tools/activity-exercise-level-planner' }
          ]} />
          
          <div className="mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Activity & Exercise Level Planner
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Create personalized daily and weekly exercise plans for your pet based on breed, age, and activity level
              </p>
            </div>

            {/* Tool Screenshot/Image */}
            <div className="mb-8">
              <Image 
                src="/og-image.png" 
                alt="Activity & Exercise Level Planner - Create personalized exercise plans for your pet"
                width={1200}
                height={630}
                className="w-full rounded-lg shadow-lg"
                loading="lazy"
                priority={false}
              />
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
              onChange={(e) => setPetType(e.target.value as 'dog' | 'cat')}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Breed (or type)
            </label>
            <input
              type="text"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              placeholder="e.g., Border Collie, Mixed, Persian"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
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
              Current Activity Level
            </label>
            <select
              value={currentActivity}
              onChange={(e) => setCurrentActivity(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="very-low">Very Low</option>
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Weight
            </label>
            <div className="flex gap-4">
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
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

          <button
            onClick={calculatePlan}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Generate Exercise Plan
          </button>
        </div>
      </div>

      <Loader 
        isLoading={isLoading} 
        message="Our AI Model is Calculating"
        petType={petType}
        size="large"
      />

      {result && !isLoading && (
        <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 border border-green-200 dark:border-green-800">
          {/* Header with Pet Icon and Export Options */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
              <PetIcon type={petType} size="large" />
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Personalized Exercise Plan</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">For your {petType} {breed}</p>
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

          {/* Health Status Indicator */}
          <div className={`p-4 rounded-lg mb-6 ${getHealthStatus().bgColor} border border-gray-200 dark:border-gray-700`}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Health Status</h3>
                <p className={`text-lg font-bold ${getHealthStatus().color}`}>{getHealthStatus().status}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600 dark:text-gray-400">Weight: {weight} {weightUnit}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Age: {age}</p>
              </div>
            </div>
          </div>

          {/* Main Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Activity Level</div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{result.recommendedLevel}</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Daily Exercise</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{result.dailyMinutes}</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Weekly Total</div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">{result.weeklyMinutes}</div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="space-y-6 mb-6">
            {/* Activity Duration Chart */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Activity Breakdown</h3>
              <div className="h-64 sm:h-80 w-full">
                <ResponsiveContainer width="100%" height="100%" minWidth={300} minHeight={200}>
                  <BarChart data={getChartData()} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="name" 
                      angle={-45} 
                      textAnchor="end" 
                      height={80}
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="duration" fill="#8B5CF6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Comparison Chart */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Your Pet vs. Breed Average</h3>
              <div className="h-64 sm:h-80 w-full">
                <ResponsiveContainer width="100%" height="100%" minWidth={300} minHeight={200}>
                  <BarChart data={getComparisonData()} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="minutes" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Daily Time Distribution Pie Chart */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Daily Time Distribution</h3>
            <div className="h-64 sm:h-80 w-full">
              <ResponsiveContainer width="100%" height="100%" minWidth={300} minHeight={200}>
                <PieChart>
                  <Pie
                    data={getPieData()}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value} min`}
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

          {/* Enhanced Activities Section */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
              <span>🎯</span> Recommended Activities
            </h3>
            <div className="space-y-4">
              {result.activities.map((activity, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4 bg-gray-50 dark:bg-gray-700 p-3 rounded-r-lg">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <PetIcon type={petType} size="small" />
                      <h4 className="font-semibold text-gray-900 dark:text-white">{activity.type}</h4>
                    </div>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded w-fit">
                      {activity.frequency}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    ⏱️ Duration: {activity.duration}
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Tips Section */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
              <span>💡</span> Expert Tips
            </h3>
            <ul className="space-y-2">
              {result.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

          {/* How Activity & Exercise Planner Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Activity & Exercise Planner Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We combine breed information, age group, body weight, and current activity level to determine a safe baseline of daily minutes. The planner then recommends weekly totals, divides minutes into manageable sessions, and lists suggested activities that match your selections.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Why Personalization Matters</h3>
              <p className="text-gray-700 dark:text-gray-300">
                High-energy herding breeds need very different routines than senior toy breeds or indoor cats. Tailoring minutes and activities prevents overexertion, reduces boredom, and supports healthy weight.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How much exercise does my pet need?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Exercise needs vary by breed, age, and individual pet. Most adult dogs need 30-60 minutes of exercise per day, while cats typically need 15-30 minutes of interactive play. High-energy breeds need more exercise (60+ minutes), while low-energy breeds need less (20-30 minutes). Puppies and kittens need shorter, more frequent sessions, while senior pets need gentler exercise.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What types of exercise are best for my pet?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  For dogs: walking, running, fetch, agility training, and off-leash play. For cats: interactive play with wand toys, puzzle feeders, climbing structures, and training sessions. The best exercise type depends on your pet's breed, age, and energy level. Always consider your pet's physical limitations and health conditions.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do I know if my pet is getting enough exercise?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Signs of adequate exercise include: your pet is calm and relaxed at home, maintains a healthy weight, sleeps well, doesn't display destructive behaviors, and seems content. If your pet is restless, gaining weight, showing behavioral issues, or seems hyperactive, they may need more exercise. Consult your veterinarian if you're unsure.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/exercise-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Exercise Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate precise exercise minutes</p>
              </a>
              <a href="/tools/calorie-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Calorie Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Align nutrition with activity output</p>
              </a>
              <a href="/tools/weight-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Weight Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Monitor ideal body condition</p>
              </a>
              <a href="/tools/training-progress-tracker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Training Progress Tracker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Log skills and behavior improvements</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This plan provides general guidelines. Adjust based on your pet's individual needs, health conditions, and energy level. Always consult your veterinarian before starting new exercise routines, especially for puppies, senior pets, or pets with health conditions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

