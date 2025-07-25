import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InventoryManagementSoftware = () => {
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
        <section className="pt-32 pb-16 bg-gradient-to-r from-blue-700 to-cyan-400 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Inventory Management Software</h1>
              <p className="text-xl mb-8">Track, manage, and optimize your inventory with real-time insights and automation tools.</p>
              <div className="flex flex-row items-center md:block">
                <button className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-blue-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start Inventory Project</button>
                <span className="inline-block ml-2 md:hidden">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                    <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                    <rect x="7" y="7" width="10" height="10" rx="2" stroke="#fff" strokeWidth="2"/>
                    <path d="M9 11h6M9 15h6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </div>
            </div>
            <div className="relative justify-center hidden md:flex">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
                <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                <rect x="7" y="7" width="10" height="10" rx="2" stroke="#fff" strokeWidth="2"/>
                <path d="M9 11h6M9 15h6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-800">Why Choose Infocera?</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
              <li>Customizable solutions for every business size</li>
              <li>Real-time inventory tracking and alerts</li>
              <li>Seamless integration with POS and e-commerce</li>
              <li>Cloud-based, secure, and scalable</li>
              <li>Expert support and training</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-800">Key Features & Benefits</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
              <li>Automated stock control and order management</li>
              <li>Barcode and RFID integration</li>
              <li>Detailed analytics and reporting</li>
              <li>Multi-location and multi-user support</li>
              <li>Mobile access and notifications</li>
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

export default InventoryManagementSoftware; 