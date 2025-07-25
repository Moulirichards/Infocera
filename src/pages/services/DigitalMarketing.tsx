import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const DigitalMarketing = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white service-page">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-700 to-pink-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Marketing</h1>
            <p className="text-xl mb-8">Infocera empowers brands to connect with their audiences through complete digital transformation. We elevate your online presence with a blend of performance-driven strategies, creative campaigns, and the latest digital marketing methodologies.</p>
            <div className="flex flex-row items-center gap-4 md:block">
              <button className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-blue-100 transition-all duration-300" onClick={() => navigate('/contact')}>Get a Free Consultation</button>
              <span className="inline-block md:hidden">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
                  <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                  <path d="M3 11l18-5v12l-18-5v-2z" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M7 15v2a2 2 0 002 2h2" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </div>
          <div className="relative justify-center hidden md:flex">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <path d="M3 11l18-5v12l-18-5v-2z" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M7 15v2a2 2 0 002 2h2" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* What is Digital Marketing */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">What is Digital Marketing?</h2>
          <p className="text-gray-700 mb-4">Digital Marketing is the process of promoting brands and businesses using digital channels and technologies. It includes SEO, SEM, content marketing, campaign promotions, e-commerce advertising, and extends to social media, email, and other digital media. Infocera leverages these channels to help you reach, engage, and convert your target audience.</p>
        </div>
      </section>

      {/* Why Digital Marketing? */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Why Choose Digital Marketing?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Acquire new visitors and customers</li>
            <li>Reach a global audience with precision targeting</li>
            <li>Achieve high visibility on search engines and social platforms</li>
            <li>Cost-effective and timely delivery of results</li>
            <li>Benefit from a highly qualified, experienced, and dedicated team</li>
            <li>24/7 targeted traffic and measurable results</li>
            <li>Connect with high-intent prospects and grow your business</li>
          </ul>
        </div>
      </section>

      {/* Our Digital Marketing Services */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Our Digital Marketing Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Search Engine Optimization (SEO)</h3>
              <p className="text-gray-700 mb-2">Boost your website's visibility and ranking on search engines to drive organic traffic and grow your business.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Search Engine Marketing (SEM)</h3>
              <p className="text-gray-700 mb-2">Leverage paid advertising and SEO strategies to achieve immediate and sustainable results for your website.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Social Media Marketing (SMM)</h3>
              <p className="text-gray-700 mb-2">Increase your website traffic and brand awareness through engaging content and targeted campaigns on social media platforms.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Email Marketing</h3>
              <p className="text-gray-700 mb-2">Promote your brand, nurture leads, and build customer loyalty with effective email campaigns.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Content Marketing</h3>
              <p className="text-gray-700 mb-2">Create and distribute valuable, relevant content to attract and engage your target audience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Infocera Digital Marketing */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Benefits of Infocera Digital Marketing</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Acquire new visitors and customers</li>
            <li>Expand your reach to a global audience</li>
            <li>Achieve high visibility on top search engines and social platforms</li>
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
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Contact Us</h2>
          {/* Form removed */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DigitalMarketing;
