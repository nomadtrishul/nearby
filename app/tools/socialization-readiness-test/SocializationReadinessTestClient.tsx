'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export default function SocializationReadinessTestClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [age, setAge] = useState<string>('8');
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [result, setResult] = useState<{
    readiness: string;
    score: number;
    description: string;
    recommendations: string[];
    activities: Array<{ activity: string; description: string; when: string }>;
  } | null>(null);

  const questions = [
    { id: 'vaccinations', question: 'Is your pet fully vaccinated?', options: ['Yes, fully vaccinated', 'Partially vaccinated', 'Not yet'] },
    { id: 'health', question: 'Is your pet in good health?', options: ['Yes, healthy', 'Minor issues', 'Health concerns'] },
    { id: 'comfort', question: 'How does your pet react to new people?', options: ['Curious and friendly', 'Cautious but okay', 'Fearful or aggressive'] },
    { id: 'other_pets', question: 'How does your pet react to other animals?', options: ['Curious and friendly', 'Cautious but okay', 'Fearful or aggressive'] },
    { id: 'noises', question: 'How does your pet react to new sounds?', options: ['Not bothered', 'Slightly startled but recovers', 'Very fearful'] },
    { id: 'handling', question: 'How does your pet react to being handled?', options: ['Comfortable', 'Tolerates it', 'Resists or fearful'] },
    { id: 'environments', question: 'How does your pet react to new environments?', options: ['Explores confidently', 'Cautious but explores', 'Very fearful or hides'] },
  ];

  const updateResponse = (id: string, value: string) => {
    setResponses({ ...responses, [id]: value });
  };

  const testReadiness = () => {
    const ageNum = parseInt(age);
    if (!ageNum || ageNum < 0) {
      alert('Please enter a valid age');
      return;
    }

    if (Object.keys(responses).length < questions.length) {
      alert('Please answer all questions');
      return;
    }

    let score = 0;
    const recommendations: string[] = [];
    const activities: Array<{ activity: string; description: string; when: string }> = [];

    // Score responses
    questions.forEach(q => {
      const response = responses[q.id];
      if (response === questions.find(q2 => q2.id === q.id)?.options[0]) score += 3;
      else if (response === questions.find(q2 => q2.id === q.id)?.options[1]) score += 2;
      else score += 1;
    });

    // Age considerations
    if (ageNum < 8) {
      score -= 2;
      recommendations.push('Puppies/kittens under 8 weeks should stay with their mother and littermates');
    } else if (ageNum >= 8 && ageNum < 16) {
      recommendations.push('This is the critical socialization period - ideal time for positive experiences');
    } else if (ageNum >= 16) {
      recommendations.push('Socialization can still be effective but may take more time and patience');
    }

    // Vaccination check
    if (responses.vaccinations !== 'Yes, fully vaccinated') {
      score -= 3;
      recommendations.push('⚠️ Ensure your pet is fully vaccinated before socializing with other animals');
      recommendations.push('Consult your veterinarian about safe socialization options');
    }

    // Health check
    if (responses.health !== 'Yes, healthy') {
      score -= 2;
      recommendations.push('Address any health concerns before intensive socialization');
      recommendations.push('Consult your veterinarian about appropriate socialization activities');
    }

    const maxScore = questions.length * 3;
    const percentage = Math.round((score / maxScore) * 100);

    let readiness = '';
    let description = '';

    if (percentage >= 75 && ageNum >= 8 && responses.vaccinations === 'Yes, fully vaccinated') {
      readiness = 'Ready for Socialization';
      description = 'Your pet appears ready for socialization activities. Start with controlled, positive experiences.';
      activities.push({
        activity: 'Controlled introductions',
        description: 'Introduce to calm, vaccinated pets in controlled settings',
        when: 'Start immediately'
      });
      activities.push({
        activity: 'Meet new people',
        description: 'Have calm, gentle people offer treats and positive interactions',
        when: 'Start immediately'
      });
      activities.push({
        activity: 'Visit new environments',
        description: 'Take to pet-friendly stores, parks (on leash), and other safe places',
        when: 'Start immediately'
      });
    } else if (percentage >= 50) {
      readiness = 'Ready with Caution';
      description = 'Your pet may be ready for socialization but needs careful, gradual introduction. Start slowly.';
      activities.push({
        activity: 'Gradual exposure',
        description: 'Start with very controlled, low-stress situations',
        when: 'Start gradually'
      });
      activities.push({
        activity: 'Positive associations',
        description: 'Pair new experiences with treats and positive reinforcement',
        when: 'Start immediately'
      });
      activities.push({
        activity: 'Professional guidance',
        description: 'Consider working with a trainer or behaviorist',
        when: 'As needed'
      });
    } else {
      readiness = 'Not Ready / Needs Preparation';
      description = 'Your pet needs preparation before socialization. Address health, vaccination, or fear issues first.';
      activities.push({
        activity: 'Address health/vaccination',
        description: 'Ensure vaccinations are complete and health issues are addressed',
        when: 'Before socialization'
      });
      activities.push({
        activity: 'Build confidence',
        description: 'Work on building confidence at home first',
        when: 'Start immediately'
      });
      activities.push({
        activity: 'Professional help',
        description: 'Consult a veterinarian or behaviorist for guidance',
        when: 'As soon as possible'
      });
    }

    // General recommendations
    recommendations.push('Always prioritize your pet\'s safety and comfort');
    recommendations.push('Use positive reinforcement - make new experiences positive');
    recommendations.push('Start with low-stress situations and gradually increase');
    recommendations.push('Watch for signs of stress or fear and stop if needed');
    recommendations.push('Socialization should be ongoing throughout your pet\'s life');

    if (ageNum >= 8 && ageNum < 16) {
      recommendations.push('This is the critical socialization window - expose to many positive experiences');
    }

    setResult({ readiness, score: percentage, description, recommendations, activities });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Socialization Readiness Test', href: '/tools/socialization-readiness-test' }
          ]} />
          
          <div className="mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Socialization Readiness Test
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Assess if your pet is ready for socialization activities
              </p>
            </div>

            {/* Tool Screenshot/Image */}
            <div className="mb-8">
              <Image 
                src="/og-image.png" 
                alt="Socialization Readiness Test - Assess if your pet is ready for socialization"
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
                  Age (weeks)
                </label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  min="0"
                  max="52"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Enter age in weeks (for puppies/kittens) or convert months to weeks</p>
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
                onClick={testReadiness}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Test Socialization Readiness
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Readiness Assessment</h2>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Socialization Readiness</div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{result.readiness}</div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Score: {result.score}%</div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full transition-all duration-500"
                      style={{ width: `${result.score}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">{result.description}</p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Recommended Activities:</h3>
                <div className="space-y-3">
                  {result.activities.map((activity, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white">{activity.activity}</h4>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{activity.when}</span>
                      </div>
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

          {/* How Socialization Readiness Test Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Socialization Readiness Test Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our socialization readiness test assesses if your pet is ready for socialization activities by evaluating age, health status, vaccination status, and current behavior. The tool considers the critical socialization period (8-16 weeks for puppies, 2-7 weeks for kittens) and provides a readiness score with recommendations for safe socialization activities. It helps ensure your pet is ready and safe to begin socialization experiences.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Socialization</h3>
              <p className="text-gray-700 dark:text-gray-300">
                The critical socialization period is a window when pets are most receptive to new experiences. For puppies, this is 8-16 weeks of age. For kittens, it's 2-7 weeks. During this time, positive experiences with people, animals, sounds, and environments help shape a confident, well-adjusted pet. However, ensure your pet is fully vaccinated and healthy before socializing with other animals. Always prioritize safety and positive experiences.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">When should I start socializing my pet?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The critical socialization period is 8-16 weeks for puppies and 2-7 weeks for kittens. However, socialization should continue throughout your pet's life. Start as soon as your pet is fully vaccinated and healthy. Early, positive socialization experiences are crucial for preventing fear and aggression later in life.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What is the critical socialization period?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The critical socialization period is a window when pets are most receptive to new experiences. For puppies, this is 8-16 weeks of age. For kittens, it's 2-7 weeks. During this time, positive experiences with people, animals, sounds, and environments help shape a confident, well-adjusted pet. Missing this window can make socialization more difficult later.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do I socialize my pet safely?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Socialize safely by: ensuring your pet is fully vaccinated before meeting other animals, starting with controlled, low-stress situations, using positive reinforcement (treats, praise), gradually increasing exposure, watching for signs of stress and stopping if needed, introducing to calm, vaccinated pets first, and avoiding overwhelming situations. Always prioritize your pet's safety and comfort.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/training-progress-tracker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Training Progress Tracker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Track training progress</p>
              </a>
              <a href="/tools/obedience-level-assessment-tool" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Obedience Level Assessment</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Evaluate current training level</p>
              </a>
              <a href="/tools/vaccination-schedule-generator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Vaccination Schedule Generator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Create vaccination schedules</p>
              </a>
              <a href="/pet-training" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Training Guides</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn effective training techniques</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> Socialization is crucial for pets, especially during the critical period (8-16 weeks for puppies, 2-7 weeks for kittens). However, ensure your pet is fully vaccinated and healthy before socializing with other animals. Always prioritize safety and positive experiences.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

