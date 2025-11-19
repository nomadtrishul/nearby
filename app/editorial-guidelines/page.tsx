import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Editorial Guidelines & Policy | Nearby Pet Care',
  description: 'Learn about our editorial guidelines, content standards, and sourcing policies. How we ensure quality and accuracy in our educational pet care content.',
  keywords: ['editorial guidelines', 'content policy', 'editorial standards', 'content quality', 'pet care content'],
  openGraph: { 
    title: 'Editorial Guidelines & Policy | Nearby Pet Care', 
    description: 'Learn about our editorial guidelines and content standards for educational pet care information.', 
    type: 'website', 
    url: 'https://nearbypetcare.com/editorial-guidelines' 
  },
  alternates: { canonical: 'https://nearbypetcare.com/editorial-guidelines' },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EditorialGuidelinesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Editorial Guidelines & Policy</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              At Nearby Pet Care, we are committed to providing accurate, helpful, and trustworthy educational information about pet care. This page outlines our editorial standards, content creation process, and the principles that guide everything we publish.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Our Mission</h2>
              <p className="mb-4">
                Nearby Pet Care is an independent educational platform dedicated to helping pet owners make informed decisions about everyday pet care. We provide practical, step-by-step guidance on nutrition, health, grooming, training, behavior, product selection, and overall pet wellbeing. All content is designed to be easy to understand and based on widely accepted pet care practices.
              </p>
              <p className="mb-4">
                We operate solely as an informational resource and do not represent any business, clinic, or service provider. Our goal is to empower pet owners with knowledge, not to sell services or products.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Content Standards</h2>
              <p className="mb-4">
                All content published on Nearby Pet Care must meet our high standards for accuracy, clarity, and helpfulness. Our editorial team reviews all content before publication to ensure it meets these criteria:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Accuracy</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>All information must be factually accurate and based on widely accepted pet care practices</li>
                <li>Content must reflect current understanding of animal health, nutrition, and behavior</li>
                <li>Claims must be supported by reputable sources (see Sourcing section below)</li>
                <li>We clearly distinguish between established facts and emerging research or opinions</li>
                <li>We acknowledge when information is evolving or when there are differing viewpoints</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Clarity</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Content is written in clear, simple language that all pet owners can understand</li>
                <li>We avoid unnecessary jargon and explain technical terms when they must be used</li>
                <li>Information is organized logically with clear headings and structure</li>
                <li>Step-by-step instructions are provided when applicable</li>
                <li>We use examples and analogies to make complex topics more accessible</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Helpfulness</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Content must provide practical, actionable guidance that pet owners can use</li>
                <li>We focus on answering real questions and solving common problems</li>
                <li>Information is presented in a way that helps pet owners make informed decisions</li>
                <li>We include relevant context and background information when needed</li>
                <li>Content addresses different experience levels, from first-time pet owners to experienced caregivers</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Completeness</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Articles and guides cover topics comprehensively within their scope</li>
                <li>We address common questions and concerns related to each topic</li>
                <li>Important caveats, warnings, and limitations are clearly stated</li>
                <li>We provide links to related content when helpful</li>
                <li>Content is regularly reviewed and updated to ensure it remains current and complete</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Sourcing and Research</h2>
              <p className="mb-4">
                We are committed to providing evidence-based information. Our content is sourced from reputable, authoritative sources, and we clearly distinguish between facts and opinions.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Primary Sources</h3>
              <p className="mb-3">We prioritize information from:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Veterinary medical associations and professional organizations</li>
                <li>Peer-reviewed veterinary journals and scientific research</li>
                <li>Established pet care organizations and animal welfare groups</li>
                <li>Certified veterinary professionals and animal behaviorists</li>
                <li>Government agencies and regulatory bodies (e.g., FDA, USDA)</li>
                <li>Academic institutions and veterinary schools</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Source Evaluation</h3>
              <p className="mb-3">Before using a source, we evaluate it for:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Authority and credibility of the author or organization</li>
                <li>Recency and relevance of the information</li>
                <li>Objectivity and lack of commercial bias</li>
                <li>Alignment with widely accepted practices</li>
                <li>Quality of research methodology (for scientific studies)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Citation Practices</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>We cite sources where appropriate, especially for health and medical information</li>
                <li>Specific citations are provided within individual articles when applicable</li>
                <li>Our <Link href="/sources" className="text-blue-600 dark:text-blue-400 hover:underline">Sources page</Link> provides general information about our sourcing practices</li>
                <li>We link to original sources when available and accessible</li>
                <li>We acknowledge when information is based on general consensus rather than specific studies</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Conflicting Information</h3>
              <p className="mb-4">
                When there are conflicting viewpoints or evolving research on a topic, we:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Present multiple perspectives when appropriate</li>
                <li>Explain the current consensus and any areas of debate</li>
                <li>Recommend consulting with a veterinarian for personalized advice</li>
                <li>Update content as new information becomes available</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Content Creation Process</h2>
              <p className="mb-4">
                Our content goes through a rigorous process to ensure quality and accuracy:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Research and Planning</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Topics are selected based on pet owner needs and common questions</li>
                <li>We research current best practices and widely accepted information</li>
                <li>We identify key points and structure content logically</li>
                <li>We consider the target audience and their experience level</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Writing and Development</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Content is written in clear, accessible language</li>
                <li>We use practical examples and step-by-step instructions</li>
                <li>Important warnings and disclaimers are included where necessary</li>
                <li>We ensure content aligns with our mission as an educational platform</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Review and Editing</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>All content is reviewed for accuracy, clarity, and completeness</li>
                <li>We verify facts and check sources</li>
                <li>Content is edited for grammar, style, and readability</li>
                <li>We ensure medical disclaimers are appropriately placed</li>
                <li>Content is checked to ensure it doesn't make unsubstantiated claims</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Publication and Updates</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Content is published only after meeting all editorial standards</li>
                <li>We regularly review and update content to ensure it remains current</li>
                <li>We correct errors promptly when they are identified</li>
                <li>We update content when new information becomes available</li>
                <li>We monitor feedback and questions to identify areas for improvement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Independence and Objectivity</h2>
              <p className="mb-4">
                As an independent educational platform, we maintain strict editorial independence:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>We do not accept payment for positive coverage of products, services, or businesses</li>
                <li>Our content is not influenced by advertisers or sponsors</li>
                <li>We clearly disclose any potential conflicts of interest when they exist</li>
                <li>We do not represent any business, clinic, or service provider</li>
                <li>Our recommendations are based on educational value, not commercial relationships</li>
                <li>We provide balanced information even when discussing products or services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Medical and Health Content</h2>
              <p className="mb-4">
                For content related to pet health and medical topics, we follow additional guidelines:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>We emphasize that our content is educational, not a substitute for veterinary care</li>
                <li>We include clear disclaimers directing readers to consult veterinarians</li>
                <li>We focus on general information and widely accepted practices</li>
                <li>We avoid providing specific diagnoses or treatment recommendations</li>
                <li>We highlight when professional veterinary care is essential</li>
                <li>We provide information about recognizing when to seek veterinary care</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Corrections and Updates</h2>
              <p className="mb-4">
                We are committed to accuracy and transparency:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>We correct errors promptly when they are identified</li>
                <li>We update content regularly to reflect current best practices</li>
                <li>We acknowledge significant corrections when appropriate</li>
                <li>We welcome feedback and questions from readers</li>
                <li>We review content periodically to ensure it remains accurate and relevant</li>
              </ul>
              <p className="mb-4">
                If you notice an error or have concerns about our content, please contact us through our <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact Us</Link> page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">User-Generated Content</h2>
              <p className="mb-4">
                When we allow user-generated content (such as comments or reviews), we:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Moderate content to ensure it meets our community standards</li>
                <li>Remove content that is inaccurate, harmful, or violates our terms</li>
                <li>Clearly distinguish user-generated content from our editorial content</li>
                <li>Do not endorse opinions expressed in user-generated content</li>
                <li>Reserve the right to edit or remove content that doesn't meet our standards</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have questions about our editorial guidelines or concerns about our content, please contact us through our <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact Us</Link> page. We value feedback and are committed to maintaining the highest standards for our educational content.
              </p>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
