'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import Loader from '@/components/Loader';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Download, X, Facebook, Instagram, MessageCircle, Send, Linkedin, Copy, Check } from 'lucide-react';

const toxicFoods = {
  dog: [
    { name: 'Chocolate', severity: 'high', symptoms: 'Vomiting, diarrhea, increased heart rate, seizures, death', notes: 'Dark chocolate is most dangerous' },
    { name: 'Grapes & Raisins', severity: 'high', symptoms: 'Kidney failure, vomiting, lethargy', notes: 'Even small amounts can be toxic' },
    { name: 'Onions & Garlic', severity: 'high', symptoms: 'Red blood cell damage, weakness, pale gums', notes: 'All forms are toxic (raw, cooked, powdered)' },
    { name: 'Xylitol', severity: 'extreme', symptoms: 'Rapid insulin release, liver failure, seizures, death', notes: 'Found in sugar-free gum, candy, some peanut butter' },
    { name: 'Alcohol', severity: 'high', symptoms: 'Vomiting, disorientation, difficulty breathing, coma, death', notes: 'Very small amounts can be dangerous' },
    { name: 'Caffeine', severity: 'high', symptoms: 'Restlessness, rapid breathing, heart palpitations, seizures', notes: 'Found in coffee, tea, energy drinks' },
    { name: 'Macadamia Nuts', severity: 'moderate', symptoms: 'Weakness, vomiting, tremors, hyperthermia', notes: 'Toxic to dogs, recovery usually within 48 hours' },
    { name: 'Avocado', severity: 'moderate', symptoms: 'Vomiting, diarrhea, difficulty breathing', notes: 'Contains persin, pit is a choking hazard' },
    { name: 'Cooked Bones', severity: 'high', symptoms: 'Choking, intestinal perforation, dental fractures', notes: 'Can splinter and cause serious injury' },
    { name: 'Raw Yeast Dough', severity: 'moderate', symptoms: 'Bloating, alcohol poisoning from fermentation', notes: 'Dough expands in stomach' },
    { name: 'Moldy Food', severity: 'moderate', symptoms: 'Vomiting, tremors, seizures', notes: 'Contains mycotoxins' },
    { name: 'Salt', severity: 'moderate', symptoms: 'Excessive thirst, vomiting, tremors, seizures', notes: 'High amounts cause sodium ion poisoning' },
    { name: 'Fatty Foods', severity: 'moderate', symptoms: 'Pancreatitis, vomiting, abdominal pain', notes: 'Can trigger life-threatening pancreatitis' },
    { name: 'Persimmons, Peaches, Plums', severity: 'moderate', symptoms: 'Intestinal obstruction', notes: 'Pits and seeds are dangerous' },
    { name: 'Cherries', severity: 'moderate', symptoms: 'Cyanide poisoning', notes: 'Pits contain cyanide' },
    { name: 'Tomatoes (unripe)', severity: 'low', symptoms: 'Gastrointestinal upset', notes: 'Ripe tomatoes are generally safe in small amounts' },
    { name: 'Raw Potatoes', severity: 'low', symptoms: 'Gastrointestinal upset', notes: 'Cooked potatoes are safe in moderation' },
    { name: 'Rhubarb', severity: 'moderate', symptoms: 'Kidney failure, tremors', notes: 'Leaves are most toxic' },
    { name: 'Nutmeg', severity: 'moderate', symptoms: 'Hallucinations, increased heart rate, seizures', notes: 'Large amounts are toxic' },
    { name: 'Hops', severity: 'high', symptoms: 'Malignant hyperthermia, death', notes: 'Used in beer brewing, extremely dangerous' },
  ],
  cat: [
    { name: 'Chocolate', severity: 'high', symptoms: 'Vomiting, diarrhea, increased heart rate, seizures, death', notes: 'Dark chocolate is most dangerous' },
    { name: 'Grapes & Raisins', severity: 'high', symptoms: 'Kidney failure, vomiting, lethargy', notes: 'Even small amounts can be toxic' },
    { name: 'Onions & Garlic', severity: 'high', symptoms: 'Red blood cell damage, weakness, pale gums', notes: 'Cats are more sensitive than dogs' },
    { name: 'Xylitol', severity: 'extreme', symptoms: 'Rapid insulin release, liver failure, seizures, death', notes: 'Found in sugar-free gum, candy' },
    { name: 'Alcohol', severity: 'high', symptoms: 'Vomiting, disorientation, difficulty breathing, coma, death', notes: 'Very small amounts can be dangerous' },
    { name: 'Caffeine', severity: 'high', symptoms: 'Restlessness, rapid breathing, heart palpitations, seizures', notes: 'Found in coffee, tea, energy drinks' },
    { name: 'Raw Fish', severity: 'moderate', symptoms: 'Thiamine deficiency, neurological problems', notes: 'Can cause thiamine deficiency if fed regularly' },
    { name: 'Raw Eggs', severity: 'moderate', symptoms: 'Salmonella, biotin deficiency', notes: 'Raw egg whites can cause biotin deficiency' },
    { name: 'Raw Meat (uncooked)', severity: 'moderate', symptoms: 'Bacterial contamination, parasites', notes: 'Risk of E. coli, Salmonella' },
    { name: 'Bones', severity: 'high', symptoms: 'Choking, intestinal perforation, dental fractures', notes: 'Cooked bones are especially dangerous' },
    { name: 'Milk & Dairy', severity: 'low', symptoms: 'Diarrhea, digestive upset', notes: 'Many cats are lactose intolerant' },
    { name: 'Tuna (excessive)', severity: 'moderate', symptoms: 'Mercury poisoning, thiamine deficiency', notes: 'Should not be a primary food source' },
    { name: 'Dog Food', severity: 'low', symptoms: 'Nutritional deficiencies over time', notes: 'Cats need taurine and other nutrients not in dog food' },
    { name: 'Avocado', severity: 'moderate', symptoms: 'Vomiting, diarrhea, difficulty breathing', notes: 'Contains persin' },
    { name: 'Raw Yeast Dough', severity: 'moderate', symptoms: 'Bloating, alcohol poisoning', notes: 'Dough expands in stomach' },
    { name: 'Moldy Food', severity: 'moderate', symptoms: 'Vomiting, tremors, seizures', notes: 'Contains mycotoxins' },
    { name: 'Salt', severity: 'moderate', symptoms: 'Excessive thirst, vomiting, tremors', notes: 'High amounts cause sodium ion poisoning' },
    { name: 'Fatty Foods', severity: 'moderate', symptoms: 'Pancreatitis, vomiting, abdominal pain', notes: 'Can trigger pancreatitis' },
    { name: 'Persimmons, Peaches, Plums', severity: 'moderate', symptoms: 'Intestinal obstruction', notes: 'Pits are dangerous' },
    { name: 'Cherries', severity: 'moderate', symptoms: 'Cyanide poisoning', notes: 'Pits contain cyanide' },
  ]
};

export default function ToxicFoodsCheckerClient() {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedFood, setSelectedFood] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const foods = toxicFoods[petType];
  const filteredFoods = foods.filter(food => 
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedFoodData = foods.find(f => f.name === selectedFood);

  const checkFood = () => {
    if (!selectedFood) {
      alert('Please select a food to check');
      return;
    }

    setIsLoading(true);

    // Simulate AI processing with 3-second delay
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3-second delay
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'extreme': return 'bg-red-600 text-white';
      case 'high': return 'bg-red-500 text-white';
      case 'moderate': return 'bg-orange-500 text-white';
      case 'low': return 'bg-yellow-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  // Helper functions for enhanced features
  const getSeverityData = () => {
    if (!foods || foods.length === 0) return [];
    
    const severityCount = { extreme: 0, high: 0, moderate: 0, low: 0 };
    foods.forEach(food => {
      severityCount[food.severity as keyof typeof severityCount]++;
    });
    
    return Object.entries(severityCount).map(([severity, count]) => ({
      name: severity.charAt(0).toUpperCase() + severity.slice(1),
      value: count,
      color: severity === 'extreme' ? '#DC2626' : severity === 'high' ? '#EF4444' : severity === 'moderate' ? '#F59E0B' : '#10B981'
    }));
  };

  const downloadPDF = () => {
    if (!selectedFoodData) return;
    
    const content = `
Toxic Food Analysis - NearbyPetCare.com
====================================

Pet Type: ${petType.charAt(0).toUpperCase() + petType.slice(1)}
Food Checked: ${selectedFoodData.name}
Severity: ${selectedFoodData.severity.toUpperCase()}

Analysis Results:
Symptoms: ${selectedFoodData.symptoms}
Important Notes: ${selectedFoodData.notes}

Emergency Actions:
- If your pet has consumed this food, contact your veterinarian immediately
- For severe symptoms, seek emergency veterinary care
- Keep the food packaging if available for reference
- Do not induce vomiting unless instructed by a veterinarian

IMPORTANT: This analysis is for informational purposes only. Always consult with a veterinarian for proper diagnosis and treatment.

Generated by NearbyPetCare.com
    `.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'toxic-food-analysis.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const shareOnSocial = (platform: string) => {
    if (!selectedFoodData) return;
    
    const url = window.location.href;
    const shareText = `🚨 Checked toxic food for my ${petType}!
    
🍎 Food: ${selectedFoodData.name}
⚠️ Severity: ${selectedFoodData.severity.toUpperCase()}

Keep your pets safe! Check toxic foods at nearbypetcare.com 🐕🐈`;
    
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
        alert('Text copied to clipboard! Share it on Instagram to help other pet owners.');
        return;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + url)}`;
        break;
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(shareText)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=Pet Toxic Food Analysis&summary=${encodeURIComponent(shareText)}`;
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
        <div className="container mx-auto max-w-6xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Toxic Foods Checker', href: '/tools/toxic-foods-checker' }
          ]} />
          
          <div className="mb-8 sm:mb-10 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Toxic Foods Checker – Dog & Cat Poisonous Foods Guide
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Use our free toxic foods checker to identify dangerous foods for your dog or cat. Our dog toxic foods checker and cat toxic foods checker help you learn about symptoms, severity, and emergency actions to keep your pet safe from poisonous foods.
              </p>
            </div>

            {/* Tool Screenshot/Image */}
            <div className="mb-8">
              <Image 
                src="/og-image.png" 
                alt="Toxic Foods Checker - Identify dangerous foods for dogs and cats"
                width={1200}
                height={630}
                className="w-full rounded-lg shadow-lg"
                loading="lazy"
                priority={false}
              />
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-800 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <h3 className="font-bold text-red-900 dark:text-red-200 mb-2">Emergency Information</h3>
                <p className="text-sm text-red-800 dark:text-red-300 mb-2">
                  If your pet has ingested a toxic food, <strong>seek immediate veterinary care</strong>. Do not wait for symptoms.
                </p>
                <p className="text-sm text-red-800 dark:text-red-300">
                  <strong>ASPCA Animal Poison Control:</strong> (888) 426-4435
                </p>
              </div>
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
                  onChange={(e) => {
                    setPetType(e.target.value as 'dog' | 'cat');
                    setSelectedFood(null);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Search for a Food
                </label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="e.g., chocolate, grapes, onions..."
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
          </div>

          <Loader 
            isLoading={isLoading} 
            message="Our AI Model is Analyzing Food Safety"
            petType={petType}
            size="large"
          />

          {/* Results */}
          {selectedFoodData && !isLoading && (
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 sm:p-6 lg:p-8 mb-8">
              {/* Header with Pet Icon and Export Options */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <PetIcon type={petType} size="large" />
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{selectedFoodData.name}</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Toxicity analysis for {petType}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full sm:w-auto">
                  <button
                    onClick={downloadPDF}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Analysis</span>
                  </button>
                  
                  {/* Social Media Icons */}
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Share warning</p>
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
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Severity Level</div>
                  <div className="text-2xl font-bold text-red-600 dark:text-red-400">{selectedFoodData.severity.toUpperCase()}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">danger level</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Pet Type</div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{petType}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">affected</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Foods</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{foods.length}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">in database</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Emergency</div>
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                    {selectedFoodData.severity === 'extreme' || selectedFoodData.severity === 'high' ? 'YES' : 'NO'}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">vet needed</div>
                </div>
              </div>

              {/* Charts Section */}
              <div className="space-y-6 mb-6">
                {/* Severity Distribution */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Toxicity Severity Distribution</h3>
                  <div className="h-64 sm:h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%" minWidth={300} minHeight={200}>
                      <PieChart>
                        <Pie
                          data={getSeverityData()}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, value }) => `${name}: ${value}`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {getSeverityData().map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Food Analysis Details */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <span>🚨</span> Toxicity Analysis
                </h3>
                <div className="space-y-4">
                  <div className={`p-4 rounded-lg ${
                    selectedFoodData.severity === 'extreme' ? 'bg-red-50 dark:bg-red-900/20' :
                    selectedFoodData.severity === 'high' ? 'bg-red-50 dark:bg-red-900/20' :
                    selectedFoodData.severity === 'moderate' ? 'bg-orange-50 dark:bg-orange-900/20' :
                    'bg-yellow-50 dark:bg-yellow-900/20'
                  }`}>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">Severity: {selectedFoodData.severity.toUpperCase()}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${getSeverityColor(selectedFoodData.severity)}`}>
                        {selectedFoodData.severity}
                      </span>
                    </div>
                    <div className="mb-3">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Symptoms:</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{selectedFoodData.symptoms}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Important Notes:</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{selectedFoodData.notes}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Actions */}
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mt-6">
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <span>🆘</span> Emergency Actions
                </h3>
                <div className="space-y-2">
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>1.</strong> If your pet has consumed this food, contact your veterinarian immediately
                    </p>
                  </div>
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>2.</strong> For severe symptoms, seek emergency veterinary care
                    </p>
                  </div>
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>3.</strong> Keep the food packaging if available for reference
                    </p>
                  </div>
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>4.</strong> Do not induce vomiting unless instructed by a veterinarian
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Toxic Foods for {petType === 'dog' ? 'Dogs' : 'Cats'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredFoods.map((food, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedFood(food.name)}
                  className="text-center p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-red-400 dark:hover:border-red-600 transition-colors flex flex-col items-center"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{food.name}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-semibold mb-3 ${getSeverityColor(food.severity)}`}>
                    {food.severity}
                  </span>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{food.symptoms}</p>
                </button>
              ))}
            </div>
          </div>

          {/* How Toxic Foods Checker Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Toxic Foods Checker Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our toxic foods checker provides information about foods that are dangerous to dogs and cats. The tool includes severity ratings (high, moderate, low), symptoms to watch for, and emergency actions to take if your pet has ingested a toxic food. This database helps you quickly identify potentially dangerous foods and understand the risks.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Common Toxic Foods</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Common toxic foods for dogs include chocolate, grapes, raisins, onions, garlic, xylitol, alcohol, and caffeine. For cats, toxic foods include chocolate, grapes, raisins, onions, garlic, raw fish, and excessive tuna. Even small amounts of some foods can be dangerous, so it's important to be aware of what foods are safe for your pet.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What foods are toxic to dogs?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Common toxic foods for dogs include chocolate, grapes and raisins, onions and garlic, xylitol (found in sugar-free products), alcohol, caffeine, macadamia nuts, cooked bones, and many others. Even small amounts of some foods can be dangerous. When in doubt, consult your veterinarian before feeding any human food to your dog.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What foods are toxic to cats?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Toxic foods for cats include chocolate, grapes and raisins, onions and garlic, xylitol, alcohol, caffeine, raw fish (can cause thiamine deficiency), raw eggs, bones, and excessive tuna. Cats are also more sensitive to certain toxins than dogs. Always consult your veterinarian before feeding human food to your cat.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What should I do if my pet ate something toxic?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  If your pet has ingested a toxic food, seek immediate veterinary care. Do not wait for symptoms to appear. Contact your veterinarian or animal poison control center (ASPCA Animal Poison Control: 888-426-4435) immediately. Do not induce vomiting unless specifically instructed by a veterinarian, as this can sometimes make the situation worse.
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
                <p className="text-sm text-gray-600 dark:text-gray-400">Identify potential health issues in your pet</p>
              </a>
              <a href="/tools/safe-human-foods-checker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Safe Human Foods Checker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Check which human foods are safe for pets</p>
              </a>
              <a href="/tools/emergency-symptoms-checker" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Emergency Symptoms Checker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Identify emergency symptoms in pets</p>
              </a>
              <a href="/pet-health" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Health Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn more about pet health and wellness</p>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This list is not exhaustive. When in doubt, consult your veterinarian before feeding any human food to your pet. Keep emergency contact numbers easily accessible.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

