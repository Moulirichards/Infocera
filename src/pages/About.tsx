import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Users, Target, Award, Globe, Rocket, Cloud, TrendingUp } from 'lucide-react';
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  .button {
    line-height: 1;
    text-decoration: none;
    display: inline-flex;
    border: none;
    cursor: pointer;
    align-items: center;
    gap: 0.75rem;
    background-color: var(--clr);
    color: #fff;
    border-radius: 10rem;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    padding-left: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: background-color 0.3s;
  }

  .button__icon-wrapper {
    flex-shrink: 0;
    width: 25px;
    height: 25px;
    position: relative;
    color: var(--clr);
    background-color: #fff;
    border-radius: 50%;
    display: grid;
    place-items: center;
    overflow: hidden;
  }

  .button:hover {
    background-color: #000;
  }

  .button:hover .button__icon-wrapper {
    color: #000;
  }

  .button__icon-svg--copy {
    position: absolute;
    transform: translate(-150%, 150%);
  }

  .button:hover .button__icon-svg:first-child {
    transition: transform 0.3s ease-in-out;
    transform: translate(150%, -150%);
  }

  .button:hover .button__icon-svg--copy {
    transition: transform 0.3s ease-in-out 0.1s;
    transform: translate(0);
  }
`;

// Iconic Moments in Our History Section
const iconicMoments = [
  {
    year: 2015,
    icon: <Rocket size={80} stroke="#22d3ee" strokeWidth={1.5} />,
    title: '2015',
    description: 'Infocera is founded by a small team of passionate technologists with a vision to drive business growth through technology.'
  },
  {
    year: 2017,
    icon: <Users size={80} stroke="#38bdf8" strokeWidth={1.5} />,
    title: '2017',
    description: 'Expanded our team and launched our first enterprise software solution, gaining our first major clients.'
  },
  {
    year: 2019,
    icon: <Cloud size={80} stroke="#4ade80" strokeWidth={1.5} />,
    title: '2019',
    description: 'Opened a new office, expanded into cloud and AI services, and began serving international clients.'
  },
  {
    year: 2021,
    icon: <Award size={80} stroke="#facc15" strokeWidth={1.5} />,
    title: '2021',
    description: 'Recognized as a leader in digital transformation, with a growing portfolio of innovative projects and partnerships.'
  },
  {
    year: 2023,
    icon: <TrendingUp size={80} stroke="#f472b6" strokeWidth={1.5} />,
    title: '2023',
    description: 'Launched groundbreaking AI-driven solutions, expanded into new international markets, and strengthened our commitment to sustainability and social impact.'
  },
  {
    year: 2025,
    icon: <Globe size={80} stroke="#ffffff" strokeWidth={2} />,
    title: '2025',
    description: 'Looking ahead to new horizons, Infocera continues to drive innovation and deliver value to clients worldwide.'
  }
];

function IconicMomentsSection() {
  const [current, setCurrent] = React.useState(0);
  const moment = iconicMoments[current];

  return (
    <section 
      className="w-full py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('/iconicbg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 animate-pulse"></div>
      <div className="absolute top-20 left-20 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl animate-bounce" style={{animationDelay: '0s', animationDuration: '6s'}}></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-400/10 rounded-full blur-3xl animate-bounce" style={{animationDelay: '2s', animationDuration: '8s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Iconic Moments in Our History</h2>
        <p className="text-xl text-center text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
        From a humble beginning to a global tech partner, Infocera transformed vision into reality. Empowering startups and enterprises alike, we've shaped digital journeys with innovation at every step.
        </p>
        {/* Enhanced Timeline */}
        <div className="relative flex items-center justify-center mb-16">
          <div className="absolute left-0 right-0 top-1/2 border-t-2 border-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400" style={{ zIndex: 0, background: 'linear-gradient(to right, #60a5fa, #a78bfa, #06b6d4)' }} />
          {/* Mobile: scrollable timeline */}
          <div className="relative z-10 flex items-center gap-4 overflow-x-auto whitespace-nowrap px-2 w-full scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-blue-50 sm:hidden">
            {iconicMoments.map((m, idx) => (
              <button
                key={m.year}
                className={`flex flex-col items-center focus:outline-none transition-all duration-300 transform hover:scale-110 ${idx === current ? 'text-blue-300 font-bold' : 'text-blue-200'}`}
                onClick={() => setCurrent(idx)}
              >
                <span className="text-2xl mb-2 drop-shadow-lg">{m.year}</span>
                <span className={`w-4 h-4 rounded-full transition-all duration-300 ${idx === current ? 'bg-gradient-to-r from-blue-400 to-cyan-400 shadow-lg shadow-blue-400/50 scale-125' : 'bg-blue-200 hover:bg-blue-300'}`}></span>
              </button>
            ))}
          </div>
          {/* Desktop: centered, no scroll, large gap */}
          <div className="relative z-10 hidden sm:flex items-center gap-8">
            {iconicMoments.map((m, idx) => (
              <button
                key={m.year}
                className={`flex flex-col items-center focus:outline-none transition-all duration-300 transform hover:scale-110 ${idx === current ? 'text-blue-300 font-bold' : 'text-blue-200'}`}
                onClick={() => setCurrent(idx)}
              >
                <span className="text-2xl mb-2 drop-shadow-lg">{m.year}</span>
                <span className={`w-4 h-4 rounded-full transition-all duration-300 ${idx === current ? 'bg-gradient-to-r from-blue-400 to-cyan-400 shadow-lg shadow-blue-400/50 scale-125' : 'bg-blue-200 hover:bg-blue-300'}`}></span>
              </button>
            ))}
          </div>
        </div>
        {/* Enhanced Card */}
        <div className="flex justify-center">
          <div className="relative rounded-2xl shadow-2xl p-10 pl-20 pr-20 flex items-center gap-8 max-w-4xl w-full min-h-[200px] bg-gradient-to-br from-white/95 via-blue-50/90 to-cyan-50/95 backdrop-blur-md border border-white/50 hover:shadow-blue-500/20 hover:shadow-purple-500/20 hover:shadow-cyan-500/20 transition-all duration-500 transform hover:scale-105 group">
            {/* Enhanced background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-cyan-500/5 transition-all duration-500 rounded-2xl"></div>
            
            {/* Left arrow */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full p-3 shadow-lg hover:shadow-xl hover:scale-110 disabled:opacity-30 disabled:hover:scale-100 transition-all duration-300"
              onClick={() => setCurrent((c) => Math.max(0, c - 1))}
              disabled={current === 0}
              aria-label="Previous"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            
            {/* Enhanced Icon */}
            <div className="flex-shrink-0 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-2xl shadow-lg">
                {moment.icon}
              </div>
            </div>
            
            {/* Enhanced Content */}
            <div className="relative z-10">
              <div className="text-3xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{moment.title}</div>
              <div className="text-lg text-gray-700 leading-relaxed">{moment.description}</div>
            </div>
            
            {/* Right arrow */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full p-3 shadow-lg hover:shadow-xl hover:scale-110 disabled:opacity-30 disabled:hover:scale-100 transition-all duration-300"
              onClick={() => setCurrent((c) => Math.min(iconicMoments.length - 1, c + 1))}
              disabled={current === iconicMoments.length - 1}
              aria-label="Next"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Culture cards data
const cultureCards = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#38bdf8" className="w-12 h-12 mb-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    title: 'Care',
    text: `At Infocera, care is the foundation of a strong, unified team and exceptional outcomes. We believe true care begins with meaningful communication — from acknowledging presence in team channels to responding promptly and showing empathy. By staying present and supportive, we cultivate a culture of trust and connection that drives us forward together.`
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#facc15" className="w-12 h-12 mb-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m0 0c-2.21 0-4-1.79-4-4H6a6 6 0 0012 0h-2c0 2.21-1.79 4-4 4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 6h8" />
      </svg>
    ),
    title: 'Learn',
    text: `We are committed to continuous learning, as it is essential to achieving our goals. We encourage our employees to cultivate a growth mindset, believing that we can always learn and improve. - As limiting beliefs can prevent us from reaching our full potential, we overcome them by taking risks, trying new things, and focusing on growth and development.`
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fbbf24" className="w-12 h-12 mb-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4m-4-4a4 4 0 018 0m-8 0V5a4 4 0 018 0v12" />
      </svg>
    ),
    title: 'Achieve',
    text: `Having clear goals is crucial to achieving success. At Infocera, we don't tolerate problems that stand in the way of our goals. We diagnose the root causes of these problems, design plans to overcome them, and take action to bring these plans to completion. Action leads to clarity, motivation, ideas, inspiration, and increased faith in our goals, shaping who we are.`
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#60a5fa" className="w-12 h-12 mb-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8a3 3 0 11-6 0 3 3 0 016 0zm-6 8a3 3 0 100-6 3 3 0 000 6zm12-3a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.59 13.51l6.83-3.02M8.59 10.49l6.83 3.02" />
      </svg>
    ),
    title: 'Share',
    text: `In this context, everyone's an expert in their own life experiences. At Infocera, we recognize the power of collaborating knowledge and expertise to achieve success. Our team members are encouraged to share their ideas, skills, and knowledge with colleagues and clients alike. We foster an environment of collaboration, where everyone's input is valued, and teamwork is key.`
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#a78bfa" className="w-12 h-12 mb-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M1.5 12s3.75-7.5 10.5-7.5S22.5 12 22.5 12s-3.75 7.5-10.5 7.5S1.5 12 1.5 12z" />
        <circle cx="12" cy="12" r="3" stroke="#a78bfa" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    title: 'Transparency',
    text: `We believe in open communication and sharing information freely. Transparency builds trust, encourages collaboration, and ensures everyone is aligned and empowered to do their best work.`
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#34d399" className="w-12 h-12 mb-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C7.03 3 3 7.03 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.97-4.03-9-9-9zm0 0v9m0 0l3.5 3.5M12 12l-3.5 3.5" />
      </svg>
    ),
    title: 'Social Responsibility',
    text: `At Infocera, we take social responsibility seriously. Being a responsible corporate citizen means giving back to the community and positively impacting society. We strive to integrate social responsibility into every aspect of our business and work to support charitable causes and promote sustainability. With a commitment to integrity, we aim to create a better world for all.`
  }
];

// Custom hook for count up animation
function useCountUp(target, duration = 1200, start = 0) {
  const [count, setCount] = React.useState(start);
  const ref = useRef();
  React.useEffect(() => {
    let frame;
    let startTime;
    function animate(ts) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * (target - start) + start));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, start]);
  return count;
}

const About = () => {
  const stats = [
    { icon: Users, label: 'Team Members', value: '150+' },
    { icon: Target, label: 'Projects Completed', value: '250+' },
    { icon: TrendingUp, label: 'Years in Business', value: '10+' },
    { icon: Globe, label: 'Countries Served', value: '20+' }
  ];

  const team = [
    {
      name: 'Michael Johnson',
      position: 'VP of Engineering',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
      bio: 'Leading engineering teams to deliver innovative solutions.'
    },
    {
      name: 'Faize hamzari',
      position: 'SVP of Products',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&w=300&h=300&fit=crop',
      bio: 'Driving product vision and strategy for global markets.'
    },
    {
      name: 'David Lee',
      position: 'Chief Operating Officer',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&w=300&h=300&fit=crop',
      bio: 'Ensuring operational excellence and organizational growth.'
    },
    {
      name: 'Sophia zurezi',
      position: 'SVP of Development',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&w=300&h=300&fit=crop',
      bio: 'Overseeing software development and delivery.'
    },
    {
      name: 'James Kim',
      position: 'Head of Technology',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=300&q=80',
      bio: 'Leading technology innovation and architecture.'
    }
  ];

  const [cardSet, setCardSet] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayRef = React.useRef(autoPlay);
  autoPlayRef.current = autoPlay;

  // Handle hash navigation to scroll to video section
  useEffect(() => {
    if (window.location.hash === '#demo-video') {
      const videoSection = document.getElementById('demo-video');
      if (videoSection) {
        setTimeout(() => {
          videoSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCardSet((prev) => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const handleArrow = (dir) => {
    setCardSet((prev) => {
      if (dir === 'left') return prev === 0 ? 1 : 0;
      if (dir === 'right') return prev === 1 ? 0 : 1;
      return prev;
    });
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 6000);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section
        className="pt-28 md:pt-44 pb-20 md:pb-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)), url('/aboutbg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">About Infocera</h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 tracking-wide font-medium mb-2">We are a passionate team dedicated to delivering innovative technology solutions.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 md:py-16 relative overflow-hidden" style={{
        backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(30,58,138,0.9) 50%, rgba(6,182,212,0.85) 100%)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 w-full">
            {stats.map((stat, index) => {
              const isSecondRowMobile = index >= 2;
              const isNotFirstColDesktop = index % 4 !== 0;
              // Extract number from stat.value (e.g., '150+' -> 150)
              const num = parseInt(stat.value.replace(/\D/g, ''));
              const count = useCountUp(num);
              return (
                <div
                  key={stat.label}
                  className={[
                    "flex flex-col justify-center items-center text-center py-4 md:py-0",
                    isSecondRowMobile ? "border-t border-blue-300/30 md:border-t-0" : "",
                    isNotFirstColDesktop ? "md:border-l md:border-blue-300/30" : ""
                  ].join(" ")}
                >
                  <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-slate-800 via-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-2xl shadow-blue-500/30 border border-blue-400/20 hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 transform hover:-translate-y-1">
                    <stat.icon className="h-5 w-5 sm:h-8 sm:w-8 text-white drop-shadow-lg" />
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg">
                    {count}
                    {stat.value.replace(/\d+/g, '')}
                  </div>
                  <div className="text-xs sm:text-base text-blue-100 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="pt-16 md:pt-36 pb-12 md:pb-24 relative z-10" style={{ backgroundImage: `linear-gradient(rgba(20,30,48,0.85),rgba(20,30,48,0.85)), url('/culture1.webp')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Suggestion: Optimize /public/culture1.png for best performance (compress, use WebP, reduce resolution) */}
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="rounded-xl py-8 md:py-16 px-4 md:px-16 -mt-8 md:-mt-20 mb-8 md:mb-12 border border-gray-100/50 backdrop-blur-sm bg-white/5 flex flex-col items-center w-full cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 hover:shadow-purple-500/30 hover:shadow-cyan-500/30 hover:shadow-pink-500/20 transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden">
            {/* Magic glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-cyan-500/10 transition-all duration-500 rounded-xl"></div>
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 via-cyan-500 to-pink-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm"></div>
            <div className="absolute inset-[1px] rounded-xl bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm"></div>
            <div className="w-full relative z-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-cyan-400 transition-all duration-500">Our Story</h2>
              <div className="space-y-4 text-blue-100 text-justify text-base md:text-lg leading-relaxed">
                <p>
                  At INFOCERA, our journey began with a simple yet powerful mission: to deliver intelligent technology solutions that make a real difference. Driven by a passionate team of engineers, developers, and domain experts, we've grown into a trusted partner for startups, small businesses, government agencies, and large enterprises alike. From custom mobile apps and web development to data visualization, IoT, and full-scale IT consulting, we craft solutions that are innovative, impactful, and people-centered.
                </p>
                <p>
                  Our story is built on core values of dedication, integrity, and collaboration. We don't just solve problems — we listen, understand, and align our work with your vision. Every project we take on is an opportunity to create lasting value and build long-term partnerships. By staying ahead of the curve and delivering consistent excellence, we've earned a reputation for overcoming even the most complex challenges with empathy and expertise. At INFOCERA, we're not just building technology — we're building the future, together.
                </p>
                <p>
                  With every new challenge, we evolve — exploring emerging technologies and embracing continuous learning. Our cross-functional teams work seamlessly to transform ideas into robust, scalable solutions. We take pride in designing experiences that are not only functional but also intuitive and engaging. Client success is our true benchmark, and we measure ours by the impact we help create. As we move forward, our story continues to grow — fueled by innovation, guided by purpose, and grounded in trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Iconic Moments in Our History Section */}
      <div>
        <IconicMomentsSection />
      </div>

      {/* Enhanced What makes us different? Section */}
      <section className="scroll-animate py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)', transitionDelay: '400ms' }}>
        {/* Enhanced decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-bounce" style={{animationDelay: '0s', animationDuration: '6s'}}></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-400/20 rounded-full blur-3xl animate-bounce" style={{animationDelay: '2s', animationDuration: '8s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Enhanced SVG curve */}
        <svg className="absolute left-0 top-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 1600 600" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity: 0.4}}>
          <path d="M 0 350 Q 50 350 400 100 Q 900 500 1300 700 Q 1600 180 1600 180" stroke="#ffffff" stroke-width="3" fill="none" />
        </svg>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="relative">
            {/* Enhanced card background */}
            <div className="absolute top-0 left-0 h-full w-[100vw] bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-sm rounded-2xl rounded-r-none z-0 border border-gray-700/50" style={{right: '0', minWidth: '100%', maxWidth: 'none'}}></div>
            <div className="relative bg-transparent rounded-2xl p-8 md:p-12 shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-blue-500/20 hover:shadow-purple-500/20 hover:shadow-cyan-500/20 group">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">What Makes Us Different</h2>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">We focus on client-first approach, innovation, and long-term partnerships that drive success.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-0">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 md:p-8 shadow-xl text-center mb-0 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-2 group/card border border-blue-400/30">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover/card:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Client-First Approach</h3>
                  <p className="text-blue-100 leading-relaxed">We put our clients at the center of everything we do, ensuring their success is our priority.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 md:p-8 shadow-xl text-center mb-0 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-2 group/card border border-purple-400/30">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover/card:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Innovation at Heart</h3>
                  <p className="text-purple-100 leading-relaxed">Innovation drives our solutions and services, keeping us ahead of the curve.</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl p-6 md:p-8 shadow-xl text-center mb-0 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-2 group/card border border-cyan-400/30">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover/card:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Proven Expertise</h3>
                  <p className="text-cyan-100 leading-relaxed">Our team brings years of experience and technical know-how to every project.</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 md:p-8 shadow-xl text-center mb-0 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/30 hover:-translate-y-2 group/card border border-emerald-400/30">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover/card:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Long-term Partnerships</h3>
                  <p className="text-emerald-100 leading-relaxed">We build lasting relationships with our clients based on trust and mutual success.</p>
                </div>
              </div>
              <div className="flex justify-center mt-8 mb-4">
                <StyledWrapper>
                  <a
                    href="/brochure.pdf"
                    download
                    className="button"
                    style={{'--clr': '#7808d0'}}
                  >
                    <span className="button__icon-wrapper">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg" width={10}>
                        <path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <svg viewBox="0 0 24 24" fill="none" width={10} xmlns="http://www.w3.org/2000/svg" className="button__icon-svg button__icon-svg--copy">
                        <path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Download Brochure
                  </a>
                </StyledWrapper>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connecting Businesses Around the World Section */}
      <section className="scroll-animate py-2 bg-[#13303d] relative overflow-hidden min-h-[770px] flex flex-col justify-center w-full" style={{ transitionDelay: '500ms' }}>
        {/* Top Row: Text and Map */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full mb-8 gap-0">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-center items-start text-left px-8 lg:pl-32 lg:pr-8 mb-6 lg:mb-0 z-10">
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">Connecting Businesses</h2>
            <p className="text-blue-100 text-lg lg:text-xl max-w-lg">We empower businesses by expertly matching them with the perfect technology solutions. This strategic alignment ensures you leverage innovation to achieve your goals and thrive in today's digital landscape.</p>
              </div>
          {/* Right: Map */}
          <div className="flex-[2] flex justify-center items-center w-full relative">
            <img src="/map11.png" alt="World Map" className="w-full h-auto object-contain lg:-ml-24" />
            </div>
            </div>
        {/* Bottom Row: Stats */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 w-full px-8 lg:px-32">
          <div className="flex-1 bg-transparent border border-blue-200 rounded-2xl p-10 text-center flex flex-col justify-center items-center">
            <div className="text-5xl font-extrabold text-white mb-2">20+</div>
            <div className="text-white text-xl font-medium">Countries where we are providing the services</div>
              </div>
          <div className="flex-1 bg-transparent border border-blue-200 rounded-2xl p-10 text-center flex flex-col justify-center items-center">
            <div className="text-5xl font-extrabold text-white mb-2">100+</div>
            <div className="text-white text-xl font-medium">Service clients across the globe</div>
            </div>
          <div className="flex-1 bg-transparent border border-blue-200 rounded-2xl p-10 text-center flex flex-col justify-center items-center">
            <div className="text-5xl font-extrabold text-white mb-2">30+</div>
            <div className="text-white text-xl font-medium">Specialized IT service categories</div>
          </div>
        </div>
      </section>

      {/* culture Section */}
      <section className="scroll-animate py-16 relative overflow-hidden" style={{ transitionDelay: '600ms', backgroundImage: `linear-gradient(rgba(20,30,48,0.85),rgba(20,30,48,0.85)), url('/culturebg.webp')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">Our Culture</h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto font-light leading-relaxed">Class, Care, Learn, Achieve, Share, Social Responsibility and Transparency - The pillars that define who we are.</p>
          </div>
          <div className="relative flex justify-center gap-6 flex-wrap items-center">
            <button
              aria-label="Previous"
              className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/70 text-gray-900 rounded-full p-2 shadow transition z-10"
              onClick={() => handleArrow('left')}
              style={{left: '-40px'}}>
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            {cultureCards.slice(cardSet * 3, cardSet * 3 + 3).map((card, idx) => (
              <div key={card.title} className="bg-white/10 border border-white/60 rounded-xl p-2 md:p-3 max-w-xs w-full min-h-[420px] text-center shadow-lg flex flex-col items-center transition-all duration-200 hover:border-white hover:bg-white/20 hover:shadow-xl">
                {card.icon}
                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-blue-100 text-sm md:text-base">{card.text}</p>
              </div>
            ))}
            <button
              aria-label="Next"
              className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/70 text-gray-900 rounded-full p-2 shadow transition z-10"
              onClick={() => handleArrow('right')}
              style={{right: '-40px'}}>
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
          <div className="flex justify-center mt-6">
            {[0, 1].map((i) => (
              <span
                key={i}
                className={`mx-2 transition-all duration-500 rounded-full ${cardSet === i ? 'w-6 h-3 bg-white/90 opacity-100' : 'w-3 h-3 bg-white/50 opacity-60'} inline-block`}
                style={{ boxShadow: cardSet === i ? '0 0 8px 2px #fff' : 'none' }}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Demo Video Section */}
      <section id="demo-video" className="py-16 relative overflow-hidden" style={{ background: 'linear-gradient(45deg, #9358f7, #6197ee, #10d7e2)' }}>
        {/* Background strip as a left-side band, full height */}
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 h-full z-0" style={{width: '75%'}}>
          <div className="w-full h-full bg-[#232433]"></div>
        </div>
        <div className="block lg:hidden absolute left-0 right-0 top-0 bottom-0 h-full z-0">
          <div className="w-full h-full bg-[#232433]"></div>
        </div>
        {/* Decorative SVG line */}
        <svg className="absolute left-0 top-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 1600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="aboutLineGradient" x1="0" y1="0" x2="1600" y2="500" gradientUnits="userSpaceOnUse">
              <stop stop-color="#9358f7" />
              <stop offset="0.5" stop-color="#6197ee" />
              <stop offset="1" stop-color="#10d7e2" />
            </linearGradient>
          </defs>
          <path d="M 0 350 Q 400 100 900 400 Q 1300 600 1600 100" stroke="url(#aboutLineGradient)" stroke-width="4" fill="none" />
        </svg>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Side - Text Content */}
            <div className="flex flex-col items-start w-full lg:w-1/2 bg-[#2a2b38] rounded-2xl p-8 border border-[#2a2b38] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-left">Inside INFOCERA</h2>
              <p className="text-xl md:text-2xl lg:text-3xl text-white text-left mb-6">
                A Glimpse into Our Vision, Values, and Innovation
              </p>
              <p className="text-base text-white text-left mb-8 leading-relaxed">
                Step into our world through this short video that captures what INFOCERA stands for — our journey, mission, and the passionate minds behind our solutions. Discover how we craft intelligent, human-centered technologies that empower businesses and shape the future.
              </p>
              <div className="w-20 h-1 rounded-full mb-8" style={{ background: 'linear-gradient(to right, #7deff6, #0154b4)' }}></div>
            </div>
            
            {/* Right Side - Video */}
            <div className="flex justify-center w-full lg:w-1/2 bg-[#232433] rounded-2xl p-8 border border-[#232433] shadow-lg">
              <video
                src="/demovideo.mp4"
                poster="/portfoliobg.jpg"
                controls
                className="rounded-2xl border-4 border-white shadow-lg w-full max-w-2xl bg-black"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
