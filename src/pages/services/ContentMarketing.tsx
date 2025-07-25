import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FileText, Users, TrendingUp, Heart, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const ContentMarketing = () => {
  const navigate = useNavigate();
  const services = [
    {
      name: "Content Strategy Development",
      description: "Comprehensive content strategies aligned with your business goals and audience needs.",
      features: ["Audience Research", "Content Planning", "Editorial Calendar", "Content Audit"]
    },
    {
      name: "Blog Writing & SEO Content",
      description: "High-quality blog posts and articles optimized for search engines and user engagement.",
      features: ["SEO-Optimized Articles", "Keyword Integration", "Topic Research", "Content Optimization"]
    },
    {
      name: "Video Content Creation",
      description: "Engaging video content that tells your brand story and drives audience engagement.",
      features: ["Script Writing", "Video Production", "Animation", "Video Optimization"]
    },
    {
      name: "Email Marketing Campaigns",
      description: "Targeted email campaigns that nurture leads and drive conversions.",
      features: ["Email Design", "List Segmentation", "Campaign Automation", "Performance Tracking"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-green-500 to-blue-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Content Marketing</h1>
            <p className="text-xl mb-8">Engage your audience and drive conversions with compelling, strategic content tailored to your brand and goals.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-orange-600 font-bold px-8 py-4 rounded-xl shadow hover:bg-orange-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start Content Strategy</button>
              <span className="inline-block ml-2 md:hidden">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                  <rect x="7" y="7" width="10" height="14" rx="2" stroke="#fff" strokeWidth="2"/>
                  <path d="M9 11h6M9 15h6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
          </div>
          <div className="relative justify-center hidden md:flex">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <rect x="7" y="7" width="10" height="14" rx="2" stroke="#fff" strokeWidth="2"/>
              <path d="M9 11h6M9 15h6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Content Marketing Services</h2>
            <p className="text-xl text-gray-600">
              Strategic content creation that drives results across all channels
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
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Content Marketing?</h2>
            <p className="text-xl text-gray-600">
              Strategic content that builds trust and drives business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <FileText className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Content</h3>
              <p className="text-gray-600">High-quality, original content that resonates</p>
            </div>
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Audience Focus</h3>
              <p className="text-gray-600">Content tailored to your target audience</p>
            </div>
            <div className="text-center p-6">
              <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Driven</h3>
              <p className="text-gray-600">Content strategies that drive business growth</p>
            </div>
            <div className="text-center p-6">
              <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Brand Building</h3>
              <p className="text-gray-600">Build emotional connections with your audience</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContentMarketing;
