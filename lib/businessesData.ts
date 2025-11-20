import { Business } from '@/components/BusinessCardsModal';

// Sample business data - In production, this would come from a database or API
export const sampleBusinesses: Business[] = [
  {
    id: '1',
    name: 'Paws & Claws Pet Sitting',
    description: 'Professional in-home pet sitting services. We provide personalized care for your pets in the comfort of their own home.',
    rating: 4.8,
    reviewCount: 127,
    phone: '(212) 555-0123',
    email: 'info@pawsandclaws.com',
    website: 'https://pawsandclaws.com',
    address: '123 Main St, New York, NY 10001',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400',
    services: ['In-home pet sitting', 'Drop-in visits', 'Overnight stays'],
    priceRange: '$$',
  },
  {
    id: '2',
    name: 'Happy Tails Pet Hotel',
    description: 'Luxury pet boarding facility with 24/7 care. Spacious suites, play areas, and professional grooming services.',
    rating: 4.9,
    reviewCount: 203,
    phone: '(212) 555-0456',
    email: 'bookings@happytails.com',
    website: 'https://happytails.com',
    address: '456 Park Ave, New York, NY 10022',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400',
    services: ['Pet hotel', 'Dog daycare', 'Cat daycare'],
    priceRange: '$$$',
  },
  {
    id: '3',
    name: 'City Dog Walkers',
    description: 'Experienced dog walking services for busy New Yorkers. Group walks, solo walks, and adventure hikes available.',
    rating: 4.7,
    reviewCount: 89,
    phone: '(212) 555-0789',
    email: 'hello@citydogwalkers.com',
    website: 'https://citydogwalkers.com',
    address: '789 Broadway, New York, NY 10003',
    services: ['Group dog walking', 'Dog running', 'Dog hiking', 'Dog park visits'],
    priceRange: '$$',
  },
  {
    id: '4',
    name: 'Mobile Pet Grooming NYC',
    description: 'Professional mobile grooming service. We come to you! Full-service grooming including bathing, haircuts, and nail trimming.',
    rating: 4.9,
    reviewCount: 156,
    phone: '(212) 555-0321',
    email: 'book@mobilepetgrooming.com',
    website: 'https://mobilepetgrooming.com',
    address: '321 5th Ave, New York, NY 10016',
    services: ['Bathing', 'Haircut / coat trimming', 'Nail trimming', 'Ear cleaning', 'Pet spa'],
    priceRange: '$$$',
  },
  {
    id: '5',
    name: 'Puppy Academy Training',
    description: 'Professional dog training services. From basic obedience to advanced behavior modification. Board-and-train programs available.',
    rating: 4.8,
    reviewCount: 94,
    phone: '(212) 555-0654',
    email: 'train@puppyacademy.com',
    website: 'https://puppyacademy.com',
    address: '654 Lexington Ave, New York, NY 10021',
    services: ['Obedience training', 'Behaviour training', 'Puppy training', 'Board-and-train'],
    priceRange: '$$$',
  },
  {
    id: '6',
    name: 'Central Park Veterinary Clinic',
    description: 'Full-service veterinary care with routine check-ups, vaccinations, and emergency services. Experienced team of veterinarians.',
    rating: 4.9,
    reviewCount: 312,
    phone: '(212) 555-0987',
    email: 'appointments@cpvet.com',
    website: 'https://cpvet.com',
    address: '987 Central Park West, New York, NY 10025',
    services: ['Routine check-ups', 'Vaccination', 'Medication administration', 'Post-surgery care', 'Tele-vet services'],
    priceRange: '$$',
  },
  {
    id: '7',
    name: 'Exotic Pet Care Specialists',
    description: 'Specialized care for birds, reptiles, and small mammals. Experienced veterinarians and care specialists.',
    rating: 4.7,
    reviewCount: 67,
    phone: '(212) 555-0147',
    email: 'care@exoticpets.com',
    website: 'https://exoticpets.com',
    address: '147 Amsterdam Ave, New York, NY 10023',
    services: ['Bird care', 'Reptile care', 'Small-mammal care'],
    priceRange: '$$$',
  },
  {
    id: '8',
    name: 'Clean Paws Waste Removal',
    description: 'Professional pet waste removal service. Regular yard cleaning and litter box maintenance. Serving all of NYC.',
    rating: 4.6,
    reviewCount: 45,
    phone: '(212) 555-0258',
    email: 'service@cleanpaws.com',
    website: 'https://cleanpaws.com',
    address: '258 West End Ave, New York, NY 10023',
    services: ['Pooper-scooper', 'Litter-box cleaning', 'Yard waste cleaning'],
    priceRange: '$',
  },
];

// Map services to businesses
// In production, this would be a more sophisticated matching system
export function getBusinessesByService(serviceName: string, cityName?: string): Business[] {
  // Normalize service name for matching
  const normalizedService = serviceName.toLowerCase().trim();
  
  return sampleBusinesses.filter((business) => {
    if (!business.services) return false;
    
    return business.services.some((service) =>
      service.toLowerCase().includes(normalizedService) ||
      normalizedService.includes(service.toLowerCase())
    );
  });
}

// Get all businesses for a city (for future use)
export function getBusinessesByCity(cityName: string): Business[] {
  // For now, return all businesses
  // In production, filter by actual city
  return sampleBusinesses;
}

