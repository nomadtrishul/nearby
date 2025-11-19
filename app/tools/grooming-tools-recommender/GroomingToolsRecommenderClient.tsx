'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function GroomingToolsRecommenderClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [coatType, setCoatType] = useState<string>('medium');
  const [groomingLevel, setGroomingLevel] = useState<string>('basic');
  const [result, setResult] = useState<{
    essential: Array<{ tool: string; description: string; use: string }>;
    recommended: Array<{ tool: string; description: string; use: string }>;
    optional: Array<{ tool: string; description: string; use: string }>;
    tips: string[];
  } | null>(null);

  const recommendTools = () => {
    const essential: Array<{ tool: string; description: string; use: string }> = [];
    const recommended: Array<{ tool: string; description: string; use: string }> = [];
    const optional: Array<{ tool: string; description: string; use: string }> = [];
    const tips: string[] = [];

    // Essential tools for all pets
    essential.push({
      tool: 'Nail Clippers',
      description: 'Guillotine or scissor-style clippers designed for pets',
      use: 'Trim nails every 2-4 weeks to prevent overgrowth and discomfort'
    });

    essential.push({
      tool: 'Ear Cleaner',
      description: 'Pet-specific ear cleaning solution',
      use: 'Clean ears weekly to monthly to prevent infections'
    });

    essential.push({
      tool: 'Toothbrush & Toothpaste',
      description: 'Pet-specific toothbrush and enzymatic toothpaste',
      use: 'Brush teeth daily or 3-4 times per week for dental health'
    });

    // Brushing tools based on coat type
    if (coatType === 'short' || coatType === 'smooth') {
      essential.push({
        tool: 'Soft Bristle Brush or Grooming Mitt',
        description: 'Gentle brush for short, smooth coats',
        use: 'Weekly brushing to remove loose hair and distribute oils'
      });
    } else if (coatType === 'medium') {
      essential.push({
        tool: 'Slicker Brush',
        description: 'Brush with fine, short wires close together',
        use: '2-3 times per week to prevent matting and remove loose hair'
      });
      recommended.push({
        tool: 'Comb',
        description: 'Wide-tooth or fine-tooth comb',
        use: 'Use after slicker brush to remove remaining tangles'
      });
    } else if (coatType === 'long') {
      essential.push({
        tool: 'Slicker Brush',
        description: 'Essential for long coats to prevent matting',
        use: 'Daily brushing to prevent painful matting'
      });
      essential.push({
        tool: 'Wide-tooth Comb',
        description: 'Comb for detangling long hair',
        use: 'Use after brushing to check for and remove tangles'
      });
      recommended.push({
        tool: 'Pin Brush',
        description: 'Brush with rounded pins for long coats',
        use: 'Alternative to slicker brush for sensitive skin'
      });
      recommended.push({
        tool: 'Detangling Spray',
        description: 'Spray to help detangle and condition',
        use: 'Apply before brushing to make detangling easier'
      });
    } else if (coatType === 'double') {
      essential.push({
        tool: 'Undercoat Rake',
        description: 'Tool designed to remove loose undercoat',
        use: 'Essential for managing heavy shedding in double coats'
      });
      essential.push({
        tool: 'Slicker Brush',
        description: 'For removing loose hair from top coat',
        use: 'Use after undercoat rake for complete grooming'
      });
      recommended.push({
        tool: 'Deshedding Tool (Furminator)',
        description: 'Specialized tool for removing loose undercoat',
        use: 'Very effective for heavy shedders, use weekly'
      });
    } else if (coatType === 'curly') {
      essential.push({
        tool: 'Pin Brush',
        description: 'Brush with rounded pins for curly coats',
        use: 'Daily brushing to prevent matting in curly hair'
      });
      essential.push({
        tool: 'Wide-tooth Comb',
        description: 'For detangling curly hair',
        use: 'Use after brushing to check for mats'
      });
      recommended.push({
        tool: 'Detangling Spray',
        description: 'Helps detangle and condition curly coats',
        use: 'Apply before brushing to prevent breakage'
      });
    }

    // Bathing tools
    if (groomingLevel === 'intermediate' || groomingLevel === 'advanced') {
      recommended.push({
        tool: 'Pet Shampoo',
        description: 'pH-balanced shampoo appropriate for your pet\'s coat and skin',
        use: 'Bathing every 4-8 weeks depending on coat type'
      });
      recommended.push({
        tool: 'Conditioner',
        description: 'Pet-specific conditioner for long or dry coats',
        use: 'Use after shampooing to moisturize and detangle'
      });
    }

    // Advanced grooming tools
    if (groomingLevel === 'advanced') {
      recommended.push({
        tool: 'Grooming Clippers',
        description: 'Professional-grade clippers for trimming',
        use: 'For trimming and maintaining coat length'
      });
      recommended.push({
        tool: 'Grooming Scissors',
        description: 'Straight and curved scissors for trimming',
        use: 'For precise trimming around face, feet, and tail'
      });
      optional.push({
        tool: 'Grooming Table',
        description: 'Elevated table with non-slip surface',
        use: 'Makes grooming easier and safer for both pet and owner'
      });
      optional.push({
        tool: 'Hair Dryer',
        description: 'Pet-specific dryer or human dryer on cool setting',
        use: 'For drying after bathing, especially long coats'
      });
    }

    // Additional tools
    recommended.push({
      tool: 'Styptic Powder',
      description: 'Powder to stop bleeding if nail is cut too short',
      use: 'Essential safety item for nail trimming'
    });

    optional.push({
      tool: 'Grooming Wipes',
      description: 'Pre-moistened wipes for quick cleaning',
      use: 'For spot cleaning between baths'
    });

    optional.push({
      tool: 'Waterless Shampoo',
      description: 'Foam or spray shampoo that doesn\'t require water',
      use: 'For quick cleaning between full baths'
    });

    // Tips
    tips.push('Invest in quality tools - they last longer and work better');
    tips.push('Start grooming routines early to get pets comfortable');
    tips.push('Use positive reinforcement and treats during grooming');
    tips.push('Clean and maintain your grooming tools regularly');
    tips.push('Replace brushes when bristles become bent or damaged');
    tips.push('Have styptic powder on hand when trimming nails');
    tips.push('Consult a professional groomer for tool recommendations specific to your pet\'s breed');

    if (coatType === 'double') {
      tips.push('Never shave double-coated breeds - it can damage the coat permanently');
    }

    if (coatType === 'long' || coatType === 'curly') {
      tips.push('Regular brushing is essential to prevent painful matting');
      tips.push('Consider professional grooming every 4-6 weeks for difficult coats');
    }

    setResult({ essential, recommended, optional, tips });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Grooming Tools Recommender', href: '/tools/grooming-tools-recommender' }
          ]} />
          
          <div className="text-center mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Grooming Tools Recommender
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get personalized grooming tool recommendations based on your pet's coat type and grooming needs
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
                  Grooming Level
                </label>
                <select
                  value={groomingLevel}
                  onChange={(e) => setGroomingLevel(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="basic">Basic (brushing, nails, ears)</option>
                  <option value="intermediate">Intermediate (includes bathing)</option>
                  <option value="advanced">Advanced (includes trimming/clipping)</option>
                </select>
              </div>

              <button
                onClick={recommendTools}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Tool Recommendations
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Recommended Grooming Tools</h2>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Essential Tools</h3>
                <div className="space-y-3">
                  {result.essential.map((tool, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{tool.tool}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{tool.description}</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">Use: {tool.use}</p>
                    </div>
                  ))}
                </div>
              </div>

              {result.recommended.length > 0 && (
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Recommended Tools</h3>
                  <div className="space-y-3">
                    {result.recommended.map((tool, index) => (
                      <div key={index} className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white">{tool.tool}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{tool.description}</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Use: {tool.use}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {result.optional.length > 0 && (
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Optional Tools</h3>
                  <div className="space-y-3">
                    {result.optional.map((tool, index) => (
                      <div key={index} className="border-l-4 border-gray-400 pl-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white">{tool.tool}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{tool.description}</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Use: {tool.use}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Tips:</h3>
                <ul className="space-y-2">
                  {result.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> Tool recommendations are general guidelines. Specific breeds may have unique grooming needs. Consult a professional groomer or your veterinarian for breed-specific recommendations. Always use tools safely and appropriately.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

