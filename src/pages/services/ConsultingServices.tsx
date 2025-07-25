import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Users, Lightbulb, Target, TrendingUp, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ConsultingServices = () => {
  const navigate = useNavigate();
  const services = [
    {
      name: "NetSuite Solution Consulting",
      description: "Expert NetSuite implementation and customization to streamline your business operations.",
      features: ["Implementation Planning", "Custom Development", "Integration Services", "Training & Support"],
      path: "/services/netsuite-consultant"
    },
    {
      name: "Software Architecture Consulting",
      description: "Strategic guidance on software architecture, technology selection, and system design.",
      features: ["Architecture Review", "Technology Strategy", "Performance Optimization", "Scalability Planning"],
      path: "/services/software-consultant"
    },
    {
      name: "SharePoint Development",
      description: "Custom SharePoint solutions for collaboration, document management, and workflow automation.",
      features: ["SharePoint Sites", "Workflow Development", "Custom Web Parts", "Migration Services"],
      path: "/services/sharepoint-development"
    },
    {
      name: "IT Strategy Consulting",
      description: "Comprehensive IT strategy and digital transformation consulting for modern businesses.",
      features: ["Digital Strategy", "Technology Roadmap", "Process Optimization", "Change Management"],
      path: "/services/it-strategy-consulting"
    },
    {
      name: "Recruitment Services",
      description: "Specialized IT recruitment services to help you find the right talent for your team.",
      features: ["Technical Recruitment", "Skills Assessment", "Cultural Fit Evaluation", "Onboarding Support"],
      path: "/services/recruitment-service"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-teal-800 to-cyan-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Consulting Services</h1>
            <p className="text-xl mb-8">Unlock your business potential with expert consulting tailored to your unique challenges and goals.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-blue-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start Consulting</button>
              <span className="inline-block ml-2 md:hidden">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                  <path d="M12 7v10M7 12h10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
          </div>
          <div className="relative justify-center hidden md:flex">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <path d="M12 7v10M7 12h10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Consulting Services</h2>
            <p className="text-xl text-gray-600">
              Strategic guidance and technical expertise for your business transformation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-fade-in border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button size="lg" variant="outline" className="border-white text-blue-900 hover:bg-white hover:text-blue-900">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Consulting?</h2>
            <p className="text-xl text-gray-600">
              Proven expertise and strategic insights that drive results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">Certified consultants with deep industry knowledge</p>
            </div>
            <div className="text-center p-6">
              <Lightbulb className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Insights</h3>
              <p className="text-gray-600">Data-driven recommendations and best practices</p>
            </div>
            <div className="text-center p-6">
              <Target className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Goal-Oriented</h3>
              <p className="text-gray-600">Solutions aligned with your business objectives</p>
            </div>
            <div className="text-center p-6">
              <TrendingUp className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-600">Track record of successful implementations</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultingServices;
