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
    q: 'What is an SQL Database?',
    a: 'An SQL Database is a relational database that uses Structured Query Language (SQL) for defining and manipulating data.'
  },
  {
    q: 'Why use SQL databases?',
    a: 'SQL databases are reliable, scalable, and widely used for structured data storage and management.'
  },
  {
    q: 'What are popular SQL databases?',
    a: 'Popular SQL databases include MySQL, PostgreSQL, Microsoft SQL Server, and Oracle.'
  },
  {
    q: 'Are SQL databases cloud-ready?',
    a: 'Yes, most SQL databases offer cloud-hosted and managed solutions.'
  }
];

export default function SqlDatabase() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                SQL Database Solutions
              </h1>
              <p className="text-xl text-blue-800 mb-8">
                Design, manage, and scale relational databases for your business needs.
              </p>
              <div className="flex items-center gap-4">
                <Button size="lg" className="bg-blue-700 text-white hover:bg-blue-800" onClick={() => navigate('/contact')}>Get Started</Button>
                {/* Mobile: Small logo beside button, Desktop: Hidden */}
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
                  alt="SQL Database" 
                  className="w-12 h-12 sm:hidden bg-white rounded-lg p-1" 
                />
              </div>
            </div>
            {/* Desktop: Large logo, Mobile: Hidden */}
            <div className="relative flex justify-center hidden sm:block">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL Database" className="w-32 h-32 inline-block mx-2 bg-white rounded-xl p-2" />
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Layers className="h-10 w-10 text-blue-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Structured Data</h3>
            <p>Store and manage structured data efficiently and securely.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Code className="h-10 w-10 text-blue-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Scalability</h3>
            <p>Scale your database infrastructure as your business grows.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Database className="h-10 w-10 text-blue-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Reliability</h3>
            <p>Ensure data integrity and high availability for mission-critical applications.</p>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-blue-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Infocera for SQL Databases?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><TrendingUp className="h-8 w-8 text-blue-900 mb-2" />Database Experts</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><MonitorSmartphone className="h-8 w-8 text-blue-900 mb-2" />Cloud-Ready</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><Globe className="h-8 w-8 text-blue-900 mb-2" />Enterprise-Grade</div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><Layers className="h-8 w-8 text-blue-900 mb-2" />Agile Delivery</div>
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
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Our SQL Database Process</h2>
          <ol className="space-y-4">
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-blue-700">1.</span> Requirement Analysis & Planning</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-blue-700">2.</span> Database Design & Modeling</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-blue-700">3.</span> Development & Testing</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-blue-700">4.</span> Deployment & Integration</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-blue-700">5.</span> Ongoing Support & Optimization</li>
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
      <section className="py-16 bg-gradient-to-r from-blue-200 to-blue-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to build with SQL Databases?</h2>
          <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-100" onClick={() => navigate('/contact')}>Contact Us</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
} 