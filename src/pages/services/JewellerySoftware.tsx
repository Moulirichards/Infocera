import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JewellerySoftware = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 w-full bg-gradient-to-br from-blue-50 to-white pb-16">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-r from-cyan-700 to-blue-400 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Jewellery Software</h1>
              <p className="text-xl mb-8">Manage your jewellery business with specialized software for inventory, sales, and customer relationships.</p>
              <div className="flex flex-row items-center md:block">
                <button className="bg-white text-cyan-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-cyan-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start Jewellery Project</button>
                <span className="inline-block ml-2 md:hidden">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                    <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                    <path d="M12 7l5 10H7l5-10z" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
            <div className="relative justify-center hidden md:flex">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
                <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                <path d="M12 7l5 10H7l5-10z" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-800">Why Choose Infocera?</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
              <li>Custom solutions for jewellery businesses</li>
              <li>Experienced team with deep industry knowledge</li>
              <li>Easy integration with POS and accounting systems</li>
              <li>Secure, cloud-based access</li>
              <li>Comprehensive support and training</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-800">Key Features & Benefits</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
              <li>Real-time inventory management</li>
              <li>Automated billing and invoicing</li>
              <li>Customer relationship management</li>
              <li>Barcode and RFID integration</li>
              <li>Detailed analytics and reporting</li>
              <li>Multi-branch and multi-user support</li>
              <li>Enhanced security and data protection</li>
            </ul>
          </div>
        </section>

        <section className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-800 text-center">Get a Free Quote Now</h2>
            {/* Form removed */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JewellerySoftware; 