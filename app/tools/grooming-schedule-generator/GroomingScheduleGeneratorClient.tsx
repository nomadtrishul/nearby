'use client';

import { useState } from 'react';
import Image from 'next/image';
import Loader from "@/components/Loader";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Download, X, Facebook, Instagram, MessageCircle, Send, Linkedin, Copy, Check } from "lucide-react";
import Breadcrumb from '@/components/Breadcrumb';

export default function GroomingScheduleGeneratorClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [coatType, setCoatType] = useState<string>('short');
  const [lifestyle, setLifestyle] = useState<string>('indoor');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{
    schedule: Array<{ task: string; frequency: string; notes: string }>;
    recommendations: string[];
  } | null>(null);

  const generateSchedule = () => {

    setIsLoading(true);

    // Simulate AI processing with 3-second delay
    setTimeout(() => {
      const schedule: Array<{ task: string; frequency: string; notes: string }> = [];
      const recommendations: string[] = [];

      // Bathing frequency
      if (coatType === 'short' || coatType === 'smooth') {
        schedule.push({
          task: 'Bathing',
          frequency: 'Every 4-8 weeks',
          notes: 'Short coats need less frequent bathing. Bathe when dirty or smelly.'
        });
      } else if (coatType === 'medium') {
        schedule.push({
          task: 'Bathing',
          frequency: 'Every 4-6 weeks',
          notes: 'Regular bathing helps maintain coat health and reduce shedding.'
        });
      } else if (coatType === 'long' || coatType === 'double') {
        schedule.push({
          task: 'Bathing',
          frequency: 'Every 3-4 weeks',
          notes: 'Long/double coats need more frequent bathing to prevent matting and maintain coat health.'
        });
      } else if (coatType === 'curly' || coatType === 'wiry') {
        schedule.push({
          task: 'Bathing',
          frequency: 'Every 4-6 weeks',
          notes: 'Use appropriate shampoo for coat type. Professional grooming may be needed.'
        });
      }

      // Brushing frequency
      if (coatType === 'short' || coatType === 'smooth') {
        schedule.push({
          task: 'Brushing',
          frequency: 'Weekly',
          notes: 'Use a soft brush or grooming mitt. Helps remove loose hair and distribute natural oils.'
        });
      } else if (coatType === 'medium') {
        schedule.push({
          task: 'Brushing',
          frequency: '2-3 times per week',
          notes: 'Use a slicker brush or comb. Prevents matting and reduces shedding.'
        });
      } else if (coatType === 'long' || coatType === 'double') {
        schedule.push({
          task: 'Brushing',
          frequency: 'Daily',
          notes: 'Essential for long coats. Use a slicker brush and comb. Prevents painful matting.'
        });
      } else if (coatType === 'curly') {
        schedule.push({
          task: 'Brushing',
          frequency: 'Every 1-2 days',
          notes: 'Use a pin brush or comb. Curly coats mat easily and need regular attention.'
        });
      } else if (coatType === 'wiry') {
        schedule.push({
          task: 'Brushing',
          frequency: '2-3 times per week',
          notes: 'Use a slicker brush. May need hand-stripping for show dogs.'
        });
      }

      // Nail trimming
      schedule.push({
        task: 'Nail Trimming',
        frequency: 'Every 2-4 weeks',
        notes: 'Trim when nails touch the ground. More frequent if pet is less active.'
      });

      // Ear cleaning
      schedule.push({
        task: 'Ear Cleaning',
        frequency: 'Weekly to monthly',
        notes: 'Check ears weekly. Clean when dirty or waxy. More frequent for floppy-eared dogs or pets with ear issues.'
      });

      // Dental care
      schedule.push({
        task: 'Teeth Brushing',
        frequency: 'Daily (ideal) or 3-4 times per week',
        notes: 'Daily brushing is best for dental health. Use pet-specific toothpaste.'
      });

      // Professional grooming
      if (coatType === 'long' || coatType === 'double' || coatType === 'curly') {
        schedule.push({
          task: 'Professional Grooming',
          frequency: 'Every 4-8 weeks',
          notes: 'Professional groomers can handle difficult coats, trimming, and styling.'
        });
      } else {
        schedule.push({
          task: 'Professional Grooming',
          frequency: 'Every 8-12 weeks (optional)',
          notes: 'Even short-coated pets benefit from occasional professional grooming for nail trimming and thorough cleaning.'
        });
      }

      // Lifestyle adjustments
      if (lifestyle === 'outdoor') {
        recommendations.push('Outdoor pets may need more frequent bathing due to dirt and outdoor exposure');
        recommendations.push('Check for ticks and debris after outdoor activities');
      }

      recommendations.push('Adjust schedule based on your pet\'s individual needs and activity level');
      recommendations.push('Start grooming routines early to get pets comfortable with the process');
      recommendations.push('Use positive reinforcement and treats during grooming');
      recommendations.push('Watch for signs of skin irritation or discomfort');

      setResult({ schedule, recommendations });
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
            { name: 'Grooming Schedule Generator', href: '/tools/grooming-schedule-generator' }
          ]} />

          <div className="mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Grooming Schedule Generator
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Create a personalized grooming schedule based on your pet's coat type and lifestyle
              </p>
            </div>

            {/* Tool Screenshot/Image */}
            <div className="mb-8">
              <Image
                src="/og-image.png"
                alt="Grooming Schedule Generator - Create a personalized grooming schedule"
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
                  Coat Type
                </label>
                <select
                  value={coatType}
                  onChange={(e) => setCoatType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="short">Short/Smooth</option>
                  <option value="medium">Medium</option>
                  <option value="long">Long</option>
                  <option value="double">Double Coat</option>
                  <option value="curly">Curly</option>
                  <option value="wiry">Wiry</option>
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

              <button
                onClick={generateSchedule}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Generate Grooming Schedule
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Grooming Schedule</h2>

              <div className="space-y-4 mb-6">
                {result.schedule.map((item, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{item.task}</h3>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{item.frequency}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.notes}</p>
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

          {/* How Grooming Schedule Generator Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Grooming Schedule Generator Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our grooming schedule generator creates a personalized grooming calendar based on your pet's coat type, lifestyle, and individual needs. The tool considers factors such as coat length, texture, shedding patterns, and activity level to recommend frequencies for bathing, brushing, nail trimming, ear cleaning, and professional grooming. The schedule is tailored to maintain optimal coat health while preventing common issues like matting, skin problems, and over-grooming.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Grooming Frequency</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Grooming frequency varies significantly by coat type: short-coated pets may need bathing every 4-8 weeks and weekly brushing, while long-coated pets may need bathing every 3-4 weeks and daily brushing. Nail trimming is typically needed every 2-4 weeks for most pets, and ear cleaning weekly to monthly. Professional grooming is recommended every 4-8 weeks for long or curly coats, and every 8-12 weeks for short coats. Regular grooming prevents matting, skin issues, and keeps your pet comfortable.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How often should I groom my pet?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Grooming frequency depends on your pet's coat type. Short-coated pets may need bathing every 4-8 weeks and weekly brushing, while long-coated pets may need bathing every 3-4 weeks and daily brushing. Nail trimming is typically needed every 2-4 weeks, and ear cleaning weekly to monthly. Professional grooming is recommended every 4-8 weeks for long or curly coats, and every 8-12 weeks for short coats.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What grooming tasks should I do regularly?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Regular grooming tasks include: bathing (frequency depends on coat type), brushing (daily for long coats, weekly for short coats), nail trimming (every 2-4 weeks), ear cleaning (weekly to monthly), and teeth brushing (daily ideal, or 3-4 times per week). Professional grooming may also be needed for trimming, styling, and thorough cleaning.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do I know if my pet needs grooming?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Signs your pet needs grooming include: strong odor, matted or tangled fur, overgrown nails (touching the ground or clicking on floors), dirty or waxy ears, visible dirt or debris in the coat, excessive shedding, and skin irritation. Regular grooming prevents these issues and keeps your pet healthy and comfortable.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/grooming-tools-recommender" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Grooming Tools Recommender</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Find the right grooming tools for your pet</p>
              </a>
              <a href="/tools/grooming-cost-estimator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Grooming Cost Estimator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Estimate grooming expenses</p>
              </a>
              <a href="/tools/nail-length-checker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Nail Length Checker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Check if your pet's nails need trimming</p>
              </a>
              <a href="/pet-grooming" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Grooming Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn professional grooming techniques</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This schedule provides general guidelines. Adjust based on your pet's individual needs, activity level, and any skin or coat conditions. Consult your veterinarian or professional groomer for specific recommendations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

