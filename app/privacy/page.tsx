import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Nearby Pet Care',
  description: 'Privacy Policy for Nearby Pet Care. Learn how we collect, use, and protect your personal information and data.',
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
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                <p>
                  At Nearby Pet Care, we are committed to protecting your privacy and the privacy of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us. We respect your privacy and are dedicated to maintaining the confidentiality and security of your personal data.
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
                  We collect information that you provide directly to us and information that is automatically collected when you use our services. The types of information we collect include:
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Personal Information You Provide
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Name, email address, phone number, and mailing address when you create an account or make a booking</li>
                  <li>Pet information including names, breeds, ages, medical history, vaccination records, and special care requirements</li>
                  <li>Payment information including credit card details, billing addresses, and transaction history</li>
                  <li>Communication preferences and any information you provide when contacting us, submitting feedback, or participating in surveys</li>
                  <li>Emergency contact information for use in case of pet care emergencies</li>
                </ul>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Automatically Collected Information
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Device information including IP address, browser type, operating system, and device identifiers</li>
                  <li>Usage data such as pages visited, time spent on pages, links clicked, and search queries</li>
                  <li>Location data when you use location-based features to find nearby pet care services</li>
                  <li>Cookies and similar tracking technologies that help us understand how you interact with our website</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  2. How We Use Your Information
                </h2>
                <p className="mb-3">
                  We use the information we collect for various purposes to provide, maintain, and improve our services. Specifically, we use your information to:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Process and manage your bookings, appointments, and service requests</li>
                  <li>Communicate with you about your bookings, account updates, service changes, and important notices</li>
                  <li>Provide customer support, respond to your inquiries, and address any concerns or issues</li>
                  <li>Send you service-related information, updates, and promotional materials (with your consent where required)</li>
                  <li>Improve our website, services, and user experience through analytics and feedback</li>
                  <li>Ensure the safety and security of our services, prevent fraud, and protect against unauthorized access</li>
                  <li>Comply with legal obligations, enforce our terms of service, and protect our rights and interests</li>
                  <li>Personalize your experience by showing relevant content and recommendations based on your preferences</li>
                  <li>Facilitate communication between you and pet care service providers</li>
                </ul>
                <p>
                  We do not use your personal information for purposes other than those described in this Privacy Policy without your explicit consent.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  3. Information Sharing and Disclosure
                </h2>
                <p className="mb-3">
                  We respect your privacy and do not sell, trade, or rent your personal information to third parties for their marketing purposes. However, we may share your information in the following circumstances:
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Service Providers
                </h3>
                <p className="mb-3">
                  We may share your information with trusted third-party service providers who assist us in operating our business, conducting our operations, or serving our users. These service providers include:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Payment processors who handle transaction processing and payment security</li>
                  <li>Hosting and cloud service providers who store and manage our data</li>
                  <li>Analytics providers who help us understand website usage and improve our services</li>
                  <li>Email service providers who send communications on our behalf</li>
                  <li>Pet care service providers who need your information to provide booked services</li>
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
                  <li>Encryption of sensitive data in transit and at rest using industry-standard protocols</li>
                  <li>Secure servers and databases with restricted access controls</li>
                  <li>Regular security assessments and vulnerability testing</li>
                  <li>Employee training on data protection and privacy best practices</li>
                  <li>Incident response procedures to address potential security breaches</li>
                </ul>
                <p className="mb-3">
                  While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. Although we implement reasonable security measures, we cannot guarantee absolute security. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>
                <p>
                  If you suspect any unauthorized access to your account or believe your information has been compromised, please contact us immediately so we can take appropriate action.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  5. Cookies and Tracking Technologies
                </h2>
                <p className="mb-3">
                  We use cookies and similar tracking technologies to collect and store information about your preferences and activity on our website. Cookies are small data files stored on your device that help us improve your experience. We use cookies for:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Remembering your preferences and settings</li>
                  <li>Analyzing website traffic and usage patterns</li>
                  <li>Providing personalized content and recommendations</li>
                  <li>Improving website functionality and performance</li>
                </ul>
                <p className="mb-3">
                  You can control cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. However, if you disable cookies, some features of our website may not function properly.
                </p>
                <p>
                  We may also use third-party analytics services that use cookies and similar technologies to analyze website usage. These services may collect information about your use of our website and other websites to provide analytics and advertising services.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  6. Your Rights and Choices
                </h2>
                <p className="mb-3">
                  You have certain rights regarding your personal information, and we are committed to helping you exercise these rights. Depending on your location, you may have the following rights:
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Access and Portability
                </h3>
                <p className="mb-3">
                  You have the right to access the personal information we hold about you and request a copy of your data in a portable format. You can view and update much of your information directly through your account settings.
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Correction and Updates
                </h3>
                <p className="mb-3">
                  You have the right to correct inaccurate or incomplete information. You can update your personal information through your account settings or by contacting us directly.
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Deletion
                </h3>
                <p className="mb-3">
                  You have the right to request deletion of your personal information, subject to certain exceptions such as legal obligations or legitimate business interests. We will honor deletion requests to the extent permitted by law.
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Opt-Out of Marketing Communications
                </h3>
                <p className="mb-3">
                  You can opt-out of receiving marketing communications from us at any time by clicking the unsubscribe link in our emails or by updating your communication preferences in your account settings. Please note that you may still receive service-related communications even if you opt-out of marketing messages.
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Data Processing Restrictions
                </h3>
                <p>
                  You have the right to object to or restrict certain processing of your personal information. To exercise any of these rights, please contact us using the information provided in the Contact Us section below.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  7. Data Retention
                </h2>
                <p className="mb-3">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Our retention practices include:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Account information is retained while your account is active and for a reasonable period after account closure</li>
                  <li>Booking and transaction records are retained for legal and accounting purposes</li>
                  <li>Communication records are retained to maintain service quality and resolve disputes</li>
                  <li>Analytics data may be retained in aggregated or anonymized form</li>
                </ul>
                <p>
                  When we no longer need your personal information, we will securely delete or anonymize it in accordance with our data retention policies and applicable laws.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  8. Children's Privacy
                </h2>
                <p>
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete that information promptly.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  9. Third-Party Links
                </h2>
                <p>
                  Our website may contain links to third-party websites, services, or applications that are not operated by us. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party sites you visit. This Privacy Policy applies only to information collected by Nearby Pet Care.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  10. International Data Transfers
                </h2>
                <p>
                  Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. By using our services, you consent to the transfer of your information to these countries. We take appropriate measures to ensure your information receives adequate protection in accordance with this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  11. Changes to This Privacy Policy
                </h2>
                <p className="mb-3">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Posting the updated Privacy Policy on this page with a new "Last updated" date</li>
                  <li>Sending you an email notification if the changes are significant</li>
                  <li>Displaying a prominent notice on our website</li>
                </ul>
                <p>
                  We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information. Your continued use of our services after any changes to this Privacy Policy constitutes your acceptance of those changes.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  12. Contact Us
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
