'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function IntelligencePlayStyleTestClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [result, setResult] = useState<{
    intelligence: string;
    playStyle: string;
    description: string;
    characteristics: string[];
    recommendations: string[];
    activities: Array<{ activity: string; description: string }>;
  } | null>(null);

  const questions = [
    { id: 'problem_solving', question: 'How quickly does your pet solve puzzles or figure out how to get treats?', options: ['Very quickly', 'Moderately quickly', 'Slowly', 'Not interested'] },
    { id: 'training', question: 'How quickly does your pet learn new commands?', options: ['Very quickly (1-3 tries)', 'Quickly (4-10 tries)', 'Moderately (10-20 tries)', 'Slowly (20+ tries)'] },
    { id: 'play_preference', question: 'What type of play does your pet prefer?', options: ['Interactive games with owner', 'Puzzle toys and games', 'Physical play (fetch, chase)', 'Independent play with toys'] },
    { id: 'attention', question: 'How long can your pet focus on a task?', options: ['Long periods (10+ minutes)', 'Moderate periods (5-10 minutes)', 'Short periods (2-5 minutes)', 'Very short (less than 2 minutes)'] },
    { id: 'curiosity', question: 'How curious is your pet about new things?', options: ['Very curious, explores everything', 'Moderately curious', 'Somewhat cautious', 'Not very curious'] },
    { id: 'independence', question: 'How independent is your pet?', options: ['Very independent', 'Moderately independent', 'Somewhat dependent', 'Very dependent on owner'] },
    { id: 'energy', question: 'What is your pet\'s energy level?', options: ['Very high', 'High', 'Moderate', 'Low'] },
  ];

  const updateResponse = (id: string, value: string) => {
    setResponses({ ...responses, [id]: value });
  };

  const testIntelligence = () => {
    if (Object.keys(responses).length < questions.length) {
      alert('Please answer all questions');
      return;
    }

    let intelligenceScore = 0;
    let playStyleScore = 0;
    const characteristics: string[] = [];
    const recommendations: string[] = [];
    const activities: Array<{ activity: string; description: string }> = [];

    // Calculate intelligence score
    const intelligenceQuestions = ['problem_solving', 'training', 'attention', 'curiosity'];
    intelligenceQuestions.forEach(id => {
      const response = responses[id];
      if (response === 'Very quickly' || response === 'Very curious, explores everything' || response === 'Long periods (10+ minutes)') intelligenceScore += 4;
      else if (response === 'Quickly (4-10 tries)' || response === 'Moderately quickly' || response === 'Moderately curious' || response === 'Moderate periods (5-10 minutes)') intelligenceScore += 3;
      else if (response === 'Moderately (10-20 tries)' || response === 'Slowly' || response === 'Somewhat cautious' || response === 'Short periods (2-5 minutes)') intelligenceScore += 2;
      else intelligenceScore += 1;
    });

    // Determine intelligence level
    let intelligence = '';
    if (intelligenceScore >= 14) {
      intelligence = 'High Intelligence';
      characteristics.push('Quick learner');
      characteristics.push('Excellent problem-solving skills');
      characteristics.push('High curiosity and exploration');
      recommendations.push('Provide challenging puzzle toys and games');
      recommendations.push('Engage in regular training sessions');
      recommendations.push('Consider advanced training or dog sports');
    } else if (intelligenceScore >= 10) {
      intelligence = 'Above Average Intelligence';
      characteristics.push('Good learning ability');
      characteristics.push('Moderate problem-solving skills');
      characteristics.push('Curious and engaged');
      recommendations.push('Provide mental stimulation through training and puzzles');
      recommendations.push('Keep training sessions interesting and varied');
    } else if (intelligenceScore >= 6) {
      intelligence = 'Average Intelligence';
      characteristics.push('Moderate learning ability');
      characteristics.push('Benefits from repetition');
      characteristics.push('May need more time to learn');
      recommendations.push('Use consistent, repetitive training');
      recommendations.push('Be patient with learning');
      recommendations.push('Provide clear, simple instructions');
    } else {
      intelligence = 'Lower Intelligence / Special Needs';
      characteristics.push('May learn more slowly');
      characteristics.push('Benefits from simple, clear training');
      characteristics.push('May have special learning needs');
      recommendations.push('Use simple, clear commands');
      recommendations.push('Be very patient and consistent');
      recommendations.push('Consider if there are underlying health or cognitive issues');
    }

    // Determine play style
    const playResponse = responses.play_preference;
    const energyResponse = responses.energy;
    const independenceResponse = responses.independence;

    let playStyle = '';
    if (playResponse === 'Interactive games with owner' && energyResponse === 'Very high') {
      playStyle = 'High-Energy Interactive';
      characteristics.push('Loves interactive play with owner');
      characteristics.push('High energy and enthusiasm');
      activities.push({
        activity: 'Fetch and retrieve games',
        description: 'Engage in active fetch games that combine physical and mental exercise'
      });
      activities.push({
        activity: 'Agility or obstacle courses',
        description: 'Set up simple obstacle courses for physical and mental challenge'
      });
      activities.push({
        activity: 'Training games',
        description: 'Combine training with play for mental stimulation'
      });
    } else if (playResponse === 'Puzzle toys and games') {
      playStyle = 'Problem-Solving / Mental';
      characteristics.push('Enjoys mental challenges');
      characteristics.push('Prefers puzzle-solving activities');
      activities.push({
        activity: 'Puzzle feeders and treat dispensers',
        description: 'Provide various puzzle toys that require problem-solving'
      });
      activities.push({
        activity: 'Hide and seek games',
        description: 'Hide treats or toys for your pet to find'
      });
      activities.push({
        activity: 'Training and trick learning',
        description: 'Teach new tricks and commands regularly'
      });
    } else if (playResponse === 'Physical play (fetch, chase)') {
      playStyle = 'Physical / Active';
      characteristics.push('Enjoys physical activities');
      characteristics.push('Prefers active play');
      activities.push({
        activity: 'Fetch and running games',
        description: 'Engage in active physical play'
      });
      activities.push({
        activity: 'Tug-of-war (for dogs)',
        description: 'Play tug games with appropriate toys'
      });
      activities.push({
        activity: 'Chase games (for cats)',
        description: 'Use wand toys for chase and pounce games'
      });
    } else {
      playStyle = 'Independent / Self-Entertainment';
      characteristics.push('Enjoys independent play');
      characteristics.push('Can entertain themselves');
      activities.push({
        activity: 'Interactive toys',
        description: 'Provide toys that pets can play with independently'
      });
      activities.push({
        activity: 'Food-dispensing toys',
        description: 'Use treat-dispensing toys for independent entertainment'
      });
      activities.push({
        activity: 'Rotating toy selection',
        description: 'Rotate toys to keep them interesting'
      });
    }

    // General recommendations
    recommendations.push('Match activities to your pet\'s intelligence and play style');
    recommendations.push('Provide both mental and physical stimulation');
    recommendations.push('Rotate toys and activities to prevent boredom');
    recommendations.push('Adjust difficulty based on your pet\'s abilities');

    const description = `Your pet shows ${intelligence.toLowerCase()} and prefers ${playStyle.toLowerCase()} play style.`;

    setResult({ intelligence, playStyle, description, characteristics, recommendations, activities });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Intelligence & Play Style Test', href: '/tools/intelligence-play-style-test' }
          ]} />
          
          <div className="text-center mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Intelligence & Play Style Test
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover your pet's intelligence level and preferred play style to provide appropriate activities
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

              {questions.map((q, index) => (
                <div key={q.id}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {index + 1}. {q.question}
                  </label>
                  <select
                    value={responses[q.id] || ''}
                    onChange={(e) => updateResponse(q.id, e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">Select an answer</option>
                    {q.options.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              ))}

              <button
                onClick={testIntelligence}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Test Intelligence & Play Style
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Test Results</h2>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Intelligence Level</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">{result.intelligence}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Play Style</div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-3">{result.playStyle}</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{result.description}</p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Characteristics:</h3>
                <ul className="space-y-1">
                  {result.characteristics.map((char, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-green-500 mt-1">•</span>
                      <span>{char}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Recommended Activities:</h3>
                <div className="space-y-3">
                  {result.activities.map((activity, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{activity.activity}</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{activity.description}</p>
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

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> Intelligence and play style can vary significantly between individual pets, even within the same breed. This test provides general guidance. Adjust activities based on your pet's individual preferences and abilities.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

