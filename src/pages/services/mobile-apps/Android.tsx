
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Smartphone, Code, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Android = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-800 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Android App Development
              </h1>
              <p className="text-xl mb-8 text-white font-semibold">
                Develop powerful Android applications with Kotlin and Java for Google Play Store.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Start Android Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=600&q=80"
                alt="Android Development"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Android Development Services</h2>
            <p className="text-xl text-gray-600">
              Native Android apps with modern development practices
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Smartphone className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Native Android</h3>
              <p className="text-gray-600">Built with Kotlin and modern Android architecture</p>
            </div>
            <div className="text-center p-6">
              <Code className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Material Design</h3>
              <p className="text-gray-600">Following Google's Material Design principles</p>
            </div>
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wide Reach</h3>
              <p className="text-gray-600">Access to billions of Android users worldwide</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Android;
