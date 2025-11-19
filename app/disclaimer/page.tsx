import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Medical & Informational Disclaimer | Nearby Pet Care',
  description: 'Important disclaimer regarding medical and informational content on Nearby Pet Care. Always consult with a veterinarian for professional advice.',
  keywords: ['disclaimer', 'medical disclaimer', 'pet care disclaimer', 'veterinary advice', 'pet health disclaimer'],
  openGraph: { 
    title: 'Medical & Informational Disclaimer | Nearby Pet Care', 
    description: 'Important disclaimer regarding medical and informational content on our educational platform.', 
    type: 'website', 
    url: 'https://nearbypetcare.com/disclaimer' 
  },
  alternates: { canonical: 'https://nearbypetcare.com/disclaimer' },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Medical & Informational Disclaimer</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              The information provided on Nearby Pet Care is for general informational and educational purposes only and is not intended as a substitute for professional veterinary advice, diagnosis, or treatment. This disclaimer applies to all content on our website, including articles, guides, blog posts, tools, and any other educational materials.
            </p>

            <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Not Veterinary Advice</h2>
              <p className="mb-4">
                Nearby Pet Care is an independent educational platform that provides practical, step-by-step guidance on pet care based on widely accepted pet care practices. However, <strong>our content is not a substitute for professional veterinary care</strong>.
              </p>
              <p className="mb-4">
              Always seek the advice of your veterinarian or other qualified pet health provider with any questions you may have regarding your pet's health or medical condition. Never disregard professional veterinary advice or delay in seeking it because of something you have read on this website.
            </p>
              <p className="mb-4">
                Our educational content is designed to help you understand general pet care principles and make informed decisions, but it cannot account for your pet's individual health status, medical history, breed-specific needs, or unique circumstances. What works for one pet may not be appropriate for another.
              </p>
            </section>

            <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Emergency Situations</h2>
              <p className="mb-4">
                If you think your pet may have a medical emergency, call your veterinarian or emergency animal hospital immediately. Do not rely on information from our website for emergency situations. Our educational content is not designed to address urgent medical needs or life-threatening conditions.
              </p>
              <p className="mb-4">
                Signs that may indicate a veterinary emergency include but are not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Difficulty breathing or severe respiratory distress</li>
                <li>Unconsciousness or collapse</li>
                <li>Severe trauma or injury</li>
                <li>Seizures or convulsions</li>
                <li>Severe vomiting or diarrhea, especially with blood</li>
                <li>Inability to urinate or defecate</li>
                <li>Signs of extreme pain or distress</li>
                <li>Suspected poisoning or ingestion of toxic substances</li>
                <li>Severe allergic reactions</li>
                <li>Any sudden, severe change in your pet's behavior or condition</li>
              </ul>
              <p className="mb-4">
                When in doubt, contact your veterinarian or an emergency veterinary clinic immediately. It is always better to err on the side of caution when it comes to your pet's health.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Individual Pet Needs</h2>
              <p className="mb-4">
                Every pet is unique, with individual health needs, medical history, breed characteristics, age, and lifestyle factors. Our educational content provides general guidance based on widely accepted pet care practices, but it cannot replace personalized advice from a qualified veterinarian who knows your pet's specific situation.
              </p>
              <p className="mb-4">
                Factors that may affect how our guidance applies to your pet include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Age (puppy/kitten, adult, senior)</li>
                <li>Breed and size</li>
                <li>Existing medical conditions</li>
                <li>Current medications or treatments</li>
                <li>Allergies or sensitivities</li>
                <li>Activity level and lifestyle</li>
                <li>Previous medical history</li>
                <li>Environmental factors</li>
              </ul>
              <p className="mb-4">
                Always consult with your veterinarian before making significant changes to your pet's diet, exercise routine, medication, or care regimen, especially if your pet has existing health conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Content Accuracy and Updates</h2>
              <p className="mb-4">
                We strive to provide accurate, up-to-date information based on widely accepted pet care practices and current understanding of animal health, nutrition, and behavior. However, pet care knowledge evolves over time, and new research may change best practices.
              </p>
              <p className="mb-4">
                We make no representations or warranties regarding:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>The completeness, accuracy, or timeliness of the information</li>
                <li>The applicability of the information to your specific pet or situation</li>
                <li>The results or outcomes that may result from following our guidance</li>
                <li>Whether the information reflects the most current veterinary standards or research</li>
              </ul>
              <p className="mb-4">
                While we regularly review and update our content, we cannot guarantee that all information is current or complete. Veterinary medicine and pet care practices continue to evolve, and what was considered best practice yesterday may be updated tomorrow.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">No Professional Relationship</h2>
              <p className="mb-4">
                Using our website or reading our content does not create a veterinarian-client relationship, professional relationship, or any other type of professional relationship between you and Nearby Pet Care. We are an independent educational platform, not a veterinary practice, clinic, or professional service provider.
              </p>
              <p className="mb-4">
                Our content is provided for educational purposes only. We do not:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide veterinary services, medical advice, or professional consultations</li>
                <li>Diagnose, treat, or prescribe for any pet health condition</li>
                <li>Establish a veterinarian-client relationship</li>
                <li>Provide emergency services or crisis support</li>
                <li>Replace the need for regular veterinary care and check-ups</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Limitation of Liability</h2>
              <p className="mb-4">
                To the maximum extent permitted by law, Nearby Pet Care, its affiliates, and their respective officers, directors, employees, and agents shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Your use of or reliance on information from our website</li>
                <li>Any actions you take based on our educational content</li>
                <li>Pet injury, illness, or death resulting from following our guidance</li>
                <li>Any errors or omissions in our content</li>
                <li>Any delay or failure in updating our content</li>
              </ul>
              <p className="mb-4">
                You acknowledge that you use our educational content at your own risk and that you are solely responsible for decisions made regarding your pet's care. Always consult with a qualified veterinarian before making decisions about your pet's health and wellbeing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Third-Party Information and Links</h2>
              <p className="mb-4">
                Our website may contain links to third-party websites, resources, or information. We are not responsible for the accuracy, completeness, or reliability of information from third-party sources. The inclusion of any link or reference does not imply endorsement by Nearby Pet Care.
              </p>
              <p className="mb-4">
                We encourage you to verify information from third-party sources and to consult with your veterinarian about any information you find, whether on our website or elsewhere.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Your Responsibility</h2>
              <p className="mb-4">
                As a pet owner, you are responsible for:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Seeking professional veterinary advice for your pet's health concerns</li>
                <li>Consulting with your veterinarian before making significant changes to your pet's care</li>
                <li>Providing accurate information to your veterinarian about your pet's condition and history</li>
                <li>Following your veterinarian's recommendations and treatment plans</li>
                <li>Ensuring your pet receives regular veterinary check-ups and preventive care</li>
                <li>Using our educational content as a supplement to, not a replacement for, professional veterinary care</li>
              </ul>
              <p className="mb-4">
                Our educational content is designed to help you become a more informed pet owner and to facilitate better communication with your veterinarian, not to replace professional veterinary care.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Contact Your Veterinarian</h2>
              <p className="mb-4">
                If you have questions or concerns about your pet's health, behavior, or care, please contact your veterinarian. Your veterinarian is the best source of advice for your pet's specific needs and can provide personalized guidance based on your pet's individual circumstances.
              </p>
              <p className="mb-4">
                For general questions about our educational content or website, you can contact us through our <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact Us</Link> page. However, we cannot provide veterinary advice or answer questions about your pet's specific health concerns.
              </p>
            </section>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-8">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">Remember:</p>
              <p className="text-gray-700 dark:text-gray-300">
                Our educational content is a valuable resource for learning about pet care, but it should always be used in conjunction with professional veterinary care. When in doubt, consult your veterinarian. Your pet's health and wellbeing are too important to rely solely on online information.
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
