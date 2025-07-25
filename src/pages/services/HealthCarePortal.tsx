import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const faqs = [
  { q: 'What is a healthcare portal?', a: 'A healthcare portal is a secure online platform for managing patient records, appointments, billing, and communication between patients and providers.' },
  { q: 'Is the portal HIPAA compliant?', a: 'Yes, our healthcare portals are designed with security and compliance in mind, including HIPAA and other regulations.' },
  { q: 'Can you integrate telemedicine features?', a: 'Absolutely! We offer telemedicine, e-prescriptions, and other digital health integrations.' },
  { q: 'Do you provide ongoing support?', a: 'Yes, Infocera provides continuous support, updates, and training for your staff.' },
];

export default function HealthCarePortal() {
  const navigate = useNavigate();
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-green-400 to-blue-200 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Health Care Portal</h1>
            <p className="text-xl mb-8">Connect patients, doctors, and staff with secure, user-friendly healthcare portals for better care and efficiency.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-green-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-green-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start Health Project</button>
              <span className="inline-block ml-2 md:hidden">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                  <rect x="7" y="7" width="10" height="10" rx="2" stroke="#fff" strokeWidth="2"/>
                  <path d="M12 10v4M10 12h4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
          </div>
          <div className="relative justify-center hidden md:flex">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <rect x="7" y="7" width="10" height="10" rx="2" stroke="#fff" strokeWidth="2"/>
              <path d="M12 10v4M10 12h4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <h3 className="font-bold text-lg mb-2">Patient Management</h3>
            <p>Manage patient records, appointments, and communication securely and efficiently.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <h3 className="font-bold text-lg mb-2">Telemedicine & E-Health</h3>
            <p>Enable virtual consultations, e-prescriptions, and remote monitoring for better care.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <h3 className="font-bold text-lg mb-2">Billing & Analytics</h3>
            <p>Streamline billing, insurance, and gain insights with advanced analytics and reporting.</p>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-cyan-100 to-blue-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Infocera?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-xl shadow">Healthcare Expertise</div>
            <div className="bg-white p-4 rounded-xl shadow">Compliance & Security</div>
            <div className="bg-white p-4 rounded-xl shadow">Custom Integrations</div>
            <div className="bg-white p-4 rounded-xl shadow">24/7 Support</div>
          </div>
        </div>
      </section>
      {/* Who Can Benefit */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Who Can Benefit?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Hospitals</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Clinics</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Doctors</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Labs</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Pharmacies</span>
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
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Healthcare?</h2>
          <p className="mb-6">Contact Infocera for a free demo and discover how our portals can empower your healthcare organization.</p>
          <Button size="lg" className="bg-white text-blue-700 font-bold shadow hover:bg-blue-100">Get a Free Demo</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
} 