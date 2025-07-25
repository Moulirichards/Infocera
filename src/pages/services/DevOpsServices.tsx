import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Cog, Zap, Shield, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const DevOpsServices = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">DevOps Services</h1>
            <p className="text-xl mb-8">Accelerate your software delivery and improve reliability with our end-to-end DevOps solutions.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-blue-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start DevOps Journey</button>
              <span className="inline-block ml-2 md:hidden">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                  <path d="M8 12a4 4 0 018 0M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
          </div>
          <div className="relative justify-center hidden md:flex">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <path d="M8 12a4 4 0 018 0M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">DevOps Benefits</h2>
            <p className="text-xl text-gray-600">
              Accelerate deployment, improve reliability, and reduce costs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Cog className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automation</h3>
              <p className="text-gray-600">Automated CI/CD pipelines and infrastructure management</p>
            </div>
            <div className="text-center p-6">
              <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Faster Delivery</h3>
              <p className="text-gray-600">Accelerated software delivery and deployment cycles</p>
            </div>
            <div className="text-center p-6">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enhanced Security</h3>
              <p className="text-gray-600">Built-in security practices and compliance</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DevOpsServices;
