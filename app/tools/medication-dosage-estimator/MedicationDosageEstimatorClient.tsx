'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export default function MedicationDosageEstimatorClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [weight, setWeight] = useState<string>('');
  const [weightUnit, setWeightUnit] = useState<'lbs' | 'kg'>('lbs');
  const [medication, setMedication] = useState<string>('');
  const [medicationStrength, setMedicationStrength] = useState<string>('');
  const [dosagePerKg, setDosagePerKg] = useState<string>('');
  const [result, setResult] = useState<{
    dosage: number;
    dosageUnit: string;
    frequency: string;
    warnings: string[];
  } | null>(null);

  const commonMedications: { [key: string]: { dosage: string; frequency: string; notes: string } } = {
    'Benadryl (Diphenhydramine)': { dosage: '1-2 mg/kg', frequency: 'Every 8-12 hours', notes: 'For allergies. Check with vet for proper use.' },
    'Aspirin': { dosage: '10-15 mg/kg (dogs only)', frequency: 'Every 12 hours', notes: 'DO NOT give to cats. Use only under vet guidance.' },
    'Pepto-Bismol': { dosage: '0.5-1 ml/kg (dogs only)', frequency: 'Every 6-8 hours', notes: 'DO NOT give to cats. Limited use.' },
  };

  const calculateDosage = () => {
    const weightNum = parseFloat(weight);
    const dosagePerKgNum = parseFloat(dosagePerKg);
    
    if (!weightNum || weightNum <= 0) {
      alert('Please enter a valid weight');
      return;
    }
    if (!dosagePerKgNum || dosagePerKgNum <= 0) {
      alert('Please enter valid dosage per kg');
      return;
    }

    const weightKg = weightUnit === 'lbs' ? weightNum * 0.453592 : weightNum;
    const totalDosage = weightKg * dosagePerKgNum;

    const warnings: string[] = [];
    warnings.push('⚠️⚠️⚠️ CRITICAL: This is an ESTIMATE only. ALWAYS consult your veterinarian before giving any medication.');
    warnings.push('⚠️ Dosage calculations must account for pet\'s health, age, and other medications');
    warnings.push('⚠️ Incorrect dosages can be harmful or fatal');
    warnings.push('⚠️ Never give human medications without veterinary approval');
    warnings.push('⚠️ Some medications are toxic to certain species (e.g., many human meds are toxic to cats)');

    // Check if medication is in common list
    let frequency = 'As directed by veterinarian';
    if (medication && commonMedications[medication]) {
      frequency = commonMedications[medication].frequency;
      warnings.push(`Note: ${commonMedications[medication].notes}`);
    }

    setResult({
      dosage: Math.round(totalDosage * 100) / 100,
      dosageUnit: medicationStrength || 'mg',
      frequency,
      warnings,
    });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Medication Dosage Estimator', href: '/tools/medication-dosage-estimator' }
          ]} />
          
        <div className="mb-8 sm:mb-10 mt-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Pet Medication Dosage Estimator – Dog & Cat Dose Calculator
          </h1>
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Enter your pet's weight and select a medication to see a weight-based dosage estimate. Use this tool for educational purposes only—always confirm doses with your veterinarian before giving any medication.
            </p>
          </div>

          {/* Tool Screenshot/Image */}
          <div className="mb-8">
            <Image
              src="/og-image.png"
              alt="Medication Dosage Estimator - Calculate dog and cat medication doses"
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
                <h3 className="font-bold text-red-900 dark:text-red-200 mb-2">CRITICAL DISCLAIMER</h3>
                <p className="text-sm text-red-800 dark:text-red-300">
                  This tool provides ESTIMATES ONLY and is NOT a substitute for veterinary prescription or guidance. 
                  <strong> ALWAYS consult your veterinarian before giving any medication to your pet.</strong> 
                  Incorrect dosages can be harmful or fatal. Never give human medications without veterinary approval.
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
                  onChange={(e) => setPetType(e.target.value as 'dog' | 'cat')}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Pet Weight
                </label>
                <div className="flex gap-4">
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Enter weight"
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                  <select
                    value={weightUnit}
                    onChange={(e) => setWeightUnit(e.target.value as 'lbs' | 'kg')}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="lbs">lbs</option>
                    <option value="kg">kg</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Medication Name (optional - for reference)
                </label>
                <select
                  value={medication}
                  onChange={(e) => {
                    setMedication(e.target.value);
                    if (e.target.value && commonMedications[e.target.value]) {
                      const dosage = commonMedications[e.target.value].dosage;
                      const match = dosage.match(/(\d+(?:\.\d+)?)\s*mg\/kg/);
                      if (match) {
                        setDosagePerKg(match[1]);
                      }
                    }
                  }}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select medication (optional)</option>
                  {Object.keys(commonMedications).map(med => (
                    <option key={med} value={med}>{med}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Dosage per kg (mg/kg or ml/kg)
                </label>
                <input
                  type="number"
                  value={dosagePerKg}
                  onChange={(e) => setDosagePerKg(e.target.value)}
                  placeholder="e.g., 1.5"
                  step="0.1"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Medication Strength/Unit
                </label>
                <input
                  type="text"
                  value={medicationStrength}
                  onChange={(e) => setMedicationStrength(e.target.value)}
                  placeholder="e.g., mg, ml"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <button
                onClick={calculateDosage}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Calculate Dosage
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Dosage Estimate</h2>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Estimated Dosage</div>
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                    {result.dosage} {result.dosageUnit}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Frequency: {result.frequency}</div>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-2 border-red-300 dark:border-red-800">
                <h3 className="font-bold mb-2 text-red-900 dark:text-red-200">CRITICAL WARNINGS:</h3>
                <ul className="space-y-2">
                  {result.warnings.map((warning, index) => (
                    <li key={index} className="text-sm text-red-800 dark:text-red-200">{warning}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* How Medication Dosage Estimator Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Medication Dosage Estimator Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The tool converts your pet's weight to kilograms (if needed) and multiplies it by a typical dosage-per-kg for the selected medication. It also references standard frequency guidelines and common veterinary cautions.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Why You Must Confirm With Your Veterinarian</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Vet-prescribed doses account for your pet's condition, organ function, concurrent medications, and formulation differences. This estimator is only a starting point to discuss with your vet.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do I calculate medication dosage for my pet?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Most pet medications are dosed by weight in kilograms. Convert weight (lbs ÷ 2.2 = kg) and multiply by the dosage-per-kg. Always verify with your veterinarian before giving any medication.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Can I use human medications for my pet?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Never give human medication without veterinary approval. Many human drugs (acetaminophen, ibuprofen, cold medications) are toxic to pets. Only use medications prescribed by your veterinarian.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What if I miss a medication dose?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  If it's close to the next dose, skip the missed dose—never double dose. Contact your veterinarian for guidance specific to the medication and your pet's condition.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/pet-hydration-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Hydration Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Monitor hydration while medicating</p>
              </a>
              <a href="/tools/parasite-risk-assessment" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Parasite Risk Assessment</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Understand preventive medication needs</p>
              </a>
              <a href="/tools/vaccine-reminder" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Vaccine Reminder</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Track vaccinations and booster schedules</p>
              </a>
              <a href="/pet-health" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Health Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Medication safety tips</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-800 rounded-lg">
            <p className="text-sm text-red-800 dark:text-red-300">
              <strong>IMPORTANT:</strong> This tool is for informational purposes only. Medication dosages must be prescribed by a licensed veterinarian who can account for your pet's specific health conditions, age, weight, and potential drug interactions. Never give medications without veterinary approval.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

