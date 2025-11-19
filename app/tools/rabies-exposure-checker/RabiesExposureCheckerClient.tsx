'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export default function RabiesExposureCheckerClient() {
  const [exposureType, setExposureType] = useState<string>('');
  const [vaccinationStatus, setVaccinationStatus] = useState<string>('');
  const [timeSinceExposure, setTimeSinceExposure] = useState<string>('');
  const [result, setResult] = useState<{
    riskLevel: string;
    action: string[];
    urgency: string;
  } | null>(null);

  const checkExposure = () => {
    if (!exposureType || !vaccinationStatus) {
      alert('Please answer all questions');
      return;
    }

    let riskLevel = '';
    let urgency = '';
    const action: string[] = [];

    // High risk scenarios
    if (exposureType === 'bite' || exposureType === 'scratch') {
      if (vaccinationStatus === 'not-vaccinated' || vaccinationStatus === 'overdue') {
        riskLevel = 'HIGH RISK';
        urgency = 'URGENT';
        action.push('🚨 IMMEDIATE ACTION REQUIRED');
        action.push('Contact your veterinarian immediately (within 24 hours)');
        action.push('Contact local animal control or health department');
        action.push('If possible, safely contain the animal that caused the exposure for observation');
        action.push('Your pet may need immediate rabies booster and quarantine');
        action.push('Follow your veterinarian\'s and health department\'s instructions exactly');
      } else if (vaccinationStatus === 'current') {
        riskLevel = 'MODERATE RISK';
        urgency = 'HIGH';
        action.push('Contact your veterinarian immediately');
        action.push('Your pet will likely need a rabies booster vaccination');
        action.push('Quarantine may be required (varies by local regulations)');
        action.push('Report the incident to local animal control');
        action.push('Monitor your pet closely for any signs of illness');
      }
    } else if (exposureType === 'contact') {
      riskLevel = 'LOW-MODERATE RISK';
      urgency = 'MODERATE';
      action.push('Contact your veterinarian for guidance');
      action.push('Risk depends on type of contact and animal involved');
      action.push('May need booster vaccination as precaution');
      action.push('Monitor your pet for any unusual behavior');
    } else if (exposureType === 'unknown') {
      riskLevel = 'UNCERTAIN RISK';
      urgency = 'MODERATE';
      action.push('Contact your veterinarian for assessment');
      action.push('Describe the situation in detail');
      action.push('May need booster vaccination as precaution');
      action.push('Monitor your pet closely');
    }

    action.push('Keep records of all veterinary visits and vaccinations');
    action.push('Follow all local health department requirements');
    action.push('Rabies is fatal once symptoms appear - prevention is critical');

    setResult({ riskLevel, action, urgency });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Rabies Exposure Checker', href: '/tools/rabies-exposure-checker' }
          ]} />
          
        <div className="mb-8 sm:mb-10 mt-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Rabies Exposure Checker – Pet Rabies Risk Assessment & Action Guide
          </h1>
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Use this rabies exposure checker to get guidance if your pet may have been exposed to rabies. Answer a few questions to assess risk level and understand immediate action steps. This tool is for informational purposes only—always contact your veterinarian and local health department immediately.
            </p>
          </div>

          {/* Tool Screenshot/Image */}
          <div className="mb-8">
            <Image
              src="/og-image.png"
              alt="Rabies Exposure Checker - Guidance for potential rabies exposure"
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
                <h3 className="font-bold text-red-900 dark:text-red-200 mb-2">URGENT: Rabies is Fatal</h3>
                <p className="text-sm text-red-800 dark:text-red-300">
                  Rabies is a fatal disease. If your pet has been bitten or scratched by a wild animal or unvaccinated animal, 
                  <strong> contact your veterinarian and local health department immediately.</strong> This tool provides general information only and is not a substitute for professional veterinary and public health guidance.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Type of Exposure
                </label>
                <select
                  value={exposureType}
                  onChange={(e) => setExposureType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select exposure type</option>
                  <option value="bite">Bite from animal</option>
                  <option value="scratch">Scratch from animal</option>
                  <option value="contact">Contact with saliva (no bite/scratch)</option>
                  <option value="unknown">Unknown/Uncertain</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Pet's Rabies Vaccination Status
                </label>
                <select
                  value={vaccinationStatus}
                  onChange={(e) => setVaccinationStatus(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select vaccination status</option>
                  <option value="current">Current (up to date)</option>
                  <option value="overdue">Overdue/Expired</option>
                  <option value="not-vaccinated">Not vaccinated</option>
                  <option value="unknown">Unknown</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Time Since Exposure (optional)
                </label>
                <select
                  value={timeSinceExposure}
                  onChange={(e) => setTimeSinceExposure(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select time</option>
                  <option value="immediate">Just happened</option>
                  <option value="hours">Within 24 hours</option>
                  <option value="days">1-7 days ago</option>
                  <option value="weeks">More than 1 week ago</option>
                </select>
              </div>

              <button
                onClick={checkExposure}
                className="w-full py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Check Exposure Risk
              </button>
            </div>
          </div>

          {result && (
            <div className={`bg-gradient-to-br rounded-xl shadow-lg p-6 sm:p-8 border-2 ${
              result.urgency === 'URGENT' 
                ? 'from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-300 dark:border-red-800'
                : result.urgency === 'HIGH'
                ? 'from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border-orange-300 dark:border-orange-800'
                : 'from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800'
            }`}>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Exposure Assessment</h2>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Risk Level</div>
                  <div className={`text-3xl font-bold ${
                    result.urgency === 'URGENT' ? 'text-red-600 dark:text-red-400' :
                    result.urgency === 'HIGH' ? 'text-orange-600 dark:text-orange-400' :
                    'text-yellow-600 dark:text-yellow-400'
                  }`}>
                    {result.riskLevel}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Urgency: {result.urgency}</div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Required Actions:</h3>
                <ul className="space-y-2">
                  {result.action.map((act, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-red-500 mt-1">•</span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* How Rabies Exposure Checker Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Rabies Exposure Checker Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The tool evaluates exposure type (bite, scratch, contact), vaccination status, and time since exposure to provide a risk level and urgency classification. Guidance is based on CDC and veterinary protocols. Use it to understand next steps while contacting your veterinarian and local health department immediately.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Why Immediate Action Matters</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Rabies is almost always fatal once symptoms appear. Timely boosters, quarantine, and public health notifications are critical. Even vaccinated pets may need a booster and observation. Treat every potential exposure as an emergency.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What should I do if my pet has been exposed to rabies?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Contact your veterinarian and local health department immediately (within 24 hours). If your pet is not vaccinated or vaccination is overdue, urgent action is required. Follow all professional instructions precisely, including boosters and quarantine.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Is my pet at risk if they are vaccinated?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Vaccinated pets have lower risk but still need evaluation. Many jurisdictions require a booster after exposure plus observation. Keep vaccination records handy and contact your veterinarian immediately.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How urgent is rabies exposure?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Extremely urgent. Rabies is fatal once symptoms appear and there is no cure. Time is critical—seek veterinary and public health guidance immediately, even if your pet is vaccinated.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="/tools/parasite-risk-assessment"
                className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Parasite Risk Assessment</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Evaluate other infection risks</p>
              </a>
              <a
                href="/tools/vaccine-reminder"
                className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Vaccine Reminder</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Track rabies boosters and vaccines</p>
              </a>
              <a
                href="/tools/deworming-reminder"
                className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Deworming Reminder</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Stay current with other preventives</p>
              </a>
              <a
                href="/pet-health"
                className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Health Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn more about emergency care</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-800 rounded-lg">
            <p className="text-sm text-red-800 dark:text-red-300">
              <strong>CRITICAL:</strong> This tool is for informational purposes only. Rabies exposure requires immediate professional veterinary and public health guidance. Contact your veterinarian and local health department immediately if your pet has been exposed. Rabies is fatal once symptoms appear - time is critical.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

