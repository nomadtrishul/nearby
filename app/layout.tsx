import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsentBanner from "@/components/ConsentBanner";
import AnalyticsLoader from "@/components/AnalyticsLoader";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://nearbypetcare.com'),
  title: {
    default: "Nearby Pet Care - Professional Pet Care Services Near You",
    template: "%s | Nearby Pet Care"
  },
  description: "Find trusted pet care services near you. Professional grooming, boarding, daycare, and training services. Connect with experienced pet care professionals who treat your pets like family.",
  keywords: ['pet care services', 'dog grooming', 'pet boarding', 'pet daycare', 'pet training', 'pet care near me', 'professional pet care', 'mobile pet care', 'pet grooming services', 'dog boarding', 'cat boarding'],
  authors: [{ name: 'Nearby Pet Care Team' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nearbypetcare.com',
    siteName: 'Nearby Pet Care',
    title: 'Nearby Pet Care - Professional Pet Care Services Near You',
    description: 'Find trusted pet care services near you. Professional grooming, boarding, daycare, and training services.',
    images: [
      {
        url: 'https://nearbypetcare.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nearby Pet Care - Professional Pet Care Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nearby Pet Care - Professional Pet Care Services Near You',
    description: 'Find trusted pet care services near you. Professional grooming, boarding, daycare, and training services.',
    images: ['https://nearbypetcare.com/og-image.png'],
    creator: '@nearbypetcare',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || '',
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION || '',
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION || '',
    },
  },
  alternates: {
    canonical: 'https://nearbypetcare.com',
  },
  icons: {
    icon: [
      { url: '/logo-2.png', sizes: 'any' },
      { url: '/logo-2.png', type: 'image/png' },
    ],
    apple: [
      { url: '/logo-2.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/logo-2.png',
  },
  other: {
    'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION || '',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/logo-2.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo-2.png" />
        {/* Initialize Google Consent Mode v2 - Must be loaded before any analytics scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              
              // Initialize consent mode with default 'denied' state
              // This ensures compliance before user consent is obtained
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'functionality_storage': 'denied',
                'personalization_storage': 'denied',
                'security_storage': 'granted',
                'wait_for_update': 500,
              });
              
              // Check for existing consent and update if available
              (function() {
                try {
                  const consent = localStorage.getItem('cookie-consent');
                  if (consent) {
                    const preferences = JSON.parse(consent);
                    gtag('consent', 'update', {
                      'analytics_storage': preferences.analytics ? 'granted' : 'denied',
                      'ad_storage': preferences.marketing ? 'granted' : 'denied',
                      'ad_user_data': preferences.marketing ? 'granted' : 'denied',
                      'ad_personalization': preferences.marketing ? 'granted' : 'denied',
                      'functionality_storage': preferences.functional ? 'granted' : 'denied',
                      'personalization_storage': preferences.functional ? 'granted' : 'denied',
                      'security_storage': 'granted',
                    });
                  }
                } catch (e) {
                  // If consent parsing fails, keep defaults
                }
              })();
            `,
          }}
        />
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2513522563082642"
          crossOrigin="anonymous"
        />
        {/* Analytics scripts will be loaded dynamically by AnalyticsLoader component after consent */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const isDark = theme === 'dark' || (!theme && prefersDark);
                if (isDark) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
        {/* Organization Structured Data - Platform/Marketplace */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Nearby Pet Care',
              url: 'https://nearbypetcare.com',
              logo: 'https://nearbypetcare.com/logo.png',
              description: 'Online platform connecting pet owners with trusted pet care providers. Find professional grooming, boarding, daycare, and training services near you.',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@nearbypetcare.com',
                areaServed: 'US',
                availableLanguage: ['English']
              },
              sameAs: [
                ...(process.env.NEXT_PUBLIC_FACEBOOK_URL ? [process.env.NEXT_PUBLIC_FACEBOOK_URL] : []),
                ...(process.env.NEXT_PUBLIC_TWITTER_URL ? [process.env.NEXT_PUBLIC_TWITTER_URL] : []),
                ...(process.env.NEXT_PUBLIC_INSTAGRAM_URL ? [process.env.NEXT_PUBLIC_INSTAGRAM_URL] : []),
              ].filter(Boolean),
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '127',
                bestRating: '5',
                worstRating: '1'
              }
            }),
          }}
        />
        {/* WebSite Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Nearby Pet Care',
              url: 'https://nearbypetcare.com',
              description: 'Find trusted pet care services near you. Professional grooming, boarding, daycare, and training services.',
              publisher: {
                '@type': 'Organization',
                name: 'Nearby Pet Care',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://nearbypetcare.com/logo.png'
                }
              },
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://nearbypetcare.com/search?q={search_term_string}'
                },
                'query-input': 'required name=search_term_string'
              }
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-white dark:bg-black transition-colors`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W8HWTDWN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ThemeProvider>
          <AnalyticsLoader />
          <Header />
          {children}
          <Footer />
          <ConsentBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}

