import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Brain, Cpu, Database, TrendingUp, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AIMachineLearning = () => {
  const navigate = useNavigate();
  const technologies = [
    {
      name: "TensorFlow & Keras",
      description: "Open-source machine learning framework for developing and training neural networks.",
      features: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP Processing"],
      path: "/services/ai-ml/tensorflow-keras"
    },
    {
      name: "PyTorch",
      description: "Dynamic neural network library with strong GPU acceleration for research and production.",
      features: ["Dynamic Computation", "GPU Acceleration", "Research Friendly", "Production Ready"],
      path: "/services/ai-ml/pytorch"
    },
    {
      name: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.",
      features: ["Text Analytics", "Sentiment Analysis", "Language Translation", "Chatbots"],
      path: "/services/ai-ml/natural-language-processing"
    },
    {
      name: "Computer Vision",
      description: "Image and video analysis solutions using advanced computer vision algorithms.",
      features: ["Image Recognition", "Object Detection", "Facial Recognition", "Video Analytics"],
      path: "/services/ai-ml/computer-vision"
    },
    {
      name: "Predictive Analytics",
      description: "Data-driven insights and forecasting using machine learning algorithms.",
      features: ["Forecasting", "Risk Assessment", "Customer Analytics", "Business Intelligence"],
      path: "/services/ai-ml/predictive-analytics"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-indigo-700 to-blue-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-2xl md:text-5xl font-bold mb-6">AI & Machine Learning Solutions</h1>
            <p className="text-xl mb-8 text-white font-semibold">Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation in your business operations.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-indigo-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-indigo-100 transition-all duration-300" onClick={() => navigate('/contact')}>Explore AI Solutions</button>
              <span className="inline-block ml-2 md:hidden">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                  <rect x="8" y="12" width="8" height="6" rx="1" stroke="#fff" strokeWidth="2"/>
                  <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#fff">🤖</text>
                </svg>
              </span>
            </div>
          </div>
          <div className="relative justify-center hidden md:flex">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <rect x="8" y="12" width="8" height="6" rx="1" stroke="#fff" strokeWidth="2"/>
              <text x="12" y="16" textAnchor="middle" fontSize="24" fill="#fff">🤖</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Technologies We Specialize In</h2>
            <p className="text-xl text-gray-600">
              Advanced AI and ML technologies to transform your business processes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className={
                  [
                    'p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-fade-in border',
                    index === 0 ? 'bg-indigo-100 border-indigo-200' :
                    index === 1 ? 'bg-blue-100 border-blue-200' :
                    index === 2 ? 'bg-green-100 border-green-200' :
                    index === 3 ? 'bg-yellow-100 border-yellow-200' :
                    index === 4 ? 'bg-pink-100 border-pink-200' :
                    'bg-white border-gray-100'
                  ].join(' ')
                }
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{tech.name}</h3>
                <p className="text-gray-600 mb-6">{tech.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {tech.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button
                  size="lg" variant="outline" className="border-white text-blue-900 hover:bg-white hover:text-blue-900"
                  onClick={() => {
                    if (tech.name === 'Natural Language Processing') {
                      navigate('/services/ai-ml/natural-language-processing');
                    } else if (tech.name === 'Computer Vision') {
                      navigate('/services/ai-ml/computer-vision');
                    }
                  }}
                  style={tech.name === 'Natural Language Processing' || tech.name === 'Computer Vision' ? {} : { display: 'none' }}
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIMachineLearning;
