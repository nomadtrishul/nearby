import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import HealthSidebar from '@/components/HealthSidebar';
import { 
  generateSEOMetadata,
  generateBlogPostingStructuredData,
  generateWebPageStructuredData,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps
} from '@/lib/seo-utils';
import { getBaseUrl } from '@/lib/site-config';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Common Pet Diseases: Symptoms, Prevention & Treatment Guide',
  description: 'Comprehensive guide to common pet diseases affecting dogs and cats. Learn about symptoms, prevention methods, and when to seek veterinary care.',
  keywords: ['pet diseases', 'dog diseases', 'cat diseases', 'pet illness symptoms', 'pet disease prevention', 'parvovirus', 'distemper', 'kennel cough', 'heartworm disease', 'feline leukemia', 'pet health conditions', 'common pet illnesses'],
  pathname: '/pet-health/common-diseases',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Common Pet Diseases Guide',
    type: 'image/png',
  }],
});

export default function CommonDiseasesPage() {
  const baseUrl = getBaseUrl();
  const currentDate = new Date().toISOString();
  
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Pet Health', url: '/pet-health' },
    { name: 'Common Diseases', url: '/pet-health/common-diseases' },
  ];

  // Generate structured data using centralized utilities
  const blogPostingStructuredData = generateBlogPostingStructuredData({
    headline: 'Common Pet Diseases: Symptoms, Prevention & Treatment Guide',
    description: 'Comprehensive guide to common pet diseases affecting dogs and cats, including symptoms, prevention, and treatment information.',
    url: '/pet-health/common-diseases',
    datePublished: '2024-01-01T00:00:00+00:00',
    dateModified: currentDate,
    author: 'Veterinary Content Team',
    tags: ['pet diseases', 'dog diseases', 'cat diseases', 'pet illness symptoms', 'pet disease prevention'],
  });

  const webPageStructuredData = generateWebPageStructuredData({
    name: 'Common Pet Diseases: Symptoms, Prevention & Treatment Guide',
    description: 'Comprehensive guide to common pet diseases affecting dogs and cats, including symptoms, prevention, and treatment information.',
    url: '/pet-health/common-diseases',
    breadcrumbs,
  });

  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);

  const faqStructuredData = generateFAQStructuredData([
    {
      question: 'What are the most common diseases in dogs?',
      answer: 'The most common diseases in dogs include parvovirus, distemper, kennel cough, heartworm disease, and Lyme disease. These can be prevented through proper vaccination, parasite control, and regular veterinary care.',
    },
    {
      question: 'What are the most common diseases in cats?',
      answer: 'Common feline diseases include feline leukemia virus (FeLV), feline immunodeficiency virus (FIV), upper respiratory infections, feline lower urinary tract disease (FLUTD), and kidney disease. Regular veterinary check-ups and vaccinations can help prevent many of these conditions.',
    },
    {
      question: 'How can I prevent my pet from getting diseases?',
      answer: 'Prevention includes keeping vaccinations up to date, using parasite preventives, maintaining good hygiene, providing proper nutrition, ensuring regular exercise, and scheduling annual veterinary check-ups. Early detection through regular monitoring is also crucial.',
    },
    {
      question: 'What are the early signs of illness in pets?',
      answer: 'Early signs include loss of appetite, lethargy, changes in behavior, vomiting or diarrhea, excessive drinking or urination, coughing or sneezing, changes in breathing, and visible discomfort. If you notice any of these signs, consult your veterinarian promptly.',
    },
    {
      question: 'When should I take my pet to the vet for a suspected disease?',
      answer: 'Seek immediate veterinary care if your pet shows severe symptoms like difficulty breathing, collapse, severe vomiting or diarrhea, seizures, or signs of extreme pain. For milder symptoms that persist more than 24-48 hours, schedule a veterinary appointment as soon as possible.',
    },
    {
      question: 'Are pet diseases contagious to humans?',
      answer: 'Some pet diseases can be transmitted to humans (zoonotic diseases), including certain parasites, ringworm, and some bacterial infections. However, most common pet diseases are not contagious to humans. Always practice good hygiene when handling sick pets and consult your veterinarian about any concerns.',
    },
  ]);

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      {/* Structured Data Scripts - Using centralized utilities */}
      <script {...jsonLdScriptProps(blogPostingStructuredData)} />
      <script {...jsonLdScriptProps(webPageStructuredData)} />
      <script {...jsonLdScriptProps(breadcrumbStructuredData)} />
      <script {...jsonLdScriptProps(faqStructuredData)} />
      
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Pet Health', href: '/pet-health' },
            { name: 'Common Diseases', href: '/pet-health/common-diseases' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">🦠</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Disease Prevention</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">🦠</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Common Pet Diseases
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Learn about common diseases affecting pets, their symptoms, prevention methods, and when to seek veterinary care. Early recognition can make a significant difference in your pet's health and recovery.
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🐕</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Dog Diseases</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🐈</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Cat Diseases</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🛡️</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Prevention</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
            {/* Medical Disclaimer - YMYL Compliance */}
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 sm:p-6 my-6 rounded-r-lg" role="alert" aria-label="Medical Disclaimer">
              <p className="text-gray-900 dark:text-white font-semibold mb-2">⚠️ Medical Disclaimer</p>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                <strong>Important:</strong> This content is for educational and informational purposes only and is not intended as veterinary medical advice, diagnosis, or treatment. Always seek the advice of a qualified veterinarian or other qualified health provider with any questions you may have regarding your pet's medical condition. Never disregard professional veterinary advice or delay in seeking it because of something you have read on this website. In case of a medical emergency, contact your veterinarian or an emergency veterinary clinic immediately.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Understanding Pet Disease Prevention</h2>
            <p className="mb-4">
              Prevention is always better than treatment when it comes to pet diseases. The foundation of disease prevention includes regular vaccinations, parasite control, proper nutrition, good hygiene practices, and routine veterinary check-ups. Understanding which diseases are most common in your area and for your pet's species and breed can help you take proactive steps to protect your pet's health.
            </p>
            <p className="mb-4">
              Many serious pet diseases can be prevented through vaccination. Core vaccines protect against diseases that are widespread, highly contagious, or pose serious health risks. Non-core vaccines may be recommended based on your pet's lifestyle, geographic location, and risk factors. Your veterinarian can help you determine the appropriate vaccination schedule for your pet.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Common Canine Diseases</h2>
            <p className="mb-4">
              Dogs are susceptible to various diseases, some of which can be serious or even fatal if not treated promptly. Understanding these conditions helps you recognize early warning signs and take appropriate action.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Parvovirus</h3>
            <p className="mb-3">
              Canine parvovirus is a highly contagious viral disease that primarily affects puppies and unvaccinated dogs. The virus attacks rapidly dividing cells, particularly in the intestinal tract and bone marrow, leading to severe gastrointestinal symptoms and immune system suppression.
            </p>
            <p className="mb-3"><strong>Symptoms:</strong> Severe vomiting, bloody diarrhea, lethargy, loss of appetite, fever, and dehydration. Puppies are particularly vulnerable and can deteriorate rapidly.</p>
            <p className="mb-3"><strong>Prevention:</strong> Vaccination is the most effective prevention method. Puppies should receive a series of vaccinations starting at 6-8 weeks of age, with boosters every 3-4 weeks until 16 weeks old. Adult dogs should receive regular booster vaccinations as recommended by your veterinarian.</p>
            <p className="mb-4"><strong>Treatment:</strong> Requires immediate veterinary care, often including hospitalization, intravenous fluids, antibiotics to prevent secondary infections, and supportive care. Early treatment significantly improves outcomes.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Distemper</h3>
            <p className="mb-3">
              Canine distemper is a serious viral disease that affects multiple body systems, including the respiratory, gastrointestinal, and nervous systems. It is highly contagious and can be fatal, especially in puppies and unvaccinated dogs.
            </p>
            <p className="mb-3"><strong>Symptoms:</strong> Initial symptoms include fever, nasal discharge, coughing, lethargy, and loss of appetite. As the disease progresses, it can cause vomiting, diarrhea, and neurological symptoms such as seizures, muscle twitching, and paralysis.</p>
            <p className="mb-3"><strong>Prevention:</strong> Vaccination is essential and is typically included in the core DHPP (distemper, hepatitis, parainfluenza, parvovirus) vaccine series. Puppies should be vaccinated starting at 6-8 weeks with boosters, and adult dogs should receive regular boosters.</p>
            <p className="mb-4"><strong>Treatment:</strong> There is no specific cure for distemper. Treatment focuses on supportive care, managing symptoms, preventing secondary infections, and addressing neurological complications. Prevention through vaccination is crucial.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Kennel Cough (Bordetella)</h3>
            <p className="mb-3">
              Kennel cough is a highly contagious respiratory disease caused by various bacteria and viruses, most commonly Bordetella bronchiseptica. It spreads easily in places where dogs congregate, such as kennels, dog parks, and grooming facilities.
            </p>
            <p className="mb-3"><strong>Symptoms:</strong> Persistent, forceful cough that often sounds like a honking noise, sneezing, nasal discharge, and sometimes mild fever. Most dogs remain active and maintain their appetite despite the cough.</p>
            <p className="mb-3"><strong>Prevention:</strong> Vaccination is available and may be recommended for dogs that frequently interact with other dogs or visit boarding facilities, dog parks, or grooming salons. The vaccine can be given as an injection, nasal spray, or oral form.</p>
            <p className="mb-4"><strong>Treatment:</strong> Most cases resolve on their own within 1-3 weeks, but veterinary care may include cough suppressants, antibiotics if bacterial infection is present, and rest. Severe cases may require more intensive treatment.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Heartworm Disease</h3>
            <p className="mb-3">
              Heartworm disease is a serious and potentially fatal condition caused by parasitic worms that live in the heart, lungs, and blood vessels of affected pets. It is transmitted through mosquito bites and can affect both dogs and cats.
            </p>
            <p className="mb-3"><strong>Symptoms:</strong> Early stages may show no symptoms. As the disease progresses, symptoms include coughing, fatigue, decreased appetite, weight loss, and difficulty breathing. In severe cases, it can lead to heart failure and death.</p>
            <p className="mb-3"><strong>Prevention:</strong> Monthly preventive medication is essential, especially in areas where mosquitoes are prevalent. Prevention is much safer and more cost-effective than treatment. All dogs should be on heartworm prevention year-round.</p>
            <p className="mb-4"><strong>Treatment:</strong> Treatment is complex, expensive, and can be risky. It involves killing adult worms with medication, which must be done under strict veterinary supervision. Prevention is strongly recommended over treatment.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Lyme Disease</h3>
            <p className="mb-3">
              Lyme disease is a tick-borne bacterial infection that can affect dogs and, less commonly, cats. It is transmitted through the bite of infected black-legged ticks (deer ticks).
            </p>
            <p className="mb-3"><strong>Symptoms:</strong> Many dogs show no symptoms. When symptoms occur, they may include lameness that shifts between legs, joint swelling, fever, lethargy, and loss of appetite. In rare cases, it can affect the kidneys, heart, or nervous system.</p>
            <p className="mb-3"><strong>Prevention:</strong> Use tick preventives year-round, check your pet for ticks after outdoor activities, remove ticks promptly, and consider vaccination in high-risk areas. Keep grass trimmed and avoid tick-infested areas when possible.</p>
            <p className="mb-4"><strong>Treatment:</strong> Antibiotics are typically effective, especially when started early. Treatment duration varies but usually lasts several weeks. Regular monitoring may be recommended.</p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Common Feline Diseases</h2>
            <p className="mb-4">
              Cats face their own set of health challenges. Understanding common feline diseases helps you provide better care and recognize when your cat needs veterinary attention.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Feline Leukemia Virus (FeLV)</h3>
            <p className="mb-3">
              FeLV is a retrovirus that suppresses the immune system and can lead to various health problems, including cancer, blood disorders, and secondary infections. It is spread through close contact, primarily through saliva, nasal secretions, and urine.
            </p>
            <p className="mb-3"><strong>Symptoms:</strong> Symptoms vary widely and may include loss of appetite, weight loss, poor coat condition, persistent fever, pale gums, diarrhea, respiratory problems, and enlarged lymph nodes. Some cats may show no symptoms initially.</p>
            <p className="mb-3"><strong>Prevention:</strong> Vaccination is available and may be recommended for cats at risk of exposure. However, the best prevention is keeping cats indoors and avoiding contact with infected cats. Testing new cats before introducing them to your household is important.</p>
            <p className="mb-4"><strong>Treatment:</strong> There is no cure for FeLV, but supportive care can help manage symptoms and secondary infections. Infected cats should be kept indoors to prevent spreading the virus and to protect them from other diseases.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Feline Immunodeficiency Virus (FIV)</h3>
            <p className="mb-3">
              FIV is similar to HIV in humans and weakens the immune system over time. It is primarily spread through deep bite wounds, so outdoor cats and fighting cats are at higher risk.
            </p>
            <p className="mb-3"><strong>Symptoms:</strong> Early symptoms may be mild or absent. As the disease progresses, cats may experience recurrent infections, weight loss, poor coat condition, fever, and dental problems. The disease progresses slowly over years.</p>
            <p className="mb-3"><strong>Prevention:</strong> Keep cats indoors to prevent fighting and exposure. Vaccination is available but not always recommended due to limitations. Spaying and neutering reduces fighting behavior and risk of transmission.</p>
            <p className="mb-4"><strong>Treatment:</strong> There is no cure, but infected cats can live relatively normal lives with proper care. Treatment focuses on managing symptoms, preventing secondary infections, and providing supportive care. Regular veterinary monitoring is essential.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Upper Respiratory Infections</h3>
            <p className="mb-3">
              Upper respiratory infections are common in cats and are often caused by viruses such as feline herpesvirus and calicivirus, sometimes complicated by bacterial infections. These infections are highly contagious among cats.
            </p>
            <p className="mb-3"><strong>Symptoms:</strong> Sneezing, nasal discharge, eye discharge, coughing, fever, loss of appetite, and lethargy. Symptoms can range from mild to severe, and some cats may develop ulcers in the mouth or eyes.</p>
            <p className="mb-3"><strong>Prevention:</strong> Vaccination is part of the core FVRCP vaccine series. Keep cats indoors, practice good hygiene, and isolate sick cats. Stress reduction and good nutrition support immune function.</p>
            <p className="mb-4"><strong>Treatment:</strong> Most cases resolve with supportive care, including keeping the cat comfortable, ensuring adequate nutrition and hydration, and sometimes antibiotics for secondary bacterial infections. Severe cases may require hospitalization.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Feline Lower Urinary Tract Disease (FLUTD)</h3>
            <p className="mb-3">
              FLUTD encompasses various conditions affecting the bladder and urethra, including urinary tract infections, bladder stones, and feline idiopathic cystitis. It can be painful and potentially life-threatening if the urethra becomes blocked.
            </p>
            <p className="mb-3"><strong>Symptoms:</strong> Straining to urinate, frequent attempts to urinate, blood in urine, urinating outside the litter box, excessive licking of genital area, and signs of pain. A blocked urethra is a medical emergency requiring immediate care.</p>
            <p className="mb-3"><strong>Prevention:</strong> Provide plenty of fresh water, encourage water consumption (consider water fountains), feed appropriate diet, maintain clean litter boxes, reduce stress, and ensure regular exercise. Some cats may benefit from special diets.</p>
            <p className="mb-4"><strong>Treatment:</strong> Treatment depends on the underlying cause and may include pain medication, antibiotics, dietary changes, stress management, and in severe cases, catheterization or surgery. Immediate veterinary care is essential for blocked cats.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Kidney Disease</h3>
            <p className="mb-3">
              Chronic kidney disease is common in older cats and involves gradual loss of kidney function over time. Early detection and management can help slow progression and maintain quality of life.
            </p>
            <p className="mb-3"><strong>Symptoms:</strong> Increased thirst and urination, decreased appetite, weight loss, vomiting, bad breath, lethargy, and poor coat condition. Symptoms may develop gradually and be subtle initially.</p>
            <p className="mb-3"><strong>Prevention:</strong> While not always preventable, providing fresh water, appropriate nutrition, regular veterinary check-ups, and monitoring for early signs can help. Some conditions that contribute to kidney disease can be managed.</p>
            <p className="mb-4"><strong>Treatment:</strong> Treatment focuses on slowing disease progression and managing symptoms. This may include special diets, medications, fluid therapy, and management of complications. Regular monitoring and veterinary care are essential.</p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Recognizing Early Warning Signs</h2>
            <p className="mb-4">
              Early recognition of disease symptoms can significantly improve treatment outcomes. While symptoms vary by disease, there are common warning signs that should prompt a veterinary visit:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Changes in appetite:</strong> Loss of appetite or increased hunger can indicate various health issues</li>
              <li><strong>Lethargy or decreased activity:</strong> Unusual tiredness or lack of interest in normal activities</li>
              <li><strong>Changes in behavior:</strong> Aggression, hiding, or other behavioral changes</li>
              <li><strong>Digestive issues:</strong> Vomiting, diarrhea, or constipation that persists</li>
              <li><strong>Respiratory symptoms:</strong> Coughing, sneezing, difficulty breathing, or nasal discharge</li>
              <li><strong>Changes in urination:</strong> Increased or decreased frequency, difficulty urinating, or blood in urine</li>
              <li><strong>Physical changes:</strong> Weight loss or gain, lumps, skin changes, or discharge</li>
              <li><strong>Pain or discomfort:</strong> Limping, reluctance to move, or signs of pain</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">When to Seek Veterinary Care</h2>
            <p className="mb-4">
              While some symptoms may resolve on their own, others require prompt veterinary attention. Seek immediate emergency care for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Difficulty breathing or severe respiratory distress</li>
              <li>Collapse or unconsciousness</li>
              <li>Severe trauma or injury</li>
              <li>Seizures or convulsions</li>
              <li>Severe vomiting or diarrhea, especially with blood</li>
              <li>Inability to urinate (especially in male cats - this is a life-threatening emergency)</li>
              <li>Signs of extreme pain or distress</li>
              <li>Suspected poisoning</li>
              <li>Severe allergic reactions</li>
            </ul>
            <p className="mb-4">
              For less severe symptoms that persist more than 24-48 hours, schedule a veterinary appointment as soon as possible. When in doubt, it's always better to consult with your veterinarian.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Prevention Strategies</h2>
            <p className="mb-4">
              A comprehensive prevention strategy is the best defense against pet diseases:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Vaccination:</strong> Keep all vaccinations up to date according to your veterinarian's recommendations</li>
              <li><strong>Parasite prevention:</strong> Use year-round preventives for fleas, ticks, and heartworms</li>
              <li><strong>Regular veterinary care:</strong> Schedule annual or semi-annual check-ups and wellness exams</li>
              <li><strong>Good nutrition:</strong> Feed a balanced, high-quality diet appropriate for your pet's age and health status</li>
              <li><strong>Exercise and mental stimulation:</strong> Maintain appropriate activity levels and provide enrichment</li>
              <li><strong>Hygiene:</strong> Practice good hygiene, including regular grooming and dental care</li>
              <li><strong>Stress reduction:</strong> Minimize stress and provide a safe, comfortable environment</li>
              <li><strong>Early detection:</strong> Monitor your pet's health and behavior, and address concerns promptly</li>
            </ul>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300"><strong>Remember:</strong> This guide provides general information about common pet diseases. Individual pets may have unique health needs, and disease presentation can vary. Always consult with your veterinarian for personalized advice, diagnosis, and treatment recommendations for your specific pet.</p>
            </div>

            {/* FAQ Section */}
            <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What are the most common diseases in dogs?</h3>
                  <p className="text-gray-700 dark:text-gray-300">The most common diseases in dogs include parvovirus, distemper, kennel cough, heartworm disease, and Lyme disease. These can be prevented through proper vaccination, parasite control, and regular veterinary care. Vaccination schedules and preventive measures should be discussed with your veterinarian based on your dog's age, lifestyle, and risk factors.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What are the most common diseases in cats?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Common feline diseases include feline leukemia virus (FeLV), feline immunodeficiency virus (FIV), upper respiratory infections, feline lower urinary tract disease (FLUTD), and kidney disease. Regular veterinary check-ups and vaccinations can help prevent many of these conditions. Indoor cats generally have lower risk of certain diseases compared to outdoor cats.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How can I prevent my pet from getting diseases?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Prevention includes keeping vaccinations up to date, using parasite preventives, maintaining good hygiene, providing proper nutrition, ensuring regular exercise, and scheduling annual veterinary check-ups. Early detection through regular monitoring is also crucial. Your veterinarian can help you develop a comprehensive prevention plan tailored to your pet's specific needs.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What are the early signs of illness in pets?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Early signs include loss of appetite, lethargy, changes in behavior, vomiting or diarrhea, excessive drinking or urination, coughing or sneezing, changes in breathing, and visible discomfort. If you notice any of these signs, consult your veterinarian promptly. Early intervention often leads to better outcomes and can prevent conditions from becoming more serious.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">When should I take my pet to the vet for a suspected disease?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Seek immediate veterinary care if your pet shows severe symptoms like difficulty breathing, collapse, severe vomiting or diarrhea, seizures, or signs of extreme pain. For milder symptoms that persist more than 24-48 hours, schedule a veterinary appointment as soon as possible. When in doubt, it's always better to err on the side of caution and consult with your veterinarian.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Are pet diseases contagious to humans?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Some pet diseases can be transmitted to humans (zoonotic diseases), including certain parasites, ringworm, and some bacterial infections. However, most common pet diseases are not contagious to humans. Always practice good hygiene when handling sick pets and consult your veterinarian about any concerns. Your veterinarian can provide specific information about zoonotic risks for particular diseases.</p>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Pet Health Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/pet-health/vaccination-schedules" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Vaccination Schedules</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn about recommended vaccination schedules to protect your pet from preventable diseases.</p>
                </Link>
                <Link href="/pet-health/parasite-control-ticks-fleas-worms" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Parasite Control</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Comprehensive guide to preventing and treating parasites that can cause disease.</p>
                </Link>
                <Link href="/pet-health/signs-your-pet-needs-a-vet" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Signs Your Pet Needs a Vet</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn to recognize when your pet needs immediate veterinary attention.</p>
                </Link>
                <Link href="/pet-health/first-aid-for-pets" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">First Aid for Pets</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Essential first aid information for handling pet emergencies.</p>
                </Link>
              </div>
            </section>

              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <Link href="/pet-health" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                  ← Back to Pet Health Guides
                </Link>
              </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <HealthSidebar />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

