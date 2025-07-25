
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Apple, Shield, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const iOS = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-800 to-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                iOS App Development
              </h1>
              <p className="text-xl mb-8 text-white font-semibold">
                Create premium iOS applications with native Swift development for the App Store.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-700 to-slate-700 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Build iOS App
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80"
                alt="iOS Development"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">iOS Development Excellence</h2>
            <p className="text-xl text-gray-600">
              Native iOS applications built with latest Apple technologies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Apple className="h-12 w-12 text-gray-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Native Swift</h3>
              <p className="text-gray-600">Built with Swift and latest iOS frameworks</p>
            </div>
            <div className="text-center p-6">
              <Shield className="h-12 w-12 text-gray-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">App Store Ready</h3>
              <p className="text-gray-600">Compliant with Apple guidelines and policies</p>
            </div>
            <div className="text-center p-6">
              <Zap className="h-12 w-12 text-gray-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium UX</h3>
              <p className="text-gray-600">Following Apple's Human Interface Guidelines</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default iOS;
