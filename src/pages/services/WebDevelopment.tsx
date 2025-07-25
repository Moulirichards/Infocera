import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Code, Smartphone, Globe, Zap, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const WebDevelopment = () => {
  const navigate = useNavigate();
  const technologies = [
    {
      name: "React.js Development",
      description: "Build lightning-fast, interactive web applications with React's component-based architecture.",
      features: ["Virtual DOM", "Component Reusability", "Rich Ecosystem", "SEO Friendly"],
      path: "/services/web-development/reactjs"
    },
    {
      name: "Angular Development", 
      description: "Enterprise-grade applications with Angular's powerful framework and TypeScript foundation.",
      features: ["Full Framework", "TypeScript First", "Enterprise Ready", "Material Design"],
      path: "/services/web-development/angular"
    },
    {
      name: "Vue.js Development",
      description: "Progressive framework that scales from library to full-featured framework seamlessly.",
      features: ["Progressive Enhancement", "Easy Learning", "Flexible Architecture", "Great Performance"],
      path: "/services/web-development/vuejs"
    },
    {
      name: "Node.js Development",
      description: "Server-side JavaScript development for scalable network applications and APIs.",
      features: ["JavaScript Everywhere", "NPM Ecosystem", "Non-blocking I/O", "Microservices Ready"],
      path: "/services/web-development/nodejs"
    },
    {
      name: "Website Design",
      description: "Stunning, user-centric designs that convert visitors into customers.",
      features: ["Responsive Design", "UX Optimization", "Brand Consistency", "Conversion Focus"],
      path: "/services/website-design"
    },
    {
      name: "E-commerce Development",
      description: "Complete online store solutions with payment integration and inventory management.",
      features: ["Payment Gateway", "Inventory Management", "Order Processing", "Mobile Commerce"],
      path: "/services/ecommerce-development"
    }
  ];

  return (
    <div className="min-h-screen service-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-700 to-indigo-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Web Development</h1>
            <p className="text-xl mb-8">Create stunning, high-performance websites that drive results and elevate your online presence.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-blue-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start Web Project</button>
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

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Web Development Arsenal</h2>
            <p className="text-xl text-gray-600">
              Modern technologies and frameworks to build scalable, performant web applications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-fade-in border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{tech.name}</h3>
                <p className="text-gray-600 mb-6">{tech.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {tech.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={tech.path}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Explore Technology
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

export default WebDevelopment;
