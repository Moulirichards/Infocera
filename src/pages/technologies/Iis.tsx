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
    q: 'What is IIS?',
    a: 'Internet Information Services (IIS) is a flexible, secure, and manageable web server for hosting anything on the web.'
  },
  {
    q: 'Why use IIS for web hosting?',
    a: 'IIS offers deep integration with Windows, security features, and support for ASP.NET and PHP.'
  },
  {
    q: 'What are common use cases for IIS?',
    a: 'Hosting ASP.NET applications, static websites, APIs, and enterprise portals.'
  },
  {
    q: 'Is IIS cloud-ready?',
    a: 'Yes, IIS can be deployed on-premises or in the cloud, and is available as managed services.'
  }
];

export default function Iis() {
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
                IIS Web Server
              </h1>
              <p className="text-xl text-blue-800 mb-8">
                Host, manage, and scale your web applications with Microsoft IIS.
              </p>
              <div className="flex items-center gap-4">
                <Button size="lg" className="bg-blue-700 text-white hover:bg-blue-800" onClick={() => navigate('/contact')}>Get Started</Button>
                {/* Mobile: Small logo beside button, Desktop: Hidden */}
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Microsoft_IIS_logo_%282022%29.svg" 
                  alt="IIS" 
                  className="w-12 h-12 sm:hidden bg-white rounded-lg p-1" 
                />
              </div>
            </div>
            {/* Desktop: Large logo, Mobile: Hidden */}
            <div className="relative flex justify-center hidden sm:block">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Microsoft_IIS_logo_%282022%29.svg" alt="IIS" className="w-32 h-32 inline-block mx-2 bg-white rounded-xl p-2" />
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Layers className="h-10 w-10 text-blue-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Windows Integration</h3>
            <p>Deep integration with Windows Server and Active Directory.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Code className="h-10 w-10 text-blue-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Security</h3>
            <p>Benefit from robust security features and access controls.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <Database className="h-10 w-10 text-blue-900 mb-2" />
            <h3 className="font-bold text-lg mb-2">Performance</h3>
            <p>Serve static and dynamic content efficiently at scale.</p>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-blue-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Infocera for IIS?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center"><TrendingUp className="h-8 w-8 text-blue-900 mb-2" />IIS Experts</div>
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
          <h2 className="text-2xl font-bold mb-6 text-center">Our IIS Process</h2>
          <ol className="space-y-4">
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-blue-700">1.</span> Requirement Analysis & Planning</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-blue-700">2.</span> Architecture & Design</li>
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
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to host with IIS?</h2>
          <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-100" onClick={() => navigate('/contact')}>Contact Us</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
} 