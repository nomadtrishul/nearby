'use client';

import { useEffect } from 'react';

export default function AnalyticsLoader() {
  useEffect(() => {
    // Function to load Google Tag Manager
    const loadGTM = () => {
      if (typeof window !== 'undefined' && !(window as any).gtmLoaded) {
        (window as any).gtmLoaded = true;
        (function(w: any, d: Document, s: string, l: string, i: string) {
          w[l] = w[l] || [];
          w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
          const f = d.getElementsByTagName(s)[0];
          const j = d.createElement(s) as HTMLScriptElement;
          const dl = l != 'dataLayer' ? '&l=' + l : '';
          j.async = true;
          j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
          f.parentNode?.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-W8HWTDWN');
      }
    };

    // Function to load Google Analytics
    const loadGA = () => {
      if (typeof window !== 'undefined' && !(window as any).gaLoaded) {
        (window as any).gaLoaded = true;
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-KVZJ3QXM24';
        document.head.appendChild(script);

        script.onload = () => {
          if ((window as any).gtag) {
            (window as any).gtag('js', new Date());
            (window as any).gtag('config', 'G-KVZJ3QXM24');
          }
        };
      }
    };

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
          
          // Load analytics scripts if analytics or marketing consent is granted
          if (preferences.analytics || preferences.marketing) {
            loadGTM();
            loadGA();
          }
          
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

