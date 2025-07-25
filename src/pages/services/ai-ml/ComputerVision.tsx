
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Eye, Camera, Scan, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComputerVision = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Computer Vision Solutions
              </h1>
              <p className="text-xl mb-8 text-gray-800 font-semibold">
                Enable machines to see, understand, and interpret visual information with cutting-edge computer vision technology.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Discover Vision AI
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=600&q=80"
                alt="Computer Vision"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vision AI Capabilities</h2>
            <p className="text-xl text-gray-600">
              Advanced visual recognition and analysis for diverse applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Eye className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Object Detection</h3>
              <p className="text-gray-600">Real-time identification and tracking of objects</p>
            </div>
            <div className="text-center p-6">
              <Camera className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Image Recognition</h3>
              <p className="text-gray-600">Facial recognition and scene understanding</p>
            </div>
            <div className="text-center p-6">
              <Scan className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Inspection</h3>
              <p className="text-gray-600">Automated quality control and defect detection</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComputerVision;
