import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Code, MonitorSmartphone, TrendingUp, Layers, Globe, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const faqs = [
  { q: 'What is AngularJS?', a: 'AngularJS is a structural framework for dynamic web apps, enabling rich client-side experiences.' },
  { q: 'What is JavaScript?', a: 'JavaScript is the core scripting language for interactive web development.' },
  { q: 'Do you build SPAs?', a: 'Yes, we build Single Page Applications (SPAs) using AngularJS and modern JavaScript.' },
  { q: 'Is AngularJS still relevant?', a: 'AngularJS is still used for legacy projects, while modern Angular and JavaScript frameworks are recommended for new apps.' },
];

const industries = [
  'E-commerce',
  'Education',
  'Healthcare',
  'Startups',
  'Enterprises',
  'Media',
  'Finance',
  'Retail',
];

export default function AngularJsJs() {
  const navigate = useNavigate();
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-red-700 to-yellow-400 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AngularJS & JavaScript Development</h1>
          <p className="text-xl mb-6">Build dynamic, interactive, and scalable web apps with AngularJS and JavaScript by Infocera.</p>
          <Button size="lg" className="bg-white text-red-700 font-bold shadow hover:bg-red-100" onClick={() => navigate('/contact')}>Start Your AngularJS Project</Button>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-yellow-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Code className="h-10 w-10 text-red-700 mb-2" />
            <h3 className="font-bold text-lg mb-2">Rich Interactivity</h3>
            <p>JavaScript and AngularJS for seamless, dynamic user experiences.</p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <MonitorSmartphone className="h-10 w-10 text-red-700 mb-2" />
            <h3 className="font-bold text-lg mb-2">Mobile-Ready</h3>
            <p>Responsive, cross-platform web apps for all devices.</p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Layers className="h-10 w-10 text-red-700 mb-2" />
            <h3 className="font-bold text-lg mb-2">Component-Based</h3>
            <p>Reusable components for scalable, maintainable code.</p>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-yellow-100 to-red-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Infocera for AngularJS & JS?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><TrendingUp className="h-8 w-8 text-red-700 mb-2" />JS Experts</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><MonitorSmartphone className="h-8 w-8 text-red-700 mb-2" />Mobile-First</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><Globe className="h-8 w-8 text-red-700 mb-2" />Web Apps</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><Layers className="h-8 w-8 text-red-700 mb-2" />Component Driven</div>
          </div>
        </div>
      </section>
      {/* Industries/Use Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Industries & Use Cases</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind) => (
              <span key={ind} className="bg-red-100 text-red-700 px-4 py-2 rounded-full">{ind}</span>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-100 to-red-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Web App Development Process</h2>
          <ol className="space-y-4">
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-red-700">1.</span> Discovery & Planning</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-red-700">2.</span> UI/UX & Architecture</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-red-700">3.</span> AngularJS/JS Development</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-red-700">4.</span> Testing & QA</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-red-700">5.</span> Launch & Support</li>
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
      <section className="py-16 bg-gradient-to-r from-red-700 to-yellow-400 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Ready to Build a Dynamic Web App?</h2>
          <p className="mb-6">Contact Infocera for a free consultation and see how AngularJS & JavaScript can power your next project.</p>
          <Button size="lg" className="bg-white text-red-700 font-bold shadow hover:bg-red-100" onClick={() => navigate('/contact')}>Get Started</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
} 