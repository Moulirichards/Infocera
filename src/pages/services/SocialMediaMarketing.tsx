import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Share2, Users, TrendingUp, Target, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const SocialMediaMarketing = () => {
  const navigate = useNavigate();
  const platforms = [
    {
      name: "Facebook Marketing",
      description: "Reach your audience with targeted Facebook campaigns and organic content strategies.",
      features: ["Custom Audience Targeting", "Ad Campaign Management", "Content Creation", "Analytics & Reporting"]
    },
    {
      name: "Instagram Marketing", 
      description: "Build brand awareness through visual storytelling and influencer partnerships.",
      features: ["Visual Content Strategy", "Story Campaigns", "Influencer Outreach", "Hashtag Optimization"]
    },
    {
      name: "LinkedIn Marketing",
      description: "Connect with professionals and decision-makers in your industry.",
      features: ["B2B Lead Generation", "Professional Content", "Company Page Management", "LinkedIn Ads"]
    },
    {
      name: "Twitter Marketing",
      description: "Engage with your community through real-time conversations and trending topics.",
      features: ["Community Management", "Trend Monitoring", "Twitter Ads", "Crisis Management"]
    }
  ];

  return (
    <div className="min-h-screen service-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-pink-600 to-blue-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Social Media Marketing</h1>
            <p className="text-xl mb-8">Grow your brand and engage your audience with creative, data-driven social media marketing strategies.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-pink-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-pink-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start Social Campaign</button>
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

      {/* Platforms Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Multi-Platform Social Strategy</h2>
            <p className="text-xl text-gray-600">
              Comprehensive social media management across all major platforms
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={platform.name}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-fade-in border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{platform.name}</h3>
                <p className="text-gray-600 mb-6">{platform.description}</p>
                
                <ul className="space-y-2">
                  {platform.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Social Media Marketing?</h2>
            <p className="text-xl text-gray-600">
              Strategic approach to social media that delivers measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <Share2 className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Platform</h3>
              <p className="text-gray-600">Consistent presence across all social channels</p>
            </div>
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Building</h3>
              <p className="text-gray-600">Foster engaged communities around your brand</p>
            </div>
            <div className="text-center p-6">
              <TrendingUp className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Focused</h3>
              <p className="text-gray-600">Strategies designed to grow your following</p>
            </div>
            <div className="text-center p-6">
              <Target className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Targeted Campaigns</h3>
              <p className="text-gray-600">Precise targeting for maximum ROI</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SocialMediaMarketing;
