import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const faqs = [
  { q: 'What is an e-commerce portal?', a: 'An e-commerce portal is an online platform for selling products and services, managing inventory, orders, and payments.' },
  { q: 'Can you integrate payment gateways and logistics?', a: 'Yes, we offer secure payment gateway and logistics integration for seamless transactions and delivery.' },
  { q: 'Is the portal mobile-friendly?', a: 'All our e-commerce portals are fully responsive and optimized for all devices.' },
  { q: 'Do you provide ongoing support?', a: 'Yes, Infocera provides continuous support, updates, and training for your team.' },
];

export default function EcommerceDevelopment() {
  const navigate = useNavigate();
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-pink-600 to-orange-300 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Ecommerce Development</h1>
            <p className="text-xl mb-8">Launch and grow your online store with robust, scalable ecommerce solutions tailored to your business.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-pink-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-pink-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start Ecommerce Project</button>
              <span className="inline-block ml-2 md:hidden">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                  <rect x="7" y="13" width="10" height="4" rx="2" stroke="#fff" strokeWidth="2"/>
                  <path d="M9 11h6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
          </div>
          <div className="relative justify-center hidden md:flex">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <rect x="7" y="13" width="10" height="4" rx="2" stroke="#fff" strokeWidth="2"/>
              <path d="M9 11h6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <h3 className="font-bold text-lg mb-2">Product & Inventory Management</h3>
            <p>Manage products, categories, and inventory with ease and efficiency.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <h3 className="font-bold text-lg mb-2">Order & Payment Processing</h3>
            <p>Seamlessly process orders, payments, and refunds with secure integrations.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <h3 className="font-bold text-lg mb-2">Customer Engagement & Analytics</h3>
            <p>Engage customers with personalized offers and gain insights with analytics.</p>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-cyan-100 to-blue-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Infocera?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-xl shadow">E-commerce Expertise</div>
            <div className="bg-white p-4 rounded-xl shadow">Custom Integrations</div>
            <div className="bg-white p-4 rounded-xl shadow">Mobile-First Design</div>
            <div className="bg-white p-4 rounded-xl shadow">24/7 Support</div>
          </div>
        </div>
      </section>
      {/* Who Can Benefit */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Who Can Benefit?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Retailers</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Wholesalers</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Startups</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Brands</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Distributors</span>
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
          <h2 className="text-2xl font-bold mb-4">Ready to Grow Your Online Business?</h2>
          <p className="mb-6">Contact Infocera for a free demo and discover how our e-commerce portals can boost your business.</p>
          <Button size="lg" className="bg-white text-blue-700 font-bold shadow hover:bg-blue-100">Get a Free Demo</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
} 