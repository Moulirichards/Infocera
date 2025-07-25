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
    q: 'What is integration testing?',
    a: 'Integration testing verifies the interaction between different modules or services in a software system.'
  },
  {
    q: 'Why is integration testing important?',
    a: 'It ensures that combined parts of an application work together as expected, catching issues early.'
  },
  {
    q: 'What tools are used for integration testing?',
    a: 'Popular tools include JUnit, TestNG, Postman, and Selenium.'
  },
  {
    q: 'Is integration testing automated?',
    a: 'Yes, integration tests are often automated for efficiency and repeatability.'
  }
];

export default function IntegrationTesting() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-indigo-50 to-indigo-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-6">
                Integration Testing
              </h1>
              <p className="text-xl text-indigo-800 mb-8">
                Ensure seamless collaboration between software modules with robust integration testing.
              </p>
              <div className="flex items-center gap-4">
                <Button size="lg" className="bg-indigo-700 text-white hover:bg-indigo-800" onClick={() => navigate('/contact')}>Get Started</Button>
                {/* Mobile: Small logo beside button, Desktop: Hidden */}
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" 
                  alt="Integration Testing" 
                  className="w-12 h-12 sm:hidden bg-white rounded-lg p-1" 
                />
              </div>
            </div>
            {/* Desktop: Large logo, Mobile: Hidden */}
            <div className="relative flex justify-center hidden sm:block">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" alt="Integration Testing" className="w-32 h-32 inline-block mx-2 bg-white rounded-xl p-2" />
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-indigo-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Layers className="h-10 w-10 text-indigo-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Module Interaction</h3>
            <p>Test how different modules and services work together.</p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Code className="h-10 w-10 text-indigo-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Automated Testing</h3>
            <p>Automate integration tests for faster feedback and reliability.</p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Database className="h-10 w-10 text-indigo-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Early Issue Detection</h3>
            <p>Catch integration issues before they reach production.</p>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-indigo-100 to-indigo-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Infocera for Integration Testing?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><TrendingUp className="h-8 w-8 text-indigo-900 mb-2" />Testing Experts</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><MonitorSmartphone className="h-8 w-8 text-indigo-900 mb-2" />Automated Tools</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><Globe className="h-8 w-8 text-indigo-900 mb-2" />Enterprise-Grade</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><Layers className="h-8 w-8 text-indigo-900 mb-2" />Agile Delivery</div>
          </div>
        </div>
      </section>
      {/* Industries/Use Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Industries & Use Cases</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind) => (
              <span key={ind} className="bg-indigo-100 text-indigo-900 px-4 py-2 rounded-full">{ind}</span>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-indigo-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Integration Testing Process</h2>
          <ol className="space-y-4">
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-indigo-700">1.</span> Requirement Analysis & Planning</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-indigo-700">2.</span> Test Case Design</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-indigo-700">3.</span> Test Automation</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-indigo-700">4.</span> Execution & Reporting</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-indigo-700">5.</span> Ongoing Support & Optimization</li>
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
      <section className="py-16 bg-gradient-to-r from-indigo-200 to-indigo-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to ensure seamless integration?</h2>
          <Button size="lg" className="bg-white text-indigo-800 hover:bg-indigo-100" onClick={() => navigate('/contact')}>Contact Us</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
} 