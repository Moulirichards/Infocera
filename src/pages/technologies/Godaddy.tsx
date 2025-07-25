import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Layers, Code, Database, TrendingUp, MonitorSmartphone, Globe } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const industries = [
  'Small Business',
  'E-commerce',
  'Startups',
  'Education',
  'Retail',
  'Media',
  'Nonprofits',
  'Personal Brands'
];

const faqs = [
  {
    q: 'What is GoDaddy hosting?',
    a: 'GoDaddy is a popular web hosting and domain registration provider offering scalable hosting solutions.'
  },
  {
    q: 'Why use GoDaddy for hosting?',
    a: 'GoDaddy provides reliable uptime, easy management, and affordable plans for businesses and individuals.'
  },
  {
    q: 'What services does GoDaddy offer?',
    a: 'GoDaddy offers shared, VPS, dedicated hosting, domain registration, SSL, and more.'
  },
  {
    q: 'Is GoDaddy secure?',
    a: 'Yes, GoDaddy provides SSL certificates, DDoS protection, and 24/7 support.'
  }
];

export default function Godaddy() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-50 to-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
                GoDaddy Hosting Solutions
              </h1>
              <p className="text-xl text-green-800 mb-8">
                Launch, host, and grow your online presence with GoDaddy's reliable hosting and domain services.
              </p>
              <div className="flex items-center gap-4">
                <Button size="lg" className="bg-green-700 text-white hover:bg-green-800" onClick={() => navigate('/contact')}>Get Started</Button>
                {/* Mobile: Small logo beside button, Desktop: Hidden */}
                <img 
                  src="https://img1.wsimg.com/ux/hosted-sites/brand-assets/godaddy-logo.svg" 
                  alt="GoDaddy" 
                  className="w-16 h-8 sm:hidden bg-white rounded-lg p-1" 
                />
              </div>
            </div>
            {/* Desktop: Large logo, Mobile: Hidden */}
            <div className="relative flex justify-center hidden sm:block">
              <img src="https://img1.wsimg.com/ux/hosted-sites/brand-assets/godaddy-logo.svg" alt="GoDaddy" className="w-48 h-24 inline-block mx-2 bg-white rounded-xl p-2" />
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-green-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Layers className="h-10 w-10 text-green-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Reliable Uptime</h3>
            <p>Enjoy high availability and uptime for your websites and apps.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Code className="h-10 w-10 text-green-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Easy Management</h3>
            <p>Intuitive dashboards and tools for managing domains and hosting.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Database className="h-10 w-10 text-green-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Scalable Solutions</h3>
            <p>Choose from shared, VPS, or dedicated hosting as your business grows.</p>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-green-100 to-green-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Infocera for GoDaddy?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><TrendingUp className="h-8 w-8 text-green-900 mb-2" />Hosting Experts</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><MonitorSmartphone className="h-8 w-8 text-green-900 mb-2" />Cloud-Native</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><Globe className="h-8 w-8 text-green-900 mb-2" />Enterprise-Grade</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><Layers className="h-8 w-8 text-green-900 mb-2" />Agile Delivery</div>
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
      <section className="py-16 bg-gradient-to-r from-green-50 to-green-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Our GoDaddy Hosting Process</h2>
          <ol className="space-y-4">
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-green-700">1.</span> Requirement Analysis & Planning</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-green-700">2.</span> Solution Selection & Setup</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-green-700">3.</span> Domain & Hosting Configuration</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-green-700">4.</span> Deployment & Testing</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-green-700">5.</span> Ongoing Support & Optimization</li>
          </ol>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            {faqs.map((faq, idx) => (
              <AccordionItem value={String(idx)} key={faq.q}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-green-200 to-green-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to launch with GoDaddy?</h2>
          <Button size="lg" className="bg-white text-green-800 hover:bg-green-100" onClick={() => navigate('/contact')}>Contact Us</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
} 