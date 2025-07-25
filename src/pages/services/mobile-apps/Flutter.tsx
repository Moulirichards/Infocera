
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Smartphone, Zap, Code, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Flutter = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-800 to-cyan-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Flutter Development Services
              </h1>
              <p className="text-xl mb-8 text-white font-semibold">
                Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase with Flutter.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Start Your Flutter Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80"
                alt="Flutter Development"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Flutter?</h2>
            <p className="text-xl text-gray-600">
              Develop cross-platform applications with native performance and beautiful UI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Smartphone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cross-Platform</h3>
              <p className="text-gray-600">Single codebase for iOS, Android, web, and desktop applications</p>
            </div>
            <div className="text-center p-6">
              <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Development</h3>
              <p className="text-gray-600">Hot reload for instant code changes and faster iteration</p>
            </div>
            <div className="text-center p-6">
              <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Native Performance</h3>
              <p className="text-gray-600">Compiled to native ARM code for optimal performance</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Flutter;
