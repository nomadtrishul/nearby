import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Nearby Pet Care',
  description: 'Privacy Policy for Nearby Pet Care. Learn how we collect, use, and protect your personal information when you use our educational pet care platform.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 transition-colors">
              Privacy Policy
            </h1>
            <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 sm:space-y-6 transition-colors">
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500" suppressHydrationWarning>
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                <p>
                  At Nearby Pet Care, we are committed to protecting your privacy and the privacy of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our educational website, read our content, or interact with our platform. We respect your privacy and are dedicated to maintaining the confidentiality and security of your personal data.
                </p>
                <p>
                  Nearby Pet Care is an independent educational platform dedicated to providing practical, step-by-step guidance on pet care. We operate solely as an informational resource and do not represent any business, clinic, or service provider. This Privacy Policy applies to all information collected through our website and any related services.
                </p>
                <p>
                  Please read this Privacy Policy carefully to understand our practices regarding your personal information. By using our website or services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                </p>
              </div>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  1. Information We Collect
                </h2>
                <p className="mb-3">
                  As an educational platform, we collect minimal information necessary to provide and improve our services. The types of information we collect include:
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Information You Provide Voluntarily
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Email address when you subscribe to our newsletter or contact us through our contact form</li>
                  <li>Name and message content when you reach out to us with questions or feedback</li>
                  <li>Comments or contributions you may submit on our blog posts or articles (if applicable)</li>
                  <li>Information you provide when participating in surveys or feedback forms</li>
                </ul>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Automatically Collected Information
                </h3>
                <p className="mb-3">
                  When you visit our website, we automatically collect certain information about your device and browsing behavior:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Device information including IP address, browser type, operating system, and device identifiers</li>
                  <li>Usage data such as pages visited, time spent on pages, links clicked, and search queries</li>
                  <li>Referral sources that led you to our website</li>
                  <li>Cookies and similar tracking technologies that help us understand how you interact with our website</li>
                  <li>General location data (country/region level) based on your IP address</li>
                </ul>
                <p>
                  This automatically collected information helps us understand how visitors use our educational content, which topics are most helpful, and how we can improve our guides and articles to better serve pet owners.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  2. How We Use Your Information
                </h2>
                <p className="mb-3">
                  We use the information we collect for various purposes to provide, maintain, and improve our educational platform. Specifically, we use your information to:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Provide access to our educational content, guides, and articles about pet care</li>
                  <li>Respond to your inquiries, questions, and feedback about our content</li>
                  <li>Send you newsletters or updates about new articles and guides (only if you have subscribed and consented)</li>
                  <li>Improve our website, content, and user experience through analytics and feedback</li>
                  <li>Understand which topics and guides are most helpful to pet owners</li>
                  <li>Ensure the security and functionality of our website</li>
                  <li>Comply with legal obligations and protect our rights</li>
                  <li>Personalize your experience by showing relevant content based on your interests (if you have consented to cookies)</li>
                  <li>Conduct research and analysis to better understand pet owner needs and improve our educational content</li>
                </ul>
                <p>
                  We do not use your personal information for purposes other than those described in this Privacy Policy without your explicit consent. We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  3. Information Sharing and Disclosure
                </h2>
                <p className="mb-3">
                  We respect your privacy and do not sell, trade, or rent your personal information to third parties for their marketing purposes. However, we may share your information in the following limited circumstances:
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Service Providers
                </h3>
                <p className="mb-3">
                  We may share your information with trusted third-party service providers who assist us in operating our website and providing our educational services. These service providers include:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Hosting and cloud service providers who store and manage our website data</li>
                  <li>Analytics providers who help us understand website usage and improve our content (only with your consent)</li>
                  <li>Email service providers who send newsletters and communications on our behalf (only if you have subscribed)</li>
                  <li>Content delivery networks that help our website load faster</li>
                </ul>
                <p className="mb-3">
                  All service providers are contractually obligated to maintain the confidentiality and security of your information and are prohibited from using it for any purpose other than providing services to us.
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Legal Requirements
                </h3>
                <p className="mb-3">
                  We may disclose your information if required to do so by law or in response to valid requests by public authorities, such as court orders, subpoenas, or government investigations. We may also disclose information when we believe in good faith that disclosure is necessary to:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Comply with legal obligations or respond to legal process</li>
                  <li>Protect and defend our rights, property, or safety</li>
                  <li>Prevent or investigate possible wrongdoing in connection with our services</li>
                  <li>Protect the personal safety of users or the public</li>
                </ul>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Business Transfers
                </h3>
                <p>
                  In the event of a merger, acquisition, reorganization, bankruptcy, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change in ownership or control of your personal information.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  4. Data Security
                </h2>
                <p className="mb-3">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security measures include:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Encryption of sensitive data in transit using industry-standard SSL/TLS protocols</li>
                  <li>Secure servers and databases with restricted access controls</li>
                  <li>Regular security assessments and vulnerability testing</li>
                  <li>Employee training on data protection and privacy best practices</li>
                  <li>Incident response procedures to address potential security breaches</li>
                  <li>Regular backups of our data to prevent data loss</li>
                </ul>
                <p className="mb-3">
                  While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. Although we implement reasonable security measures, we cannot guarantee absolute security. You are responsible for maintaining the confidentiality of any account credentials you may have and for all activities that occur under your account.
                </p>
                <p>
                  If you suspect any unauthorized access to your information or believe your information has been compromised, please contact us immediately so we can take appropriate action.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  5. Cookies and Tracking Technologies
                </h2>
                <p className="mb-3">
                  We use cookies and similar tracking technologies to collect and store information about your preferences and activity on our website. Cookies are small data files stored on your device that help us improve your experience and understand how our educational content is being used.
                </p>
                
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Cookie Consent Management
                </h3>
                <p className="mb-3">
                  We respect your privacy and provide you with control over your cookie preferences through our cookie consent banner. When you first visit our website, you will see a consent banner that allows you to:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Accept all cookies</li>
                  <li>Reject all optional cookies</li>
                  <li>Customize your cookie preferences by category</li>
                  <li>Review and change your preferences at any time through the "Cookie Preferences" link in our footer</li>
                </ul>
                <p className="mb-3">
                  Your consent preferences are stored in your browser's localStorage and will be remembered for future visits. You can update your preferences at any time by clicking the "Cookie Preferences" link in our website footer.
                </p>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Types of Cookies We Use
                </h3>
                <p className="mb-3">
                  We categorize cookies based on their purpose and function:
                </p>
                
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 mt-3 transition-colors">
                  Necessary Cookies
                </h4>
                <p className="mb-3">
                  These cookies are essential for the website to function properly and cannot be disabled. They are usually set in response to actions made by you, such as setting your privacy preferences, logging in, or filling in forms. These cookies do not store any personally identifiable information.
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Session management and authentication</li>
                  <li>Security and fraud prevention</li>
                  <li>Cookie consent preferences</li>
                  <li>Load balancing and website functionality</li>
                </ul>

                <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 mt-3 transition-colors">
                  Analytics Cookies
                </h4>
                <p className="mb-3">
                  These cookies help us understand how visitors interact with our educational content by collecting and reporting information anonymously. We use Google Analytics and similar services to analyze website usage, which helps us improve our guides and articles. These cookies are only set if you consent to analytics cookies.
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Page views and navigation patterns to understand which guides are most helpful</li>
                  <li>Time spent on pages to gauge content engagement</li>
                  <li>Traffic sources and user demographics (anonymized) to understand our audience</li>
                  <li>Error tracking and performance monitoring to ensure our website works properly</li>
                </ul>
                <p className="mb-3">
                  We use Google Consent Mode v2 to ensure that analytics data is collected in compliance with your consent preferences. When you do not consent to analytics cookies, we do not load analytics scripts or collect analytics data.
                </p>

                <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 mt-3 transition-colors">
                  Marketing Cookies
                </h4>
                <p className="mb-3">
                  These cookies are used to deliver personalized advertisements and track campaign performance. They may be set by our advertising partners and are only activated if you consent to marketing cookies. These cookies can track your browsing activity across different websites to build a profile of your interests.
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Google AdSense for personalized advertising</li>
                  <li>Ad campaign performance tracking</li>
                  <li>Retargeting and remarketing</li>
                  <li>Conversion tracking</li>
                </ul>
                <p className="mb-3">
                  We use Google Consent Mode v2 to manage advertising consent. Marketing cookies are only set if you explicitly consent to them. You can withdraw your consent at any time through the cookie preferences.
                </p>

                <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 mt-3 transition-colors">
                  Functional Cookies
                </h4>
                <p className="mb-3">
                  These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings. They may be set by us or by third-party providers whose services we have added to our pages.
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Theme preferences (light/dark mode)</li>
                  <li>Language preferences</li>
                  <li>User interface customizations</li>
                  <li>Remembering form data and preferences</li>
                </ul>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Third-Party Cookies
                </h3>
                <p className="mb-3">
                  We use the following third-party services that may set cookies:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li><strong>Google Analytics:</strong> Web analytics service (requires analytics consent)</li>
                  <li><strong>Google Tag Manager:</strong> Tag management system (requires analytics or marketing consent)</li>
                  <li><strong>Google AdSense:</strong> Advertising service (requires marketing consent)</li>
                </ul>
                <p className="mb-3">
                  These third-party services have their own privacy policies and cookie practices. We encourage you to review their policies:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Google Privacy Policy</a></li>
                  <li><a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Google Cookie Policy</a></li>
                </ul>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Managing Your Cookie Preferences
                </h3>
                <p className="mb-3">
                  You have several options for managing cookies:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li><strong>Cookie Consent Banner:</strong> Use our cookie consent banner to accept, reject, or customize cookie preferences when you first visit our site</li>
                  <li><strong>Cookie Preferences Link:</strong> Click "Cookie Preferences" in our website footer to change your settings at any time</li>
                  <li><strong>Browser Settings:</strong> Most browsers allow you to refuse cookies or alert you when cookies are being sent. However, disabling cookies may affect website functionality</li>
                  <li><strong>Opt-Out Tools:</strong> You can opt out of certain third-party cookies through industry opt-out tools such as:
                    <ul className="list-disc list-inside space-y-1 mt-2 ml-6">
                      <li><a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Digital Advertising Alliance</a></li>
                      <li><a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Network Advertising Initiative</a></li>
                    </ul>
                  </li>
                </ul>
                <p>
                  Please note that if you disable cookies, some features of our website may not function properly, and your user experience may be affected.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  6. Your Rights and Choices
                </h2>
                <p className="mb-3">
                  You have certain rights regarding your personal information, and we are committed to helping you exercise these rights. Depending on your location, you may have additional rights under applicable privacy laws such as GDPR (General Data Protection Regulation) or CCPA (California Consumer Privacy Act).
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  General Rights
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal obligations</li>
                  <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                  <li><strong>Objection:</strong> Object to certain processing of your personal information</li>
                  <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent for processing based on consent at any time</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                </ul>
                <p className="mb-3">
                  To exercise any of these rights, please contact us using the information provided in the Contact Us section below. We will respond to your request within the timeframes required by applicable law (typically 30 days, or 45 days in some cases).
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  7. GDPR Compliance (European Users)
                </h2>
                <p className="mb-3">
                  If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, the General Data Protection Regulation (GDPR) provides you with specific rights regarding your personal data. This section explains how we comply with GDPR requirements.
                </p>
                
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Legal Basis for Processing
                </h3>
                <p className="mb-3">
                  We process your personal data based on the following legal bases:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li><strong>Consent:</strong> When you provide explicit consent, such as for marketing communications or non-essential cookies</li>
                  <li><strong>Legitimate Interests:</strong> For purposes such as website security, content improvement, and understanding user needs, where our interests do not override your rights</li>
                  <li><strong>Legal Obligation:</strong> To comply with legal requirements, such as responding to legal requests</li>
                </ul>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Your GDPR Rights
                </h3>
                <p className="mb-3">
                  Under GDPR, you have the following rights:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li><strong>Right of Access (Article 15):</strong> You can request information about what personal data we hold about you and how we process it</li>
                  <li><strong>Right to Rectification (Article 16):</strong> You can request correction of inaccurate or incomplete personal data</li>
                  <li><strong>Right to Erasure (Article 17):</strong> You can request deletion of your personal data in certain circumstances (the "right to be forgotten")</li>
                  <li><strong>Right to Restrict Processing (Article 18):</strong> You can request that we limit how we use your personal data</li>
                  <li><strong>Right to Data Portability (Article 20):</strong> You can request a copy of your data in a structured, machine-readable format</li>
                  <li><strong>Right to Object (Article 21):</strong> You can object to processing based on legitimate interests or for direct marketing purposes</li>
                  <li><strong>Right to Withdraw Consent:</strong> You can withdraw consent at any time where processing is based on consent</li>
                  <li><strong>Right to Lodge a Complaint:</strong> You have the right to file a complaint with your local data protection authority</li>
                </ul>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Data Controller and Data Protection Officer
                </h3>
                <p className="mb-3">
                  Nearby Pet Care is the data controller for personal data collected through our educational platform. For GDPR-related inquiries, you can contact us at:
                </p>
                <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg mb-4">
                  <p className="mb-2">
                    <strong className="text-gray-900 dark:text-white">Email:</strong>{' '}
                    <a href="mailto:privacy@nearbypetcare.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                      privacy@nearbypetcare.com
                    </a>
                  </p>
                  <p>
                    <strong className="text-gray-900 dark:text-white">Subject Line:</strong> GDPR Request
                  </p>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  International Data Transfers
                </h3>
                <p className="mb-3">
                  Your personal data may be transferred to and processed in countries outside the EEA. When we transfer data outside the EEA, we ensure appropriate safeguards are in place, such as:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Standard Contractual Clauses approved by the European Commission</li>
                  <li>Adequacy decisions by the European Commission</li>
                  <li>Other appropriate safeguards as required by GDPR</li>
                </ul>
                <p>
                  By using our services, you consent to the transfer of your data to countries outside the EEA with appropriate safeguards in place.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  8. CCPA Compliance (California Residents)
                </h2>
                <p className="mb-3">
                  If you are a California resident, the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA) provide you with specific rights regarding your personal information. This section explains your rights and how we comply with CCPA/CPRA requirements.
                </p>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Information We Collect
                </h3>
                <p className="mb-3">
                  In the past 12 months, we have collected the following categories of personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li><strong>Identifiers:</strong> Name, email address, IP address, device identifiers</li>
                  <li><strong>Internet Activity:</strong> Browsing history, search history, interaction with our website</li>
                  <li><strong>Geolocation Data:</strong> General location data (country/region level) based on IP address</li>
                  <li><strong>Inferences:</strong> Preferences and characteristics derived from your use of our educational content</li>
                </ul>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  How We Use Your Information
                </h3>
                <p className="mb-3">
                  We use the personal information we collect for the business purposes described in Section 2 of this Privacy Policy, including:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Providing and improving our educational content</li>
                  <li>Understanding how visitors use our guides and articles</li>
                  <li>Communicating with you about our content</li>
                  <li>Security and fraud prevention</li>
                  <li>Legal compliance</li>
                  <li>Marketing (with your consent)</li>
                </ul>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Information Sharing and Sale
                </h3>
                <p className="mb-3">
                  We do not sell your personal information to third parties. We may share your information with service providers as described in Section 3 of this Privacy Policy. In the past 12 months, we have shared the following categories of personal information with service providers:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Identifiers</li>
                  <li>Internet Activity</li>
                  <li>Geolocation Data</li>
                </ul>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Your CCPA Rights
                </h3>
                <p className="mb-3">
                  As a California resident, you have the following rights:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li><strong>Right to Know:</strong> You can request information about what personal information we collect, use, disclose, and sell (we do not sell personal information)</li>
                  <li><strong>Right to Delete:</strong> You can request deletion of your personal information, subject to certain exceptions</li>
                  <li><strong>Right to Opt-Out:</strong> You can opt-out of the sale of personal information (we do not sell personal information)</li>
                  <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA rights</li>
                  <li><strong>Right to Correct:</strong> You can request correction of inaccurate personal information</li>
                  <li><strong>Right to Limit Use of Sensitive Information:</strong> You can request limits on the use of sensitive personal information</li>
                </ul>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  How to Exercise Your CCPA Rights
                </h3>
                <p className="mb-3">
                  To exercise your CCPA rights, you can:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Submit a request by email to <a href="mailto:privacy@nearbypetcare.com" className="text-blue-600 dark:text-blue-400 hover:underline">privacy@nearbypetcare.com</a> with "CCPA Request" in the subject line</li>
                  <li>Use the "Cookie Preferences" link in our website footer to manage cookie consent</li>
                  <li>Contact us through our <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact Us</Link> page</li>
                </ul>
                <p className="mb-3">
                  We will verify your identity before processing your request. We may ask for additional information to verify your identity, such as your email address. We will respond to your request within 45 days, or inform you if we need additional time.
                </p>
                <p>
                  You can designate an authorized agent to make requests on your behalf. The authorized agent must provide proof of authorization, and we may still verify your identity directly.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  9. Data Retention
                </h2>
                <p className="mb-3">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Our retention practices include:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Email addresses and subscription information are retained while you remain subscribed and for a reasonable period after unsubscribing</li>
                  <li>Contact form submissions are retained to maintain communication records and improve our content</li>
                  <li>Analytics data may be retained in aggregated or anonymized form for research and improvement purposes</li>
                  <li>Legal and compliance records may be retained as required by applicable laws</li>
                </ul>
                <p>
                  When we no longer need your personal information, we will securely delete or anonymize it in accordance with our data retention policies and applicable laws.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  10. Children's Privacy
                </h2>
                <p>
                  Our educational platform is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete that information promptly.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  11. Third-Party Links
                </h2>
                <p>
                  Our website may contain links to third-party websites, services, or applications that are not operated by us. These links are provided for your convenience and educational purposes. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party sites you visit. This Privacy Policy applies only to information collected by Nearby Pet Care through our educational platform.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  12. International Data Transfers
                </h2>
                <p className="mb-3">
                  Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. We take appropriate measures to ensure your information receives adequate protection, including:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Standard Contractual Clauses for transfers from the EEA</li>
                  <li>Adequacy decisions where applicable</li>
                  <li>Other appropriate safeguards as required by applicable law</li>
                </ul>
                <p>
                  By using our services, you consent to the transfer of your information to these countries with appropriate safeguards in place. For more information about international data transfers under GDPR, please see Section 7.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  13. Changes to This Privacy Policy
                </h2>
                <p className="mb-3">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Posting the updated Privacy Policy on this page with a new "Last updated" date</li>
                  <li>Sending you an email notification if the changes are significant and you have provided us with your email address</li>
                  <li>Displaying a prominent notice on our website</li>
                </ul>
                <p>
                  We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information. Your continued use of our services after any changes to this Privacy Policy constitutes your acceptance of those changes.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  14. Contact Us
                </h2>
                <p className="mb-3">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="bg-gray-50 dark:bg-gray-900/50 p-4 sm:p-6 rounded-lg">
                  <p className="mb-2">
                    <strong className="text-gray-900 dark:text-white">Email:</strong>{' '}
                    <a href="mailto:privacy@nearbypetcare.com" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors">
                      privacy@nearbypetcare.com
                    </a>
                  </p>
                  <p className="mb-2">
                    <strong className="text-gray-900 dark:text-white">Website:</strong>{' '}
                    <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors">
                      Contact Us Page
                    </Link>
                  </p>
                  <p>
                    We will respond to your inquiry within a reasonable timeframe and work with you to address any concerns you may have about your privacy.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
