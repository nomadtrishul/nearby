import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import HealthSidebar from '@/components/HealthSidebar';
import { generateSEOMetadata } from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Signs Your Pet Needs a Vet',
  description: 'Learn to recognize signs that indicate your pet needs veterinary attention. Know when symptoms require immediate emergency care or regular appointments.',
  keywords: ['pet emergency signs', 'when to take pet to vet', 'pet illness symptoms', 'pet health warning signs', 'pet emergency', 'signs pet needs vet', 'pet health symptoms'],
  pathname: '/pet-health/signs-your-pet-needs-a-vet',
  type: 'article',
  images: [{
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Signs Your Pet Needs a Vet Guide',
    type: 'image/png',
  }],
});

export default function SignsYourPetNeedsVetPage() {
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbypetcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Pet Health', item: 'https://nearbypetcare.com/pet-health' },
      { '@type': 'ListItem', position: 3, name: 'Signs Your Pet Needs a Vet', item: 'https://nearbypetcare.com/pet-health/signs-your-pet-needs-a-vet' },
    ],
  };

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Signs Your Pet Needs a Vet: When to Seek Veterinary Care',
    description: 'Learn to recognize signs that indicate your pet needs veterinary attention and when to seek emergency care.',
    url: 'https://nearbypetcare.com/pet-health/signs-your-pet-needs-a-vet',
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    author: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nearbypetcare.com/logo.png',
      },
    },
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are the most urgent signs that my pet needs immediate veterinary care?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Seek immediate emergency care for difficulty breathing, collapse or unconsciousness, severe trauma, seizures, severe bleeding, suspected poisoning, inability to urinate (especially in male cats), severe vomiting or diarrhea with blood, or signs of extreme pain. These are life-threatening situations requiring immediate attention.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long should I wait before taking my pet to the vet for symptoms?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For severe symptoms like difficulty breathing, collapse, or severe bleeding, seek immediate care. For milder symptoms like loss of appetite, lethargy, or mild digestive issues, if they persist more than 24-48 hours, schedule a veterinary appointment. When in doubt, it\'s always better to consult with your veterinarian sooner rather than later.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are common signs of illness in pets that require veterinary attention?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Common signs include loss of appetite lasting more than 24 hours, persistent vomiting or diarrhea, lethargy or unusual behavior, difficulty urinating or defecating, excessive drinking or urination, visible pain or discomfort, changes in breathing patterns, coughing or sneezing, changes in weight, and any sudden behavioral changes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I take my pet to the vet for minor symptoms?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Minor symptoms that resolve quickly may not require immediate veterinary care, but if symptoms persist, worsen, or you\'re concerned, it\'s always best to consult with your veterinarian. Some seemingly minor symptoms can indicate underlying serious conditions. Your veterinarian can help determine if treatment is needed.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I do if my pet is showing signs of pain?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If your pet is showing signs of pain, contact your veterinarian. Signs of pain include limping, reluctance to move, vocalizing, changes in behavior, loss of appetite, or guarding a body part. Do not give human pain medications to pets, as many are toxic. Your veterinarian can provide safe and appropriate pain management.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I tell if my pet\'s symptoms are an emergency?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Emergency symptoms include difficulty breathing, collapse, severe bleeding, seizures, inability to urinate, severe trauma, suspected poisoning, or signs of extreme distress. If your pet cannot wait for a regular appointment, it\'s an emergency. When in doubt, contact your veterinarian or emergency clinic for guidance.',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      
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
            { name: 'Signs Your Pet Needs a Vet', href: '/pet-health/signs-your-pet-needs-a-vet' }
          ]} />
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-sm">
              <span className="text-2xl">⚠️</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Critical Emergency Signs</span>
            </div>
            
            {/* Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-pulse">⚠️</div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Signs Your Pet Needs a Vet
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Master the critical warning signs that demand immediate veterinary attention. Early recognition of symptoms and prompt professional intervention can mean the difference between a manageable health condition and irreversible organ damage or death. This expert guide provides the evidence-based knowledge every responsible pet owner needs to protect their companion's life and wellbeing.
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚨</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Life-Threatening Emergencies</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">👀</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Early Detection Matters</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Rapid Professional Care</span>
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
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Identifying when your pet requires veterinary intervention represents one of the most critical responsibilities of pet ownership. The capacity to distinguish between conditions demanding emergency intervention and those suitable for scheduled appointments directly impacts your pet's survival and recovery trajectory. This comprehensive resource provides evidence-based guidance to help you recognize warning signs that necessitate immediate professional attention—potentially preventing irreversible organ damage, permanent disability, or death. Swift recognition combined with rapid veterinary intervention consistently yields the most favorable outcomes across virtually all acute health conditions.
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300 font-bold mb-2">Seek Immediate Emergency Care For:</p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Difficulty breathing, gasping, or respiratory distress of any severity</li>
                <li>Loss of consciousness, collapse, or inability to stand or respond</li>
                <li>Uncontrolled bleeding unresponsive to direct pressure</li>
                <li>Suspected poisoning or confirmed toxic exposure</li>
                <li>Seizures, convulsions, or involuntary muscle activity</li>
                <li>Severe trauma from accidents, falls, or attacks</li>
                <li>Inability to urinate (life-threatening emergency in male cats)</li>
                <li>Bloody vomit or hemoptysis (coughing blood)</li>
                <li>Extreme pain, severe distress, or acute behavioral crisis</li>
                <li>Suspected bloat, gastric torsion, or severe abdominal distension</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Understanding Emergency vs. Non-Emergency Situations</h2>
            <p className="mb-4">
              The fundamental distinction between veterinary emergencies and non-emergencies centers on the risk of irreversible organ damage, permanent loss of function, or death. True emergencies involve pathology where delayed treatment—even by hours—results in catastrophic consequences. Non-emergency conditions, although requiring professional evaluation and treatment, do not carry immediate life-threatening risk and can generally be managed through scheduled appointments.
            </p>
            <p className="mb-4">
              For pet owners, the challenge lies in accurately categorizing symptoms. When diagnostic uncertainty exists, the conservative approach is invariably appropriate. Contact your veterinarian or nearest emergency facility for professional triage assessment. Experienced veterinary professionals can evaluate symptom descriptions via phone and provide authoritative guidance regarding appropriate care levels. Many emergency clinics maintain dedicated triage personnel specifically to assist with these determinations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Life-Threatening Emergency Signs</h2>
            <p className="mb-4">
              The following presentations represent situations where your pet's life is in immediate jeopardy. These conditions require emergency veterinary intervention without delay. Contact your veterinarian or nearest 24-hour emergency veterinary facility immediately—do not delay for regular business hours or morning appointments. In these situations, minutes represent a critical treatment variable directly affecting survival and prognosis.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Difficulty Breathing</h3>
            <p className="mb-3">Respiratory distress represents a true emergency requiring immediate professional evaluation. Observe for these specific indicators of compromised oxygenation and ventilation:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Rapid breathing at rest exceeding 30 breaths per minute, accompanied by visible respiratory effort or strain</li>
              <li>Open-mouth breathing in cats, which is abnormal and never represents thermoregulation in felines</li>
              <li>Pale, gray, or cyanotic (blue) gums or mucous membranes indicating hypoxemia</li>
              <li>Gasping, wheezing, or stridor during respiration</li>
              <li>Inability to achieve normal breathing pattern during rest</li>
              <li>Marked nostril flaring with each respiratory cycle</li>
              <li>Rib retractions or abdominal effort accompanying respiration</li>
            </ul>
            <p className="mb-4">Respiratory compromise originates from serious underlying pathology including congestive heart failure, bacterial or viral pneumonia, pulmonary edema, foreign body airway obstruction, pneumothorax, or pleural effusion. Any evidence of breathing difficulty mandates emergency evaluation. During transport, minimize stress and agitation, as anxiety can worsen respiratory distress. If available, supplemental oxygen administration during transit can improve tissue oxygenation. Handle your pet gently and maintain a calm demeanor during the journey to the emergency facility.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Collapse or Unconsciousness</h3>
            <p className="mb-3">Loss of consciousness or acute collapse invariably indicates serious systemic illness or traumatic injury demanding emergency intervention:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Any period of unconsciousness or unresponsiveness requires emergency assessment</li>
              <li>Collapse may indicate critical cardiac arrhythmias, hypovolemic shock from internal bleeding, severe infection, or acute neurological compromise</li>
              <li>Transport to a veterinary facility must occur immediately without delay for further observation</li>
              <li>Support the head and spine during transport, particularly if trauma is suspected</li>
              <li>Maintain airway patency if possible, but avoid mouth-to-snout contact</li>
              <li>Monitor breathing and heart rate during transport and report findings to the emergency clinic</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Severe Bleeding</h3>
            <p className="mb-3">Uncontrolled hemorrhage mandates immediate intervention to prevent fatal blood volume loss:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Bleeding from wounds that continues despite 10+ minutes of direct pressure application</li>
              <li>Any spontaneous bleeding from nose, mouth, or rectum, indicating serious internal pathology</li>
              <li>Blood in vomit (hematemesis) or stool (hematochezia), suggesting gastrointestinal hemorrhage</li>
              <li>Hematuria (blood in urine) or blood in the urinary system</li>
              <li>Severe wounds, lacerations, or traumatic injuries with active ongoing bleeding</li>
              <li>Puncture wounds from animal bites, which carry high risk of serious internal damage</li>
            </ul>
            <p className="mb-4">Apply firm, continuous direct pressure to bleeding wounds using clean cloth or gauze while transporting immediately to a veterinarian. Never remove impaled objects—stabilize them in place with additional gauze or padding and transport carefully. Bite wounds and puncture injuries warrant professional evaluation even when external bleeding appears minor, as serious internal organ damage may not be immediately apparent. Internal hemorrhage can progress rapidly and prove fatal without intervention. Contact an emergency clinic immediately when you discover any significant bleeding.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Inability to Urinate (Especially Male Cats)</h3>
            <p className="mb-3">Urinary obstruction constitutes one of the highest-severity veterinary emergencies, particularly in male cats:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Straining in the litter box with minimal or absent urine output—this differs fundamentally from simple urinary tract infection</li>
              <li>Repeated unsuccessful attempts to urinate occurring over hours</li>
              <li>Vocalization, pain, or visible distress during urination attempts</li>
              <li>Abdominal pain, distension, or hardness on palpation</li>
              <li>Progression to untreated blockade results in acute kidney failure, hyperkalemia-induced cardiac arrhythmias, and death within 24-48 hours</li>
            </ul>
            <p className="mb-4">Male cats remain uniquely susceptible to urethral obstruction due to anatomical narrowness of the male urethra and predisposition to urinary crystal formation. This condition is invariably life-threatening and requires emergency catheterization and supportive care. Do not assume your cat simply requires additional time in the litter box or dietary modification. Seek emergency veterinary care immediately—delay results in preventable, catastrophic outcomes. Time is absolutely critical with this condition.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Seizures</h3>
            <p className="mb-3">Seizure activity indicates significant underlying neurological pathology requiring urgent professional assessment:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Any seizure lasting longer than 5 minutes mandates emergency assessment</li>
              <li>Multiple seizures in rapid succession (cluster seizures) or continued seizure activity between episodes requires immediate intervention</li>
              <li>Status epilepticus—continuous seizure activity or inability to recover between episodes—represents a neurological emergency causing potential irreversible brain damage</li>
              <li>A first-time seizure in a previously normal pet warrants urgent veterinary evaluation</li>
              <li>Seizures may originate from idiopathic epilepsy, toxin exposure, metabolic derangement, intracranial infection, or structural brain disease</li>
            </ul>
            <p className="mb-4">During a seizure, move your pet away from hazards to prevent injury, maintain airway patency without placing objects in the mouth, and note the seizure's duration. Seek veterinary care immediately, even for single brief seizures, as this often represents a treatable underlying condition. Recurrent seizures typically require chronic maintenance therapy to prevent future episodes. Your veterinarian may recommend diagnostic imaging and bloodwork to identify the underlying etiology.</p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Common Signs Requiring Veterinary Attention</h2>
            <p className="mb-4">
              Although these signs do not necessarily constitute emergencies, they indicate underlying health issues warranting professional veterinary assessment. Prompt evaluation—within 24-48 hours—is important to establish diagnosis and initiate appropriate treatment before conditions progress or worsen.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Loss of Appetite</h3>
            <p className="mb-3">Changes in eating behavior frequently represent early warning indicators of systemic illness requiring investigation:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Complete refusal to eat lasting more than 24 hours in cats or 48 hours in dogs</li>
              <li>Significantly diminished appetite persisting beyond 2-3 days despite behavioral normalcy</li>
              <li>Selective appetite loss (refusing preferred foods) combined with other systemic symptoms</li>
              <li>Acute change in eating patterns or food preferences in a previously normal pet</li>
              <li>Accompanying weight loss despite apparent normal appetite</li>
            </ul>
            <p className="mb-4">Anorexia frequently represents an early manifestation of serious underlying conditions including bacterial or viral infections, gastrointestinal pathology, metabolic disorders, dental disease, or neoplasia. While a single missed meal in an otherwise healthy pet may prove unremarkable, persistent inappetence warrants professional investigation. Cats face particular vulnerability to hepatic lipidosis—a serious and potentially fatal liver condition that develops within 48-72 hours of inadequate food intake—making prompt veterinary assessment critical for feline patients.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Vomiting or Diarrhea</h3>
            <p className="mb-3">Gastrointestinal upset can indicate anything from minor dietary indiscretion to serious systemic illness:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Vomiting or diarrhea persisting longer than 24 hours despite fasting or dietary modification</li>
              <li>Presence of blood in vomit (fresh red hemorrhage or coffee-ground appearance) or fecal material</li>
              <li>Obvious signs of dehydration including dry mucous membranes, sunken eyes, loss of skin turgor, or marked lethargy</li>
              <li>Severe, frequent, or projectile vomiting, or profuse diarrhea occurring multiple times daily</li>
              <li>Vomiting or diarrhea accompanied by fever, abdominal pain, significant lethargy, or loss of appetite</li>
            </ul>
            <p className="mb-4">Acute gastrointestinal upset can result from dietary indiscretion, viral or bacterial infection, parasitism, foreign body ingestion, medication adverse effects, or serious systemic disease. Persistent vomiting or diarrhea rapidly causes dehydration and critical electrolyte imbalances, particularly dangerous in young, geriatric, or small-breed animals. Hemorrhagic gastroenteritis always warrants immediate assessment. Your veterinarian can determine if bloodwork, imaging, or advanced diagnostics are indicated based on clinical presentation.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Lethargy or Unusual Behavior</h3>
            <p className="mb-3">Behavioral changes and reduced activity levels frequently signal systemic illness requiring investigation:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Profound fatigue or unusual lack of energy exceeding normal rest or sleep patterns</li>
              <li>Refusal or significant reluctance to engage in normal activities, exercise, or play behaviors</li>
              <li>Hiding behavior or withdrawal from family interactions representing changes from baseline personality</li>
              <li>Personality changes, uncharacteristic aggression, anxiety, or marked behavioral shifts</li>
              <li>Confusion, disorientation, failure to recognize owners, or inability to respond to commands</li>
            </ul>
            <p className="mb-4">While expected lethargy follows vigorous exercise or occurs in warm weather, persistent lethargy or behavioral changes—especially combined with other symptoms—warrant veterinary evaluation. These changes may indicate pain, infection, metabolic disease, endocrine dysfunction, neurological disorder, or other serious pathology. Subtle behavioral changes often represent the earliest detectable sign of developing illness, making careful observation of your pet's normal behavior and personality essential for early detection of disease.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Difficulty Urinating or Defecating</h3>
            <p className="mb-3">Changes in elimination patterns or difficulty with toileting require prompt professional assessment:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Straining, tension, or visible discomfort during urination or defecation</li>
              <li>Vocalization, crying, or obvious pain during elimination</li>
              <li>Visible blood in urine or stool</li>
              <li>Significant changes in urination or defecation frequency compared to your pet's baseline pattern</li>
              <li>House soiling or inappropriate elimination in a previously housetrained pet</li>
              <li>Ability to produce only minimal amounts of urine or stool despite apparent effort</li>
            </ul>
            <p className="mb-4">Difficulty with elimination can indicate urinary tract infection, bladder or kidney stones, constipation, anal gland impaction, inflammatory bowel disease, or other conditions. Critical reminder: inability to urinate in male cats represents a life-threatening emergency requiring immediate emergency care. For other cases, symptoms persisting beyond 24 hours warrant veterinary evaluation. Your veterinarian can perform urinalysis, bloodwork, and imaging to identify underlying etiology and recommend appropriate treatment.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Excessive Drinking or Urination</h3>
            <p className="mb-3">Increased thirst or urination often represent early manifestations of serious metabolic or systemic disease:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Significant increases in water consumption compared to your pet's baseline drinking behavior</li>
              <li>Markedly increased urination frequency or notably larger urine volumes</li>
              <li>House soiling or accidents in previously housetrained pets or substantial changes in elimination patterns</li>
              <li>These signs commonly indicate diabetes mellitus, diabetes insipidus, chronic kidney disease, or urinary tract infection</li>
              <li>Hyperadrenocorticism (Cushing's disease) frequently presents with polydipsia and polyuria</li>
            </ul>
            <p className="mb-4">While environmental factors such as increased exercise or warmer weather can temporarily increase water intake and urination, persistent changes warrant professional investigation. These signs, particularly in middle-aged and older pets, often indicate manageable chronic conditions that benefit significantly from early diagnosis and treatment initiation. Your veterinarian will likely recommend bloodwork and urinalysis to identify the underlying cause and establish appropriate management.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Visible Pain or Discomfort</h3>
            <p className="mb-3">Pain manifests through diverse behavioral and physical changes that mandate professional assessment and intervention:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Limping, lameness, or obvious favoring of one or more limbs during movement</li>
              <li>Reluctance or inability to jump, climb stairs, or engage in normal movement patterns</li>
              <li>Vocalization including whining, crying, growling, or other unusual sounds</li>
              <li>Postural changes including hunched posture, reluctance to stand, or inability to find comfortable positions</li>
              <li>Guarding behavior—protective reaction or avoidance when specific body areas are touched</li>
              <li>Aggression or defensive behavior when specific anatomical regions are palpated or manipulated</li>
              <li>Gait abnormalities, coordination problems, or unusual postures</li>
            </ul>
            <p className="mb-4">Pain significantly compromises quality of life and can substantially impede recovery from underlying conditions. Never administer human pain medications or over-the-counter analgesics to pets, as many produce serious toxicity in animals. Aspirin, ibuprofen, acetaminophen, and other common human pain relievers cause gastrointestinal hemorrhage, liver damage, or acute kidney injury in pets. Contact your veterinarian for proper pain assessment and appropriate pain management, which may include prescription analgesics, physical therapy, or lifestyle modifications tailored to your pet's specific needs and underlying condition.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Changes in Breathing Patterns</h3>
            <p className="mb-3">Alterations in respiratory characteristics can indicate serious cardiac, pulmonary, or systemic disease requiring assessment:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Rapid or shallow breathing at rest without environmental explanation such as exercise or ambient temperature</li>
              <li>Persistent coughing that does not resolve within several days or progressively worsens</li>
              <li>Wheezing, stridor, or abnormal sounds associated with respiration</li>
              <li>Labored breathing with visible respiratory effort</li>
              <li>Open-mouth breathing in cats (abnormal and never normal thermoregulation in felines)</li>
              <li>Pale or bluish discoloration of gums or mucous membranes indicating compromised oxygenation</li>
            </ul>
            <p className="mb-4">Respiratory changes may originate from infection, inflammation, structural abnormalities, cardiac disease, or metabolic derangement. While occasional coughing can result from minor irritation, progressive or persistent coughing warrants investigation as it frequently represents early manifestation of serious cardiopulmonary disease. This is particularly important in older pets or breeds with genetic predisposition to heart disease. Prompt evaluation can identify treatable conditions before they progress to respiratory crisis or cardiopulmonary failure.</p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Changes in Weight</h3>
            <p className="mb-3">Unexplained weight changes frequently signal underlying systemic disease warranting investigation:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Sudden or rapid weight loss, particularly when appetite and food intake remain normal or increased</li>
              <li>Unintentional weight gain despite normal or reduced food intake</li>
              <li>Visible changes in body condition, musculature definition, or abdominal appearance</li>
              <li>Weight loss exceeding 10 percent of body weight warrants urgent evaluation</li>
            </ul>
            <p className="mb-4">Weight loss accompanied by normal or increased appetite suggests metabolic disease such as hyperthyroidism, diabetes mellitus, or malabsorption disorders. Weight loss with concurrent decreased appetite may indicate systemic illness, neoplasia, or gastrointestinal pathology. Unintended weight gain despite normal intake can indicate hypothyroidism, metabolic syndrome, or cardiac compromise. Your veterinarian can assess body condition score and recommend appropriate diagnostics based on the pattern of weight change and accompanying clinical signs.</p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">When to Schedule a Regular Appointment</h2>
            <p className="mb-4">
              Many health concerns benefit from professional evaluation without requiring emergency care. Schedule a veterinary appointment within several days for these conditions:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Mild digestive upset (single vomiting or diarrhea episodes) resolving within 24-48 hours</li>
              <li>Mild skin irritations, localized hair loss, or dermatological changes without systemic symptoms</li>
              <li>Subtle behavioral changes or mild appetite changes lasting 1-2 days</li>
              <li>Gradual changes in appetite, energy level, or weight developing over weeks or months</li>
              <li>Minor limping or stiffness that does not progress or worsen</li>
              <li>Gradual changes in drinking or urination habits</li>
              <li>Any concerns about your pet's health, behavior, or development—early assessment prevents progression</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Monitoring Your Pet's Health</h2>
            <p className="mb-4">
              Establishing baseline knowledge of what is normal for your individual pet enables prompt recognition of abnormal changes. Close observation and attention to these parameters facilitates early detection of emerging health issues while they remain manageable:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Daily eating and drinking amounts—understand what constitutes normal intake for your specific pet</li>
              <li>Energy levels, activity patterns, and exercise tolerance throughout daily cycles and seasons</li>
              <li>Personality traits, behavioral patterns, and normal responses to routine activities</li>
              <li>Coat quality, skin integrity, eye clarity, and ear health and appearance</li>
              <li>Elimination habits including urination and bowel movement frequency, consistency, and appearance</li>
              <li>Breathing patterns and respiratory rate during rest and activity</li>
              <li>Body weight and body condition score—familiarity with normal body shape aids early weight change detection</li>
            </ul>
            <p className="mb-4">
              Pet owners who understand their individual animal's baseline characteristics represent the first line of defense in detecting emerging health issues. Subtle changes apparent to someone observing a pet daily might be missed during brief veterinary visits. When you notice deviations from your pet's baseline, trust your instincts and contact your veterinarian for guidance. Early intervention frequently prevents minor issues from developing into serious conditions requiring intensive treatment.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-gray-700 dark:text-gray-300"><strong>Important Medical Disclaimer:</strong> This guide provides general medical information regarding when to seek veterinary care. Individual pets present unique variations in health status, breed predispositions, age-related factors, and symptom presentations. Every animal's health situation remains distinct and may warrant individualized assessment beyond this general guidance. When uncertainty exists regarding the need for veterinary care, contact your veterinarian directly for professional evaluation and recommendation. Veterinary professionals possess the expertise to assess your pet's specific situation and recommend appropriate level of care. Early intervention and preventive medicine consistently produce superior health outcomes and frequently reduce overall treatment costs by preventing progression to severe disease or system failure.</p>
            </div>
          </div>

            {/* FAQ Section */}
            <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What are the most urgent signs that my pet needs immediate veterinary care?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Seek immediate emergency care for difficulty breathing, collapse or unconsciousness, severe trauma, seizures, severe bleeding, suspected poisoning, inability to urinate (especially in male cats), severe vomiting or diarrhea with blood, or signs of extreme pain. These are life-threatening situations requiring immediate attention. Do not delay - contact your veterinarian or emergency clinic right away.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How long should I wait before taking my pet to the vet for symptoms?</h3>
                  <p className="text-gray-700 dark:text-gray-300">For severe symptoms like difficulty breathing, collapse, or severe bleeding, seek immediate care - do not wait. For milder symptoms like loss of appetite, lethargy, or mild digestive issues, if they persist more than 24-48 hours, schedule a veterinary appointment. When in doubt, it's always better to consult with your veterinarian sooner rather than later. Early intervention often leads to better outcomes.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What are common signs of illness in pets that require veterinary attention?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Common signs include loss of appetite lasting more than 24 hours, persistent vomiting or diarrhea, lethargy or unusual behavior, difficulty urinating or defecating, excessive drinking or urination, visible pain or discomfort, changes in breathing patterns, coughing or sneezing, changes in weight, and any sudden behavioral changes. If you notice any of these signs, especially if they persist or worsen, consult with your veterinarian.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Should I take my pet to the vet for minor symptoms?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Minor symptoms that resolve quickly may not require immediate veterinary care, but if symptoms persist, worsen, or you're concerned, it's always best to consult with your veterinarian. Some seemingly minor symptoms can indicate underlying serious conditions. Your veterinarian can help determine if treatment is needed. It's better to be cautious and have minor symptoms checked than to miss something serious.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What should I do if my pet is showing signs of pain?</h3>
                  <p className="text-gray-700 dark:text-gray-300">If your pet is showing signs of pain, contact your veterinarian. Signs of pain include limping, reluctance to move, vocalizing, changes in behavior, loss of appetite, or guarding a body part. Do not give human pain medications to pets, as many are toxic and can cause serious harm or death. Your veterinarian can provide safe and appropriate pain management based on your pet's specific needs.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How can I tell if my pet's symptoms are an emergency?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Emergency symptoms include difficulty breathing, collapse, severe bleeding, seizures, inability to urinate, severe trauma, suspected poisoning, or signs of extreme distress. If your pet cannot wait for a regular appointment, it's an emergency. When in doubt, contact your veterinarian or emergency clinic for guidance. They can help you determine whether immediate care is needed or if you can schedule a regular appointment.</p>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Pet Health Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/pet-health/first-aid-for-pets" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">First Aid for Pets</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn essential first aid procedures for handling pet emergencies.</p>
                </Link>
                <Link href="/pet-health/common-diseases" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Common Pet Diseases</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn about common diseases and their symptoms to watch for.</p>
                </Link>
                <Link href="/pet-health/diagnostics-and-tests" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Diagnostics & Tests</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn about diagnostic tests your veterinarian may recommend.</p>
                </Link>
                <Link href="/pet-health" className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">All Pet Health Guides</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Explore all our comprehensive pet health and wellness guides.</p>
                </Link>
          </div>
            </section>

              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <Link href="/pet-health" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                  ← Back to Pet Health Guides
                </Link>
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
