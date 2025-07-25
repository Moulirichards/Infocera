import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const SEOCopywriting = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen service-page bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-green-600 to-blue-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">SEO Copywriting</h1>
            <p className="text-xl mb-8">Boost your search rankings and engage readers with expertly crafted, SEO-optimized content.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-emerald-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-emerald-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start SEO Copywriting</button>
              <span className="inline-block ml-2 md:hidden">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                  <path d="M8 12h8M8 16h8M8 8h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
          </div>
          <div className="relative justify-center hidden md:flex">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <path d="M8 12h8M8 16h8M8 8h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* What is SEO Copywriting */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">What is SEO Copywriting?</h2>
          <p className="text-gray-700 mb-4">SEO Copywriting is the art and science of creating content that is both valuable to your audience and optimized for search engines. It involves strategic keyword placement, engaging storytelling, and a focus on driving organic visibility for your website. With Infocera, your content will not only rank higher but also convert more visitors into customers.</p>
        </div>
      </section>

      {/* Why SEO Copywriting? */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">Why Invest in SEO Copywriting?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Increase your website's organic search visibility</li>
            <li>Engage and inform your target audience</li>
            <li>Build authority and trust with high-quality content</li>
            <li>Drive more qualified leads and conversions</li>
            <li>Stay ahead of competitors with fresh, optimized content</li>
          </ul>
        </div>
      </section>

      {/* Our SEO Copywriting Services */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-6">Our SEO Copywriting Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-green-800 mb-2">Keyword Research</h3>
              <p className="text-gray-700 mb-2">We identify the best keywords for your business to ensure your content reaches the right audience and ranks for high-value search terms.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-green-800 mb-2">Market Analysis</h3>
              <p className="text-gray-700 mb-2">Our team analyzes your industry and competitors to uncover content opportunities and develop a winning content strategy.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-green-800 mb-2">Content Creation</h3>
              <p className="text-gray-700 mb-2">We craft engaging, SEO-optimized website content, blog posts, articles, and landing pages that drive results.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-green-800 mb-2">Content Optimization</h3>
              <p className="text-gray-700 mb-2">We optimize your existing content for search engines, improving readability, keyword targeting, and conversion potential.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Infocera SEO Copywriting */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">Benefits of Infocera SEO Copywriting</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Boost your website's search engine rankings</li>
            <li>Attract and retain more visitors with valuable content</li>
            <li>Enhance your brand's authority and credibility</li>
            <li>Increase conversions with persuasive, action-oriented copy</li>
            <li>Enjoy ongoing support from our expert content team</li>
          </ul>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">Contact Us</h2>
          {/* Form removed */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SEOCopywriting; 