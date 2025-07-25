import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const BrandConsulting = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen service-page bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-indigo-600 to-pink-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Brand Consulting</h1>
            <p className="text-xl mb-8">Elevate your brand with expert consulting that defines your identity, voice, and market positioning for lasting impact.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-indigo-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-indigo-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start Brand Journey</button>
              <span className="inline-block ml-2 md:hidden">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                  <path d="M12 7v10M7 12h10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
          </div>
          <div className="relative justify-center hidden md:flex">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <path d="M12 7v10M7 12h10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* What is Brand Consulting */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-900 mb-4">What is Brand Consulting?</h2>
          <p className="text-gray-700 mb-4">Brand consulting is the process of developing, positioning, and managing your brand to ensure it resonates with your target audience. At Infocera, we combine market research, creative strategy, and business insights to help you build a brand that stands out and drives growth.</p>
        </div>
      </section>

      {/* Why Brand Consulting? */}
      <section className="py-12 bg-yellow-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-900 mb-4">Why Invest in Brand Consulting?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Establish a strong, memorable brand identity</li>
            <li>Position your business for long-term success</li>
            <li>Connect emotionally with your target audience</li>
            <li>Differentiate from competitors in your industry</li>
            <li>Drive customer loyalty and advocacy</li>
          </ul>
        </div>
      </section>

      {/* Our Brand Consulting Services */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-900 mb-6">Our Brand Consulting Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-yellow-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-yellow-800 mb-2">Brand Strategy & Positioning</h3>
              <p className="text-gray-700 mb-2">We help you define your brand's purpose, values, and unique positioning to ensure you stand out in the market.</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-yellow-800 mb-2">Identity & Messaging Development</h3>
              <p className="text-gray-700 mb-2">We craft compelling brand identities and messaging frameworks that connect with your audience and communicate your value.</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-yellow-800 mb-2">Market Research & Analysis</h3>
              <p className="text-gray-700 mb-2">Our team conducts in-depth market research to uncover insights and opportunities for your brand's growth.</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-yellow-800 mb-2">Brand Audits & Workshops</h3>
              <p className="text-gray-700 mb-2">We evaluate your current brand performance and facilitate workshops to align your team and strategy for success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Infocera Brand Consulting */}
      <section className="py-12 bg-yellow-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-900 mb-4">Benefits of Infocera Brand Consulting</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Build a strong, differentiated brand</li>
            <li>Increase brand awareness and market share</li>
            <li>Enhance customer loyalty and trust</li>
            <li>Drive business growth and profitability</li>
            <li>Access ongoing support from our expert team</li>
          </ul>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-900 mb-4">Contact Us</h2>
          {/* Form removed */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BrandConsulting; 