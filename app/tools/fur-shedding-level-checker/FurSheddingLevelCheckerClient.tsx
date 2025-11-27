'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export default function FurSheddingLevelCheckerClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [coatType, setCoatType] = useState<string>('short');
  const [sheddingFrequency, setSheddingFrequency] = useState<string>('seasonal');
  const [sheddingAmount, setSheddingAmount] = useState<string>('moderate');
  const [season, setSeason] = useState<string>('spring');
  const [result, setResult] = useState<{
    level: string;
    description: string;
    factors: Array<{ factor: string; impact: string }>;
    management: string[];
    recommendations: string[];
  } | null>(null);

  const checkSheddingLevel = () => {
    let level = '';
    let description = '';
    const factors: Array<{ factor: string; impact: string }> = [];
    const management: string[] = [];
    const recommendations: string[] = [];

    // Determine base shedding level
    let sheddingScore = 0;

    // Coat type factor
    if (coatType === 'short' || coatType === 'smooth') {
      sheddingScore += 1;
      factors.push({ factor: 'Coat Type', impact: 'Short coats typically shed moderately' });
    } else if (coatType === 'medium') {
      sheddingScore += 2;
      factors.push({ factor: 'Coat Type', impact: 'Medium coats shed moderately to heavily' });
    } else if (coatType === 'double') {
      sheddingScore += 4;
      factors.push({ factor: 'Coat Type', impact: 'Double coats shed heavily, especially during seasonal changes' });
    } else if (coatType === 'long') {
      sheddingScore += 3;
      factors.push({ factor: 'Coat Type', impact: 'Long coats can shed significantly' });
    } else if (coatType === 'curly') {
      sheddingScore += 1;
      factors.push({ factor: 'Coat Type', impact: 'Curly coats typically shed less but require regular grooming' });
    }

    // Shedding frequency
    if (sheddingFrequency === 'year-round') {
      sheddingScore += 2;
      factors.push({ factor: 'Shedding Frequency', impact: 'Year-round shedding indicates continuous hair loss' });
    } else if (sheddingFrequency === 'seasonal') {
      sheddingScore += 1;
      factors.push({ factor: 'Shedding Frequency', impact: 'Seasonal shedding is normal, especially in spring and fall' });
    } else if (sheddingFrequency === 'minimal') {
      sheddingScore += 0;
      factors.push({ factor: 'Shedding Frequency', impact: 'Minimal shedding is typical for low-shedding breeds' });
    }

    // Shedding amount
    if (sheddingAmount === 'heavy') {
      sheddingScore += 3;
      factors.push({ factor: 'Shedding Amount', impact: 'Heavy shedding requires frequent grooming and cleaning' });
    } else if (sheddingAmount === 'moderate') {
      sheddingScore += 2;
      factors.push({ factor: 'Shedding Amount', impact: 'Moderate shedding is manageable with regular grooming' });
    } else if (sheddingAmount === 'light') {
      sheddingScore += 1;
      factors.push({ factor: 'Shedding Amount', impact: 'Light shedding is typical for low-shedding breeds' });
    }

    // Season factor
    if (season === 'spring' || season === 'fall') {
      sheddingScore += 1;
      factors.push({ factor: 'Season', impact: 'Spring and fall are peak shedding seasons for many pets' });
    }

    // Determine level
    if (sheddingScore <= 2) {
      level = 'Low Shedding';
      description = 'Your pet has minimal to low shedding. This is typical for breeds with single coats, curly coats, or hairless breeds.';
      management.push('Weekly brushing is usually sufficient');
      management.push('Vacuuming 1-2 times per week');
      management.push('Minimal hair on furniture and clothing');
    } else if (sheddingScore <= 4) {
      level = 'Moderate Shedding';
      description = 'Your pet has moderate shedding. Regular grooming and cleaning will help manage the hair.';
      management.push('Brush 2-3 times per week');
      management.push('Vacuuming 2-3 times per week');
      management.push('Use lint rollers for clothing and furniture');
      management.push('Consider deshedding tools during peak seasons');
    } else if (sheddingScore <= 6) {
      level = 'Heavy Shedding';
      description = 'Your pet has heavy shedding. This requires frequent grooming and cleaning to manage.';
      management.push('Brush daily, especially during shedding seasons');
      management.push('Use deshedding tools (undercoat rake, Furminator)');
      management.push('Vacuuming daily or every other day');
      management.push('Consider professional deshedding treatments');
      management.push('Use furniture covers and lint rollers frequently');
    } else {
      level = 'Very Heavy Shedding';
      description = 'Your pet has very heavy shedding. This requires intensive grooming and cleaning management.';
      management.push('Brush daily with deshedding tools');
      management.push('Professional grooming every 4-6 weeks');
      management.push('Daily vacuuming recommended');
      management.push('Use air purifiers to reduce airborne hair');
      management.push('Furniture covers and frequent lint rolling');
      management.push('Consider deshedding shampoos and treatments');
    }

    // General recommendations
    recommendations.push('Regular brushing is the most effective way to manage shedding');
    recommendations.push('Use appropriate tools: slicker brushes for most coats, undercoat rakes for double coats');
    recommendations.push('Bathing can help remove loose hair, but don\'t over-bathe');
    recommendations.push('A healthy diet with omega-3 fatty acids can improve coat health and reduce excessive shedding');
    recommendations.push('Ensure your pet is well-hydrated');
    
    if (coatType === 'double') {
      recommendations.push('Double-coated breeds benefit from professional deshedding treatments');
      recommendations.push('Never shave double-coated breeds - it can damage the coat');
    }

    if (sheddingFrequency === 'year-round' && sheddingAmount === 'heavy') {
      recommendations.push('Year-round heavy shedding may indicate health issues - consult your veterinarian');
      recommendations.push('Check for skin conditions, allergies, or nutritional deficiencies');
    }

    if (season === 'spring' || season === 'fall') {
      recommendations.push('Expect increased shedding during seasonal transitions');
      recommendations.push('Increase grooming frequency during peak shedding seasons');
    }

    setResult({ level, description, factors, management, recommendations });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Fur Shedding Level Checker', href: '/tools/fur-shedding-level-checker' }
          ]} />
          
          <div className="mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Fur Shedding Level Checker
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Assess your pet's shedding level and get personalized management recommendations
              </p>
            </div>

            {/* Tool Screenshot/Image */}
            <div className="mb-8">
              <Image 
                src="/og-image.png" 
                alt="Fur Shedding Level Checker - Assess your pet's shedding level"
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
                  Shedding Frequency
                </label>
                <select
                  value={sheddingFrequency}
                  onChange={(e) => setSheddingFrequency(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="minimal">Minimal</option>
                  <option value="seasonal">Seasonal (spring/fall)</option>
                  <option value="year-round">Year-Round</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Shedding Amount
                </label>
                <select
                  value={sheddingAmount}
                  onChange={(e) => setSheddingAmount(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="light">Light</option>
                  <option value="moderate">Moderate</option>
                  <option value="heavy">Heavy</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Current Season
                </label>
                <select
                  value={season}
                  onChange={(e) => setSeason(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="spring">Spring</option>
                  <option value="summer">Summer</option>
                  <option value="fall">Fall</option>
                  <option value="winter">Winter</option>
                </select>
              </div>

              <button
                onClick={checkSheddingLevel}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Check Shedding Level
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Shedding Level Assessment</h2>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Shedding Level</div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{result.level}</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.description}</p>
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

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Management Strategies:</h3>
                <ul className="space-y-2">
                  {result.management.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Recommendations:</h3>
                <ul className="space-y-2">
                  {result.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* How Fur Shedding Level Checker Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Fur Shedding Level Checker Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our fur shedding level checker assesses your pet's shedding level by analyzing coat type, shedding amount, and current season. The tool considers that different coat types have different shedding patterns: low-shedding breeds shed minimally year-round, moderate-shedding breeds shed regularly with seasonal increases, and heavy-shedding breeds (especially double-coated) shed heavily during spring and fall coat changes. The tool provides management strategies and grooming recommendations based on the assessed level.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Shedding Patterns</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Normal shedding varies by breed and coat type. Low-shedding breeds (like Poodles, Bichons) shed minimally year-round. Moderate-shedding breeds shed regularly with seasonal increases. Heavy-shedding breeds (especially double-coated breeds like Huskies, Golden Retrievers) shed heavily, especially during spring and fall coat changes. Some shedding is always normal, but excessive or sudden changes may indicate health issues such as allergies, skin conditions, nutritional deficiencies, or stress.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How much shedding is normal for pets?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Normal shedding varies by breed and coat type. Low-shedding breeds (like Poodles, Bichons) shed minimally year-round. Moderate-shedding breeds shed regularly with seasonal increases. Heavy-shedding breeds (especially double-coated breeds like Huskies, Golden Retrievers) shed heavily, especially during spring and fall coat changes. Some shedding is always normal, but excessive or sudden changes may indicate health issues.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How can I reduce my pet's shedding?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  To reduce shedding: brush your pet regularly (daily for heavy shedders, 2-3 times per week for moderate shedders), use appropriate deshedding tools (undercoat rakes, Furminators), bathe regularly with deshedding shampoos, ensure a healthy diet with omega-3 fatty acids, keep your pet well-hydrated, and consider professional deshedding treatments. Regular grooming is the most effective way to manage shedding.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">When should I be concerned about excessive shedding?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Be concerned about shedding if you notice: sudden increase in shedding, bald patches or thinning areas, skin irritation or redness, excessive scratching, changes in coat texture, or if shedding is accompanied by other symptoms like lethargy or appetite changes. These may indicate health issues such as allergies, skin infections, parasites, nutritional deficiencies, or stress. Consult your veterinarian if you notice unusual shedding patterns.
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
              <a href="/tools/grooming-tools-recommender" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Grooming Tools Recommender</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Find deshedding tools</p>
              </a>
              <a href="/tools/coat-type-identification-tool" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Coat Type Identification Tool</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Identify your pet's coat type</p>
              </a>
              <a href="/pet-grooming" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Grooming Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn professional grooming techniques</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> Shedding is normal for most pets. However, excessive or sudden changes in shedding may indicate health issues such as allergies, skin conditions, nutritional deficiencies, or stress. If you notice unusual shedding patterns, consult your veterinarian.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

