import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { CheckCircle, Code, Bug, Shield, Zap, Users, Clock, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SoftwareTesting = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-red-800 to-red-300 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Software Testing Services</h1>
            <p className="text-xl mb-8">Ensure quality, reliability, and performance with comprehensive software testing solutions for your applications.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-green-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-green-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start Testing</button>
              <span className="inline-block ml-2 md:hidden">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                  <rect x="7" y="7" width="10" height="10" rx="2" stroke="#fff" strokeWidth="2"/>
                  <path d="M9 11h6M9 15h6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
          </div>
          <div className="relative justify-center hidden md:flex">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <rect x="7" y="7" width="10" height="10" rx="2" stroke="#fff" strokeWidth="2"/>
              <path d="M9 11h6M9 15h6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* What is Software Testing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What is Software Testing?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Software Testing is an approach to detect differences between given input and expected output. At Infocera, we provide comprehensive support for software testing at any point in the software development lifecycle.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We provide both Black Box and White Box testing support on demand. In White Box testing, we offer various types of Unit and Integration testing such as API level testing, Code coverage, and Fault Injection testing. Under Black Box testing, we provide support for System testing and Acceptance testing.
              </p>
              <div className="flex items-center gap-4">
                <CheckCircle className="text-green-500 h-6 w-6" />
                <span className="text-gray-700">Wide process that includes several connected processes</span>
              </div>
              <div className="flex items-center gap-4 mt-3">
                <CheckCircle className="text-green-500 h-6 w-6" />
                <span className="text-gray-700">Series of processes that investigate and evaluate software quality</span>
              </div>
              <div className="flex items-center gap-4 mt-3">
                <CheckCircle className="text-green-500 h-6 w-6" />
                <span className="text-gray-700">Can test software as a whole, in components, or within a live system</span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="text-blue-600 h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">White Box Testing</h3>
                  <p className="text-sm text-gray-600">Unit & Integration Testing</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="text-green-600 h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Black Box Testing</h3>
                  <p className="text-sm text-gray-600">System & Acceptance Testing</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bug className="text-purple-600 h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">API Testing</h3>
                  <p className="text-sm text-gray-600">Comprehensive API Validation</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="text-orange-600 h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Code Coverage</h3>
                  <p className="text-sm text-gray-600">Thorough Code Analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits of Software Testing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Software testing is essential for delivering high-quality products that meet customer expectations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-blue-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Ensures the delivery of high-quality products that require lower maintenance costs and provide accurate, consistent, and reliable results.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bug className="text-green-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Defect Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Points out defects and errors made during development phases, allowing for timely fixes and improvements.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-purple-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Risk Mitigation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Identifies potential risks and vulnerabilities early in the development process, reducing project risks.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-orange-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl">User Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Ensures applications meet user requirements and expectations, leading to higher customer satisfaction.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-red-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Time & Cost Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Early defect detection saves time and costs associated with fixing issues in later stages of development.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-indigo-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Performance Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Identifies performance bottlenecks and optimization opportunities for better application performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Software Testing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Software Testing?</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Software testing is really required to point out the defects and errors that were made during the development phases. Testing is necessary to provide facilities to customers like the delivery of high-quality products or software applications which require lower maintenance costs and hence results in more accurate, consistent, and reliable results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-700">Quality Assurance</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-700">Support Available</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-700">Testing Tools</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">1000+</div>
              <div className="text-gray-700">Projects Tested</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Technologies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Technologies</h2>
            <p className="text-xl text-gray-600">
              We use cutting-edge testing tools and technologies to deliver exceptional results
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <Badge variant="secondary" className="text-center py-3 text-sm">Selenium</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">JUnit</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">TestNG</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">Mockito</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">Postman</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">JMeter</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">Appium</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">Cucumber</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">Jenkins</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">GitLab CI</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">Docker</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">Kubernetes</Badge>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get A Free Quote Now</h2>
            <p className="text-xl text-gray-600">
              Please complete this form to be connected by one of our experts.
            </p>
          </div>
          <Card className="shadow-xl">
            <CardContent className="p-8">
              {/* Form removed */}
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SoftwareTesting; 