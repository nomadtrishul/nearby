'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import Loader from "@/components/Loader";
import { Download, X, Facebook, Instagram, MessageCircle, Send, Linkedin, Copy, Check } from "lucide-react";

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
  const [isLoading, setIsLoading] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

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

    setIsLoading(true);

    // Simulate AI processing with 3-second delay
    setTimeout(() => {
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
      setIsLoading(false);
    }, 3000);
  };

  const downloadPDF = () => {
    if (!result) return;
    const content = `
Barking Analysis - NearbyPetCare.com
====================================

Reason: ${result.reason}
Urgency: ${result.urgency}

Description:
${result.description}

Triggers:
${result.triggers.map(t => `- ${t}`).join('\n')}

Solutions:
${result.solutions.map(s => `- ${s}`).join('\n')}

Generated by NearbyPetCare.com
    `.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'barking-analysis.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const shareOnSocial = (platform: string) => {
    if (!result) return;

    const url = window.location.href;
    const shareText = `🐕 My Dog's Barking Analysis:
    
Reason: ${result.reason}
Urgency: ${result.urgency}
    
Get your dog's barking analysis at nearbypetcare.com!`;

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
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=My Dog's Barking Analysis&summary=${encodeURIComponent(shareText)}`;
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
            { name: 'Barking Reason Analyzer', href: '/tools/barking-reason-analyzer' }
          ]} />

          <div className="mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Barking Reason Analyzer
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Identify why your dog is barking and get targeted solutions
              </p>
            </div>

            {/* Tool Screenshot/Image */}
            <div className="mb-8">
              <Image
                src="/og-image.png"
                alt="Barking Reason Analyzer - Identify why your dog is barking and get targeted solutions"
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
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  When does your dog bark? (select all that apply)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-96 overflow-y-auto p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  {allContexts.map((context, index) => (
                    <button
                      key={index}
                      onClick={() => toggleContext(context)}
                      className={`p-2 text-left rounded-lg border-2 text-sm transition-colors ${barkingContext.includes(context)
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

          <Loader
            isLoading={isLoading}
            message="Analyzing barking patterns..."
            petType="dog"
            size="large"
          />

          {result && !isLoading && (
            <div className={`bg-gradient-to-br rounded-xl shadow-lg p-6 sm:p-8 border-2 ${result.urgency === 'High'
                ? 'from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-300 dark:border-red-800'
                : result.urgency === 'Moderate to High'
                  ? 'from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border-orange-300 dark:border-orange-800'
                  : 'from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800'
              }`}>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Barking Analysis</h2>

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
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{result.reason}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${result.urgency === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200' :
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

          {/* How Barking Reason Analyzer Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Barking Reason Analyzer Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our barking reason analyzer helps identify why your dog is barking by analyzing the context (when and where barking occurs), type of bark (alert, attention-seeking, excitement, fear, etc.), frequency, duration, and triggers. The tool matches these characteristics to common reasons for barking such as territorial/alert barking, attention-seeking, excitement, fear or anxiety, boredom, separation anxiety, or reactivity. It provides targeted solutions based on the identified cause.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Barking Behavior</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Barking is a normal form of communication for dogs, but excessive, constant, or prolonged barking may indicate an underlying problem. Different types of barking have different causes and require different solutions. Territorial barking needs different management than attention-seeking barking, and fear-based barking requires different approaches than boredom-related barking. Understanding the specific reason is essential for effective training.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Why do dogs bark?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Dogs bark for many reasons: alerting to danger or intruders (territorial/alert barking), seeking attention, expressing excitement, showing fear or anxiety, responding to boredom, separation anxiety when left alone, reactivity to other dogs or people, or learned behavior. Understanding the specific reason for barking is essential for effective training.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How can I stop my dog from excessive barking?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  To reduce excessive barking: identify the cause (use our analyzer), address the underlying issue (boredom, anxiety, etc.), teach a "quiet" command using positive reinforcement, provide adequate exercise and mental stimulation, avoid reinforcing barking (don't give attention when barking), use desensitization for specific triggers, and consider professional training for persistent issues. Never use punishment or bark collars, as they can worsen the problem.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Is it normal for dogs to bark?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes, barking is a normal form of communication for dogs. However, excessive, constant, or prolonged barking may indicate an underlying problem such as anxiety, boredom, lack of training, or medical issues. If barking is causing problems or seems excessive, it's worth investigating the cause and working on training solutions.
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
              <a href="/tools/aggression-type-checker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Aggression Type Checker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Identify aggression triggers</p>
              </a>
              <a href="/tools/training-progress-tracker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Training Progress Tracker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Track training progress</p>
              </a>
              <a href="/pet-training" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Training Guides</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn effective training techniques</p>
              </a>
            </div>
          </div>

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

