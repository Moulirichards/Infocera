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
    q: 'What is shell scripting?',
    a: 'Shell scripting is writing scripts for command-line interpreters to automate tasks on Unix/Linux systems.'
  },
  {
    q: 'Why use shell scripting?',
    a: 'It automates repetitive tasks, manages system operations, and integrates tools efficiently.'
  },
  {
    q: 'What shells are commonly used?',
    a: 'Bash, Zsh, and Sh are popular Unix/Linux shells.'
  },
  {
    q: 'Is shell scripting only for Linux?',
    a: 'While most common on Unix/Linux, scripting is also possible on Windows with PowerShell.'
  }
];

export default function Shell() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Shell Scripting
              </h1>
              <p className="text-xl text-gray-800 mb-8">
                Automate system tasks and streamline operations with powerful shell scripting solutions.
              </p>
              <div className="flex items-center gap-4">
                <Button size="lg" className="bg-gray-700 text-white hover:bg-gray-800" onClick={() => navigate('/contact')}>Get Started</Button>
                {/* Mobile: Small logo beside button, Desktop: Hidden */}
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" 
                  alt="Shell Scripting" 
                  className="w-12 h-12 sm:hidden bg-white rounded-lg p-1" 
                />
              </div>
            </div>
            {/* Desktop: Large logo, Mobile: Hidden */}
            <div className="relative flex justify-center hidden sm:block">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" alt="Shell Scripting" className="w-32 h-32 inline-block mx-2 bg-white rounded-xl p-2" />
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Layers className="h-10 w-10 text-gray-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Task Automation</h3>
            <p>Automate repetitive and complex system tasks efficiently.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Code className="h-10 w-10 text-gray-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">System Integration</h3>
            <p>Integrate various tools and processes using scripts.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Database className="h-10 w-10 text-gray-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Cross-Platform</h3>
            <p>Support for Unix/Linux and Windows environments.</p>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-gray-100 to-gray-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Infocera for Shell Scripting?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><TrendingUp className="h-8 w-8 text-gray-900 mb-2" />Scripting Experts</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><MonitorSmartphone className="h-8 w-8 text-gray-900 mb-2" />Cross-Platform</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><Globe className="h-8 w-8 text-gray-900 mb-2" />Enterprise-Grade</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><Layers className="h-8 w-8 text-gray-900 mb-2" />Agile Delivery</div>
          </div>
        </div>
      </section>
      {/* Industries/Use Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Industries & Use Cases</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind) => (
              <span key={ind} className="bg-gray-100 text-gray-900 px-4 py-2 rounded-full">{ind}</span>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Shell Scripting Process</h2>
          <ol className="space-y-4">
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-gray-700">1.</span> Requirement Analysis & Planning</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-gray-700">2.</span> Script Design & Development</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-gray-700">3.</span> Testing & Validation</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-gray-700">4.</span> Deployment & Integration</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-gray-700">5.</span> Ongoing Support & Optimization</li>
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
      <section className="py-16 bg-gradient-to-r from-gray-200 to-gray-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to automate your operations?</h2>
          <Button size="lg" className="bg-white text-gray-800 hover:bg-gray-100" onClick={() => navigate('/contact')}>Contact Us</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
} 