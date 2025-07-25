import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Layers, Code, Database, TrendingUp, MonitorSmartphone, Globe } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const industries = [
  'Banking & Finance',
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
    q: 'What are Java frameworks like Spring, Struts, and Hibernate used for?',
    a: 'They are used to build scalable, secure, and maintainable enterprise applications in Java.'
  },
  {
    q: 'Why choose Spring for enterprise development?',
    a: 'Spring offers dependency injection, modularity, and a vast ecosystem for rapid, robust development.'
  },
  {
    q: 'What is Hibernate best for?',
    a: 'Hibernate is an ORM framework that simplifies database interactions and supports complex data models.'
  },
  {
    q: 'Is Struts still relevant?',
    a: 'Struts is used in legacy systems and for MVC-based web applications, though Spring MVC is now more popular.'
  }
];

export default function JavaFrameworks() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-50 to-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
                Java Frameworks: <span className="text-green-600">Spring, Struts, Hibernate</span>
              </h1>
              <p className="text-xl text-green-800 mb-8">
                Build robust, scalable, and secure enterprise applications with industry-leading Java frameworks.
              </p>
              <div className="flex items-center gap-4">
                <Button size="lg" className="bg-green-700 text-white hover:bg-green-800" onClick={() => navigate('/contact')}>Get Started</Button>
                {/* Mobile: Small logos beside button, Desktop: Hidden */}
                <div className="flex gap-2 sm:hidden">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring" className="w-8 h-8" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-8 h-8" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="Hibernate" className="w-8 h-8" />
                </div>
              </div>
            </div>
            {/* Desktop: Large logos, Mobile: Hidden */}
            <div className="relative flex justify-center hidden sm:block">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring" className="w-32 h-32 inline-block mx-2" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-32 h-32 inline-block mx-2" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="Hibernate" className="w-32 h-32 inline-block mx-2" />
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-green-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Layers className="h-10 w-10 text-green-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Modular Architecture</h3>
            <p>Spring and Struts enable modular, maintainable codebases for large-scale projects.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Code className="h-10 w-10 text-green-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Rapid Development</h3>
            <p>Leverage built-in tools and libraries for faster, more efficient development cycles.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Database className="h-10 w-10 text-green-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Database Integration</h3>
            <p>Hibernate ORM simplifies database access and supports complex data models.</p>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-green-100 to-green-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Infocera for Java Frameworks?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><TrendingUp className="h-8 w-8 text-green-900 mb-2" />Java Experts</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><MonitorSmartphone className="h-8 w-8 text-green-900 mb-2" />Enterprise-Grade</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><Globe className="h-8 w-8 text-green-900 mb-2" />Full Stack</div>
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
          <h2 className="text-2xl font-bold mb-6 text-center">Our Java Frameworks Process</h2>
          <ol className="space-y-4">
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-green-700">1.</span> Requirement Analysis & Architecture Design</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-green-700">2.</span> Framework Selection (Spring, Struts, Hibernate)</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-green-700">3.</span> Development & Integration</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-green-700">4.</span> Testing & Deployment</li>
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
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to build with Java Frameworks?</h2>
          <Button size="lg" className="bg-white text-green-800 hover:bg-green-100" onClick={() => navigate('/contact')}>Contact Us</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
} 