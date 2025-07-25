import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Code, Wifi, Database, TrendingUp, MonitorSmartphone, ArrowRight, Globe } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const faqs = [
  { q: 'What is IoT?', a: 'IoT (Internet of Things) refers to the network of interconnected devices that collect and exchange data.' },
  { q: 'What IoT solutions do you offer?', a: 'Infocera provides end-to-end IoT solutions including device integration, cloud connectivity, analytics, and custom dashboards.' },
  { q: 'What industries benefit from IoT?', a: 'Manufacturing, healthcare, logistics, smart homes, and agriculture are major adopters of IoT.' },
  { q: 'Do you offer IoT consulting?', a: 'Yes, we provide strategy, architecture, and implementation consulting for IoT projects.' },
];

const industries = [
  'Manufacturing',
  'Healthcare',
  'Logistics',
  'Smart Homes',
  'Agriculture',
  'Retail',
  'Enterprises',
  'Startups',
];

export default function IoTSolutions() {
  const navigate = useNavigate();
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-900 to-blue-400 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">IoT Solutions</h1>
          <p className="text-xl mb-6">Connect, monitor, and automate with smart IoT solutions by Infocera.</p>
          <Button size="lg" className="bg-white text-blue-900 font-bold shadow hover:bg-blue-100" onClick={() => navigate('/contact')}>Start Your IoT Project</Button>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Wifi className="h-10 w-10 text-blue-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Device Connectivity</h3>
            <p>Seamless integration of sensors, devices, and gateways.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Database className="h-10 w-10 text-blue-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Data Analytics</h3>
            <p>Real-time monitoring, analytics, and actionable insights.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Code className="h-10 w-10 text-blue-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Custom Dashboards</h3>
            <p>Interactive dashboards for control and visualization.</p>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-blue-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Infocera for IoT?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><TrendingUp className="h-8 w-8 text-blue-900 mb-2" />IoT Experts</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><MonitorSmartphone className="h-8 w-8 text-blue-900 mb-2" />Mobile-Ready</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><Wifi className="h-8 w-8 text-blue-900 mb-2" />Device Integration</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><Database className="h-8 w-8 text-blue-900 mb-2" />Data Driven</div>
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
          <h2 className="text-2xl font-bold mb-8 text-center">Our IoT Development Process</h2>
          <ol className="space-y-4">
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-blue-900">1.</span> Discovery & Planning</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-blue-900">2.</span> Architecture & Design</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-blue-900">3.</span> Device & Cloud Integration</li>
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
          <h2 className="text-2xl font-bold mb-4">Ready to Build with IoT?</h2>
          <p className="mb-6">Contact Infocera for a free consultation and see how IoT can power your next project.</p>
          <Button size="lg" className="bg-white text-blue-900 font-bold shadow hover:bg-blue-100" onClick={() => navigate('/contact')}>Get Started</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
