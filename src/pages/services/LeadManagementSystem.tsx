import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const LeadManagementSystem = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen service-page bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-cyan-600 to-blue-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Lead Management System</h1>
            <p className="text-xl mb-8">Streamline your sales process and boost conversions with a robust, easy-to-use lead management platform.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-green-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-green-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start Managing Leads</button>
              <span className="inline-block ml-2 md:hidden">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                  <path d="M12 7v4M12 15h.01" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
          </div>
          <div className="relative justify-center hidden md:flex">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <path d="M12 7v4M12 15h.01" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* What is Lead Management? */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-900 mb-4">What is Lead Management?</h2>
          <p className="text-gray-700 mb-4">Lead Management is the process of capturing, tracking, distributing, and nurturing leads throughout the sales cycle. Infocera's Lead Management System automates and streamlines every step, from lead capture to assignment to closure, ensuring no opportunity is missed.</p>
        </div>
      </section>

      {/* Why Lead Management? */}
      <section className="py-12 bg-cyan-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-900 mb-4">Why Choose Infocera Lead Management?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Capture leads automatically from multiple sources</li>
            <li>Distribute and assign leads to the right team members</li>
            <li>Track lead status, activities, and communications</li>
            <li>Prioritize and focus on hot/winning leads</li>
            <li>Automate personalized email and SMS follow-ups</li>
            <li>Monitor sales team productivity and lead progress</li>
            <li>Gain actionable insights with dashboards and analytics</li>
          </ul>
        </div>
      </section>

      {/* Features & Process */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-900 mb-6">Key Features & Process</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-cyan-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-cyan-800 mb-2">Automated Lead Capture</h3>
              <p className="text-gray-700 mb-2">Capture leads from websites, web forms, emails, chat, and social media. Integrate with your CRM for seamless data flow.</p>
            </div>
            <div className="bg-cyan-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-cyan-800 mb-2">Lead Assignment & Distribution</h3>
              <p className="text-gray-700 mb-2">Automatically assign leads to sales or telecalling teams based on source, location, or product. Ensure every lead is followed up promptly.</p>
            </div>
            <div className="bg-cyan-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-cyan-800 mb-2">Lead Nurturing & Communication</h3>
              <p className="text-gray-700 mb-2">Send personalized emails, SMS, and voice communications. Plan and track sales calls, visits, and follow-ups with reminders and activity planners.</p>
            </div>
            <div className="bg-cyan-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-cyan-800 mb-2">Analytics & Reporting</h3>
              <p className="text-gray-700 mb-2">Monitor lead status, sales funnel, team productivity, and marketing channel performance with real-time dashboards and custom reports.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Infocera Lead Management */}
      <section className="py-12 bg-cyan-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-900 mb-4">Benefits of Infocera Lead Management</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Convert more leads into paying customers</li>
            <li>Automate and streamline your sales process</li>
            <li>Improve collaboration between sales and marketing</li>
            <li>Gain full visibility into your sales pipeline</li>
            <li>Make data-driven decisions with advanced analytics</li>
            <li>Enhance customer experience and satisfaction</li>
          </ul>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-900 mb-4">Contact Us</h2>
          {/* Form removed */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LeadManagementSystem; 