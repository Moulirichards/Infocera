import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const UIUXDesign = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-pink-700 to-pink-300 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">UI/UX Design</h1>
            <p className="text-xl mb-8">Deliver exceptional user experiences and beautiful interfaces with our creative, user-centered UI/UX design services.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-pink-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-pink-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start Your Design</button>
              <span className="inline-block ml-2 md:hidden">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                  <rect x="8" y="8" width="8" height="8" rx="2" stroke="#fff" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="2" fill="#fff" />
                </svg>
              </span>
            </div>
          </div>
          <div className="relative justify-center hidden md:flex">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <rect x="8" y="8" width="8" height="8" rx="2" stroke="#fff" strokeWidth="2"/>
              <circle cx="12" cy="12" r="2" fill="#fff" />
            </svg>
          </div>
        </div>
      </section>

      {/* UI/UX Design Services */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-900 mb-4">UI/UX DESIGN SERVICES</h2>
          <h3 className="text-xl font-bold text-pink-800 mb-6">We Create Exceptional User Experiences</h3>
          <p className="text-gray-700 mb-8">We, at Infocera, understand that great design is not just about aesthetics but about creating meaningful user experiences that drive business growth. Our UI/UX design team studies your users, business goals, and market requirements to create designs that are both beautiful and functional.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-pink-50 p-6 rounded-lg">
              <h4 className="font-bold text-pink-800 mb-2">User Research & Analysis</h4>
              <p className="text-gray-700">Comprehensive user research, persona development, and user journey mapping to understand your target audience and their needs.</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg">
              <h4 className="font-bold text-pink-800 mb-2">Wireframing & Prototyping</h4>
              <p className="text-gray-700">Creating detailed wireframes and interactive prototypes to visualize user flows and test design concepts before development.</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg">
              <h4 className="font-bold text-pink-800 mb-2">UI Design</h4>
              <p className="text-gray-700">Beautiful, modern interface designs that are visually appealing, brand-consistent, and optimized for user engagement.</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg">
              <h4 className="font-bold text-pink-800 mb-2">UX Design</h4>
              <p className="text-gray-700">User experience design focused on creating intuitive, accessible, and enjoyable interactions that meet user goals.</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg">
              <h4 className="font-bold text-pink-800 mb-2">Mobile App Design</h4>
              <p className="text-gray-700">Native mobile app designs for iOS and Android with platform-specific guidelines and best practices.</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg">
              <h4 className="font-bold text-pink-800 mb-2">Design Systems</h4>
              <p className="text-gray-700">Comprehensive design systems with component libraries, style guides, and design tokens for consistent brand experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Infocera UI/UX */}
      <section className="py-12 bg-pink-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-900 mb-6">WHY CHOOSE TECH SYNAPSE FOR UI/UX DESIGN</h2>
          <h3 className="text-xl font-bold text-pink-800 mb-8">User-Centered Design Excellence</h3>
          <p className="text-gray-700 mb-8">Leading enterprises, startups, and agencies rely on our UI/UX design services as we stay true to user-centered design principles while delivering beautiful, functional designs.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <h4 className="font-bold text-pink-800 mb-2">User Research Driven</h4>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <h4 className="font-bold text-pink-800 mb-2">Modern Design Trends</h4>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <h4 className="font-bold text-pink-800 mb-2">Conversion Focused</h4>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <h4 className="font-bold text-pink-800 mb-2">Responsive Design</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-900 mb-6">OUR DESIGN PROCESS</h2>
          <h3 className="text-xl font-bold text-pink-800 mb-8">Systematic Approach to Design Excellence</h3>
          <p className="text-gray-700 mb-8">Infocera follows a proven design process that ensures we deliver exceptional UI/UX designs that meet your business objectives and user needs.</p>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-pink-50 p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
              <h4 className="text-lg font-bold text-pink-800 mb-2">Research & Discovery</h4>
              <p className="text-gray-700">Understanding your business, users, and market to define design requirements and user personas.</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
              <h4 className="text-lg font-bold text-pink-800 mb-2">Wireframing</h4>
              <p className="text-gray-700">Creating low-fidelity wireframes to establish information architecture and user flows.</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
              <h4 className="text-lg font-bold text-pink-800 mb-2">Prototyping</h4>
              <p className="text-gray-700">Building interactive prototypes to test user interactions and gather feedback.</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">4</div>
              <h4 className="text-lg font-bold text-pink-800 mb-2">Visual Design</h4>
              <p className="text-gray-700">Creating high-fidelity designs with brand colors, typography, and visual elements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Solutions */}
      <section className="py-12 bg-pink-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-900 mb-6">UI/UX DESIGN SOLUTIONS</h2>
          <h3 className="text-xl font-bold text-pink-800 mb-8">Comprehensive Design Services</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-pink-800 mb-2">WEBSITE UI/UX DESIGN</h4>
              <p className="text-gray-700">Modern, responsive website designs that provide exceptional user experiences across all devices and platforms.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-pink-800 mb-2">MOBILE APP DESIGN</h4>
              <p className="text-gray-700">Native mobile app designs for iOS and Android with intuitive navigation and engaging user interfaces.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-pink-800 mb-2">E-COMMERCE DESIGN</h4>
              <p className="text-gray-700">Conversion-optimized e-commerce designs that enhance user experience and drive sales.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-pink-800 mb-2">DASHBOARD DESIGN</h4>
              <p className="text-gray-700">Complex dashboard and admin panel designs with clear data visualization and efficient workflows.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-pink-800 mb-2">BRAND IDENTITY DESIGN</h4>
              <p className="text-gray-700">Complete brand identity design including logos, color palettes, typography, and visual guidelines.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-pink-800 mb-2">DESIGN SYSTEMS</h4>
              <p className="text-gray-700">Comprehensive design systems with reusable components and consistent design patterns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-900 mb-4">Benefits of Professional UI/UX Design</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Improved user engagement and satisfaction</li>
            <li>Higher conversion rates and business growth</li>
            <li>Reduced development costs and time</li>
            <li>Enhanced brand perception and credibility</li>
            <li>Better accessibility and user inclusivity</li>
            <li>Competitive advantage in the market</li>
          </ul>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-pink-50">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-900 mb-4">Contact Us</h2>
          {/* Form removed */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default UIUXDesign;
