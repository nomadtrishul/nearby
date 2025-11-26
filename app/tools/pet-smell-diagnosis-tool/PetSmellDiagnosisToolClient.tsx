'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function PetSmellDiagnosisToolClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [smellLocation, setSmellLocation] = useState<string>('general');
  const [smellType, setSmellType] = useState<string>('musty');
  const [severity, setSeverity] = useState<string>('mild');
  const [otherSymptoms, setOtherSymptoms] = useState<string[]>([]);
  const [result, setResult] = useState<{
    diagnosis: string;
    description: string;
    causes: string[];
    solutions: string[];
    urgent: boolean;
  } | null>(null);

  const allSymptoms = [
    'Excessive scratching',
    'Red or irritated skin',
    'Discharge from ears',
    'Head shaking',
    'Lethargy',
    'Loss of appetite',
    'Excessive licking',
    'Hair loss',
    'Visible wounds',
    'Difficulty walking',
  ];

  const toggleSymptom = (symptom: string) => {
    if (otherSymptoms.includes(symptom)) {
      setOtherSymptoms(otherSymptoms.filter(s => s !== symptom));
    } else {
      setOtherSymptoms([...otherSymptoms, symptom]);
    }
  };

  const diagnoseSmell = () => {
    let diagnosis = '';
    let description = '';
    const causes: string[] = [];
    const solutions: string[] = [];
    let urgent = false;

    // Diagnose based on smell location and type
    if (smellLocation === 'mouth' || smellLocation === 'breath') {
      diagnosis = 'Dental/Oral Health Issue';
      description = 'Bad breath in pets is often caused by dental problems, oral infections, or digestive issues.';
      causes.push('Dental disease (plaque, tartar, gingivitis)');
      causes.push('Oral infections or abscesses');
      causes.push('Periodontal disease');
      causes.push('Foreign objects stuck in teeth');
      causes.push('Kidney disease (ammonia-like smell)');
      causes.push('Diabetes (sweet or fruity smell)');
      solutions.push('Schedule a veterinary dental exam');
      solutions.push('Regular teeth brushing with pet toothpaste');
      solutions.push('Dental chews and toys');
      solutions.push('Professional dental cleaning if needed');
      solutions.push('Check for foreign objects in mouth');
      if (otherSymptoms.includes('Loss of appetite') || otherSymptoms.includes('Lethargy')) {
        urgent = true;
        solutions.push('⚠️ Seek immediate veterinary care if severe');
      }
    } else if (smellLocation === 'ears') {
      diagnosis = 'Ear Infection or Ear Problem';
      description = 'Foul odor from ears typically indicates infection, yeast overgrowth, or ear mites.';
      causes.push('Bacterial or yeast ear infection');
      causes.push('Ear mites');
      causes.push('Excessive ear wax buildup');
      causes.push('Foreign objects in ear');
      causes.push('Allergies causing ear inflammation');
      solutions.push('Schedule veterinary examination');
      solutions.push('Clean ears with veterinarian-recommended cleaner');
      solutions.push('Use prescribed ear medication');
      solutions.push('Keep ears dry and clean');
      solutions.push('Check for foreign objects');
      if (otherSymptoms.includes('Discharge from ears') || otherSymptoms.includes('Head shaking')) {
        urgent = true;
        solutions.push('⚠️ Ear infections can be painful - seek veterinary care');
      }
    } else if (smellLocation === 'skin' || smellLocation === 'coat') {
      if (smellType === 'yeasty' || smellType === 'musty') {
        diagnosis = 'Skin Infection or Yeast Overgrowth';
        description = 'Yeasty or musty smell from skin often indicates bacterial or yeast infections, especially in skin folds or moist areas.';
        causes.push('Yeast infection (Malassezia)');
        causes.push('Bacterial skin infection');
        causes.push('Skin fold dermatitis');
        causes.push('Allergic skin disease');
        causes.push('Seborrhea (oily skin condition)');
        solutions.push('Schedule veterinary examination');
        solutions.push('Medicated shampoos as prescribed');
        solutions.push('Keep skin folds clean and dry');
        solutions.push('Treat underlying allergies if present');
        solutions.push('Antifungal or antibiotic treatment if needed');
        if (otherSymptoms.includes('Red or irritated skin') || otherSymptoms.includes('Excessive scratching')) {
          urgent = true;
        }
      } else if (smellType === 'fishy') {
        diagnosis = 'Anal Gland Issues';
        description = 'Fishy smell, especially from the rear end, often indicates anal gland problems.';
        causes.push('Impacted or infected anal glands');
        causes.push('Anal gland abscess');
        causes.push('Anal gland expression needed');
        solutions.push('Schedule veterinary examination');
        solutions.push('Anal gland expression by veterinarian or groomer');
        solutions.push('Increase fiber in diet to help natural expression');
        solutions.push('Monitor for signs of infection');
        if (otherSymptoms.includes('Excessive licking') || otherSymptoms.includes('Visible wounds')) {
          urgent = true;
          solutions.push('⚠️ Anal gland abscesses require immediate veterinary care');
        }
      } else {
        diagnosis = 'General Skin/Coat Issue';
        description = 'Unpleasant odor from skin or coat can have various causes.';
        causes.push('Lack of regular bathing');
        causes.push('Rolling in something unpleasant');
        causes.push('Skin infection');
        causes.push('Oily or dirty coat');
        solutions.push('Regular bathing with appropriate shampoo');
        solutions.push('Check for skin issues or infections');
        solutions.push('Ensure proper grooming');
        solutions.push('Check if pet has rolled in something');
      }
    } else if (smellLocation === 'general' || smellLocation === 'all-over') {
      diagnosis = 'General Hygiene or Health Issue';
      description = 'Overall body odor can indicate various issues from hygiene to health problems.';
      causes.push('Lack of regular grooming');
      causes.push('Skin infection');
      causes.push('Dental disease (breath odor)');
      causes.push('Ear infection');
      causes.push('Anal gland issues');
      causes.push('Underlying health condition');
      solutions.push('Schedule veterinary checkup to rule out health issues');
      solutions.push('Regular bathing and grooming');
      solutions.push('Check all areas: mouth, ears, skin, anal area');
      solutions.push('Address any specific issues found');
      if (otherSymptoms.length > 2) {
        urgent = true;
        solutions.push('⚠️ Multiple symptoms may indicate serious health issue - seek veterinary care');
      }
    }

    // Add general solutions
    if (!urgent) {
      solutions.push('Maintain regular grooming schedule');
      solutions.push('Use appropriate pet shampoos and products');
    }

    // Urgency indicators
    if (severity === 'severe' || otherSymptoms.length >= 3) {
      urgent = true;
      solutions.push('⚠️ Severe or multiple symptoms require immediate veterinary attention');
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
            { name: 'Pet Smell Diagnosis Tool', href: '/tools/pet-smell-diagnosis-tool' }
          ]} />
          
          <div className="text-center mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Pet Smell Diagnosis Tool
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Identify potential causes of unpleasant odors in your pet
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
                  Smell Location
                </label>
                <select
                  value={smellLocation}
                  onChange={(e) => setSmellLocation(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="general">General/All Over</option>
                  <option value="mouth">Mouth/Breath</option>
                  <option value="ears">Ears</option>
                  <option value="skin">Skin/Coat</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Smell Type
                </label>
                <select
                  value={smellType}
                  onChange={(e) => setSmellType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="musty">Musty/Yeasty</option>
                  <option value="fishy">Fishy</option>
                  <option value="foul">Foul/Rotten</option>
                  <option value="sweet">Sweet/Fruity</option>
                  <option value="ammonia">Ammonia-like</option>
                  <option value="general">General Bad Odor</option>
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
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  Other Symptoms (select all that apply)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-48 overflow-y-auto p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  {allSymptoms.map((symptom, index) => (
                    <button
                      key={index}
                      onClick={() => toggleSymptom(symptom)}
                      className={`p-2 text-left rounded-lg border-2 text-sm transition-colors ${
                        otherSymptoms.includes(symptom)
                          ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {symptom}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={diagnoseSmell}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Diagnose Smell
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
                    <p className="text-sm font-semibold text-red-800 dark:text-red-200">⚠️ This may require immediate veterinary attention</p>
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

          {/* How Pet Smell Diagnosis Tool Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Pet Smell Diagnosis Tool Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our pet smell diagnosis tool helps identify potential causes of unpleasant odors in your pet by analyzing the location of the smell (mouth, ears, skin, general), type of smell (foul, musty, fishy, etc.), and accompanying symptoms. The tool matches these characteristics to common causes such as dental disease, ear infections, skin infections, anal gland issues, or other health conditions. It provides urgency assessment and treatment recommendations.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Pet Odors</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Different types of odors can indicate different conditions: bad breath often indicates dental disease, foul ear odor suggests ear infections, musty or yeasty smells may indicate skin infections or yeast overgrowth, and fishy smells often come from anal gland issues. The location and type of smell, along with other symptoms, help identify the underlying cause. Persistent or severe odors, especially with other symptoms, should be evaluated by a veterinarian.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Why does my pet smell bad?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Common causes of bad smells in pets include: dental disease (bad breath), ear infections (foul ear odor), skin infections or yeast overgrowth (musty or yeasty smell), anal gland issues (fishy smell), lack of regular grooming, rolling in something unpleasant, or underlying health conditions. The location and type of smell can help identify the cause. Persistent or severe odors, especially with other symptoms, should be evaluated by a veterinarian.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What does it mean if my pet's breath smells bad?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Bad breath in pets is most commonly caused by dental disease (plaque, tartar, gingivitis, periodontal disease). Other causes include oral infections or abscesses, foreign objects stuck in teeth, kidney disease (ammonia-like smell), or diabetes (sweet or fruity smell). Regular dental care, including brushing and professional cleanings, can help prevent dental disease. If bad breath persists or is severe, consult your veterinarian.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">When should I be concerned about my pet's smell?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Be concerned and seek veterinary care if: the smell is severe or sudden, it's accompanied by other symptoms (lethargy, loss of appetite, excessive scratching, discharge), the smell persists despite regular grooming, your pet shows signs of pain or discomfort, or the smell is from a specific area (ears, mouth, skin) that may indicate infection. Some conditions, like severe infections or anal gland abscesses, require immediate veterinary attention.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/dental-health-score-tool" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Dental Health Score Tool</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Assess your pet's dental health</p>
              </a>
              <a href="/tools/symptom-checker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Symptom Checker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Identify other health symptoms</p>
              </a>
              <a href="/tools/grooming-schedule-generator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Grooming Schedule Generator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Create a complete grooming schedule</p>
              </a>
              <a href="/pet-grooming" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Grooming Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn professional grooming techniques</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-sm text-red-800 dark:text-red-200">
              <strong>Important:</strong> This tool provides general guidance only and is not a substitute for professional veterinary care. If your pet has a persistent or severe odor, especially with other symptoms, consult your veterinarian immediately. Some conditions require prompt medical attention.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

