import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MousePointer, Target, BarChart3, Zap, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const PayPerClickManagement = () => {
  const navigate = useNavigate();
  const services = [
    {
      name: "Google Ads Management",
      description: "Expert Google Ads campaigns that maximize your ROI with strategic bidding and optimization.",
      features: ["Campaign Setup", "Keyword Research", "Ad Copy Testing", "Bid Optimization"]
    },
    {
      name: "Facebook Ads Management",
      description: "Targeted Facebook advertising campaigns that reach your ideal customers at the right time.",
      features: ["Audience Targeting", "Creative Development", "Campaign Optimization", "Performance Tracking"]
    },
    {
      name: "Display Advertising",
      description: "Eye-catching display ads across premium websites to build brand awareness and drive traffic.",
      features: ["Banner Design", "Retargeting Campaigns", "Placement Optimization", "Analytics Reporting"]
    },
    {
      name: "Shopping Campaigns",
      description: "Product-focused campaigns that showcase your inventory directly in search results.",
      features: ["Product Feed Setup", "Shopping Ads", "Price Comparison", "Inventory Management"]
    }
  ];

  return (
    <div className="min-h-screen service-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-purple-600 to-pink-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Pay Per Click Management</h1>
            <p className="text-xl mb-8">Maximize your ROI with expertly managed PPC campaigns that drive targeted traffic and conversions.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-blue-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start PPC Campaign</button>
              <span className="inline-block ml-2 md:hidden">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                  <path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
          </div>
          <div className="relative justify-center hidden md:flex">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive PPC Services</h2>
            <p className="text-xl text-gray-600">
              Full-service pay-per-click advertising across all major platforms
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
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our PPC Management?</h2>
            <p className="text-xl text-gray-600">
              Data-driven PPC strategies that maximize your advertising ROI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <MousePointer className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Click Optimization</h3>
              <p className="text-gray-600">Maximize clicks from qualified prospects</p>
            </div>
            <div className="text-center p-6">
              <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Precise Targeting</h3>
              <p className="text-gray-600">Reach your ideal customers with laser precision</p>
            </div>
            <div className="text-center p-6">
              <BarChart3 className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Performance Tracking</h3>
              <p className="text-gray-600">Detailed analytics and conversion tracking</p>
            </div>
            <div className="text-center p-6">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Results</h3>
              <p className="text-gray-600">Start seeing results within days, not months</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PayPerClickManagement;
