import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import {
  generateSEOMetadata,
  generateWebPageStructuredData,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  jsonLdScriptProps,
} from '@/lib/seo-utils';
import { getBaseUrl } from '@/lib/site-config';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Medical & Informational Disclaimer',
  description: 'Important disclaimer regarding medical and informational content. Learn when to consult a veterinarian and understand our content limitations.',
  keywords: [
    'disclaimer',
    'medical disclaimer',
    'pet care disclaimer',
    'veterinary advice',
    'pet health disclaimer',
    'educational content disclaimer',
    'pet care information',
    'when to see a vet',
    'pet emergency',
  ],
  pathname: '/disclaimer',
  type: 'website',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Medical & Informational Disclaimer - Nearby Pet Care',
      type: 'image/png',
    },
  ],
  locale: 'en-US',
  alternates: {
    languages: {
      'en-US': '/disclaimer',
      'en-GB': '/disclaimer',
      'en-CA': '/disclaimer',
      'en-AU': '/disclaimer',
    },
  },
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'Disclaimer', url: '/disclaimer' },
  ],
});

export default function DisclaimerPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Disclaimer', url: '/disclaimer' },
  ];

  const webPageStructuredData = generateWebPageStructuredData({
    name: 'Medical & Informational Disclaimer',
    description: 'Important disclaimer regarding medical and informational content on Nearby Pet Care. Learn when to consult a veterinarian and understand our educational content limitations.',
    url: '/disclaimer',
    breadcrumbs,
  });

  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);

  const faqStructuredData = generateFAQStructuredData([
    {
      question: 'Is the information on Nearby Pet Care a substitute for veterinary advice?',
      answer: 'No, the information on Nearby Pet Care is for educational purposes only and is not a substitute for professional veterinary advice, diagnosis, or treatment. Always consult with your veterinarian for personalized advice about your pet\'s health and care needs.',
    },
    {
      question: 'When should I contact my veterinarian instead of using this website?',
      answer: 'You should contact your veterinarian immediately if your pet shows signs of an emergency (difficulty breathing, collapse, seizures, severe vomiting or diarrhea with blood, inability to urinate, extreme pain, suspected poisoning, or severe allergic reactions). For any health concerns, behavior changes, or before making significant changes to your pet\'s diet, exercise, or medication, consult your veterinarian.',
    },
    {
      question: 'Can I use the information on this site to diagnose or treat my pet?',
      answer: 'No, you should never use information from this website to diagnose or treat your pet. We are an educational platform, not a veterinary service. Only a licensed veterinarian can properly diagnose and treat your pet\'s health conditions. Always seek professional veterinary care for your pet\'s medical needs.',
    },
    {
      question: 'Does Nearby Pet Care provide veterinary services?',
      answer: 'No, Nearby Pet Care is an independent educational platform that provides general pet care information and guidance. We do not provide veterinary services, medical advice, professional consultations, or emergency services. We are not a veterinary practice, clinic, or professional service provider.',
    },
    {
      question: 'How accurate and up-to-date is the information on this website?',
      answer: 'We strive to provide accurate, up-to-date information based on widely accepted pet care practices. However, pet care knowledge evolves, and we cannot guarantee that all information is current or complete. We regularly review and update our content, but veterinary medicine continues to evolve. Always consult your veterinarian for the most current advice tailored to your pet\'s specific needs.',
    },
  ]);
  return (
    <>
      {/* Structured Data Scripts */}
      <script {...jsonLdScriptProps(breadcrumbStructuredData)} />
      <script {...jsonLdScriptProps(webPageStructuredData)} />
      <script {...jsonLdScriptProps(faqStructuredData)} />
      <main className="min-h-screen bg-white dark:bg-black transition-colors pt-16 sm:pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200/30 dark:bg-amber-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200/30 dark:bg-orange-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Breadcrumb items={[
            { name: 'Home', href: '/' },
            { name: 'Disclaimer', href: '/disclaimer' }
          ]} />
          
          <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-amber-200/50 dark:border-amber-700/50 rounded-full shadow-sm">
              <span className="text-2xl">⚠️</span>
              <span className="text-sm font-semibold text-amber-700 dark:text-amber-300">Important Information</span>
            </div>
            
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Medical & Informational Disclaimer
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Important information about our educational content and when to consult a veterinarian
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50">
                <span className="text-xl">⚕️</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Not Veterinary Advice</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50">
                <span className="text-xl">📚</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Educational Content</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50">
                <span className="text-xl">🆘</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Emergency Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <article className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8" itemScope itemType="https://schema.org/WebPage">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-6" itemProp="mainContentOfPage">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              We want to be upfront with you: everything you read on Nearby Pet Care is meant to help you learn about pet care, but it's not a replacement for talking to your veterinarian. Think of us as your helpful friend who's done a lot of research, not as your pet's doctor. This applies to everything on our site—articles, guides, tools, and all the other resources we've put together.
            </p>

            <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">We're Here to Educate, Not Diagnose</h2>
              <p className="mb-4 leading-relaxed">
                Here's the thing: we've spent countless hours researching pet care, talking to experts, and putting together guides that we hope will make your life as a pet owner easier. We share what we've learned about grooming, nutrition, training, and general pet wellness. But here's what we can't do: we can't look at your specific pet, know their medical history, or understand their unique situation. That's your veterinarian's job, and they're really good at it.
              </p>
              <p className="mb-4 leading-relaxed">
                If you're worried about something you've noticed with your pet, or if you're wondering whether a piece of advice applies to your furry friend, pick up the phone and call your vet. Don't wait. Don't second-guess yourself because something you read here seems to contradict what your vet said. Your veterinarian knows your pet in a way we never could, and they have the training and experience to give you personalized advice that actually fits your situation.
              </p>
              <p className="mb-4 leading-relaxed">
                What works perfectly for your neighbor's golden retriever might not be right for your senior cat with kidney issues. What helped your friend's puppy might not be safe for your dog who's on medication. That's why we can only give you general guidance—the kind of information that helps you understand the basics and ask better questions when you talk to your vet.
              </p>
            </section>

            <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">When It's an Emergency, Skip the Website</h2>
              <p className="mb-4 leading-relaxed">
                If your pet is in trouble right now—if something looks seriously wrong—don't scroll through our articles looking for answers. Don't try to figure it out yourself. Just call. Call your vet, call an emergency animal hospital, call someone who can actually help. Every second counts in an emergency, and we're not equipped to handle those situations.
              </p>
              <p className="mb-4 leading-relaxed">
                Here are some red flags that mean you should drop everything and get professional help immediately:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-3 text-gray-700 dark:text-gray-300">
                <li><strong>Your pet can't breathe properly</strong> or is gasping for air</li>
                <li><strong>They've collapsed</strong> or lost consciousness</li>
                <li><strong>They've been seriously injured</strong> or hit by something</li>
                <li><strong>They're having seizures</strong> or convulsions</li>
                <li><strong>They're vomiting or having diarrhea with blood</strong> in it</li>
                <li><strong>They can't pee or poop</strong> and seem to be trying</li>
                <li><strong>They're clearly in extreme pain</strong>—crying, hiding, or acting completely out of character</li>
                <li><strong>You think they might have eaten something toxic</strong>—chocolate, medications, plants, cleaning products</li>
                <li><strong>They're having a severe allergic reaction</strong>—swelling, hives, difficulty breathing</li>
                <li><strong>Something just feels really wrong</strong>—you know your pet, and if your gut is telling you this is serious, trust it</li>
              </ul>
              <p className="mb-4 leading-relaxed">
                When your pet's health is on the line, it's always better to be safe than sorry. If you're wondering whether something is an emergency, it probably is. Your veterinarian would much rather you call and have it turn out to be nothing than have you wait and wish you'd called sooner.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">Your Pet Is One of a Kind</h2>
              <p className="mb-4 leading-relaxed">
                Here's something we've learned from talking to thousands of pet owners: no two pets are exactly alike. Your dog isn't just "a dog"—they're your specific dog, with their own personality, health history, quirks, and needs. What we write about is based on what generally works for most pets, but your pet might be the exception. That's not a flaw in our content; it's just reality.
              </p>
              <p className="mb-4 leading-relaxed">
                There are so many things that can change how advice applies to your pet:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-3 text-gray-700 dark:text-gray-300">
                <li><strong>Age matters.</strong> A puppy's needs are completely different from a senior dog's needs, and what's safe for one might not be safe for the other.</li>
                <li><strong>Breed and size make a difference.</strong> A Great Dane and a Chihuahua have very different nutritional and exercise needs, even though they're both dogs.</li>
                <li><strong>Health conditions change everything.</strong> If your pet has diabetes, kidney disease, or any other ongoing health issue, general advice might not apply—or could even be harmful.</li>
                <li><strong>Medications interact.</strong> If your pet is on medication, what they eat, what supplements they take, and even how much they exercise can affect how those medications work.</li>
                <li><strong>Allergies and sensitivities are real.</strong> Just because something is generally considered safe doesn't mean your pet won't react to it.</li>
                <li><strong>Lifestyle counts.</strong> A working farm dog has different needs than a city apartment cat, even if they're the same age and breed.</li>
                <li><strong>Past experiences matter.</strong> If your pet has had bad reactions to things in the past, that history needs to be considered.</li>
                <li><strong>Where you live affects things.</strong> Climate, local parasites, and even the quality of your tap water can influence what's best for your pet.</li>
              </ul>
              <p className="mb-4 leading-relaxed">
                Before you make any big changes—switching foods, starting a new exercise routine, adding supplements, or changing medications—have a conversation with your vet. They can help you figure out whether our general advice actually fits your pet's specific situation. This is especially important if your pet already has health issues. What might be helpful for a healthy pet could be dangerous for a pet with existing conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">We Do Our Best, But Things Change</h2>
              <p className="mb-4 leading-relaxed">
                We work hard to make sure the information we share is accurate and up-to-date. We read the latest research, talk to veterinarians, and stay on top of what's happening in the pet care world. But here's the honest truth: pet care is a field that's always evolving. What we thought we knew about pet nutrition five years ago might be different from what we know today. New studies come out, veterinary practices change, and our understanding of what's best for pets keeps improving.
              </p>
              <p className="mb-4 leading-relaxed">
                Because of this, we can't promise you that:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-3 text-gray-700 dark:text-gray-300">
                <li>Every single piece of information is 100% complete or perfectly accurate—we're human, and sometimes we miss things</li>
                <li>Everything we write will work for your specific pet or situation—we can only speak in generalities</li>
                <li>Following our advice will guarantee specific results—every pet responds differently</li>
                <li>Our content always reflects the absolute latest research—there might be a study that came out yesterday that changes everything</li>
              </ul>
              <p className="mb-4 leading-relaxed">
                We regularly go back and update our articles when we learn something new, but we can't catch everything immediately. If you read something that seems outdated or contradicts what your vet is telling you, trust your vet. They're the ones who are actively practicing and staying current with the latest developments in their field.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">We're Not Your Vet (And That's Important)</h2>
              <p className="mb-4 leading-relaxed">
                Just to be crystal clear: reading our website doesn't make us your pet's healthcare provider. We're not a veterinary clinic. We're not a pet hospital. We're not even a telemedicine service. We're an educational website—think of us like a really comprehensive pet care library that you can access anytime.
              </p>
              <p className="mb-4 leading-relaxed">
                What that means is we can't do the things your vet does:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-3 text-gray-700 dark:text-gray-300">
                <li><strong>We can't diagnose your pet.</strong> We can't look at symptoms and tell you what's wrong. That requires a physical examination and professional training.</li>
                <li><strong>We can't treat your pet.</strong> We can't prescribe medications, perform procedures, or provide medical care.</li>
                <li><strong>We can't give you personalized medical advice.</strong> We can share general information, but we can't tell you what's specifically right for your pet.</li>
                <li><strong>We can't handle emergencies.</strong> If your pet is in trouble, we can't help—you need a real veterinarian.</li>
                <li><strong>We can't replace regular vet visits.</strong> Your pet needs annual check-ups, vaccinations, and preventive care that only a veterinarian can provide.</li>
              </ul>
              <p className="mb-4 leading-relaxed">
                What we can do is help you learn, understand, and ask better questions when you do talk to your vet. We can help you feel more confident about pet care basics. We can give you information that helps you make informed decisions. But we can't be your pet's doctor—and we wouldn't want to be, because your actual veterinarian is much better at that job than we could ever be.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">You're in Charge of Your Pet's Care</h2>
              <p className="mb-4 leading-relaxed">
                This is the part where we need to be legally clear: when you use our website, you're taking responsibility for your own decisions. We can't be held responsible if something goes wrong because you followed our general advice without checking with your vet first. We're sharing information, not making decisions for you.
              </p>
              <p className="mb-4 leading-relaxed">
                That means we can't be held liable if:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-3 text-gray-700 dark:text-gray-300">
                <li>You rely on our information without consulting your veterinarian first</li>
                <li>You take action based on something you read here that doesn't work for your pet</li>
                <li>Something happens to your pet because you followed our general advice without considering your pet's specific needs</li>
                <li>We made a mistake in our content (we try not to, but we're human)</li>
                <li>Our information becomes outdated before we have a chance to update it</li>
              </ul>
              <p className="mb-4 leading-relaxed">
                At the end of the day, you know your pet better than we do, and you're the one who makes the final decisions about their care. We're here to help you make those decisions more informed, but we can't make them for you. That's why it's so important to talk to your veterinarian—they can help you figure out whether our advice actually fits your pet's situation, and they can catch potential problems before they become serious.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">Links to Other Sites</h2>
              <p className="mb-4 leading-relaxed">
                Sometimes we link to other websites, products, or resources that we think might be helpful. Just because we share a link doesn't mean we've vetted everything on that site or that we're endorsing everything they say. We try to link to reputable sources, but we can't control what's on other people's websites, and we can't guarantee that their information is accurate or up-to-date.
              </p>
              <p className="mb-4 leading-relaxed">
                If you click through to another site and find information there—whether it's about a product, a service, or pet care advice—take it with the same grain of salt you'd use for anything else online. Verify it, think critically about it, and most importantly, talk to your vet about it before you act on it. This goes for information you find anywhere, including on our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">What We're Asking of You</h2>
              <p className="mb-4 leading-relaxed">
                Being a good pet owner means taking responsibility for your pet's wellbeing. Here's what that looks like:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-3 text-gray-700 dark:text-gray-300">
                <li><strong>When you're worried, call your vet.</strong> Don't just hope things will get better or try to figure it out yourself. Your veterinarian went to school for years to help pets—let them do their job.</li>
                <li><strong>Before you make big changes, check in.</strong> Switching foods, starting a new exercise program, adding supplements, or changing medications? Run it by your vet first, especially if your pet has health issues.</li>
                <li><strong>Be honest with your vet.</strong> They can't help you if they don't know what's really going on. Share your concerns, tell them what you've tried, and be upfront about your pet's symptoms and behavior.</li>
                <li><strong>Follow through on your vet's recommendations.</strong> If they prescribe medication, give it as directed. If they recommend a diet change, make the change. If they want to see your pet again in a week, schedule that appointment.</li>
                <li><strong>Keep up with preventive care.</strong> Annual check-ups, vaccinations, parasite prevention—these things matter. They catch problems early and keep your pet healthy.</li>
                <li><strong>Use us as a learning tool, not a replacement.</strong> We're here to help you understand pet care better and ask smarter questions. We're not here to replace your veterinarian.</li>
              </ul>
              <p className="mb-4 leading-relaxed">
                The best pet owners are the ones who combine good information (like what you'll find here) with professional veterinary care. Use our content to learn, to understand, and to feel more confident. But when it comes to making decisions about your pet's health, make those decisions with your veterinarian, not with us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-5">When to Call Your Vet (And When to Call Us)</h2>
              <p className="mb-4 leading-relaxed">
                If you have questions about your pet's health, behavior, or care, your veterinarian is the person to call. They know your pet, they understand their medical history, and they have the training to give you personalized advice. Don't hesitate to reach out—that's what they're there for. No question is too small or too silly when it comes to your pet's wellbeing.
              </p>
              <p className="mb-4 leading-relaxed">
                If you have questions about our website, our content, or how to use our resources, we'd love to hear from you! You can reach us through our <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Contact Us</Link> page. But please understand: we can't answer questions about your pet's specific health concerns, diagnose problems, or give you medical advice. For those things, you need your veterinarian.
              </p>
            </section>

            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 dark:border-amber-400 p-6 my-10 rounded-r-lg transition-colors">
              <p className="font-bold text-lg text-gray-900 dark:text-white mb-3">The Bottom Line</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                We've put a lot of work into creating helpful, accurate content that we hope makes pet ownership a little easier. But here's what we want you to remember: we're a learning resource, not a medical service. Your pet's health is too important to rely solely on what you read online—even if it's from us.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Use our content to learn, to understand, and to feel more confident. But when it comes to making decisions about your pet's health, make those decisions with your veterinarian. They're the experts, and they're on your team. We're just here to help you be a better teammate.
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
    </>
  );
}

