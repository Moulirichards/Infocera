import { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, TechCorp",
      company: "TechCorp Solutions",
      rating: 5,
      text: "Infocera transformed our entire digital infrastructure. Their expertise in cloud migration and AI implementation exceeded our expectations.",
      image: "https://i.pravatar.cc/150?img=47"
    },
    {
      name: "Michael Chen",
      position: "CEO, InnovateLabs",
      company: "InnovateLabs",
      rating: 4,
      text: "Outstanding service and technical expertise. The mobile app they developed for us has increased our user engagement by 300%.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Emily Rodriguez",
      position: "VP Technology, DataFlow",
      company: "DataFlow Inc",
      rating: 5,
      text: "Their data analytics solutions provided insights that revolutionized our business strategy. Truly a game-changing partnership.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "David Kim",
      position: "Head of IT, FinEdge",
      company: "FinEdge Finance",
      rating: 4,
      text: "The cybersecurity solutions from Infocera gave us peace of mind and protected our sensitive data. Highly recommended!",
      image: "https://i.pravatar.cc/150?img=12"
    },
    {
      name: "Priya Singh",
      position: "Product Manager, HealthSync",
      company: "HealthSync Solutions",
      rating: 5,
      text: "From concept to launch, Infocera's team was proactive, creative, and always available. Our healthcare platform is now faster and more secure than ever.",
      image: "https://i.pravatar.cc/150?img=32"
    },
    {
      name: "Alex Thompson",
      position: "Director of Engineering, CloudScale",
      company: "CloudScale Technologies",
      rating: 4,
      text: "Infocera's DevOps expertise helped us achieve 99.9% uptime and reduced our deployment time by 80%. Their automation solutions are simply outstanding.",
      image: "https://i.pravatar.cc/150?img=15"
    },
    {
      name: "Lisa Wang",
      position: "VP of Digital Transformation, RetailMax",
      company: "RetailMax Corporation",
      rating: 5,
      text: "The e-commerce platform they built for us increased our online sales by 250% in the first quarter. Their understanding of retail technology is exceptional.",
      image: "https://i.pravatar.cc/150?img=28"
    },
    {
      name: "Robert Martinez",
      position: "Chief Information Officer, EduTech",
      company: "EduTech Innovations",
      rating: 4,
      text: "Infocera revolutionized our educational platform with AI-powered features. Student engagement increased by 400%.",
      image: "https://i.pravatar.cc/150?img=45"
    },
    {
      name: "Jennifer Adams",
      position: "Head of Operations, LogisticsPro",
      company: "LogisticsPro Solutions",
      rating: 5,
      text: "Their supply chain management system optimized our operations and reduced costs by 35%. Game-changing real-time tracking features.",
      image: "https://i.pravatar.cc/150?img=19"
    },
    {
      name: "Marcus Johnson",
      position: "CEO, GreenTech",
      company: "GreenTech Industries",
      rating: 4,
      text: "Infocera's IoT solutions helped us monitor and optimize our renewable energy systems. Innovative sustainable technology approach.",
      image: "https://i.pravatar.cc/150?img=37"
    }
  ];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 relative bg-gradient-to-br from-violet-800 via-blue-700 to-emerald-600 overflow-hidden"
    >
      {/* Subtle radial highlight for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.10),transparent_70%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_70%)] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-cyan-200 mb-3 tracking-tight leading-tight"
            style={{ fontFamily: 'Exo, Arial, sans-serif' }}
          >
            What Our Clients Say
          </h2>
          <p className="text-base md:text-xl text-blue-100 max-w-xs sm:max-w-md md:max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about our services.
          </p>
        </div>

        <div className="relative max-w-xl md:max-w-3xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-slate-800 rounded-3xl shadow-2xl p-4 md:p-6 lg:p-8 border border-gray-700 overflow-hidden backdrop-blur-sm">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl blur-xl"></div>
            
            <div className="relative z-10">
              {/* Rating stars with enhanced styling */}
              <div className="flex items-center justify-center mb-3 md:mb-6">
                <div className="flex space-x-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <div key={i} className="relative group">
                      <Star className="h-4 w-4 md:h-6 md:w-6 text-yellow-400 fill-current drop-shadow-sm group-hover:scale-110 transition-transform duration-200" />
                      <div className="absolute inset-0 bg-yellow-300 rounded-full blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-200"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote with enhanced typography */}
              <div className="relative mb-4 md:mb-8">
                <blockquote className="text-sm md:text-base lg:text-lg text-gray-200 text-center leading-relaxed font-medium px-3 md:px-6">
                  {testimonials[currentIndex].text}
                </blockquote>
              </div>

              {/* Enhanced profile section */}
              <div className="flex items-center justify-center space-x-2 md:space-x-4">
                <div className="relative">
                  <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg border-2 border-white">
                    <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-white text-xs md:text-base mb-1">{testimonials[currentIndex].name}</div>
                  <div className="text-gray-300 text-xs md:text-sm mb-1">{testimonials[currentIndex].position}</div>
                  <div className="text-blue-400 text-xs md:text-sm font-medium bg-blue-900/30 px-2 py-1 rounded-full border border-blue-700/50">{testimonials[currentIndex].company}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="group absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-8 h-8 md:w-12 md:h-12 bg-gray-800/90 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center text-gray-300 hover:text-blue-400 transition-all duration-500 transform hover:scale-110 hover:shadow-blue-500/25 border border-gray-600/50 hover:border-blue-500"
          >
            <div className="relative">
              <svg className="h-4 w-4 md:h-6 md:w-6 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
          </button>

          <button
            onClick={goToNext}
            className="group absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 w-8 h-8 md:w-12 md:h-12 bg-gray-800/90 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center text-gray-300 hover:text-blue-400 transition-all duration-500 transform hover:scale-110 hover:shadow-blue-500/25 border border-gray-600/50 hover:border-blue-500"
          >
            <div className="relative">
              <svg className="h-4 w-4 md:h-6 md:w-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 md:mt-10 space-x-2 md:space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/50' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
