'use client';

import { useState } from 'react';

export default function BookPage() {
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    petName: '',
    petType: '',
    ownerName: '',
    email: '',
    phone: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert('Booking request submitted! We will confirm your appointment shortly.');
    setFormData({
      service: '',
      date: '',
      time: '',
      petName: '',
      petType: '',
      ownerName: '',
      email: '',
      phone: '',
      notes: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    'Pet Grooming',
    'Pet Boarding',
    'Daycare',
    'Training',
    'Veterinary Consultation'
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">
              Book an Appointment
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 transition-colors">
              Schedule a service for your pet today. We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto">
            <div className="p-6 sm:p-8 md:p-12 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="service" className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                    Service Type *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-white/20 rounded-lg text-sm sm:text-base text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-white/20 rounded-lg text-sm sm:text-base text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                      Preferred Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-white/20 rounded-lg text-sm sm:text-base text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="petName" className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                      Pet Name *
                    </label>
                    <input
                      type="text"
                      id="petName"
                      name="petName"
                      required
                      value={formData.petName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-white/20 rounded-lg text-sm sm:text-base text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your pet's name"
                    />
                  </div>
                  <div>
                    <label htmlFor="petType" className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                      Pet Type *
                    </label>
                    <select
                      id="petType"
                      name="petType"
                      required
                      value={formData.petType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-white/20 rounded-lg text-sm sm:text-base text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select type</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="bird">Bird</option>
                      <option value="rabbit">Rabbit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="ownerName" className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                    Owner Name *
                  </label>
                  <input
                    type="text"
                    id="ownerName"
                    name="ownerName"
                    required
                    value={formData.ownerName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-white/20 rounded-lg text-sm sm:text-base text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
                  <div>
                    <label htmlFor="phone" className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-white/20 rounded-lg text-sm sm:text-base text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-white/20 rounded-lg text-sm sm:text-base text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Any special instructions or information we should know..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

