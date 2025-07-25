import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const faqs = [
  { q: 'What is an educational web portal?', a: 'An educational web portal is an online platform that connects students, teachers, and institutions, providing resources, courses, and collaboration tools.' },
  { q: 'Can you customize the portal for my institution?', a: 'Absolutely! We tailor every portal to your institution\'s unique needs, branding, and workflows.' },
  { q: 'Is the portal mobile-friendly?', a: 'Yes, all our portals are fully responsive and accessible on any device.' },
  { q: 'Do you provide ongoing support?', a: 'Yes, we offer continuous support, updates, and training for your staff and users.' },
];

export default function EducationalWebPortal() {
  const navigate = useNavigate();
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  return (
    <div className="min-h-screen service-page flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-600 to-blue-200 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Educational Web Portal</h1>
            <p className="text-xl mb-8">Empower learning with interactive, user-friendly educational portals for schools, colleges, and training institutes.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-blue-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start Education Project</button>
              <span className="inline-block ml-2 md:hidden">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                  <rect x="7" y="7" width="10" height="10" rx="2" stroke="#fff" strokeWidth="2"/>
                  <path d="M12 10v4M10 12h4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
          </div>
          <div className="relative justify-center hidden md:flex">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <rect x="7" y="7" width="10" height="10" rx="2" stroke="#fff" strokeWidth="2"/>
              <path d="M12 10v4M10 12h4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <h3 className="font-bold text-lg mb-2">Student & Teacher Management</h3>
            <p>Efficiently manage users, roles, and permissions for seamless collaboration.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <h3 className="font-bold text-lg mb-2">Course & Content Delivery</h3>
            <p>Deliver courses, assignments, and resources with interactive tools and multimedia support.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <h3 className="font-bold text-lg mb-2">Analytics & Reporting</h3>
            <p>Track progress, engagement, and outcomes with real-time analytics and reports.</p>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-cyan-100 to-blue-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Infocera?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-xl shadow">EdTech Expertise</div>
            <div className="bg-white p-4 rounded-xl shadow">Custom Integrations</div>
            <div className="bg-white p-4 rounded-xl shadow">User-Centric Design</div>
            <div className="bg-white p-4 rounded-xl shadow">24/7 Support</div>
          </div>
        </div>
      </section>
      {/* Industries Served */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Who Can Benefit?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Schools</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Colleges</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Universities</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Coaching Institutes</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Online Educators</span>
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-cyan-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Portal Development Process</h2>
          <ol className="space-y-4">
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-blue-700">1.</span> Needs Assessment & Planning</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-blue-700">2.</span> UI/UX Design & Prototyping</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-blue-700">3.</span> Development & Integration</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-blue-700">4.</span> Testing & Training</li>
            <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4"><span className="font-bold text-blue-700">5.</span> Launch & Ongoing Support</li>
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
      {/* Contact/CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-cyan-400 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Ready to Revolutionize Learning?</h2>
          <p className="mb-6">Contact Infocera for a free demo and discover how our portals can transform education for your institution.</p>
          <Button size="lg" className="bg-white text-blue-700 font-bold shadow hover:bg-blue-100">Get a Free Demo</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
} 