'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

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

  const toggleSymptom = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const checkSymptoms = () => {
    const petSymptoms = symptoms[petType];
    const selected = petSymptoms.filter(s => selectedSymptoms.includes(s.symptom));
    setResults(selected);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-500 text-white';
      case 'moderate': return 'bg-orange-500 text-white';
      case 'low': return 'bg-yellow-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
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

          {results.length > 0 && (
            <div className="space-y-4">
              {results.map((result, index) => (
                <div
                  key={index}
                  className={`rounded-xl shadow-lg p-6 border-2 ${
                    result.severity === 'high'
                      ? 'bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-800'
                      : result.severity === 'moderate'
                      ? 'bg-orange-50 dark:bg-orange-900/20 border-orange-300 dark:border-orange-800'
                      : 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300 dark:border-yellow-800'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{result.symptom}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getSeverityColor(result.severity)}`}>
                      {result.severity.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">{result.description}</p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Recommended Action:</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{result.action}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* How Pet Symptom Checker Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Pet Symptom Checker Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our pet symptom checker helps you identify potential health issues by selecting symptoms your pet is experiencing. The tool provides information about symptom severity, possible causes, and recommended actions. However, this tool is for informational purposes only and should never replace professional veterinary diagnosis and treatment.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">When to Seek Veterinary Care</h3>
              <p className="text-gray-700 dark:text-gray-300">
                If your pet has severe symptoms, multiple symptoms, symptoms that persist for more than 24 hours, or if you have any concerns about your pet's health, consult with a veterinarian immediately. Emergency symptoms include difficulty breathing, seizures, collapse, bloated abdomen, pale gums, or inability to urinate - seek immediate veterinary care for these.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Is this symptom checker a substitute for veterinary care?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  No, this tool is for informational purposes only and is NOT a substitute for professional veterinary diagnosis or treatment. If your pet is experiencing severe symptoms, appears to be in distress, or you have any concerns, seek immediate veterinary care. Always consult with a licensed veterinarian for proper diagnosis and treatment.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What should I do if my pet has emergency symptoms?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  If your pet is experiencing emergency symptoms such as difficulty breathing, seizures, collapse, bloated abdomen, pale gums, or inability to urinate, seek immediate veterinary care. Contact your nearest emergency veterinary clinic or animal poison control center immediately. Do not wait.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do I know if my pet needs to see a veterinarian?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  If your pet has severe symptoms, multiple symptoms, symptoms that persist for more than 24 hours, or if you have any concerns about your pet's health, consult with a veterinarian. It's always better to err on the side of caution when it comes to your pet's health.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/toxic-foods-checker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Toxic Foods Checker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Check if foods are toxic to your pet</p>
              </a>
              <a href="/tools/emergency-symptoms-checker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Emergency Symptoms Checker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Identify emergency symptoms in pets</p>
              </a>
              <a href="/tools/vaccine-reminder" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Vaccine Reminder</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Track vaccination schedules for your pet</p>
              </a>
              <a href="/pet-health" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Health Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn more about pet health and wellness</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Remember:</strong> This tool is for informational purposes only. When in doubt, always consult with a licensed veterinarian. For emergencies, contact your nearest emergency veterinary clinic or animal poison control center immediately.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

