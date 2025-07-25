import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Smartphone, Apple, PlayCircle, Code, Zap, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const MobileApps = () => {
  const navigate = useNavigate();
  const technologies = [
    {
      name: "React Native",
      description: "Cross-platform mobile development using React Native for iOS and Android applications.",
      features: ["Cross-platform compatibility", "Native performance", "Hot reloading", "Rich ecosystem"],
      path: "/services/mobile-apps/react-native"
    },
    {
      name: "Flutter",
      description: "Google's UI toolkit for building natively compiled applications for mobile, web, and desktop.",
      features: ["Single codebase", "Fast development", "Beautiful UI", "Hot reload"],
      path: "/services/mobile-apps/flutter"
    },
    {
      name: "iOS Development",
      description: "Native iOS app development using Swift and Objective-C for optimal performance.",
      features: ["Native iOS performance", "App Store optimization", "iOS-specific features", "Swift programming"],
      path: "/services/mobile-apps/ios-development"
    },
    {
      name: "Android Development",
      description: "Native Android app development using Kotlin and Java for Google Play Store.",
      features: ["Native Android features", "Play Store optimization", "Material Design", "Kotlin programming"],
      path: "/services/mobile-apps/android-development"
    },
    {
      name: "Progressive Web Apps",
      description: "Web applications that provide native app-like experience across all platforms.",
      features: ["Offline functionality", "Push notifications", "App-like experience", "Cross-platform"],
      path: "/services/mobile-apps/progressive-web-apps"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-900 to-pink-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mobile Apps</h1>
            <p className="text-xl mb-8 text-white font-semibold">Transform your ideas into high-performance mobile apps for iOS and Android platforms.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-blue-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start Mobile Project</button>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mobile Technologies</h2>
            <p className="text-xl text-gray-600">
              We use cutting-edge technologies to build robust and scalable mobile applications
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
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/services/mobile-apps/reactnative"
                  className="inline-flex items-center px-8 py-3 mt-4 bg-white text-blue-600 font-semibold rounded-xl border border-blue-200 hover:bg-blue-50 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
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

export default MobileApps;
