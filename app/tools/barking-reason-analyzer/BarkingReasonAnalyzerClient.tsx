'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function BarkingReasonAnalyzerClient() {
  const [barkingContext, setBarkingContext] = useState<string[]>([]);
  const [barkingType, setBarkingType] = useState<string>('alert');
  const [frequency, setFrequency] = useState<string>('occasional');
  const [duration, setDuration] = useState<string>('brief');
  const [result, setResult] = useState<{
    reason: string;
    description: string;
    triggers: string[];
    solutions: string[];
    urgency: string;
  } | null>(null);

  const allContexts = [
    'When someone approaches the door',
    'When left alone',
    'At other dogs',
    'At people walking by',
    'During play',
    'When excited',
    'At night',
    'When in the car',
    'At specific sounds',
    'When seeing other animals',
    'When owner is preparing to leave',
    'When owner returns home',
    'During walks',
    'When bored',
    'For attention',
  ];

  const toggleContext = (context: string) => {
    if (barkingContext.includes(context)) {
      setBarkingContext(barkingContext.filter(c => c !== context));
    } else {
      setBarkingContext([...barkingContext, context]);
    }
  };

  const analyzeBarking = () => {
    if (barkingContext.length === 0) {
      alert('Please select at least one context');
      return;
    }

    let reason = '';
    let description = '';
    const triggers: string[] = [];
    const solutions: string[] = [];
    let urgency = 'Low';

    // Determine reason based on context and type
    if (barkingContext.includes('When left alone') || barkingContext.includes('When owner is preparing to leave')) {
      reason = 'Separation Anxiety';
      description = 'Barking when left alone or when you\'re preparing to leave indicates separation anxiety. This is often accompanied by destructive behavior and distress.';
      triggers.push('Owner leaving or preparing to leave');
      triggers.push('Being alone');
      triggers.push('Changes in routine');
      solutions.push('Gradual desensitization to departures');
      solutions.push('Create a safe, comfortable space when alone');
      solutions.push('Provide mental stimulation (puzzle toys, treat dispensers)');
      solutions.push('Avoid making departures and arrivals a big deal');
      solutions.push('Consider professional training or behavior modification');
      solutions.push('In severe cases, consult a veterinarian about medication options');
      urgency = 'Moderate to High';
    } else if (barkingContext.includes('When someone approaches the door') || barkingContext.includes('At people walking by')) {
      reason = 'Territorial/Alert Barking';
      description = 'Barking at people approaching or passing by is territorial or alert barking. This is a natural behavior but can become excessive.';
      triggers.push('People approaching the property');
      triggers.push('People or animals passing by');
      triggers.push('Doorbell or knocking');
      solutions.push('Teach "quiet" command using positive reinforcement');
      solutions.push('Block visual access to triggers (close curtains, use window film)');
      solutions.push('Desensitize to doorbell/knocking sounds');
      solutions.push('Reward quiet behavior when triggers are present');
      solutions.push('Provide alternative activities when triggers occur');
      urgency = 'Low to Moderate';
    } else if (barkingContext.includes('At other dogs') || barkingContext.includes('During walks')) {
      reason = 'Reactive/Frustrated Barking';
      description = 'Barking at other dogs, especially during walks, is often reactive or frustrated barking. This can be due to fear, excitement, or lack of socialization.';
      triggers.push('Seeing other dogs');
      triggers.push('Leash frustration');
      triggers.push('Lack of socialization');
      triggers.push('Fear or anxiety around other dogs');
      solutions.push('Work on socialization in controlled environments');
      solutions.push('Use distance and counter-conditioning');
      solutions.push('Teach "look at me" or "watch" command');
      solutions.push('Consider professional training for reactivity');
      solutions.push('Avoid punishment, which can worsen reactivity');
      urgency = 'Moderate';
    } else if (barkingContext.includes('For attention') || barkingContext.includes('When excited')) {
      reason = 'Attention-Seeking/Excitement Barking';
      description = 'Barking for attention or when excited is a learned behavior. Dogs learn that barking gets them what they want.';
      triggers.push('Wanting attention from owner');
      triggers.push('Excitement or anticipation');
      triggers.push('Previous reinforcement of barking behavior');
      solutions.push('Ignore attention-seeking barking completely');
      solutions.push('Reward quiet behavior with attention');
      solutions.push('Teach alternative behaviors (sit, down) to get attention');
      solutions.push('Provide adequate exercise and mental stimulation');
      solutions.push('Be consistent - don\'t give in to barking');
      urgency = 'Low';
    } else if (barkingContext.includes('At night') || barkingContext.includes('At specific sounds')) {
      reason = 'Fear/Anxiety Barking';
      description = 'Barking at night or at specific sounds often indicates fear or anxiety. This can be due to noise sensitivity or general anxiety.';
      triggers.push('Loud or unfamiliar sounds');
      triggers.push('Darkness or nighttime anxiety');
      triggers.push('Noise sensitivity');
      triggers.push('General anxiety');
      solutions.push('Create a safe, quiet sleeping area');
      solutions.push('Use white noise or calming music');
      solutions.push('Desensitize to triggering sounds gradually');
      solutions.push('Provide comfort items (favorite toys, blankets)');
      solutions.push('Consider anxiety-reducing products (thunder shirts, calming supplements)');
      solutions.push('Consult a veterinarian if anxiety is severe');
      urgency = 'Moderate';
    } else if (barkingContext.includes('When bored')) {
      reason = 'Boredom Barking';
      description = 'Barking due to boredom occurs when dogs don\'t have enough mental or physical stimulation.';
      triggers.push('Lack of exercise');
      triggers.push('Lack of mental stimulation');
      triggers.push('Being left alone for long periods');
      solutions.push('Increase daily exercise');
      solutions.push('Provide interactive toys and puzzle feeders');
      solutions.push('Engage in training sessions');
      solutions.push('Consider doggy daycare or dog walker');
      solutions.push('Provide enrichment activities');
      urgency = 'Low';
    } else {
      reason = 'Multiple Reasons / Complex Behavior';
      description = 'Barking in multiple contexts suggests a combination of factors. This may require a comprehensive approach.';
      triggers.push('Multiple triggers identified');
      triggers.push('Learned behavior patterns');
      solutions.push('Address each context separately');
      solutions.push('Identify the primary trigger');
      solutions.push('Use consistent training across all situations');
      solutions.push('Consider professional behavior consultation');
      solutions.push('Rule out medical causes');
      urgency = 'Moderate';
    }

    // Additional solutions based on frequency and duration
    if (frequency === 'constant' || duration === 'prolonged') {
      urgency = 'High';
      solutions.push('⚠️ Constant or prolonged barking may indicate a serious issue - consult a professional');
    }

    // General solutions
    solutions.push('Ensure your dog gets adequate daily exercise');
    solutions.push('Provide mental stimulation through training and puzzle toys');
    solutions.push('Never yell at or punish barking - it can make it worse');
    solutions.push('Be patient and consistent with training');

    setResult({ reason, description, triggers, solutions, urgency });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Barking Reason Analyzer', href: '/tools/barking-reason-analyzer' }
          ]} />
          
          <div className="text-center mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Barking Reason Analyzer
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Identify why your dog is barking and get targeted solutions
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  When does your dog bark? (select all that apply)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-96 overflow-y-auto p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  {allContexts.map((context, index) => (
                    <button
                      key={index}
                      onClick={() => toggleContext(context)}
                      className={`p-2 text-left rounded-lg border-2 text-sm transition-colors ${
                        barkingContext.includes(context)
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {context}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Barking Type
                </label>
                <select
                  value={barkingType}
                  onChange={(e) => setBarkingType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="alert">Alert (sharp, quick)</option>
                  <option value="excited">Excited (high-pitched, rapid)</option>
                  <option value="anxious">Anxious (whining, high-pitched)</option>
                  <option value="deep">Deep (low, territorial)</option>
                  <option value="playful">Playful (varied pitch)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Frequency
                </label>
                <select
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="occasional">Occasional</option>
                  <option value="frequent">Frequent</option>
                  <option value="constant">Constant</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Duration
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="brief">Brief (stops quickly)</option>
                  <option value="moderate">Moderate (1-5 minutes)</option>
                  <option value="prolonged">Prolonged (5+ minutes)</option>
                </select>
              </div>

              <button
                onClick={analyzeBarking}
                disabled={barkingContext.length === 0}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Analyze Barking
              </button>
            </div>
          </div>

          {result && (
            <div className={`bg-gradient-to-br rounded-xl shadow-lg p-6 sm:p-8 border-2 ${
              result.urgency === 'High'
                ? 'from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-300 dark:border-red-800'
                : result.urgency === 'Moderate to High'
                ? 'from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border-orange-300 dark:border-orange-800'
                : 'from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800'
            }`}>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Barking Analysis</h2>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{result.reason}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    result.urgency === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200' :
                    result.urgency === 'Moderate to High' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200' :
                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200'
                  }`}>
                    {result.urgency} Priority
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">{result.description}</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Common Triggers:</h3>
                <ul className="space-y-2">
                  {result.triggers.map((trigger, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{trigger}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Recommended Solutions:</h3>
                <ul className="space-y-2">
                  {result.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> Excessive barking can be a sign of underlying issues. If barking is constant, prolonged, or causing problems with neighbors, consider consulting a professional dog trainer or behaviorist. Never use bark collars or punishment-based methods, as they can worsen the problem.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

