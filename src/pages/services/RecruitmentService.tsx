import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const RecruitmentService = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-700 to-blue-300 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Recruitment Service</h1>
            <p className="text-xl mb-8">Find and hire top talent efficiently with our comprehensive recruitment solutions tailored to your business needs.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-purple-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-purple-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start Hiring</button>
              <span className="inline-block ml-2 md:hidden">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                  <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" stroke="#fff" strokeWidth="2"/>
                  <path d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4" stroke="#fff" strokeWidth="2"/>
                </svg>
              </span>
            </div>
          </div>
          <div className="relative justify-center hidden md:flex">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" stroke="#fff" strokeWidth="2"/>
              <path d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4" stroke="#fff" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </section>

      {/* What is Recruitment Service */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">What is Recruitment Service?</h2>
          <p className="text-gray-700 mb-4">Recruitment service is a comprehensive solution that helps organizations identify, attract, and hire the best talent for their specific needs. At Infocera, we understand that finding the right people is crucial for business success. Our recruitment services cover the entire hiring process, from job posting to candidate placement, ensuring a seamless experience for both employers and job seekers.</p>
        </div>
      </section>

      {/* Why Choose Infocera Recruitment */}
      <section className="py-12 bg-green-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-6">Why Choose Infocera Recruitment?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-green-800 mb-2">Industry Expertise</h3>
              <p className="text-gray-700">Specialized in IT recruitment with deep understanding of technology roles, skills, and industry trends.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-green-800 mb-2">Quality Candidates</h3>
              <p className="text-gray-700">Rigorous screening process ensures only qualified and experienced candidates are presented to you.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-green-800 mb-2">Fast Turnaround</h3>
              <p className="text-gray-700">Quick response times and efficient processes to fill your positions within your timeline.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-green-800 mb-2">Cost-Effective</h3>
              <p className="text-gray-700">Competitive pricing with value-added services that reduce your overall hiring costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Recruitment Services */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-6">Our Recruitment Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-green-800 mb-3">Permanent Recruitment</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Full-time IT professionals</li>
                <li>• Executive and leadership roles</li>
                <li>• Technical and non-technical positions</li>
                <li>• Industry-specific expertise</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-green-800 mb-3">Contract Staffing</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Project-based hiring</li>
                <li>• Temporary IT resources</li>
                <li>• Seasonal workforce needs</li>
                <li>• Specialized skill requirements</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-green-800 mb-3">Executive Search</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• C-level executives</li>
                <li>• Senior management roles</li>
                <li>• Board-level positions</li>
                <li>• Strategic leadership hiring</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-green-800 mb-3">Technical Recruitment</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Software developers</li>
                <li>• DevOps engineers</li>
                <li>• Data scientists</li>
                <li>• IT infrastructure specialists</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="py-12 bg-green-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-6">Our Recruitment Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
              <h3 className="text-lg font-bold text-green-800 mb-2">Requirement Analysis</h3>
              <p className="text-gray-700">Understanding your specific needs, company culture, and job requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
              <h3 className="text-lg font-bold text-green-800 mb-2">Candidate Sourcing</h3>
              <p className="text-gray-700">Active and passive candidate search through multiple channels and networks.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
              <h3 className="text-lg font-bold text-green-800 mb-2">Screening & Assessment</h3>
              <p className="text-gray-700">Technical evaluation, background verification, and cultural fit assessment.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">4</div>
              <h3 className="text-lg font-bold text-green-800 mb-2">Placement & Support</h3>
              <p className="text-gray-700">Final placement with ongoing support and follow-up for successful integration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">Benefits of Our Recruitment Service</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Access to a large pool of qualified IT professionals</li>
            <li>Reduced time-to-hire with efficient processes</li>
            <li>Cost savings through optimized recruitment strategies</li>
            <li>Better candidate quality through thorough screening</li>
            <li>Industry-specific expertise and market knowledge</li>
            <li>Ongoing support and candidate retention assistance</li>
          </ul>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-green-50">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">Contact Us</h2>
          {/* Form removed */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RecruitmentService;
