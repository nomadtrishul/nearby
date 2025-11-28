import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsentBanner from "@/components/ConsentBanner";
import AnalyticsLoader from "@/components/AnalyticsLoader";
import { getBaseUrl, getSiteName, getVerificationMeta } from "@/lib/site-config";
import { generateSEOMetadata, isProductionEnvironment } from "@/lib/seo-utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = getBaseUrl();
const siteName = getSiteName();
const verificationMeta = getVerificationMeta();

// Generate base metadata using centralized SEO utilities
const baseMetadata = generateSEOMetadata({
  title: "Nearby Pet Care - Professional Pet Services",
  description: "Find trusted pet care services near you. Professional grooming, boarding, daycare, and training services from experienced professionals.",
  keywords: ['pet care services', 'dog grooming', 'pet boarding', 'pet daycare', 'pet training', 'pet care near me', 'professional pet care', 'mobile pet care', 'pet grooming services', 'dog boarding', 'cat boarding'],
  pathname: '/',
  type: 'website',
});

// Override robots based on environment
const shouldIndex = isProductionEnvironment();

// Extract title as string (handle Next.js 16 Metadata title types)
const baseTitle = typeof baseMetadata.title === 'string' 
  ? baseMetadata.title 
  : "Nearby Pet Care - Professional Pet Care Services Near You";

// Destructure to exclude title from baseMetadata, then override it
const { title: _, ...baseMetadataWithoutTitle } = baseMetadata;

export const metadata: Metadata = {
  ...baseMetadataWithoutTitle,
  metadataBase: new URL(baseUrl),
  title: {
    default: baseTitle,
    template: "%s | Nearby Pet Care"
  },
  authors: [{ name: 'Nearby Pet Care Team' }],
  creator: 'Nearby Pet Care',
  publisher: 'Nearby Pet Care',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: shouldIndex,
    follow: true,
    googleBot: {
      index: shouldIndex,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  ...(verificationMeta && { verification: verificationMeta }),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Pet Care',
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

        {/* Viewport Meta Tag - Critical for Mobile-First Indexing */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />

        {/* Theme Color for Mobile Browsers */}
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />

        {/* Favicon - Multiple formats for better browser support */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />

        {/* Preconnect to External Domains for Performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        
        {/* Initialize Google Consent Mode v2 - MUST be loaded BEFORE any Google tags (GTM/GA) */}
        {/* According to Google's guide: https://developers.google.com/tag-platform/security/guides/consent */}
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window === 'undefined') return;
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

        {/* Google Analytics 4 (gtag.js) - Loads AFTER consent mode is initialized */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2THNJVPVNS"
          suppressHydrationWarning
        />
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2THNJVPVNS');
            `,
          }}
        />
        {/* End Google Analytics 4 */}

        {/* Google Tag Manager - Loads AFTER consent mode is initialized */}
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W8HWTDWN');
            `,
          }}
        />
        {/* End Google Tag Manager */}


        {/* Analytics scripts will be loaded dynamically by AnalyticsLoader component after consent */}
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window === 'undefined') return;
                try {
                  const theme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const isDark = theme === 'dark' || (!theme && prefersDark);
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  // Fallback to system preference if localStorage fails
                  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add('dark');
                  }
                }
              })();
            `,
          }}
        />
        {/* Organization Structured Data - Platform/Marketplace */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: siteName,
              url: baseUrl,
              logo: `${baseUrl}/logo.png`,
              description: 'Online platform connecting pet owners with trusted pet care providers. Find professional grooming, boarding, daycare, and training services near you.',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@nearbypetcare.com',
                areaServed: 'US',
                availableLanguage: ['English']
              },
              sameAs: [
                'https://www.facebook.com/nearbypetcare',
                'https://www.instagram.com/nearbypetcare/',
                'https://www.youtube.com/@nearbypetcare',
                'https://www.linkedin.com/company/nearbypetcare',
                'https://x.com/nearbypetcare',
              ]
            }),
          }}
        />
        {/* WebSite Structured Data */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: siteName,
              url: baseUrl,
              description: 'Find trusted pet care services near you. Professional grooming, boarding, daycare, and training services.',
              inLanguage: 'en-US',
              publisher: {
                '@type': 'Organization',
                name: siteName,
                logo: {
                  '@type': 'ImageObject',
                  url: `${baseUrl}/logo.png`,
                  width: 200,
                  height: 48
                }
              },
              copyrightHolder: {
                '@type': 'Organization',
                name: siteName
              },
              copyrightYear: new Date().getFullYear()
            }),
          }}
        />

        {/* BreadcrumbList for Homepage */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: baseUrl
                }
              ]
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
        <Script
          src={process.env.NEXT_PUBLIC_AHREFS_ANALYTICS_URL!}
          async
          strategy="afterInteractive"
          data-key={process.env.NEXT_PUBLIC_AHREFS_ANALYTICS_KEY}
        />
      </body>
    </html>
  );
}

