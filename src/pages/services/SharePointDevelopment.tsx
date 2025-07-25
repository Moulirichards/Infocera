import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const SharePointDevelopment = () => (
  <div className="min-h-screen bg-white">
    <Navbar />
    {/* Hero Section */}
    <section className="pt-32 pb-16 bg-gradient-to-r from-orange-900 to-orange-400 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">SharePoint Development</h1>
          <p className="text-xl mb-8">Empower collaboration and productivity with custom SharePoint solutions for your organization.</p>
          <div className="flex flex-row items-center md:block">
            <button className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-blue-100 transition-all duration-300">Start SharePoint Project</button>
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

    {/* What is SharePoint */}
    <section className="py-12 bg-white border-b">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-900 mb-4">What is SharePoint Development?</h2>
        <p className="text-gray-700 mb-4">SharePoint is Microsoft's powerful platform for creating intranets, document management systems, and collaboration portals. SharePoint development involves creating custom solutions, workflows, and applications that enhance business productivity and streamline organizational processes. Our expert developers create tailored SharePoint solutions that meet your specific business requirements.</p>
      </div>
    </section>

    {/* Why Choose Infocera SharePoint */}
    <section className="py-12 bg-orange-50 border-b">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-900 mb-6">Why Choose Infocera for SharePoint Development?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-orange-800 mb-2">Expert SharePoint Developers</h3>
            <p className="text-gray-700">Certified SharePoint developers with extensive experience in SharePoint Online, SharePoint 2019, and SharePoint 2016 development.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-orange-800 mb-2">Custom Solutions</h3>
            <p className="text-gray-700">Tailored SharePoint solutions designed specifically for your business processes and organizational needs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-orange-800 mb-2">End-to-End Services</h3>
            <p className="text-gray-700">Complete SharePoint services from planning and development to deployment and ongoing support.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-orange-800 mb-2">Modern SharePoint</h3>
            <p className="text-gray-700">Latest SharePoint features including modern pages, communication sites, and SharePoint Framework (SPFx) development.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Our SharePoint Services */}
    <section className="py-12 bg-white border-b">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-900 mb-6">Our SharePoint Development Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-orange-800 mb-3">SharePoint Intranet Development</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Corporate intranet portals</li>
              <li>• Employee communication sites</li>
              <li>• Company news and announcements</li>
              <li>• Team collaboration spaces</li>
            </ul>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-orange-800 mb-3">Document Management Systems</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Document libraries and versioning</li>
              <li>• Metadata management</li>
              <li>• Search and discovery</li>
              <li>• Records management</li>
            </ul>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-orange-800 mb-3">Custom SharePoint Applications</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Custom web parts</li>
              <li>• SharePoint add-ins</li>
              <li>• SPFx solutions</li>
              <li>• Power Platform integration</li>
            </ul>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-orange-800 mb-3">Workflow Automation</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Power Automate workflows</li>
              <li>• Approval processes</li>
              <li>• Business process automation</li>
              <li>• Forms and data collection</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* SharePoint Features */}
    <section className="py-12 bg-orange-50 border-b">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-900 mb-6">Key SharePoint Features We Implement</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-lg font-bold text-orange-800 mb-2">Modern User Interface</h3>
            <p className="text-gray-700">Responsive, mobile-friendly SharePoint sites with modern UI/UX design that enhances user experience and adoption.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-lg font-bold text-orange-800 mb-2">Advanced Security</h3>
            <p className="text-gray-700">Robust security features including permissions management, data encryption, and compliance with industry standards.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-lg font-bold text-orange-800 mb-2">Integration Capabilities</h3>
            <p className="text-gray-700">Seamless integration with Microsoft 365, Azure, and third-party applications for enhanced functionality.</p>
          </div>
        </div>
      </div>
    </section>

    {/* SharePoint Solutions */}
    <section className="py-12 bg-white border-b">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-900 mb-6">SharePoint Solutions We Offer</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">•</span>
              SharePoint Online Development
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">•</span>
              SharePoint 2019/2016 Development
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">•</span>
              SharePoint Migration Services
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">•</span>
              SharePoint Customization
            </li>
          </ul>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">•</span>
              SharePoint Consulting
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">•</span>
              SharePoint Support & Maintenance
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">•</span>
              SharePoint Training
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">•</span>
              SharePoint Integration Services
            </li>
          </ul>
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-12 bg-orange-50 border-b">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-900 mb-4">Benefits of SharePoint Development</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>Centralized document management and collaboration</li>
          <li>Improved team productivity and communication</li>
          <li>Automated business processes and workflows</li>
          <li>Enhanced security and compliance</li>
          <li>Scalable solutions that grow with your business</li>
          <li>Integration with existing Microsoft ecosystem</li>
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

export default SharePointDevelopment;
