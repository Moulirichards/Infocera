import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const faqs = [
  { q: 'What is CRM software and why does my business need it?', a: 'CRM (Customer Relationship Management) software helps you manage customer relationships, sales, and productivity, leading to improved customer retention and business growth.' },
  { q: 'How is Infocera CRM different?', a: 'Infocera CRM is tailored to your business needs, scalable for startups to enterprises, and focuses on automation, collaboration, and actionable insights.' },
  { q: 'Can I integrate CRM with my existing tools?', a: 'Yes, our CRM solutions are designed for seamless integration with your current business tools and platforms.' },
  { q: 'Is training and support provided?', a: 'Absolutely! We offer comprehensive onboarding, training, and ongoing support for your team.' },
];

export default function CRMSoftwareDevelopment() {
  const navigate = useNavigate();
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  return (
    <div className="min-h-screen service-page flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-800 to-blue-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">CRM Software Development</h1>
            <p className="text-xl mb-8">Custom CRM solutions designed to fit your business processes and help you grow customer relationships.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-indigo-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-indigo-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start CRM Project</button>
              <span className="inline-block ml-2 md:hidden">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                  <rect x="7" y="7" width="10" height="10" rx="2" stroke="#fff" strokeWidth="2"/>
                  <path d="M9 11h6M9 15h6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
          </div>
          <div className="relative justify-center hidden md:flex">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <rect x="7" y="7" width="10" height="10" rx="2" stroke="#fff" strokeWidth="2"/>
              <path d="M9 11h6M9 15h6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <h3 className="font-bold text-lg mb-2">Contact & Sales Management</h3>
            <p>Centralize customer data, track leads, and manage your sales pipeline with ease.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <h3 className="font-bold text-lg mb-2">Automation & Productivity</h3>
            <p>Automate repetitive tasks, follow-ups, and reporting to boost your team's productivity.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <h3 className="font-bold text-lg mb-2">Analytics & Insights</h3>
            <p>Gain actionable insights with real-time dashboards and advanced analytics.</p>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-cyan-100 to-blue-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Infocera for CRM?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-xl shadow">Expert Team</div>
            <div className="bg-white p-4 rounded-xl shadow">Custom Solutions</div>
            <div className="bg-white p-4 rounded-xl shadow">Seamless Integration</div>
            <div className="bg-white p-4 rounded-xl shadow">Ongoing Support</div>
          </div>
        </div>
      </section>
      {/* Industries Served */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Industries We Serve</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Startups</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Small Businesses</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Enterprises</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Retail</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Healthcare</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Education</span>
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-cyan-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Our CRM Development Process</h2>
          <ol className="space-y-4">
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-blue-700">1.</span> Requirement Analysis & Consulting</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-blue-700">2.</span> Custom Design & Prototyping</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-blue-700">3.</span> Agile Development & Integration</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-blue-700">4.</span> Testing, Training & Deployment</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-blue-700">5.</span> Ongoing Support & Optimization</li>
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
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Customer Relationships?</h2>
          <p className="mb-6">Contact Infocera today for a free consultation and see how our CRM solutions can drive your business forward.</p>
          <Button size="lg" className="bg-white text-blue-700 font-bold shadow hover:bg-blue-100">Get a Free Quote</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
} 