'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import Loader from '@/components/Loader';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Download, X, Facebook, Instagram, MessageCircle, Send, Linkedin, Copy, Check } from 'lucide-react';

interface Breed {
  name: string;
  description: string;
  size: string;
  energy: string;
  grooming: string;
  goodWith: string[];
  idealFor: string[];
}

const dogBreeds: Breed[] = [
  {
    name: 'Golden Retriever',
    description: 'Friendly, intelligent, and devoted. Great family dogs that are patient with children.',
    size: 'Large',
    energy: 'High',
    grooming: 'Moderate',
    goodWith: ['Children', 'Other Dogs', 'Families'],
    idealFor: ['Active Families', 'Outdoor Activities', 'Families with Kids'],
  },
  {
    name: 'Labrador Retriever',
    description: 'Outgoing, even-tempered, and gentle. One of the most popular family dogs.',
    size: 'Large',
    energy: 'High',
    grooming: 'Low',
    goodWith: ['Children', 'Other Dogs', 'Families'],
    idealFor: ['Active Families', 'Outdoor Activities', 'Families with Kids'],
  },
  {
    name: 'French Bulldog',
    description: 'Playful, alert, and adaptable. Perfect for apartment living.',
    size: 'Small',
    energy: 'Low',
    grooming: 'Low',
    goodWith: ['Children', 'Other Dogs', 'Families'],
    idealFor: ['Apartment Living', 'First-time Owners', 'City Dwellers'],
  },
  {
    name: 'German Shepherd',
    description: 'Confident, courageous, and smart. Excellent working dogs and loyal companions.',
    size: 'Large',
    energy: 'High',
    grooming: 'Moderate',
    goodWith: ['Families', 'Active Owners'],
    idealFor: ['Active Owners', 'Working Dogs', 'Protection'],
  },
  {
    name: 'Beagle',
    description: 'Friendly, curious, and merry. Great with children and other pets.',
    size: 'Medium',
    energy: 'Moderate',
    grooming: 'Low',
    goodWith: ['Children', 'Other Dogs', 'Families'],
    idealFor: ['Families', 'Active Owners', 'Hunting'],
  },
  {
    name: 'Poodle',
    description: 'Intelligent, active, and alert. Available in toy, miniature, and standard sizes.',
    size: 'Varies',
    energy: 'Moderate',
    grooming: 'High',
    goodWith: ['Children', 'Other Dogs', 'Families'],
    idealFor: ['Families', 'Allergies', 'Active Owners'],
  },
  {
    name: 'Bulldog',
    description: 'Calm, courageous, and friendly. Low-energy companion perfect for relaxed homes.',
    size: 'Medium',
    energy: 'Low',
    grooming: 'Low',
    goodWith: ['Children', 'Families'],
    idealFor: ['Apartment Living', 'First-time Owners', 'Relaxed Lifestyle'],
  },
  {
    name: 'Yorkshire Terrier',
    description: 'Bold, confident, and clever. Small but with a big personality.',
    size: 'Small',
    energy: 'Moderate',
    grooming: 'High',
    goodWith: ['Families', 'Older Children'],
    idealFor: ['Apartment Living', 'Companionship', 'City Dwellers'],
  },
  {
    name: 'Border Collie',
    description: 'Highly intelligent, energetic, and trainable. Excellent for active owners.',
    size: 'Medium',
    energy: 'High',
    grooming: 'Moderate',
    goodWith: ['Active Owners', 'Families'],
    idealFor: ['Active Owners', 'Working Dogs', 'Agility Training'],
  },
  {
    name: 'Cocker Spaniel',
    description: 'Gentle, smart, and happy. Great family companions with moderate exercise needs.',
    size: 'Medium',
    energy: 'Moderate',
    grooming: 'High',
    goodWith: ['Children', 'Families'],
    idealFor: ['Families', 'Companionship', 'Moderate Activity'],
  },
  {
    name: 'Shih Tzu',
    description: 'Affectionate, outgoing, and alert. Perfect lap dogs for apartment living.',
    size: 'Small',
    energy: 'Low',
    grooming: 'High',
    goodWith: ['Children', 'Families'],
    idealFor: ['Apartment Living', 'Companionship', 'First-time Owners'],
  },
  {
    name: 'Boxer',
    description: 'Playful, energetic, and loyal. Great with families and children.',
    size: 'Large',
    energy: 'High',
    grooming: 'Low',
    goodWith: ['Children', 'Families'],
    idealFor: ['Active Families', 'Families with Kids', 'Protection'],
  },
  {
    name: 'Dachshund',
    description: 'Clever, lively, and courageous. Small dogs with big personalities.',
    size: 'Small',
    energy: 'Moderate',
    grooming: 'Low',
    goodWith: ['Families', 'Older Children'],
    idealFor: ['Apartment Living', 'Companionship', 'Moderate Activity'],
  },
  {
    name: 'Siberian Husky',
    description: 'Outgoing, mischievous, and energetic. Require lots of exercise and mental stimulation.',
    size: 'Large',
    energy: 'High',
    grooming: 'Moderate',
    goodWith: ['Families', 'Active Owners'],
    idealFor: ['Active Owners', 'Cold Climates', 'Outdoor Activities'],
  },
  {
    name: 'Great Dane',
    description: 'Gentle giants, friendly, patient, and dependable. Despite size, they are gentle with families.',
    size: 'Giant',
    energy: 'Moderate',
    grooming: 'Low',
    goodWith: ['Children', 'Families'],
    idealFor: ['Families', 'Large Spaces', 'Gentle Giants'],
  },
];

const catBreeds: Breed[] = [
  {
    name: 'Persian',
    description: 'Gentle, quiet, and sweet. Long-haired beauty that prefers calm environments.',
    size: 'Medium',
    energy: 'Low',
    grooming: 'High',
    goodWith: ['Families', 'Quiet Homes'],
    idealFor: ['Indoor Living', 'Calm Homes', 'Companionship'],
  },
  {
    name: 'Maine Coon',
    description: 'Gentle giant, friendly, and intelligent. One of the largest domestic cat breeds.',
    size: 'Large',
    energy: 'Moderate',
    grooming: 'Moderate',
    goodWith: ['Children', 'Other Pets', 'Families'],
    idealFor: ['Families', 'Active Homes', 'Cold Climates'],
  },
  {
    name: 'Siamese',
    description: 'Vocal, social, and affectionate. Known for their distinctive appearance and personality.',
    size: 'Medium',
    energy: 'High',
    grooming: 'Low',
    goodWith: ['Families', 'Active Owners'],
    idealFor: ['Active Homes', 'Companionship', 'Interactive Play'],
  },
  {
    name: 'British Shorthair',
    description: 'Calm, easygoing, and independent. Perfect for relaxed households.',
    size: 'Medium',
    energy: 'Low',
    grooming: 'Low',
    goodWith: ['Families', 'Other Pets'],
    idealFor: ['Indoor Living', 'First-time Owners', 'Calm Homes'],
  },
  {
    name: 'Ragdoll',
    description: 'Docile, gentle, and affectionate. Known for going limp when picked up.',
    size: 'Large',
    energy: 'Low',
    grooming: 'Moderate',
    goodWith: ['Children', 'Families', 'Other Pets'],
    idealFor: ['Families', 'Indoor Living', 'Companionship'],
  },
  {
    name: 'Bengal',
    description: 'Active, playful, and intelligent. Wild-looking with a domestic temperament.',
    size: 'Medium',
    energy: 'High',
    grooming: 'Low',
    goodWith: ['Active Owners', 'Families'],
    idealFor: ['Active Homes', 'Interactive Play', 'Experienced Owners'],
  },
  {
    name: 'Scottish Fold',
    description: 'Sweet, calm, and adaptable. Known for their unique folded ears.',
    size: 'Medium',
    energy: 'Moderate',
    grooming: 'Low',
    goodWith: ['Families', 'Other Pets'],
    idealFor: ['Indoor Living', 'Families', 'Companionship'],
  },
  {
    name: 'Sphynx',
    description: 'Outgoing, friendly, and energetic. Hairless breed that requires special care.',
    size: 'Medium',
    energy: 'High',
    grooming: 'High',
    goodWith: ['Families', 'Active Owners'],
    idealFor: ['Allergies', 'Active Homes', 'Experienced Owners'],
  },
  {
    name: 'American Shorthair',
    description: 'Easygoing, friendly, and adaptable. Great all-around family cats.',
    size: 'Medium',
    energy: 'Moderate',
    grooming: 'Low',
    goodWith: ['Children', 'Families', 'Other Pets'],
    idealFor: ['Families', 'First-time Owners', 'All-around'],
  },
  {
    name: 'Russian Blue',
    description: 'Gentle, quiet, and reserved. Known for their beautiful blue-gray coat.',
    size: 'Medium',
    energy: 'Moderate',
    grooming: 'Low',
    goodWith: ['Families', 'Quiet Homes'],
    idealFor: ['Indoor Living', 'Calm Homes', 'Companionship'],
  },
  {
    name: 'Abyssinian',
    description: 'Active, curious, and playful. One of the oldest cat breeds with a wild appearance.',
    size: 'Medium',
    energy: 'High',
    grooming: 'Low',
    goodWith: ['Active Owners', 'Families'],
    idealFor: ['Active Homes', 'Interactive Play', 'Experienced Owners'],
  },
  {
    name: 'Norwegian Forest Cat',
    description: 'Gentle, friendly, and independent. Large, sturdy cats with thick coats.',
    size: 'Large',
    energy: 'Moderate',
    grooming: 'Moderate',
    goodWith: ['Children', 'Families', 'Other Pets'],
    idealFor: ['Families', 'Cold Climates', 'Active Homes'],
  },
];

export default function BreedSelectorClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [livingSpace, setLivingSpace] = useState<string>('');
  const [activityLevel, setActivityLevel] = useState<string>('');
  const [groomingPreference, setGroomingPreference] = useState<string>('');
  const [hasChildren, setHasChildren] = useState<boolean>(false);
  const [hasOtherPets, setHasOtherPets] = useState<boolean>(false);
  const [results, setResults] = useState<Breed[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const findBreeds = () => {
    if (!livingSpace || !activityLevel || !groomingPreference) {
      alert('Please answer all questions to get breed recommendations');
      return;
    }

    setIsLoading(true);

    // Simulate AI processing with 3-second delay
    setTimeout(() => {
      const breeds = petType === 'dog' ? dogBreeds : catBreeds;
      const matches: (Breed & { score: number; matchPercentage: number })[] = [];

    breeds.forEach(breed => {
      let score = 0;
      let maxScore = 0;

      // Living space match
      maxScore += 2;
      if (livingSpace === 'apartment') {
        if (breed.size === 'Small' || breed.size === 'Varies') {
          score += 2;
        } else if (breed.size === 'Medium') {
          score += 1;
        }
      } else if (livingSpace === 'house') {
        if (breed.size === 'Large' || breed.size === 'Giant') {
          score += 2;
        } else if (breed.size === 'Medium') {
          score += 1;
        }
      }

      // Activity level match
      maxScore += 2;
      if (activityLevel === 'low' && breed.energy === 'Low') {
        score += 2;
      } else if (activityLevel === 'moderate' && breed.energy === 'Moderate') {
        score += 2;
      } else if (activityLevel === 'high' && breed.energy === 'High') {
        score += 2;
      } else if (activityLevel === 'low' && breed.energy === 'Moderate') {
        score += 1;
      } else if (activityLevel === 'high' && breed.energy === 'Moderate') {
        score += 1;
      }

      // Grooming preference
      maxScore += 1;
      if (groomingPreference === 'low' && breed.grooming === 'Low') {
        score += 1;
      } else if (groomingPreference === 'moderate' && breed.grooming === 'Moderate') {
        score += 1;
      } else if (groomingPreference === 'high' && breed.grooming === 'High') {
        score += 1;
      }

      // Children compatibility
      if (hasChildren) {
        maxScore += 2;
        if (breed.goodWith.includes('Children')) {
          score += 2;
        }
      }

      // Other pets compatibility
      if (hasOtherPets) {
        maxScore += 1;
        if (breed.goodWith.includes('Other Dogs') || breed.goodWith.includes('Other Pets')) {
          score += 1;
        }
      }

      if (score > 0) {
        const matchPercentage = Math.round((score / maxScore) * 100);
        matches.push({ ...breed, score, matchPercentage });
      }
    });

    // Sort by score and return top 8
    const sorted = matches.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return b.matchPercentage - a.matchPercentage;
    }).slice(0, 8);
    setResults(sorted.map(({ score, matchPercentage, ...breed }) => breed));
    setIsLoading(false);
    }, 3000); // 3-second delay
  };

  // Helper functions for enhanced features
  const getBreedData = () => {
    if (!results || results.length === 0) return [];
    
    return results.map((breed, index) => ({
      name: breed.name,
      size: breed.size,
      energy: breed.energy,
      grooming: breed.grooming,
      matchScore: 100 - (index * 10), // Simulated match score
      color: ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#6366F1', '#EC4899', '#14B8A6'][index]
    }));
  };

  const getSizeData = () => {
    if (!results || results.length === 0) return [];
    
    const sizeCount = { Small: 0, Medium: 0, Large: 0, Varies: 0 };
    results.forEach(breed => {
      sizeCount[breed.size as keyof typeof sizeCount]++;
    });
    
    return Object.entries(sizeCount).map(([size, count]) => ({
      name: size,
      value: count,
      color: size === 'Small' ? '#10B981' : size === 'Medium' ? '#3B82F6' : size === 'Large' ? '#8B5CF6' : '#F59E0B'
    }));
  };

  const downloadPDF = () => {
    if (!results || results.length === 0) return;
    
    const content = `
Breed Selection Results - NearbyPetCare.com
==========================================

Your Preferences:
- Pet Type: ${petType.charAt(0).toUpperCase() + petType.slice(1)}
- Living Space: ${livingSpace}
- Activity Level: ${activityLevel}
- Grooming Preference: ${groomingPreference}
- Has Children: ${hasChildren ? 'Yes' : 'No'}
- Has Other Pets: ${hasOtherPets ? 'Yes' : 'No'}

Recommended Breeds:
${results.map((breed, index) => `
${index + 1}. ${breed.name}
   Size: ${breed.size} | Energy: ${breed.energy} | Grooming: ${breed.grooming}
   Description: ${breed.description}
   Good with: ${breed.goodWith.join(', ')}
   Ideal for: ${breed.idealFor.join(', ')}
`).join('\n')}

Generated by NearbyPetCare.com
    `.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'breed-recommendations.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const shareOnSocial = (platform: string) => {
    if (!results || results.length === 0) return;
    
    const url = window.location.href;
    const topBreeds = results.slice(0, 3).map(b => b.name).join(', ');
    const shareText = `🐾 Found my perfect ${petType} breeds!
    
🏆 Top matches: ${topBreeds}
🏠 Living space: ${livingSpace} | Activity: ${activityLevel}
✂️ Grooming: ${groomingPreference}

Find your perfect breed at nearbypetcare.com! 🐕🐈`;
    
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
        alert('Text copied to clipboard! Share it on Instagram with a screenshot of your results.');
        return;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + url)}`;
        break;
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(shareText)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=Breed Selection Results&summary=${encodeURIComponent(shareText)}`;
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
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Breed Selector', href: '/tools/breed-selector' }
          ]} />
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Pet Breed Selector – Dog & Cat Breed Finder & Matching Tool
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Use our free pet breed selector to find the perfect pet breed for your lifestyle. Our dog breed finder and cat breed finder ask questions about your living space, activity level, and preferences to provide personalized breed recommendations that match your needs.
            </p>
          </div>

          {/* Tool Screenshot/Image */}
          <div className="mb-8">
            <Image 
              src="/og-image.png" 
              alt="Pet Breed Selector - Find the perfect dog or cat breed for your lifestyle"
              width={1200}
              height={630}
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
              priority={false}
            />
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6 sm:p-8 mb-8">
            <div className="space-y-6">
              {/* Pet Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Pet Type
                </label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setPetType('dog')}
                    className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                      petType === 'dog'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    🐕 Dog
                  </button>
                  <button
                    type="button"
                    onClick={() => setPetType('cat')}
                    className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                      petType === 'cat'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    🐱 Cat
                  </button>
                </div>
              </div>

              {/* Living Space */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Living Space
                </label>
                <select
                  value={livingSpace}
                  onChange={(e) => setLivingSpace(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select...</option>
                  <option value="apartment">Apartment/Small Space</option>
                  <option value="house">House with Yard</option>
                </select>
              </div>

              {/* Activity Level */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Your Activity Level
                </label>
                <select
                  value={activityLevel}
                  onChange={(e) => setActivityLevel(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select...</option>
                  <option value="low">Low (Relaxed lifestyle)</option>
                  <option value="moderate">Moderate (Regular walks/play)</option>
                  <option value="high">High (Very active)</option>
                </select>
              </div>

              {/* Grooming Preference */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Grooming Preference
                </label>
                <select
                  value={groomingPreference}
                  onChange={(e) => setGroomingPreference(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select...</option>
                  <option value="low">Low maintenance</option>
                  <option value="moderate">Moderate maintenance</option>
                  <option value="high">High maintenance (enjoy grooming)</option>
                </select>
              </div>

              {/* Has Children */}
              <div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasChildren}
                    onChange={(e) => setHasChildren(e.target.checked)}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    Have children or plan to have children
                  </span>
                </label>
              </div>

              {/* Has Other Pets */}
              <div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasOtherPets}
                    onChange={(e) => setHasOtherPets(e.target.checked)}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    Have other pets
                  </span>
                </label>
              </div>

              {/* Find Breeds Button */}
              <button
                onClick={findBreeds}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Find Matching Breeds
              </button>
            </div>
          </div>

          <Loader 
            isLoading={isLoading} 
            message="Our AI Model is Finding Matches"
            petType={petType}
            size="large"
          />

          {/* Results */}
          {results.length > 0 && !isLoading && (
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 sm:p-6 lg:p-8 mb-8">
              {/* Header with Pet Icon and Export Options */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <PetIcon type={petType} size="large" />
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Breed Matches Found</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{results.length} perfect matches for you</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full sm:w-auto">
                  <button
                    onClick={downloadPDF}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Results</span>
                  </button>
                  
                  {/* Social Media Icons */}
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Share your matches</p>
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
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Matches</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{results.length}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">breeds found</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Pet Type</div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{petType}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">selected</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Living Space</div>
                  <div className="text-xl font-bold text-green-600 dark:text-green-400">{livingSpace}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">your home</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Activity Level</div>
                  <div className="text-xl font-bold text-orange-600 dark:text-orange-400">{activityLevel}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">lifestyle</div>
                </div>
              </div>

              {/* Charts Section */}
              <div className="space-y-6 mb-6">
                {/* Breed Matches Chart */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Breed Match Analysis</h3>
                  <div className="h-64 sm:h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%" minWidth={300} minHeight={200}>
                      <BarChart data={getBreedData()} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                        <YAxis tick={{ fontSize: 12 }} />
                        <Tooltip />
                        <Bar dataKey="matchScore" fill="#3B82F6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Size Distribution */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Size Distribution</h3>
                  <div className="h-64 sm:h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%" minWidth={300} minHeight={200}>
                      <PieChart>
                        <Pie
                          data={getSizeData()}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, value }) => `${name}: ${value}`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {getSizeData().map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Breed Details */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <span>🐾</span> Recommended Breeds
                </h3>
                <div className="space-y-4">
                  {results.map((breed, index) => (
                    <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">{breed.name}</h4>
                        <div className="flex gap-2">
                          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">
                            {breed.size}
                          </span>
                          <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs">
                            {breed.energy}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{breed.description}</p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="text-gray-500 dark:text-gray-400">Grooming: {breed.grooming}</span>
                        <span className="text-gray-500 dark:text-gray-400">• Good with: {breed.goodWith.join(', ')}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* How Pet Breed Selector Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Pet Breed Selector Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our pet breed selector analyzes your lifestyle preferences and matches you with the most suitable dog or cat breeds. By considering factors like living space, activity level, grooming preferences, and family composition, we provide personalized breed recommendations that fit your specific needs and ensure a perfect match for both you and your future pet.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Matching Algorithm</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our pet breed selector uses a matching algorithm that considers your lifestyle factors including living space, activity level, grooming preferences, and family situation. The tool compares your answers against breed characteristics to recommend breeds that best fit your needs. Different breeds have different requirements for exercise, grooming, and attention, so matching these to your lifestyle is crucial for a successful pet-owner relationship.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Factors to Consider When Choosing a Breed</h3>
              <p className="text-gray-700 dark:text-gray-300">
                When choosing a pet breed, consider your living space (apartment vs house with yard), activity level (low, moderate, or high), grooming preferences (low maintenance vs high maintenance), whether you have children or other pets, and your lifestyle (active vs sedentary). The breed selector helps match these factors to breed characteristics to find the best fit.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How does the pet breed selector work?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The breed selector asks questions about your living space, activity level, grooming preferences, and whether you have children or other pets. It then matches your answers against breed characteristics to recommend breeds that best fit your lifestyle.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What factors should I consider when choosing a pet breed?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Consider your living space (apartment vs house), activity level, grooming preferences, whether you have children or other pets, and your lifestyle. Different breeds have different needs for exercise, grooming, and attention.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Are breed recommendations accurate?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The tool provides general recommendations based on breed characteristics. However, individual pets within a breed can vary significantly. Always spend time with a pet before adoption and consider adopting from shelters where you can meet the individual animal.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Should I choose a purebred or mixed breed?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Both purebreds and mixed breeds can make wonderful pets. Mixed breeds often have fewer genetic health issues and are available at shelters. Purebreds have predictable characteristics but may have breed-specific health concerns. Consider your needs and visit local shelters to meet available pets.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/age-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Age Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Convert your pet's age to human years</p>
              </a>
              <a href="/tools/cost-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Cost Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Estimate the cost of pet ownership</p>
              </a>
              <a href="/tools/exercise-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Exercise Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate daily exercise needs for your pet</p>
              </a>
              <a href="/pet-care-tips" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Care Tips</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn more about pet care and training</p>
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Disclaimer:</strong> This tool provides general breed recommendations based on your preferences. Individual pets within a breed can vary significantly in personality and behavior. Always spend time with a pet before adoption, research breeds thoroughly, and consider adopting from shelters where you can meet the individual animal. Consult with breeders, veterinarians, or animal behaviorists for more personalized advice.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

