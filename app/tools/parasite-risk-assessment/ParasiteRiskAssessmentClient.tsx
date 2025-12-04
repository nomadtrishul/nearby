'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import Loader from "@/components/Loader";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Download, X, Facebook, Instagram, MessageCircle, Send, Linkedin, Copy, Check } from "lucide-react";

export default function ParasiteRiskAssessmentClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [age, setAge] = useState<string>('adult');
  const [lifestyle, setLifestyle] = useState<string>('indoor');
  const [geographicArea, setGeographicArea] = useState<string>('urban');
  const [preventive, setPreventive] = useState<string>('yes');
  const [contactWithOtherPets, setContactWithOtherPets] = useState<string>('no');
  const [hunting, setHunting] = useState<string>('no');
  const [result, setResult] = useState<{
    riskLevel: string;
    riskScore: number;
    parasites: Array<{ name: string; risk: string; prevention: string }>;
    recommendations: string[];
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const assessRisk = () => {
    setIsLoading(true);

    // Simulate AI processing with 3-second delay
    setTimeout(() => {
    let riskScore = 0;
    const parasites: Array<{ name: string; risk: string; prevention: string }> = [];

    // Age factor
    if (age === 'puppy' || age === 'kitten') riskScore += 2;
    else if (age === 'senior') riskScore += 1;

    // Lifestyle factor
    if (lifestyle === 'outdoor') riskScore += 3;
    else if (lifestyle === 'mixed') riskScore += 2;

    // Geographic area
    if (geographicArea === 'rural') riskScore += 2;
    else if (geographicArea === 'suburban') riskScore += 1;

    // Preventive medication
    if (preventive === 'no') riskScore += 3;
    else if (preventive === 'sometimes') riskScore += 2;

    // Contact with other pets
    if (contactWithOtherPets === 'yes') riskScore += 2;

    // Hunting
    if (hunting === 'yes') riskScore += 2;

    // Assess individual parasites
    // Fleas
    let fleaRisk = 'low';
    if (lifestyle === 'outdoor' || contactWithOtherPets === 'yes' || preventive === 'no') {
      fleaRisk = 'high';
    } else if (lifestyle === 'mixed' || preventive === 'sometimes') {
      fleaRisk = 'moderate';
    }
    parasites.push({
      name: 'Fleas',
      risk: fleaRisk,
      prevention: 'Monthly flea prevention (topical, oral, or collar). Treat environment if infestation occurs.'
    });

    // Ticks
    let tickRisk = 'low';
    if (lifestyle === 'outdoor' || geographicArea === 'rural' || hunting === 'yes') {
      tickRisk = 'high';
    } else if (lifestyle === 'mixed' || geographicArea === 'suburban') {
      tickRisk = 'moderate';
    }
    parasites.push({
      name: 'Ticks',
      risk: tickRisk,
      prevention: 'Monthly tick prevention. Check for ticks after outdoor activities. Remove ticks promptly if found.'
    });

    // Heartworm
    let heartwormRisk = 'low';
    if (preventive === 'no' && (lifestyle === 'outdoor' || lifestyle === 'mixed')) {
      heartwormRisk = 'high';
    } else if (preventive === 'sometimes' || lifestyle === 'mixed') {
      heartwormRisk = 'moderate';
    }
    parasites.push({
      name: 'Heartworm',
      risk: heartwormRisk,
      prevention: 'Monthly heartworm prevention (year-round recommended). Annual heartworm testing.'
    });

    // Intestinal Worms
    let wormRisk = 'low';
    if (age === 'puppy' || age === 'kitten' || hunting === 'yes' || preventive === 'no') {
      wormRisk = 'high';
    } else if (contactWithOtherPets === 'yes' || lifestyle === 'outdoor') {
      wormRisk = 'moderate';
    }
    parasites.push({
      name: 'Intestinal Worms (Roundworms, Hookworms, Whipworms)',
      risk: wormRisk,
      prevention: 'Regular deworming (puppies/kittens: every 2-4 weeks until 3 months, then monthly). Annual fecal exams.'
    });

    // Ear Mites (cats)
    if (petType === 'cat') {
      let earMiteRisk = 'low';
      if (contactWithOtherPets === 'yes' || lifestyle === 'outdoor') {
        earMiteRisk = 'moderate';
      }
      parasites.push({
        name: 'Ear Mites',
        risk: earMiteRisk,
        prevention: 'Regular ear cleaning. Treat all pets in household if infestation occurs.'
      });
    }

    // Determine overall risk level
    let riskLevel = 'Low';
    if (riskScore >= 8) riskLevel = 'High';
    else if (riskScore >= 5) riskLevel = 'Moderate';

    const recommendations: string[] = [];
    
    if (riskLevel === 'High') {
      recommendations.push('⚠️ HIGH RISK - Consult with your veterinarian immediately about comprehensive parasite prevention');
      recommendations.push('Use year-round preventive medications for all parasites');
      recommendations.push('Consider more frequent veterinary check-ups and fecal exams');
    } else if (riskLevel === 'Moderate') {
      recommendations.push('Moderate risk - Maintain regular preventive care');
      recommendations.push('Use year-round preventive medications');
      recommendations.push('Annual veterinary check-ups and fecal exams recommended');
    } else {
      recommendations.push('Low risk - Continue current preventive care');
      recommendations.push('Maintain regular preventive medications as recommended by your vet');
    }

    recommendations.push('Always follow your veterinarian\'s recommendations for parasite prevention');
    recommendations.push('Monitor your pet for signs of parasites (scratching, visible fleas/ticks, changes in stool)');
    recommendations.push('Keep environment clean and treat all pets in household if infestation occurs');

    setResult({
      riskLevel,
      riskScore,
      parasites,
      recommendations,
    });
    setIsLoading(false);
    }, 3000); // 3-second delay
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high': return 'bg-red-500 text-white';
      case 'moderate': return 'bg-orange-500 text-white';
      case 'low': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Parasite Risk Assessment', href: '/tools/parasite-risk-assessment' }
          ]} />
          
        <div className="mb-8 sm:mb-10 mt-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Parasite Risk Assessment Tool – Dog & Cat Parasite Prevention Guide
          </h1>
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Use our parasite risk assessment tool to evaluate your dog or cat's risk for fleas, ticks, heartworm, and intestinal worms. Answer a few questions about lifestyle, location, and preventive care to get personalized prevention recommendations.
            </p>
          </div>

          {/* Tool Screenshot/Image */}
          <div className="mb-8">
            <Image
              src="/og-image.png"
              alt="Parasite Risk Assessment Tool - Evaluate flea, tick, and heartworm risk"
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
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Age
                </label>
                <select
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="puppy">Puppy/Kitten</option>
                  <option value="adult">Adult</option>
                  <option value="senior">Senior</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Lifestyle
                </label>
                <select
                  value={lifestyle}
                  onChange={(e) => setLifestyle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="indoor">Primarily Indoor</option>
                  <option value="mixed">Indoor/Outdoor</option>
                  <option value="outdoor">Primarily Outdoor</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Geographic Area
                </label>
                <select
                  value={geographicArea}
                  onChange={(e) => setGeographicArea(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="urban">Urban</option>
                  <option value="suburban">Suburban</option>
                  <option value="rural">Rural</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Current Parasite Prevention
                </label>
                <select
                  value={preventive}
                  onChange={(e) => setPreventive(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="yes">Yes, year-round</option>
                  <option value="sometimes">Sometimes/Seasonal</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Contact with Other Pets
                </label>
                <select
                  value={contactWithOtherPets}
                  onChange={(e) => setContactWithOtherPets(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="no">No</option>
                  <option value="yes">Yes (dog parks, boarding, grooming)</option>
                </select>
              </div>

              {petType === 'cat' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Does your cat hunt?
                  </label>
                  <select
                    value={hunting}
                    onChange={(e) => setHunting(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>
              )}

              <button
                onClick={assessRisk}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Assess Parasite Risk
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Risk Assessment Results</h2>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Overall Risk Level</div>
                    <div className={`text-3xl font-bold ${result.riskLevel === 'High' ? 'text-red-600 dark:text-red-400' : result.riskLevel === 'Moderate' ? 'text-orange-600 dark:text-orange-400' : 'text-green-600 dark:text-green-400'}`}>
                      {result.riskLevel}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600 dark:text-gray-400">Risk Score</div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{result.riskScore}/15</div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Parasite-Specific Risk Assessment:</h3>
                <div className="space-y-3">
                  {result.parasites.map((parasite, index) => (
                    <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900 dark:text-white">{parasite.name}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getRiskColor(parasite.risk)}`}>
                          {parasite.risk.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{parasite.prevention}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Recommendations:</h3>
                <ul className="space-y-2">
                  {result.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* How Parasite Risk Assessment Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Parasite Risk Assessment Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The tool evaluates age, lifestyle, geographic area, seasonality, preventive medication usage, and exposure to other animals. Each factor contributes to an overall score plus parasite-specific risk levels for fleas, ticks, heartworm, and intestinal worms. The results include actionable prevention tips tailored to your pet's situation.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Why Personalized Parasite Prevention Matters</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Parasite prevalence varies widely by region and lifestyle. Outdoor pets, those in warm climates, or those that hike, hunt, or visit dog parks have higher risk. Personalized assessments help you choose the right prevention plan and avoid gaps in protection.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do I know if my pet is at risk for parasites?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Parasite risk depends on age, lifestyle, geographic location, preventive medication usage, and exposure to other animals. Outdoor pets and those in warm, humid climates typically have higher risk. Use this tool to evaluate your pet's specific risk level.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What parasites should I be concerned about?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Common parasites include fleas, ticks, heartworm, and intestinal worms (roundworms, hookworms, whipworms). Cats may also be at risk for ear mites. The risk level varies based on lifestyle and location, but year-round prevention is recommended for most pets.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How often should I give my pet parasite prevention?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Most parasite preventives are given monthly, year-round. This includes flea, tick, and heartworm prevention. Some products combine multiple preventives. Always follow your veterinarian's recommendations based on your pet's specific risk factors and local parasite prevalence.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="/tools/rabies-exposure-checker"
                className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Rabies Exposure Checker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Know what to do after potential exposure</p>
              </a>
              <a
                href="/tools/deworming-reminder"
                className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Deworming Reminder</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Stay on top of deworming schedules</p>
              </a>
              <a
                href="/tools/vaccine-reminder"
                className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Vaccine Reminder</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Track vaccinations and boosters</p>
              </a>
              <a
                href="/pet-health"
                className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Health Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn more about parasite prevention</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This assessment is a general guideline. Always consult with your veterinarian for personalized parasite prevention recommendations based on your pet's specific needs, location, and health status.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

