import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CheckCircle, Bug, Target, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const QATestingServices = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-red-700 to-red-300 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">QA Testing Services</h1>
            <p className="text-xl mb-8">Ensure the quality and reliability of your software with our comprehensive QA and testing solutions.</p>
            <button className="bg-white text-red-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-red-100 transition-all duration-300" onClick={() => navigate('/contact')}>Get QA Help</button>
          </div>
          <div className="relative flex justify-center">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <rect x="8" y="12" width="8" height="6" rx="1" stroke="#fff" strokeWidth="2"/>
              <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#fff">✔️</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Testing Advantages</h2>
            <p className="text-xl text-gray-600">
              Comprehensive quality assurance for reliable software
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <CheckCircle className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assurance</h3>
              <p className="text-gray-600">Comprehensive testing to ensure software quality</p>
            </div>
            <div className="text-center p-6">
              <Bug className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bug Detection</h3>
              <p className="text-gray-600">Early identification and resolution of issues</p>
            </div>
            <div className="text-center p-6">
              <Target className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Performance Testing</h3>
              <p className="text-gray-600">Load and stress testing for optimal performance</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QATestingServices;
