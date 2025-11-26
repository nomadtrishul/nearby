'use client';

import { useEffect } from 'react';

export default function AnalyticsLoader() {
  useEffect(() => {
    // Note: Google Tag Manager and Google Analytics (gtag.js) are now loaded directly in the head via app/layout.tsx
    // This component only handles Google AdSense loading based on consent
    // Consent mode v2 controls what data is collected by GA/GTM

    // Function to load Google AdSense
    const loadAdSense = () => {
      if (typeof window !== 'undefined' && !(window as any).adsenseLoaded) {
        (window as any).adsenseLoaded = true;
        const script = document.createElement('script');
        script.async = true;
        script.src =
          'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2513522563082642';
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);
      }
    };

    // Check for existing consent and load scripts accordingly
    const checkAndLoadScripts = () => {
      try {
        const consent = localStorage.getItem('cookie-consent');
        if (consent) {
          const preferences = JSON.parse(consent);
          
          // Note: GTM and GA are already loaded in the head
          // Consent mode v2 controls what data is collected
          // No need to load them here
          
          // Load AdSense only if marketing consent is granted
          if (preferences.marketing) {
            loadAdSense();
          }
        } else {
          // No consent yet - ensure scripts are not loaded
          // This is important for compliance
        }
      } catch (e) {
        // If consent check fails, don't load scripts
        console.error('Error checking consent:', e);
      }
    };

    // Wait a bit for localStorage to be available, then check
    const timer = setTimeout(() => {
      checkAndLoadScripts();
    }, 100);
    
    // Also check immediately in case localStorage is already available
    if (typeof window !== 'undefined' && window.localStorage) {
      checkAndLoadScripts();
    }

    // Listen for consent changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cookie-consent') {
        checkAndLoadScripts();
      }
    };

    // Listen for custom consent change events
    const handleConsentChange = () => {
      checkAndLoadScripts();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('consent-updated', handleConsentChange);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('consent-updated', handleConsentChange);
    };
  }, []);

  return null;
}

