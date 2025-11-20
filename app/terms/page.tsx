import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Nearby Pet Care',
  description: 'Terms of Service for Nearby Pet Care. Read our terms and conditions for using our educational pet care platform and content.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://nearbypetcare.com/terms',
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 transition-colors">
              Terms of Service
            </h1>
            <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 sm:space-y-6 transition-colors">
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500" suppressHydrationWarning>
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                <p>
                  Welcome to Nearby Pet Care. These Terms of Service ("Terms") govern your access to and use of our educational website, content, and services (collectively, the "Services"). Please read these Terms carefully before using our Services.
                </p>
                <p>
                  Nearby Pet Care is an independent educational platform dedicated to providing practical, step-by-step guidance on pet care. We operate solely as an informational resource and do not represent any business, clinic, or service provider. Our mission is to help pet owners make informed decisions about everyday pet care through accessible, evidence-based information.
                </p>
                <p>
                  By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our Services. These Terms constitute a legally binding agreement between you and Nearby Pet Care.
                </p>
              </div>
              
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  1. Acceptance of Terms
                </h2>
                <p className="mb-3">
                  By accessing and using Nearby Pet Care's educational platform, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use our Services. These Terms apply to all users of the Services, including without limitation users who are browsers, readers, subscribers, and contributors of content.
                </p>
                <p>
                  We reserve the right to update, change, or replace any part of these Terms at any time. It is your responsibility to check this page periodically for changes. Your continued use of or access to the Services following the posting of any changes constitutes acceptance of those changes.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  2. Description of Services
                </h2>
                <p className="mb-3">
                  Nearby Pet Care provides an independent educational platform that offers practical, step-by-step guidance on pet care. Our Services include:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Educational articles, guides, and how-to content about pet nutrition, health, grooming, training, and overall wellbeing</li>
                  <li>Practical, actionable advice written in clear, understandable language</li>
                  <li>Information and resources based on widely accepted pet care practices</li>
                  <li>Tools and calculators to help pet owners make informed decisions</li>
                  <li>Blog posts and community content about pet care topics</li>
                </ul>
                <p className="mb-3">
                  <strong>Important:</strong> Nearby Pet Care operates solely as an informational and educational resource. We do not:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Provide veterinary services, medical advice, or professional consultations</li>
                  <li>Connect users with service providers or facilitate bookings</li>
                  <li>Represent any business, clinic, or service provider</li>
                  <li>Endorse or recommend specific products, services, or brands (unless explicitly stated in our editorial content)</li>
                  <li>Provide emergency services or crisis support</li>
                </ul>
                <p>
                  We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time, with or without notice. We may also impose limits on certain features or restrict access to parts or all of the Services without notice or liability.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  3. Educational Content and Medical Disclaimer
                </h2>
                <p className="mb-3">
                  All content provided on Nearby Pet Care is for educational and informational purposes only. Our content is designed to help pet owners understand general pet care practices and make informed decisions. However, it is not intended as a substitute for professional veterinary advice, diagnosis, or treatment.
                </p>
                <p className="mb-3">
                  <strong>Always seek the advice of your veterinarian or other qualified pet health provider</strong> with any questions you may have regarding your pet's health or medical condition. Never disregard professional veterinary advice or delay in seeking it because of something you have read on our website.
                </p>
                <p className="mb-3">
                  If you think your pet may have a medical emergency, call your veterinarian or emergency animal hospital immediately. Do not rely on information from our website for emergency situations.
                </p>
                <p>
                  Our content is based on widely accepted pet care practices and current understanding of animal health, nutrition, and behavior. However, individual pets may have unique needs, and what works for one pet may not work for another. Always consult with a qualified professional before making significant changes to your pet's care routine.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  4. User Accounts and Registration
                </h2>
                <p className="mb-3">
                  Most of our educational content is available without creating an account. However, to use certain features of our Services (such as subscribing to newsletters or accessing interactive tools), you may be required to create an account. When creating an account, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Provide accurate, current, and complete information about yourself</li>
                  <li>Maintain and promptly update your account information to keep it accurate, current, and complete</li>
                  <li>Maintain the security of your password and identification</li>
                  <li>Accept responsibility for all activities that occur under your account</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                  <li>Ensure you are at least 18 years old or have parental consent to use our Services</li>
                </ul>
                <p>
                  You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. We are not liable for any loss or damage arising from your failure to comply with these security obligations. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  5. User Conduct and Prohibited Activities
                </h2>
                <p className="mb-3">
                  You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Violate any applicable laws, regulations, or third-party rights</li>
                  <li>Use the Services to transmit harmful, offensive, or illegal content</li>
                  <li>Interfere with or disrupt the Services or servers connected to the Services</li>
                  <li>Attempt to gain unauthorized access to any portion of the Services</li>
                  <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
                  <li>Use automated systems (such as bots, scrapers, or crawlers) to access the Services without permission</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Post false, misleading, or fraudulent information</li>
                  <li>Copy, reproduce, or redistribute our content without permission (see Intellectual Property section)</li>
                  <li>Use our content for commercial purposes without our express written consent</li>
                </ul>
                <p>
                  Violation of these conduct rules may result in immediate termination of your account and access to our Services, and may subject you to legal action.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  6. Reviews, Comments, and User-Generated Content
                </h2>
                <p className="mb-3">
                  Our platform may allow you to post reviews, comments, questions, and other content. By posting content, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, and distribute your content. You agree that:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Your content is accurate, truthful, and based on your personal experience or knowledge</li>
                  <li>You will not post defamatory, libelous, or false information</li>
                  <li>You will not post content that violates any third-party rights</li>
                  <li>You own or have the right to post the content you submit</li>
                  <li>Your content does not contain spam, advertising, or promotional material</li>
                  <li>Your content is respectful and does not contain offensive, abusive, or inappropriate language</li>
                </ul>
                <p>
                  We reserve the right to remove, edit, or refuse to post any content that violates these Terms or that we determine is inappropriate, offensive, or harmful. We are not responsible for user-generated content and do not endorse any opinions expressed in reviews or comments. User-generated content reflects the views of the individual users and not necessarily the views of Nearby Pet Care.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  7. Intellectual Property
                </h2>
                <p className="mb-3">
                  All content, features, and functionality of our Services, including but not limited to text, graphics, logos, images, articles, guides, software, and code, are owned by Nearby Pet Care or its licensors and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="mb-3">
                  <strong>Permitted Use:</strong> You may view, download, and print content from our website for your personal, non-commercial use only. You may share links to our articles and guides on social media or other platforms, provided you do not alter the content or remove any attributions.
                </p>
                <p className="mb-3">
                  <strong>Prohibited Use:</strong> You may not:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of our content without our prior written consent</li>
                  <li>Use our content for commercial purposes without our express written permission</li>
                  <li>Remove any copyright, trademark, or other proprietary notices from our content</li>
                  <li>Use automated systems to scrape, copy, or download our content</li>
                  <li>Frame or mirror any portion of our website without our permission</li>
                </ul>
                <p>
                  If you wish to use our content for commercial purposes or in a way not permitted by these Terms, please contact us to request permission. We may grant permission on a case-by-case basis, subject to our editorial guidelines and terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  8. Third-Party Links and Content
                </h2>
                <p className="mb-3">
                  Our website may contain links to third-party websites, services, or applications that are not operated by us. These links are provided for your convenience and educational purposes. We are not responsible for the content, privacy practices, or terms of service of these third-party sites.
                </p>
                <p className="mb-3">
                  The inclusion of any link does not imply endorsement by Nearby Pet Care. We encourage you to review the terms of service and privacy policies of any third-party sites you visit. Your use of third-party websites is at your own risk.
                </p>
                <p>
                  We may also display third-party content, such as advertisements, on our website. We are not responsible for the accuracy, completeness, or reliability of third-party content. Any interactions with third-party content are solely between you and the third party.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  9. Liability and Disclaimers
                </h2>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Educational Content Disclaimer
                </h3>
                <p className="mb-3">
                  The information provided on Nearby Pet Care is for educational and informational purposes only. While we strive to provide accurate, up-to-date information based on widely accepted pet care practices, we make no representations or warranties of any kind, express or implied, about:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>The completeness, accuracy, reliability, or suitability of the information</li>
                  <li>The applicability of the information to your specific pet or situation</li>
                  <li>The results or outcomes that may result from following our guidance</li>
                </ul>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Limitation of Liability
                </h3>
                <p className="mb-3">
                  To the maximum extent permitted by law, Nearby Pet Care, its affiliates, and their respective officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Loss of profits, revenue, data, or use</li>
                  <li>Pet injury, illness, or death resulting from following our educational content</li>
                  <li>Property damage</li>
                  <li>Emotional distress</li>
                  <li>Any damages arising from the use or inability to use our Services</li>
                  <li>Any damages arising from reliance on our educational content</li>
                </ul>
                <p className="mb-3">
                  Our total liability to you for all claims arising from or related to the use of our Services shall not exceed the amount you paid to us, if any, in the 12 months preceding the claim, or $100, whichever is greater.
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  No Professional Advice
                </h3>
                <p>
                  Our content is not a substitute for professional veterinary advice, diagnosis, or treatment. Always seek the advice of your veterinarian or other qualified pet health provider with any questions you may have regarding your pet's health or medical condition. Never disregard professional veterinary advice or delay in seeking it because of something you have read on our website.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  10. Indemnification
                </h2>
                <p>
                  You agree to indemnify, defend, and hold harmless Nearby Pet Care, its affiliates, and their respective officers, directors, employees, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from: (a) your use of and access to the Services; (b) your violation of any term of these Terms; (c) your violation of any third-party right, including without limitation any copyright, property, or privacy right; or (d) any claim that your user-generated content caused damage to a third party.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  11. Dispute Resolution
                </h2>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Informal Resolution
                </h3>
                <p className="mb-3">
                  If you have a dispute with us, we encourage you to first contact us directly to attempt to resolve the dispute informally. Many disputes can be resolved through direct communication.
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Binding Arbitration
                </h3>
                <p className="mb-3">
                  If informal resolution is not successful, you agree that any dispute, controversy, or claim arising out of or relating to these Terms or the Services shall be resolved through binding arbitration, except for:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Claims that can be resolved in small claims court</li>
                  <li>Claims seeking injunctive or equitable relief</li>
                </ul>
                <p>
                  Arbitration will be conducted in accordance with applicable arbitration rules. The arbitrator's decision will be final and binding. You waive your right to a jury trial and to participate in a class action lawsuit.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  12. Termination
                </h2>
                <p className="mb-3">
                  We reserve the right to terminate or suspend your account and access to our Services immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Your right to use the Services will immediately cease</li>
                  <li>We may delete your account and all associated information</li>
                  <li>Any content you have posted may be removed</li>
                </ul>
                <p>
                  You may terminate your account at any time by contacting us or using account deletion features if available. All provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, limitations of liability, and indemnification obligations.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  13. Modifications to Terms
                </h2>
                <p>
                  We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms on this page with a new "Last updated" date, and in some cases, we may provide additional notice such as email notification. Your continued use of the Services after any changes constitutes your acceptance of the new Terms. If you do not agree to the modified Terms, you must stop using the Services.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  14. Governing Law
                </h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Nearby Pet Care operates, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts of that jurisdiction.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  15. Severability
                </h2>
                <p>
                  If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect and enforceable.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  16. Entire Agreement
                </h2>
                <p>
                  These Terms, together with our Privacy Policy and Disclaimer, constitute the entire agreement between you and Nearby Pet Care regarding the use of our Services and supersede all prior agreements and understandings, whether written or oral, relating to the subject matter of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  17. Contact Information
                </h2>
                <p className="mb-3">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 dark:bg-gray-900/50 p-4 sm:p-6 rounded-lg">
                  <p className="mb-2">
                    <strong className="text-gray-900 dark:text-white">Email:</strong>{' '}
                  <a href="mailto:legal@nearbypetcare.com" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors">
                    legal@nearbypetcare.com
                  </a>
                </p>
                  <p className="mb-2">
                    <strong className="text-gray-900 dark:text-white">Website:</strong>{' '}
                    <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors">
                      Contact Us Page
                    </Link>
                  </p>
                  <p>
                    We will respond to your inquiry as soon as possible and work with you to address any concerns you may have.
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
