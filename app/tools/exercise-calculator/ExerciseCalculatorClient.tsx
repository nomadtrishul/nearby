'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import Loader from '@/components/Loader';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Download, X, Facebook, Instagram, MessageCircle, Send, Linkedin, Copy, Check } from 'lucide-react';

export default function ExerciseCalculatorClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [weight, setWeight] = useState<string>('');
  const [weightUnit, setWeightUnit] = useState<'lbs' | 'kg'>('lbs');
  const [age, setAge] = useState<string>('adult');
  const [breed, setBreed] = useState<string>('moderate');
  const [currentActivity, setCurrentActivity] = useState<string>('moderate');
  const [result, setResult] = useState<{
    dailyMinutes: number;
    weeklyMinutes: number;
    exerciseType: string[];
    recommendations: string[];
    warnings: string[];
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const calculateExercise = () => {
    const weightNum = parseFloat(weight);
    if (!weightNum || weightNum <= 0) {
      alert('Please enter a valid weight');
      return;
    }

    setIsLoading(true);

    // Simulate AI processing with 3-second delay
    setTimeout(() => {
      const weightKg = weightUnit === 'lbs' ? weightNum * 0.453592 : weightNum;
      const recommendations: string[] = [];
    const warnings: string[] = [];
    const exerciseType: string[] = [];

    let baseMinutes = 30; // Base 30 minutes for moderate activity

    // Adjust for age
    if (age === 'puppy' || age === 'kitten') {
      baseMinutes = 20; // Shorter sessions for young pets
      recommendations.push('Multiple short sessions (10-15 minutes) are better than one long session');
      recommendations.push('Avoid high-impact activities that could damage growing joints');
      warnings.push('Puppies and kittens have growing bones - avoid excessive jumping or running on hard surfaces');
    } else if (age === 'senior') {
      baseMinutes = 20; // Reduced for seniors
      recommendations.push('Shorter, gentler exercise sessions');
      recommendations.push('Low-impact activities are best');
      warnings.push('Monitor for signs of fatigue or discomfort');
    }

    // Adjust for breed/energy level
    if (breed === 'high') {
      baseMinutes *= 1.5;
      exerciseType.push('Running/Jogging', 'Fetch', 'Agility Training', 'Long Walks', 'Swimming');
      recommendations.push('High-energy breeds need more exercise to prevent behavioral issues');
    } else if (breed === 'low') {
      baseMinutes *= 0.7;
      exerciseType.push('Gentle Walks', 'Indoor Play', 'Short Outdoor Time');
      recommendations.push('Low-energy breeds need less exercise but still benefit from regular activity');
    } else {
      exerciseType.push('Walking', 'Play Sessions', 'Fetch', 'Interactive Toys');
    }

    // Adjust for current activity level
    if (currentActivity === 'low') {
      recommendations.push('Gradually increase activity to avoid injury');
      recommendations.push('Start with shorter sessions and build up');
    } else if (currentActivity === 'high') {
      baseMinutes *= 1.2;
    }

    // Pet type specific
    if (petType === 'dog') {
      recommendations.push('Daily walks are essential for dogs');
      recommendations.push('Include both physical exercise and mental stimulation');
      recommendations.push('Off-leash play in safe areas when possible');
    } else {
      recommendations.push('Cats benefit from interactive play sessions');
      recommendations.push('Use toys that encourage natural hunting behaviors');
      recommendations.push('Multiple short play sessions throughout the day');
      baseMinutes *= 0.8; // Cats typically need less structured exercise
    }

    // Weight considerations
    if (weightKg > 30) {
      recommendations.push('Large pets may need longer but less intense exercise');
    } else if (weightKg < 5) {
      recommendations.push('Small pets may need shorter but more frequent exercise sessions');
    }

    const dailyMinutes = Math.round(baseMinutes);
    const weeklyMinutes = dailyMinutes * 7;

    setResult({
      dailyMinutes,
      weeklyMinutes,
      exerciseType,
      recommendations,
      warnings,
    });
    setIsLoading(false);
    }, 3000); // 3-second delay
  };

  // Helper functions for enhanced features
  const getExerciseData = () => {
    if (!result) return [];
    
    return [
      { name: 'Daily Exercise', value: result.dailyMinutes, color: '#3B82F6' },
      { name: 'Weekly Total', value: result.weeklyMinutes, color: '#8B5CF6' }
    ];
  };

  const getExerciseTypeData = () => {
    if (!result) return [];
    
    return result.exerciseType.map((type, index) => ({
      name: type,
      value: Math.round(result.dailyMinutes / result.exerciseType.length),
      color: ['#10B981', '#F59E0B', '#EF4444', '#6366F1'][index % 4]
    }));
  };

  const downloadPDF = () => {
    if (!result) return;
    
    const content = `
Pet Exercise Analysis - NearbyPetCare.com
=====================================

Pet Details:
- Type: ${petType.charAt(0).toUpperCase() + petType.slice(1)}
- Weight: ${weight} ${weightUnit}
- Age: ${age}
- Activity Level: ${currentActivity}

Exercise Plan:
- Daily Exercise: ${result.dailyMinutes} minutes
- Weekly Total: ${result.weeklyMinutes} minutes

Recommended Activities:
${result.exerciseType.map(type => `- ${type}`).join('\n')}

Recommendations:
${result.recommendations.map(rec => `- ${rec}`).join('\n')}

${result.warnings.length > 0 ? `Warnings:\n${result.warnings.map(warn => `- ${warn}`).join('\n')}` : ''}

Generated by NearbyPetCare.com
    `.trim();

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
    const shareText = `🐾 My ${petType} exercise plan:
    
⏱️ Daily: ${result.dailyMinutes} minutes | Weekly: ${result.weeklyMinutes} minutes
🏃 Activities: ${result.exerciseType.join(', ')}
⚖️ Weight: ${weight} ${weightUnit} | Age: ${age}

Get your pet's exercise plan at nearbypetcare.com! 🐕🐈`;
    
    let shareUrl = '';
    switch(platform) {
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
        alert('Text copied to clipboard! Share it on Instagram with a screenshot of your results.');
        return;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + url)}`;
        break;
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(shareText)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=Pet Exercise Plan&summary=${encodeURIComponent(shareText)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(shareText + ' ' + url);
        setCopiedToClipboard(true);
        setTimeout(() => setCopiedToClipboard(false), 3000);
        return;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
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
            { name: 'Exercise Calculator', href: '/tools/exercise-calculator' }
          ]} />
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Pet Exercise Calculator – Dog & Cat Daily Exercise Needs Calculator
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Use our free pet exercise calculator to determine your dog or cat's daily exercise needs. Our dog exercise calculator and cat exercise calculator provide breed-specific recommendations and personalized activity plans based on age, weight, and activity level.
            </p>
          </div>

          {/* Tool Screenshot/Image */}
          <div className="mb-8">
            <Image 
              src="/og-image.png" 
              alt="Pet Exercise Calculator - Calculate daily exercise needs for dogs and cats"
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
                    className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                      petType === 'dog'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    🐕 Dog
                  </button>
                  <button
                    type="button"
                    onClick={() => setPetType('cat')}
                    className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                      petType === 'cat'
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
                  Weight
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

              {/* Breed Energy Level */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Breed Energy Level
                </label>
                <select
                  value={breed}
                  onChange={(e) => setBreed(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="low">Low Energy (Bulldog, Persian, etc.)</option>
                  <option value="moderate">Moderate Energy (Labrador, Maine Coon, etc.)</option>
                  <option value="high">High Energy (Border Collie, Bengal, etc.)</option>
                </select>
              </div>

              {/* Current Activity Level */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Current Activity Level
                </label>
                <select
                  value={currentActivity}
                  onChange={(e) => setCurrentActivity(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="low">Low (Minimal exercise)</option>
                  <option value="moderate">Moderate (Regular walks/play)</option>
                  <option value="high">High (Very active)</option>
                </select>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateExercise}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Calculate Exercise Needs
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
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Exercise Plan Results</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">For your ${weight} ${weightUnit} ${petType}</p>
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
                      <button onClick={() => shareOnSocial('twitter')} className="p-2 text-black rounded-lg hover:bg-gray-100 transition-colors" title="Share on X"><X className="w-5 h-5" /></button>
                      <button onClick={() => shareOnSocial('facebook')} className="p-2 text-[#1877F2] rounded-lg hover:bg-blue-50 transition-colors" title="Share on Facebook"><Facebook className="w-5 h-5" /></button>
                      <button onClick={() => shareOnSocial('instagram')} className="p-2 text-pink-600 rounded-lg hover:bg-pink-50 transition-colors" title="Share on Instagram"><Instagram className="w-5 h-5" /></button>
                      <button onClick={() => shareOnSocial('whatsapp')} className="p-2 text-[#25D366] rounded-lg hover:bg-green-50 transition-colors" title="Share on WhatsApp"><MessageCircle className="w-5 h-5" /></button>
                      <button onClick={() => shareOnSocial('telegram')} className="p-2 text-[#0088CC] rounded-lg hover:bg-blue-50 transition-colors" title="Share on Telegram"><Send className="w-5 h-5" /></button>
                      <button onClick={() => shareOnSocial('linkedin')} className="p-2 text-[#0A66C2] rounded-lg hover:bg-blue-50 transition-colors" title="Share on LinkedIn"><Linkedin className="w-5 h-5" /></button>
                      <button onClick={() => shareOnSocial('copy')} className="p-2 text-[#6B7280] rounded-lg hover:bg-gray-100 transition-colors" title="Copy Link">
                        {copiedToClipboard ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Daily Exercise</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{result.dailyMinutes} min</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">per day</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Weekly Total</div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{result.weeklyMinutes} min</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">per week</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Activities</div>
                  <div className="text-xl font-bold text-green-600 dark:text-green-400">{result.exerciseType.length}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">types</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Age Stage</div>
                  <div className="text-xl font-bold text-orange-600 dark:text-orange-400">{age}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">life stage</div>
                </div>
              </div>

              {/* Charts Section */}
              <div className="space-y-6 mb-6">
                {/* Exercise Time Chart */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Exercise Time Overview</h3>
                  <div className="h-64 sm:h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%" minWidth={300} minHeight={200}>
                      <BarChart data={getExerciseData()} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                        <YAxis tick={{ fontSize: 12 }} />
                        <Tooltip />
                        <Bar dataKey="value" fill="#3B82F6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Exercise Types Distribution */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Activity Types Distribution</h3>
                  <div className="h-64 sm:h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%" minWidth={300} minHeight={200}>
                      <BarChart data={getExerciseTypeData()} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                        <YAxis tick={{ fontSize: 12 }} />
                        <Tooltip />
                        <Bar dataKey="value" fill="#10B981" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Exercise Details */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <span>🏃</span> Exercise Plan Details
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Recommended Activities</h4>
                    <div className="space-y-1">
                      {result.exerciseType.map((type, index) => (
                        <div key={index} className="text-sm text-gray-700 dark:text-gray-300">• {type}</div>
                      ))}
                    </div>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Recommendations</h4>
                    <div className="space-y-1">
                      {result.recommendations.map((rec, index) => (
                        <div key={index} className="text-sm text-gray-700 dark:text-gray-300">• {rec}</div>
                      ))}
                    </div>
                  </div>
                  {result.warnings.length > 0 && (
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <h4 className="font-medium text-red-900 dark:text-red-400 mb-1">Warnings</h4>
                      <div className="space-y-1">
                        {result.warnings.map((warn, index) => (
                          <div key={index} className="text-sm text-red-700 dark:text-red-300">• {warn}</div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* How Pet Exercise Calculator Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Pet Exercise Calculator Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our pet exercise calculator determines the optimal daily and weekly exercise requirements for your dog or cat based on their weight, age, breed characteristics, and current activity level. The calculator provides personalized recommendations for exercise types, duration, and frequency to keep your pet healthy and happy.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Exercise Needs</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Exercise needs vary significantly between pets based on breed, age, size, and health status. Young pets typically need more frequent but shorter exercise sessions, while adult pets need consistent daily activity. Senior pets may require modified exercise routines that are gentler on joints.
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
                  Exercise needs vary by breed, age, and activity level. Most adult dogs need 30-60 minutes of exercise per day, while cats typically need 15-30 minutes of interactive play. High-energy breeds need more exercise, while low-energy breeds need less. Puppies and kittens need shorter, more frequent sessions.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What types of exercise are best for my pet?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Dogs benefit from walking, running, fetch, and agility training. Cats benefit from interactive play with toys that mimic hunting behaviors. The best exercise type depends on your pet's breed, age, and energy level. Always consider your pet's physical limitations and health conditions.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do I know if my pet is getting enough exercise?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Signs of adequate exercise include: your pet is calm and relaxed at home, maintains a healthy weight, sleeps well, and doesn't display destructive behaviors. If your pet is restless, gaining weight, or showing behavioral issues, they may need more exercise.
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
              <a href="/tools/age-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Age Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Convert your pet's age to human years</p>
              </a>
              <a href="/tools/feeding-portion-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Feeding Portion Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate the right portion sizes for your pet</p>
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Disclaimer:</strong> This calculator provides general exercise recommendations. Individual pets may have different needs based on health conditions, fitness level, and other factors. Always consult with your veterinarian before starting a new exercise program, especially for pets with health conditions, injuries, or those who have been inactive. Monitor your pet during exercise and stop if they show signs of fatigue, distress, or discomfort.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

