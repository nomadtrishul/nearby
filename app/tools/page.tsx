import type { Metadata } from 'next';
import ToolsClient from './ToolsClient';
import { generateSEOMetadata, generateBreadcrumbStructuredData, generateCollectionPageStructuredData, generateWebPageStructuredData, jsonLdScriptProps } from '@/lib/seo-utils';
import { getBaseUrl, ensureAbsoluteUrl } from '@/lib/site-config';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Pet Care Tools & Calculators',
  description: 'Free pet care tools and calculators. Calculate weight, feeding portions, find breeds, set vaccine reminders, track age, and estimate costs.',
  keywords: ['pet tools', 'pet calculator', 'weight calculator', 'feeding calculator', 'breed selector', 'vaccine reminder', 'pet age calculator', 'pet exercise calculator', 'pet cost calculator', 'pet health tracker'],
  pathname: '/tools',
  type: 'website',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Pet Care Tools',
      type: 'image/png',
    },
  ],
});

export default function ToolsPage() {
  const baseUrl = getBaseUrl();
  const toolsUrl = ensureAbsoluteUrl('/tools');

  // Breadcrumbs for structured data
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Pet Care Tools', url: '/tools' },
  ];

  // Get tools data for CollectionPage structured data
  const toolsData = [
    { name: 'Pet Weight Calculator', url: '/tools/weight-calculator' },
    { name: 'Feeding Portion Calculator', url: '/tools/feeding-portion-calculator' },
    { name: 'Breed Selector', url: '/tools/breed-selector' },
    { name: 'Vaccine Reminder', url: '/tools/vaccine-reminder' },
    { name: 'Pet Age Calculator', url: '/tools/age-calculator' },
    { name: 'Exercise Calculator', url: '/tools/exercise-calculator' },
    { name: 'Pet Cost Calculator', url: '/tools/cost-calculator' },
    { name: 'Calorie Calculator', url: '/tools/calorie-calculator' },
    { name: 'Dog Food Serving Size Calculator', url: '/tools/dog-food-serving-size-calculator' },
    { name: 'Cat Food Serving Size Calculator', url: '/tools/cat-food-serving-size-calculator' },
    { name: 'Puppy Feeding Schedule Generator', url: '/tools/puppy-feeding-schedule-generator' },
    { name: 'Kitten Feeding Schedule Generator', url: '/tools/kitten-feeding-schedule-generator' },
    { name: 'Wet vs Dry Food Comparison', url: '/tools/wet-vs-dry-food-comparison' },
    { name: 'Pet Treat Calorie Counter', url: '/tools/pet-treat-calorie-counter' },
    { name: 'Toxic Foods Checker', url: '/tools/toxic-foods-checker' },
    { name: 'Safe Human Foods Checker', url: '/tools/safe-human-foods-checker' },
    { name: 'Pet Hydration Calculator', url: '/tools/pet-hydration-calculator' },
    { name: 'Raw Diet Quantity Planner', url: '/tools/raw-diet-quantity-planner' },
    { name: 'Feeding Cost Calculator', url: '/tools/feeding-cost-calculator' },
    { name: 'Multi-Pet Feeding Planner', url: '/tools/multi-pet-feeding-planner' },
    { name: 'Homemade Food Nutrition Analyzer', url: '/tools/homemade-food-nutrition-analyzer' },
    { name: 'Senior Pet Diet Planner', url: '/tools/senior-pet-diet-planner' },
    { name: 'Weight-Based Feeding Chart Maker', url: '/tools/weight-based-feeding-chart-maker' },
    { name: 'Diet Transition Timeline Tool', url: '/tools/diet-transition-timeline-tool' },
    { name: 'Nutrient Deficiency Checker', url: '/tools/nutrient-deficiency-checker' },
    { name: 'Vitamin & Supplement Suggestion Tool', url: '/tools/vitamin-supplement-suggestion-tool' },
    { name: 'Symptom Checker', url: '/tools/symptom-checker' },
    { name: 'Parasite Risk Assessment', url: '/tools/parasite-risk-assessment' },
    { name: 'Vaccination Schedule Generator', url: '/tools/vaccination-schedule-generator' },
    { name: 'Deworming Reminder', url: '/tools/deworming-reminder' },
    { name: 'Flea/Tick Prevention Planner', url: '/tools/flea-tick-prevention-planner' },
    { name: 'Pet BMI / Body Condition Score', url: '/tools/pet-bmi-body-condition-score' },
    { name: 'Ideal Weight Checker', url: '/tools/ideal-weight-checker' },
    { name: 'Pregnancy Due Date Calculator', url: '/tools/pregnancy-due-date-calculator' },
    { name: 'Heat Cycle Tracker', url: '/tools/heat-cycle-tracker' },
    { name: 'Medication Dosage Estimator', url: '/tools/medication-dosage-estimator' },
    { name: 'Skin Allergy Checker', url: '/tools/skin-allergy-checker' },
    { name: 'Dental Health Score Tool', url: '/tools/dental-health-score-tool' },
    { name: 'Rabies Exposure Checker', url: '/tools/rabies-exposure-checker' },
    { name: 'First-Aid Kit Checklist Generator', url: '/tools/first-aid-kit-checklist-generator' },
    { name: 'Chronic Disease Management Planner', url: '/tools/chronic-disease-management-planner' },
    { name: 'Pet Insurance Cost Estimator', url: '/tools/pet-insurance-cost-estimator' },
    { name: 'Emergency Symptoms Checker', url: '/tools/emergency-symptoms-checker' },
    { name: 'Senior Health Checklist Generator', url: '/tools/senior-health-checklist-generator' },
    { name: 'Multivitamin Needs Analyzer', url: '/tools/multivitamin-needs-analyzer' },
    { name: 'Grooming Schedule Generator', url: '/tools/grooming-schedule-generator' },
    { name: 'Coat Type Identification Tool', url: '/tools/coat-type-identification-tool' },
    { name: 'Best Shampoo Selector', url: '/tools/best-shampoo-selector' },
    { name: 'Bath Frequency Calculator', url: '/tools/bath-frequency-calculator' },
    { name: 'Nail Length Checker', url: '/tools/nail-length-checker' },
    { name: 'Fur Shedding Level Checker', url: '/tools/fur-shedding-level-checker' },
    { name: 'Ear-Cleaning Reminder Tool', url: '/tools/ear-cleaning-reminder-tool' },
    { name: 'Grooming Cost Estimator', url: '/tools/grooming-cost-estimator' },
    { name: 'Pet Smell Diagnosis Tool', url: '/tools/pet-smell-diagnosis-tool' },
    { name: 'Grooming Tools Recommender', url: '/tools/grooming-tools-recommender' },
    { name: 'Behavior Problem Diagnosis Tool', url: '/tools/behavior-problem-diagnosis-tool' },
    { name: 'Puppy Potty Training Schedule Generator', url: '/tools/puppy-potty-training-schedule-generator' },
    { name: 'Barking Reason Analyzer', url: '/tools/barking-reason-analyzer' },
    { name: 'Separation Anxiety Risk Checker', url: '/tools/separation-anxiety-risk-checker' },
    { name: 'Activity/Exercise Level Planner', url: '/tools/activity-exercise-level-planner' },
    { name: 'Training Progress Tracker', url: '/tools/training-progress-tracker' },
    { name: 'Obedience Level Assessment Tool', url: '/tools/obedience-level-assessment-tool' },
    { name: 'Aggression Type Checker', url: '/tools/aggression-type-checker' },
    { name: 'Socialization Readiness Test', url: '/tools/socialization-readiness-test' },
    { name: 'Intelligence & Play Style Test', url: '/tools/intelligence-play-style-test' },
  ];

  // Generate structured data
  const collectionPageStructuredData = generateCollectionPageStructuredData({
    name: 'Pet Care Tools & Calculators',
    description: 'Free pet care tools and calculators. Calculate weight, feeding portions, find breeds, set vaccine reminders, track age, and estimate costs.',
    url: '/tools',
    numberOfItems: toolsData.length,
    items: toolsData.map((tool) => ({
      name: tool.name,
      url: tool.url,
    })),
  });

  const webPageStructuredData = generateWebPageStructuredData({
    name: 'Pet Care Tools & Calculators',
    description: 'Free pet care tools and calculators. Calculate weight, feeding portions, find breeds, set vaccine reminders, track age, and estimate costs.',
    url: '/tools',
    breadcrumbs,
  });

  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);

  return (
    <>
      <script {...jsonLdScriptProps(collectionPageStructuredData)} />
      <script {...jsonLdScriptProps(webPageStructuredData)} />
      <script {...jsonLdScriptProps(breadcrumbStructuredData)} />
      <ToolsClient />
    </>
  );
}
