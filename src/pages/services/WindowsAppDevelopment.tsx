import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WindowsAppDevelopment = () => {
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
        <section className="pt-32 pb-16 bg-gradient-to-r from-blue-700 to-blue-300 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Windows App Development</h1>
              <p className="text-xl mb-8">Build powerful, user-friendly Windows applications tailored to your business needs with our expert development team.</p>
              <div className="flex flex-row items-center md:block">
                <button className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-blue-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start Windows Project</button>
                <span className="inline-block ml-2 md:hidden">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                    <rect x="4" y="4" width="16" height="16" rx="3" stroke="#fff" strokeWidth="2" fill="#fff" fillOpacity="0.1" />
                    <rect x="4" y="4" width="7" height="7" stroke="#fff" strokeWidth="2" />
                    <rect x="13" y="4" width="7" height="7" stroke="#fff" strokeWidth="2" />
                    <rect x="4" y="13" width="7" height="7" stroke="#fff" strokeWidth="2" />
                    <rect x="13" y="13" width="7" height="7" stroke="#fff" strokeWidth="2" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="relative justify-center hidden md:flex">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
                <rect x="4" y="4" width="16" height="16" rx="3" stroke="#fff" strokeWidth="2" fill="#fff" fillOpacity="0.1" />
                <rect x="4" y="4" width="7" height="7" stroke="#fff" strokeWidth="2" />
                <rect x="13" y="4" width="7" height="7" stroke="#fff" strokeWidth="2" />
                <rect x="4" y="13" width="7" height="7" stroke="#fff" strokeWidth="2" />
                <rect x="13" y="13" width="7" height="7" stroke="#fff" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-800">Why Choose Infocera for Windows App Development?</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
              <li>Apps that are easy to use and user-friendly</li>
              <li>Engaging, descriptive, and secure</li>
              <li>Built with advanced features and the latest technology</li>
              <li>Highly profitable and scalable</li>
              <li>Developed by experienced, certified professionals</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-800">Our Windows App Development Services</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
              <li>Social Media Apps</li>
              <li>Business & Enterprise Apps</li>
              <li>Communication & System Applications</li>
              <li>Multimedia & Utility Apps</li>
              <li>Custom Solutions for Your Unique Needs</li>
            </ul>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Benefits of Our Windows Apps</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
            <li>Provide more value to your customers</li>
            <li>Enhance customer relationships</li>
            <li>Deliver the best user experience</li>
            <li>Boost your profits with feature-rich solutions</li>
          </ul>
        </section>

        <section className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">Get a Free Quote Now</h2>
            {/* Form removed */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WindowsAppDevelopment; 