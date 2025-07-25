import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const SearchEngineMarketing = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white service-page">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-700 to-indigo-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Search Engine Marketing</h1>
            <p className="text-xl mb-8">Boost your online visibility and drive targeted traffic with expert SEM strategies and campaigns.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-blue-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start SEM Campaign</button>
              <span className="inline-block ml-2 md:hidden">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                  <path d="M8 16h8M8 12h8M8 8h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
          </div>
          <div className="relative justify-center hidden md:flex">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <path d="M8 16h8M8 12h8M8 8h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* What is SEM */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-900 mb-4">What is Search Engine Marketing?</h2>
          <p className="text-gray-700 mb-4">Search Engine Marketing (SEM) is a powerful digital marketing technique that leverages search engines to increase your website's visibility and attract more visitors. SEM combines paid advertising (such as Google Ads) with proven SEO tactics to generate immediate and sustainable traffic. It's the ideal solution for businesses looking to accelerate growth and reach new customers quickly.</p>
        </div>
      </section>

      {/* Why SEM? */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-900 mb-4">Why Choose SEM for Your Business?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Acquire new visitors and customers rapidly</li>
            <li>Reach a global audience with precision targeting</li>
            <li>Achieve high visibility on major search engines like Google, Yahoo, and Bing</li>
            <li>Cost-effective and timely delivery of results</li>
            <li>Benefit from a highly qualified, experienced, and dedicated team</li>
            <li>24/7 targeted traffic and measurable results</li>
            <li>Connect with high-intent prospects and grow your business</li>
          </ul>
        </div>
      </section>

      {/* Our SEM Services */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-900 mb-6">Our SEM Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-orange-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-orange-800 mb-2">Keyword Research</h3>
              <p className="text-gray-700 mb-2">We identify the most effective keywords to drive relevant traffic to your website, ensuring your ads reach the right audience.</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-orange-800 mb-2">Market Analysis</h3>
              <p className="text-gray-700 mb-2">Our team analyzes your market and competitors to uncover keyword opportunities and craft a winning SEM strategy tailored to your business goals.</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-orange-800 mb-2">Ad Campaign Design</h3>
              <p className="text-gray-700 mb-2">We design and manage compelling ad campaigns across multiple platforms, focusing on your brand, products, and target segments for maximum impact.</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-orange-800 mb-2">PPC Services</h3>
              <p className="text-gray-700 mb-2">Infocera delivers high-performance Pay-Per-Click (PPC) campaigns that maximize your ROI by targeting qualified leads and optimizing every click.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Infocera SEM */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-900 mb-4">Benefits of Infocera SEM Services</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Acquire new visitors and customers</li>
            <li>Expand your reach to a global audience</li>
            <li>Achieve high visibility on top search engines</li>
            <li>Competitive pricing and timely project delivery</li>
            <li>Work with a skilled, reliable, and experienced team</li>
            <li>24/7 targeted traffic and measurable results</li>
            <li>Connect with high-intent prospects and grow your business</li>
          </ul>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-900 mb-4">Contact Us</h2>
          {/* Form removed */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SearchEngineMarketing;
