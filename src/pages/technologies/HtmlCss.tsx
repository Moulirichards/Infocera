import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Code, MonitorSmartphone, Paintbrush, Globe, TrendingUp, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const faqs = [
  { q: 'What is HTML5?', a: 'HTML5 is the latest version of the HyperText Markup Language, used for structuring and presenting content on the web.' },
  { q: 'What is CSS3?', a: 'CSS3 is the latest evolution of Cascading Style Sheets, used for designing and visually enhancing web pages.' },
  { q: 'Are HTML5 and CSS3 mobile-friendly?', a: 'Yes, they enable responsive, mobile-first web design for all devices.' },
  { q: 'Do you offer custom web design?', a: 'Absolutely! Infocera creates custom, interactive, and visually stunning websites using HTML5 and CSS3.' },
];

const industries = [
  'E-commerce',
  'Education',
  'Healthcare',
  'Media',
  'Startups',
  'Enterprises',
  'Non-profits',
  'Government',
];

export default function HtmlCss() {
  const navigate = useNavigate();
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-pink-600 to-blue-400 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">HTML5 & CSS3 Web Design</h1>
          <p className="text-xl mb-6">Modern, responsive, and visually stunning websites with HTML5 & CSS3 by Infocera.</p>
          <Button size="lg" className="bg-white text-pink-600 font-bold shadow hover:bg-blue-100" onClick={() => navigate('/contact')}>Start Your Web Project</Button>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Paintbrush className="h-10 w-10 text-pink-600 mb-2" />
            <h3 className="font-bold text-lg mb-2">Stunning Visuals</h3>
            <p>CSS3 animations, gradients, and effects for beautiful UI.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <MonitorSmartphone className="h-10 w-10 text-pink-600 mb-2" />
            <h3 className="font-bold text-lg mb-2">Responsive Design</h3>
            <p>Mobile-first layouts for seamless experience on any device.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Code className="h-10 w-10 text-pink-600 mb-2" />
            <h3 className="font-bold text-lg mb-2">Semantic Markup</h3>
            <p>Clean, accessible, and SEO-friendly HTML5 structure.</p>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-pink-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Infocera for Web Design?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><TrendingUp className="h-8 w-8 text-pink-600 mb-2" />Modern Aesthetics</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><MonitorSmartphone className="h-8 w-8 text-pink-600 mb-2" />Mobile-First</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><Globe className="h-8 w-8 text-pink-600 mb-2" />SEO Optimized</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><Code className="h-8 w-8 text-pink-600 mb-2" />Custom Solutions</div>
          </div>
        </div>
      </section>
      {/* Industries/Use Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Industries & Use Cases</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind) => (
              <span key={ind} className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full">{ind}</span>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-pink-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Web Design Process</h2>
          <ol className="space-y-4">
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-pink-600">1.</span> Discovery & Planning</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-pink-600">2.</span> Wireframing & Prototyping</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-pink-600">3.</span> Custom HTML5/CSS3 Development</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-pink-600">4.</span> Testing & QA</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-pink-600">5.</span> Launch & Support</li>
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
      <section className="py-16 bg-gradient-to-r from-pink-600 to-blue-400 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Ready to Build a Modern Website?</h2>
          <p className="mb-6">Contact Infocera for a free consultation and see how HTML5 & CSS3 can elevate your web presence.</p>
          <Button size="lg" className="bg-white text-pink-600 font-bold shadow hover:bg-blue-100" onClick={() => navigate('/contact')}>Get Started</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
} 