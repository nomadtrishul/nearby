'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import Loader from '@/components/Loader';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Download, X, Facebook, Instagram, MessageCircle, Send, Linkedin, Copy, Check } from 'lucide-react';

export default function AgeCalculatorClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [birthDate, setBirthDate] = useState<string>('');
  const [breed, setBreed] = useState<string>('');
  const [result, setResult] = useState<{
    petAge: { years: number; months: number; days: number };
    humanAge: number;
    lifeStage: string;
    lifeStageDescription: string;
    recommendations: string[];
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const dogBreeds = [
    'Small (under 20 lbs)',
    'Medium (20-50 lbs)',
    'Large (50-90 lbs)',
    'Giant (over 90 lbs)',
  ];

  const catBreeds = [
    'Small/Medium',
    'Large',
  ];

  const calculateAge = () => {
    if (!birthDate) {
      alert('Please enter your pet\'s birth date');
      return;
    }

    setIsLoading(true);

    // Simulate AI processing with 3-second delay
    setTimeout(() => {
      const birth = new Date(birthDate);
      const today = new Date();
    
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    // Calculate human age based on pet type and size
    let humanAge = 0;
    let lifeStage = '';
    let lifeStageDescription = '';
    const recommendations: string[] = [];

    if (petType === 'dog') {
      // Dog aging: First year = 15 human years, second year = 9, then varies by size
      if (years === 0) {
        humanAge = Math.round(months * 1.25);
      } else if (years === 1) {
        humanAge = 15 + Math.round(months * 0.75);
      } else {
        let sizeFactor = 4; // Medium dog default
        if (breed.includes('Small')) sizeFactor = 4;
        else if (breed.includes('Medium')) sizeFactor = 5;
        else if (breed.includes('Large')) sizeFactor = 6;
        else if (breed.includes('Giant')) sizeFactor = 7.5;

        humanAge = 24 + (years - 2) * sizeFactor;
      }

      // Determine life stage
      if (years < 1) {
        lifeStage = 'Puppy';
        lifeStageDescription = 'Your dog is still a puppy and growing rapidly.';
        recommendations.push('Feed puppy-specific food with higher protein and calories');
        recommendations.push('Socialize with people, other dogs, and new environments');
        recommendations.push('Begin basic training and housebreaking');
        recommendations.push('Schedule vaccinations and regular veterinary check-ups');
      } else if (years < 2) {
        lifeStage = 'Young Adult';
        lifeStageDescription = 'Your dog is a young adult, full of energy and still developing.';
        recommendations.push('Transition to adult food');
        recommendations.push('Maintain regular exercise and training');
        recommendations.push('Continue socialization');
        recommendations.push('Annual veterinary check-ups');
      } else if (years < 7) {
        lifeStage = 'Adult';
        lifeStageDescription = 'Your dog is in their prime adult years.';
        recommendations.push('Maintain consistent exercise routine');
        recommendations.push('Feed balanced adult diet');
        recommendations.push('Annual veterinary check-ups');
        recommendations.push('Dental care and preventive health measures');
      } else if (years < 10) {
        lifeStage = 'Mature Adult';
        lifeStageDescription = 'Your dog is entering their mature years.';
        recommendations.push('Consider senior-specific food if needed');
        recommendations.push('Monitor for signs of aging');
        recommendations.push('Semi-annual veterinary check-ups recommended');
        recommendations.push('Adjust exercise as needed');
      } else {
        lifeStage = 'Senior';
        lifeStageDescription = 'Your dog is a senior and may need special care.';
        recommendations.push('Feed senior-specific diet');
        recommendations.push('Semi-annual veterinary check-ups');
        recommendations.push('Monitor for age-related health issues');
        recommendations.push('Adjust exercise and activity levels');
        recommendations.push('Consider supplements for joint health');
      }
    } else {
      // Cat aging: First year = 15, second = 9, then 4 per year
      if (years === 0) {
        humanAge = Math.round(months * 1.25);
      } else if (years === 1) {
        humanAge = 15 + Math.round(months * 0.75);
      } else {
        humanAge = 24 + (years - 2) * 4;
      }

      // Determine life stage
      if (years < 1) {
        lifeStage = 'Kitten';
        lifeStageDescription = 'Your cat is still a kitten and growing rapidly.';
        recommendations.push('Feed kitten-specific food with higher protein and calories');
        recommendations.push('Socialize and handle gently');
        recommendations.push('Begin litter box training');
        recommendations.push('Schedule vaccinations and regular veterinary check-ups');
      } else if (years < 2) {
        lifeStage = 'Young Adult';
        lifeStageDescription = 'Your cat is a young adult, full of energy.';
        recommendations.push('Transition to adult food');
        recommendations.push('Maintain play and exercise');
        recommendations.push('Annual veterinary check-ups');
        recommendations.push('Consider spaying/neutering if not already done');
      } else if (years < 7) {
        lifeStage = 'Adult';
        lifeStageDescription = 'Your cat is in their prime adult years.';
        recommendations.push('Maintain consistent feeding and exercise');
        recommendations.push('Annual veterinary check-ups');
        recommendations.push('Dental care and preventive health measures');
        recommendations.push('Monitor weight and body condition');
      } else if (years < 11) {
        lifeStage = 'Mature Adult';
        lifeStageDescription = 'Your cat is entering their mature years.';
        recommendations.push('Consider mature adult food if needed');
        recommendations.push('Monitor for signs of aging');
        recommendations.push('Semi-annual veterinary check-ups recommended');
        recommendations.push('Adjust activity as needed');
      } else {
        lifeStage = 'Senior';
        lifeStageDescription = 'Your cat is a senior and may need special care.';
        recommendations.push('Feed senior-specific diet');
        recommendations.push('Semi-annual veterinary check-ups');
        recommendations.push('Monitor for age-related health issues');
        recommendations.push('Provide easy access to food, water, and litter');
        recommendations.push('Consider supplements for joint health');
      }
    }

    setResult({
      petAge: { years, months, days },
      humanAge: Math.round(humanAge),
      lifeStage,
      lifeStageDescription,
      recommendations,
    });
    setIsLoading(false);
    }, 3000); // 3-second delay
  };

  // Helper functions for enhanced features
  const getAgeComparisonData = () => {
    if (!result) return [];
    
    return [
      { name: 'Pet Age', years: result.petAge.years + result.petAge.months/12, color: '#3B82F6' },
      { name: 'Human Age', years: result.humanAge, color: '#8B5CF6' }
    ];
  };

  const getLifeStageData = () => {
    if (!result) return [];
    
    const stages = petType === 'dog' 
      ? ['Puppy', 'Young Adult', 'Adult', 'Senior']
      : ['Kitten', 'Young Adult', 'Adult', 'Senior'];
    
    return stages.map((stage, index) => ({
      name: stage,
      status: stage === result.lifeStage ? 'current' : 'future',
      color: stage === result.lifeStage ? '#10B981' : '#E5E7EB'
    }));
  };

  const getAgeProgressData = () => {
    if (!result) return [];
    
    const maxAge = petType === 'dog' ? 20 : 18;
    const currentAge = result.petAge.years + result.petAge.months/12;
    
    return [
      { name: 'Lived', value: currentAge, color: '#3B82F6' },
      { name: 'Remaining', value: Math.max(0, maxAge - currentAge), color: '#E5E7EB' }
    ];
  };

  const downloadPDF = () => {
    if (!result) return;
    
    const content = `
Pet Age Analysis - NearbyPetCare.com
====================================

Pet Details:
- Type: ${petType.charAt(0).toUpperCase() + petType.slice(1)}
- Breed: ${breed || 'Mixed'}
- Birth Date: ${birthDate}

Age Information:
- Pet Age: ${result.petAge.years} years, ${result.petAge.months} months, ${result.petAge.days} days
- Human Equivalent: ${result.humanAge} years
- Life Stage: ${result.lifeStage}

Life Stage Description:
${result.lifeStageDescription}

Recommendations:
${result.recommendations.map(r => `- ${r}`).join('\n')}

Generated by NearbyPetCare.com
    `.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pet-age-analysis.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const shareOnSocial = (platform: string) => {
    if (!result) return;
    
    const url = window.location.href;
    const shareText = `🐾 My ${petType} is ${result.petAge.years} years old!
    
🎂 That's ${result.humanAge} human years old!
📈 Life Stage: ${result.lifeStage}
🐕${petType === 'dog' ? '' : '🐈'} Born: ${birthDate}

Calculate your pet's age at nearbypetcare.com! 🎉`;
    
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
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=My ${petType} Age Analysis&summary=${encodeURIComponent(shareText)}`;
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
            { name: 'Age Calculator', href: '/tools/age-calculator' }
          ]} />
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Pet Age Calculator – Convert Dog & Cat Years to Human Years
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Use our free pet age calculator to convert your dog or cat's age to human years. Our dog age calculator and cat age calculator use breed-specific formulas to accurately determine your pet's equivalent human age, helping you understand their life stage and provide age-appropriate care.
            </p>
          </div>

          {/* Tool Screenshot/Image */}
          <div className="mb-8">
            <Image 
              src="/og-image.png" 
              alt="Pet Age Calculator - Convert dog and cat years to human years with breed-specific calculations"
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

              {/* Birth Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Pet's Birth Date
                </label>
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Breed Size (for dogs) */}
              {petType === 'dog' && (
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Dog Size/Breed Category
                  </label>
                  <select
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select size category...</option>
                    {dogBreeds.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Size affects aging rate - larger dogs age faster
                  </p>
                </div>
              )}

              {/* Calculate Button */}
              <button
                onClick={calculateAge}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Calculate Age
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
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Age Analysis Results</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">For your {petType} ({breed || 'Mixed'})</p>
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
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Pet Age</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{result.petAge.years}y {result.petAge.months}m</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">actual age</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Human Age</div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{result.humanAge} years</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">equivalent</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Life Stage</div>
                  <div className="text-xl font-bold text-green-600 dark:text-green-400">{result.lifeStage}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">development</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Birth Date</div>
                  <div className="text-lg font-bold text-orange-600 dark:text-orange-400">{birthDate}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">origin</div>
                </div>
              </div>

              {/* Charts Section */}
              <div className="space-y-6 mb-6">
                {/* Age Comparison Chart */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Age Comparison</h3>
                  <div className="h-64 sm:h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%" minWidth={300} minHeight={200}>
                      <BarChart data={getAgeComparisonData()} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                        <YAxis tick={{ fontSize: 12 }} />
                        <Tooltip />
                        <Bar dataKey="years" fill="#8B5CF6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Life Stage Progress */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Life Stage Progress</h3>
                  <div className="h-64 sm:h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%" minWidth={300} minHeight={200}>
                      <BarChart data={getLifeStageData()} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                        <YAxis tick={{ fontSize: 12 }} />
                        <Tooltip />
                        <Bar dataKey="status" fill="#10B981" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Age Progress Pie Chart */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Life Progress</h3>
                  <div className="h-64 sm:h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%" minWidth={300} minHeight={200}>
                      <PieChart>
                        <Pie
                          data={getAgeProgressData()}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, value }) => `${name}: ${value.toFixed(1)} years`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {getAgeProgressData().map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Life Stage Description */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <span>📖</span> {result.lifeStage} Stage
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{result.lifeStageDescription}</p>
              </div>

              {/* Enhanced Recommendations Section */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <span>💡</span> Care Recommendations
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

          {/* How Pet Age Calculator Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Pet Age Calculator Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Dog Age Calculator Formula</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The dog age calculator uses a breed-specific formula: the first year equals 15 human years, the second year equals 9 human years, then each subsequent year varies by size. Small dogs age at approximately 4 human years per dog year, medium dogs at 5 years, large dogs at 6 years, and giant breeds at 7.5 years per dog year.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Cat Age Calculator Formula</h3>
              <p className="text-gray-700 dark:text-gray-300">
                The cat age calculator uses a simpler formula: the first year equals 15 human years, the second year equals 9 human years, then each subsequent year equals 4 human years. This formula works for most cats regardless of size.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do you calculate pet age in human years?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Pet age conversion varies by species and size. For dogs: the first year equals 15 human years, the second year equals 9 human years, then it varies by size (small dogs age slower than large dogs). For cats: the first year equals 15 human years, the second year equals 9 human years, then each year equals 4 human years.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Do larger dogs age faster than smaller dogs?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes, larger dog breeds generally age faster than smaller breeds. Giant breeds may age at a rate of 7.5 human years per dog year after age 2, while small breeds age at about 4 human years per dog year. This is why larger dogs typically have shorter lifespans.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What are the different life stages for pets?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Pets go through several life stages: Puppy/Kitten (under 1 year), Young Adult (1-2 years), Adult (2-7 years for dogs, 2-7 years for cats), Mature Adult (7-10 years for dogs, 7-11 years for cats), and Senior (10+ years for dogs, 11+ years for cats). Each stage has different care requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/weight-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Weight Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate your pet's ideal weight and BMI</p>
              </a>
              <a href="/tools/exercise-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Exercise Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate daily exercise needs for your pet</p>
              </a>
              <a href="/tools/calorie-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Calorie Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate daily calorie needs for your pet</p>
              </a>
              <a href="/pet-health" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Health Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn more about pet health and wellness</p>
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Disclaimer:</strong> Age conversion to human years is an estimate based on general aging patterns. Individual pets may age differently based on genetics, health, and lifestyle. The life stage and recommendations are general guidelines. Always consult with your veterinarian for personalized care recommendations based on your pet's specific needs and health status.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

