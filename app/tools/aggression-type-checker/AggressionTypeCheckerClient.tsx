'use client';

import { useState } from 'react';
import Image from 'next/image';
import Loader from "@/components/Loader";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Download, X, Facebook, Instagram, MessageCircle, Send, Linkedin, Copy, Check } from "lucide-react";
import Breadcrumb from '@/components/Breadcrumb';

export default function AggressionTypeCheckerClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [triggers, setTriggers] = useState<string[]>([]);
  const [targets, setTargets] = useState<string[]>([]);
  const [behaviors, setBehaviors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  const [result, setResult] = useState<{
    type: string;
    description: string;
    causes: string[];
    solutions: string[];
    urgent: boolean;
  } | null>(null);

  const allTriggers = [
    'When approached while eating',
    'When someone touches food bowl',
    'When someone approaches toys',
    'When someone approaches resting area',
    'When meeting new people',
    'When meeting other animals',
    'When on leash',
    'When in car',
    'When at home/territory',
    'When being handled',
    'When being groomed',
    'When startled',
    'When in pain',
    'When protecting owner',
    'When other animals approach owner',
  ];

  const allTargets = [
    'Family members',
    'Strangers',
    'Other dogs',
    'Other cats',
    'Children',
    'Men',
    'Women',
    'Specific people',
    'All people',
    'All animals',
  ];

  const allBehaviors = [
    'Growling',
    'Snapping',
    'Biting',
    'Lunging',
    'Baring teeth',
    'Stiff body posture',
    'Raised hackles',
    'Staring',
    'Blocking access',
    'Guarding objects',
  ];

  const toggleItem = (list: string[], setList: (items: string[]) => void, item: string) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const checkAggressionType = () => {

    setIsLoading(true);

    // Simulate AI processing with 3-second delay
    setTimeout(() => {
      if (triggers.length === 0 || targets.length === 0) {
        alert('Please select at least one trigger and one target');
        return;
      }

      let type = '';
      let description = '';
      const causes: string[] = [];
      const solutions: string[] = [];
      let urgent = false;

      // Determine aggression type
      if (triggers.some(t => t.includes('eating') || t.includes('food') || t.includes('toys') || t.includes('resting'))) {
        type = 'Resource Guarding';
        description = 'Resource guarding occurs when pets protect food, toys, or other items. This can escalate to aggression if not addressed properly.';
        causes.push('Fear of losing resources');
        causes.push('Previous competition for resources');
        causes.push('Lack of trust');
        causes.push('Inadequate socialization');
        solutions.push('⚠️ Never take items away forcefully');
        solutions.push('Trade items for higher-value treats');
        solutions.push('Teach "drop it" and "leave it" commands');
        solutions.push('Feed in separate areas if multiple pets');
        solutions.push('Consult a professional trainer or behaviorist');
        if (behaviors.includes('Biting')) urgent = true;
      } else if (triggers.some(t => t.includes('territory') || t.includes('home')) || targets.includes('Strangers')) {
        type = 'Territorial Aggression';
        description = 'Territorial aggression occurs when pets protect their home or territory from perceived intruders.';
        causes.push('Protective instincts');
        causes.push('Lack of socialization');
        causes.push('Previous reinforcement of protective behavior');
        causes.push('Fear of strangers');
        solutions.push('Gradual desensitization to visitors');
        solutions.push('Teach calm behavior when people approach');
        solutions.push('Use positive reinforcement for calm behavior');
        solutions.push('Consider professional behavior modification');
        solutions.push('Never encourage or reward protective behavior');
      } else if (triggers.some(t => t.includes('other animals') || t.includes('other dogs') || t.includes('other cats'))) {
        type = 'Inter-Dog/Cat Aggression';
        description = 'Aggression toward other animals can be due to fear, dominance, or lack of socialization.';
        causes.push('Lack of socialization');
        causes.push('Fear of other animals');
        causes.push('Previous negative experiences');
        causes.push('Dominance or competition');
        solutions.push('⚠️ Avoid situations that trigger aggression');
        solutions.push('Work on socialization in controlled environments');
        solutions.push('Use distance and counter-conditioning');
        solutions.push('Consult a professional trainer for reactivity');
        solutions.push('Never use punishment, which can worsen aggression');
        urgent = true;
      } else if (triggers.some(t => t.includes('handled') || t.includes('groomed') || t.includes('pain'))) {
        type = 'Pain-Induced or Handling Aggression';
        description = 'Aggression due to pain or discomfort when being handled. This requires immediate veterinary attention.';
        causes.push('Pain or medical issues');
        causes.push('Previous painful experiences');
        causes.push('Sensitivity to touch');
        causes.push('Underlying health conditions');
        solutions.push('🚨 Consult a veterinarian immediately to rule out medical causes');
        solutions.push('Handle pet gently and avoid painful areas');
        solutions.push('Use positive reinforcement for handling');
        solutions.push('Gradual desensitization to handling');
        solutions.push('Address underlying medical issues');
        urgent = true;
      } else if (triggers.some(t => t.includes('startled') || t.includes('fear')) || targets.includes('Strangers')) {
        type = 'Fear-Based Aggression';
        description = 'Fear-based aggression occurs when pets feel threatened or afraid. This is a defensive response.';
        causes.push('Lack of socialization');
        causes.push('Previous negative experiences');
        causes.push('Genetic predisposition to fear');
        causes.push('Trauma');
        solutions.push('Avoid forcing exposure to feared stimuli');
        solutions.push('Use counter-conditioning and desensitization');
        solutions.push('Create positive associations');
        solutions.push('Provide a safe space for your pet');
        solutions.push('Consult a professional behaviorist for severe fear');
        solutions.push('Never punish fearful behavior');
      } else if (triggers.some(t => t.includes('protecting owner')) || targets.some(t => t.includes('approaches owner'))) {
        type = 'Protective Aggression';
        description = 'Protective aggression occurs when pets protect their owners from perceived threats.';
        causes.push('Over-attachment to owner');
        causes.push('Previous reinforcement of protective behavior');
        causes.push('Lack of socialization');
        causes.push('Anxiety');
        solutions.push('Avoid encouraging protective behavior');
        solutions.push('Teach calm behavior around people');
        solutions.push('Work on independence and confidence');
        solutions.push('Use positive reinforcement for calm behavior');
        solutions.push('Consider professional behavior modification');
      } else {
        type = 'Multiple Types / Complex Aggression';
        description = 'Multiple triggers and targets suggest a combination of aggression types. This requires comprehensive professional assessment.';
        causes.push('Multiple underlying factors');
        causes.push('Complex behavioral issues');
        causes.push('Possible medical component');
        solutions.push('🚨 Seek immediate professional help from a certified animal behaviorist');
        solutions.push('Rule out medical causes with a veterinarian');
        solutions.push('Comprehensive behavior assessment needed');
        solutions.push('Avoid all situations that trigger aggression');
        urgent = true;
      }

      // Urgency indicators
      if (behaviors.includes('Biting') || behaviors.includes('Snapping')) {
        urgent = true;
        solutions.push('⚠️ Biting or snapping requires immediate professional intervention');
      }

      // General solutions
      solutions.push('Never use punishment - it can worsen aggression');
      solutions.push('Avoid situations that trigger aggression until addressed');
      solutions.push('Use positive reinforcement methods only');
      solutions.push('Ensure pet safety and the safety of others');

      setResult({ type, description, causes, solutions, urgent });
      setIsLoading(false);
    }, 3000); // 3-second delay
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Aggression Type Checker', href: '/tools/aggression-type-checker' }
          ]} />

          <div className="mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Pet Aggression Type Checker – Identify Triggers & Next Steps
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Analyze your dog or cat’s behavior, triggers, and targets to pinpoint the likely aggression category. Learn what may be driving the response, how to keep everyone safe, and when to involve a certified trainer or veterinary behaviorist.
              </p>
            </div>

            <div className="mb-8">
              <Image
                src="/og-image.png"
                alt="Pet aggression type checker interface preview"
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
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  Triggers (when does aggression occur?)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-64 overflow-y-auto p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  {allTriggers.map((trigger, index) => (
                    <button
                      key={index}
                      onClick={() => toggleItem(triggers, setTriggers, trigger)}
                      className={`p-2 text-left rounded-lg border-2 text-sm transition-colors ${triggers.includes(trigger)
                          ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                        }`}
                    >
                      {trigger}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  Targets (who/what is the aggression directed at?)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-48 overflow-y-auto p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  {allTargets.map((target, index) => (
                    <button
                      key={index}
                      onClick={() => toggleItem(targets, setTargets, target)}
                      className={`p-2 text-left rounded-lg border-2 text-sm transition-colors ${targets.includes(target)
                          ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                        }`}
                    >
                      {target}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  Behaviors Observed (select all that apply)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-48 overflow-y-auto p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  {allBehaviors.map((behavior, index) => (
                    <button
                      key={index}
                      onClick={() => toggleItem(behaviors, setBehaviors, behavior)}
                      className={`p-2 text-left rounded-lg border-2 text-sm transition-colors ${behaviors.includes(behavior)
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
                onClick={checkAggressionType}
                disabled={triggers.length === 0 || targets.length === 0}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Check Aggression Type
              </button>
            </div>
          </div>

          {result && (
            <div className={`bg-gradient-to-br rounded-xl shadow-lg p-6 sm:p-8 border-2 ${result.urgent
                ? 'from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-300 dark:border-red-800'
                : 'from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800'
              }`}>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Aggression Analysis</h2>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">{result.type}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{result.description}</p>
                {result.urgent && (
                  <div className="mt-3 p-3 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg">
                    <p className="text-sm font-semibold text-red-800 dark:text-red-200">⚠️ This requires immediate professional attention</p>
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

          {/* How Aggression Type Checker Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Aggression Type Checker Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our aggression type checker helps identify the type of aggression your pet displays by analyzing triggers (what causes the aggression), targets (who or what the aggression is directed at), and behaviors observed. The tool matches these patterns to common aggression types such as resource guarding, territorial aggression, fear-based aggression, inter-dog/cat aggression, pain-induced aggression, protective aggression, or dominance aggression. Each type requires different treatment approaches.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Aggression Types</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Different types of aggression have different causes and require different treatment approaches. Resource guarding involves protecting food, toys, or items. Territorial aggression involves protecting home or territory. Fear-based aggression is a defensive response to fear. Pain-induced aggression occurs in response to pain or discomfort. Identifying the specific type helps determine the appropriate treatment strategy. Any aggression, especially involving biting, requires immediate professional help.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What are the different types of aggression in pets?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Common types of aggression include: resource guarding (protecting food, toys, or items), territorial aggression (protecting home/territory), fear-based aggression (defensive response to fear), inter-dog/cat aggression (aggression toward other animals), pain-induced aggression (response to pain or discomfort), protective aggression (protecting owner), and dominance aggression. Each type requires different treatment approaches.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do I know if my pet's aggression is serious?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Aggression is serious if: your pet has bitten or attempted to bite, aggression is escalating, aggression occurs frequently, or it poses a safety risk. Any aggression, especially involving biting, requires immediate professional help from a certified animal behaviorist or veterinarian. Never attempt to handle severe aggression on your own.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Can aggression be treated?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes, many types of aggression can be treated or managed with professional help, behavior modification, and in some cases, medication. Treatment success depends on the type and severity of aggression, underlying causes, and consistency of treatment. Resource guarding and fear-based aggression often respond well to behavior modification. Always work with a certified professional for aggression issues.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/behavior-problem-diagnosis-tool" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Behavior Problem Diagnosis</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Diagnose other behavior issues</p>
              </a>
              <a href="/tools/barking-reason-analyzer" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Barking Reason Analyzer</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Identify barking causes</p>
              </a>
              <a href="/tools/training-progress-tracker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Training Progress Tracker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Track behavior modification progress</p>
              </a>
              <a href="/pet-behavior" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Behavior Resources</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Understand pet behavior better</p>
              </a>
            </div>
          </div>

          <div className="mt-8 mb-12 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">How the Aggression Type Checker Helps</h2>
            <p className="text-base text-gray-700 dark:text-gray-300">
              This tool organizes observed triggers, targets, and behaviors into common aggression categories. While it cannot
              replace an evaluation from a certified trainer or veterinary behaviorist, it gives you a structured way to document
              what you are seeing and understand when urgent, in-person help is recommended.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: 'Document Patterns',
                  description: 'Track when, where, and with whom incidents occur so professionals can review consistent data.',
                },
                {
                  title: 'Clarify Risk',
                  description: 'Highlight urgent red flags such as biting, snapping, or pain responses that require veterinary care.',
                },
                {
                  title: 'Plan Next Steps',
                  description: 'Receive general safety guidance you can follow while you schedule professional support.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-yellow-200 dark:border-yellow-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Important Disclaimer</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Aggressive behavior can escalate quickly. Always prioritize safety for people and other animals, and consult a
                veterinarian or certified behavior professional for personalized treatment. The insights from this checker should
                be shared with your care team as part of a broader, supervised plan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}