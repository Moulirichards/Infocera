import React, { useState } from 'react';
import styled from 'styled-components';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

// Styled Button Component
const StyledWrapper = styled.div`
  .cssbuttons-io-button {
    background: linear-gradient(to right, #10b981, #06b6d4);
    color: white;
    font-family: inherit;
    padding: 0.35em;
    padding-left: 1.2em;
    font-size: 17px;
    font-weight: 500;
    border-radius: 0.9em;
    border: none;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    box-shadow: inset 0 0 1.6em -0.6em rgba(6, 182, 212, 0.6);
    overflow: hidden;
    position: relative;
    height: 2.8em;
    padding-right: 3.3em;
    cursor: pointer;
  }

  .cssbuttons-io-button .icon {
    background: white;
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.2em;
    width: 2.2em;
    border-radius: 0.7em;
    box-shadow: 0.1em 0.1em 0.6em 0.2em rgba(6, 182, 212, 0.6);
    right: 0.3em;
    transition: all 0.3s;
  }

  .cssbuttons-io-button:hover .icon {
    width: calc(100% - 0.6em);
  }

  .cssbuttons-io-button .icon svg {
    width: 1.1em;
    transition: transform 0.3s;
    color: #06b6d4;
  }

  .cssbuttons-io-button:hover .icon svg {
    transform: translateX(0.1em);
  }

  .cssbuttons-io-button:active .icon {
    transform: scale(0.95);
  }
`;

const Contact = () => {
  // Add state for subject and subcategory
  const [subject, setSubject] = useState('');
  const [subCategory, setSubCategory] = useState('');

  // Define sub-categories for each subject
  const serviceSubCategories = [
    'Software Products',
    'Web Development',
    'Mobile Apps',
    'Online Marketing',
    'Creative Design',
    'Consulting',
    'Data Science',
    'Testing',
    'Cloud Solutions',
    'Cyber Security',
    'Other Service'
  ];
  const technologySubCategories = [
    'Architecture',
    'Apache',
    'AR/VR Development',
    'Ajax & JSON',
    'AngularJS/JS',
    'Aws',
    'Blockchain Development',
    'Cassandra',
    'Deployment Automation',
    'Drupal',
    'Godaddy',
    'Google Cloud',
    'Html & CSS',
    'IIS',
    'Integration Testing',
    'IoT Solutions',
    'Java',
    'Java Frameworks',
    'Java Testing',
    'Jboss',
    'Joomla',
    'Jquery',
    'Jquery UI',
    'Jsp/Jsf',
    'Mongodb',
    'Node.js Development',
    'Oracle',
    'Perl',
    'Php',
    'Python',
    'React Development',
    'Redis',
    'SDLC',
    'Shell',
    'Software Testing',
    'SQL Database',
    'SQL Server',
    'System Testing',
    'Tomcat',
    'Unit Testing',
    'Wordpress'
  ];

  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('/contactsbg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <Navbar />
      
      <section className="pt-12 md:pt-20 pb-8 md:pb-16 relative">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h1 className="pt-8 md:pt-16 text-2xl md:text-5xl font-bold text-white mb-3 md:mb-6">Contact Us</h1>
            <p className="text-base md:text-xl text-blue-100 max-w-xs sm:max-w-md md:max-w-3xl mx-auto">
              Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12">
            {/* Enhanced Contact Form */}
            <div className="relative overflow-hidden rounded-2xl p-6 md:p-6 shadow-2xl backdrop-blur-sm border border-white/10" 
                 style={{ background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%)' }}>
              
              {/* Animated background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/5 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-400/5 rounded-full blur-3xl animate-bounce" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <svg className="h-5 w-5 md:h-6 md:w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                      Send us a message
                    </h2>
                    <p className="text-gray-300 text-sm">We'd love to hear from you</p>
                  </div>
                </div>
                
                <form className="space-y-4">
                  {/* First row: First Name and Last Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-200 mb-2 group-focus-within:text-emerald-400 transition-colors">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm group-hover:bg-white/10"
                        placeholder=""
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-200 mb-2 group-focus-within:text-emerald-400 transition-colors">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm group-hover:bg-white/10"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* Second row: Email */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-200 mb-2 group-focus-within:text-emerald-400 transition-colors">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm group-hover:bg-white/10"
                      placeholder=""
                    />
                  </div>
                  {/* Third row: Phone Number */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-200 mb-2 group-focus-within:text-emerald-400 transition-colors">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm group-hover:bg-white/10"
                      placeholder=""
                    />
                  </div>
                  {/* Subject and Sub Category Dropdowns */}
                  <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                    <div className="group w-full md:w-1/2">
                      <label className="block text-sm font-medium text-gray-200 mb-2 group-focus-within:text-emerald-400 transition-colors">
                        Subject *
                      </label>
                      <select
                        className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-white backdrop-blur-sm group-hover:bg-white/10"
                        value={subject}
                        onChange={e => {
                          setSubject(e.target.value);
                          setSubCategory(''); // Reset subcategory when subject changes
                        }}
                        required
                      >
                        <option value="" className="bg-gray-800">Select a subject</option>
                        <option value="services" className="bg-gray-800">Services</option>
                        <option value="technologies" className="bg-gray-800">Technologies</option>
                      </select>
                    </div>
                    <div className="group w-full md:w-1/2">
                      <label className="block text-sm font-medium text-gray-200 mb-2 group-focus-within:text-emerald-400 transition-colors">
                        Sub Category *
                      </label>
                      <select
                        className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-white backdrop-blur-sm group-hover:bg-white/10"
                        value={subCategory}
                        onChange={e => setSubCategory(e.target.value)}
                        required
                        disabled={!subject}
                      >
                        <option value="" className="bg-gray-800">{subject ? 'Select a sub category' : 'Select subject first'}</option>
                        {subject === 'services' && serviceSubCategories.map(opt => (
                          <option key={opt} value={opt} className="bg-gray-800">{opt}</option>
                        ))}
                        {subject === 'technologies' && technologySubCategories.map(opt => (
                          <option key={opt} value={opt} className="bg-gray-800">{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {/* Dynamic field for software description or project title */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-200 mb-2 group-focus-within:text-emerald-400 transition-colors">
                      {subject === 'services' ? 'Describe which software you want *' : subject === 'technologies' ? 'Project Title *' : 'Details *'}
                    </label>
                    <input
                      type="text"
                      required
                      disabled={!subject}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm group-hover:bg-white/10"
                      placeholder={subject === 'services' ? 'Describe which software you want' : subject === 'technologies' ? 'Project Title' : 'Select subject first'}
                    />
                  </div>
                  {/* Message textarea follows below */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-200 mb-2 group-focus-within:text-emerald-400 transition-colors">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm group-hover:bg-white/10 resize-none"
                      placeholder="Tell us about your project, requirements, and how we can help you achieve your goals..."
                    ></textarea>
                  </div>
                  
                  
                  <div className="flex items-center justify-center space-x-4 pt-2">
                    <StyledWrapper>
                      <button type="submit" className="cssbuttons-io-button">
                        Send Message
                        <div className="icon">
                          <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
                          </svg>
                        </div>
                      </button>
                    </StyledWrapper>
                    <button
                      type="button"
                      className="px-6 py-4 border border-gray-600 text-gray-300 rounded-xl hover:bg-white/5 transition-all duration-300"
                    >
                      Reset
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 text-center mt-2">
                    * Required fields. We'll get back to you within 24 hours.
                  </p>
                  <div style={{ height: '2.5rem' }} />
                  <div className="flex justify-center mb-2">
                    <div className="relative w-full max-w-md rounded-2xl p-6 text-center shadow-2xl border border-blue-400/30 bg-white/10 backdrop-blur-md overflow-hidden group">
                      {/* Animated gradient border */}
                      <div className="absolute -inset-1 rounded-2xl z-0 animate-gradient-x bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-60 blur-lg group-hover:opacity-90 transition-all duration-700" style={{ pointerEvents: 'none' }} />
                      {/* Icon */}
                      <div className="relative z-10 flex justify-center mb-3 group/icon">
                        <svg className="w-14 h-14 text-cyan-200 drop-shadow-lg transition-transform duration-500 group-hover/icon:scale-110 group-hover/icon:text-blue-300" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                          <rect x="3" y="5" width="18" height="14" rx="4" fill="url(#chatGradient)" />
                          <path d="M7 10h10M7 14h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <ellipse cx="19" cy="19" rx="2" ry="2" fill="url(#chatGradient)" className="animate-pulse-slow" />
                          <defs>
                            <linearGradient id="chatGradient" x1="3" y1="5" x2="21" y2="19" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#67e8f9" />
                              <stop offset="1" stopColor="#a78bfa" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <h3 className="relative z-10 text-lg md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-blue-100 to-purple-200 tracking-tight leading-tight mb-2" style={{ fontFamily: 'Exo, Arial, sans-serif' }}>
                        We design. We build. We scale.
                      </h3>
                      <p className="relative z-10 text-base md:text-lg text-blue-100 font-medium" style={{ fontFamily: 'Exo, Arial, sans-serif' }}>
                        Custom IT solutions for your vision.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Enhanced Contact Information */}
            <div className="space-y-6 md:space-y-8">
              <div className="relative overflow-hidden rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-sm border border-white/10" 
                   style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 50%, rgba(6, 182, 212, 0.1) 100%)' }}>
                
                {/* Animated background elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl animate-bounce" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                      <Phone className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Contact Information
                      </h3>
                      <p className="text-blue-200 text-sm">Get in touch with our team</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Phone */}
                    <div className="group flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm md:text-base mb-1">Phone</h4>
                        <p className="text-blue-200 text-sm md:text-base font-medium">+91 8815587953</p>
                        <p className="text-blue-300/70 text-xs">Reach us during business hours for prompt assistance.</p>
                      </div>
                    </div>
                    
                    {/* Email */}
                    <div className="group flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm md:text-base mb-1">Email</h4>
                        <p className="text-purple-200 text-sm md:text-base font-medium">info@infocera.in</p>
                        <p className="text-purple-300/70 text-xs">We'll respond within 24 hours</p>
                      </div>
                    </div>
                    
                    {/* Address */}
                    <div className="group flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm md:text-base mb-1">Address</h4>
                        <p className="text-emerald-200 text-sm md:text-base font-medium leading-relaxed">
                          First Floor, L29-L34<br />
                          Block L, Connaught Place<br />
                          <span className="text-emerald-300 font-semibold">New Delhi, Delhi - 110001</span>
                        </p>
                        <p className="text-emerald-300/70 text-xs mt-1">Main office - Visit us anytime</p>
                      </div>
                    </div>
                    
                    {/* Business Hours */}
                    <div className="group flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm md:text-base mb-1">Business Hours</h4>
                        <div className="space-y-1">
                          <p className="text-orange-200 text-sm md:text-base font-medium">
                            <span className="text-orange-300">Mon - Fri:</span> 9:00 AM - 6:00 PM
                          </p>
                          <p className="text-orange-200 text-sm md:text-base font-medium">
                            <span className="text-orange-300">Sat:</span> 10:00 AM - 2:00 PM
                          </p>
                        </div>
                        <p className="text-orange-300/70 text-xs mt-1">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl p-4 md:p-8 shadow-lg" style={{ background: 'linear-gradient(to right, #00BCD4, #00796B)' }}>
                <h3 className="text-base md:text-xl font-bold text-white mb-3 md:mb-6">Find Us</h3>
                <div className="w-full max-w-xs aspect-square rounded-xl overflow-hidden border-2 border-brand-primary mx-auto mb-2 md:mb-4">
                  <iframe
                    title="Infocera Location"
                    src="https://www.google.com/maps?q=First+Floor,+L29-L34,+Block+L,+Connaught+Place,+New+Delhi,+Delhi+-+110001&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="flex justify-center">
                  <a
                    href="https://www.google.com/maps?q=First+Floor,+L29-L34,+Block+L,+Connaught+Place,+New+Delhi,+Delhi+-+110001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 px-3 md:px-4 py-1.5 md:py-2 bg-brand-primary text-white rounded-lg font-semibold shadow hover:bg-brand-primary/90 transition text-xs md:text-base"
                  >
                    Get location in maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
