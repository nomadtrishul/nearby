import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Nearby Pet Care',
  description: 'Terms of Service for Nearby Pet Care. Read our terms and conditions for using our pet care services platform.',
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
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                <p>
                  Welcome to Nearby Pet Care. These Terms of Service ("Terms") govern your access to and use of our website, mobile applications, and services (collectively, the "Services"). Please read these Terms carefully before using our Services.
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
                  By accessing and using Nearby Pet Care services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use our Services. These Terms apply to all users of the Services, including without limitation users who are browsers, customers, merchants, and contributors of content.
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
                  Nearby Pet Care provides a platform that connects pet owners with professional pet care service providers. Our Services include:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Online platform for browsing and discovering pet care services in your area</li>
                  <li>Booking and scheduling services for grooming, boarding, daycare, and training</li>
                  <li>Information and resources about pet care, health, and wellness</li>
                  <li>Communication tools to connect with service providers</li>
                  <li>Payment processing for service bookings</li>
                </ul>
                <p className="mb-3">
                  We act as an intermediary platform connecting pet owners with independent service providers. We do not directly provide pet care services ourselves, but rather facilitate connections between pet owners and qualified service providers. All services are provided by independent third-party providers who are responsible for the quality and delivery of their services.
                </p>
                <p>
                  We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time, with or without notice. We may also impose limits on certain features or restrict access to parts or all of the Services without notice or liability.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  3. User Accounts and Registration
                </h2>
                <p className="mb-3">
                  To use certain features of our Services, you may be required to create an account. When creating an account, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Provide accurate, current, and complete information about yourself and your pets</li>
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
                  4. Booking and Cancellation Policies
                </h2>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Booking Requirements
                </h3>
                <p className="mb-3">
                  All service bookings must be made in advance through our platform. Bookings are subject to availability and confirmation by the service provider. We recommend booking as early as possible, especially during peak seasons or holidays, to ensure availability.
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Cancellation and Refund Policy
                </h3>
                <p className="mb-3">
                  Cancellation policies vary by service type and provider. Generally:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Cancellations made at least 24 hours in advance are typically eligible for a full refund or credit</li>
                  <li>Cancellations made less than 24 hours in advance may be subject to a cancellation fee</li>
                  <li>No-shows or same-day cancellations may result in forfeiture of payment</li>
                  <li>Emergency situations and extenuating circumstances will be considered on a case-by-case basis</li>
                </ul>
                <p className="mb-3">
                  Specific cancellation policies will be clearly stated at the time of booking. Service providers may have their own cancellation policies that apply in addition to our general policies. Refunds, when applicable, will be processed to the original payment method within 5-10 business days.
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Rescheduling
                </h3>
                <p>
                  You may request to reschedule your booking, subject to availability. Rescheduling requests should be made as early as possible. Service providers reserve the right to approve or deny rescheduling requests based on availability and their policies.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  5. Pet Health and Safety Requirements
                </h2>
                <p className="mb-3">
                  To ensure the safety and well-being of all pets in our care network, we require that all pets meet certain health and safety standards:
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Vaccination Requirements
                </h3>
                <p className="mb-3">
                  All pets must be up-to-date on required vaccinations as specified by the service provider. Common requirements include:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Dogs: DHPP, Rabies, Bordetella (kennel cough), and Canine Influenza as required</li>
                  <li>Cats: FVRCP, Rabies, and Feline Leukemia as required</li>
                  <li>Proof of vaccination must be provided before services can be rendered</li>
                </ul>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Health and Behavior Standards
                </h3>
                <p className="mb-3">
                  Service providers reserve the right to refuse service to pets that:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Show signs of illness, contagious conditions, or parasites</li>
                  <li>Display aggressive behavior that poses a risk to staff, other pets, or themselves</li>
                  <li>Have not been properly socialized or trained for the requested service</li>
                  <li>Have medical conditions that cannot be safely accommodated</li>
                </ul>
                <p>
                  You are responsible for accurately disclosing your pet's health status, behavioral issues, and any special needs when making a booking. Failure to disclose relevant information may result in service refusal and may affect your ability to use our Services in the future.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  6. Payment Terms
                </h2>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Payment Methods
                </h3>
                <p className="mb-3">
                  We accept various payment methods including credit cards, debit cards, and digital payment platforms. Payment is typically required at the time of booking, unless other arrangements have been made with the service provider.
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Pricing and Fees
                </h3>
                <p className="mb-3">
                  Service prices are set by individual service providers and may vary. Prices displayed on our platform are subject to change without notice. Additional fees may apply for:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Additional services or add-ons requested at the time of service</li>
                  <li>Special handling requirements or accommodations</li>
                  <li>Holiday or peak season surcharges</li>
                  <li>Late cancellation or no-show fees</li>
                </ul>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Platform Fees
                </h3>
                <p>
                  We may charge a platform or service fee for facilitating bookings through our platform. This fee, if applicable, will be clearly disclosed at the time of booking. All fees are non-refundable unless otherwise stated in our cancellation policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  7. Liability and Disclaimers
                </h2>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Service Provider Responsibility
                </h3>
                <p className="mb-3">
                  Nearby Pet Care acts as an intermediary platform connecting pet owners with independent service providers. We are not responsible for the quality, safety, or delivery of services provided by third-party service providers. Each service provider is an independent business entity responsible for their own services, insurance, and compliance with applicable laws and regulations.
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Limitation of Liability
                </h3>
                <p className="mb-3">
                  To the maximum extent permitted by law, Nearby Pet Care, its affiliates, and their respective officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Loss of profits, revenue, data, or use</li>
                  <li>Pet injury, illness, or death</li>
                  <li>Property damage</li>
                  <li>Emotional distress</li>
                  <li>Any damages arising from the use or inability to use our Services</li>
                </ul>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Pet Owner Responsibility
                </h3>
                <p className="mb-3">
                  As a pet owner, you are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Accurately disclosing your pet's health, behavior, and special needs</li>
                  <li>Ensuring your pet is properly vaccinated and in good health</li>
                  <li>Providing accurate emergency contact information</li>
                  <li>Any pre-existing conditions or injuries your pet may have</li>
                  <li>Costs associated with emergency veterinary care if needed</li>
                </ul>
                <p>
                  While service providers take every reasonable precaution to ensure your pet's safety, pet owners acknowledge that there are inherent risks associated with pet care services, and they assume responsibility for these risks.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  8. Insurance and Coverage
                </h2>
                <p className="mb-3">
                  Service providers are encouraged to maintain appropriate insurance coverage for their services. However, we do not guarantee that all service providers carry insurance. We recommend that pet owners:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Verify insurance coverage with service providers before booking</li>
                  <li>Maintain their own pet insurance for comprehensive coverage</li>
                  <li>Understand the limitations of any insurance coverage</li>
                </ul>
                <p>
                  Nearby Pet Care maintains general liability insurance, but this coverage does not extend to services provided by third-party service providers. Each service provider is responsible for their own insurance and liability coverage.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  9. User Conduct and Prohibited Activities
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
                  <li>Use automated systems to access the Services without permission</li>
                  <li>Harass, abuse, or harm other users or service providers</li>
                  <li>Post false, misleading, or fraudulent information</li>
                </ul>
                <p>
                  Violation of these conduct rules may result in immediate termination of your account and access to our Services, and may subject you to legal action.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  10. Reviews and Content
                </h2>
                <p className="mb-3">
                  Our platform may allow you to post reviews, ratings, comments, and other content. By posting content, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, and distribute your content. You agree that:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Your content is accurate, truthful, and based on your personal experience</li>
                  <li>You will not post defamatory, libelous, or false information</li>
                  <li>You will not post content that violates any third-party rights</li>
                  <li>You own or have the right to post the content you submit</li>
                </ul>
                <p>
                  We reserve the right to remove, edit, or refuse to post any content that violates these Terms or that we determine is inappropriate, offensive, or harmful. We are not responsible for user-generated content and do not endorse any opinions expressed in reviews or comments.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  11. Intellectual Property
                </h2>
                <p className="mb-3">
                  All content, features, and functionality of our Services, including but not limited to text, graphics, logos, images, software, and code, are owned by Nearby Pet Care or its licensors and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services without our prior written consent, except as necessary to use the Services for their intended purpose.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  12. Dispute Resolution
                </h2>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-4 transition-colors">
                  Informal Resolution
                </h3>
                <p className="mb-3">
                  If you have a dispute with a service provider or with us, we encourage you to first contact us directly to attempt to resolve the dispute informally. Many disputes can be resolved through direct communication.
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
                  13. Termination
                </h2>
                <p className="mb-3">
                  We reserve the right to terminate or suspend your account and access to our Services immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Your right to use the Services will immediately cease</li>
                  <li>We may delete your account and all associated information</li>
                  <li>Any outstanding bookings may be cancelled in accordance with our cancellation policy</li>
                </ul>
                <p>
                  You may terminate your account at any time by contacting us or using account deletion features if available. All provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  14. Modifications to Terms
                </h2>
                <p>
                  We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms on this page with a new "Last updated" date, and in some cases, we may provide additional notice such as email notification. Your continued use of the Services after any changes constitutes your acceptance of the new Terms. If you do not agree to the modified Terms, you must stop using the Services.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  15. Governing Law
                </h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Nearby Pet Care operates, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts of that jurisdiction.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  16. Severability
                </h2>
                <p>
                  If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect and enforceable.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  17. Entire Agreement
                </h2>
                <p>
                  These Terms, together with our Privacy Policy, constitute the entire agreement between you and Nearby Pet Care regarding the use of our Services and supersede all prior agreements and understandings, whether written or oral, relating to the subject matter of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                  18. Contact Information
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
