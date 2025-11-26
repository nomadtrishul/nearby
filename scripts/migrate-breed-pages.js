/**
 * Script to migrate breed pages to use seo-utils.ts
 * This script processes all breed pages and migrates their metadata
 */

const fs = require('fs');
const path = require('path');

const breedPages = [
  // Dogs
  'app/pet-breeds/dogs/poodle/page.tsx',
  'app/pet-breeds/dogs/bulldog/page.tsx',
  'app/pet-breeds/dogs/boxer/page.tsx',
  'app/pet-breeds/dogs/cocker-spaniel/page.tsx',
  'app/pet-breeds/dogs/pembroke-welsh-corgi/page.tsx',
  'app/pet-breeds/dogs/shiba-inu/page.tsx',
  'app/pet-breeds/dogs/german-shorthaired-pointer/page.tsx',
  'app/pet-breeds/dogs/great-dane/page.tsx',
  'app/pet-breeds/dogs/cane-corso/page.tsx',
  'app/pet-breeds/dogs/french-bulldog/page.tsx',
  'app/pet-breeds/dogs/siberian-husky/page.tsx',
  'app/pet-breeds/dogs/miniature-schnauzer/page.tsx',
  'app/pet-breeds/dogs/doberman-pinscher/page.tsx',
  'app/pet-breeds/dogs/shih-tzu/page.tsx',
  'app/pet-breeds/dogs/australian-shepherd/page.tsx',
  'app/pet-breeds/dogs/beagle/page.tsx',
  'app/pet-breeds/dogs/chihuahua/page.tsx',
  'app/pet-breeds/dogs/german-shepherd/page.tsx',
  'app/pet-breeds/dogs/cavalier-king-charles-spaniel/page.tsx',
  'app/pet-breeds/dogs/dachshund/page.tsx',
  'app/pet-breeds/dogs/saint-bernard/page.tsx',
  'app/pet-breeds/dogs/pomeranian/page.tsx',
  'app/pet-breeds/dogs/rottweiler/page.tsx',
  'app/pet-breeds/dogs/bernese-mountain-dog/page.tsx',
  'app/pet-breeds/dogs/border-collie/page.tsx',
  // Cats
  'app/pet-breeds/cats/exotic-shorthair/page.tsx',
  'app/pet-breeds/cats/maine-coon/page.tsx',
  'app/pet-breeds/cats/scottish-fold/page.tsx',
  'app/pet-breeds/cats/american-shorthair/page.tsx',
  'app/pet-breeds/cats/bengal/page.tsx',
  'app/pet-breeds/cats/norwegian-forest-cat/page.tsx',
  'app/pet-breeds/cats/oriental-shorthair/page.tsx',
  'app/pet-breeds/cats/abyssinian/page.tsx',
  'app/pet-breeds/cats/ragdoll/page.tsx',
  'app/pet-breeds/cats/russian-blue/page.tsx',
  'app/pet-breeds/cats/manx/page.tsx',
  'app/pet-breeds/cats/british-shorthair/page.tsx',
  'app/pet-breeds/cats/burmese/page.tsx',
  'app/pet-breeds/cats/sphynx/page.tsx',
  'app/pet-breeds/cats/himalayan/page.tsx',
  // Birds
  'app/pet-breeds/birds/canaries/page.tsx',
  'app/pet-breeds/birds/cockatiels/page.tsx',
  'app/pet-breeds/birds/finches/page.tsx',
  // Exotics
  'app/pet-breeds/exotics/leopard-gecko/page.tsx',
  'app/pet-breeds/exotics/corn-snake/page.tsx',
  'app/pet-breeds/exotics/crested-gecko/page.tsx',
  'app/pet-breeds/exotics/red-eared-slider/page.tsx',
  // Small Mammals
  'app/pet-breeds/small-mammals/gerbil/page.tsx',
  'app/pet-breeds/small-mammals/guinea-pig/page.tsx',
  'app/pet-breeds/small-mammals/ferret/page.tsx',
  'app/pet-breeds/small-mammals/hedgehog/page.tsx',
  'app/pet-breeds/small-mammals/mouse/page.tsx',
  'app/pet-breeds/small-mammals/rat/page.tsx',
  'app/pet-breeds/small-mammals/chinchilla/page.tsx',
];

console.log(`Found ${breedPages.length} breed pages to migrate`);

