import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Code, Database, Layers, TrendingUp, MonitorSmartphone, ArrowRight, Globe } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const faqs = [
  { q: 'What is J2EE?', a: 'J2EE (Java 2 Platform, Enterprise Edition) is a platform for building scalable, secure, and robust enterprise applications in Java.' },
  { q: 'What is J2SE?', a: 'J2SE (Java 2 Platform, Standard Edition) is the core Java platform for desktop and general-purpose applications.' },
  { q: 'What is Swing?', a: 'Swing is a Java GUI toolkit for building rich desktop applications.' },
  { q: 'What is Servlet?', a: 'Servlets are Java programs that run on a server and handle web requests and responses.' },
];

const industries = [
  'Finance',
  'Healthcare',
  'Education',
  'E-commerce',
  'Enterprises',
  'Startups',
  'Government',
  'Retail',
];

export default function Java() {
  const navigate = useNavigate();
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-green-900 to-blue-400 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Java (J2EE, J2SE, Swing, Servlet) Development</h1>
          <p className="text-xl mb-6">Build scalable enterprise and desktop applications with Infocera's Java expertise.</p>
          <Button size="lg" className="bg-white text-green-900 font-bold shadow hover:bg-blue-100" onClick={() => navigate('/contact')}>Start Your Java Project</Button>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Layers className="h-10 w-10 text-green-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Enterprise Solutions</h3>
            <p>J2EE for robust, scalable, and secure business applications.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Code className="h-10 w-10 text-green-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Desktop Applications</h3>
            <p>J2SE and Swing for rich, interactive desktop software.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Database className="h-10 w-10 text-green-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Web Technologies</h3>
            <p>Servlets for high-performance web applications and APIs.</p>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-green-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Infocera for Java?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><TrendingUp className="h-8 w-8 text-green-900 mb-2" />Java Experts</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><MonitorSmartphone className="h-8 w-8 text-green-900 mb-2" />Cross-Platform</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><Globe className="h-8 w-8 text-green-900 mb-2" />Enterprise-Grade</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><Layers className="h-8 w-8 text-green-900 mb-2" />Full Stack</div>
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
      <section className="py-16 bg-gradient-to-r from-green-100 to-blue-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Java Development Process</h2>
          <ol className="space-y-4">
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-green-900">1.</span> Discovery & Planning</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-green-900">2.</span> Architecture & Design</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-green-900">3.</span> Custom Development</li>
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
      <section className="py-16 bg-gradient-to-r from-green-900 to-blue-400 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Ready to Build with Java?</h2>
          <p className="mb-6">Contact Infocera for a free consultation and see how Java can power your next project.</p>
          <Button size="lg" className="bg-white text-green-900 font-bold shadow hover:bg-blue-100" onClick={() => navigate('/contact')}>Get Started</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
} 