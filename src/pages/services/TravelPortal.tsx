import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const faqs = [
  { q: 'What is a travel web portal?', a: 'A travel web portal is an online platform that enables users to book hotels, flights, buses, and vacation packages, and manage travel services efficiently.' },
  { q: 'Can you integrate payment and SMS gateways?', a: 'Yes, we provide secure payment and SMS gateway integration for seamless transactions and notifications.' },
  { q: 'Is the portal mobile-friendly?', a: 'All our travel portals are fully responsive and optimized for mobile and desktop devices.' },
  { q: 'Do you offer B2B and B2C solutions?', a: 'Absolutely! We develop both B2B and B2C travel portals tailored to your business model.' },
];

export default function TravelPortal() {
  const navigate = useNavigate();
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-700 to-cyan-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Travel Portal</h1>
            <p className="text-xl mb-8">Empower your travel business with a feature-rich portal for bookings, itineraries, and customer management.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-blue-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start Travel Project</button>
              <span className="inline-block ml-2 md:hidden">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                  <path d="M4 16l8-8 8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
          </div>
          <div className="relative justify-center hidden md:flex">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <path d="M4 16l8-8 8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <h3 className="font-bold text-lg mb-2">Online Booking Engine</h3>
            <p>Book hotels, flights, buses, and cars with real-time availability and secure payments.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <h3 className="font-bold text-lg mb-2">Holiday & Vacation Packages</h3>
            <p>Offer customizable holiday packages and manage itineraries for your customers.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <h3 className="font-bold text-lg mb-2">Agency & Portal Management</h3>
            <p>Manage travel agencies, B2B/B2C setups, and maintain your portal with ease.</p>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-cyan-100 to-blue-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Infocera?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-xl shadow">Timely Delivery</div>
            <div className="bg-white p-4 rounded-xl shadow">Custom Solutions</div>
            <div className="bg-white p-4 rounded-xl shadow">Secure Payment Integration</div>
            <div className="bg-white p-4 rounded-xl shadow">24/7 Support</div>
          </div>
        </div>
      </section>
      {/* Who Can Benefit */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Who Can Benefit?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Travel Agencies</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Tour Operators</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Online Travel Startups</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Corporate Travel Managers</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">B2B & B2C Businesses</span>
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-cyan-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Portal Development Process</h2>
          <ol className="space-y-4">
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-blue-700">1.</span> Consultation & Planning</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-blue-700">2.</span> UI/UX Design & Prototyping</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-blue-700">3.</span> Development & Integration</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-blue-700">4.</span> Testing & Training</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-blue-700">5.</span> Launch & Ongoing Support</li>
          </ol>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={String(idx)}>
                <AccordionTrigger onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}>
                  <span className="font-semibold">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className={faqOpen === idx ? 'block' : 'hidden'}>
                  <p className="text-gray-700 py-2">{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      {/* Contact/CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-cyan-400 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Travel Business?</h2>
          <p className="mb-6">Contact Infocera for a free demo and discover how our travel portals can boost your business.</p>
          <Button size="lg" className="bg-white text-blue-700 font-bold shadow hover:bg-blue-100">Get a Free Demo</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
} 