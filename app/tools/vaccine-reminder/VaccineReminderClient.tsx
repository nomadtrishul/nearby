'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import Loader from "@/components/Loader";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Download, X, Facebook, Instagram, MessageCircle, Send, Linkedin, Copy, Check } from "lucide-react";

interface Vaccine {
  name: string;
  dueDate: string;
  daysUntil: number;
}

interface Pet {
  id: string;
  name: string;
  type: 'dog' | 'cat';
  birthDate: string;
  lastVaccineDate: string;
}

export default function VaccineReminderClient() {
  const [pets, setPets] = useState<Pet[]>([{ id: '1', name: '', type: 'dog', birthDate: '', lastVaccineDate: '' }]);
  const [email, setEmail] = useState<string>('');
  const [reminders, setReminders] = useState<{ pet: string; vaccines: Vaccine[] }[]>([]);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const addPet = () => {
    setPets([...pets, { id: Date.now().toString(), name: '', type: 'dog', birthDate: '', lastVaccineDate: '' }]);
  };

  const removePet = (id: string) => {
    if (pets.length > 1) {
      setPets(pets.filter(pet => pet.id !== id));
    }
  };

  const updatePet = (id: string, field: keyof Pet, value: string | 'dog' | 'cat') => {
    setPets(pets.map(pet => pet.id === id ? { ...pet, [field]: value } : pet));
  };

  const calculateVaccineSchedule = () => {
    setIsLoading(true);

    // Simulate AI processing with 3-second delay
    setTimeout(() => {
    const allReminders: { pet: string; vaccines: Vaccine[] }[] = [];
    const today = new Date();

    pets.forEach(pet => {
      if (!pet.birthDate || !pet.lastVaccineDate || !pet.name) {
        return;
      }

      const birth = new Date(pet.birthDate);
      const lastVaccine = new Date(pet.lastVaccineDate);
      const ageMonths = (today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24 * 30);
      const monthsSinceLastVaccine = (today.getTime() - lastVaccine.getTime()) / (1000 * 60 * 60 * 24 * 30);

      const vaccines: Vaccine[] = [];

      if (pet.type === 'dog') {
        // Core vaccines for dogs
        if (ageMonths < 16 || monthsSinceLastVaccine >= 12) {
          const nextDue = new Date(lastVaccine);
          nextDue.setMonth(nextDue.getMonth() + 12);
          const daysUntil = Math.ceil((nextDue.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
          vaccines.push({
            name: 'DHPP (Distemper, Hepatitis, Parvovirus, Parainfluenza)',
            dueDate: nextDue.toISOString().split('T')[0],
            daysUntil: daysUntil > 0 ? daysUntil : 0,
          });
        }

        if (ageMonths < 16 || monthsSinceLastVaccine >= 12) {
          const nextDue = new Date(lastVaccine);
          nextDue.setMonth(nextDue.getMonth() + 12);
          const daysUntil = Math.ceil((nextDue.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
          vaccines.push({
            name: 'Rabies',
            dueDate: nextDue.toISOString().split('T')[0],
            daysUntil: daysUntil > 0 ? daysUntil : 0,
          });
        }

        // Optional but recommended
        if (monthsSinceLastVaccine >= 12) {
          const nextDue = new Date(lastVaccine);
          nextDue.setMonth(nextDue.getMonth() + 12);
          const daysUntil = Math.ceil((nextDue.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
          vaccines.push({
            name: 'Bordetella (Kennel Cough)',
            dueDate: nextDue.toISOString().split('T')[0],
            daysUntil: daysUntil > 0 ? daysUntil : 0,
          });
        }

        if (monthsSinceLastVaccine >= 12) {
          const nextDue = new Date(lastVaccine);
          nextDue.setMonth(nextDue.getMonth() + 12);
          const daysUntil = Math.ceil((nextDue.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
          vaccines.push({
            name: 'Lyme Disease',
            dueDate: nextDue.toISOString().split('T')[0],
            daysUntil: daysUntil > 0 ? daysUntil : 0,
          });
        }
      } else {
        // Core vaccines for cats
        if (ageMonths < 16 || monthsSinceLastVaccine >= 12) {
          const nextDue = new Date(lastVaccine);
          nextDue.setMonth(nextDue.getMonth() + 12);
          const daysUntil = Math.ceil((nextDue.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
          vaccines.push({
            name: 'FVRCP (Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia)',
            dueDate: nextDue.toISOString().split('T')[0],
            daysUntil: daysUntil > 0 ? daysUntil : 0,
          });
        }

        if (ageMonths < 16 || monthsSinceLastVaccine >= 12) {
          const nextDue = new Date(lastVaccine);
          nextDue.setMonth(nextDue.getMonth() + 12);
          const daysUntil = Math.ceil((nextDue.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
          vaccines.push({
            name: 'Rabies',
            dueDate: nextDue.toISOString().split('T')[0],
            daysUntil: daysUntil > 0 ? daysUntil : 0,
          });
        }

        // Optional but recommended
        if (monthsSinceLastVaccine >= 12) {
          const nextDue = new Date(lastVaccine);
          nextDue.setMonth(nextDue.getMonth() + 12);
          const daysUntil = Math.ceil((nextDue.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
          vaccines.push({
            name: 'FeLV (Feline Leukemia)',
            dueDate: nextDue.toISOString().split('T')[0],
            daysUntil: daysUntil > 0 ? daysUntil : 0,
          });
        }
      }

      // Sort by days until due
      vaccines.sort((a, b) => a.daysUntil - b.daysUntil);
      if (vaccines.length > 0) {
        allReminders.push({ pet: pet.name, vaccines });
      }
    });

    if (allReminders.length === 0) {
      alert('Please enter complete information for at least one pet');
      return;
    }

    setReminders(allReminders);
    setSubmitted(true);
    setIsLoading(false);
    }, 3000); // 3-second delay
  };

  const exportToCalendar = (petName: string, vaccine: Vaccine) => {
    const startDate = new Date(vaccine.dueDate);
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 1);

    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Nearby Pet Care//Vaccine Reminder//EN',
      'BEGIN:VEVENT',
      `DTSTART:${formatDate(startDate)}`,
      `DTEND:${formatDate(endDate)}`,
      `SUMMARY:${petName} - ${vaccine.name} Due`,
      `DESCRIPTION:Vaccination reminder for ${petName}: ${vaccine.name}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${petName}-${vaccine.name.replace(/[^a-z0-9]/gi, '-')}-vaccine.ics`;
    link.click();
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Tools', href: '/tools' },
            { name: 'Vaccine Reminder', href: '/tools/vaccine-reminder' }
          ]} />
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Pet Vaccine Reminder – Dog & Cat Vaccination Schedule Tracker
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Use our free pet vaccine reminder to set up personalized vaccination schedules for your pets. Our dog vaccine reminder and cat vaccine reminder track vaccination schedules, provide reminders for upcoming vaccines, and allow you to export to calendar. Supports multiple pets with automatic scheduling.
            </p>
          </div>

          {/* Tool Screenshot/Image */}
          <div className="mb-8">
            <Image 
              src="/og-image.png" 
              alt="Pet Vaccine Reminder - Track vaccination schedules for dogs and cats"
              width={1200}
              height={630}
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
              priority={false}
            />
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6 sm:p-8 mb-8">
            <div className="space-y-6">
              {/* Multiple Pets */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Pet Information</h3>
                <button
                  type="button"
                  onClick={addPet}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  + Add Another Pet
                </button>
              </div>

              {pets.map((pet, index) => (
                <div key={pet.id} className="p-4 border border-gray-200 dark:border-white/10 rounded-lg space-y-4">
                  {pets.length > 1 && (
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">Pet {index + 1}</h4>
                      <button
                        type="button"
                        onClick={() => removePet(pet.id)}
                        className="text-red-600 dark:text-red-400 text-sm hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  )}

                  {/* Pet Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Pet Name
                    </label>
                    <input
                      type="text"
                      value={pet.name}
                      onChange={(e) => updatePet(pet.id, 'name', e.target.value)}
                      placeholder="Enter your pet's name"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Pet Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Pet Type
                    </label>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => updatePet(pet.id, 'type', 'dog')}
                        className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                          pet.type === 'dog'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        🐕 Dog
                      </button>
                      <button
                        type="button"
                        onClick={() => updatePet(pet.id, 'type', 'cat')}
                        className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                          pet.type === 'cat'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        🐱 Cat
                      </button>
                    </div>
                  </div>

                  {/* Birth Date */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Pet's Birth Date (or approximate)
                    </label>
                    <input
                      type="date"
                      value={pet.birthDate}
                      onChange={(e) => updatePet(pet.id, 'birthDate', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Last Vaccine Date */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Last Vaccination Date
                    </label>
                    <input
                      type="date"
                      value={pet.lastVaccineDate}
                      onChange={(e) => updatePet(pet.id, 'lastVaccineDate', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Enter the date of your pet's most recent vaccination
                    </p>
                  </div>
                </div>
              ))}

              {/* Email (optional) */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Email for Reminders (Optional)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-white/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Note: Email reminders are not currently active. Please set your own calendar reminders.
                </p>
              </div>

              {/* Generate Schedule Button */}
              <button
                onClick={calculateVaccineSchedule}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Generate Vaccine Schedule
              </button>
            </div>
          </div>

          {/* Results */}
          {submitted && reminders.length > 0 && (
            <div className="space-y-6 mb-8">
              {reminders.map((petReminder, petIndex) => (
                <div key={petIndex} className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Vaccine Schedule for {petReminder.pet}
                  </h2>
                  
                  <div className="space-y-4">
                    {petReminder.vaccines.map((vaccine, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border ${
                          vaccine.daysUntil <= 30
                            ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                            : vaccine.daysUntil <= 60
                            ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800'
                            : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-white/10'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                              {vaccine.name}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Due: {new Date(vaccine.dueDate).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="text-right">
                              {vaccine.daysUntil <= 0 ? (
                                <span className="px-3 py-1 bg-red-600 text-white rounded-full text-sm font-semibold">
                                  Overdue
                                </span>
                              ) : vaccine.daysUntil <= 30 ? (
                                <span className="px-3 py-1 bg-red-600 text-white rounded-full text-sm font-semibold">
                                  {vaccine.daysUntil} days
                                </span>
                              ) : vaccine.daysUntil <= 60 ? (
                                <span className="px-3 py-1 bg-yellow-600 text-white rounded-full text-sm font-semibold">
                                  {vaccine.daysUntil} days
                                </span>
                              ) : (
                                <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm font-semibold">
                                  {vaccine.daysUntil} days
                                </span>
                              )}
                            </div>
                            <button
                              onClick={() => exportToCalendar(petReminder.pet, vaccine)}
                              className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                              title="Export to Calendar"
                            >
                              📅 Export
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Tip:</strong> Click "Export" to add vaccine reminders to your calendar. Contact your veterinarian to schedule appointments 1-2 weeks before the due date.
                </p>
              </div>
            </div>
          )}

          {/* How Pet Vaccine Reminder Works */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Pet Vaccine Reminder Works</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our pet vaccine reminder tool automatically calculates vaccination schedules based on your pet's age, last vaccination date, and species. Core vaccines like DHPP for dogs and FVRCP for cats are typically given annually or every 3 years, while puppies and kittens need a series of vaccinations starting at 6-8 weeks. The tool tracks all upcoming vaccines and allows you to export reminders to your calendar.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Understanding Vaccination Schedules</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Puppies and kittens need a series of core vaccinations starting at 6-8 weeks, then every 3-4 weeks until 16 weeks old. Adult pets typically need annual or triennial boosters depending on the vaccine type. The tool automatically calculates these schedules and provides reminders for upcoming vaccines, helping you stay on top of your pet's health.
              </p>
            </div>
          </div>

          {/* Visible FAQ Section */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How often do pets need vaccinations?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Most core vaccines (like DHPP for dogs and FVRCP for cats) are given annually or every 3 years depending on the vaccine type and your veterinarian's protocol. Puppies and kittens need a series of vaccinations starting at 6-8 weeks, then every 3-4 weeks until 16 weeks old. Always follow your veterinarian's specific recommendations.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What vaccines does my pet need?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Core vaccines are essential for all pets: DHPP and Rabies for dogs, FVRCP and Rabies for cats. Non-core vaccines (like Bordetella, Lyme, FeLV) depend on your pet's lifestyle, location, and risk factors. Your veterinarian can help determine which vaccines are appropriate for your pet.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Can I export vaccine reminders to my calendar?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes, the tool allows you to export individual vaccine reminders to your calendar in ICS format. Simply click the "Export" button next to any vaccine reminder to download a calendar file that can be imported into Google Calendar, Outlook, Apple Calendar, or other calendar applications.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What if my pet's vaccine is overdue?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  If a vaccine is overdue, contact your veterinarian as soon as possible. They may recommend restarting the vaccination series or giving a booster, depending on how long overdue it is. Never delay vaccinations unnecessarily as they protect against serious diseases.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/tools/age-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Age Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Convert your pet's age to human years</p>
              </a>
              <a href="/tools/vaccination-schedule-generator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Vaccination Schedule Generator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Generate a complete vaccination schedule</p>
              </a>
              <a href="/tools/exercise-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Exercise Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate daily exercise needs for your pet</p>
              </a>
              <a href="/pet-health" className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pet Health Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn more about pet health and wellness</p>
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Disclaimer:</strong> This tool provides general vaccine schedule estimates based on standard protocols. Actual vaccine schedules may vary based on your pet's health, location, lifestyle, and your veterinarian's recommendations. Always consult with your veterinarian for personalized vaccination schedules and to determine which vaccines are appropriate for your pet. Some vaccines may be required by law (such as rabies), while others are recommended based on risk factors.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

