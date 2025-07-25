import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Code, RefreshCw, Database, TrendingUp, MonitorSmartphone, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const faqs = [
  { q: 'What is AJAX?', a: 'AJAX (Asynchronous JavaScript and XML) enables web pages to update asynchronously by exchanging data with a web server behind the scenes.' },
  { q: 'What is JSON?', a: 'JSON (JavaScript Object Notation) is a lightweight data-interchange format, easy for humans to read and write, and easy for machines to parse and generate.' },
  { q: 'Why use AJAX and JSON?', a: 'They enable dynamic, fast, and interactive web applications with seamless data exchange.' },
  { q: 'Do you build real-time web apps?', a: 'Yes, Infocera creates real-time, interactive web apps using AJAX, JSON, and modern frameworks.' },
];

const industries = [
  'E-commerce',
  'Education',
  'Healthcare',
  'Finance',
  'Startups',
  'Enterprises',
  'Media',
  'Retail',
];

export default function AjaxJson() {
  const navigate = useNavigate();
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-900 to-blue-400 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AJAX & JSON Development</h1>
          <p className="text-xl mb-6">Build fast, interactive, and data-driven web apps with AJAX and JSON by Infocera.</p>
          <Button size="lg" className="bg-white text-blue-900 font-bold shadow hover:bg-blue-100" onClick={() => navigate('/contact')}>Start Your AJAX/JSON Project</Button>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <RefreshCw className="h-10 w-10 text-blue-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Asynchronous Updates</h3>
            <p>AJAX enables seamless, real-time updates without page reloads.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Database className="h-10 w-10 text-blue-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Efficient Data Exchange</h3>
            <p>JSON for lightweight, structured, and fast data transfer.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Code className="h-10 w-10 text-blue-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Dynamic Web Apps</h3>
            <p>Interactive, user-friendly, and modern web experiences.</p>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-blue-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Infocera for AJAX & JSON?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><TrendingUp className="h-8 w-8 text-blue-900 mb-2" />Web App Experts</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><MonitorSmartphone className="h-8 w-8 text-blue-900 mb-2" />Mobile-First</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><Database className="h-8 w-8 text-blue-900 mb-2" />Data Driven</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><Code className="h-8 w-8 text-blue-900 mb-2" />Custom Solutions</div>
          </div>
        </div>
      </section>
      {/* Industries/Use Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Industries & Use Cases</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind) => (
              <span key={ind} className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full">{ind}</span>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-blue-200">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Our AJAX & JSON Development Process</h2>
          <ol className="space-y-4">
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-blue-900">1.</span> Discovery & Planning</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-blue-900">2.</span> UI/UX & Architecture</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-blue-900">3.</span> AJAX/JSON Integration</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-blue-900">4.</span> Testing & QA</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-blue-900">5.</span> Launch & Support</li>
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
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-400 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Ready to Build Fast, Interactive Web Apps?</h2>
          <p className="mb-6">Contact Infocera for a free consultation and see how AJAX & JSON can power your next project.</p>
          <Button size="lg" className="bg-white text-blue-900 font-bold shadow hover:bg-blue-100" onClick={() => navigate('/contact')}>Get Started</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
} 