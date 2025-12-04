'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import Loader from "@/components/Loader";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Download, X, Facebook, Instagram, MessageCircle, Send, Linkedin, Copy, Check } from "lucide-react";

export default function SeniorHealthChecklistGeneratorClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [age, setAge] = useState<string>('');
  const [result, setResult] = useState<{
    checklist: Array<{ category: string; items: string[] }>;
    recommendations: string[];
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const generateChecklist = () => {
    const ageNum = parseFloat(age);
    if (!ageNum || ageNum <= 0) {
      alert('Please enter a valid age');
      return;
    }

    setIsLoading(true);

    // Simulate AI processing with 3-second delay
    setTimeout(() => {
    const checklist: Array<{ category: string; items: string[] }> = [];
    const recommendations: string[] = [];

    checklist.push({
      category: 'Veterinary Care',
      items: [
        'Semi-annual veterinary exams (every 6 months)',
        'Annual blood work (CBC, chemistry panel)',
        'Urinalysis',
        'Blood pressure monitoring',
        'Thyroid function testing',
        'Dental exam and cleaning (as needed)',
        'Weight monitoring',
        'Body condition scoring',
      ]
    });

    checklist.push({
      category: 'Daily Monitoring',
      items: [
        'Appetite and water intake',
        'Energy level and activity',
        'Mobility and stiffness',
        'Changes in behavior',
        'Lumps or bumps',
        'Coughing or breathing changes',
        'Vision and hearing',
        'Bathroom habits',
      ]
    });

    checklist.push({
      category: 'Home Environment',
      items: [
        'Comfortable, supportive bedding',
        'Easy access to food and water',
        'Ramps or steps for furniture access',
        'Non-slip surfaces (rugs, mats)',
        'Warm, draft-free sleeping area',
        'Easy access to litter box (cats)',
        'Reduced stairs or obstacles',
        'Good lighting for vision-impaired pets',
      ]
    });

    checklist.push({
      category: 'Diet & Nutrition',
      items: [
        'Senior-specific diet (if recommended)',
        'Appropriate calorie intake for activity level',
        'High-quality, easily digestible protein',
        'Joint-supporting nutrients',
        'Adequate hydration',
        'Supplements (as recommended by vet)',
        'Regular meal schedule',
        'Monitor for weight changes',
      ]
    });

    checklist.push({
      category: 'Exercise & Activity',
      items: [
        'Regular, low-impact exercise',
        'Shorter, more frequent walks',
        'Mental stimulation (puzzles, toys)',
        'Gentle play activities',
        'Monitor for fatigue or pain',
        'Adjust activity based on ability',
        'Physical therapy (if recommended)',
      ]
    });

    checklist.push({
      category: 'Grooming & Hygiene',
      items: [
        'Regular brushing (coat care)',
        'Nail trimming (may need more frequent)',
        'Dental care (brushing, dental chews)',
        'Ear cleaning (as needed)',
        'Bathing (as needed, with gentle products)',
        'Check for skin issues',
        'Monitor for lumps or growths',
      ]
    });

    checklist.push({
      category: 'Medications & Supplements',
      items: [
        'Administer medications as prescribed',
        'Joint supplements (glucosamine, chondroitin)',
        'Omega-3 fatty acids',
        'Pain management (if needed)',
        'Monitor for medication side effects',
        'Keep medication schedule consistent',
        'Regular medication reviews with vet',
      ]
    });

    recommendations.push(`Your ${ageNum}-year-old ${petType} is considered senior`);
    recommendations.push('Senior pets need more frequent veterinary care (every 6 months)');
    recommendations.push('Monitor for common senior health issues: arthritis, kidney disease, heart disease, cognitive decline');
    recommendations.push('Be patient with changes in behavior or mobility');
    recommendations.push('Quality of life is important - discuss with your veterinarian');
    recommendations.push('Keep detailed records of health changes and veterinary visits');

    setResult({ checklist, recommendations });
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
            { name: 'Senior Health Checklist Generator', href: '/tools/senior-health-checklist-generator' }
          ]} />
          
          <div className="mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Senior Health Checklist Generator
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Generate a comprehensive health checklist for your senior pet
              </p>
            </div>

            {/* Tool Screenshot/Image */}
            <div className="mb-8">
              <Image 
                src="/og-image.png" 
                alt="Senior Health Checklist Generator - Generate a comprehensive health checklist"
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
                  Pet Age (years)
                </label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="e.g., 10"
                  min="1"
                  max="25"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <button
                onClick={generateChecklist}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Generate Health Checklist
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Senior Pet Health Checklist</h2>
              
              <div className="space-y-4 mb-6">
                {result.checklist.map((category, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">{category.category}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <input type="checkbox" className="mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
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

          {/* How Senior Health Checklist Generator Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Senior Health Checklist Generator Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our senior health checklist generator creates comprehensive health checklists for senior pets by organizing monitoring items, veterinary care recommendations, and wellness guidelines based on your pet's age and type. The tool provides age-appropriate checklists covering weight monitoring, appetite and water intake, mobility assessment, dental care, vision and hearing checks, and behavioral changes. It helps you stay organized and proactive about your senior pet's health.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Senior Pet Health</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Senior pets need more frequent veterinary checkups (at least every 6 months), regular monitoring of weight, appetite, and behavior, appropriate exercise adjusted for mobility, comfortable bedding, senior-appropriate diet, dental care, and environmental modifications. Monitor for changes in appetite, water intake, mobility, behavior, dental problems, vision or hearing changes, and lumps or bumps. Work with your veterinarian to develop a personalized senior care plan.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What health issues should I monitor in senior pets?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Monitor senior pets for: changes in appetite or water intake, weight changes, mobility issues (stiffness, limping, difficulty getting up), changes in behavior (confusion, disorientation, increased sleeping), dental problems, vision or hearing changes, lumps or bumps, changes in urination or defecation, coughing or breathing changes, and skin/coat changes. Senior pets should have veterinary checkups every 6 months (or more frequently if health issues are present) to catch problems early.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How often should senior pets see the veterinarian?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Senior pets should see the veterinarian at least every 6 months for wellness exams, even if they appear healthy. More frequent visits (every 3-4 months) may be recommended if your pet has chronic health conditions. Regular checkups allow for early detection of age-related diseases, monitoring of existing conditions, and adjustments to medications or treatments. Blood work, urinalysis, and other diagnostic tests are often recommended annually or semi-annually for senior pets.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What special care do senior pets need?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Senior pets need: 1) More frequent veterinary checkups (every 6 months); 2) Regular monitoring of weight, appetite, and behavior; 3) Appropriate exercise (adjusted for mobility); 4) Comfortable bedding and easy access to food/water; 5) Senior-appropriate diet; 6) Dental care; 7) Joint supplements if needed; 8) Environmental modifications (ramps, non-slip surfaces); 9) Mental stimulation; 10) Patience and understanding of age-related changes. Work with your veterinarian to develop a senior care plan tailored to your pet's needs.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/senior-pet-diet-planner" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Senior Pet Diet Planner</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Create diet plans for senior pets</p>
              </a>
              <a href="/tools/chronic-disease-management-planner" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Chronic Disease Management Planner</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Manage chronic health conditions</p>
              </a>
              <a href="/tools/symptom-checker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Symptom Checker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Identify health symptoms</p>
              </a>
              <a href="/senior-pets" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Senior Pet Care Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Comprehensive senior pet resources</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This checklist provides general guidelines. Senior pets have individual needs. Work closely with your veterinarian to develop a personalized care plan for your senior pet.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

