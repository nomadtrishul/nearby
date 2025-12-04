'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import Loader from "@/components/Loader";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Download, X, Facebook, Instagram, MessageCircle, Send, Linkedin, Copy, Check } from "lucide-react";

export default function PetBMIBodyConditionScoreClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [weight, setWeight] = useState<string>('');
  const [weightUnit, setWeightUnit] = useState<'lbs' | 'kg'>('lbs');
  const [ribs, setRibs] = useState<string>('3');
  const [waist, setWaist] = useState<string>('3');
  const [abdomen, setAbdomen] = useState<string>('3');
  const [result, setResult] = useState<{
    bcs: number;
    bcsStatus: string;
    bcsDescription: string;
    visualGuide: string;
    recommendations: string[];
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const calculateBCS = () => {
    setIsLoading(true);

    // Simulate AI processing with 3-second delay
    setTimeout(() => {
    // Calculate BCS based on visual assessment
    const ribsScore = parseInt(ribs);
    const waistScore = parseInt(waist);
    const abdomenScore = parseInt(abdomen);
    
    // Average the scores (simplified calculation)
    const averageScore = Math.round((ribsScore + waistScore + abdomenScore) / 3);
    
    let bcsStatus = '';
    let bcsDescription = '';
    let visualGuide = '';
    const recommendations: string[] = [];

    if (averageScore <= 1) {
      bcsStatus = 'Emaciated';
      bcsDescription = 'Severely underweight. Ribs, spine, and pelvic bones are highly visible. No body fat.';
      visualGuide = 'All bones easily visible, severe muscle loss';
      recommendations.push('URGENT: Consult veterinarian immediately');
      recommendations.push('May indicate serious health issues');
      recommendations.push('Requires immediate medical evaluation and nutritional support');
    } else if (averageScore === 2) {
      bcsStatus = 'Very Thin';
      bcsDescription = 'Underweight. Ribs, spine, and pelvic bones easily visible. Minimal body fat.';
      visualGuide = 'Bones easily visible, minimal muscle mass';
      recommendations.push('Consult veterinarian for evaluation');
      recommendations.push('May need increased food portions or higher calorie diet');
      recommendations.push('Rule out underlying health conditions');
    } else if (averageScore === 3) {
      bcsStatus = 'Thin';
      bcsDescription = 'Slightly underweight. Ribs easily felt with minimal fat covering. Waist visible from above.';
      visualGuide = 'Ribs easily felt, visible waist and abdominal tuck';
      recommendations.push('Slightly under ideal weight');
      recommendations.push('Consider increasing food portions slightly');
      recommendations.push('Monitor weight and body condition');
    } else if (averageScore === 4) {
      bcsStatus = 'Underweight';
      bcsDescription = 'Slightly under ideal. Ribs easily felt with slight fat covering. Waist visible.';
      visualGuide = 'Ribs easily felt, waist visible from above';
      recommendations.push('Close to ideal, slightly underweight');
      recommendations.push('May benefit from slight increase in food');
    } else if (averageScore === 5) {
      bcsStatus = 'Ideal';
      bcsDescription = 'Perfect weight. Ribs easily felt but not visible. Waist visible from above. Abdominal tuck present.';
      visualGuide = 'Ribs felt with slight fat covering, clear waist, abdominal tuck visible';
      recommendations.push('Perfect body condition - maintain current diet and exercise');
      recommendations.push('Continue regular monitoring');
      recommendations.push('Keep up the good work!');
    } else if (averageScore === 6) {
      bcsStatus = 'Overweight';
      bcsDescription = 'Slightly overweight. Ribs felt with difficulty. Waist less visible. Abdominal tuck reduced.';
      visualGuide = 'Ribs felt with difficulty, waist less defined';
      recommendations.push('Slightly overweight - reduce portions by 10%');
      recommendations.push('Increase exercise gradually');
      recommendations.push('Monitor weight monthly');
    } else if (averageScore === 7) {
      bcsStatus = 'Heavy';
      bcsDescription = 'Overweight. Ribs difficult to feel. No waist visible. Abdominal tuck absent. Fat deposits on back and base of tail.';
      visualGuide = 'Ribs difficult to feel, no waist, no abdominal tuck';
      recommendations.push('Overweight - reduce portions by 15-20%');
      recommendations.push('Increase exercise');
      recommendations.push('Consult veterinarian for weight loss plan');
    } else if (averageScore === 8) {
      bcsStatus = 'Obese';
      bcsDescription = 'Obese. Ribs very difficult to feel under thick fat layer. No waist. Obvious fat deposits.';
      visualGuide = 'Ribs very difficult to feel, no waist, obvious fat deposits';
      recommendations.push('Obese - veterinary consultation recommended');
      recommendations.push('Structured weight loss program needed');
      recommendations.push('Reduce portions by 20-30% under vet supervision');
      recommendations.push('Increase exercise gradually');
    } else {
      bcsStatus = 'Morbidly Obese';
      bcsDescription = 'Severely obese. Ribs cannot be felt. Massive fat deposits. Difficulty moving.';
      visualGuide = 'Ribs cannot be felt, massive fat deposits, difficulty moving';
      recommendations.push('URGENT: Veterinary consultation required');
      recommendations.push('Severe health risks - immediate intervention needed');
      recommendations.push('Structured medical weight loss program essential');
    }

    setResult({
      bcs: averageScore,
      bcsStatus,
      bcsDescription,
      visualGuide,
      recommendations,
    });
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
            { name: 'Pet BMI / Body Condition Score', href: '/tools/pet-bmi-body-condition-score' }
          ]} />
          
        <div className="mb-8 sm:mb-10 mt-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Pet BMI / Body Condition Score Calculator – 9-Point BCS Assessment Tool
          </h1>
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Use our pet BMI and body condition score calculator to assess your dog or cat using the veterinary 9-point BCS scale. Get body condition score guidance, visual assessment tips, and personalized recommendations for weight management.
            </p>
          </div>

          {/* Tool Screenshot/Image */}
          <div className="mb-8">
            <Image
              src="/og-image.png"
              alt="Pet BMI and Body Condition Score Calculator - 9-point BCS assessment"
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

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Visual Assessment (1-9 scale)</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Assess your pet by looking and feeling. Use the scale: 1 = Emaciated, 5 = Ideal, 9 = Morbidly Obese
                </p>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Ribs (Can you feel/see ribs?)
                    </label>
                    <select
                      value={ribs}
                      onChange={(e) => setRibs(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    >
                      <option value="1">1 - Highly visible</option>
                      <option value="2">2 - Easily visible</option>
                      <option value="3">3 - Easily felt, slightly visible</option>
                      <option value="4">4 - Easily felt, not visible</option>
                      <option value="5">5 - Easily felt with slight fat</option>
                      <option value="6">6 - Felt with difficulty</option>
                      <option value="7">7 - Very difficult to feel</option>
                      <option value="8">8 - Cannot feel</option>
                      <option value="9">9 - Cannot feel, massive fat</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Waist (Viewed from above)
                    </label>
                    <select
                      value={waist}
                      onChange={(e) => setWaist(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    >
                      <option value="1">1 - Extreme hourglass</option>
                      <option value="2">2 - Very pronounced waist</option>
                      <option value="3">3 - Visible waist</option>
                      <option value="4">4 - Slight waist</option>
                      <option value="5">5 - Clear waist</option>
                      <option value="6">6 - Less defined waist</option>
                      <option value="7">7 - No waist visible</option>
                      <option value="8">8 - Back wider than waist</option>
                      <option value="9">9 - No waist, very wide</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Abdomen (Viewed from side)
                    </label>
                    <select
                      value={abdomen}
                      onChange={(e) => setAbdomen(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    >
                      <option value="1">1 - Extreme tuck</option>
                      <option value="2">2 - Very pronounced tuck</option>
                      <option value="3">3 - Visible tuck</option>
                      <option value="4">4 - Slight tuck</option>
                      <option value="5">5 - Clear abdominal tuck</option>
                      <option value="6">6 - Reduced tuck</option>
                      <option value="7">7 - No tuck, straight</option>
                      <option value="8">8 - Abdomen sags</option>
                      <option value="9">9 - Severe sagging</option>
                    </select>
                  </div>
                </div>
              </div>

              <button
                onClick={calculateBCS}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Calculate Body Condition Score
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Body Condition Score Results</h2>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Body Condition Score</div>
                  <div className={`text-5xl font-bold mb-2 ${
                    result.bcs <= 3 ? 'text-red-600 dark:text-red-400' :
                    result.bcs === 4 ? 'text-orange-600 dark:text-orange-400' :
                    result.bcs === 5 ? 'text-green-600 dark:text-green-400' :
                    result.bcs === 6 ? 'text-yellow-600 dark:text-yellow-400' :
                    result.bcs >= 7 ? 'text-red-600 dark:text-red-400' : ''
                  }`}>
                    {result.bcs}/9
                  </div>
                  <div className={`text-xl font-semibold ${
                    result.bcs <= 3 ? 'text-red-600 dark:text-red-400' :
                    result.bcs === 4 ? 'text-orange-600 dark:text-orange-400' :
                    result.bcs === 5 ? 'text-green-600 dark:text-green-400' :
                    result.bcs === 6 ? 'text-yellow-600 dark:text-yellow-400' :
                    result.bcs >= 7 ? 'text-red-600 dark:text-red-400' : ''
                  }`}>
                    {result.bcsStatus}
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Description:</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">{result.bcsDescription}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">{result.visualGuide}</p>
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

          {/* How Pet Body Condition Score Calculator Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Pet Body Condition Score Calculator Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The calculator uses the veterinary 9-point Body Condition Score (BCS) system. Answer questions about ribs, waistline, and abdominal tuck. These inputs determine your pet's BCS category and provide tailored recommendations for maintaining, losing, or gaining weight safely.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding the 9-Point BCS Scale</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Scores 1-3 indicate underweight, 4-5 is ideal, 6-7 is overweight, and 8-9 is obese. Ideal pets have easily felt ribs without heavy fat covering, a visible waist from above, and a slight abdominal tuck from the side. The tool explains each category and how to adjust diet and exercise accordingly.
              </p>
            </div>
          </div>

          {/* How Pet BMI / Body Condition Score Calculator Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Pet BMI / Body Condition Score Calculator Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our pet BMI and body condition score calculator uses the standardized 9-point scale to assess your pet's body condition. The assessment is based on three key visual and tactile indicators: rib palpation (feeling the ribs), waist visibility (viewing from above), and abdominal tuck (viewing from the side). This method is more accurate than weight alone because it accounts for body composition, muscle mass, and frame size.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding the 9-Point Scale</h3>
              <p className="text-gray-700 dark:text-gray-300">
                The 9-point body condition scale ranges from 1 (emaciated) to 9 (morbidly obese), with 4-5 being ideal. At the ideal score, ribs can be easily felt but not seen, there's a visible waist when viewed from above, and an abdominal tuck when viewed from the side. This score indicates your pet has appropriate body fat and muscle mass for optimal health.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What is a body condition score (BCS)?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Body Condition Score (BCS) is a standardized 9-point scale used to assess a pet's body condition. A score of 1 indicates emaciated, 5 is ideal, and 9 is morbidly obese. It's assessed by feeling ribs, viewing the waist from above, and checking the abdominal tuck from the side. This is more accurate than weight alone because it accounts for body composition.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What is the ideal body condition score for my pet?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The ideal body condition score is 4-5 on a 9-point scale. At this score, ribs can be easily felt but not seen, there's a visible waist when viewed from above, and an abdominal tuck when viewed from the side. This indicates your pet is at a healthy weight with appropriate body fat.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How often should I check my pet's body condition score?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Check your pet's body condition score monthly, or more frequently if they're on a weight management program. Regular monitoring helps catch weight changes early. If your pet scores outside the ideal range (4-5), consult your veterinarian for a professional assessment and personalized plan.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="/tools/weight-calculator"
                className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Weight Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate your pet's ideal weight range</p>
              </a>
              <a
                href="/tools/calorie-calculator"
                className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Calorie Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Determine daily calorie needs for your pet</p>
              </a>
              <a
                href="/tools/exercise-calculator"
                className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Exercise Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Create personalized activity plans</p>
              </a>
              <a
                href="/tools/pet-treat-calorie-counter"
                className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Treat Calorie Counter</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Keep treats within the 10% guideline</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This tool provides general guidance. Always consult with your veterinarian for professional assessment and personalized recommendations, especially if your pet scores outside the ideal range (4-5).
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

