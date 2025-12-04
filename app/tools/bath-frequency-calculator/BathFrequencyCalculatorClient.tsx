'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import Loader from "@/components/Loader";
import { Download, X, Facebook, Instagram, MessageCircle, Send, Linkedin, Copy, Check } from "lucide-react";

export default function BathFrequencyCalculatorClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [coatType, setCoatType] = useState<string>('short');
  const [lifestyle, setLifestyle] = useState<string>('indoor');
  const [activityLevel, setActivityLevel] = useState<string>('moderate');
  const [skinCondition, setSkinCondition] = useState<string>('normal');
  const [result, setResult] = useState<{
    frequency: string;
    range: string;
    factors: Array<{ factor: string; impact: string }>;
    recommendations: string[];
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const calculateFrequency = () => {
    setIsLoading(true);

    // Simulate AI processing with 3-second delay
    setTimeout(() => {
      let baseFrequency = 6; // weeks
      const factors: Array<{ factor: string; impact: string }> = [];
      const recommendations: string[] = [];

      // Coat type factor
      if (coatType === 'short' || coatType === 'smooth') {
        baseFrequency = 8;
        factors.push({ factor: 'Coat Type', impact: 'Short coats need less frequent bathing (every 6-8 weeks)' });
      } else if (coatType === 'medium') {
        baseFrequency = 6;
        factors.push({ factor: 'Coat Type', impact: 'Medium coats need moderate bathing (every 4-6 weeks)' });
      } else if (coatType === 'long' || coatType === 'double') {
        baseFrequency = 4;
        factors.push({ factor: 'Coat Type', impact: 'Long/double coats need more frequent bathing (every 3-4 weeks)' });
      } else if (coatType === 'curly') {
        baseFrequency = 5;
        factors.push({ factor: 'Coat Type', impact: 'Curly coats need regular bathing (every 4-6 weeks)' });
      }

      // Lifestyle factor
      if (lifestyle === 'outdoor') {
        baseFrequency -= 2;
        factors.push({ factor: 'Lifestyle', impact: 'Outdoor pets get dirtier and need more frequent bathing' });
      } else if (lifestyle === 'indoor') {
        factors.push({ factor: 'Lifestyle', impact: 'Indoor pets stay cleaner and need less frequent bathing' });
      }

      // Activity level
      if (activityLevel === 'high') {
        baseFrequency -= 1;
        factors.push({ factor: 'Activity Level', impact: 'Highly active pets may need more frequent bathing' });
      } else if (activityLevel === 'low') {
        baseFrequency += 1;
        factors.push({ factor: 'Activity Level', impact: 'Less active pets need less frequent bathing' });
      }

      // Skin condition
      if (skinCondition === 'oily') {
        baseFrequency -= 1;
        factors.push({ factor: 'Skin Condition', impact: 'Oily skin may need more frequent bathing' });
      } else if (skinCondition === 'dry' || skinCondition === 'sensitive') {
        baseFrequency += 2;
        factors.push({ factor: 'Skin Condition', impact: 'Dry or sensitive skin needs less frequent bathing to preserve natural oils' });
      } else if (skinCondition === 'skin-condition') {
        factors.push({ factor: 'Skin Condition', impact: 'Follow veterinarian\'s recommendations for bathing frequency' });
      }

      // Ensure minimum and maximum
      if (baseFrequency < 2) baseFrequency = 2;
      if (baseFrequency > 12) baseFrequency = 12;

      const minFrequency = Math.max(2, baseFrequency - 2);
      const maxFrequency = Math.min(12, baseFrequency + 2);

      let frequency = '';
      if (baseFrequency <= 3) {
        frequency = 'Every 2-4 weeks';
      } else if (baseFrequency <= 5) {
        frequency = 'Every 4-6 weeks';
      } else if (baseFrequency <= 7) {
        frequency = 'Every 6-8 weeks';
      } else {
        frequency = 'Every 8-12 weeks';
      }

      const range = `Every ${minFrequency}-${maxFrequency} weeks`;

      recommendations.push(`Recommended bathing frequency: ${frequency}`);
      recommendations.push('Bathe when your pet is dirty, smelly, or has rolled in something');
      recommendations.push('Use pet-specific, pH-balanced shampoo');
      recommendations.push('Rinse thoroughly to prevent skin irritation');
      recommendations.push('Avoid over-bathing, which can strip natural oils and cause dry skin');

      if (skinCondition === 'dry' || skinCondition === 'sensitive') {
        recommendations.push('For dry or sensitive skin, use moisturizing shampoos and bathe less frequently');
      }

      if (lifestyle === 'outdoor') {
        recommendations.push('Outdoor pets may need spot cleaning between full baths');
      }

      setResult({ frequency, range, factors, recommendations });
      setIsLoading(false);
    }, 3000);
  };

  const downloadPDF = () => {
    if (!result) return;
    const content = `
Bath Frequency Calculator - NearbyPetCare.com
=============================================

Recommended Frequency: ${result.frequency}
Range: ${result.range}

Factors Considered:
${result.factors.map(f => `- ${f.factor}: ${f.impact}`).join('\n')}

Recommendations:
${result.recommendations.map(r => `- ${r}`).join('\n')}

Generated by NearbyPetCare.com
    `.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bath-frequency.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const shareOnSocial = (platform: string) => {
    if (!result) return;

    const url = window.location.href;
    const shareText = `🛁 My ${petType === 'dog' ? 'Dog' : 'Cat'}'s Bathing Schedule:
    
Frequency: ${result.frequency}
    
Get your pet's bathing schedule at nearbypetcare.com!`;

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
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=My Pet's Bathing Schedule&summary=${encodeURIComponent(shareText)}`;
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

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Bath Frequency Calculator', href: '/tools/bath-frequency-calculator' }
          ]} />

          <div className="mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Bath Frequency Calculator
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Calculate the ideal bathing frequency for your pet based on multiple factors
              </p>
            </div>

            {/* Tool Screenshot/Image */}
            <div className="mb-8">
              <Image
                src="/og-image.png"
                alt="Bath Frequency Calculator - Calculate the ideal bathing frequency for your pet"
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
                  Coat Type
                </label>
                <select
                  value={coatType}
                  onChange={(e) => setCoatType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="short">Short/Smooth</option>
                  <option value="medium">Medium</option>
                  <option value="long">Long</option>
                  <option value="double">Double Coat</option>
                  <option value="curly">Curly</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Lifestyle
                </label>
                <select
                  value={lifestyle}
                  onChange={(e) => setLifestyle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="indoor">Primarily Indoor</option>
                  <option value="mixed">Indoor/Outdoor</option>
                  <option value="outdoor">Primarily Outdoor</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Activity Level
                </label>
                <select
                  value={activityLevel}
                  onChange={(e) => setActivityLevel(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
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
                  <option value="dry">Dry</option>
                  <option value="oily">Oily</option>
                  <option value="sensitive">Sensitive</option>
                  <option value="skin-condition">Skin Condition (follow vet advice)</option>
                </select>
              </div>

              <button
                onClick={calculateFrequency}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Calculate Bath Frequency
              </button>
            </div>
          </div>

          <Loader
            isLoading={isLoading}
            message="Calculating optimal bathing schedule..."
            petType={petType}
            size="large"
          />

          {result && !isLoading && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Bathing Frequency Recommendation</h2>

                <div className="flex flex-col gap-2 w-full sm:w-auto">
                  <button
                    onClick={downloadPDF}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Results</span>
                  </button>

                  <div className="flex flex-col items-center gap-2">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Share results</p>
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

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Recommended Frequency</div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{result.frequency}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Range: {result.range}</div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Factors Considered:</h3>
                <div className="space-y-2">
                  {result.factors.map((factor, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{factor.factor}:</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400 text-right">{factor.impact}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Recommendations:</h3>
                <ul className="space-y-2">
                  {result.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* How Bath Frequency Calculator Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Bath Frequency Calculator Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our bath frequency calculator analyzes multiple factors to determine the ideal bathing schedule for your pet. The tool considers coat type (short coats need less frequent bathing than long coats), lifestyle (outdoor pets need more frequent bathing), activity level (highly active pets may need more frequent bathing), and skin condition (dry or sensitive skin needs less frequent bathing). The calculator provides a recommended frequency range and explains how each factor influences the recommendation.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Bathing Frequency</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Most pets need bathing every 4-8 weeks, but this varies significantly based on individual factors. Over-bathing can strip natural oils and cause skin problems, while under-bathing can lead to odor and hygiene issues. The calculator balances these factors to provide a personalized recommendation that maintains healthy skin and coat while keeping your pet clean and comfortable.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How often should I bathe my pet?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Bathing frequency depends on several factors: coat type (short coats every 6-8 weeks, long coats every 3-4 weeks), lifestyle (outdoor pets need more frequent bathing), activity level (highly active pets may need more frequent bathing), and skin condition (dry or sensitive skin needs less frequent bathing). Most pets need bathing every 4-8 weeks. Bathe when your pet is dirty or smelly, and avoid over-bathing which can strip natural oils.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Can I bathe my pet too often?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes, over-bathing can be harmful. Bathing too frequently can strip the natural oils from your pet's skin and coat, leading to dryness, irritation, and increased risk of skin infections. Most pets should not be bathed more than once a week, and many pets only need bathing every 4-8 weeks. Signs of over-bathing include dry, flaky skin, excessive scratching, and a dull coat. If your pet needs frequent cleaning, consider spot cleaning or using waterless shampoos between full baths.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What factors affect how often I should bathe my pet?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Factors affecting bathing frequency include: coat type (long coats may need more frequent bathing), lifestyle (outdoor pets get dirtier), activity level (highly active pets may need more frequent bathing), skin condition (dry or sensitive skin needs less frequent bathing), and individual needs (some pets have naturally oily coats or skin conditions requiring specific schedules). Always consider your pet's individual needs and consult your veterinarian for pets with skin conditions.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/grooming-schedule-generator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Grooming Schedule Generator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Create a complete grooming schedule</p>
              </a>
              <a href="/tools/coat-type-identification-tool" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Coat Type Identification Tool</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Identify your pet's coat type</p>
              </a>
              <a href="/tools/grooming-tools-recommender" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Grooming Tools Recommender</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Find the right grooming tools</p>
              </a>
              <a href="/pet-grooming" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Grooming Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn professional grooming techniques</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This calculator provides general guidelines. Adjust based on your pet's individual needs. Bathe when your pet is dirty or smelly, and avoid over-bathing which can cause dry skin. For pets with skin conditions, follow your veterinarian's specific recommendations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

