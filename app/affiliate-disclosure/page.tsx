import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import {
    generateSEOMetadata,
    generateWebPageStructuredData,
    generateBreadcrumbStructuredData,
    jsonLdScriptProps,
} from '@/lib/seo-utils';

export const metadata: Metadata = generateSEOMetadata({
    title: 'Affiliate Disclosure',
    description: 'Affiliate Disclosure for Nearby Pet Care. Transparency regarding our funding, affiliate partnerships, and commitment to unbiased content.',
    pathname: '/affiliate-disclosure',
    type: 'website',
});

export default function AffiliateDisclosurePage() {
    const breadcrumbs = [
        { name: 'Home', url: '/' },
        { name: 'Affiliate Disclosure', url: '/affiliate-disclosure' },
    ];

    const webPageStructuredData = generateWebPageStructuredData({
        name: 'Affiliate Disclosure',
        description: 'Affiliate Disclosure for Nearby Pet Care. Transparency regarding our funding, affiliate partnerships, and commitment to unbiased content.',
        url: '/affiliate-disclosure',
        breadcrumbs,
    });

    const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);

    return (
        <>
            <script {...jsonLdScriptProps(breadcrumbStructuredData)} />
            <script {...jsonLdScriptProps(webPageStructuredData)} />

            <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
                <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
                    <div className="container mx-auto max-w-7xl">
                        <div className="max-w-4xl mx-auto">
                            <Breadcrumb items={[
                                { name: 'Home', href: '/' },
                                { name: 'Affiliate Disclosure', href: '/affiliate-disclosure' }
                            ]} />

                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 transition-colors mt-6">
                                Affiliate Disclosure
                            </h1>

                            <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 sm:space-y-6 transition-colors">
                                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500" suppressHydrationWarning>
                                    Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </p>

                                <div className="space-y-4 sm:space-y-6">
                                    <p>
                                        Nearby Pet Care ("we," "us," or "our") believes in full transparency and honesty on the web. In compliance with the Federal Trade Commission (FTC) guidelines, this Affiliate Disclosure is provided to inform you that certain links on our website (https://www.nearbypetcare.com) are affiliate links. This means that we may earn a commission if you click on or make a purchase via these links, at no additional cost to you.
                                    </p>
                                    <p>
                                        The purpose of this disclosure is to clearly explain our financial relationships with various companies and how these relationships may affect the content you see on our platform. We are committed to maintaining the highest standards of integrity and editorial independence.
                                    </p>
                                </div>

                                <section>
                                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                                        1. Our Commitment to Independence
                                    </h2>
                                    <p className="mb-3">
                                        Nearby Pet Care is an independent educational platform. We are not owned by, employed by, or exclusively affiliated with any specific pet food company, veterinary network, or product manufacturer. Our primary mission is to provide accurate, helpful, and research-backed information to pet owners.
                                    </p>
                                    <p>
                                        While we may receive compensation through affiliate links, this financial relationship does not dictate our content, recommendations, or reviews. We only recommend products, services, and resources that we have researched, used, or believe will provide significant value to our readers. If a product does not meet our standards, we will not recommend it, regardless of any potential commission.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                                        2. Amazon Services LLC Associates Program
                                    </h2>
                                    <p className="mb-3">
                                        Nearby Pet Care is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
                                    </p>
                                    <p>
                                        As an Amazon Associate, we earn from qualifying purchases. This means that if you click on a link to an Amazon product on our site and make a purchase, we may receive a small commission. This commission comes at no extra cost to you and helps support the ongoing operation and maintenance of our website.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                                        3. How Affiliate Links Work
                                    </h2>
                                    <p className="mb-3">
                                        An affiliate link is a specific URL that contains a tracking code. It works as follows:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                                        <li>When you click on an affiliate link on our website, a cookie is placed on your browser to track any sales for purposes of assigning commission.</li>
                                        <li>If you proceed to purchase a product, the merchant recognizes that you came from our site and pays us a percentage of the sale price as a commission.</li>
                                        <li><strong>No Additional Cost:</strong> The price you pay for the item is exactly the same whether you use our affiliate link or go directly to the vendor's website. In some cases, our links may even provide you with a discount code.</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                                        4. Editorial Integrity & Reviews
                                    </h2>
                                    <p className="mb-3">
                                        Our editorial content is produced independently of any affiliate partnerships. Our writers and editors are instructed to prioritize the reader's interest above all else.
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                                        <li>We do not accept payment in exchange for positive reviews.</li>
                                        <li>We do not allow brands to preview or approve our content before publication.</li>
                                        <li>If we receive a free product for review purposes, we will clearly disclose this in the specific review. Receiving a free product does not guarantee a positive review.</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                                        5. Sponsored Content
                                    </h2>
                                    <p className="mb-3">
                                        Occasionally, we may publish sponsored content, which is paid for by an advertiser. In such cases, we will clearly label the content as "Sponsored" or "Paid Partnership" at the beginning of the article to ensure you are fully aware of the nature of the content. We maintain strict editorial guidelines for sponsored content to ensure it aligns with our values and provides value to our readers.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                                        6. Limitation of Liability
                                    </h2>
                                    <p className="mb-3">
                                        While we strive to provide accurate and up-to-date information, the information presented on Nearby Pet Care is for educational purposes only. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the products or services mentioned.
                                    </p>
                                    <p>
                                        Any reliance you place on such information is strictly at your own risk. We are not liable for any losses or damages in connection with the use of our website or the products mentioned herein.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-6 sm:mt-8 transition-colors">
                                        7. Contact Us
                                    </h2>
                                    <p className="mb-3">
                                        If you have any questions regarding this Affiliate Disclosure or our partnerships, please do not hesitate to contact us. We are happy to clarify our policies and practices.
                                    </p>
                                    <div className="bg-gray-50 dark:bg-gray-900/50 p-4 sm:p-6 rounded-lg">
                                        <p className="mb-2">
                                            <strong className="text-gray-900 dark:text-white">Email:</strong>{' '}
                                            <a href="mailto:trishuldn@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors">
                                                trishuldn@gmail.com
                                            </a>
                                        </p>
                                        <p>
                                            <strong className="text-gray-900 dark:text-white">Website:</strong>{' '}
                                            <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors">
                                                Contact Page
                                            </Link>
                                        </p>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
