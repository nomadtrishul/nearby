'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const supabase = createClient();

      const { error } = await supabase
        .from('petcare_contact')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            subject: formData.subject,
            message: formData.message
          }
        ]);

      if (error) {
        throw error;
      }

      // Success: Show success message and reset form
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Sorry, there was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: '✉️',
      title: 'Email',
      content: 'trishuldn@gmail.com',
      link: 'mailto:trishuldn@gmail.com'
    },
    {
      icon: '🌐',
      title: 'Online Platform',
      content: 'Available 24/7',
      link: '#'
    },
    {
      icon: '💬',
      title: 'Support',
      content: 'We respond within 24 hours',
      link: '#'
    }
  ];

  // ContactPage Structured Data
  const contactStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Nearby Pet Care',
    description: 'Get in touch with Nearby Pet Care. We\'re an online platform connecting pet owners with trusted care providers. We\'re here to help with any questions or concerns.',
    url: 'https://nearbypetcare.com/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'Nearby Pet Care',
      url: 'https://nearbypetcare.com',
      description: 'Online platform connecting pet owners with trusted pet care providers',
      email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@nearbypetcare.com',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'trishuldn@gmail.com',
        areaServed: 'US',
        availableLanguage: ['English']
      }
    }
  };

  // Breadcrumb Structured Data
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://nearbypetcare.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Contact',
        item: 'https://nearbypetcare.com/contact'
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      {/* Hero Section */}
      <section className="relative pb-16 sm:pb-20 md:pb-24 lg:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10 pt-16 sm:pt-20 md:pt-24 lg:pt-28">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-white/10 backdrop-blur-md border border-blue-200/50 dark:border-white/20 rounded-full shadow-sm">
              <span className="text-2xl">💬</span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">We're Here to Help</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Let's Connect
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                We're Listening
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 max-w-3xl mx-auto leading-relaxed font-medium">
              Have questions about our platform? Need help finding the right pet care provider? Want to share feedback? We'd love to hear from you.
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
              As an online platform connecting pet owners with trusted care providers, we're committed to making your experience seamless and supportive. Drop us a message and we'll get back to you within 24 hours.
            </p>

            {/* Key Points */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              {[
                { icon: '⚡', text: 'Quick Response' },
                { icon: '🤝', text: 'Friendly Support' },
                { icon: '💡', text: 'Expert Guidance' }
              ].map((point, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm"
                >
                  <span>{point.icon}</span>
                  <span>{point.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="block p-6 sm:p-8 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl hover:border-blue-500/50 transition-all duration-300 text-center"
              >
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{info.icon}</div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 transition-colors">
                  {info.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 transition-colors">
                  {info.content}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto">
            <div className="p-6 sm:p-8 md:p-12 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center transition-colors">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-white/20 rounded-lg text-sm sm:text-base text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-white/20 rounded-lg text-sm sm:text-base text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-white/20 rounded-lg text-sm sm:text-base text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-white/20 rounded-lg text-sm sm:text-base text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select an inquiry type</option>
                    <option value="website-ads">Website Ads</option>
                    <option value="content-questions">Content Related Questions</option>
                    <option value="general">General</option>
                    <option value="writing-content">Writing Content for Website</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-white/20 rounded-lg text-sm sm:text-base text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

