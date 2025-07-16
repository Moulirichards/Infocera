import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

// Styled Button Component
const StyledWrapper = styled.div`
  button {
    font-family: inherit;
    font-size: 18px;
    background: linear-gradient(to bottom, #4dc7d9 0%,#66a6ff 100%);
    color: white;
    padding: 0.8em 1.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 25px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
  }

  button:hover {
    transform: translateY(-3px);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
  }

  button:active {
    transform: scale(0.95);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }

  button span {
    display: block;
    margin-left: 0.4em;
    transition: all 0.3s;
  }

  button svg {
    width: 18px;
    height: 18px;
    fill: white;
    transition: all 0.3s;
  }

  button .svg-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    margin-right: 0.5em;
    transition: all 0.3s;
  }

  button:hover .svg-wrapper {
    background-color: rgba(255, 255, 255, 0.5);
  }

  button:hover svg {
    transform: rotate(45deg);
  }
`;

// Add custom CSS animations
const customStyles = `
  @keyframes lightRay {
    0%, 100% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
    50% { transform: translateX(100%) translateY(100%) rotate(45deg); }
  }
`;
import { 
  Search, Code, Smartphone, Monitor, Palette, Users, Brain, Bug, 
  ArrowRight, TrendingUp, Share2, ShoppingCart, FileText, 
  Building, Heart, GraduationCap, Plane, Home, Database,
  UserCheck, Briefcase, Settings, Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  useEffect(() => {
    if (window.location.hash === '#services') {
      const el = document.getElementById('services');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // slight delay to ensure DOM is ready
      }
    }
  }, []);
  const serviceCategories = [
    {
      title: "Software Products",
      icon: Monitor,
      services: [
        { name: 'HR and Payroll Management Software', path: '/services/hr-payroll-software' },
        { name: 'Jewellery Software', path: '/services/jewellery-software' },
        { name: 'CRM Software', path: '/services/crm-software' },
        { name: 'Real Estate Software', path: '/services/real-estate-software' },
        { name: 'Inventory Management Software', path: '/services/inventory-management-software' },
        { name: 'Hospital Management Software', path: '/services/hospital-management-software' },
        { name: 'School Management Software', path: '/services/school-management-software' }
      ],
      gradient: "from-blue-500 to-cyan-500",
      learnMorePath: '/services/crm-software'
    },
    {
      title: "Web Design & Development",
      icon: Code,
      services: [
        { name: 'Website Design', path: '/services/website-design' },
        { name: 'Website Development', path: '/services/web-development' },
        { name: 'CRM Software Development', path: '/services/crm-software-development' },
        { name: 'Software Development', path: '/services/software-development' },
        { name: 'Educational Web Portal Development', path: '/services/educational-web-portal' },
        { name: 'Restaurant Web Portal Development', path: '/services/restaurant-web-portal' },
        { name: 'Health Care Portal Development', path: '/services/healthcare-portal' },
        { name: 'Travel Portal Development', path: '/services/travel-portal' },
        { name: 'Real Estate Portal Development', path: '/services/real-estate-portal' },
        { name: 'E-commerce Website Development', path: '/services/ecommerce-development' }
      ],
      gradient: "from-purple-500 to-pink-500",
      learnMorePath: '/services/web-development'
    },
    {
      title: "Mobile Application",
      icon: Smartphone,
      services: [
        { name: 'Mobile App Development', path: '/services/mobile-apps' },
        { name: 'Windows App Development', path: '/services/windows-app-development' },
        { name: 'Xamarin App Development', path: '/services/xamarin-app-development' },
        { name: 'Hybrid App Development', path: '/services/hybrid-app-development' },
        { name: 'Native App Development', path: '/services/native-app-development' }
      ],
      gradient: "from-green-500 to-teal-500",
      learnMorePath: '/services/mobile-apps'
    },
    {
      title: "Online Marketing",
      icon: TrendingUp,
      services: [
        { name: 'SEO Services', path: '/services/seo-services' },
        { name: 'Search Engine Marketing', path: '/services/search-engine-marketing' },
        { name: 'Social Media Marketing', path: '/services/social-media-marketing' },
        { name: 'Pay Per Click Management', path: '/services/pay-per-click-management' },
        { name: 'SEO Copywriting', path: '/services/seo-copywriting' },
        { name: 'Digital Marketing', path: '/services/digital-marketing' },
        { name: 'Brand Consulting', path: '/services/brand-consulting' },
        { name: 'Lead Management System', path: '/services/lead-management-system' }
      ],
      gradient: "from-orange-500 to-red-500",
      learnMorePath: '/services/social-media-marketing'
    },
    {
      title: "Creative Design",
      icon: Palette,
      services: [
        { name: 'UI/UX Design', path: '/services/ui-ux-design' },
        { name: 'Logo Design', path: '/services/logo-design' },
        { name: 'Brochure Design', path: '/services/brochure-design' }
      ],
      gradient: "from-pink-500 to-rose-500",
      learnMorePath: '/services/ui-ux-design'
    },
    {
      title: "Consultant",
      icon: Users,
      services: [
        { name: 'NetSuite Solution Consultant', path: '/services/netsuite-consultant' },
        { name: 'Recruitment Service', path: '/services/recruitment-service' },
        { name: 'SharePoint Development', path: '/services/sharepoint-development' },
        { name: 'Software Consultant', path: '/services/software-consultant' }
      ],
      gradient: "from-indigo-500 to-purple-500",
      learnMorePath: '/services/netsuite-consultant'
    },
    {
      title: "Data Science",
      icon: Brain,
      services: [
        { name: 'AI & Machine Learning', path: '/services/ai-ml' },
        { name: 'Data Analytics', path: '/services/data-analytics' }
      ],
      gradient: "from-emerald-500 to-teal-500",
      learnMorePath: '/services/ai-ml'
    },
    {
      title: "Testing",
      icon: Bug,
      services: [
        { name: 'Software Testing', path: '/services/software-testing' },
        { name: 'Security Testing', path: '/services/security-testing' },
        { name: 'Performance Testing', path: '/services/performance-testing' }
      ],
      gradient: "from-purple-500 to-indigo-500",
      learnMorePath: '/services/software-testing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <style>{customStyles}</style>
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 animate-pulse"></div>
      
      {/* Primary floating orbs */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl animate-bounce" style={{animationDelay: '0s', animationDuration: '6s'}}></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-400/10 rounded-full blur-3xl animate-bounce" style={{animationDelay: '2s', animationDuration: '8s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-indigo-400/10 rounded-full blur-3xl animate-bounce" style={{animationDelay: '3s', animationDuration: '7s'}}></div>
      
      {/* Additional floating elements */}
      <div className="absolute top-1/4 right-1/3 w-24 h-24 bg-emerald-400/8 rounded-full blur-xl animate-pulse" style={{animationDelay: '0.5s', animationDuration: '4s'}}></div>
      <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-pink-400/8 rounded-full blur-2xl animate-bounce" style={{animationDelay: '1.5s', animationDuration: '9s'}}></div>
      <div className="absolute top-2/3 left-1/2 w-28 h-28 bg-yellow-400/8 rounded-full blur-xl animate-pulse" style={{animationDelay: '2.5s', animationDuration: '5s'}}></div>
      
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/3 via-transparent to-purple-600/3 animate-pulse" style={{animationDuration: '10s'}}></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-cyan-600/3 via-transparent to-pink-600/3 animate-pulse" style={{animationDuration: '8s', animationDelay: '2s'}}></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }}></div>
      
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section 
        className="pt-20 pb-16 relative min-h-[400px] md:min-h-[500px] flex flex-col justify-center overflow-hidden"
        style={{ 
          backgroundImage: 'url(/servicesbg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Enhanced Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 pointer-events-none" />
        
        {/* Hero section specific background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse" style={{animationDuration: '6s'}}></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/15 rounded-full blur-2xl animate-bounce" style={{animationDelay: '0s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-400/15 rounded-full blur-2xl animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
        
        {/* Animated light rays */}
        <div className="absolute inset-0 opacity-20" style={{
          background: `linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)`,
          animation: 'lightRay 8s ease-in-out infinite'
        }}></div>
        <div className="absolute inset-0 opacity-15" style={{
          background: `linear-gradient(-45deg, transparent 30%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)`,
          animation: 'lightRay 10s ease-in-out infinite reverse'
        }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-4">
              <span className="inline-block text-sm md:text-base font-semibold text-blue-300 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-400/30 backdrop-blur-sm">
                ✨ Premium Solutions
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse" style={{animationDuration: '3s'}}>
                Our Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto drop-shadow-lg leading-relaxed">
              We offer <span className="text-blue-300 font-semibold">comprehensive IT solutions</span> tailored to meet your business needs and drive <span className="text-purple-300 font-semibold">digital transformation</span> across all industries.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <div className="flex items-center text-blue-300 text-sm">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                Web Development
              </div>
              <div className="flex items-center text-purple-300 text-sm">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                Mobile Apps
              </div>
              <div className="flex items-center text-cyan-300 text-sm">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse" style={{animationDelay: '1s'}}></div>
                AI & ML
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section id="services" className="py-16 relative">
        {/* Services grid background enhancements */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-400/8 rounded-full blur-3xl animate-pulse" style={{animationDuration: '7s'}}></div>
        <div className="absolute bottom-1/2 right-1/4 w-80 h-80 bg-purple-400/8 rounded-full blur-3xl animate-bounce" style={{animationDelay: '1s', animationDuration: '9s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-emerald-400/6 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-pink-400/6 rounded-full blur-2xl animate-bounce" style={{animationDelay: '3s', animationDuration: '8s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <div
                key={category.title}
                className={`group bg-gradient-to-r ${category.gradient} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-fade-in border border-gray-100 flex flex-col`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-white/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                <ul className="space-y-2 mb-6">
                  {category.services.map((service) => (
                    <li key={service.name} className="flex items-center text-white/90 hover:text-white transition-colors">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <Link to={service.path} className="hover:underline">
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to={category.learnMorePath}
                  className="inline-flex items-center text-white font-semibold hover:text-blue-100 transition-colors group text-sm mt-auto"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-12 relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600">
        {/* CTA section background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 animate-pulse"></div>
        <div className="absolute top-10 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-bounce" style={{animationDelay: '0s', animationDuration: '5s'}}></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-bounce" style={{animationDelay: '1s', animationDuration: '6s'}}></div>
        
        {/* Additional CTA background elements */}
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-cyan-400/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/2 right-1/3 w-48 h-48 bg-emerald-400/15 rounded-full blur-2xl animate-bounce" style={{animationDelay: '3s', animationDuration: '7s'}}></div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-transparent animate-pulse" style={{animationDuration: '8s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business and drive growth.
          </p>
          <div className="flex justify-center">
            <StyledWrapper>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <button>
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
                    </svg>
                  </div>
                </div>
                <span>Contact Us Today</span>
              </button>
            </Link>
          </StyledWrapper>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
