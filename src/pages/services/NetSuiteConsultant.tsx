import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const NetSuiteConsultant = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-indigo-700 to-indigo-300 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">NetSuite Consultant</h1>
            <p className="text-xl mb-8">Optimize your business operations with expert NetSuite consulting and implementation services.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-indigo-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-indigo-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start NetSuite Project</button>
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

      {/* What is NetSuite */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">What is NetSuite?</h2>
          <p className="text-gray-700 mb-4">NetSuite is a comprehensive cloud-based ERP solution that provides a unified view of your business operations. This single platform approach helps greatly in automating your business processes, allowing you to scale quicker and grow smarter. Overheads and headcount are reduced, and decision-making is enhanced as real-time analytics show the insights required to run and grow a business effectively.</p>
        </div>
      </section>

      {/* Benefits of NetSuite */}
      <section className="py-12 bg-blue-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Benefits of NetSuite</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Richness of Features</h3>
              <p className="text-gray-700">NetSuite fits well across multiple industries and company sizes, providing rich functionalities for Manufacturing, Software Development, Wholesale Distribution, Professional Services, Nonprofits, and E-commerce companies out of the box.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Improved Visibility</h3>
              <p className="text-gray-700">Real-time visibility is crucial for making informed business decisions. Data can be accessed instantly, eliminating the need to extract and tie data from different sources, leading to more accurate and timely reports.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Modular Pricing Approach</h3>
              <p className="text-gray-700">NetSuite's modular approach enables users to select and license only the modules they actually need, empowering users and reducing costs for better bottom-line profits.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Seamless Integration</h3>
              <p className="text-gray-700">NetSuite can be efficiently integrated with other applications using iPaaS solutions, providing highly customizable connectors to connect with Salesforce, SkuVault, and many other applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NetSuite Products */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">NetSuite Products</h2>
          <p className="text-gray-700 mb-6">We offer comprehensive NetSuite services including implementation, customization, integration, support, and development services for the following NetSuite products:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-800">NetSuite ERP</h3>
              <p className="text-gray-700">Complete enterprise resource planning solution</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-800">NetSuite OneWorld</h3>
              <p className="text-gray-700">Multi-entity and multi-currency management</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-800">NetSuite OpenAir</h3>
              <p className="text-gray-700">Professional services automation</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-800">NetSuite PBCS</h3>
              <p className="text-gray-700">Planning and budgeting cloud service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features of NetSuite */}
      <section className="py-12 bg-blue-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Key Features of NetSuite</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Built-in Flexibility</h3>
              <p className="text-gray-700">Scale up, spin off, and adopt new business models quickly and easily without hassles. Your configurations migrate seamlessly with every upgrade.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Native Business Intelligence</h3>
              <p className="text-gray-700">Real-time analytics in the NetSuite ERP interface help users understand what they should be doing and how they can help the business grow.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Commerce-Ready ERP</h3>
              <p className="text-gray-700">Transform your core business system into a customer-facing commerce system with tailored, customer-oriented experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our NetSuite Services */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Our NetSuite Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                NetSuite ERP Business case and assessment
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                NetSuite Requirements Analysis and Process Mapping
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                NetSuite Solutioning and Designing
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                NetSuite Implementation and Deployment
              </li>
            </ul>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                QuickStart Solution for all NetSuite products
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Post Implementation Support
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                NetSuite Health check and Optimization
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Custom NetSuite Development Services
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Contact Us</h2>
          {/* Form removed */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NetSuiteConsultant;
