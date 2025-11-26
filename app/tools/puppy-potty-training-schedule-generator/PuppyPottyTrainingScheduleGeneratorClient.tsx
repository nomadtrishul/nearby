'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function PuppyPottyTrainingScheduleGeneratorClient() {
  const [puppyAge, setPuppyAge] = useState<string>('8');
  const [wakeTime, setWakeTime] = useState<string>('07:00');
  const [bedtime, setBedtime] = useState<string>('22:00');
  const [result, setResult] = useState<{
    schedule: Array<{ time: string; activity: string; notes: string }>;
    tips: string[];
    timeline: string[];
  } | null>(null);

  const generateSchedule = () => {
    const age = parseInt(puppyAge);
    const wake = wakeTime.split(':').map(Number);
    const bed = bedtime.split(':').map(Number);
    const wakeMinutes = wake[0] * 60 + wake[1];
    const bedMinutes = bed[0] * 60 + bed[1];
    
    const schedule: Array<{ time: string; activity: string; notes: string }> = [];
    const tips: string[] = [];
    const timeline: string[] = [];

    // Calculate potty break intervals based on age
    let intervalHours = 1;
    if (age < 10) intervalHours = 1;
    else if (age < 14) intervalHours = 2;
    else if (age < 20) intervalHours = 3;
    else intervalHours = 4;

    // Morning routine
    schedule.push({
      time: wakeTime,
      activity: 'Wake up & Immediate Potty Break',
      notes: 'Take puppy outside immediately upon waking. Use a cue word like "go potty" and reward with treats and praise when they eliminate.'
    });

    // Breakfast
    const breakfastTime = wakeMinutes + 15;
    schedule.push({
      time: formatTime(breakfastTime),
      activity: 'Breakfast',
      notes: 'Feed puppy breakfast. After eating, wait 15-30 minutes before next potty break.'
    });

    // Post-meal potty break
    const postBreakfastTime = breakfastTime + 30;
    schedule.push({
      time: formatTime(postBreakfastTime),
      activity: 'Potty Break (Post-Meal)',
      notes: 'Puppies typically need to eliminate 15-30 minutes after eating. Take outside immediately.'
    });

    // Regular potty breaks throughout the day
    let currentTime = postBreakfastTime + (intervalHours * 60);
    while (currentTime < bedMinutes - 60) {
      schedule.push({
        time: formatTime(currentTime),
        activity: 'Potty Break',
        notes: `Regular potty break. Take puppy outside every ${intervalHours} hours during the day.`
      });
      currentTime += (intervalHours * 60);
    }

    // Lunch
    const lunchTime = wakeMinutes + (6 * 60);
    if (lunchTime < bedMinutes - 60) {
      schedule.push({
        time: formatTime(lunchTime),
        activity: 'Lunch',
        notes: 'Feed puppy lunch. Wait 15-30 minutes before next potty break.'
      });
      
      schedule.push({
        time: formatTime(lunchTime + 30),
        activity: 'Potty Break (Post-Meal)',
        notes: 'Post-meal potty break. Most puppies need to eliminate after eating.'
      });
    }

    // Dinner
    const dinnerTime = bedMinutes - (3 * 60);
    schedule.push({
      time: formatTime(dinnerTime),
      activity: 'Dinner',
      notes: 'Feed puppy dinner. This should be at least 2-3 hours before bedtime to allow for digestion and final potty break.'
    });

    schedule.push({
      time: formatTime(dinnerTime + 30),
      activity: 'Potty Break (Post-Meal)',
      notes: 'Post-dinner potty break. Important to empty bladder before bedtime.'
    });

    // Final potty break before bed
    const finalPottyTime = bedMinutes - 30;
    schedule.push({
      time: formatTime(finalPottyTime),
      activity: 'Final Potty Break Before Bed',
      notes: 'Last potty break of the day. Take puppy outside right before bedtime to minimize overnight accidents.'
    });

    schedule.push({
      time: bedtime,
      activity: 'Bedtime',
      notes: 'Put puppy in crate or designated sleeping area. Puppies can typically hold their bladder for their age in months plus one hour (e.g., 8-week-old puppy = 3 hours).'
    });

    // Overnight potty breaks for young puppies
    if (age < 12) {
      const overnightBreak = wakeMinutes + (4 * 60);
      if (overnightBreak < bedMinutes) {
        schedule.push({
          time: formatTime(overnightBreak),
          activity: 'Overnight Potty Break',
          notes: 'Young puppies may need a middle-of-the-night potty break. Keep it brief and quiet - no play, just potty and back to bed.'
        });
      }
    }

    // Sort schedule by time
    schedule.sort((a, b) => {
      const timeA = parseTime(a.time);
      const timeB = parseTime(b.time);
      return timeA - timeB;
    });

    // Tips
    tips.push(`Puppies can typically hold their bladder for their age in months plus one hour (e.g., ${age}-week-old puppy ≈ ${Math.floor(age/4) + 1} hours)`);
    tips.push('Always take puppy to the same potty spot to establish a routine');
    tips.push('Use a consistent cue word like "go potty" or "do your business"');
    tips.push('Reward immediately with treats and praise when puppy eliminates outside');
    tips.push('Supervise puppy closely when indoors - watch for signs like sniffing, circling, or whining');
    tips.push('If you catch puppy in the act indoors, interrupt with a clap and immediately take outside');
    tips.push('Never punish accidents after they happen - clean with enzyme cleaner and move on');
    tips.push('Use a crate when you cannot supervise - puppies won\'t eliminate where they sleep');
    tips.push('Limit water intake 2-3 hours before bedtime');
    tips.push('Be patient - house training takes time and consistency');

    // Timeline
    timeline.push('Week 1-2: Establish routine, frequent potty breaks, constant supervision');
    timeline.push('Week 3-4: Puppy begins to understand routine, fewer accidents');
    timeline.push('Week 5-8: Puppy can hold bladder longer, accidents become rare');
    timeline.push('Week 9-12: Puppy is mostly house trained, occasional accidents may occur');
    timeline.push('3-6 months: Fully house trained, can hold bladder for longer periods');

    setResult({ schedule, tips, timeline });
  };

  const formatTime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60) % 24;
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
  };

  const parseTime = (time: string): number => {
    const [hours, mins] = time.split(':').map(Number);
    return hours * 60 + mins;
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Puppy Potty Training Schedule Generator', href: '/tools/puppy-potty-training-schedule-generator' }
          ]} />
          
          <div className="text-center mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Puppy Potty Training Schedule Generator
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Create a personalized potty training schedule for your puppy based on age and daily routine
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Puppy Age (weeks)
                </label>
                <input
                  type="number"
                  value={puppyAge}
                  onChange={(e) => setPuppyAge(e.target.value)}
                  min="8"
                  max="24"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Enter puppy's age in weeks (8-24 weeks)</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Wake Time
                </label>
                <input
                  type="time"
                  value={wakeTime}
                  onChange={(e) => setWakeTime(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Bedtime
                </label>
                <input
                  type="time"
                  value={bedtime}
                  onChange={(e) => setBedtime(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <button
                onClick={generateSchedule}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Generate Potty Training Schedule
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 sm:p-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Potty Training Schedule</h2>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <div className="space-y-3">
                  {result.schedule.map((item, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-semibold text-gray-900 dark:text-white">{item.time}</span>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{item.activity}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.notes}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Training Timeline:</h3>
                <ul className="space-y-2">
                  {result.timeline.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-green-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Training Tips:</h3>
                <ul className="space-y-2">
                  {result.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* How Puppy Potty Training Schedule Generator Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Puppy Potty Training Schedule Generator Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our puppy potty training schedule generator creates personalized day-by-day schedules based on your puppy's age and your daily routine (wake time and bedtime). The tool calculates potty break frequency using the rule that puppies can hold their bladder for their age in months plus one hour, then generates a detailed schedule with meal times, potty breaks, and training tips. It provides a complete timeline from establishing routine to full house training.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Potty Training</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Most puppies are fully house trained by 4-6 months of age. Puppies need frequent potty breaks - very young puppies (8-10 weeks) need breaks every 1-2 hours, while older puppies (12-16 weeks) can go 2-3 hours. Always take puppies outside immediately after waking, eating, playing, and before bedtime. Consistency, patience, and positive reinforcement are key to successful potty training. If accidents happen, don't punish - clean thoroughly and focus on prevention.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How often should I take my puppy outside to potty?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Puppies need frequent potty breaks. A general rule is that puppies can hold their bladder for their age in months plus one hour (e.g., an 8-week-old puppy can hold it for about 2-3 hours). Very young puppies (8-10 weeks) need potty breaks every 1-2 hours, while older puppies (12-16 weeks) can go 2-3 hours. Always take puppies outside immediately after waking, eating, playing, and before bedtime.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How long does it take to potty train a puppy?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Most puppies are fully house trained by 4-6 months of age, though some may take longer. The process typically follows this timeline: Week 1-2 (establish routine, frequent breaks), Week 3-4 (puppy begins understanding routine), Week 5-8 (fewer accidents), Week 9-12 (mostly house trained), and 3-6 months (fully house trained). Consistency, patience, and positive reinforcement are key.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What should I do if my puppy has an accident?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  If you catch your puppy in the act, interrupt with a clap or "no" and immediately take them outside. If you find an accident after it happened, do not punish your puppy - they won't understand. Clean the area thoroughly with an enzyme cleaner to remove odors. Focus on prevention by following the schedule and supervising closely. Accidents are normal during training.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/training-progress-tracker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Training Progress Tracker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Track training progress</p>
              </a>
              <a href="/tools/obedience-level-assessment-tool" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Obedience Level Assessment</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Evaluate current training level</p>
              </a>
              <a href="/tools/socialization-readiness-test" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Socialization Readiness Test</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Assess socialization readiness</p>
              </a>
              <a href="/pet-training" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Training Guides</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn effective training techniques</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This schedule is a guideline. Adjust based on your puppy's individual needs. Some puppies may need more frequent potty breaks, while others may be able to hold it longer. Consistency and patience are key to successful potty training.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

