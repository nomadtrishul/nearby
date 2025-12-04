'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import Loader from '@/components/Loader';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Download, X, Facebook, Instagram, MessageCircle, Send, Linkedin, Copy, Check } from 'lucide-react';

export default function VaccinationScheduleGeneratorClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [birthDate, setBirthDate] = useState<string>('');
  const [lifestyle, setLifestyle] = useState<string>('indoor');
  const [result, setResult] = useState<{
    schedule: Array<{ age: string; vaccines: string[]; notes: string }>;
    recommendations: string[];
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const generateSchedule = () => {
    if (!birthDate) {
      alert('Please enter birth date');
      return;
    }

    setIsLoading(true);

    // Simulate AI processing with 3-second delay
    setTimeout(() => {
      const birth = new Date(birthDate);
      const schedule: Array<{ age: string; vaccines: string[]; notes: string }> = [];

    if (petType === 'dog') {
      schedule.push({
        age: '6-8 weeks',
        vaccines: ['DHPP (Distemper, Hepatitis, Parvovirus, Parainfluenza)'],
        notes: 'First puppy vaccination. Start socialization after this vaccine.'
      });
      schedule.push({
        age: '10-12 weeks',
        vaccines: ['DHPP', 'Bordetella (Kennel Cough)'],
        notes: 'Second round of core vaccines.'
      });
      schedule.push({
        age: '14-16 weeks',
        vaccines: ['DHPP', 'Rabies'],
        notes: 'Final puppy vaccination. Rabies required by law in most areas.'
      });
      schedule.push({
        age: '12-16 months',
        vaccines: ['DHPP', 'Rabies'],
        notes: 'First adult booster. Follow your veterinarian\'s recommendations for 1-year vs 3-year rabies.'
      });
      schedule.push({
        age: 'Annually',
        vaccines: ['DHPP', 'Bordetella'],
        notes: 'Annual boosters. Some vaccines may be given every 3 years based on local regulations and vet recommendations.'
      });
      schedule.push({
        age: 'Every 1-3 years',
        vaccines: ['Rabies'],
        notes: 'Rabies booster frequency depends on local laws and vaccine type (1-year vs 3-year).'
      });

      if (lifestyle === 'outdoor' || lifestyle === 'mixed') {
        schedule.push({
          age: '12-16 weeks (if in high-risk area)',
          vaccines: ['Lyme Disease'],
          notes: 'Recommended for dogs in tick-endemic areas or with outdoor exposure.'
        });
        schedule.push({
          age: 'Annually (if in high-risk area)',
          vaccines: ['Lyme Disease'],
          notes: 'Annual booster if in tick-endemic area.'
        });
      }
    } else {
      // Cat schedule
      schedule.push({
        age: '6-8 weeks',
        vaccines: ['FVRCP (Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia)'],
        notes: 'First kitten vaccination.'
      });
      schedule.push({
        age: '10-12 weeks',
        vaccines: ['FVRCP'],
        notes: 'Second round of core vaccines.'
      });
      schedule.push({
        age: '14-16 weeks',
        vaccines: ['FVRCP', 'Rabies'],
        notes: 'Final kitten vaccination. Rabies required by law in most areas.'
      });
      schedule.push({
        age: '12-16 weeks (if at risk)',
        vaccines: ['FeLV (Feline Leukemia)'],
        notes: 'Recommended for outdoor cats, multi-cat households, or cats with unknown FeLV status.'
      });
      schedule.push({
        age: '12-16 months',
        vaccines: ['FVRCP', 'Rabies', 'FeLV (if at risk)'],
        notes: 'First adult booster.'
      });
      schedule.push({
        age: 'Annually',
        vaccines: ['FVRCP'],
        notes: 'Annual booster. Some vaccines may be given every 3 years based on vet recommendations.'
      });
      schedule.push({
        age: 'Every 1-3 years',
        vaccines: ['Rabies'],
        notes: 'Rabies booster frequency depends on local laws and vaccine type.'
      });
      schedule.push({
        age: 'Annually (if at risk)',
        vaccines: ['FeLV'],
        notes: 'Annual booster for cats at risk of exposure.'
      });
    }

    const recommendations: string[] = [];
    recommendations.push('This is a general schedule. Always follow your veterinarian\'s specific recommendations.');
    recommendations.push('Vaccination schedules may vary based on your pet\'s health, local regulations, and risk factors.');
    recommendations.push('Keep a record of all vaccinations in your pet\'s health file.');
    recommendations.push('Some vaccines may be combined into a single injection.');
    recommendations.push('Discuss any concerns about vaccinations with your veterinarian.');

    setResult({ schedule, recommendations });
    setIsLoading(false);
    }, 3000); // 3-second delay
  };

  // Helper functions for enhanced features
  const getScheduleData = () => {
    if (!result || !result.schedule) return [];
    
    return result.schedule.map((item, index) => ({
      age: item.age,
      vaccineCount: item.vaccines.length,
      vaccines: item.vaccines.join(', '),
      color: ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#6366F1', '#EC4899', '#14B8A6'][index]
    }));
  };

  const getVaccineTypeData = () => {
    if (!result || !result.schedule) return [];
    
    const vaccineTypes: { [key: string]: number } = {};
    result.schedule.forEach(item => {
      item.vaccines.forEach(vaccine => {
        const type = vaccine.split('(')[0].trim();
        vaccineTypes[type] = (vaccineTypes[type] || 0) + 1;
      });
    });
    
    return Object.entries(vaccineTypes).slice(0, 6).map(([name, value], index) => ({
      name,
      value,
      color: ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#6366F1'][index]
    }));
  };

  const downloadPDF = () => {
    if (!result || !result.schedule) return;
    
    const content = `
Vaccination Schedule - NearbyPetCare.com
=====================================

Pet Type: ${petType.charAt(0).toUpperCase() + petType.slice(1)}
Birth Date: ${birthDate}
Lifestyle: ${lifestyle}

Vaccination Schedule:
${result.schedule.map((item, index) => `
${index + 1}. Age: ${item.age}
   Vaccines: ${item.vaccines.join(', ')}
   Notes: ${item.notes}
`).join('\n')}

Recommendations:
${result.recommendations.map((rec, index) => `${index + 1}. ${rec}`).join('\n')}

IMPORTANT: This is a general schedule. Always follow your veterinarian's specific recommendations.

Generated by NearbyPetCare.com
    `.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'vaccination-schedule.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const shareOnSocial = (platform: string) => {
    if (!result || !result.schedule) return;
    
    const url = window.location.href;
    const totalVaccines = result.schedule.reduce((sum, item) => sum + item.vaccines.length, 0);
    const shareText = `🐾 Generated vaccination schedule for my ${petType}!
    
📅 ${result.schedule.length} vaccination milestones
💉 ${totalVaccines} total vaccines
🏠 Lifestyle: ${lifestyle}

Create your pet's vaccination schedule at nearbypetcare.com! 🐕🐈`;
    
    let shareUrl = '';
    switch(platform) {
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
        alert('Text copied to clipboard! Share it on Instagram with a screenshot of your vaccination schedule.');
        return;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + url)}`;
        break;
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(shareText)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=Pet Vaccination Schedule&summary=${encodeURIComponent(shareText)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(shareText + ' ' + url);
        setCopiedToClipboard(true);
        setTimeout(() => setCopiedToClipboard(false), 3000);
        return;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const PetIcon = ({ type, size = 'medium' }: { type: 'dog' | 'cat', size?: 'small' | 'medium' | 'large' }) => {
    const sizeClass = size === 'small' ? 'w-8 h-8' : size === 'large' ? 'w-16 h-16' : 'w-12 h-12';
    return (
      <div className={`${sizeClass} flex items-center justify-center`}>
        {type === 'dog' ? (
          <span className="text-4xl">🐕</span>
        ) : (
          <span className="text-4xl">🐈</span>
        )}
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Vaccination Schedule Generator', href: '/tools/vaccination-schedule-generator' }
          ]} />
          
          <div className="mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Vaccination Schedule Generator
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Generate a complete vaccination schedule for your pet from birth to adulthood
              </p>
            </div>

            {/* Tool Screenshot/Image */}
            <div className="mb-8">
              <Image 
                src="/og-image.png" 
                alt="Vaccination Schedule Generator - Generate a complete vaccination schedule"
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
                  Birth Date
                </label>
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
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
                Generate Vaccination Schedule
              </button>
            </div>
          </div>

          <Loader 
            isLoading={isLoading} 
            message="Our AI Model is Creating Vaccination Schedule"
            petType={petType}
            size="large"
          />

          {/* Results */}
          {result && !isLoading && (
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 sm:p-6 lg:p-8 mb-8">
              {/* Header with Pet Icon and Export Options */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <PetIcon type={petType} size="large" />
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Vaccination Schedule</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{result.schedule.length} vaccination milestones</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full sm:w-auto">
                  <button
                    onClick={downloadPDF}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Schedule</span>
                  </button>
                  
                  {/* Social Media Icons */}
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Share schedule</p>
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

              {/* Main Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Milestones</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{result.schedule.length}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">vaccination points</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Vaccines</div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{result.schedule.reduce((sum, item) => sum + item.vaccines.length, 0)}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">total shots</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Pet Type</div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">{petType}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">selected</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Lifestyle</div>
                  <div className="text-xl font-bold text-orange-600 dark:text-orange-400">{lifestyle}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">environment</div>
                </div>
              </div>

              {/* Charts Section */}
              <div className="space-y-6 mb-6">
                {/* Vaccine Timeline */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Vaccination Timeline</h3>
                  <div className="h-64 sm:h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%" minWidth={300} minHeight={200}>
                      <BarChart data={getScheduleData()} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="age" tick={{ fontSize: 12 }} />
                        <YAxis tick={{ fontSize: 12 }} />
                        <Tooltip />
                        <Bar dataKey="vaccineCount" fill="#3B82F6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Vaccine Types Distribution */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Vaccine Types Distribution</h3>
                  <div className="h-64 sm:h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%" minWidth={300} minHeight={200}>
                      <PieChart>
                        <Pie
                          data={getVaccineTypeData()}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, value }) => `${name}: ${value}`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {getVaccineTypeData().map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Vaccination Schedule Details */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <span>💉</span> Detailed Schedule
                </h3>
                <div className="space-y-4">
                  {result.schedule.map((item, index) => (
                    <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">{item.age}</h4>
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">
                          {item.vaccines.length} vaccines
                        </span>
                      </div>
                      <div className="mb-2">
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Vaccines:</p>
                        <ul className="list-disc list-inside space-y-1">
                          {item.vaccines.map((vaccine, idx) => (
                            <li key={idx} className="text-sm text-gray-600 dark:text-gray-400">{vaccine}</li>
                          ))}
                        </ul>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <strong>Notes:</strong> {item.notes}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendations */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mt-6">
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <span>📋</span> Recommendations
                </h3>
                <div className="space-y-2">
                  {result.recommendations.map((rec, index) => (
                    <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <p className="text-sm text-gray-700 dark:text-gray-300">{rec}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* How Vaccination Schedule Generator Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Vaccination Schedule Generator Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our vaccination schedule generator creates a complete vaccination timeline for your pet from birth to adulthood. The tool considers your pet's age, type (dog or cat), and lifestyle to recommend appropriate vaccines. It includes core vaccines (essential for all pets) and non-core vaccines (based on lifestyle and risk factors). The schedule shows when each vaccine should be given and provides information about vaccine types and purposes.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Pet Vaccinations</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Puppies and kittens typically receive their first vaccines at 6-8 weeks of age, with booster shots at 10-12 weeks and 14-16 weeks to build full immunity. Core vaccines (like DHPP for dogs and FVRCP for cats) are essential for all pets. Non-core vaccines depend on lifestyle, location, and risk factors. Adult pets need annual boosters for most core vaccines, though some may be given every 1-3 years depending on local regulations and vaccine type.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">When should my puppy or kitten get their first vaccines?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Puppies and kittens typically receive their first vaccines at 6-8 weeks of age. This includes core vaccines like DHPP for dogs and FVRCP for cats. They'll need booster shots at 10-12 weeks and 14-16 weeks to build full immunity. Rabies vaccines are usually given at 14-16 weeks.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How often do adult pets need vaccines?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Adult pets need annual boosters for most core vaccines, though some vaccines (like rabies) may be given every 1-3 years depending on local regulations and vaccine type. Your veterinarian will create a personalized schedule based on your pet's health, lifestyle, and local requirements.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Are all vaccines necessary for my pet?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Core vaccines (like DHPP for dogs and FVRCP for cats) are essential for all pets. Non-core vaccines (like Lyme disease or FeLV) depend on your pet's lifestyle, location, and risk factors. Your veterinarian can help determine which vaccines are necessary based on your pet's specific situation.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/vaccine-reminder" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Vaccine Reminder</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Track vaccination schedules</p>
              </a>
              <a href="/tools/heat-cycle-tracker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Heat Cycle Tracker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Track reproductive cycles</p>
              </a>
              <a href="/tools/pregnancy-due-date-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pregnancy Due Date Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate pregnancy due dates</p>
              </a>
              <a href="/pet-health" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Health Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn about pet health and wellness</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This schedule is a general guideline. Always consult with your veterinarian for a personalized vaccination schedule based on your pet's specific needs, health status, local regulations, and risk factors.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

