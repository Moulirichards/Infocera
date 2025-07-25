
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Brain, TrendingUp, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MachineLearning = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 to-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Machine Learning Solutions
              </h1>
              <p className="text-xl mb-8 text-white font-semibold">
                Implement intelligent systems that learn and adapt with advanced machine learning algorithms and models.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Build ML Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80"
                alt="Machine Learning"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ML Capabilities</h2>
            <p className="text-xl text-gray-600">
              End-to-end machine learning solutions for business transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Deep Learning</h3>
              <p className="text-gray-600">Neural networks for complex pattern recognition</p>
            </div>
            <div className="text-center p-6">
              <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Predictive Analytics</h3>
              <p className="text-gray-600">Forecast trends and business outcomes</p>
            </div>
            <div className="text-center p-6">
              <Cpu className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Model Optimization</h3>
              <p className="text-gray-600">High-performance model deployment and scaling</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MachineLearning;
