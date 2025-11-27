'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export default function FirstAidKitChecklistGeneratorClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [kitType, setKitType] = useState<string>('basic');
  const [result, setResult] = useState<{
    items: Array<{ category: string; items: string[] }>;
    recommendations: string[];
  } | null>(null);

  const generateChecklist = () => {
    const items: Array<{ category: string; items: string[] }> = [];
    const recommendations: string[] = [];

    // Essential items (always included)
    items.push({
      category: 'Essential Supplies',
      items: [
        'Gauze pads and rolls',
        'Adhesive tape (non-stick)',
        'Cotton balls and swabs',
        'Antiseptic solution (chlorhexidine or povidone-iodine)',
        'Hydrogen peroxide (3% - for cleaning, not for ingestion)',
        'Saline solution (for flushing wounds)',
        'Tweezers',
        'Scissors (blunt-tipped)',
        'Digital thermometer (pet-specific)',
        'Disposable gloves',
        'Pet-safe antibiotic ointment',
        'Styptic powder (for nail bleeding)',
      ]
    });

    items.push({
      category: 'Bandaging Materials',
      items: [
        'Self-adhesive bandage (VetWrap or similar)',
        'Elastic bandage',
        'Non-stick pads',
        'Gauze rolls',
        'Medical tape',
      ]
    });

    items.push({
      category: 'Emergency Tools',
      items: [
        'Muzzle (even friendly pets may bite when injured)',
        'Pet carrier or stretcher',
        'Flashlight',
        'Blanket or towel',
        'Ice pack (reusable)',
        'Hot water bottle',
      ]
    });

    if (kitType === 'comprehensive') {
      items.push({
        category: 'Additional Supplies',
        items: [
          'Eye wash solution',
          'Ear cleaning solution',
          'Activated charcoal (for poison ingestion - use only under vet guidance)',
          'Syringe (without needle, for giving liquids)',
          'Pet-safe pain reliever (only as directed by vet)',
          'Benadryl (only as directed by vet)',
          'Emergency contact card (vet, poison control)',
          'Pet first aid manual',
        ]
      });
    }

    items.push({
      category: 'Documentation',
      items: [
        'Emergency veterinary contact numbers',
        'Animal poison control number (ASPCA: 888-426-4435)',
        'Pet\'s medical records (copies)',
        'List of medications and dosages',
        'Pet insurance information',
      ]
    });

    recommendations.push('Store kit in easily accessible location');
    recommendations.push('Check expiration dates regularly and replace expired items');
    recommendations.push('Keep kit in waterproof container');
    recommendations.push('Include a pet first aid manual or guide');
    recommendations.push('Take kit with you when traveling with your pet');
    recommendations.push('Know how to use items before an emergency occurs');
    recommendations.push('Consider taking a pet first aid course');

    setResult({ items, recommendations });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'First-Aid Kit Checklist Generator', href: '/tools/first-aid-kit-checklist-generator' }
          ]} />
          
          <div className="mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              First-Aid Kit Checklist Generator
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Generate a comprehensive checklist for your pet's first aid kit
              </p>
            </div>

            {/* Tool Screenshot/Image */}
            <div className="mb-8">
              <Image 
                src="/og-image.png" 
                alt="First-Aid Kit Checklist Generator - Generate a comprehensive checklist for your pet's first aid kit"
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
                  Kit Type
                </label>
                <select
                  value={kitType}
                  onChange={(e) => setKitType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="basic">Basic Kit</option>
                  <option value="comprehensive">Comprehensive Kit</option>
                </select>
              </div>

              <button
                onClick={generateChecklist}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Generate Checklist
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">First Aid Kit Checklist</h2>
              
              <div className="space-y-4 mb-6">
                {result.items.map((category, index) => (
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

          {/* How First Aid Kit Checklist Generator Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How First Aid Kit Checklist Generator Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our first aid kit checklist generator creates comprehensive checklists for pet first aid kits by organizing essential supplies, medications, and tools by category. The tool provides both basic and advanced kit options, with items organized into categories such as essential supplies (gauze, bandages, scissors), wound care (antiseptic, antibiotic ointment), medications, emergency tools (muzzle, blanket), and important documents. It helps ensure you have everything needed for pet emergencies.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Pet First Aid</h3>
              <p className="text-gray-700 dark:text-gray-300">
                A pet first aid kit should include essential supplies, wound care items, medications (only with veterinary guidance), emergency tools, and important documents. Check your kit every 3-6 months to ensure all items are present and medications haven't expired. Use a first aid kit for minor injuries and emergencies while seeking or waiting for veterinary care. However, always seek veterinary care for serious injuries, poisoning, difficulty breathing, or any condition that seems severe.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What should be in a pet first aid kit?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  A pet first aid kit should include: essential supplies (gauze, bandages, adhesive tape, cotton balls, tweezers, scissors, thermometer, gloves), wound care (antiseptic solution, antibiotic ointment, saline solution), medications (hydrogen peroxide for inducing vomiting - only with vet guidance, activated charcoal), emergency tools (muzzle, blanket, flashlight), and important documents (veterinarian contact, pet medical records, emergency clinic info). Keep the kit easily accessible and check expiration dates regularly.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How often should I check my pet first aid kit?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Check your pet first aid kit every 3-6 months to ensure all items are present, medications haven't expired, and supplies are in good condition. Replace expired medications, restock used items, and update contact information. Keep the kit in an easily accessible location and make sure all family members know where it is. Consider having a smaller travel kit for car trips.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">When should I use a pet first aid kit?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Use a pet first aid kit for minor injuries and emergencies while seeking or waiting for veterinary care. It can help with: minor cuts and scrapes, removing splinters or ticks, cleaning wounds, stabilizing injuries before transport, and managing minor burns. However, always seek veterinary care for serious injuries, poisoning, difficulty breathing, or any condition that seems severe. First aid is not a substitute for professional veterinary care.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/symptom-checker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Symptom Checker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Identify health symptoms</p>
              </a>
              <a href="/tools/toxic-foods-checker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Toxic Foods Checker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Check if foods are safe for pets</p>
              </a>
              <a href="/pet-health" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Health Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn about pet health and wellness</p>
              </a>
              <a href="/pet-safety" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Safety Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn about pet safety</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> A first aid kit is for minor emergencies only. For serious injuries or emergencies, seek immediate veterinary care. Never use human medications without veterinary approval.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

