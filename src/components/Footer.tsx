import { Link } from 'react-router-dom';
import {
  Mail, Phone, MapPin, ChevronDown, ChevronRight,
  TrendingUp, Code, Smartphone, Monitor, Palette, Users, Brain, Bug, Layers, Wrench, Database, Cloud, Shield
} from 'lucide-react';
import { Logo } from './Logo';
import { useState, useEffect } from 'react';
import React from 'react';

// Copy serviceCategories and services from Navbar
const serviceCategories = {
  'online-marketing': 'Online Marketing',
  'web-development': 'Web Design & Development',
  'mobile-apps': 'Mobile Application',
  'software': 'Software',
  'creative-design': 'Creative Design',
  'consultant': 'Consultant',
  'data-science': 'Data Science',
  'testing': 'Testing'
};

const services = [
  // Online Marketing
  { name: 'SEO Services', path: '/services/seo-services', category: 'online-marketing' },
  { name: 'Search Engine Marketing', path: '/services/search-engine-marketing', category: 'online-marketing' },
  { name: 'Social Media Marketing', path: '/services/social-media-marketing', category: 'online-marketing' },
  { name: 'Pay Per Click Management', path: '/services/pay-per-click-management', category: 'online-marketing' },
  { name: 'SEO Copywriting', path: '/services/seo-copywriting', category: 'online-marketing' },
  { name: 'Digital Marketing', path: '/services/digital-marketing', category: 'online-marketing' },
  { name: 'Brand Consulting', path: '/services/brand-consulting', category: 'online-marketing' },
  { name: 'Lead Management System', path: '/services/lead-management-system', category: 'online-marketing' },
  // Web Design & Development
  { name: 'Website Design', path: '/services/website-design', category: 'web-development' },
  { name: 'Website Development', path: '/services/web-development', category: 'web-development' },
  { name: 'CRM Software Development', path: '/services/crm-software-development', category: 'web-development' },
  { name: 'Software Development', path: '/services/software-development', category: 'web-development' },
  { name: 'Educational Web Portal Development', path: '/services/educational-web-portal', category: 'web-development' },
  { name: 'Restaurant Web Portal Development', path: '/services/restaurant-web-portal', category: 'web-development' },
  { name: 'Health Care Portal Development', path: '/services/healthcare-portal', category: 'web-development' },
  { name: 'Travel Portal Development', path: '/services/travel-portal', category: 'web-development' },
  { name: 'Real Estate Portal Development', path: '/services/real-estate-portal', category: 'web-development' },
  { name: 'E-commerce Website Development', path: '/services/ecommerce-development', category: 'web-development' },
  // Mobile Application
  { name: 'Mobile App Development', path: '/services/mobile-apps', category: 'mobile-apps' },
  { name: 'Windows App Development', path: '/services/windows-app-development', category: 'mobile-apps' },
  { name: 'Xamarin App Development', path: '/services/xamarin-app-development', category: 'mobile-apps' },
  { name: 'Hybrid App Development', path: '/services/hybrid-app-development', category: 'mobile-apps' },
  { name: 'Native App Development', path: '/services/native-app-development', category: 'mobile-apps' },
  // Software
  { name: 'HR and Payroll Management Software', path: '/services/hr-payroll-software', category: 'software' },
  { name: 'Jewellery Software', path: '/services/jewellery-software', category: 'software' },
  { name: 'CRM Software', path: '/services/crm-software', category: 'software' },
  { name: 'Real Estate Software', path: '/services/real-estate-software', category: 'software' },
  { name: 'Inventory Management Software', path: '/services/inventory-management-software', category: 'software' },
  { name: 'Hospital Management Software', path: '/services/hospital-management-software', category: 'software' },
  { name: 'School Management Software', path: '/services/school-management-software', category: 'software' },
  // Creative Design
  { name: 'UI/UX Design', path: '/services/ui-ux-design', category: 'creative-design' },
  { name: 'Logo Design', path: '/services/logo-design', category: 'creative-design' },
  { name: 'Brochure Design', path: '/services/brochure-design', category: 'creative-design' },
  // Consultant
  { name: 'NetSuite Solution Consultant', path: '/services/netsuite-consultant', category: 'consultant' },
  { name: 'Recruitment Service', path: '/services/recruitment-service', category: 'consultant' },
  { name: 'SharePoint Development', path: '/services/sharepoint-development', category: 'consultant' },
  { name: 'Software Consultant', path: '/services/software-consultant', category: 'consultant' },
  // Data Science (AI/ML + Data Analytics)
  { name: 'AI & Machine Learning', path: '/services/ai-ml', category: 'data-science' },
  { name: 'Data Analytics', path: '/services/data-analytics', category: 'data-science' },
  // Testing
  { name: 'Software Testing', path: '/services/software-testing', category: 'testing' },
  { name: 'Security Testing', path: '/services/security-testing', category: 'testing' },
  { name: 'Performance Testing', path: '/services/performance-testing', category: 'testing' }
];

// Copy technologyCategories and technologies from Navbar
const technologyCategories = {
  'ui-design': 'UI Design',
  'server-side': 'Server Side Scripting',
  'cloud-computing': 'Cloud Computing',
  'data-analytics': 'Data Mining and Analytics',
  'web-server': 'Web Server Technology',
  'testing': 'Testing',
  'software-process': 'Software Process'
};

const technologies = [
  // UI Design
  { name: 'HTML/HTML5, CSS3', path: '/technologies/html-css', category: 'ui-design' },
  { name: 'AngularJS, JS', path: '/technologies/angular-js', category: 'ui-design' },
  { name: 'AJAX/JSON', path: '/technologies/ajax-json', category: 'ui-design' },
  { name: 'jQuery, jQuery UI', path: '/technologies/jquery', category: 'ui-design' },
  { name: 'Drupal', path: '/technologies/drupal', category: 'ui-design' },
  { name: 'Joomla', path: '/technologies/joomla', category: 'ui-design' },
  { name: 'WordPress', path: '/technologies/wordpress', category: 'ui-design' },
  { name: 'React Development', path: '/technologies/react-development', category: 'ui-design' },
  // Server Side Scripting
  { name: 'PHP', path: '/technologies/php', category: 'server-side' },
  { name: 'J2EE, J2SE, Swing, Servlet', path: '/technologies/java', category: 'server-side' },
  { name: 'Spring, Struts, Hibernate', path: '/technologies/java-frameworks', category: 'server-side' },
  { name: 'JSP, JSF, ApacheCXF', path: '/technologies/jsp-jsf', category: 'server-side' },
  { name: 'JUnit, TestNG, Mockito', path: '/technologies/java-testing', category: 'server-side' },
  { name: 'Microsoft Visio, Enterprise Architect', path: '/technologies/architecture', category: 'server-side' },
  { name: 'Shell', path: '/technologies/shell', category: 'server-side' },
  { name: 'Perl', path: '/technologies/perl', category: 'server-side' },
  { name: 'Python', path: '/technologies/python', category: 'server-side' },
  { name: 'NodeJS Development', path: '/technologies/nodejs-development', category: 'server-side' },
  // Cloud Computing
  { name: 'AWS Development', path: '/technologies/aws', category: 'cloud-computing' },
  { name: 'Google Cloud', path: '/technologies/google-cloud', category: 'cloud-computing' },
  { name: 'Go Daddy', path: '/technologies/godaddy', category: 'cloud-computing' },
  // Data Mining and Analytics
  { name: 'Database Design: Oracle', path: '/technologies/oracle', category: 'data-analytics' },
  { name: 'SQL Database', path: '/technologies/sql-database', category: 'data-analytics' },
  { name: 'Redis', path: '/technologies/redis', category: 'data-analytics' },
  { name: 'Cassandra', path: '/technologies/cassandra', category: 'data-analytics' },
  { name: 'Database Development: MongoDB', path: '/technologies/mongodb', category: 'data-analytics' },
  { name: 'Database Consulting: SQL Server', path: '/technologies/sql-server', category: 'data-analytics' },
  { name: 'IoT Solutions', path: '/technologies/iot-solutions', category: 'data-analytics' },
  { name: 'Blockchain Development', path: '/technologies/blockchain-development', category: 'data-analytics' },
  // Web Server Technology
  { name: 'JBoss', path: '/technologies/jboss', category: 'web-server' },
  { name: 'Apache', path: '/technologies/apache', category: 'web-server' },
  { name: 'Tomcat', path: '/technologies/tomcat', category: 'web-server' },
  { name: 'IIS', path: '/technologies/iis', category: 'web-server' },
  // Testing
  { name: 'Software Testing', path: '/technologies/software-testing', category: 'testing' },
  { name: 'Unit Testing', path: '/technologies/unit-testing', category: 'testing' },
  { name: 'Integration Testing', path: '/technologies/integration-testing', category: 'testing' },
  { name: 'System Testing', path: '/technologies/system-testing', category: 'testing' },
  { name: 'Deployment Automation Support', path: '/technologies/deployment-automation', category: 'testing' },
  { name: 'AR/VR Development', path: '/technologies/ar-vr-development', category: 'ui-design' },
  // Software Process
  { name: 'SDLC', path: '/technologies/sdlc', category: 'software-process' }
];

// Icon mapping for service categories
const serviceCategoryIcons = {
  'online-marketing': TrendingUp,
  'web-development': Code,
  'mobile-apps': Smartphone,
  'software': Monitor,
  'creative-design': Palette,
  'consultant': Users,
  'data-science': Brain,
  'testing': Bug
};

// Icon mapping for technology categories
const technologyCategoryIcons = {
  'ui-design': Layers,
  'server-side': Code,
  'cloud-computing': Cloud,
  'data-analytics': Database,
  'web-server': Wrench,
  'testing': Shield,
  'software-process': Monitor
};

export const Footer = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [modalType, setModalType] = useState<'service' | 'tech' | null>(null);
  const [isTouch, setIsTouch] = useState(false);
  const currentYear = new Date().getFullYear();

  const industries = [
    { name: 'Automotive' },
    { name: 'Ecommerce' },
    { name: 'Education' },
    { name: 'Finance' },
    { name: 'Gaming' },
    { name: 'Healthcare' },
    { name: 'Manufacturing' },
    { name: 'Real Estate' },
    { name: 'Retail' },
  ];

  const products = [
    { name: "CloudSync Pro", path: "/products" },
    { name: "SecureGuard Enterprise", path: "/products" },
    { name: "AI Analytics Suite", path: "/products" },
    { name: "MobileFlow Builder", path: "/products" },
    { name: "DataVault Pro", path: "/products" },
    { name: "DevOps Accelerator", path: "/products" },
    { name: "TeamConnect Hub", path: "/products" },
    { name: "BusinessIntel Dashboard", path: "/products" },
    { name: "WebForce CMS", path: "/products" },
    { name: "AutoFlow Engine", path: "/products" },
  ];

  const resources = [
    { name: 'Blog', path: '/blog' },
    { name: 'News', path: '/news' },
    { name: 'Documentation', path: '/contact' },
    { name: 'FAQ', path: '/contact' },
    { name: 'Products', path: '/products' },
    { name: 'Technical Support', path: '/contact' },
  ];

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Team', path: '/about#leadership-team' },
    { name: 'Culture', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/contact' },
    { name: 'Terms of Service', path: '/contact' },
  ];

  // Detect touch device for tap support
  React.useEffect(() => {
    const handleTouch = () => setIsTouch(true);
    window.addEventListener('touchstart', handleTouch, { once: true });
    return () => window.removeEventListener('touchstart', handleTouch);
  }, []);

  // Close flyouts when clicking outside (for tap)
  React.useEffect(() => {
    if (!isTouch) return;
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.footer-flyout-trigger') && !target.closest('.footer-flyout')) {
        setActiveService(null);
        setActiveTech(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isTouch]);

  // Close modal when clicking outside or pressing Escape
  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('footer-modal-overlay')) {
        setActiveService(null);
        setActiveTech(null);
        setModalType(null);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveService(null);
        setActiveTech(null);
        setModalType(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Close sub-service/technology panels when clicking outside
  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.footer-name-popover-trigger') && !target.closest('.footer-name-scrollpanel')) {
        setActiveService(null);
        setActiveTech(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <footer className="bg-black text-white relative overflow-hidden w-full">
      {/* Desktop Layout */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 py-20 relative z-10 w-full">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-x-4 md:gap-x-8 gap-y-8 md:gap-y-12 items-start">
          {/* Logo & Company Info */}
          <div className="flex flex-col space-y-4 lg:col-span-3">
            <div className="w-full h-full flex justify-center items-center" style={{maxWidth: 'none', maxHeight: 'none', gridColumn: 'auto', gridRow: 'auto', overflow: 'visible'}}>
              <Logo size='xl' className="h-[60rem] w-[60rem] object-contain" />
            </div>
            <p className="text-gray-100 text-base md:text-lg font-medium leading-snug max-w-2xl drop-shadow mt-2">
              Leading IT services provider delivering <span className="text-brand-primary font-bold">innovative technology solutions</span> that drive business growth and digital transformation.
            </p>
            <div className="space-y-2 mt-2">
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-brand-primary" />
                <span className="text-gray-200 text-lg font-medium">+91 8815587953</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-brand-primary" />
                <span className="text-gray-200 text-lg font-medium">info@infocera.in</span>
              </div>
              <div className="flex items-center space-x-3 mb-1">
                <MapPin className="h-12 w-12 text-brand-primary" />
                <span className="text-gray-200 text-lg font-medium">First Floor, L29-L34, Block L<br />Connaught Place, New Delhi, Delhi - 110001</span>
              </div>
              {/* Google Maps Embed */}
              <div className="w-full max-w-xs aspect-square rounded-xl overflow-hidden border-2 border-brand-primary mx-auto mb-1">
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
              <div className="flex justify-center mt-0">
                <a
                  href="https://www.google.com/maps?q=First+Floor,+L29-L34,+Block+L,+Connaught+Place,+New+Delhi,+Delhi+-+110001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-0 px-3 py-1.5 bg-brand-primary text-white rounded-lg font-semibold shadow hover:bg-brand-primary/90 transition text-sm"
                >
                  Get location in maps
                </a>
              </div>
            </div>
          </div>
          {/* Divider for large screens */}
          <div className="hidden lg:block h-full w-px bg-gradient-to-b from-transparent via-gray-700/60 to-transparent mx-2 lg:col-span-1" />
          {/* Categories: Services, Industries, Technologies, Products, Resources, Company */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[auto,auto,auto,auto,auto] grid-rows-2 gap-x-4 md:gap-x-10 gap-y-4 md:gap-y-0 col-span-2 lg:col-span-5">
            {/* First Row */}
            {/* Services */}
            <div className="row-start-1 col-start-1">
              <h3 className="text-lg font-bold mb-1 pb-1" style={{ color: '#2563eb', borderBottom: '3px solid #2563eb' }}>Services</h3>
              <ul className="text-xs sm:text-sm md:text-base lg:text-lg space-y-1 list-none m-0 p-0">
                {Object.entries(serviceCategories).map(([categoryKey, categoryName]) => (
                  <li key={categoryKey} className="relative m-0 p-0">
                    <button
                      className={`footer-name-popover-trigger w-full flex items-center gap-1 text-left text-gray-300 hover:text-brand-primary transition-colors focus:outline-none font-semibold leading-tight ${activeService === categoryKey ? 'text-brand-primary' : ''}`}
                      style={{padding: 0, background: 'none', border: 'none', margin: 0}}
                      onClick={() => setActiveService(activeService === categoryKey ? null : categoryKey)}
                      aria-label={categoryName}
                      title={categoryName}
                    >
                      <span className="whitespace-nowrap">{categoryName}</span>
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-brand-primary transition-colors" />
                    </button>
                    {activeService === categoryKey && (
                      <div className="footer-name-scrollpanel absolute top-full left-0 mt-2 w-64 max-h-60 overflow-y-auto bg-black text-white rounded-lg shadow-lg z-50 border animate-fade-in">
                        <ul>
                          {services
                            .filter(service => service.category === categoryKey)
                            .map((service) => (
                              <li key={service.path}>
                                <Link
                                  to={service.path}
                                  className="block px-4 py-2 hover:bg-blue-900/30 hover:text-blue-300 hover:underline hover:decoration-white rounded transition-colors font-semibold"
                                  onClick={() => setActiveService(null)}
                                >
                                  {service.name}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            {/* Industries */}
            <div className="row-start-1 col-start-2">
              <h3 className="text-lg font-bold mb-1 pb-1" style={{ color: '#2563eb', borderBottom: '3px solid #2563eb' }}>Industries</h3>
              <ul className="text-xs sm:text-sm md:text-base lg:text-lg space-y-1 list-none m-0 p-0">
                {industries.map((item) => (
                  <li key={item.name}>
                    <span className="text-gray-300 font-semibold">
                      <span className="whitespace-nowrap">{item.name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Technologies */}
            <div className="row-start-1 col-start-3">
              <h3 className="text-lg font-bold mb-1 pb-1" style={{ color: '#2563eb', borderBottom: '3px solid #2563eb' }}>Technologies</h3>
              <ul className="text-xs sm:text-sm md:text-base lg:text-lg space-y-1 list-none m-0 p-0">
                {Object.entries(technologyCategories).map(([categoryKey, categoryName]) => (
                  <li key={categoryKey} className="relative m-0 p-0">
                    <button
                      className={`footer-name-popover-trigger w-full flex items-center gap-1 text-left text-gray-300 hover:text-brand-primary transition-colors focus:outline-none font-semibold leading-tight ${activeTech === categoryKey ? 'text-brand-primary' : ''}`}
                      style={{padding: 0, background: 'none', border: 'none', margin: 0}}
                      onClick={() => setActiveTech(activeTech === categoryKey ? null : categoryKey)}
                      aria-label={categoryName}
                      title={categoryName}
                    >
                      <span className="whitespace-nowrap">{categoryName}</span>
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-brand-primary transition-colors" />
                    </button>
                    {activeTech === categoryKey && (
                      <div className="footer-name-scrollpanel absolute top-full left-0 mt-2 w-64 max-h-60 overflow-y-auto bg-black text-white rounded-lg shadow-lg z-50 border animate-fade-in">
                        <ul>
                          {technologies
                            .filter(tech => tech.category === categoryKey)
                            .map((tech) => (
                              <li key={tech.path}>
                                <Link
                                  to={tech.path}
                                  className="block px-4 py-2 hover:bg-blue-900/30 hover:text-blue-300 hover:underline hover:decoration-white rounded transition-colors font-semibold"
                                  onClick={() => setActiveTech(null)}
                                >
                                  {tech.name}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            {/* Second Row */}
            {/* Company below Services */}
            <div className="row-start-2 col-start-1">
              <h3 className="text-lg font-bold mb-1 pb-1" style={{ color: '#2563eb', borderBottom: '3px solid #2563eb' }}>Company</h3>
              <ul className="text-xs sm:text-sm md:text-base lg:text-lg space-y-1 list-none m-0 p-0">
                {company.map((item) => (
                  <li key={item.path + '-' + item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-300 hover:text-brand-primary transition-colors font-semibold"
                    >
                      <span className="whitespace-nowrap">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Products below Industries */}
            <div className="row-start-2 col-start-2">
              <h3 className="text-lg font-bold mb-1 pb-1" style={{ color: '#2563eb', borderBottom: '3px solid #2563eb' }}>Products</h3>
              <ul className="text-xs sm:text-sm md:text-base lg:text-lg space-y-1 list-none m-0 p-0">
                {products.map((item) => (
                  <li key={item.path + '-' + item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-300 hover:text-brand-primary transition-colors font-semibold"
                    >
                      <span className="whitespace-nowrap">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Resources & Support below Technologies */}
            <div className="row-start-2 col-start-3">
              <h3 className="text-lg font-bold mb-1 pb-1" style={{ color: '#2563eb', borderBottom: '3px solid #2563eb' }}>Resources & Support</h3>
              <ul className="text-xs sm:text-sm md:text-base lg:text-lg space-y-1 list-none m-0 p-0">
                {resources.map((item) => (
                  <li key={item.path + '-' + item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-300 hover:text-brand-primary transition-colors font-semibold"
                    >
                      <span className="whitespace-nowrap">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Divider line and bottom section (desktop) */}
        <hr className="border-t border-gray-700 w-full mt-20 mb-2" />
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <p className="text-gray-400 text-sm">
            © {currentYear} Infocera. All rights reserved.
          </p>
        </div>
      </div>
      {/* Mobile Layout */}
      <div className="block lg:hidden max-w-7xl mx-auto px-2 sm:px-4 py-10 relative z-10 w-full">
        <div className="flex flex-col gap-y-8">
          {/* Logo & Company Info */}
          <div className="flex flex-col space-y-6 mb-6">
            <div className="flex items-center justify-center">
              <div className="text-4xl sm:text-6xl font-extrabold text-white drop-shadow-lg"><Logo size='xl' className="h-16 sm:h-24" /></div>
            </div>
            <p className="text-gray-100 text-xs sm:text-sm font-medium leading-snug max-w-2xl drop-shadow text-center">
              Leading IT services provider delivering <span className="text-brand-primary font-bold">innovative technology solutions</span> that drive business growth and digital transformation.
            </p>
            <div className="space-y-2 mt-2">
              <div className="flex items-center space-x-2 justify-center">
                <Phone className="h-4 w-4 text-brand-primary" />
                <span className="text-gray-200 text-xs font-medium">+91 8815587953</span>
              </div>
              <div className="flex items-center space-x-2 justify-center">
                <Mail className="h-4 w-4 text-brand-primary" />
                <span className="text-gray-200 text-xs font-medium">info@infocera.in</span>
              </div>
              <div className="flex items-center space-x-2 mb-2 justify-center">
                <div className="w-full flex flex-col items-center bg-black/40 rounded-xl p-3 mb-2">
                  <div className="flex items-center justify-center mb-2">
                    <MapPin className="h-10 w-10 text-brand-primary mr-2" />
                    <span className="text-gray-200 text-xs font-medium text-center break-words">First Floor, L29-L34, Block L, Connaught Place, New Delhi, Delhi - 110001</span>
                  </div>
                  {/* Google Maps Embed */}
                  <div className="w-full max-w-[120px] aspect-square rounded-xl overflow-hidden border-2 border-brand-primary mx-auto mb-2">
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
                      className="inline-block mt-1 px-3 py-2 bg-brand-primary text-white rounded-lg font-semibold shadow hover:bg-brand-primary/90 transition text-xs"
                    >
                      Get location in maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Stacked Sections */}
          <div className="flex flex-col gap-y-8">
            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-1 pb-1 bg-gradient-to-r from-[#0154b4] to-[#7deff6] bg-clip-text text-transparent" style={{ borderBottom: '3px solid', borderImage: 'linear-gradient(to right, #0154b4, #7deff6) 1' }}>Services</h3>
              <ul className="text-xs sm:text-sm md:text-base lg:text-lg space-y-1 list-none m-0 p-0">
                {Object.entries(serviceCategories).map(([categoryKey, categoryName]) => (
                  <li key={categoryKey} className="relative m-0 p-0">
                    <button
                      className={`footer-name-popover-trigger w-full flex items-center gap-1 text-left text-gray-300 hover:text-brand-primary transition-colors focus:outline-none font-semibold leading-tight ${activeService === categoryKey ? 'text-brand-primary' : ''}`}
                      style={{padding: 0, background: 'none', border: 'none', margin: 0}}
                      onClick={() => setActiveService(activeService === categoryKey ? null : categoryKey)}
                      aria-label={categoryName}
                      title={categoryName}
                    >
                      <span className="whitespace-nowrap">{categoryName}</span>
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-brand-primary transition-colors" />
                    </button>
                    {activeService === categoryKey && (
                      <div className="footer-name-scrollpanel absolute top-full left-0 mt-2 w-64 max-h-60 overflow-y-auto bg-black text-white rounded-lg shadow-lg z-50 border animate-fade-in">
                        <ul>
                          {services
                            .filter(service => service.category === categoryKey)
                            .map((service) => (
                              <li key={service.path}>
                                <Link
                                  to={service.path}
                                  className="block px-4 py-2 hover:bg-blue-900/30 hover:text-blue-300 hover:underline hover:decoration-white rounded transition-colors font-semibold"
                                  onClick={() => setActiveService(null)}
                                >
                                  {service.name}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            {/* Industries */}
            <div>
              <h3 className="text-lg font-bold mb-1 pb-1 bg-gradient-to-r from-[#0154b4] to-[#7deff6] bg-clip-text text-transparent" style={{ borderBottom: '3px solid', borderImage: 'linear-gradient(to right, #0154b4, #7deff6) 1' }}>Industries</h3>
              <ul className="text-xs sm:text-sm md:text-base lg:text-lg space-y-1 list-none m-0 p-0">
                {industries.map((item) => (
                  <li key={item.name}>
                    <span className="text-gray-300 font-semibold">
                      <span className="whitespace-nowrap">{item.name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Technologies */}
            <div>
              <h3 className="text-lg font-bold mb-1 pb-1 bg-gradient-to-r from-[#0154b4] to-[#7deff6] bg-clip-text text-transparent" style={{ borderBottom: '3px solid', borderImage: 'linear-gradient(to right, #0154b4, #7deff6) 1' }}>Technologies</h3>
              <ul className="text-xs sm:text-sm md:text-base lg:text-lg space-y-1 list-none m-0 p-0">
                {Object.entries(technologyCategories).map(([categoryKey, categoryName]) => (
                  <li key={categoryKey} className="relative m-0 p-0">
                    <button
                      className={`footer-name-popover-trigger w-full flex items-center gap-1 text-left text-gray-300 hover:text-brand-primary transition-colors focus:outline-none font-semibold leading-tight ${activeTech === categoryKey ? 'text-brand-primary' : ''}`}
                      style={{padding: 0, background: 'none', border: 'none', margin: 0}}
                      onClick={() => setActiveTech(activeTech === categoryKey ? null : categoryKey)}
                      aria-label={categoryName}
                      title={categoryName}
                    >
                      <span className="whitespace-nowrap">{categoryName}</span>
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-brand-primary transition-colors" />
                    </button>
                    {activeTech === categoryKey && (
                      <div className="footer-name-scrollpanel absolute top-full left-0 mt-2 w-64 max-h-60 overflow-y-auto bg-black text-white rounded-lg shadow-lg z-50 border animate-fade-in">
                        <ul>
                          {technologies
                            .filter(tech => tech.category === categoryKey)
                            .map((tech) => (
                              <li key={tech.path}>
                                <Link
                                  to={tech.path}
                                  className="block px-4 py-2 hover:bg-blue-900/30 hover:text-blue-300 hover:underline hover:decoration-white rounded transition-colors font-semibold"
                                  onClick={() => setActiveTech(null)}
                                >
                                  {tech.name}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            {/* Products */}
            <div>
              <h3 className="text-lg font-bold mb-1 pb-1 bg-gradient-to-r from-[#0154b4] to-[#7deff6] bg-clip-text text-transparent" style={{ borderBottom: '3px solid', borderImage: 'linear-gradient(to right, #0154b4, #7deff6) 1' }}>Products</h3>
              <ul className="text-xs sm:text-sm md:text-base lg:text-lg space-y-1 list-none m-0 p-0">
                {products.map((item) => (
                  <li key={item.path + '-' + item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-300 hover:text-brand-primary transition-colors font-semibold"
                    >
                      <span className="whitespace-nowrap">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company */}
            <div>
              <h3 className="text-lg font-bold mb-1 pb-1 bg-gradient-to-r from-[#0154b4] to-[#7deff6] bg-clip-text text-transparent" style={{ borderBottom: '3px solid', borderImage: 'linear-gradient(to right, #0154b4, #7deff6) 1' }}>Company</h3>
              <ul className="text-xs sm:text-sm md:text-base lg:text-lg space-y-1 list-none m-0 p-0">
                {company.map((item) => (
                  <li key={item.path + '-' + item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-300 hover:text-brand-primary transition-colors font-semibold"
                    >
                      <span className="whitespace-nowrap">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Resources & Support */}
            <div>
              <h3 className="text-lg font-bold mb-1 pb-1 bg-gradient-to-r from-[#0154b4] to-[#7deff6] bg-clip-text text-transparent" style={{ borderBottom: '3px solid', borderImage: 'linear-gradient(to right, #0154b4, #7deff6) 1' }}>Resources & Support</h3>
              <ul className="text-xs sm:text-sm md:text-base lg:text-lg space-y-1 list-none m-0 p-0">
                {resources.map((item) => (
                  <li key={item.path + '-' + item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-300 hover:text-brand-primary transition-colors font-semibold"
                    >
                      <span className="whitespace-nowrap">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Divider line and bottom section (mobile) */}
        <hr className="border-t border-gray-700 w-full mt-10 mb-2" />
        <div className="flex flex-col items-center w-full gap-y-4">
          <p className="text-gray-400 text-xs text-center">
            © {currentYear} Infocera. All rights reserved.
          </p>
        </div>
      </div>

      {/* Modal Dialog Overlay */}
      {(modalType && (activeService || activeTech)) && (
        <div className="footer-modal-overlay fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 animate-modal relative mx-2 sm:mx-0"
            style={{
              bottom: window.innerWidth < 640 ? 0 : 'auto',
              position: window.innerWidth < 640 ? 'fixed' : 'relative',
              left: window.innerWidth < 640 ? 0 : 'auto',
              right: window.innerWidth < 640 ? 0 : 'auto',
              borderRadius: window.innerWidth < 640 ? '1.5rem 1.5rem 0 0' : '1.5rem',
            }}
          >
            <button
              className="absolute top-2 right-4 text-gray-500 hover:text-brand-primary text-2xl font-bold focus:outline-none"
              onClick={() => {
                setActiveService(null);
                setActiveTech(null);
                setModalType(null);
              }}
              aria-label="Close"
            >
              &times;
            </button>
            <h4 className="text-lg font-semibold mb-4 text-brand-primary">
              {modalType === 'service' && activeService ? serviceCategories[activeService] : technologyCategories[activeTech || '']}
            </h4>
            <ul className="space-y-2">
              {(modalType === 'service' && activeService) && services.filter(s => s.category === activeService).map(service => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="block px-4 py-2 rounded hover:bg-brand-primary/10 hover:text-brand-primary transition-colors font-semibold"
                    onClick={() => {
                      setActiveService(null);
                      setModalType(null);
                    }}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              {(modalType === 'tech' && activeTech) && technologies.filter(t => t.category === activeTech).map(tech => (
                <li key={tech.path}>
                  <Link
                    to={tech.path}
                    className="block px-4 py-2 rounded hover:bg-brand-primary/10 hover:text-brand-primary transition-colors font-semibold"
                    onClick={() => {
                      setActiveTech(null);
                      setModalType(null);
                    }}
                  >
                    {tech.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </footer>
  );
};
