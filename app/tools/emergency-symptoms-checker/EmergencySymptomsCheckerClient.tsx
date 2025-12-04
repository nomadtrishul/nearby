'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import Loader from '@/components/Loader';
import { Download, X, Facebook, Instagram, MessageCircle, Send, Linkedin, Copy, Check } from 'lucide-react';

type SeverityLevel = 'critical' | 'high' | 'moderate';

type SymptomInfo = {
  symptom: string;
  level: SeverityLevel;
  action: string;
};

export default function EmergencySymptomsCheckerClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [result, setResult] = useState<{
    emergencyLevel: string;
    urgentSymptoms: Array<{ symptom: string; action: string; level: SeverityLevel }>;
    immediateActions: string[];
  } | null>(null);

  const emergencySymptoms: Record<'dog' | 'cat', SymptomInfo[]> = {
    dog: [
      { symptom: 'Difficulty Breathing', level: 'critical', action: 'EMERGENCY - Seek immediate veterinary care. This is life-threatening.' },
      { symptom: 'Collapse/Unconsciousness', level: 'critical', action: 'EMERGENCY - Seek immediate veterinary care. Keep pet calm and transport carefully.' },
      { symptom: 'Seizures', level: 'critical', action: 'EMERGENCY - Seek immediate veterinary care. Keep pet safe during seizure, do not put anything in mouth.' },
      { symptom: 'Bloated/Hard Abdomen', level: 'critical', action: 'EMERGENCY - This could be GDV (bloat). Seek immediate veterinary care. Time is critical.' },
      { symptom: 'Pale Gums', level: 'critical', action: 'EMERGENCY - Can indicate internal bleeding or shock. Seek immediate veterinary care.' },
      { symptom: 'Unable to Urinate', level: 'critical', action: 'EMERGENCY - Urinary blockage is life-threatening. Seek immediate veterinary care.' },
      { symptom: 'Vomiting Blood', level: 'high', action: 'URGENT - Seek veterinary care immediately. Can indicate serious internal issues.' },
      { symptom: 'Bloody Diarrhea', level: 'high', action: 'URGENT - Seek veterinary care immediately. Can lead to severe dehydration.' },
      { symptom: 'Ingested Toxic Substance', level: 'high', action: 'URGENT - Contact veterinarian or poison control immediately. Do not wait for symptoms.' },
      { symptom: 'Trauma/Injury', level: 'high', action: 'URGENT - Seek veterinary care immediately. Stabilize and transport carefully.' },
      { symptom: 'Extreme Pain', level: 'high', action: 'URGENT - Seek veterinary care immediately. Do not give human pain medications.' },
      { symptom: 'High Fever (over 104°F)', level: 'high', action: 'URGENT - Seek veterinary care. High fever can be dangerous.' },
      { symptom: 'Severe Vomiting/Diarrhea', level: 'moderate', action: 'Seek veterinary care within 24 hours. Monitor for dehydration.' },
      { symptom: 'Not Eating for 24+ Hours', level: 'moderate', action: 'Seek veterinary care. More urgent for cats than dogs.' },
      { symptom: 'Lethargy/Weakness', level: 'moderate', action: 'Monitor closely. Seek veterinary care if severe or persists.' },
    ],
    cat: [
      { symptom: 'Difficulty Breathing', level: 'critical', action: 'EMERGENCY - Seek immediate veterinary care. This is life-threatening.' },
      { symptom: 'Collapse/Unconsciousness', level: 'critical', action: 'EMERGENCY - Seek immediate veterinary care. Keep pet calm and transport carefully.' },
      { symptom: 'Seizures', level: 'critical', action: 'EMERGENCY - Seek immediate veterinary care. Keep pet safe during seizure.' },
      { symptom: 'Straining to Urinate', level: 'critical', action: 'EMERGENCY - Urinary blockage is life-threatening in cats. Seek immediate veterinary care.' },
      { symptom: 'Pale Gums', level: 'critical', action: 'EMERGENCY - Can indicate internal bleeding or shock. Seek immediate veterinary care.' },
      { symptom: 'Ingested Toxic Substance', level: 'high', action: 'URGENT - Contact veterinarian or poison control immediately. Do not wait for symptoms.' },
      { symptom: 'Vomiting Blood', level: 'high', action: 'URGENT - Seek veterinary care immediately.' },
      { symptom: 'Bloody Diarrhea', level: 'high', action: 'URGENT - Seek veterinary care immediately.' },
      { symptom: 'Not Eating for 24+ Hours', level: 'high', action: 'URGENT - Cats can develop liver disease if not eating. Seek veterinary care immediately.' },
      { symptom: 'Trauma/Injury', level: 'high', action: 'URGENT - Seek veterinary care immediately.' },
      { symptom: 'Extreme Pain', level: 'high', action: 'URGENT - Seek veterinary care immediately. Do not give human medications.' },
      { symptom: 'High Fever (over 104°F)', level: 'high', action: 'URGENT - Seek veterinary care.' },
      { symptom: 'Severe Vomiting/Diarrhea', level: 'moderate', action: 'Seek veterinary care within 24 hours.' },
      { symptom: 'Lethargy/Hiding', level: 'moderate', action: 'Monitor closely. Cats hide illness - seek care if severe.' },
    ]
  };

  const toggleSymptom = (symptom: string) => {
    if (symptoms.includes(symptom)) {
      setSymptoms(symptoms.filter(s => s !== symptom));
    } else {
      setSymptoms([...symptoms, symptom]);
    }
  };

  const checkEmergency = () => {

    setIsLoading(true);

    // Simulate AI processing with 3-second delay
    setTimeout(() => {
      const petSymptoms = emergencySymptoms[petType];
      const selected = petSymptoms.filter(s => symptoms.includes(s.symptom));

      // Determine emergency level
      let emergencyLevel = 'None';
      if (selected.some(s => s.level === 'critical')) {
        emergencyLevel = 'CRITICAL EMERGENCY';
      } else if (selected.some(s => s.level === 'high')) {
        emergencyLevel = 'URGENT';
      } else if (selected.some(s => s.level === 'moderate')) {
        emergencyLevel = 'MODERATE';
      }

      const urgentSymptoms = selected.filter(s => s.level === 'critical' || s.level === 'high');

      const immediateActions: string[] = [];
      if (emergencyLevel === 'CRITICAL EMERGENCY') {
        immediateActions.push('🚨 SEEK IMMEDIATE VETERINARY CARE');
        immediateActions.push('Call your veterinarian or emergency clinic immediately');
        immediateActions.push('If after hours, go to nearest emergency veterinary clinic');
        immediateActions.push('Keep your pet calm and safe during transport');
      } else if (emergencyLevel === 'URGENT') {
        immediateActions.push('⚠️ SEEK VETERINARY CARE IMMEDIATELY');
        immediateActions.push('Contact your veterinarian right away');
        immediateActions.push('Do not wait for symptoms to worsen');
      } else if (emergencyLevel === 'MODERATE') {
        immediateActions.push('Monitor your pet closely');
        immediateActions.push('Seek veterinary care within 24 hours');
        immediateActions.push('Contact your veterinarian if symptoms worsen');
      }

      immediateActions.push('Keep emergency veterinary contact information readily available');
      immediateActions.push('ASPCA Animal Poison Control: (888) 426-4435');

      setResult({ emergencyLevel, urgentSymptoms, immediateActions });
      setIsLoading(false);
    }, 3000); // 3-second delay
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'critical': return 'bg-red-600 text-white';
      case 'high': return 'bg-orange-500 text-white';
      case 'moderate': return 'bg-yellow-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const downloadPDF = () => {
    if (!result) return;
    const content = `
Emergency Symptoms Check - NearbyPetCare.com
============================================

Emergency Level: ${result.emergencyLevel}

Urgent Symptoms:
${result.urgentSymptoms.map(s => `- ${s.symptom} (${s.level.toUpperCase()}): ${s.action}`).join('\n')}

Immediate Actions:
${result.immediateActions.map(a => `- ${a}`).join('\n')}

Generated by NearbyPetCare.com
    `.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'emergency-symptoms-check.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const shareOnSocial = (platform: string) => {
    if (!result) return;

    const url = window.location.href;
    const shareText = `🚨 My pet's emergency check result: ${result.emergencyLevel}.
    
Check your pet's symptoms at nearbypetcare.com!`;

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
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=Pet Emergency Check&summary=${encodeURIComponent(shareText)}`;
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
            { name: 'Emergency Symptoms Checker', href: '/tools/emergency-symptoms-checker' }
          ]} />

          <div className="mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Emergency Symptoms Checker – Pet Emergency Signs & Action Guide
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Select the symptoms your dog or cat is experiencing to identify whether it’s a critical, urgent, or moderate emergency. Get immediate action steps and contact information so you can respond quickly.
              </p>
            </div>

            {/* Tool Screenshot/Image */}
            <div className="mb-8">
              <Image
                src="/og-image.png"
                alt="Emergency Symptoms Checker - Identify pet emergency signs"
                width={1200}
                height={630}
                className="w-full rounded-lg shadow-lg"
                loading="lazy"
                priority={false}
              />
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-800 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🚨</span>
              <div>
                <h3 className="font-bold text-red-900 dark:text-red-200 mb-2">EMERGENCY INFORMATION</h3>
                <p className="text-sm text-red-800 dark:text-red-300 mb-2">
                  If your pet is experiencing severe symptoms, <strong>do not wait</strong>. Seek immediate veterinary care.
                </p>
                <p className="text-sm text-red-800 dark:text-red-300">
                  <strong>ASPCA Animal Poison Control:</strong> (888) 426-4435
                </p>
              </div>
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
                    setSymptoms([]);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  Select Symptoms (click to select/deselect)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-96 overflow-y-auto p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  {emergencySymptoms[petType].map((item, index) => (
                    <button
                      key={index}
                      onClick={() => toggleSymptom(item.symptom)}
                      className={`p-3 text-left rounded-lg border-2 transition-colors ${symptoms.includes(item.symptom)
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                        }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm text-gray-900 dark:text-white">{item.symptom}</span>
                        <span className={`px-2 py-0.5 rounded text-xs font-semibold ${getLevelColor(item.level)}`}>
                          {item.level}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={checkEmergency}
                disabled={symptoms.length === 0}
                className="w-full py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Check Emergency Level
              </button>
            </div>
          </div>

          <Loader
            isLoading={isLoading}
            message="Assessing emergency level..."
            petType={petType}
            size="large"
          />

          {result && !isLoading && (
            <div className={`bg-gradient-to-br rounded-xl shadow-lg p-6 sm:p-8 border-2 ${result.emergencyLevel === 'CRITICAL EMERGENCY'
              ? 'from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-300 dark:border-red-800'
              : result.emergencyLevel === 'URGENT'
                ? 'from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border-orange-300 dark:border-orange-800'
                : 'from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800'
              }`}>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Emergency Assessment</h2>

                <div className="flex flex-col gap-2 w-full sm:w-auto">
                  <button
                    onClick={downloadPDF}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Assessment</span>
                  </button>

                  <div className="flex flex-col items-center gap-2">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Share assessment</p>
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
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Emergency Level</div>
                  <div className={`text-3xl font-bold ${result.emergencyLevel === 'CRITICAL EMERGENCY' ? 'text-red-600 dark:text-red-400' :
                    result.emergencyLevel === 'URGENT' ? 'text-orange-600 dark:text-orange-400' :
                      'text-yellow-600 dark:text-yellow-400'
                    }`}>
                    {result.emergencyLevel}
                  </div>
                </div>
              </div>

              {result.urgentSymptoms.length > 0 && (
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Selected Urgent Symptoms:</h3>
                  <div className="space-y-3">
                    {result.urgentSymptoms.map((item, index) => (
                      <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-gray-900 dark:text-white">{item.symptom}</span>
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${getLevelColor(item.level === 'critical' ? 'critical' : 'high')}`}>
                            {item.level.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{item.action}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Immediate Actions:</h3>
                <ul className="space-y-2">
                  {result.immediateActions.map((action, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-red-500 mt-1">•</span>
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* How Emergency Symptoms Checker Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Emergency Symptoms Checker Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Select the symptoms your pet is experiencing. The tool categorizes each selected symptom (critical, urgent, moderate) and calculates the highest emergency level. It then provides immediate action steps—including when to go directly to an emergency vet.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Why Symptom Levels Matter</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Critical signs (difficulty breathing, seizures, bloated abdomen, pale gums) require immediate emergency care. Urgent signs may allow time to call your veterinarian but can rapidly worsen. Recognizing the level helps you respond faster.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What are critical emergency symptoms?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Difficulty breathing, collapse, seizures, bloated abdomen, inability to urinate, pale gums, severe trauma, or ingestion of toxins. Seek emergency care immediately for these signs.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">When should I go to an emergency vet?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Go right away if your pet shows any critical signs or several urgent signs (vomiting blood, trauma, extreme pain, high fever, uncontrolled bleeding). When in doubt, go or call en route.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How should I handle a pet emergency?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Stay calm, contact your veterinarian or emergency clinic, transport your pet safely, and keep emergency numbers (including poison control) handy. Never give human medication unless instructed by a vet.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/symptom-checker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">General Symptom Checker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Review non-emergency health concerns</p>
              </a>
              <a href="/tools/rabies-exposure-checker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Rabies Exposure Checker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Guidance after potential rabies exposure</p>
              </a>
              <a href="/tools/parasite-risk-assessment" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Parasite Risk Assessment</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Prevent emergencies with proactive care</p>
              </a>
              <a href="/pet-health" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover;border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Health Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Emergency preparedness tips</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-800 rounded-lg">
            <p className="text-sm text-red-800 dark:text-red-300">
              <strong>CRITICAL:</strong> This tool is for informational purposes only. If your pet is experiencing severe symptoms, seek immediate veterinary care. Do not delay. Time can be critical in emergencies.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
