import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const LogoDesign = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-indigo-700 to-pink-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Logo Design</h1>
            <p className="text-xl mb-8">Make a memorable first impression with a unique, professional logo crafted to represent your brand identity.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-indigo-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-indigo-100 transition-all duration-300" onClick={() => navigate('/contact')}>Get Your Logo</button>
              <span className="inline-block ml-2 md:hidden">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                  <path d="M12 7a5 5 0 100 10 5 5 0 000-10z" stroke="#fff" strokeWidth="2"/>
                  <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#fff">L</text>
                </svg>
              </span>
            </div>
          </div>
          <div className="relative justify-center hidden md:flex">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <path d="M12 7a5 5 0 100 10 5 5 0 000-10z" stroke="#fff" strokeWidth="2"/>
              <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#fff">L</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Logo Design Services */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-900 mb-4">LOGO DESIGN SERVICES</h2>
          <h3 className="text-xl font-bold text-yellow-800 mb-6">We Create Memorable Brand Identities</h3>
          <p className="text-gray-700 mb-8">We, at Infocera, understand that a logo is the visual foundation of your brand identity. Our logo design team combines creativity with strategic thinking to create logos that not only look great but also communicate your brand values and resonate with your target audience.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-bold text-yellow-800 mb-2">Brand Research & Strategy</h4>
              <p className="text-gray-700">Comprehensive brand research, competitor analysis, and target audience study to create logos that align with your brand strategy.</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-bold text-yellow-800 mb-2">Custom Logo Design</h4>
              <p className="text-gray-700">Unique, handcrafted logos designed specifically for your business, industry, and target market requirements.</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-bold text-yellow-800 mb-2">Logo Variations</h4>
              <p className="text-gray-700">Multiple logo variations including horizontal, vertical, icon-only, and text-only versions for different applications.</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-bold text-yellow-800 mb-2">Logo Redesign</h4>
              <p className="text-gray-700">Modernize and refresh existing logos to better reflect your current brand positioning and market trends.</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-bold text-yellow-800 mb-2">Brand Guidelines</h4>
              <p className="text-gray-700">Comprehensive brand guidelines including logo usage rules, color palettes, typography, and spacing guidelines.</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-bold text-yellow-800 mb-2">Logo Animation</h4>
              <p className="text-gray-700">Animated logo versions for digital platforms, websites, and video content to enhance brand engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Infocera Logo Design */}
      <section className="py-12 bg-yellow-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-900 mb-6">WHY CHOOSE TECH SYNAPSE FOR LOGO DESIGN</h2>
          <h3 className="text-xl font-bold text-yellow-800 mb-8">Creative Excellence & Strategic Design</h3>
          <p className="text-gray-700 mb-8">Leading businesses trust Infocera for their logo design needs as we combine artistic creativity with strategic brand thinking to deliver logos that make lasting impressions.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <h4 className="font-bold text-yellow-800 mb-2">Creative Excellence</h4>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <h4 className="font-bold text-yellow-800 mb-2">Strategic Approach</h4>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <h4 className="font-bold text-yellow-800 mb-2">Multiple Revisions</h4>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <h4 className="font-bold text-yellow-800 mb-2">Quick Turnaround</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Design Process */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-900 mb-6">OUR LOGO DESIGN PROCESS</h2>
          <h3 className="text-xl font-bold text-yellow-800 mb-8">Systematic Approach to Creative Excellence</h3>
          <p className="text-gray-700 mb-8">Infocera follows a proven logo design process that ensures we deliver exceptional logos that perfectly represent your brand identity.</p>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
              <h4 className="text-lg font-bold text-yellow-800 mb-2">Discovery & Research</h4>
              <p className="text-gray-700">Understanding your business, industry, competitors, and target audience to define design direction.</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
              <h4 className="text-lg font-bold text-yellow-800 mb-2">Concept Development</h4>
              <p className="text-gray-700">Creating multiple logo concepts and design directions based on research and brand strategy.</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
              <h4 className="text-lg font-bold text-yellow-800 mb-2">Refinement</h4>
              <p className="text-gray-700">Refining selected concepts based on feedback and creating final logo variations.</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">4</div>
              <h4 className="text-lg font-bold text-yellow-800 mb-2">Final Delivery</h4>
              <p className="text-gray-700">Delivering final logo files in all required formats with brand guidelines and usage instructions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Design Solutions */}
      <section className="py-12 bg-yellow-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-900 mb-6">LOGO DESIGN SOLUTIONS</h2>
          <h3 className="text-xl font-bold text-yellow-800 mb-8">Comprehensive Logo Design Services</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-yellow-800 mb-2">STARTUP LOGO DESIGN</h4>
              <p className="text-gray-700">Professional logos for startups and new businesses that establish strong brand presence from day one.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-yellow-800 mb-2">CORPORATE LOGO DESIGN</h4>
              <p className="text-gray-700">Sophisticated logos for established businesses that convey trust, professionalism, and industry expertise.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-yellow-800 mb-2">E-COMMERCE LOGO DESIGN</h4>
              <p className="text-gray-700">Conversion-focused logos for online businesses that build trust and encourage customer engagement.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-yellow-800 mb-2">RESTAURANT LOGO DESIGN</h4>
              <p className="text-gray-700">Appetizing logos for restaurants and food businesses that create memorable dining experiences.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-yellow-800 mb-2">TECH LOGO DESIGN</h4>
              <p className="text-gray-700">Modern, innovative logos for technology companies that reflect cutting-edge solutions and forward-thinking.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-yellow-800 mb-2">REAL ESTATE LOGO DESIGN</h4>
              <p className="text-gray-700">Trustworthy logos for real estate businesses that convey stability, professionalism, and reliability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Design Packages */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-900 mb-6">LOGO DESIGN PACKAGES</h2>
          <h3 className="text-xl font-bold text-yellow-800 mb-8">Choose the Perfect Package for Your Business</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg shadow">
              <h4 className="font-bold text-yellow-800 mb-4 text-center">BASIC PACKAGE</h4>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• 3 Logo Concepts</li>
                <li>• 2 Revisions</li>
                <li>• High-Resolution Files</li>
                <li>• Basic Brand Guidelines</li>
                <li>• 3-5 Business Days</li>
              </ul>
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-800">$299</p>
              </div>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg shadow border-2 border-yellow-400">
              <h4 className="font-bold text-yellow-800 mb-4 text-center">STANDARD PACKAGE</h4>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• 5 Logo Concepts</li>
                <li>• Unlimited Revisions</li>
                <li>• All File Formats</li>
                <li>• Complete Brand Guidelines</li>
                <li>• Logo Animation</li>
                <li>• 5-7 Business Days</li>
              </ul>
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-800">$499</p>
              </div>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg shadow">
              <h4 className="font-bold text-yellow-800 mb-4 text-center">PREMIUM PACKAGE</h4>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• 8 Logo Concepts</li>
                <li>• Unlimited Revisions</li>
                <li>• All File Formats</li>
                <li>• Complete Brand Guidelines</li>
                <li>• Logo Animation</li>
                <li>• Business Card Design</li>
                <li>• Letterhead Design</li>
                <li>• 7-10 Business Days</li>
              </ul>
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-800">$799</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-yellow-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-900 mb-4">Benefits of Professional Logo Design</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Strong brand recognition and memorability</li>
            <li>Professional appearance and credibility</li>
            <li>Consistent brand identity across all platforms</li>
            <li>Competitive advantage in the market</li>
            <li>Increased customer trust and loyalty</li>
            <li>Scalable design for future growth</li>
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

export default LogoDesign; 