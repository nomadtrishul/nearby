import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nearby Pet Care - Pet Care Guides & Resources',
    short_name: 'Pet Care',
    description: 'Comprehensive pet care guides, tips, and resources for dog and cat owners. Learn about pet health, nutrition, grooming, training, and more.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['education', 'health', 'lifestyle'],
    lang: 'en-US',
    dir: 'ltr',
    scope: '/',
    id: '/',
  };
}

