'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import Loader from '@/components/Loader';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Download, X, Facebook, Instagram, MessageCircle, Send, Linkedin, Copy, Check } from 'lucide-react';

const symptoms = {
  dog: [
    { symptom: 'Vomiting', severity: 'moderate', description: 'Can indicate various issues from dietary indiscretion to serious illness', action: 'Monitor for 24 hours. If persistent, bloody, or accompanied by other symptoms, see vet immediately.' },
    { symptom: 'Diarrhea', severity: 'moderate', description: 'Common but can lead to dehydration', action: 'Withhold food for 12-24 hours, provide water. If persists >24 hours or contains blood, see vet.' },
    { symptom: 'Lethargy', severity: 'moderate', description: 'Unusual tiredness or lack of energy', action: 'Monitor closely. If severe or persists >24 hours, especially with other symptoms, see vet.' },
    { symptom: 'Loss of Appetite', severity: 'moderate', description: 'Refusing food for extended periods', action: 'If >24 hours or with other symptoms, see vet. Can indicate serious illness.' },
    { symptom: 'Excessive Thirst', severity: 'moderate', description: 'Drinking significantly more water than usual', action: 'Can indicate diabetes, kidney disease, or other conditions. See vet for evaluation.' },
    { symptom: 'Difficulty Breathing', severity: 'high', description: 'Rapid, labored, or noisy breathing', action: 'EMERGENCY - Seek immediate veterinary care.' },
    { symptom: 'Seizures', severity: 'high', description: 'Uncontrolled shaking, convulsions, or loss of consciousness', action: 'EMERGENCY - Seek immediate veterinary care. Keep pet safe during episode.' },
    { symptom: 'Collapse', severity: 'high', description: 'Sudden loss of consciousness or inability to stand', action: 'EMERGENCY - Seek immediate veterinary care.' },
    { symptom: 'Bloated Abdomen', severity: 'high', description: 'Swollen, hard, or distended belly', action: 'EMERGENCY - Can indicate GDV (bloat). Seek immediate veterinary care.' },
    { symptom: 'Pale Gums', severity: 'high', description: 'Gums appear white or very pale instead of pink', action: 'EMERGENCY - Can indicate internal bleeding or shock. Seek immediate care.' },
    { symptom: 'Excessive Panting', severity: 'moderate', description: 'Heavy panting when not hot or exercised', action: 'Can indicate pain, stress, or heatstroke. If severe, see vet immediately.' },
    { symptom: 'Coughing', severity: 'moderate', description: 'Persistent or frequent coughing', action: 'Monitor. If persistent >3 days or severe, see vet. Can indicate heart disease or respiratory issues.' },
    { symptom: 'Limping', severity: 'moderate', description: 'Favoring a limb or unable to bear weight', action: 'Rest and monitor. If severe, persistent, or with swelling, see vet.' },
    { symptom: 'Excessive Scratching', severity: 'low', description: 'Frequent scratching, licking, or chewing', action: 'Can indicate allergies, parasites, or skin infection. See vet if severe or persistent.' },
    { symptom: 'Discharge from Eyes/Nose', severity: 'moderate', description: 'Unusual discharge or discharge with other symptoms', action: 'Monitor. If thick, colored, or persistent, see vet.' },
    { symptom: 'Changes in Urination', severity: 'moderate', description: 'Difficulty urinating, blood in urine, or changes in frequency', action: 'See vet promptly. Can indicate UTI, stones, or other serious conditions.' },
    { symptom: 'Bad Breath', severity: 'low', description: 'Persistent foul odor from mouth', action: 'Can indicate dental disease. Schedule dental checkup.' },
    { symptom: 'Weight Loss', severity: 'moderate', description: 'Unexplained weight loss', action: 'See vet for evaluation. Can indicate various health conditions.' },
    { symptom: 'Lumps or Bumps', severity: 'moderate', description: 'New or changing growths on body', action: 'Have vet examine. Monitor for changes in size, shape, or color.' },
    { symptom: 'Behavioral Changes', severity: 'moderate', description: 'Sudden aggression, confusion, or personality changes', action: 'See vet. Can indicate pain, neurological issues, or other conditions.' },
  ],
  cat: [
    { symptom: 'Vomiting', severity: 'moderate', description: 'Can indicate various issues from hairballs to serious illness', action: 'Monitor for 24 hours. If persistent, bloody, or frequent, see vet.' },
    { symptom: 'Diarrhea', severity: 'moderate', description: 'Common but can lead to dehydration', action: 'Monitor. If persists >24 hours or contains blood, see vet.' },
    { symptom: 'Lethargy', severity: 'moderate', description: 'Unusual tiredness or hiding behavior', action: 'Monitor closely. Cats hide illness. If severe or persists, see vet.' },
    { symptom: 'Loss of Appetite', severity: 'high', description: 'Refusing food - serious in cats', action: 'See vet within 24 hours. Cats can develop liver disease if not eating.' },
    { symptom: 'Excessive Thirst', severity: 'moderate', description: 'Drinking significantly more water', action: 'Can indicate diabetes, kidney disease, or hyperthyroidism. See vet.' },
    { symptom: 'Difficulty Breathing', severity: 'high', description: 'Rapid, labored, or open-mouth breathing', action: 'EMERGENCY - Seek immediate veterinary care.' },
    { symptom: 'Straining to Urinate', severity: 'high', description: 'Frequent attempts with little or no urine', action: 'EMERGENCY - Can indicate urinary blockage. Seek immediate care.' },
    { symptom: 'Not Using Litter Box', severity: 'moderate', description: 'Sudden change in elimination habits', action: 'Can indicate UTI, stress, or other issues. See vet.' },
    { symptom: 'Excessive Grooming', severity: 'moderate', description: 'Over-grooming leading to hair loss or sores', action: 'Can indicate allergies, pain, or stress. See vet.' },
    { symptom: 'Hiding', severity: 'moderate', description: 'Excessive hiding or isolation', action: 'Cats hide when ill. If persistent, see vet.' },
    { symptom: 'Changes in Vocalization', severity: 'moderate', description: 'Excessive meowing or unusual sounds', action: 'Can indicate pain, hyperthyroidism, or cognitive issues. See vet.' },
    { symptom: 'Weight Loss', severity: 'moderate', description: 'Unexplained weight loss', action: 'See vet promptly. Can indicate hyperthyroidism, diabetes, or other conditions.' },
    { symptom: 'Bad Breath', severity: 'low', description: 'Persistent foul odor from mouth', action: 'Can indicate dental disease. Schedule dental checkup.' },
    { symptom: 'Discharge from Eyes/Nose', severity: 'moderate', description: 'Unusual discharge', action: 'Monitor. If thick, colored, or persistent, see vet.' },
    { symptom: 'Limping', severity: 'moderate', description: 'Favoring a limb', action: 'Rest and monitor. If severe or persistent, see vet.' },
    { symptom: 'Lumps or Bumps', severity: 'moderate', description: 'New or changing growths', action: 'Have vet examine. Monitor for changes.' },
    { symptom: 'Pale Gums', severity: 'high', description: 'Gums appear white or very pale', action: 'EMERGENCY - Can indicate internal bleeding or shock. Seek immediate care.' },
    { symptom: 'Seizures', severity: 'high', description: 'Uncontrolled shaking or convulsions', action: 'EMERGENCY - Seek immediate veterinary care.' },
    { symptom: 'Collapse', severity: 'high', description: 'Sudden loss of consciousness', action: 'EMERGENCY - Seek immediate veterinary care.' },
    { symptom: 'Rapid Breathing at Rest', severity: 'high', description: 'Breathing >40 breaths per minute while resting', action: 'EMERGENCY - Seek immediate veterinary care.' },
  ]
};

export default function SymptomCheckerClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [results, setResults] = useState<Array<{
    symptom: string;
    severity: string;
    description: string;
    action: string;
  }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const toggleSymptom = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const checkSymptoms = () => {
    if (selectedSymptoms.length === 0) {
      alert('Please select at least one symptom');
      return;
    }

    setIsLoading(true);

    // Simulate AI processing with 3-second delay
    setTimeout(() => {
      const petSymptoms = symptoms[petType];
      const selected = petSymptoms.filter(s => selectedSymptoms.includes(s.symptom));
      setResults(selected);
      setIsLoading(false);
    }, 3000); // 3-second delay
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-500 text-white';
      case 'moderate': return 'bg-orange-500 text-white';
      case 'low': return 'bg-yellow-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  // Helper functions for enhanced features
  const getSeverityData = () => {
    if (!results || results.length === 0) return [];
    
    const severityCount = { high: 0, moderate: 0, low: 0 };
    results.forEach(result => {
      severityCount[result.severity as keyof typeof severityCount]++;
    });
    
    return Object.entries(severityCount).map(([severity, count]) => ({
      name: severity.charAt(0).toUpperCase() + severity.slice(1),
      value: count,
      color: severity === 'high' ? '#EF4444' : severity === 'moderate' ? '#F59E0B' : '#10B981'
    }));
  };

  const downloadPDF = () => {
    if (!results || results.length === 0) return;
    
    const content = `
Pet Symptom Analysis - NearbyPetCare.com
======================================

Pet Type: ${petType.charAt(0).toUpperCase() + petType.slice(1)}
Selected Symptoms: ${selectedSymptoms.join(', ')}

Analysis Results:
${results.map((result, index) => `
${index + 1}. ${result.symptom}
   Severity: ${result.severity.toUpperCase()}
   Description: ${result.description}
   Recommended Action: ${result.action}
`).join('\n')}

IMPORTANT: This analysis is for informational purposes only. Always consult with a veterinarian for proper diagnosis and treatment.

Generated by NearbyPetCare.com
    `.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'symptom-analysis.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const shareOnSocial = (platform: string) => {
    if (!results || results.length === 0) return;
    
    const url = window.location.href;
    const highSeverity = results.filter(r => r.severity === 'high').length;
    const shareText = `🐾 Checked my ${petType}'s symptoms:
    
📋 ${selectedSymptoms.length} symptoms analyzed
⚠️ ${highSeverity} high priority symptoms found
🔍 Results: ${results.map(r => r.symptom).slice(0, 3).join(', ')}

Use the symptom checker at nearbypetcare.com! 🐕🐈`;
    
    let shareUrl = '';
    switch(platform) {
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
        alert('Text copied to clipboard! Share it on Instagram with a screenshot of your results.');
        return;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + url)}`;
        break;
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(shareText)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=Pet Symptom Analysis&summary=${encodeURIComponent(shareText)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(shareText + ' ' + url);
        setCopiedToClipboard(true);
        setTimeout(() => setCopiedToClipboard(false), 3000);
        return;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const PetIcon = ({ type, size = 'medium' }: { type: 'dog' | 'cat', size?: 'small' | 'medium' | 'large' }) => {
    const sizeClass = size === 'small' ? 'w-8 h-8' : size === 'large' ? 'w-16 h-16' : 'w-12 h-12';
    return (
      <div className={`${sizeClass} flex items-center justify-center`}>
        {type === 'dog' ? (
          <span className="text-4xl">🐕</span>
        ) : (
          <span className="text-4xl">🐈</span>
        )}
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-6xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Symptom Checker', href: '/tools/symptom-checker' }
          ]} />
          
          <div className="mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Pet Symptom Checker – Dog & Cat Health Symptom Guide
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Use our free pet symptom checker to help identify potential health issues for your dog or cat. Our dog symptom checker and cat symptom checker provide symptom information and guidance. This tool is for informational purposes only and is not a substitute for professional veterinary care.
              </p>
            </div>

            {/* Tool Screenshot/Image */}
            <div className="mb-8">
              <Image 
                src="/og-image.png" 
                alt="Pet Symptom Checker - Identify potential health issues for dogs and cats"
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
              <span className="text-2xl">⚠️</span>
              <div>
                <h3 className="font-bold text-red-900 dark:text-red-200 mb-2">Important Disclaimer</h3>
                <p className="text-sm text-red-800 dark:text-red-300">
                  This tool provides general information only and is NOT a substitute for professional veterinary diagnosis or treatment. If your pet is experiencing severe symptoms, appears to be in distress, or you have any concerns, seek immediate veterinary care. Always consult with a licensed veterinarian for proper diagnosis and treatment.
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
                    setSelectedSymptoms([]);
                    setResults([]);
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-96 overflow-y-auto p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  {symptoms[petType].map((symptom, index) => (
                    <button
                      key={index}
                      onClick={() => toggleSymptom(symptom.symptom)}
                      className={`p-3 text-left rounded-lg border-2 transition-colors ${
                        selectedSymptoms.includes(symptom.symptom)
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm text-gray-900 dark:text-white">{symptom.symptom}</span>
                        <span className={`px-2 py-0.5 rounded text-xs font-semibold ${getSeverityColor(symptom.severity)}`}>
                          {symptom.severity}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={checkSymptoms}
                disabled={selectedSymptoms.length === 0}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                Check Symptoms
              </button>
            </div>
          </div>

          <Loader 
            isLoading={isLoading} 
            message="Our AI Model is Analyzing Symptoms"
            petType={petType}
            size="large"
          />

          {/* Results */}
          {results.length > 0 && !isLoading && (
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 sm:p-6 lg:p-8 mb-8">
              {/* Header with Pet Icon and Export Options */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <PetIcon type={petType} size="large" />
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Symptom Analysis Results</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{results.length} symptoms analyzed</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full sm:w-auto">
                  <button
                    onClick={downloadPDF}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Analysis</span>
                  </button>
                  
                  {/* Social Media Icons */}
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

              {/* Main Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Symptoms</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{results.length}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">analyzed</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">High Priority</div>
                  <div className="text-2xl font-bold text-red-600 dark:text-red-400">{results.filter(r => r.severity === 'high').length}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">urgent</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Moderate</div>
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{results.filter(r => r.severity === 'moderate').length}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">monitor</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Low Priority</div>
                  <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{results.filter(r => r.severity === 'low').length}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">minor</div>
                </div>
              </div>

              {/* Charts Section */}
              <div className="space-y-6 mb-6">
                {/* Severity Distribution */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Severity Distribution</h3>
                  <div className="h-64 sm:h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%" minWidth={300} minHeight={200}>
                      <PieChart>
                        <Pie
                          data={getSeverityData()}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, value }) => `${name}: ${value}`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {getSeverityData().map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Symptom Details */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <span>🏥</span> Detailed Analysis
                </h3>
                <div className="space-y-4">
                  {results.map((result, index) => (
                    <div key={index} className={`p-4 rounded-lg ${
                      result.severity === 'high' ? 'bg-red-50 dark:bg-red-900/20' :
                      result.severity === 'moderate' ? 'bg-orange-50 dark:bg-orange-900/20' :
                      'bg-yellow-50 dark:bg-yellow-900/20'
                    }`}>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">{result.symptom}</h4>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${getSeverityColor(result.severity)}`}>
                          {result.severity.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{result.description}</p>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        <strong>Action:</strong> {result.action}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Disclaimer */}
          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Disclaimer:</strong> This symptom checker is for informational purposes only and is not a substitute for professional veterinary care. If your pet is experiencing severe symptoms or you're concerned about their health, please contact your veterinarian immediately. In case of emergency, seek immediate veterinary care.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

