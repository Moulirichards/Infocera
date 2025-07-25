import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Lightbulb, Target, TrendingUp, Shield, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const ITStrategyConsulting = () => {
  const navigate = useNavigate();
  const services = [
    {
      name: "Digital Transformation",
      description: "Guide your organization through digital transformation with strategic planning and execution.",
      features: ["Digital Strategy", "Change Management", "Technology Roadmap", "Implementation Planning"]
    },
    {
      name: "IT Infrastructure Planning",
      description: "Design scalable IT infrastructure that supports your business growth and objectives.",
      features: ["Infrastructure Assessment", "Capacity Planning", "Technology Selection", "Cost Optimization"]
    },
    {
      name: "Cybersecurity Strategy",
      description: "Comprehensive security strategies to protect your digital assets and data.",
      features: ["Risk Assessment", "Security Framework", "Compliance Planning", "Incident Response"]
    },
    {
      name: "Cloud Strategy",
      description: "Strategic cloud adoption planning for improved efficiency and scalability.",
      features: ["Cloud Readiness", "Migration Strategy", "Cost Analysis", "Governance Framework"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-indigo-50 to-purple-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">IT Strategy Consulting</h1>
            <p className="text-xl mb-8">Align your IT strategy with business goals for sustainable growth and innovation.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-indigo-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-indigo-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start IT Strategy</button>
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

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">IT Strategy Services</h2>
            <p className="text-xl text-gray-600">
              Strategic technology consulting for business transformation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-fade-in border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our IT Strategy Consulting?</h2>
            <p className="text-xl text-gray-600">
              Strategic technology leadership for business success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <Lightbulb className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Vision</h3>
              <p className="text-gray-600">Long-term technology vision aligned with business goals</p>
            </div>
            <div className="text-center p-6">
              <Target className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Goal-Oriented</h3>
              <p className="text-gray-600">Strategies focused on achieving business objectives</p>
            </div>
            <div className="text-center p-6">
              <TrendingUp className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Enablement</h3>
              <p className="text-gray-600">Technology strategies that enable business growth</p>
            </div>
            <div className="text-center p-6">
              <Shield className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Risk Management</h3>
              <p className="text-gray-600">Comprehensive risk assessment and mitigation</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITStrategyConsulting;
