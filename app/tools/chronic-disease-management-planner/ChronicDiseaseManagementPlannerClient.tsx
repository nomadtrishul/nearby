'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import Loader from "@/components/Loader";
import { Download, X, Facebook, Instagram, MessageCircle, Send, Linkedin, Copy, Check } from "lucide-react";

export default function ChronicDiseaseManagementPlannerClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [conditions, setConditions] = useState<string[]>([]);
  const [result, setResult] = useState<{
    managementPlan: Array<{ condition: string; medications: string[]; monitoring: string[]; diet: string[]; lifestyle: string[] }>;
    recommendations: string[];
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const allConditions = [
    'Diabetes',
    'Kidney Disease',
    'Heart Disease',
    'Arthritis',
    'Allergies',
    'Thyroid Disease',
    'Liver Disease',
    'IBD (Inflammatory Bowel Disease)',
    'Epilepsy',
    'Cushing\'s Disease',
    'Addison\'s Disease',
  ];

  const toggleCondition = (condition: string) => {
    if (conditions.includes(condition)) {
      setConditions(conditions.filter(c => c !== condition));
    } else {
      setConditions([...conditions, condition]);
    }
  };

  const generatePlan = () => {
    if (conditions.length === 0) {
      alert('Please select at least one condition');
      return;
    }

    setIsLoading(true);

    // Simulate AI processing with 3-second delay
    setTimeout(() => {
      const managementPlan: Array<{ condition: string; medications: string[]; monitoring: string[]; diet: string[]; lifestyle: string[] }> = [];
      const recommendations: string[] = [];

      conditions.forEach(condition => {
        const plan: { condition: string; medications: string[]; monitoring: string[]; diet: string[]; lifestyle: string[] } = {
          condition,
          medications: [],
          monitoring: [],
          diet: [],
          lifestyle: [],
        };

        if (condition === 'Diabetes') {
          plan.medications = ['Insulin (as prescribed)', 'Blood glucose monitoring supplies'];
          plan.monitoring = ['Daily blood glucose checks', 'Monitor water intake and urination', 'Regular weight monitoring', 'Watch for signs of hypoglycemia'];
          plan.diet = ['Prescription diabetic diet', 'Consistent meal timing', 'High fiber, complex carbohydrates', 'Avoid treats with sugar'];
          plan.lifestyle = ['Regular exercise (consistent schedule)', 'Maintain consistent routine', 'Monitor for complications'];
        } else if (condition === 'Kidney Disease') {
          plan.medications = ['Phosphorus binders (if needed)', 'ACE inhibitors (as prescribed)', 'Other medications as prescribed by vet'];
          plan.monitoring = ['Regular blood work (BUN, creatinine)', 'Monitor water intake', 'Track weight', 'Watch for signs of dehydration'];
          plan.diet = ['Prescription kidney diet (low protein, low phosphorus)', 'Encourage water intake', 'May need subcutaneous fluids'];
          plan.lifestyle = ['Regular veterinary checkups', 'Monitor for progression', 'Maintain hydration'];
        } else if (condition === 'Heart Disease') {
          plan.medications = ['Heart medications (as prescribed)', 'Diuretics (if needed)', 'ACE inhibitors'];
          plan.monitoring = ['Regular cardiac exams', 'Monitor breathing rate at rest', 'Watch for coughing', 'Track exercise tolerance'];
          plan.diet = ['Prescription heart diet (low sodium)', 'Moderate protein', 'Omega-3 fatty acids'];
          plan.lifestyle = ['Controlled exercise', 'Avoid stress', 'Monitor for signs of heart failure'];
        } else if (condition === 'Arthritis') {
          plan.medications = ['Pain medications (as prescribed)', 'Joint supplements (glucosamine, chondroitin)', 'Anti-inflammatories'];
          plan.monitoring = ['Monitor mobility and pain levels', 'Track activity levels', 'Watch for stiffness'];
          plan.diet = ['Weight management (if overweight)', 'Omega-3 fatty acids', 'Joint-supporting nutrients'];
          plan.lifestyle = ['Low-impact exercise', 'Comfortable bedding', 'Ramps for access', 'Physical therapy if recommended'];
        } else if (condition === 'Allergies') {
          plan.medications = ['Antihistamines (as prescribed)', 'Immunosuppressants (if needed)', 'Topical treatments'];
          plan.monitoring = ['Track allergy symptoms', 'Monitor for skin infections', 'Watch for flare-ups'];
          plan.diet = ['Hypoallergenic or elimination diet', 'Avoid known allergens'];
          plan.lifestyle = ['Avoid triggers', 'Regular bathing with medicated shampoo', 'Environmental control'];
        } else if (condition === 'Thyroid Disease') {
          plan.medications = ['Thyroid medication (daily)', 'Regular blood work to adjust dosage'];
          plan.monitoring = ['Regular thyroid hormone levels', 'Monitor weight', 'Watch for symptoms of over/under medication'];
          plan.diet = ['Balanced diet', 'May need prescription diet'];
          plan.lifestyle = ['Consistent medication schedule', 'Regular veterinary monitoring'];
        } else {
          // Default for other conditions
          plan.medications = ['As prescribed by veterinarian'];
          plan.monitoring = ['Regular veterinary checkups', 'Monitor symptoms'];
          plan.diet = ['Balanced diet', 'Prescription diet if recommended'];
          plan.lifestyle = ['Low stress environment', 'Regular care routine'];
        }

        managementPlan.push(plan);
      });

      recommendations.push('Work closely with your veterinarian to develop a comprehensive management plan');
      recommendations.push('Keep detailed records of medications, symptoms, and veterinary visits');
      recommendations.push('Follow medication schedules exactly as prescribed');
      recommendations.push('Attend all scheduled veterinary checkups');
      recommendations.push('Monitor your pet closely for changes in condition');
      recommendations.push('Have emergency contact information readily available');
      recommendations.push('Consider pet insurance for ongoing care costs');

      setResult({ managementPlan, recommendations });
      setIsLoading(false);
    }, 3000);
  };

  const downloadPDF = () => {
    if (!result) return;
    const content = `
Chronic Disease Management Plan - NearbyPetCare.com
===================================================

${result.managementPlan.map(plan => `
Condition: ${plan.condition}
---------------------------
Medications:
${plan.medications.map(m => `- ${m}`).join('\n')}

Monitoring:
${plan.monitoring.map(m => `- ${m}`).join('\n')}

Diet:
${plan.diet.map(d => `- ${d}`).join('\n')}

Lifestyle:
${plan.lifestyle.map(l => `- ${l}`).join('\n')}
`).join('\n')}

General Recommendations:
${result.recommendations.map(r => `- ${r}`).join('\n')}

Generated by NearbyPetCare.com
    `.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'disease-management-plan.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const shareOnSocial = (platform: string) => {
    if (!result) return;

    const url = window.location.href;
    const shareText = `🏥 I created a management plan for my pet's chronic condition(s): ${conditions.join(', ')}.
    
Create your pet's health management plan at nearbypetcare.com!`;

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
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=Pet Disease Management Plan&summary=${encodeURIComponent(shareText)}`;
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
            { name: 'Chronic Disease Management Planner', href: '/tools/chronic-disease-management-planner' }
          ]} />

          <div className="mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Chronic Disease Management Planner
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Create a comprehensive management plan for pets with chronic health conditions
              </p>
            </div>

            {/* Tool Screenshot/Image */}
            <div className="mb-8">
              <Image
                src="/og-image.png"
                alt="Chronic Disease Management Planner - Create a comprehensive management plan for pets"
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
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  Select Chronic Conditions (select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-64 overflow-y-auto p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  {allConditions.map((condition, index) => (
                    <button
                      key={index}
                      onClick={() => toggleCondition(condition)}
                      className={`p-2 rounded-lg border-2 text-sm text-left transition-colors ${conditions.includes(condition)
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                        }`}
                    >
                      {condition}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={generatePlan}
                disabled={conditions.length === 0}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Generate Management Plan
              </button>
            </div>
          </div>

          <Loader
            isLoading={isLoading}
            message="Generating comprehensive management plan..."
            petType={petType}
            size="large"
          />

          {result && !isLoading && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Chronic Disease Management Plan</h2>

                <div className="flex flex-col gap-2 w-full sm:w-auto">
                  <button
                    onClick={downloadPDF}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Plan</span>
                  </button>

                  <div className="flex flex-col items-center gap-2">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Share plan</p>
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

              <div className="space-y-6 mb-6">
                {result.managementPlan.map((plan, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-4">{plan.condition}</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Medications:</h4>
                        <ul className="space-y-1">
                          {plan.medications.map((med, idx) => (
                            <li key={idx} className="text-sm text-gray-700 dark:text-gray-300">• {med}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Monitoring:</h4>
                        <ul className="space-y-1">
                          {plan.monitoring.map((mon, idx) => (
                            <li key={idx} className="text-sm text-gray-700 dark:text-gray-300">• {mon}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Diet:</h4>
                        <ul className="space-y-1">
                          {plan.diet.map((d, idx) => (
                            <li key={idx} className="text-sm text-gray-700 dark:text-gray-300">• {d}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Lifestyle:</h4>
                        <ul className="space-y-1">
                          {plan.lifestyle.map((l, idx) => (
                            <li key={idx} className="text-sm text-gray-700 dark:text-gray-300">• {l}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">General Recommendations:</h3>
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

          {/* How Chronic Disease Management Planner Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Chronic Disease Management Planner Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our chronic disease management planner creates comprehensive management plans for pets with chronic health conditions by providing medication schedules, monitoring guidelines, dietary recommendations, and lifestyle modifications based on the selected condition. The tool covers common chronic diseases such as diabetes, kidney disease, heart disease, arthritis, allergies, and thyroid disease, offering condition-specific guidance to help you manage your pet's health effectively.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Chronic Disease Management</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Managing a pet with chronic disease requires working closely with your veterinarian to develop a comprehensive plan, following medication schedules exactly as prescribed, regular monitoring of symptoms and condition, dietary modifications as recommended, lifestyle adjustments, and keeping detailed records. Diet is crucial in managing chronic disease - many conditions require prescription diets specifically formulated for the condition. Always follow your veterinarian's specific recommendations.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do I manage a pet with chronic disease?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Managing a pet with chronic disease requires: 1) Working closely with your veterinarian to develop a comprehensive plan; 2) Following medication schedules exactly as prescribed; 3) Regular monitoring of symptoms and condition; 4) Dietary modifications as recommended; 5) Lifestyle adjustments (exercise, stress reduction); 6) Keeping detailed records of medications, symptoms, and veterinary visits; 7) Attending all scheduled checkups. Always follow your veterinarian's specific recommendations.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What chronic diseases are common in pets?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Common chronic diseases in pets include: diabetes, kidney disease, heart disease, arthritis, allergies, thyroid disease (hyperthyroidism in cats, hypothyroidism in dogs), liver disease, inflammatory bowel disease (IBD), epilepsy, Cushing's disease, and Addison's disease. Each condition requires specific management approaches including medications, dietary modifications, and monitoring protocols.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How important is diet in managing chronic disease?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Diet is crucial in managing chronic disease. Many conditions require prescription diets specifically formulated for the condition (e.g., kidney diets, diabetic diets, heart diets). Dietary modifications can help manage symptoms, slow disease progression, and improve quality of life. Always follow your veterinarian's dietary recommendations, as incorrect diets can worsen the condition. Never change your pet's diet without veterinary guidance.
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
              <a href="/tools/senior-pet-diet-planner" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Senior Pet Diet Planner</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Create diet plans for senior pets</p>
              </a>
              <a href="/tools/calorie-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Calorie Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate daily calorie needs</p>
              </a>
              <a href="/pet-health" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Health Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn about pet health and wellness</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This planner provides general guidelines. Chronic disease management must be supervised by your veterinarian. Always follow your veterinarian's specific recommendations for your pet's condition.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
