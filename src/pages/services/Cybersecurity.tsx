import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Shield, Lock, Eye, AlertTriangle, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Cybersecurity = () => {
  const navigate = useNavigate();
  const technologies = [
    {
      name: "Penetration Testing",
      description: "Comprehensive security testing to identify vulnerabilities in your systems and applications.",
      features: ["Web App Testing", "Network Security", "Social Engineering", "Vulnerability Assessment"],
      path: "/services/cybersecurity/penetration-testing"
    },
    {
      name: "Security Audits",
      description: "Complete security assessments and compliance audits for your IT infrastructure.",
      features: ["Compliance Audits", "Risk Assessment", "Security Policies", "Documentation"],
      path: "/services/cybersecurity/security-audits"
    },
    {
      name: "Incident Response",
      description: "24/7 cybersecurity incident response and recovery services to minimize business impact.",
      features: ["24/7 Monitoring", "Rapid Response", "Forensic Analysis", "Recovery Planning"],
      path: "/services/cybersecurity/incident-response"
    },
    {
      name: "Identity & Access Management",
      description: "Secure identity management solutions to control access to your critical systems.",
      features: ["Single Sign-On", "Multi-Factor Auth", "Role-Based Access", "Identity Governance"],
      path: "/services/cybersecurity/identity-access-management"
    },
    {
      name: "Security Awareness Training",
      description: "Employee training programs to build a strong security culture in your organization.",
      features: ["Phishing Simulations", "Security Training", "Awareness Programs", "Compliance Training"],
      path: "/services/cybersecurity/security-awareness-training"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-gray-900 to-blue-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cybersecurity</h1>
            <p className="text-xl mb-8">Protect your business from digital threats with advanced cybersecurity solutions and proactive defense.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-blue-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start Security Audit</button>
              <span className="inline-block ml-2 md:hidden">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                  <rect x="8" y="10" width="8" height="6" rx="2" stroke="#fff" strokeWidth="2"/>
                  <path d="M12 8v2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
          </div>
          <div className="relative justify-center hidden md:flex">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <rect x="8" y="10" width="8" height="6" rx="2" stroke="#fff" strokeWidth="2"/>
              <path d="M12 8v2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Security Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive cybersecurity solutions to protect your digital assets
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
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
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

      <Footer />
    </div>
  );
};

export default Cybersecurity;
