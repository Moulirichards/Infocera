
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Smartphone, Code, Zap, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReactNative = () => {
  const features = [
    {
      icon: Code,
      title: "Cross-Platform Development",
      description: "Write once, deploy everywhere with React Native's unified codebase approach."
    },
    {
      icon: Zap,
      title: "Fast Development Cycle",
      description: "Hot reloading and fast refresh for rapid development and testing."
    },
    {
      icon: Users,
      title: "Native Performance",
      description: "Achieve near-native performance with optimized components and animations."
    },
    {
      icon: Smartphone,
      title: "Platform-Specific Features",
      description: "Access native device features while maintaining code reusability."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-800 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                React Native Development
              </h1>
              <p className="text-xl mb-8 text-white font-semibold">
                Build powerful cross-platform mobile applications with React Native, leveraging the efficiency of shared codebases without compromising on performance.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Start Your React Native Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80"
                alt="React Native Development"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose React Native?</h2>
            <p className="text-xl text-gray-600">
              Experience the benefits of modern cross-platform mobile development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Capabilities</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">JavaScript & TypeScript</h4>
                    <p className="text-gray-600">Full support for modern JavaScript and TypeScript development</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Native Module Integration</h4>
                    <p className="text-gray-600">Seamless integration with native iOS and Android modules</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">State Management</h4>
                    <p className="text-gray-600">Redux, MobX, and Context API for robust state management</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Development Process</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. Planning & Architecture</h4>
                  <p className="text-gray-600">Define app architecture and development strategy</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. Development & Testing</h4>
                  <p className="text-gray-600">Iterative development with continuous testing</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. Deployment & Support</h4>
                  <p className="text-gray-600">App store deployment and ongoing maintenance</p>
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

export default ReactNative;
