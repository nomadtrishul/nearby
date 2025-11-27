'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export default function CoatTypeIdentificationToolClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [characteristics, setCharacteristics] = useState<string[]>([]);
  const [result, setResult] = useState<{
    coatType: string;
    description: string;
    groomingNeeds: string[];
    tools: string[];
    recommendations: string[];
  } | null>(null);

  const allCharacteristics = [
    'Very short, smooth hair',
    'Medium length hair',
    'Long, flowing hair',
    'Curly or wavy hair',
    'Wiry, coarse hair',
    'Double coat (soft undercoat + guard hairs)',
    'Single layer coat',
    'Hairless or minimal hair',
    'Thick, dense coat',
    'Thin, fine coat',
    'Sheds heavily',
    'Minimal shedding',
    'Water-resistant coat',
    'Oily or greasy feel',
    'Dry, brittle hair',
  ];

  const toggleCharacteristic = (char: string) => {
    if (characteristics.includes(char)) {
      setCharacteristics(characteristics.filter(c => c !== char));
    } else {
      setCharacteristics([...characteristics, char]);
    }
  };

  const identifyCoatType = () => {
    if (characteristics.length === 0) {
      alert('Please select at least one characteristic');
      return;
    }

    let coatType = '';
    let description = '';
    const groomingNeeds: string[] = [];
    const tools: string[] = [];
    const recommendations: string[] = [];

    // Determine coat type based on characteristics
    if (characteristics.includes('Very short, smooth hair')) {
      coatType = 'Short/Smooth Coat';
      description = 'Short, smooth, close-lying hair that requires minimal grooming. Common in breeds like Beagles, Boxers, and Dobermans.';
      groomingNeeds.push('Weekly brushing with soft brush or grooming mitt');
      groomingNeeds.push('Bathing every 4-8 weeks');
      groomingNeeds.push('Minimal trimming needed');
      tools.push('Soft bristle brush', 'Grooming mitt', 'Rubber curry brush');
      recommendations.push('Short coats are low-maintenance but still benefit from regular brushing');
      recommendations.push('Use a soft brush to avoid skin irritation');
    } else if (characteristics.includes('Long, flowing hair') || characteristics.includes('Thick, dense coat')) {
      coatType = 'Long Coat';
      description = 'Long, flowing hair that requires regular maintenance to prevent matting. Common in breeds like Afghan Hounds, Shih Tzus, and Persians.';
      groomingNeeds.push('Daily brushing with slicker brush and comb');
      groomingNeeds.push('Bathing every 3-4 weeks');
      groomingNeeds.push('Regular trimming and professional grooming');
      groomingNeeds.push('Check for mats daily');
      tools.push('Slicker brush', 'Wide-tooth comb', 'Pin brush', 'Detangling spray');
      recommendations.push('Long coats require daily attention to prevent painful matting');
      recommendations.push('Start grooming routines early to get pets comfortable');
      recommendations.push('Consider professional grooming every 4-6 weeks');
    } else if (characteristics.includes('Double coat (soft undercoat + guard hairs)')) {
      coatType = 'Double Coat';
      description = 'Two-layer coat with a soft, dense undercoat and longer guard hairs. Common in breeds like Golden Retrievers, Huskies, and German Shepherds.';
      groomingNeeds.push('Daily brushing, especially during shedding season');
      groomingNeeds.push('Bathing every 4-6 weeks');
      groomingNeeds.push('Undercoat raking during heavy shedding');
      groomingNeeds.push('Professional de-shedding treatments');
      tools.push('Undercoat rake', 'Slicker brush', 'Deshedding tool', 'Furminator');
      recommendations.push('Double coats shed heavily, especially seasonally');
      recommendations.push('Regular brushing prevents mats and reduces shedding');
      recommendations.push('Avoid shaving double coats - it can damage the coat');
    } else if (characteristics.includes('Curly or wavy hair')) {
      coatType = 'Curly Coat';
      description = 'Tightly curled or wavy hair that requires special care. Common in breeds like Poodles, Bichon Frises, and Curly-Coated Retrievers.';
      groomingNeeds.push('Brushing every 1-2 days with pin brush');
      groomingNeeds.push('Bathing every 4-6 weeks with appropriate shampoo');
      groomingNeeds.push('Regular trimming and professional grooming');
      groomingNeeds.push('Prevent matting with regular maintenance');
      tools.push('Pin brush', 'Wide-tooth comb', 'Slicker brush', 'Detangling spray');
      recommendations.push('Curly coats mat easily and need frequent attention');
      recommendations.push('Professional grooming every 4-6 weeks recommended');
      recommendations.push('Use conditioner to maintain curl pattern');
    } else if (characteristics.includes('Wiry, coarse hair')) {
      coatType = 'Wiry Coat';
      description = 'Coarse, wiry hair that may require hand-stripping. Common in breeds like Terriers, Schnauzers, and Wirehaired Pointers.';
      groomingNeeds.push('Brushing 2-3 times per week');
      groomingNeeds.push('Bathing every 4-6 weeks');
      groomingNeeds.push('Hand-stripping or clipping (breed-dependent)');
      groomingNeeds.push('Regular trimming');
      tools.push('Slicker brush', 'Stripping knife (for hand-stripping)', 'Clippers');
      recommendations.push('Wiry coats may need hand-stripping for show dogs');
      recommendations.push('Clipping is easier but may soften the coat texture');
      recommendations.push('Consult a professional groomer familiar with wiry coats');
    } else if (characteristics.includes('Medium length hair')) {
      coatType = 'Medium Coat';
      description = 'Medium-length hair that requires moderate grooming. Common in many mixed breeds and breeds like Cocker Spaniels and Border Collies.';
      groomingNeeds.push('Brushing 2-3 times per week');
      groomingNeeds.push('Bathing every 4-6 weeks');
      groomingNeeds.push('Regular trimming as needed');
      tools.push('Slicker brush', 'Comb', 'Pin brush');
      recommendations.push('Medium coats are moderately maintenance');
      recommendations.push('Regular brushing prevents matting and reduces shedding');
    } else {
      coatType = 'Mixed or Unidentified Coat';
      description = 'Based on the selected characteristics, your pet may have a mixed coat type or unique characteristics.';
      groomingNeeds.push('Regular brushing appropriate for hair length');
      groomingNeeds.push('Bathing as needed (when dirty or smelly)');
      groomingNeeds.push('Monitor for mats and skin issues');
      tools.push('Appropriate brush for hair length', 'Comb');
      recommendations.push('Consult a professional groomer or veterinarian for specific recommendations');
      recommendations.push('Observe your pet\'s coat and adjust grooming routine accordingly');
    }

    // Additional recommendations based on other characteristics
    if (characteristics.includes('Sheds heavily')) {
      recommendations.push('Heavy shedding may indicate seasonal coat changes or health issues');
      recommendations.push('Increase brushing frequency during heavy shedding periods');
      recommendations.push('Consider deshedding tools and professional treatments');
    }

    if (characteristics.includes('Oily or greasy feel')) {
      recommendations.push('Oily coat may need more frequent bathing');
      recommendations.push('Use appropriate shampoo for oily coats');
      recommendations.push('Consult veterinarian if excessive oiliness persists');
    }

    setResult({ coatType, description, groomingNeeds, tools, recommendations });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Coat Type Identification Tool', href: '/tools/coat-type-identification-tool' }
          ]} />
          
          <div className="mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Coat Type Identification Tool
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Identify your pet's coat type based on characteristics to get personalized grooming recommendations
              </p>
            </div>

            {/* Tool Screenshot/Image */}
            <div className="mb-8">
              <Image 
                src="/og-image.png" 
                alt="Coat Type Identification Tool - Identify your pet's coat type"
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
                  onChange={(e) => {
                    setPetType(e.target.value as 'dog' | 'cat');
                    setCharacteristics([]);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  Select Characteristics (click to select/deselect)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-96 overflow-y-auto p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  {allCharacteristics.map((char, index) => (
                    <button
                      key={index}
                      onClick={() => toggleCharacteristic(char)}
                      className={`p-2 text-left rounded-lg border-2 text-sm transition-colors ${
                        characteristics.includes(char)
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {char}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={identifyCoatType}
                disabled={characteristics.length === 0}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Identify Coat Type
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Coat Type Identification</h2>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">{result.coatType}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{result.description}</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Grooming Needs:</h3>
                <ul className="space-y-2">
                  {result.groomingNeeds.map((need, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{need}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Recommended Tools:</h3>
                <div className="flex flex-wrap gap-2">
                  {result.tools.map((tool, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Recommendations:</h3>
                <ul className="space-y-2">
                  {result.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-green-500 mt-1">•</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* How Coat Type Identification Tool Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Coat Type Identification Tool Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our coat type identification tool analyzes your pet's coat characteristics to determine their coat type. By selecting features such as hair length, texture, number of layers, shedding amount, and overall feel, the tool matches these characteristics to common coat types. Once identified, the tool provides personalized grooming recommendations, tool suggestions, and care instructions specific to that coat type.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Coat Characteristics</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Coat identification is based on observable characteristics: length (short, medium, long), texture (smooth, wiry, curly), layers (single or double coat), shedding patterns, and overall feel. Each combination of characteristics corresponds to a specific coat type with unique grooming requirements. Proper identification ensures you use the right tools and techniques for your pet's specific needs.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What are the different types of pet coats?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Common coat types include: Short/Smooth (minimal grooming, weekly brushing), Medium (moderate grooming, 2-3 times per week), Long (daily brushing, frequent bathing), Double Coat (heavy shedding, daily brushing especially during shedding season), Curly (frequent brushing to prevent matting), and Wiry (coarse hair, may need hand-stripping). Each coat type has specific grooming requirements.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do I identify my pet's coat type?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  To identify your pet's coat type, observe: hair length (short, medium, long), texture (smooth, wiry, curly), number of layers (single or double coat), shedding amount, and overall feel (soft, coarse, oily). Select these characteristics in our tool to get an identification and personalized grooming recommendations.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Why is knowing my pet's coat type important?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Knowing your pet's coat type is important because different coats require different grooming routines, tools, and frequencies. For example, long coats need daily brushing to prevent matting, while short coats may only need weekly brushing. Using the wrong grooming approach can cause skin irritation, matting, or damage to the coat. Proper identification helps you provide appropriate care.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/grooming-tools-recommender" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Grooming Tools Recommender</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Find the right grooming tools</p>
              </a>
              <a href="/tools/grooming-schedule-generator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Grooming Schedule Generator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Create a complete grooming schedule</p>
              </a>
              <a href="/tools/bath-frequency-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Bath Frequency Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Determine optimal bathing frequency</p>
              </a>
              <a href="/pet-grooming" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Grooming Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn professional grooming techniques</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This tool provides general guidance based on coat characteristics. For specific breed information or if you're unsure about your pet's coat type, consult a professional groomer or veterinarian.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

