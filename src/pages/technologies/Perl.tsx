import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Layers, Code, Database, TrendingUp, MonitorSmartphone, Globe } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const industries = [
  'IT & DevOps',
  'Telecom',
  'Banking & Finance',
  'Healthcare',
  'E-commerce',
  'Education',
  'Retail',
  'Government'
];

const faqs = [
  {
    q: 'What is Perl used for?',
    a: 'Perl is a versatile scripting language used for text processing, automation, web development, and system administration.'
  },
  {
    q: 'Is Perl still relevant?',
    a: 'Yes, Perl is widely used in legacy systems, bioinformatics, and for rapid prototyping.'
  },
  {
    q: 'What are the benefits of using Perl?',
    a: 'Perl excels at regular expressions, file manipulation, and rapid development of automation scripts.'
  },
  {
    q: 'Can Perl integrate with databases?',
    a: 'Yes, Perl has robust support for database integration and data processing.'
  }
];

export default function Perl() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 to-purple-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
                Perl Scripting & Automation
              </h1>
              <p className="text-xl text-purple-800 mb-8">
                Automate, process data, and build web applications with the power of Perl scripting.
              </p>
              <div className="flex items-center gap-4">
                <Button size="lg" className="bg-purple-700 text-white hover:bg-purple-800" onClick={() => navigate('/contact')}>Get Started</Button>
                {/* Mobile: Small logo beside button, Desktop: Hidden */}
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/perl/perl-original.svg" 
                  alt="Perl" 
                  className="w-12 h-12 sm:hidden" 
                />
              </div>
            </div>
            {/* Desktop: Large logo, Mobile: Hidden */}
            <div className="relative flex justify-center hidden sm:block">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/perl/perl-original.svg" alt="Perl" className="w-32 h-32 inline-block mx-2" />
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-purple-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Layers className="h-10 w-10 text-purple-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Text Processing</h3>
            <p>Efficiently process and manipulate text, logs, and data files.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Code className="h-10 w-10 text-purple-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Automation</h3>
            <p>Automate repetitive tasks and system administration with Perl scripts.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Database className="h-10 w-10 text-purple-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Database Integration</h3>
            <p>Connect and interact with databases for data-driven applications.</p>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-purple-100 to-purple-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Infocera for Perl Scripting?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><TrendingUp className="h-8 w-8 text-purple-900 mb-2" />Perl Experts</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><MonitorSmartphone className="h-8 w-8 text-purple-900 mb-2" />Cross-Platform</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><Globe className="h-8 w-8 text-purple-900 mb-2" />Enterprise-Grade</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><Layers className="h-8 w-8 text-purple-900 mb-2" />Process Driven</div>
          </div>
        </div>
      </section>
      {/* Industries/Use Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Industries & Use Cases</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind) => (
              <span key={ind} className="bg-purple-100 text-purple-900 px-4 py-2 rounded-full">{ind}</span>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-purple-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Perl Scripting Process</h2>
          <ol className="space-y-4">
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-purple-700">1.</span> Requirement Analysis & Script Planning</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-purple-700">2.</span> Script Development & Testing</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-purple-700">3.</span> Integration with Systems & Tools</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-purple-700">4.</span> Deployment & Automation</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-purple-700">5.</span> Ongoing Support & Optimization</li>
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
      <section className="py-16 bg-gradient-to-r from-purple-200 to-purple-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to automate with Perl scripting?</h2>
          <Button size="lg" className="bg-white text-purple-800 hover:bg-purple-100" onClick={() => navigate('/contact')}>Contact Us</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
} 