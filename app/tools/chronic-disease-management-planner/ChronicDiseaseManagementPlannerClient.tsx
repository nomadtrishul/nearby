'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function ChronicDiseaseManagementPlannerClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [conditions, setConditions] = useState<string[]>([]);
  const [result, setResult] = useState<{
    managementPlan: Array<{ condition: string; medications: string[]; monitoring: string[]; diet: string[]; lifestyle: string[] }>;
    recommendations: string[];
  } | null>(null);

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
          
          <div className="text-center mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Chronic Disease Management Planner
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Create a comprehensive management plan for pets with chronic health conditions
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
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  Select Chronic Conditions (select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-64 overflow-y-auto p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  {allConditions.map((condition, index) => (
                    <button
                      key={index}
                      onClick={() => toggleCondition(condition)}
                      className={`p-2 rounded-lg border-2 text-sm text-left transition-colors ${
                        conditions.includes(condition)
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

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Chronic Disease Management Plan</h2>
              
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

