import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Cloud, Server, Shield, Zap, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const CloudSolutions = () => {
  const navigate = useNavigate();
  const technologies = [
    {
      name: "Amazon Web Services (AWS)",
      description: "Comprehensive cloud computing platform offering reliable, scalable, and inexpensive cloud computing services.",
      features: ["EC2 & Lambda", "S3 Storage", "RDS Database", "CloudFront CDN"],
      path: "/services/cloud-solutions/aws"
    },
    {
      name: "Microsoft Azure",
      description: "Microsoft's cloud computing service for building, testing, deploying, and managing applications.",
      features: ["Azure Functions", "Blob Storage", "SQL Database", "Active Directory"],
      path: "/services/cloud-solutions/azure"
    },
    {
      name: "Google Cloud Platform",
      description: "Google's suite of cloud computing services that runs on the same infrastructure Google uses.",
      features: ["Compute Engine", "Cloud Storage", "BigQuery", "Kubernetes Engine"],
      path: "/services/cloud-solutions/google-cloud"
    },
    {
      name: "DevOps & CI/CD",
      description: "Continuous integration and deployment pipelines for automated software delivery.",
      features: ["Jenkins", "GitLab CI/CD", "Docker", "Kubernetes"],
      path: "/services/cloud-solutions/devops-cicd"
    },
    {
      name: "Cloud Migration",
      description: "Seamless migration of existing applications and data to cloud platforms.",
      features: ["Assessment & Planning", "Data Migration", "Application Modernization", "Testing & Validation"],
      path: "/services/cloud-solutions/cloud-migration"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-indigo-800 to-blue-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cloud Solutions</h1>
            <p className="text-xl mb-8">Transform your business with scalable, secure, and cost-effective cloud solutions tailored to your needs.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-blue-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start Cloud Journey</button>
              <span className="inline-block ml-2 md:hidden">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                  <path d="M8 16h8M8 12h8M8 8h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
          </div>
          <div className="relative justify-center hidden md:flex">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <path d="M8 16h8M8 12h8M8 8h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cloud Technologies We Master</h2>
            <p className="text-xl text-gray-600">
              Leverage the power of leading cloud platforms for your business transformation
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
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={tech.path}
                  className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
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

export default CloudSolutions;
