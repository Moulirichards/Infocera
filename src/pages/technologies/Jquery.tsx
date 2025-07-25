import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Code, MousePointerClick, TrendingUp, MonitorSmartphone, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const faqs = [
  { q: 'What is jQuery?', a: 'jQuery is a fast, small, and feature-rich JavaScript library that simplifies HTML document traversal, event handling, and animation.' },
  { q: 'Is jQuery still relevant?', a: 'jQuery is still widely used for legacy projects and quick enhancements, though modern frameworks are preferred for new apps.' },
  { q: 'Do you support jQuery migration?', a: 'Yes, Infocera offers migration and modernization services for jQuery-based projects.' },
  { q: 'Can you build interactive UI with jQuery?', a: 'Absolutely! We create dynamic, interactive web interfaces using jQuery and modern JavaScript.' },
];

const industries = [
  'E-commerce',
  'Education',
  'Healthcare',
  'Startups',
  'Enterprises',
  'Media',
  'Retail',
  'Finance',
];

export default function Jquery() {
  const navigate = useNavigate();
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-gray-800 to-blue-400 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">jQuery Development</h1>
          <p className="text-xl mb-6">Enhance your web projects with interactive, cross-browser features using jQuery by Infocera.</p>
          <Button size="lg" className="bg-white text-gray-800 font-bold shadow hover:bg-blue-100" onClick={() => navigate('/contact')}>Start Your Web Project</Button>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <MousePointerClick className="h-10 w-10 text-gray-800 mb-2" />
            <h3 className="font-bold text-lg mb-2">Interactive UI</h3>
            <p>jQuery for smooth animations, effects, and event handling.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Code className="h-10 w-10 text-gray-800 mb-2" />
            <h3 className="font-bold text-lg mb-2">Legacy Support</h3>
            <p>Maintain and modernize existing jQuery-based projects.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <MonitorSmartphone className="h-10 w-10 text-gray-800 mb-2" />
            <h3 className="font-bold text-lg mb-2">Cross-Browser</h3>
            <p>Consistent experience across all browsers and devices.</p>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-gray-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Infocera for jQuery?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><TrendingUp className="h-8 w-8 text-gray-800 mb-2" />jQuery Experts</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><MonitorSmartphone className="h-8 w-8 text-gray-800 mb-2" />Mobile-First</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><Code className="h-8 w-8 text-gray-800 mb-2" />Custom Solutions</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><MousePointerClick className="h-8 w-8 text-gray-800 mb-2" />Interactive UI</div>
          </div>
        </div>
      </section>
      {/* Industries/Use Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Industries & Use Cases</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind) => (
              <span key={ind} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">{ind}</span>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Our jQuery Development Process</h2>
          <ol className="space-y-4">
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-gray-800">1.</span> Discovery & Planning</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-gray-800">2.</span> UI/UX & Architecture</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-gray-800">3.</span> jQuery Development</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-gray-800">4.</span> Testing & QA</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-gray-800">5.</span> Launch & Support</li>
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
      <section className="py-16 bg-gradient-to-r from-gray-800 to-blue-400 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Ready to Enhance Your Web Project?</h2>
          <p className="mb-6">Contact Infocera for a free consultation and see how jQuery can add interactivity to your website.</p>
          <Button size="lg" className="bg-white text-gray-800 font-bold shadow hover:bg-blue-100" onClick={() => navigate('/contact')}>Get Started</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
} 