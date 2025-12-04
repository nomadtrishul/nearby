'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import Loader from '@/components/Loader';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Download, X, Facebook, Instagram, MessageCircle, Send, Linkedin, Copy, Check } from 'lucide-react';

export default function WeightCalculatorClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [weight, setWeight] = useState<string>('');
  const [weightUnit, setWeightUnit] = useState<'lbs' | 'kg'>('lbs');
  const [bcs, setBcs] = useState<number>(5);
  const [breed, setBreed] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [result, setResult] = useState<{
    idealWeight: { min: number; max: number };
    bcsStatus: string;
    bcsDescription: string;
    recommendation: string;
    bmi?: number;
    weightDifference?: number;
    percentageDifference?: number;
    breedIdealWeight?: { min: number; max: number };
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  // Breed-specific ideal weight ranges (in lbs)
  const breedIdealWeights: { [key: string]: { min: number; max: number } } = {
    // Small dogs
    'Chihuahua': { min: 2, max: 6 },
    'Yorkshire Terrier': { min: 4, max: 7 },
    'Pomeranian': { min: 3, max: 7 },
    'French Bulldog': { min: 20, max: 28 },
    'Beagle': { min: 20, max: 30 },
    // Medium dogs
    'Cocker Spaniel': { min: 20, max: 30 },
    'Border Collie': { min: 30, max: 45 },
    'Australian Shepherd': { min: 40, max: 65 },
    // Large dogs
    'Labrador Retriever': { min: 55, max: 80 },
    'Golden Retriever': { min: 55, max: 75 },
    'German Shepherd': { min: 50, max: 90 },
    'Boxer': { min: 55, max: 70 },
    // Giant dogs
    'Great Dane': { min: 110, max: 175 },
    'Saint Bernard': { min: 120, max: 180 },
    // Cats
    'Persian': { min: 7, max: 12 },
    'Maine Coon': { min: 8, max: 18 },
    'Siamese': { min: 6, max: 14 },
    'British Shorthair': { min: 7, max: 17 },
  };

  const calculateIdealWeight = () => {
    const weightNum = parseFloat(weight);
    if (!weightNum || weightNum <= 0) {
      alert('Please enter a valid weight');
      return;
    }

    setIsLoading(true);

    // Simulate AI processing with 3-second delay
    setTimeout(() => {
      // Convert to kg for calculations
      const weightKg = weightUnit === 'lbs' ? weightNum * 0.453592 : weightNum;
      const weightLbs = weightUnit === 'lbs' ? weightNum : weightNum * 2.20462;

    // Calculate ideal weight based on BCS
    let idealMultiplierMin = 0.95;
    let idealMultiplierMax = 1.05;
    let bcsStatus = 'Ideal';
    let bcsDescription = 'Your pet is at an ideal weight. Maintain current feeding and exercise routine.';
    let recommendation = 'Continue with current diet and exercise. Monitor weight monthly.';

    if (bcs <= 3) {
      idealMultiplierMin = 1.0;
      idealMultiplierMax = 1.1;
      bcsStatus = 'Underweight';
      bcsDescription = 'Your pet may be underweight. Consult your veterinarian to rule out health issues and develop a weight gain plan.';
      recommendation = 'Consult your veterinarian. May need increased portions, higher calorie food, or medical evaluation.';
    } else if (bcs >= 6 && bcs <= 7) {
      idealMultiplierMin = 0.85;
      idealMultiplierMax = 0.95;
      bcsStatus = 'Overweight';
      bcsDescription = 'Your pet is overweight. Gradual weight loss is recommended to prevent health issues.';
      recommendation = 'Reduce portions by 10-20%, increase exercise, and consult your veterinarian for a weight loss plan.';
    } else if (bcs >= 8) {
      idealMultiplierMin = 0.75;
      idealMultiplierMax = 0.85;
      bcsStatus = 'Obese';
      bcsDescription = 'Your pet is obese. Immediate veterinary consultation is recommended to develop a safe weight loss program.';
      recommendation = 'Veterinary consultation required. Need structured weight loss program with medical supervision.';
    }

    const idealMin = weightKg * idealMultiplierMin;
    const idealMax = weightKg * idealMultiplierMax;

    // Convert back to original unit
    const idealMinDisplay = weightUnit === 'lbs' ? idealMin * 2.20462 : idealMin;
    const idealMaxDisplay = weightUnit === 'lbs' ? idealMax * 2.20462 : idealMax;

    // Calculate BMI if height is provided (approximate for pets)
    let bmi: number | undefined;
    if (height) {
      const heightM = parseFloat(height) / 100; // Convert cm to meters
      if (heightM > 0) {
        bmi = weightKg / (heightM * heightM);
      }
    }

    // Calculate weight difference and percentage
    const idealMid = (idealMinDisplay + idealMaxDisplay) / 2;
    const weightDifference = weightNum - idealMid;
    const percentageDifference = (weightDifference / idealMid) * 100;

    // Get breed-specific ideal weight if breed is selected
    let breedIdealWeight: { min: number; max: number } | undefined;
    if (breed && breedIdealWeights[breed]) {
      breedIdealWeight = breedIdealWeights[breed];
      if (weightUnit === 'kg') {
        breedIdealWeight = {
          min: breedIdealWeight.min * 0.453592,
          max: breedIdealWeight.max * 0.453592,
        };
      }
    }

    setResult({
      idealWeight: {
        min: Math.round(idealMinDisplay * 10) / 10,
        max: Math.round(idealMaxDisplay * 10) / 10,
      },
      bcsStatus,
      bcsDescription,
      recommendation,
      bmi: bmi ? Math.round(bmi * 10) / 10 : undefined,
      weightDifference: Math.round(weightDifference * 10) / 10,
      percentageDifference: Math.round(percentageDifference * 10) / 10,
      breedIdealWeight,
    });
    setIsLoading(false);
    }, 3000); // 3-second delay
  };

  // Helper functions for enhanced features
  const getWeightData = () => {
    if (!result) return [];
    
    return [
      { name: 'Current Weight', value: parseFloat(weight), color: '#EF4444' },
      { name: 'Ideal Min', value: result.idealWeight.min, color: '#3B82F6' },
      { name: 'Ideal Max', value: result.idealWeight.max, color: '#10B981' }
    ];
  };

  const getBCSData = () => {
    return [
      { score: 1, status: 'Very Thin', color: '#EF4444' },
      { score: 2, status: 'Thin', color: '#F59E0B' },
      { score: 3, status: 'Underweight', color: '#EAB308' },
      { score: 4, status: 'Lean', color: '#84CC16' },
      { score: 5, status: 'Ideal', color: '#10B981' },
      { score: 6, status: 'Overweight', color: '#F59E0B' },
      { score: 7, status: 'Heavy', color: '#EF4444' },
      { score: 8, status: 'Obese', color: '#991B1B' },
      { score: 9, status: 'Very Obese', color: '#7F1D1D' }
    ].map(item => ({
      ...item,
      current: item.score === bcs
    }));
  };

  const downloadPDF = () => {
    if (!result) return;
    
    const content = `
Pet Weight Analysis - NearbyPetCare.com
====================================

Pet Details:
- Type: ${petType.charAt(0).toUpperCase() + petType.slice(1)}
- Current Weight: ${weight} ${weightUnit}
- BCS Score: ${bcs}/9 (${result.bcsStatus})
- Breed: ${breed || 'Mixed'}

Weight Analysis:
- Current Weight: ${weight} ${weightUnit}
- Ideal Weight Range: ${result.idealWeight.min} - ${result.idealWeight.max} ${weightUnit}
- Weight Difference: ${result.weightDifference} ${weightUnit} (${result.percentageDifference}%)
${result.bmi ? `- BMI: ${result.bmi}` : ''}

Status: ${result.bcsStatus}
${result.bcsDescription}

Recommendations:
${result.recommendation}

Generated by NearbyPetCare.com
    `.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pet-weight-analysis.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const shareOnSocial = (platform: string) => {
    if (!result) return;
    
    const url = window.location.href;
    const shareText = `🐾 My ${petType} weight analysis:
    
⚖️ Current: ${weight} ${weightUnit} | Status: ${result.bcsStatus}
🎯 Ideal: ${result.idealWeight.min}-${result.idealWeight.max} ${weightUnit}
📊 BCS: ${bcs}/9 | Difference: ${result.weightDifference} ${weightUnit}

Check your pet's weight at nearbypetcare.com! 🐕🐈`;
    
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
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=Pet Weight Analysis&summary=${encodeURIComponent(shareText)}`;
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
            { name: 'Weight Calculator', href: '/tools/weight-calculator' }
          ]} />
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Pet Weight Calculator – Dog & Cat Ideal Weight & BMI Calculator
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Use our free pet weight calculator to determine your dog or cat's ideal weight range, body condition score (BCS), and BMI. Our dog weight calculator and cat weight calculator provide breed-specific recommendations to help you assess if your pet is at a healthy weight and get personalized weight management guidance.
            </p>
          </div>

          {/* Tool Screenshot/Image */}
          <div className="mb-8">
            <Image 
              src="/og-image.png" 
              alt="Pet Weight Calculator - Calculate ideal weight, body condition score, and BMI for dogs and cats"
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

              {/* Weight Input */}
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

              {/* Breed Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Breed (Optional - for breed-specific ideal weight)
                </label>
                <select
                  value={breed}
                  onChange={(e) => setBreed(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select breed...</option>
                  {Object.keys(breedIdealWeights).filter(b => 
                    (petType === 'dog' && !['Persian', 'Maine Coon', 'Siamese', 'British Shorthair'].includes(b)) ||
                    (petType === 'cat' && ['Persian', 'Maine Coon', 'Siamese', 'British Shorthair'].includes(b))
                  ).map((breedName) => (
                    <option key={breedName} value={breedName}>{breedName}</option>
                  ))}
                </select>
              </div>

              {/* Height (Optional - for BMI) */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Height at Shoulder (Optional - for BMI calculation, in cm)
                </label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Enter height in cm"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                  step="0.1"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Measure from ground to top of shoulder (withers)
                </p>
              </div>

              {/* Body Condition Score */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Body Condition Score (BCS): {bcs}/9
                </label>
                <input
                  type="range"
                  min="1"
                  max="9"
                  value={bcs}
                  onChange={(e) => setBcs(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>1 (Emaciated)</span>
                  <span>5 (Ideal)</span>
                  <span>9 (Obese)</span>
                </div>
                <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>BCS {bcs}/9:</strong> {
                      bcs <= 3 ? 'Underweight - Ribs, spine, and hip bones visible. No body fat.' :
                      bcs === 4 || bcs === 5 ? 'Ideal - Ribs easily felt but not visible. Waist visible from above. Abdomen tucks up.' :
                      bcs === 6 || bcs === 7 ? 'Overweight - Ribs difficult to feel. Waist barely visible. Some fat deposits.' :
                      'Obese - Ribs cannot be felt. No waist visible. Obvious fat deposits.'
                    }
                  </p>
                </div>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateIdealWeight}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Calculate Ideal Weight
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
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Weight Analysis Results</h2>
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
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Current Weight</div>
                  <div className="text-2xl font-bold text-red-600 dark:text-red-400">{weight} {weightUnit}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">actual</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Ideal Range</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{result.idealWeight.min}-{result.idealWeight.max} {weightUnit}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">target</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">BCS Status</div>
                  <div className="text-xl font-bold text-green-600 dark:text-green-400">{result.bcsStatus}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">score: {bcs}/9</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Difference</div>
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{result.weightDifference} {weightUnit}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{result.percentageDifference}%</div>
                </div>
              </div>

              {/* Charts Section */}
              <div className="space-y-6 mb-6">
                {/* Weight Comparison Chart */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Weight Comparison</h3>
                  <div className="h-64 sm:h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%" minWidth={300} minHeight={200}>
                      <BarChart data={getWeightData()} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                        <YAxis tick={{ fontSize: 12 }} />
                        <Tooltip />
                        <Bar dataKey="value" fill="#3B82F6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* BCS Scale */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Body Condition Score Scale</h3>
                  <div className="h-64 sm:h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%" minWidth={300} minHeight={200}>
                      <BarChart data={getBCSData()} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="score" tick={{ fontSize: 12 }} />
                        <YAxis tick={{ fontSize: 12 }} />
                        <Tooltip />
                        <Bar dataKey="current" fill="#10B981" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Analysis Details */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <span>📊</span> Weight Analysis
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Status</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{result.bcsStatus}</p>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Analysis</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{result.bcsDescription}</p>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Recommendation</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{result.recommendation}</p>
                  </div>
                  {result.bmi && (
                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">BMI</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{result.bmi}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* How Pet Weight Calculator Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Pet Weight Calculator Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our pet weight calculator uses body condition scoring (BCS) to determine your pet's ideal weight range. The BCS scale ranges from 1-9, with 5 being ideal. By entering your pet's current weight, body condition score, and optionally their breed, the calculator determines if your pet is underweight, ideal, overweight, or obese, and provides personalized recommendations.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Body Condition Score</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Body Condition Score (BCS) is a standardized method used by veterinarians to assess body fat. A score of 1-3 indicates underweight, 4-5 is ideal, 6-7 is overweight, and 8-9 is obese. The calculator uses this score along with your pet's current weight to calculate the ideal weight range and BMI.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do I calculate my pet's ideal weight?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Use our pet weight calculator by entering your pet's current weight, body condition score (BCS), and optionally their breed. The calculator will determine the ideal weight range based on BCS and provide breed-specific recommendations if available.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What is a body condition score (BCS) for pets?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Body Condition Score (BCS) is a 9-point scale used to assess a pet's body fat. A score of 5 is ideal, with 1-3 indicating underweight, 4-5 ideal, 6-7 overweight, and 8-9 obese. It helps determine if your pet needs to gain or lose weight.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How accurate is the pet weight calculator?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The calculator provides estimates based on body condition scoring and breed averages. Individual pets may vary based on frame size, muscle mass, and health conditions. Always consult your veterinarian for accurate weight assessment and personalized recommendations.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What should I do if my pet is overweight?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  If your pet is overweight, consult your veterinarian for a safe weight loss plan. Gradual weight loss (1-2% per week) is recommended. This typically involves reducing portions by 10-20%, increasing exercise, and potentially switching to a weight management diet.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/age-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Age Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Convert your pet's age to human years</p>
              </a>
              <a href="/tools/calorie-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Calorie Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate daily calorie needs for your pet</p>
              </a>
              <a href="/tools/feeding-portion-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Feeding Portion Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate the right portion sizes for your pet</p>
              </a>
              <a href="/tools/exercise-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Exercise Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate daily exercise needs for your pet</p>
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Disclaimer:</strong> This calculator provides estimates based on body condition scoring. Individual pets may vary. Always consult with your veterinarian for accurate weight assessment and personalized recommendations, especially for pets with health conditions or specific needs.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

