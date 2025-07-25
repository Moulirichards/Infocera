import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Palette, Layers, Image, FileText, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const CreativeDesign = () => {
  const navigate = useNavigate();
  const services = [
    {
      name: "UI/UX Design",
      description: "Create exceptional user experiences with intuitive interfaces that drive engagement and conversions.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
      path: "/services/ui-ux-design"
    },
    {
      name: "Logo Design",
      description: "Memorable brand identities that capture your company's essence and stand out in the market.",
      features: ["Brand Analysis", "Concept Development", "Vector Graphics", "Brand Guidelines"],
      path: "/services/logo-design"
    },
    {
      name: "Brochure Design",
      description: "Professional marketing materials that communicate your message with visual impact.",
      features: ["Print Design", "Digital Brochures", "Layout Design", "Brand Consistency"],
      path: "/services/brochure-design"
    },
    {
      name: "Web Design",
      description: "Stunning website designs that combine aesthetics with functionality for optimal user experience.",
      features: ["Responsive Design", "Visual Hierarchy", "Brand Integration", "Conversion Optimization"],
      path: "/services/website-design"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-pink-800 to-pink-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Creative Design</h1>
            <p className="text-xl mb-8">Bring your brand to life with innovative, eye-catching creative design solutions for digital and print.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-pink-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-pink-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start Creative Project</button>
              <span className="inline-block ml-2 md:hidden">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                  <path d="M8 16l8-8M8 8l8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
          </div>
          <div className="relative justify-center hidden md:flex">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <path d="M8 16l8-8M8 8l8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Design Services</h2>
            <p className="text-xl text-gray-600">
              From concept to completion, we deliver designs that make lasting impressions
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
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={service.path}
                  className="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700 transition-colors"
                >
                  View Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CreativeDesign;
