import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BarChart, PieChart, TrendingUp, Database, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const DataAnalytics = () => {
  const navigate = useNavigate();
  const technologies = [
    {
      name: "Business Intelligence",
      description: "Transform raw data into actionable insights with comprehensive BI solutions.",
      features: ["Dashboard Creation", "Report Generation", "KPI Tracking", "Data Visualization"],
      path: "/services/data-analytics/business-intelligence"
    },
    {
      name: "Big Data Analytics",
      description: "Process and analyze large datasets to uncover hidden patterns and insights.",
      features: ["Hadoop Ecosystem", "Spark Processing", "Data Mining", "Pattern Recognition"],
      path: "/services/data-analytics/big-data-analytics"
    },
    {
      name: "Real-time Analytics",
      description: "Get instant insights from streaming data for immediate decision making.",
      features: ["Stream Processing", "Real-time Dashboards", "Alert Systems", "Live Monitoring"],
      path: "/services/data-analytics/real-time-analytics"
    },
    {
      name: "Data Warehousing",
      description: "Design and implement scalable data warehouse solutions for enterprise needs.",
      features: ["ETL Processes", "Data Modeling", "Performance Optimization", "Cloud Migration"],
      path: "/services/data-analytics/data-warehousing"
    },
    {
      name: "Advanced Analytics",
      description: "Apply statistical models and machine learning for predictive analytics.",
      features: ["Statistical Modeling", "Predictive Analytics", "Customer Segmentation", "Forecasting"],
      path: "/services/data-analytics/advanced-analytics"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-800 to-cyan-300 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Data Analytics</h1>
            <p className="text-xl mb-8">Unlock actionable insights from your data to drive smarter business decisions and growth.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-purple-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-purple-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start Data Project</button>
              <span className="inline-block ml-2 md:hidden">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                  <rect x="7" y="13" width="2" height="4" fill="#fff" fillOpacity="0.5" />
                  <rect x="11" y="9" width="2" height="8" fill="#fff" fillOpacity="0.5" />
                  <rect x="15" y="5" width="2" height="12" fill="#fff" fillOpacity="0.5" />
                </svg>
              </span>
            </div>
          </div>
          <div className="relative justify-center hidden md:flex">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <rect x="7" y="13" width="2" height="4" fill="#fff" fillOpacity="0.5" />
              <rect x="11" y="9" width="2" height="8" fill="#fff" fillOpacity="0.5" />
              <rect x="15" y="5" width="2" height="12" fill="#fff" fillOpacity="0.5" />
            </svg>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Analytics Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive data solutions to drive informed business decisions
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

      <Footer />
    </div>
  );
};

export default DataAnalytics;
