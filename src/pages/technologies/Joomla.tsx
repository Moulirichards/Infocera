import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Code, Globe, Database, TrendingUp, MonitorSmartphone, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const faqs = [
  { q: 'What is Joomla?', a: 'Joomla is a flexible, open-source content management system (CMS) for building websites and online applications.' },
  { q: 'Is Joomla good for small businesses?', a: 'Yes, Joomla is ideal for small businesses, non-profits, and enterprises seeking a robust CMS.' },
  { q: 'Do you offer Joomla migration?', a: 'Yes, Infocera provides migration, upgrade, and support services for Joomla sites.' },
  { q: 'Can you build custom Joomla extensions?', a: 'Absolutely! We develop custom extensions and templates tailored to your needs.' },
];

const industries = [
  'Small Businesses',
  'Non-profits',
  'Enterprises',
  'Education',
  'Healthcare',
  'Media',
  'Startups',
  'E-commerce',
];

export default function Joomla() {
  const navigate = useNavigate();
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-green-900 to-green-400 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Joomla Development</h1>
          <p className="text-xl mb-6">Flexible CMS solutions with Joomla by Infocera.</p>
          <Button size="lg" className="bg-white text-green-900 font-bold shadow hover:bg-green-100" onClick={() => navigate('/contact')}>Start Your Joomla Project</Button>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-green-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Globe className="h-10 w-10 text-green-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Flexible CMS</h3>
            <p>Easy content management for websites and online apps.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Database className="h-10 w-10 text-green-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Custom Extensions</h3>
            <p>Enhance functionality with custom Joomla extensions.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Code className="h-10 w-10 text-green-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Template Design</h3>
            <p>Unique, responsive templates for your brand.</p>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-green-100 to-green-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Infocera for Joomla?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><TrendingUp className="h-8 w-8 text-green-900 mb-2" />Joomla Experts</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><MonitorSmartphone className="h-8 w-8 text-green-900 mb-2" />Mobile-First</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><Globe className="h-8 w-8 text-green-900 mb-2" />Flexible CMS</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><Database className="h-8 w-8 text-green-900 mb-2" />Custom Solutions</div>
          </div>
        </div>
      </section>
      {/* Industries/Use Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Industries & Use Cases</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind) => (
              <span key={ind} className="bg-green-100 text-green-900 px-4 py-2 rounded-full">{ind}</span>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-green-100 to-green-200">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Joomla Development Process</h2>
          <ol className="space-y-4">
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-green-900">1.</span> Discovery & Planning</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-green-900">2.</span> UI/UX & Architecture</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-green-900">3.</span> Custom Joomla Development</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-green-900">4.</span> Testing & QA</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-green-900">5.</span> Launch & Support</li>
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
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-900 to-green-400 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Ready to Build with Joomla?</h2>
          <p className="mb-6">Contact Infocera for a free consultation and see how Joomla can power your next project.</p>
          <Button size="lg" className="bg-white text-green-900 font-bold shadow hover:bg-green-100" onClick={() => navigate('/contact')}>Get Started</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
} 