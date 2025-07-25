import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const BrochureDesign = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-teal-600 to-teal-200 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Brochure Design</h1>
            <p className="text-xl mb-8">Captivate your audience with stunning, professional brochures that communicate your brand story and drive results.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-teal-600 font-bold px-8 py-4 rounded-xl shadow hover:bg-teal-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start Your Brochure</button>
              <span className="inline-block ml-2 md:hidden">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                  <rect x="7" y="7" width="10" height="14" rx="2" stroke="#fff" strokeWidth="2"/>
                  <path d="M9 11h6M9 15h6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
          </div>
          <div className="relative justify-center hidden md:flex">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <rect x="7" y="7" width="10" height="14" rx="2" stroke="#fff" strokeWidth="2"/>
              <path d="M9 11h6M9 15h6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Brochure Design Services */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-4">BROCHURE DESIGN SERVICES</h2>
          <h3 className="text-xl font-bold text-teal-800 mb-6">We Create Compelling Marketing Materials</h3>
          <p className="text-gray-700 mb-8">We, at Infocera, understand that brochures are powerful marketing tools that can make or break your business impression. Our brochure design team combines creative design with strategic marketing principles to create brochures that not only look great but also drive results.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-teal-50 p-6 rounded-lg">
              <h4 className="font-bold text-teal-800 mb-2">Corporate Brochures</h4>
              <p className="text-gray-700">Professional corporate brochures that showcase your company's expertise, services, and value proposition to potential clients and partners.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg">
              <h4 className="font-bold text-teal-800 mb-2">Product Brochures</h4>
              <p className="text-gray-700">Detailed product brochures that highlight features, benefits, and specifications to help customers make informed purchasing decisions.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg">
              <h4 className="font-bold text-teal-800 mb-2">Service Brochures</h4>
              <p className="text-gray-700">Comprehensive service brochures that explain your offerings, processes, and unique value propositions to attract and retain clients.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg">
              <h4 className="font-bold text-teal-800 mb-2">Event Brochures</h4>
              <p className="text-gray-700">Engaging event brochures for conferences, seminars, workshops, and other events that attract attendees and sponsors.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg">
              <h4 className="font-bold text-teal-800 mb-2">Real Estate Brochures</h4>
              <p className="text-gray-700">Attractive real estate brochures that showcase properties, developments, and investment opportunities to potential buyers and investors.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg">
              <h4 className="font-bold text-teal-800 mb-2">Healthcare Brochures</h4>
              <p className="text-gray-700">Informative healthcare brochures that educate patients about services, treatments, and wellness programs in a professional manner.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Infocera Brochure Design */}
      <section className="py-12 bg-teal-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-6">WHY CHOOSE TECH SYNAPSE FOR BROCHURE DESIGN</h2>
          <h3 className="text-xl font-bold text-teal-800 mb-8">Creative Excellence & Strategic Design</h3>
          <p className="text-gray-700 mb-8">Leading businesses trust Infocera for their brochure design needs as we combine artistic creativity with strategic marketing thinking to deliver brochures that drive results.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <h4 className="font-bold text-teal-800 mb-2">Creative Design</h4>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <h4 className="font-bold text-teal-800 mb-2">Strategic Content</h4>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <h4 className="font-bold text-teal-800 mb-2">Print Ready</h4>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <h4 className="font-bold text-teal-800 mb-2">Quick Delivery</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Brochure Design Process */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-6">OUR BROCHURE DESIGN PROCESS</h2>
          <h3 className="text-xl font-bold text-teal-800 mb-8">Systematic Approach to Design Excellence</h3>
          <p className="text-gray-700 mb-8">Infocera follows a proven brochure design process that ensures we deliver exceptional brochures that effectively communicate your message and achieve your marketing goals.</p>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-teal-50 p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
              <h4 className="text-lg font-bold text-teal-800 mb-2">Discovery & Planning</h4>
              <p className="text-gray-700">Understanding your business, target audience, and marketing objectives to plan the brochure structure and content strategy.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
              <h4 className="text-lg font-bold text-teal-800 mb-2">Content Creation</h4>
              <p className="text-gray-700">Writing compelling copy and gathering high-quality images that effectively communicate your message and value proposition.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
              <h4 className="text-lg font-bold text-teal-800 mb-2">Design & Layout</h4>
              <p className="text-gray-700">Creating visually appealing layouts with proper typography, color schemes, and visual hierarchy to engage readers.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">4</div>
              <h4 className="text-lg font-bold text-teal-800 mb-2">Final Delivery</h4>
              <p className="text-gray-700">Delivering print-ready files in all required formats with specifications for professional printing and distribution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brochure Types */}
      <section className="py-12 bg-teal-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-6">BROCHURE TYPES WE DESIGN</h2>
          <h3 className="text-xl font-bold text-teal-800 mb-8">Comprehensive Brochure Design Solutions</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-teal-800 mb-2">TRIFOLD BROCHURES</h4>
              <p className="text-gray-700">Classic three-panel brochures perfect for product information, service details, and company overviews.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-teal-800 mb-2">BIFOLD BROCHURES</h4>
              <p className="text-gray-700">Four-panel brochures ideal for detailed product specifications and comprehensive service descriptions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-teal-800 mb-2">GATE FOLD BROCHURES</h4>
              <p className="text-gray-700">Premium brochures with folding panels that create dramatic reveals for luxury products and high-end services.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-teal-800 mb-2">Z-FOLD BROCHURES</h4>
              <p className="text-gray-700">Accordion-style brochures that provide ample space for detailed information and multiple product showcases.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-teal-800 mb-2">ROLL FOLD BROCHURES</h4>
              <p className="text-gray-700">Compact brochures that roll into a small size, perfect for pocket-sized information and quick references.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-teal-800 mb-2">CUSTOM SHAPE BROCHURES</h4>
              <p className="text-gray-700">Unique die-cut brochures with custom shapes and designs that stand out and create memorable impressions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brochure Design Packages */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-6">BROCHURE DESIGN PACKAGES</h2>
          <h3 className="text-xl font-bold text-teal-800 mb-8">Choose the Perfect Package for Your Business</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-teal-50 p-6 rounded-lg shadow">
              <h4 className="font-bold text-teal-800 mb-4 text-center">BASIC PACKAGE</h4>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• 2 Brochure Concepts</li>
                <li>• 2 Revisions</li>
                <li>• Print-Ready Files</li>
                <li>• Basic Content Writing</li>
                <li>• 3-5 Business Days</li>
              </ul>
              <div className="text-center">
                <p className="text-2xl font-bold text-teal-800">$199</p>
              </div>
            </div>
            <div className="bg-teal-100 p-6 rounded-lg shadow border-2 border-teal-400">
              <h4 className="font-bold text-teal-800 mb-4 text-center">STANDARD PACKAGE</h4>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• 3 Brochure Concepts</li>
                <li>• Unlimited Revisions</li>
                <li>• Print-Ready Files</li>
                <li>• Professional Content Writing</li>
                <li>• Stock Photos Included</li>
                <li>• 5-7 Business Days</li>
              </ul>
              <div className="text-center">
                <p className="text-2xl font-bold text-teal-800">$399</p>
              </div>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg shadow">
              <h4 className="font-bold text-teal-800 mb-4 text-center">PREMIUM PACKAGE</h4>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• 5 Brochure Concepts</li>
                <li>• Unlimited Revisions</li>
                <li>• Print-Ready Files</li>
                <li>• Professional Content Writing</li>
                <li>• Custom Photography</li>
                <li>• Brand Guidelines</li>
                <li>• Digital Version</li>
                <li>• 7-10 Business Days</li>
              </ul>
              <div className="text-center">
                <p className="text-2xl font-bold text-teal-800">$699</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-teal-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-4">Benefits of Professional Brochure Design</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Professional appearance and credibility</li>
            <li>Effective communication of your message</li>
            <li>Increased brand recognition and recall</li>
            <li>Higher conversion rates and sales</li>
            <li>Cost-effective marketing tool</li>
            <li>Tangible marketing material for distribution</li>
          </ul>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-4">Contact Us</h2>
          {/* Form removed */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BrochureDesign; 