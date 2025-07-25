import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Globe } from 'lucide-react';
import { Logo } from './Logo';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const technologiesRef = useRef<HTMLDivElement>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const [languageOpen, setLanguageOpen] = useState(false);
  const languageRef = useRef<HTMLDivElement>(null);

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
    { name: 'Creative Design', path: '/services/creative-design', category: 'creative-design' },
    { name: 'UI/UX Design', path: '/services/ui-ux-design', category: 'creative-design' },
    { name: 'Logo Design', path: '/services/logo-design', category: 'creative-design' },
    { name: 'Brochure Design', path: '/services/brochure-design', category: 'creative-design' },
    
    // Consultant
    { name: 'Consulting Services', path: '/services/consulting-services', category: 'consultant' },
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
    { name: 'Performance Testing', path: '/services/performance-testing', category: 'testing' },
    
    // Cloud Solutions
    { name: 'Cloud Solutions', path: '/services/cloud-solutions', category: 'cloud-solutions' },
    
    // Cybersecurity
    { name: 'Cybersecurity', path: '/services/cybersecurity', category: 'cybersecurity' },
  ];

  const serviceCategories = {
    'software': 'Software Products',
    'web-development': 'Web Design & Development',
    'mobile-apps': 'Mobile Application',
    'online-marketing': 'Online Marketing',
    'creative-design': 'Creative Design',
    'consultant': 'Consultant',
    'data-science': 'Data Science',
    'testing': 'Testing',
    'cloud-solutions': 'Cloud Solutions',
    'cybersecurity': 'Cybersecurity',
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

  const technologyCategories = {
    'ui-design': 'UI Design',
    'server-side': 'Server Side Scripting',
    'cloud-computing': 'Cloud Computing',
    'data-analytics': 'Data Mining and Analytics',
    'web-server': 'Web Server Technology',
    'testing': 'Testing',
    'software-process': 'Software Process'
  };

  const industries = [
    { name: 'Healthcare' },
    { name: 'Finance' },
    { name: 'Education' },
    { name: 'E-commerce' },
    { name: 'Manufacturing' },
    { name: 'Retail' },
    { name: 'Gaming' },
    { name: 'Real Estate' },
    { name: 'Automotive' }
  ];

  // Add main navigation links to search
  const mainNavLinks = [
    { type: 'Page', name: 'Home', path: '/' },
    { type: 'Page', name: 'About Us', path: '/about' },
    { type: 'Page', name: 'Products', path: '/products' },
    { type: 'Page', name: 'Portfolio', path: '/portfolio' },
    { type: 'Page', name: 'Careers', path: '/careers' },
    { type: 'Page', name: 'Contact Us', path: '/contact' },
  ];

  // Demo: combine all searchable items (services, technologies, blogs if available)
  const allSearchItems = [
    ...mainNavLinks,
    ...services.map(s => ({ type: 'Service', name: s.name, path: s.path })),
    ...(technologies ? technologies.map(t => ({ type: 'Technology', name: t.name, path: t.path })) : []),
    // Add blog titles if available in context
  ];

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'Hindi' },
    { code: 'fr', label: 'French' },
    { code: 'es', label: 'Spanish' },
    { code: 'de', label: 'German' },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        activeDropdown === 'services' && servicesRef.current && !servicesRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
      if (
        activeDropdown === 'technologies' && technologiesRef.current && !technologiesRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setActiveDropdown(null);
    }
    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [activeDropdown]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }
    setSearchResults(
      allSearchItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  // Close search on outside click
  useEffect(() => {
    if (!searchOpen) return;
    function handleClick(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [searchOpen]);

  // Close language dropdown on outside click
  useEffect(() => {
    if (!languageOpen) return;
    function handleClick(e: MouseEvent) {
      if (languageRef.current && !languageRef.current.contains(e.target as Node)) {
        setLanguageOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [languageOpen]);

  return (
    <nav className="fixed top-0 w-full bg-black shadow-lg z-50 relative">
      <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0 md:pl-0">
        <div className="flex items-center h-16 md:h-[85px] md:justify-between">
          {/* Left: Logo only */}
          <div className="flex items-center w-full md:w-auto md:-ml-8">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 mr-2"
            >
              {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
            <Link to="/" className="flex items-center space-x-2 py-2 max-h-full md:pl-0 md:ml-0">
              <span className="block md:hidden"><Logo size="md" className="h-12 w-12" /></span>
              <span className="hidden md:block"><Logo size="lg" className="h-10 w-10" /></span>
            </Link>
            {/* Mobile: search icon in same row as logo */}
            <button
              className="md:hidden p-2 ml-auto text-white hover:text-blue-300 focus:outline-none"
              onClick={() => setSearchOpen((v) => !v)}
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
          {/* Right: All nav links and actions */}
          <div className="hidden md:flex items-center flex-1 justify-end space-x-4 lg:space-x-8 ml-0">
            {/* All nav links and actions (Home, About, etc.) go here, copy from previous nav links section */}
            <Link to="/" className="text-white hover:text-blue-400 transition-all duration-300 font-medium relative group mr-2">
              <span className="relative z-10">Home</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link to="/about" className="text-white hover:text-blue-400 transition-all duration-300 font-medium relative group mr-4">
              <span className="relative z-10">About Us</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
            </Link>
            
            <div className="relative" ref={servicesRef}>
              <button
                className={`flex items-center text-white hover:text-blue-400 transition-all duration-300 font-medium relative group ${activeDropdown === 'services' ? 'text-blue-400' : ''}`}
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'services'}
                onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                onKeyDown={e => {
                  if (e.key === 'Escape') setActiveDropdown(null);
                }}
              >
                <span className="relative z-10">Services</span>
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 bg-black/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-700/50 animate-fade-in z-50 p-6 min-w-[700px] max-h-[60vh] overflow-y-auto">
                  <div className="flex flex-wrap gap-12">
                    {Object.entries(serviceCategories).map(([categoryKey, categoryName], idx) => (
                      <div
                        key={categoryKey}
                        className={`min-w-[220px]${categoryKey === 'online-marketing' ? ' ml-8 md:ml-12' : ''}${categoryKey === 'consultant' ? ' ml-8 md:ml-12' : ''}${categoryKey === 'testing' ? ' ml-8 md:ml-12' : ''}${categoryKey === 'cybersecurity' ? ' ml-8 md:ml-12' : ''}`}
                      >
                        <h4 className="font-bold text-base mb-3 uppercase bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">{categoryName}</h4>
                        <ul className="space-y-2">
                          {services
                            .filter(service => service.category === categoryKey)
                            .map((service) => (
                              <li key={service.path} className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></span>
                                <Link
                                  to={service.path}
                                  className="text-gray-300 hover:text-blue-400 hover:bg-white/5 px-2 py-1 rounded-lg text-sm font-medium transition-all duration-300 block flex-1"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {service.name}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative" ref={technologiesRef}>
              <button
                className={`flex items-center text-white hover:text-blue-400 transition-all duration-300 font-medium relative group ${activeDropdown === 'technologies' ? 'text-blue-400' : ''}`}
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'technologies'}
                onClick={() => setActiveDropdown(activeDropdown === 'technologies' ? null : 'technologies')}
                onKeyDown={e => {
                  if (e.key === 'Escape') setActiveDropdown(null);
                }}
              >
                <span className="relative z-10">Technologies</span>
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${activeDropdown === 'technologies' ? 'rotate-180' : ''}`} />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              </button>
              {activeDropdown === 'technologies' && (
                <div className="absolute top-full left-0 mt-2 bg-black/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-700/50 animate-fade-in z-50 p-6 min-w-[700px] max-h-[60vh] overflow-y-auto">
                  <div className="flex flex-wrap gap-12">
                    {Object.entries(technologyCategories).map(([categoryKey, categoryName]) => (
                      <div key={categoryKey} className="min-w-[220px]">
                        <h4 className="font-bold text-base mb-3 uppercase bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">{categoryName}</h4>
                        <ul className="space-y-2">
                          {technologies
                            .filter(tech => tech.category === categoryKey)
                            .map((tech) => (
                              <li key={tech.path} className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></span>
                                <Link
                                  to={tech.path}
                                  className="text-gray-300 hover:text-blue-400 hover:bg-white/5 px-2 py-1 rounded-lg text-sm font-medium transition-all duration-300 block flex-1"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {tech.name}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center text-white hover:text-blue-400 transition-all duration-300 font-medium relative">
                <span className="relative z-10">Industries</span>
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              </button>
              {activeDropdown === 'industries' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-700/50 animate-fade-in">
                  {industries.map((industry) => (
                    <div
                      key={industry.name}
                      className="flex items-center px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-white/5 first:rounded-t-lg last:rounded-b-lg transition-all duration-300"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></span>
                      <span className="flex-1">{industry.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link to="/portfolio" className="text-white hover:text-blue-400 transition-all duration-300 font-medium relative group mr-2">
              <span className="relative z-10">Portfolio</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link to="/careers" className="text-white hover:text-blue-400 transition-all duration-300 font-medium relative group mr-2">
              <span className="relative z-10">Careers</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
            </Link>
            {/* Contact - simple, like Portfolio/Careers */}
            <Link to="/contact" className="text-white hover:text-blue-400 transition-all duration-300 font-medium relative group mr-4">
              <span className="relative z-10">Contact Us</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
            </Link>
            {/* Desktop: Search Icon */}
            <div className="hidden md:flex ml-auto mr-0 items-center space-x-2">
              <Link to="/login" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-xl hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 font-medium hover:scale-105 relative overflow-hidden group mr-0">
                <span className="relative z-10">My Account</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <div className="hidden md:block relative">
                <button
                  className="p-2 text-white hover:text-blue-300 focus:outline-none"
                  onClick={() => setSearchOpen((v) => !v)}
                >
                  <Search className="h-5 w-5" />
                </button>
                {searchOpen && (
                  <div ref={searchRef} className="absolute right-0 mt-2 w-64 bg-black rounded-xl shadow-2xl z-50 p-3 border border-gray-800 animate-fade-in">
                    <div className="relative mb-2">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                        <Search className="h-4 w-4" />
                      </span>
                      <input
                        autoFocus
                        type="text"
                        className="w-full pl-9 pr-3 py-2 border border-gray-700 rounded-lg text-white bg-black focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 shadow-sm placeholder-gray-400"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                      />
                    </div>
                    {searchResults.length > 0 ? (
                      <ul className="divide-y divide-gray-800">
                        {searchResults.map((item, idx) => (
                          <li key={idx} className="py-2 px-3 hover:bg-blue-900/30 rounded-lg transition-colors cursor-pointer">
                            <Link to={item.path} className="text-blue-300 font-medium flex items-center gap-2" onClick={() => { setSearchOpen(false); setSearchTerm(''); }}>
                              <span className="truncate">{item.name}</span> <span className="text-xs text-gray-400">({item.type})</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : searchTerm.trim() !== '' ? (
                      <div className="text-gray-400 text-sm px-2 py-2">No results found.</div>
                    ) : null}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-2 animate-fade-in w-full bg-black rounded-b-lg shadow-lg z-50">
            <Link to="/" className="block py-2 px-2 text-white hover:text-blue-300 text-base transition-colors">Home</Link>
            <Link to="/about" className="block py-2 px-2 text-white hover:text-blue-300 text-base transition-colors">About Us</Link>
            <Accordion type="multiple" className="mb-2">
              <AccordionItem value="services">
                <AccordionTrigger className="text-white">Services</AccordionTrigger>
                <AccordionContent>
                  <div className="max-h-[60vh] overflow-y-auto pr-2 bg-black">
                    {Object.entries(serviceCategories).map(([categoryKey, categoryName]) => (
                      <div key={categoryKey} className="mb-4">
                        <div className="font-bold text-white text-xs mb-1 uppercase">{categoryName}</div>
                        <ul className="list-disc list-inside ml-4 space-y-1 text-white marker:text-white">
                          {services.filter(s => s.category === categoryKey).map(service => (
                            <li key={service.path}>
                              <Link
                                to={service.path}
                                className="text-white hover:text-blue-300 hover:underline hover:decoration-white text-xs font-medium transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {service.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="technologies">
                <AccordionTrigger className="text-white">Technologies</AccordionTrigger>
                <AccordionContent>
                  <div className="max-h-[60vh] overflow-y-auto pr-2 bg-black">
                    {Object.entries(technologyCategories).map(([categoryKey, categoryName]) => (
                      <div key={categoryKey} className="mb-4">
                        <div className="font-bold text-white text-xs mb-1 uppercase">{categoryName}</div>
                        <ul className="list-disc list-inside ml-4 space-y-1 text-white marker:text-white">
                          {technologies.filter(t => t.category === categoryKey).map(tech => (
                            <li key={tech.path}>
                              <Link
                                to={tech.path}
                                className="text-white hover:text-blue-300 hover:underline hover:decoration-white text-xs font-medium transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {tech.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Link to="/portfolio" className="block py-2 px-2 text-white hover:text-blue-300 text-base transition-colors">Portfolio</Link>
            <Link to="/careers" className="block py-2 px-2 text-white hover:text-blue-300 text-base transition-colors">Careers</Link>
            {/* Contact - mobile simple style */}
            <Link to="/contact" className="block py-2 px-2 text-white hover:text-blue-300 text-base transition-colors">Contact</Link>
            {/* Log In (My Account) - mobile */}
            <Link to="/login" className="block py-2 px-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-center mt-2 transition-colors">My Account</Link>
          </div>
        )}
      </div>
    </nav>
  );
};
