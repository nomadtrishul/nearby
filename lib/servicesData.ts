export interface Service {
  name: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  icon: string;
  services: Service[];
}

export const allServiceCategories: ServiceCategory[] = [
  {
    id: 'health-medical',
    title: 'Pet Health & Medical',
    icon: '🏥',
    services: [
      { name: 'Veterinary care' },
      { name: 'Vaccination' },
      { name: 'Diagnostics & labs' },
      { name: 'Dental care' },
      { name: 'Emergency care' },
      { name: 'Tele-vet / online vet' }
    ]
  },
  {
    id: 'grooming-hygiene',
    title: 'Grooming & Hygiene',
    icon: '✂️',
    services: [
      { name: 'Bathing' },
      { name: 'Haircut / styling' },
      { name: 'Nail trimming' },
      { name: 'Ear/eye cleaning' },
      { name: 'De-shedding' },
      { name: 'Tick/flea treatment' }
    ]
  },
  {
    id: 'boarding-daycare',
    title: 'Boarding & Daycare',
    icon: '🏠',
    services: [
      { name: 'Pet boarding' },
      { name: 'Pet daycare' },
      { name: 'Cage-free boarding' },
      { name: 'Home-boarding (host homes)' }
    ]
  },
  {
    id: 'training-behaviour',
    title: 'Training & Behaviour',
    icon: '🎓',
    services: [
      { name: 'Basic obedience' },
      { name: 'Advanced training' },
      { name: 'Puppy training' },
      { name: 'Behaviour correction' },
      { name: 'Guard/working-dog training' }
    ]
  },
  {
    id: 'walking-outdoor',
    title: 'Walking & Outdoor Activities',
    icon: '🚶',
    services: [
      { name: 'Dog walking' },
      { name: 'Outdoor play sessions' },
      { name: 'Pet exercising' },
      { name: 'Pet adventure/travel services' }
    ]
  },
  {
    id: 'sitting-home-visits',
    title: 'Pet Sitting & Home Visits',
    icon: '🏡',
    services: [
      { name: 'Home pet sitting' },
      { name: 'Feeding visits' },
      { name: 'Medication visits' },
      { name: 'Overnight sitting' }
    ]
  },
  {
    id: 'transportation',
    title: 'Pet Transportation',
    icon: '🚗',
    services: [
      { name: 'Local pet taxi' },
      { name: 'Inter-city transport' },
      { name: 'Air travel assistance' },
      { name: 'Relocation services' }
    ]
  },
  {
    id: 'nutrition',
    title: 'Pet Nutrition',
    icon: '🍽️',
    services: [
      { name: 'Pet food delivery' },
      { name: 'Diet consultation' },
      { name: 'Custom vet diets' },
      { name: 'Supplements' }
    ]
  },
  {
    id: 'products-accessories',
    title: 'Pet Products & Accessories',
    icon: '🛍️',
    services: [
      { name: 'Toys' },
      { name: 'Beds & crates' },
      { name: 'Leashes & collars' },
      { name: 'Clothing' },
      { name: 'Grooming tools' }
    ]
  },
  {
    id: 'adoption-breeding',
    title: 'Adoption & Breeding',
    icon: '❤️',
    services: [
      { name: 'Adoption listings' },
      { name: 'Foster services' },
      { name: 'Ethical breeding' }
    ]
  },
  {
    id: 'insurance-financial',
    title: 'Pet Insurance & Financial Services',
    icon: '💳',
    services: [
      { name: 'Health insurance' },
      { name: 'Accident coverage' },
      { name: 'Wellness plans' }
    ]
  },
  {
    id: 'funeral-memorial',
    title: 'Funeral & Memorial Services',
    icon: '🕊️',
    services: [
      { name: 'Cremation' },
      { name: 'Burial' },
      { name: 'Memorial items' }
    ]
  }
];

