import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Layers, Code, Database, TrendingUp, MonitorSmartphone, Globe } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const industries = [
  'Finance',
  'Healthcare',
  'E-commerce',
  'Education',
  'Telecom',
  'Retail',
  'Travel & Hospitality',
  'Government'
];

const faqs = [
  {
    q: 'What is software architecture?',
    a: 'Software architecture is the high-level structuring of software systems, defining components, their relationships, and guiding principles.'
  },
  {
    q: 'Why is architecture important?',
    a: 'Good architecture ensures scalability, maintainability, and performance of software systems.'
  },
  {
    q: 'What are common architecture patterns?',
    a: 'Layered, microservices, event-driven, client-server, and service-oriented architectures are common patterns.'
  },
  {
    q: 'How do you choose the right architecture?',
    a: 'The choice depends on business needs, scalability requirements, and technology stack.'
  }
];

export default function Architecture() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-yellow-50 to-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-yellow-900 mb-6">
                Software Architecture
              </h1>
              <p className="text-xl text-yellow-800 mb-8">
                Design robust, scalable, and maintainable systems with expert software architecture services.
              </p>
              <div className="flex items-center gap-4">
                <Button size="lg" className="bg-blue-700 text-white hover:bg-blue-800" onClick={() => navigate('/contact')}>Get Started</Button>
                {/* Mobile: Small logo beside button, Desktop: Hidden */}
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/architecture/architecture-original.svg" 
                  alt="Architecture" 
                  className="w-12 h-12 sm:hidden bg-white rounded-lg p-1" 
                  onError={(e) => {e.currentTarget.src = 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png';}} 
                />
              </div>
            </div>
            {/* Desktop: Large logo, Mobile: Hidden */}
            <div className="relative flex justify-center hidden sm:block">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/architecture/architecture-original.svg" alt="Architecture" className="w-32 h-32 inline-block mx-2 bg-white rounded-xl p-2" onError={(e) => {e.currentTarget.src = 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png';}} />
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-yellow-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Layers className="h-10 w-10 text-yellow-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Layered Design</h3>
            <p>Organize systems into logical layers for better separation of concerns.</p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Code className="h-10 w-10 text-yellow-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Microservices</h3>
            <p>Build scalable, independent services for modern applications.</p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Database className="h-10 w-10 text-yellow-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Data-Driven</h3>
            <p>Architect solutions for high data throughput and reliability.</p>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-yellow-100 to-yellow-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Infocera for Architecture?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><TrendingUp className="h-8 w-8 text-yellow-900 mb-2" />Architecture Experts</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><MonitorSmartphone className="h-8 w-8 text-yellow-900 mb-2" />Modern Tools</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><Globe className="h-8 w-8 text-yellow-900 mb-2" />Enterprise-Grade</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><Layers className="h-8 w-8 text-yellow-900 mb-2" />Agile Delivery</div>
          </div>
        </div>
      </section>
      {/* Industries/Use Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Industries & Use Cases</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind) => (
              <span key={ind} className="bg-yellow-100 text-yellow-900 px-4 py-2 rounded-full">{ind}</span>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-yellow-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Architecture Process</h2>
          <ol className="space-y-4">
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-yellow-700">1.</span> Requirement Analysis & Planning</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-yellow-700">2.</span> Architecture Design</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-yellow-700">3.</span> Technology Selection</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-yellow-700">4.</span> Implementation & Review</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-yellow-700">5.</span> Ongoing Support & Optimization</li>
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
      <section className="py-16 bg-gradient-to-r from-yellow-200 to-yellow-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to architect your next big idea?</h2>
          <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-100" onClick={() => navigate('/contact')}>Contact Us</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
} 