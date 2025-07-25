import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Code, Database, Layers, TrendingUp, MonitorSmartphone, ArrowRight, Globe } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const faqs = [
  { q: 'What is PHP?', a: 'PHP is a popular open-source server-side scripting language designed for web development and dynamic websites.' },
  { q: 'Is PHP good for enterprise applications?', a: 'Yes, PHP powers many large-scale enterprise applications and popular platforms like WordPress and Facebook.' },
  { q: 'Do you build custom PHP frameworks?', a: 'Yes, we develop custom PHP solutions and work with frameworks like Laravel, Symfony, and CodeIgniter.' },
  { q: 'Do you provide PHP support and migration?', a: 'Absolutely! We offer ongoing support, upgrades, and migration services for PHP applications.' },
];

const industries = [
  'E-commerce',
  'Education',
  'Healthcare',
  'Media',
  'Startups',
  'Enterprises',
  'Retail',
  'Finance',
];

export default function Php() {
  const navigate = useNavigate();
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-yellow-700 to-orange-400 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">PHP Development</h1>
          <p className="text-xl mb-6">Build robust, scalable, and high-performance web applications with Infocera's PHP development expertise.</p>
          <Button size="lg" className="bg-white text-yellow-700 font-bold shadow hover:bg-orange-100" onClick={() => navigate('/contact')}>Start Your PHP Project</Button>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-orange-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Code className="h-10 w-10 text-yellow-700 mb-2" />
            <h3 className="font-bold text-lg mb-2">Server-Side Scripting</h3>
            <p>Dynamic content, APIs, and backend logic for web apps.</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Database className="h-10 w-10 text-yellow-700 mb-2" />
            <h3 className="font-bold text-lg mb-2">Database Integration</h3>
            <p>Seamless integration with MySQL, PostgreSQL, and more.</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Layers className="h-10 w-10 text-yellow-700 mb-2" />
            <h3 className="font-bold text-lg mb-2">Framework Expertise</h3>
            <p>Laravel, Symfony, CodeIgniter, and custom PHP solutions.</p>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-orange-100 to-yellow-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Infocera for PHP?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><TrendingUp className="h-8 w-8 text-yellow-700 mb-2" />PHP Experts</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><MonitorSmartphone className="h-8 w-8 text-yellow-700 mb-2" />Mobile-First</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><Globe className="h-8 w-8 text-yellow-700 mb-2" />Web Apps</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><Layers className="h-8 w-8 text-yellow-700 mb-2" />Frameworks</div>
          </div>
        </div>
      </section>
      {/* Industries/Use Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Industries & Use Cases</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind) => (
              <span key={ind} className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">{ind}</span>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-100 to-orange-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Our PHP Development Process</h2>
          <ol className="space-y-4">
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-yellow-700">1.</span> Discovery & Planning</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-yellow-700">2.</span> Architecture & Design</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-yellow-700">3.</span> Custom Development</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-yellow-700">4.</span> Testing & QA</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-yellow-700">5.</span> Launch & Support</li>
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
      <section className="py-16 bg-gradient-to-r from-yellow-700 to-orange-400 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Ready to Build with PHP?</h2>
          <p className="mb-6">Contact Infocera for a free consultation and see how PHP can power your next project.</p>
          <Button size="lg" className="bg-white text-yellow-700 font-bold shadow hover:bg-orange-100" onClick={() => navigate('/contact')}>Get Started</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
} 