'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function BehaviorProblemDiagnosisToolClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [behaviors, setBehaviors] = useState<string[]>([]);
  const [severity, setSeverity] = useState<string>('mild');
  const [duration, setDuration] = useState<string>('recent');
  const [result, setResult] = useState<{
    diagnosis: string;
    description: string;
    causes: string[];
    solutions: string[];
    urgent: boolean;
  } | null>(null);

  const allBehaviors = [
    'Excessive barking/meowing',
    'Destructive chewing',
    'House soiling',
    'Aggression toward people',
    'Aggression toward other animals',
    'Separation anxiety',
    'Excessive licking/scratching',
    'Fear or phobias',
    'Resource guarding',
    'Jumping on people',
    'Pulling on leash',
    'Not responding to commands',
    'Hyperactivity',
    'Hiding or avoidance',
    'Excessive vocalization',
  ];

  const toggleBehavior = (behavior: string) => {
    if (behaviors.includes(behavior)) {
      setBehaviors(behaviors.filter(b => b !== behavior));
    } else {
      setBehaviors([...behaviors, behavior]);
    }
  };

  const diagnoseProblem = () => {
    if (behaviors.length === 0) {
      alert('Please select at least one behavior');
      return;
    }

    let diagnosis = '';
    let description = '';
    const causes: string[] = [];
    const solutions: string[] = [];
    let urgent = false;

    // Diagnose based on behaviors
    if (behaviors.includes('Aggression toward people') || behaviors.includes('Aggression toward other animals')) {
      diagnosis = 'Aggression Issue';
      description = 'Aggressive behavior can be dangerous and requires immediate attention. This may be fear-based, territorial, or resource-guarding aggression.';
      causes.push('Fear or anxiety');
      causes.push('Lack of socialization');
      causes.push('Resource guarding');
      causes.push('Territorial behavior');
      causes.push('Pain or medical issues');
      causes.push('Previous negative experiences');
      solutions.push('⚠️ Seek professional help from a certified animal behaviorist or trainer');
      solutions.push('Avoid situations that trigger aggression');
      solutions.push('Never punish aggressive behavior - it can make it worse');
      solutions.push('Rule out medical causes with a veterinarian');
      solutions.push('Use positive reinforcement training');
      urgent = true;
    } else if (behaviors.includes('Separation anxiety')) {
      diagnosis = 'Separation Anxiety';
      description = 'Separation anxiety occurs when pets become distressed when left alone. This can manifest as destructive behavior, excessive vocalization, or house soiling.';
      causes.push('Lack of independence training');
      causes.push('Sudden change in routine');
      causes.push('Previous abandonment or rehoming');
      causes.push('Over-attachment to owner');
      causes.push('Lack of mental stimulation');
      solutions.push('Gradual desensitization to being alone');
      solutions.push('Create a safe, comfortable space');
      solutions.push('Provide mental stimulation (puzzle toys, treat dispensers)');
      solutions.push('Avoid making departures and arrivals a big deal');
      solutions.push('Consider professional training or behavior modification');
      solutions.push('In severe cases, consult a veterinarian about medication options');
    } else if (behaviors.includes('House soiling')) {
      diagnosis = 'House Soiling / Inappropriate Elimination';
      description = 'House soiling can be due to incomplete house training, medical issues, or behavioral problems.';
      causes.push('Incomplete house training');
      causes.push('Medical issues (UTI, kidney problems, etc.)');
      causes.push('Marking behavior');
      causes.push('Stress or anxiety');
      causes.push('Litter box issues (for cats)');
      causes.push('Inadequate access to elimination areas');
      solutions.push('Rule out medical causes with a veterinarian first');
      solutions.push('Re-establish house training routine');
      solutions.push('Clean soiled areas thoroughly with enzyme cleaner');
      solutions.push('Provide regular access to elimination areas');
      solutions.push('For cats: ensure clean, accessible litter boxes');
      solutions.push('Use positive reinforcement for appropriate elimination');
    } else if (behaviors.includes('Excessive barking/meowing') || behaviors.includes('Excessive vocalization')) {
      diagnosis = 'Excessive Vocalization';
      description = 'Excessive barking or meowing can be due to boredom, attention-seeking, anxiety, or medical issues.';
      causes.push('Boredom or lack of exercise');
      causes.push('Attention-seeking behavior');
      causes.push('Anxiety or stress');
      causes.push('Medical issues (pain, cognitive decline)');
      causes.push('Territorial behavior');
      causes.push('Lack of training');
      solutions.push('Ensure adequate exercise and mental stimulation');
      solutions.push('Ignore attention-seeking vocalization');
      solutions.push('Reward quiet behavior');
      solutions.push('Provide interactive toys and puzzles');
      solutions.push('Rule out medical causes');
      solutions.push('Consider professional training if severe');
    } else if (behaviors.includes('Destructive chewing')) {
      diagnosis = 'Destructive Chewing';
      description = 'Destructive chewing is common in puppies and can persist in adult dogs due to boredom, anxiety, or teething.';
      causes.push('Teething (puppies)');
      causes.push('Boredom or lack of exercise');
      causes.push('Anxiety or stress');
      causes.push('Lack of appropriate chew toys');
      causes.push('Separation anxiety');
      solutions.push('Provide appropriate chew toys');
      solutions.push('Puppy-proof your home');
      solutions.push('Increase exercise and mental stimulation');
      solutions.push('Use bitter sprays on inappropriate items');
      solutions.push('Supervise and redirect to appropriate items');
      solutions.push('Address underlying anxiety if present');
    } else if (behaviors.includes('Resource guarding')) {
      diagnosis = 'Resource Guarding';
      description = 'Resource guarding occurs when pets protect food, toys, or other items. This can escalate to aggression if not addressed.';
      causes.push('Fear of losing resources');
      causes.push('Previous competition for resources');
      causes.push('Lack of trust');
      causes.push('Inadequate socialization');
      solutions.push('Never take items away forcefully');
      solutions.push('Trade items for higher-value treats');
      solutions.push('Teach "drop it" and "leave it" commands');
      solutions.push('Feed in separate areas if multiple pets');
      solutions.push('Consult a professional trainer for severe cases');
      if (severity === 'severe') urgent = true;
    } else if (behaviors.includes('Fear or phobias') || behaviors.includes('Hiding or avoidance')) {
      diagnosis = 'Fear or Phobia';
      description = 'Fearful behavior can be triggered by specific situations, objects, or sounds. This requires gentle, positive reinforcement training.';
      causes.push('Lack of socialization');
      causes.push('Previous negative experiences');
      causes.push('Genetic predisposition');
      causes.push('Trauma');
      causes.push('Medical issues causing pain or discomfort');
      solutions.push('Avoid forcing exposure to feared stimuli');
      solutions.push('Use counter-conditioning and desensitization');
      solutions.push('Create positive associations with feared objects/situations');
      solutions.push('Provide a safe space for your pet');
      solutions.push('Consider professional help for severe phobias');
      solutions.push('Rule out medical causes');
    } else {
      diagnosis = 'General Behavior Issue';
      description = 'Multiple behavior issues may indicate underlying problems with training, socialization, or health.';
      causes.push('Lack of training or inconsistent training');
      causes.push('Insufficient exercise or mental stimulation');
      causes.push('Medical issues');
      causes.push('Stress or environmental changes');
      causes.push('Lack of socialization');
      solutions.push('Establish consistent training routines');
      solutions.push('Ensure adequate exercise and mental stimulation');
      solutions.push('Rule out medical causes with a veterinarian');
      solutions.push('Consider professional training or behavior consultation');
      solutions.push('Address environmental stressors');
    }

    // Duration and severity adjustments
    if (duration === 'long-term' && severity === 'severe') {
      urgent = true;
      solutions.push('⚠️ Long-term severe behaviors may require professional intervention');
    }

    // General recommendations
    if (!urgent) {
      solutions.push('Be patient and consistent with training');
      solutions.push('Use positive reinforcement methods');
      solutions.push('Avoid punishment, which can worsen behavior problems');
    }

    setResult({ diagnosis, description, causes, solutions, urgent });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Behavior Problem Diagnosis Tool', href: '/tools/behavior-problem-diagnosis-tool' }
          ]} />
          
          <div className="text-center mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Behavior Problem Diagnosis Tool
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Identify potential causes of behavior problems and get guidance on solutions
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
                  Severity
                </label>
                <select
                  value={severity}
                  onChange={(e) => setSeverity(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="mild">Mild</option>
                  <option value="moderate">Moderate</option>
                  <option value="severe">Severe</option>
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
                  <option value="recent">Recent (less than 1 month)</option>
                  <option value="moderate">Moderate (1-3 months)</option>
                  <option value="long-term">Long-term (3+ months)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  Behaviors Observed (select all that apply)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-96 overflow-y-auto p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  {allBehaviors.map((behavior, index) => (
                    <button
                      key={index}
                      onClick={() => toggleBehavior(behavior)}
                      className={`p-2 text-left rounded-lg border-2 text-sm transition-colors ${
                        behaviors.includes(behavior)
                          ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {behavior}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={diagnoseProblem}
                disabled={behaviors.length === 0}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Diagnose Behavior Problem
              </button>
            </div>
          </div>

          {result && (
            <div className={`bg-gradient-to-br rounded-xl shadow-lg p-6 sm:p-8 border-2 ${
              result.urgent
                ? 'from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-300 dark:border-red-800'
                : 'from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800'
            }`}>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Diagnosis</h2>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">{result.diagnosis}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{result.description}</p>
                {result.urgent && (
                  <div className="mt-3 p-3 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg">
                    <p className="text-sm font-semibold text-red-800 dark:text-red-200">⚠️ This may require immediate professional attention</p>
                  </div>
                )}
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Possible Causes:</h3>
                <ul className="space-y-2">
                  {result.causes.map((cause, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{cause}</span>
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

          {/* How Behavior Problem Diagnosis Tool Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Behavior Problem Diagnosis Tool Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our behavior problem diagnosis tool analyzes the behaviors you observe in your pet to identify potential causes and provide guidance on solutions. By selecting the behaviors your pet displays, along with duration and context, the tool matches these patterns to common behavior problems such as aggression, separation anxiety, resource guarding, or fear-based behaviors. The tool provides urgency assessment, potential causes, and recommended solutions.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Behavior Problems</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Behavior problems often have underlying causes such as lack of exercise, insufficient mental stimulation, fear, anxiety, medical issues, or improper training. Early identification and intervention are key to successful behavior modification. Some behaviors require immediate professional help, especially aggression or severe anxiety, while others can be addressed with proper training and environmental changes.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What are common behavior problems in pets?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Common behavior problems include: excessive barking/meowing, destructive chewing, house soiling, aggression (toward people or other animals), separation anxiety, resource guarding, fear or phobias, jumping on people, pulling on leash, and not responding to commands. Many behavior problems can be addressed with proper training, but some require professional help.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">When should I seek professional help for behavior problems?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Seek professional help immediately for: aggression toward people or animals, severe separation anxiety, resource guarding that escalates, or any behavior that poses a safety risk. Also consult a professional if behavior problems persist despite training efforts, worsen over time, or if you're unsure how to address them safely. Certified animal behaviorists and professional trainers can provide effective solutions.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How can I prevent behavior problems?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Prevent behavior problems by: providing adequate exercise and mental stimulation, consistent training from an early age, proper socialization, positive reinforcement training methods, addressing issues early before they become habits, and ensuring your pet's physical and mental needs are met. Early intervention is key to preventing behavior problems from developing or worsening.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/separation-anxiety-risk-checker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Separation Anxiety Risk Checker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Assess separation anxiety risk factors</p>
              </a>
              <a href="/tools/training-progress-tracker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Training Progress Tracker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Track behavior modification progress</p>
              </a>
              <a href="/pet-training" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Training Guides</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn effective training techniques</p>
              </a>
              <a href="/pet-behavior" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Behavior Resources</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Understand pet behavior better</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-sm text-red-800 dark:text-red-200">
              <strong>Important:</strong> This tool provides general guidance only. For aggressive behaviors, severe anxiety, or persistent problems, consult a certified animal behaviorist, professional trainer, or veterinarian. Never use punishment-based training methods, as they can worsen behavior problems.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

