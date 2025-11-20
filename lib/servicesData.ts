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
    id: 'pet-sitting',
    title: 'Pet Sitting',
    icon: '🏡',
    services: [
      { name: 'In-home pet sitting' },
      { name: 'Drop-in visits' },
      { name: 'House sitting' },
      { name: 'Overnight stays' }
    ]
  },
  {
    id: 'pet-boarding',
    title: 'Pet Boarding',
    icon: '🏠',
    services: [
      { name: 'Pet hotel' },
      { name: 'Dog daycare' },
      { name: 'Cat daycare' }
    ]
  },
  {
    id: 'dog-walking',
    title: 'Dog Walking',
    icon: '🚶',
    services: [
      { name: 'Group dog walking' },
      { name: 'Dog running' },
      { name: 'Dog hiking' },
      { name: 'Dog park visits' }
    ]
  },
  {
    id: 'pet-transportation',
    title: 'Pet Transportation',
    icon: '🚗',
    services: [
      { name: 'Pet taxi / transport' }
    ]
  },
  {
    id: 'mobile-grooming',
    title: 'Mobile Pet Grooming',
    icon: '✂️',
    services: [
      { name: 'Bathing' },
      { name: 'Haircut / coat trimming' },
      { name: 'Nail trimming' },
      { name: 'Ear cleaning' },
      { name: 'Anal gland expression' },
      { name: 'Flea/tick treatment' },
      { name: 'Pet spa' },
      { name: 'Pet massage' }
    ]
  },
  {
    id: 'training',
    title: 'Training',
    icon: '🎓',
    services: [
      { name: 'Obedience training' },
      { name: 'Behaviour training' },
      { name: 'Puppy training' },
      { name: 'Board-and-train' }
    ]
  },
  {
    id: 'veterinary-care',
    title: 'Veterinary Care',
    icon: '🏥',
    services: [
      { name: 'Routine check-ups' },
      { name: 'Vaccination' },
      { name: 'Medication administration' },
      { name: 'Post-surgery care' },
      { name: 'Tele-vet services' },
      { name: 'Behaviourist consultation' }
    ]
  },
  {
    id: 'exotic-pet-care',
    title: 'Exotic Pet Care',
    icon: '🦎',
    services: [
      { name: 'Bird care' },
      { name: 'Reptile care' },
      { name: 'Small-mammal care' }
    ]
  },
  {
    id: 'pet-waste-removal',
    title: 'Pet Waste Removal',
    icon: '🧹',
    services: [
      { name: 'Pooper-scooper' },
      { name: 'Litter-box cleaning' },
      { name: 'Yard waste cleaning' }
    ]
  },
  {
    id: 'pet-photography',
    title: 'Pet Photography',
    icon: '📸',
    services: [
      { name: 'Pet photography' }
    ]
  },
  {
    id: 'pet-event-services',
    title: 'Pet Event Services',
    icon: '🎉',
    services: [
      { name: 'Pet birthday planning' },
      { name: 'Pet wedding services' }
    ]
  },
  {
    id: 'pet-relocation',
    title: 'Pet Relocation Services',
    icon: '✈️',
    services: [
      { name: 'Pet relocation services' },
      { name: 'Pet travel assistance' }
    ]
  },
  {
    id: 'pet-supply-delivery',
    title: 'Pet Supply Delivery',
    icon: '📦',
    services: [
      { name: 'Pet supply delivery' },
      { name: 'Pet food delivery' },
      { name: 'Medication pickup/delivery' }
    ]
  },
  {
    id: 'house-tasks',
    title: 'House Tasks During Pet Care',
    icon: '🏠',
    services: [
      { name: 'Plants' },
      { name: 'Mail' }
    ]
  },
  {
    id: 'pet-monitoring',
    title: 'Live Pet Monitoring',
    icon: '📹',
    services: [
      { name: 'Live pet monitoring / camera check' }
    ]
  },
  {
    id: 'senior-pet-care',
    title: 'Senior Pet Care',
    icon: '👴',
    services: [
      { name: 'Senior-pet care' }
    ]
  },
  {
    id: 'special-needs',
    title: 'Special Needs Pet Care',
    icon: '♿',
    services: [
      { name: 'Special-needs pet care' }
    ]
  },
  {
    id: 'end-of-life',
    title: 'End-of-Life Pet Support',
    icon: '🕊️',
    services: [
      { name: 'End-of-life pet support' },
      { name: 'Pet cremation coordination' }
    ]
  },
  {
    id: 'lost-pet-services',
    title: 'Lost Pet Services',
    icon: '🔍',
    services: [
      { name: 'Lost-pet search assistance' },
      { name: 'Pet microchipping assistance' }
    ]
  }
];

