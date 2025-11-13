import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nearby Pet Care - Professional Pet Care Services",
  description: "Find trusted pet care services near you. Professional grooming, boarding, and pet care solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KVZJ3QXM24"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KVZJ3QXM24');
            `,
          }}
        />
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
        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Nearby Pet Care',
              url: 'https://nearbypetcare.com',
              logo: 'https://nearbypetcare.com/logo.png',
              description: 'Professional pet care services connecting pet owners with trusted pet care providers. Offering grooming, boarding, daycare, and training services.',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-555-123-4567',
                contactType: 'Customer Service',
                email: 'info@nearbypetcare.com',
                areaServed: 'US',
                availableLanguage: 'English',
              },
              sameAs: [
                'https://www.facebook.com/nearbypetcare',
                'https://www.twitter.com/nearbypetcare',
                'https://www.instagram.com/nearbypetcare',
              ],
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Pet Care Ave',
                addressLocality: 'City',
                addressRegion: 'ST',
                postalCode: '12345',
                addressCountry: 'US',
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-white dark:bg-black transition-colors`}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

