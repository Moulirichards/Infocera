import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, ChevronDown, Zap, Shield, Clock, Users, Rocket, Lightbulb } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

export const HeroSection = () => {
  const navigate = useNavigate();
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGetStartedHovered, setIsGetStartedHovered] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const headlines = [
    "Transform Your Business with Cutting-Edge Technology",
    "Innovative IT Solutions for Modern Enterprises",
    "Accelerate Growth with Digital Innovation",
    "Empower Your Future with Smart Technology"
  ];

  const backgroundImages = [
    '/herobg.webp',
    '/herobg1.webp',
    '/herobg2.webp',
    '/herobg3.webp'
  ];

  const features = [
    { icon: Lightbulb, title: "Innovation\nCreative Solutions", desc: "" },
    { icon: Shield, title: "Secure & Reliable", desc: "Enterprise-grade security" },
    { icon: Clock, title: "24/7 Support", desc: "Round-the-clock assistance" },
    { icon: Users, title: "Expert Team", desc: "Industry professionals" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % headlines.length);
    }, 3000);
    return () => {
      clearInterval(textInterval);
    };
  }, []);

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change background every 5 seconds
    return () => {
      clearInterval(bgInterval);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handlePlayDemo = () => {
    setIsPlaying(true);
    // Navigate to About page and scroll to video section
    setTimeout(() => {
      navigate('/about#demo-video');
      setIsPlaying(false);
    }, 1000);
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-section"
      onMouseMove={handleMouseMove}
    >
      {/* Mobile: ClientsSection gradient and overlays */}
      <div className="block md:hidden absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 z-0"></div>
      <div className="block md:hidden absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none z-0"></div>
      <div className="block md:hidden absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.05),transparent_50%)] pointer-events-none z-0"></div>
      <div className="block md:hidden absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.05),transparent_50%)] pointer-events-none z-0"></div>
      <div className="block md:hidden absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none z-0"></div>
      {/* Desktop: Background Images with Slideshow */}
      <div className="hidden md:block">
        {backgroundImages.map((bgImage, index) => {
          // Calculate the position for sliding
          let slidePosition;
          if (index === currentBgIndex) {
            slidePosition = 'translate-x-0'; // Current image
          } else if (index < currentBgIndex) {
            slidePosition = '-translate-x-full'; // Previous images (left)
          } else {
            slidePosition = 'translate-x-full'; // Next images (right)
          }
          // Special handling for wrap-around: when going from last to first image
          if (currentBgIndex === backgroundImages.length - 1 && index === 0) {
            slidePosition = 'translate-x-full'; // First image positioned to the right
          }
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${slidePosition}`}
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                zIndex: 0
              }}
            />
          );
        })}
      </div>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Full-width Headline at the Top, outside max-w-7xl */}
      <div className="absolute top-0 left-0 w-full px-2 sm:px-4 md:px-12 pt-8 md:pt-12 pb-0 md:pb-16 text-center z-30">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white text-center w-full">
          <span className="block transition-all duration-700 ease-in-out transform hover:scale-105">
            {headlines[currentText]}
          </span>
        </h1>
      </div>
      <div className="relative max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 pt-4 md:pt-12 z-20">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Enhanced Content (without headline) */}
          <div className={`w-full flex flex-col items-center text-center space-y-6 md:space-y-8 transition-all duration-1000 pt-0 md:pt-12 mt-0 md:mt-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
            <div className="space-y-0 md:space-y-4 pt-0 md:pt-0">
              <Link to="/about" className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-xs md:text-sm font-medium text-blue-800 hover:scale-105 transition-transform cursor-pointer">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
                Leading IT Services Provider
                <ChevronDown className="ml-2 h-3 w-3 md:h-4 md:w-4 animate-bounce" />
              </Link>
              <p className="text-base md:text-xl text-blue-100 max-w-xs sm:max-w-md md:max-w-2xl transition-colors duration-300">
                We deliver innovative technology solutions to help your business thrive in a digital world.
              </p>
            </div>

            {/* Interactive Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button
                asChild
                className="btn-shine group relative inline-flex items-center flex-nowrap px-6 md:px-8 py-3 md:py-4 font-semibold rounded-xl text-white transition-all duration-300 hover:scale-105 hover:bg-blue-900/30 bg-transparent text-sm md:text-base min-w-[200px] shadow-none backdrop-blur-none border-2"
                style={{ boxShadow: 'none', borderColor: '#3b82f6', borderWidth: '2px' }}
              >
                <Link to="/about" className="flex items-center justify-center w-full h-full text-white">
                  <Rocket className="mr-2 h-8 w-8 !h-8 !w-8 transition-all duration-300 group-hover:scale-110 text-blue-500 rotate-0 group-hover:rotate-45" style={{ minWidth: '2rem', minHeight: '2rem' }} />
                  <span className="font-bold tracking-wide">Get Started</span>
                </Link>
              </Button>
              
              <button 
                onClick={handlePlayDemo}
                className="btn-shine group relative inline-flex items-center flex-nowrap px-6 md:px-8 py-3 md:py-4 font-semibold rounded-xl text-white transition-all duration-300 hover:scale-105 hover:bg-blue-900/30 text-sm md:text-base min-w-[200px] shadow-none backdrop-blur-none"
                style={{ boxShadow: 'none', borderColor: '#3b82f6', borderWidth: '2px' }}
              >
                <span className="flex items-center z-10">
                  <Play className={`mr-2 h-8 w-8 !h-8 !w-8 transition-all duration-300 group-hover:scale-110 text-blue-500 rotate-0 group-hover:rotate-45 ${isPlaying ? 'animate-spin text-blue-600' : ''}`} style={{ minWidth: '2rem', minHeight: '2rem' }} />
                  <span className="font-bold tracking-wide whitespace-nowrap">{isPlaying ? 'Loading...' : 'Watch Demo'}</span>
                </span>
                {isPlaying && (
                  <div className="absolute inset-0 bg-blue-50 rounded-xl animate-pulse"></div>
                )}
              </button>
            </div>

            {/* Interactive Feature Cards - Now in a single horizontal line */}
            <div className="flex flex-wrap gap-2 md:gap-4 justify-center w-full mt-10 md:mt-32 z-30">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={
                    `group p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer hover:translate-y-1 w-32 md:w-40 animate-bounce-float`
                  }
                >
                  <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-blue-600 mb-1 md:mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xs md:text-base text-white group-hover:text-blue-300 transition-colors">
                    {index === 0 ? (
                      <>
                        <span className="font-semibold mb-1 md:mb-2 block">Innovation</span>
                        <span className="font-normal text-xs md:text-sm text-blue-100">Creative Solutions, Unified Systems</span>
                      </>
                    ) : (
                      feature.title.split('\n').map((line, idx) => (
                        <span key={idx} className="font-semibold block">{line}</span>
                      ))
                    )}
                  </h3>
                  {feature.desc && (
                    <p className="text-xs md:text-sm text-blue-100">{feature.desc}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center md:absolute md:-bottom-16 md:left-1/2 md:transform md:-translate-x-1/2 md:animate-bounce mt-8 md:mt-0">
          <ChevronDown 
            className="h-6 w-6 md:h-8 md:w-8 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer animate-bounce" 
            onClick={() => navigate('/services#services')}
          />
        </div>
      </div>
    </section>
  );
};
