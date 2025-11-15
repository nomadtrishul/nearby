'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

type ConsentPreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
};

type ConsentBannerProps = {
  onConsentChange?: (preferences: ConsentPreferences) => void;
};

export default function ConsentBanner({ onConsentChange }: ConsentBannerProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false,
  });
  const { theme } = useTheme();

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay to prevent flash of unstyled content
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);
        applyConsent(savedPreferences);
        if (onConsentChange) {
          onConsentChange(savedPreferences);
        }
      } catch (e) {
        // If parsing fails, show banner again
        setShowBanner(true);
      }
    }

    // Listen for requests to show the banner again
    const handleShowBanner = () => {
      setShowBanner(true);
      setShowSettings(true);
    };

    window.addEventListener('show-cookie-banner', handleShowBanner);

    return () => {
      window.removeEventListener('show-cookie-banner', handleShowBanner);
    };
  }, [onConsentChange]);

  const applyConsent = (consentPrefs: ConsentPreferences) => {
    // Initialize Google Consent Mode v2
    if (typeof window !== 'undefined' && (window as any).gtag) {
      const gtag = (window as any).gtag;
      
      // Set consent state
      gtag('consent', 'update', {
        analytics_storage: consentPrefs.analytics ? 'granted' : 'denied',
        ad_storage: consentPrefs.marketing ? 'granted' : 'denied',
        ad_user_data: consentPrefs.marketing ? 'granted' : 'denied',
        ad_personalization: consentPrefs.marketing ? 'granted' : 'denied',
        functionality_storage: consentPrefs.functional ? 'granted' : 'denied',
        personalization_storage: consentPrefs.functional ? 'granted' : 'denied',
        security_storage: 'granted', // Always granted for security
      });
    }
  };

  const handleAcceptAll = () => {
    const allAccepted: ConsentPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    saveConsent(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyNecessary: ConsentPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    saveConsent(onlyNecessary);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
    setShowSettings(false);
  };

  const saveConsent = (consentPrefs: ConsentPreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(consentPrefs));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    applyConsent(consentPrefs);
    setShowBanner(false);
    
    // Dispatch custom event to notify other components
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('consent-updated'));
    }
    
    if (onConsentChange) {
      onConsentChange(consentPrefs);
    }
  };

  const handleTogglePreference = (key: keyof ConsentPreferences) => {
    if (key === 'necessary') return; // Cannot toggle necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={() => setShowSettings(false)}
        aria-hidden="true"
      />

      {/* Consent Banner */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 ${
          theme === 'dark'
            ? 'bg-gray-900 border-t border-gray-800'
            : 'bg-white border-t border-gray-200'
        } shadow-2xl transition-colors`}
        role="dialog"
        aria-labelledby="consent-title"
        aria-describedby="consent-description"
      >
        <div className="max-w-7xl mx-auto">
          {!showSettings ? (
            // Main Banner View
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3">
              <div className="flex-1">
                <h2
                  id="consent-title"
                  className={`text-sm sm:text-base font-bold mb-1 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Cookie Consent
                </h2>
                <p
                  id="consent-description"
                  className={`text-xs sm:text-sm ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  We use cookies to enhance your browsing experience, analyze site traffic, and
                  personalize content. By clicking &quot;Accept All&quot;, you consent to our use of
                  cookies. You can customize your preferences or learn more in our{' '}
                  <a
                    href="/privacy"
                    className="underline hover:no-underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setShowSettings(true)}
                  className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                    theme === 'dark'
                      ? 'bg-gray-800 text-white hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                  aria-label="Customize cookie preferences"
                >
                  Customize
                </button>
                <button
                  onClick={handleRejectAll}
                  className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                    theme === 'dark'
                      ? 'bg-gray-800 text-white hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                  aria-label="Reject all optional cookies"
                >
                  Reject All
                </button>
                <button
                  onClick={handleAcceptAll}
                  className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-white transition-colors ${
                    theme === 'dark'
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                  aria-label="Accept all cookies"
                >
                  Accept All
                </button>
              </div>
            </div>
          ) : (
            // Settings View
            <div className="max-w-4xl mx-auto">
              <h2
                className={`text-base sm:text-lg font-bold mb-2 sm:mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                Cookie Preferences
              </h2>
              <p
                className={`text-xs sm:text-sm mb-4 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Manage your cookie preferences. You can enable or disable different types of cookies
                below. Learn more in our{' '}
                <a
                  href="/privacy"
                  className="underline hover:no-underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
                .
              </p>

              <div className="space-y-3 mb-4">
                {/* Necessary Cookies */}
                <div
                  className={`p-3 rounded-lg border ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-700'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div>
                      <h3
                        className={`text-sm font-semibold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        Necessary Cookies
                      </h3>
                      <p
                        className={`text-xs mt-0.5 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        Required for the website to function properly. These cannot be disabled.
                      </p>
                    </div>
                    <div
                      className={`ml-4 px-2 py-0.5 rounded-full text-xs font-medium ${
                        theme === 'dark'
                          ? 'bg-green-900 text-green-300'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      Always Active
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div
                  className={`p-3 rounded-lg border ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-700'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3
                        className={`text-sm font-semibold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        Analytics Cookies
                      </h3>
                      <p
                        className={`text-xs mt-0.5 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        Help us understand how visitors interact with our website by collecting and
                        reporting information anonymously.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer ml-3">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={() => handleTogglePreference('analytics')}
                        className="sr-only peer"
                        aria-label="Toggle analytics cookies"
                      />
                      <div
                        className={`w-9 h-5 rounded-full transition-colors relative ${
                          preferences.analytics
                            ? 'bg-blue-600'
                            : theme === 'dark'
                            ? 'bg-gray-700'
                            : 'bg-gray-300'
                        }`}
                      >
                        <div
                          className={`absolute top-[2px] left-[2px] bg-white rounded-full h-4 w-4 transition-transform ${
                            preferences.analytics ? 'translate-x-4' : 'translate-x-0'
                          }`}
                        />
                      </div>
                    </label>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div
                  className={`p-3 rounded-lg border ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-700'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3
                        className={`text-sm font-semibold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        Marketing Cookies
                      </h3>
                      <p
                        className={`text-xs mt-0.5 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        Used to deliver personalized advertisements and track campaign performance.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer ml-3">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={() => handleTogglePreference('marketing')}
                        className="sr-only peer"
                        aria-label="Toggle marketing cookies"
                      />
                      <div
                        className={`w-9 h-5 rounded-full transition-colors relative ${
                          preferences.marketing
                            ? 'bg-blue-600'
                            : theme === 'dark'
                            ? 'bg-gray-700'
                            : 'bg-gray-300'
                        }`}
                      >
                        <div
                          className={`absolute top-[2px] left-[2px] bg-white rounded-full h-4 w-4 transition-transform ${
                            preferences.marketing ? 'translate-x-4' : 'translate-x-0'
                          }`}
                        />
                      </div>
                    </label>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div
                  className={`p-3 rounded-lg border ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-700'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3
                        className={`text-sm font-semibold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        Functional Cookies
                      </h3>
                      <p
                        className={`text-xs mt-0.5 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        Enable enhanced functionality and personalization, such as remembering your
                        preferences.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer ml-3">
                      <input
                        type="checkbox"
                        checked={preferences.functional}
                        onChange={() => handleTogglePreference('functional')}
                        className="sr-only peer"
                        aria-label="Toggle functional cookies"
                      />
                      <div
                        className={`w-9 h-5 rounded-full transition-colors relative ${
                          preferences.functional
                            ? 'bg-blue-600'
                            : theme === 'dark'
                            ? 'bg-gray-700'
                            : 'bg-gray-300'
                        }`}
                      >
                        <div
                          className={`absolute top-[2px] left-[2px] bg-white rounded-full h-4 w-4 transition-transform ${
                            preferences.functional ? 'translate-x-4' : 'translate-x-0'
                          }`}
                        />
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 justify-end">
                <button
                  onClick={() => setShowSettings(false)}
                  className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                    theme === 'dark'
                      ? 'bg-gray-800 text-white hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSavePreferences}
                  className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-white transition-colors ${
                    theme === 'dark'
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

