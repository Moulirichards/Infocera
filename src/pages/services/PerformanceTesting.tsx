import React from "react";
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Zap, Gauge, TrendingUp, Clock, CheckCircle, Users, Target, BarChart3, Activity, Cpu, Database, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PerformanceTesting = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-orange-600 to-red-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Performance Testing</h1>
            <p className="text-xl mb-8">Ensure your applications run smoothly under any load with comprehensive performance and stress testing services.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-red-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-red-100 transition-all duration-300" onClick={() => navigate('/contact')}>Test Performance</button>
              <span className="inline-block ml-2 md:hidden">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                  <path d="M12 8v4l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
          </div>
          <div className="relative justify-center hidden md:flex">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <path d="M12 8v4l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* What is Performance Testing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What is Performance Testing?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Performance testing is a type of software testing that evaluates how a system performs in terms of responsiveness and stability under a particular workload. It helps identify bottlenecks, scalability issues, and performance degradation points in your applications.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                At Infocera, we provide comprehensive performance testing services that ensure your applications can handle expected user loads, maintain optimal performance, and scale efficiently as your business grows.
              </p>
              <div className="flex items-center gap-4">
                <CheckCircle className="text-green-500 h-6 w-6" />
                <span className="text-gray-700">Load testing and stress testing</span>
              </div>
              <div className="flex items-center gap-4 mt-3">
                <CheckCircle className="text-green-500 h-6 w-6" />
                <span className="text-gray-700">Scalability and capacity planning</span>
              </div>
              <div className="flex items-center gap-4 mt-3">
                <CheckCircle className="text-green-500 h-6 w-6" />
                <span className="text-gray-700">Performance bottleneck identification</span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gauge className="text-green-600 h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Load Testing</h3>
                  <p className="text-sm text-gray-600">Test Under Normal Load</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="text-orange-600 h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Stress Testing</h3>
                  <p className="text-sm text-gray-600">Test Beyond Capacity</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="text-blue-600 h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Scalability Testing</h3>
                  <p className="text-sm text-gray-600">Test Growth Capacity</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Activity className="text-purple-600 h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Spike Testing</h3>
                  <p className="text-sm text-gray-600">Test Sudden Load</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits of Performance Testing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ensure your applications deliver optimal performance and user experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-green-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Optimal Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Ensure your applications respond quickly and efficiently under various load conditions.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-blue-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl">User Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Provide fast and responsive user experience that keeps customers engaged and satisfied.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-purple-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Scalability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Ensure your applications can scale efficiently as your user base and business grows.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-orange-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Bottleneck Identification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Identify performance bottlenecks and optimization opportunities in your applications.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-red-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Cost Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Optimize resource usage and reduce infrastructure costs through performance improvements.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-indigo-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Risk Mitigation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Prevent performance-related issues that could impact business operations and revenue.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Performance Testing Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Performance Testing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive performance testing solutions to optimize your application performance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Gauge className="text-green-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Load Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Test your application's performance under expected normal and peak load conditions.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Response time measurement</li>
                  <li>• Throughput analysis</li>
                  <li>• Resource utilization</li>
                  <li>• Performance baseline</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="text-orange-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Stress Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Test your application's behavior beyond normal or peak load conditions.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Breaking point identification</li>
                  <li>• Recovery testing</li>
                  <li>• Stability assessment</li>
                  <li>• Failure analysis</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="text-blue-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Scalability Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Test your application's ability to scale up or down based on demand.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Horizontal scaling</li>
                  <li>• Vertical scaling</li>
                  <li>• Auto-scaling validation</li>
                  <li>• Capacity planning</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Activity className="text-purple-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Spike Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Test your application's response to sudden and extreme load spikes.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Sudden load increase</li>
                  <li>• Response time analysis</li>
                  <li>• Recovery assessment</li>
                  <li>• Stability validation</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Cpu className="text-indigo-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Endurance Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Test your application's performance over an extended period of time.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Long-term stability</li>
                  <li>• Memory leak detection</li>
                  <li>• Resource degradation</li>
                  <li>• Performance trends</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Database className="text-red-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Database Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Test database performance and optimize query execution and data access.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Query optimization</li>
                  <li>• Index analysis</li>
                  <li>• Connection pooling</li>
                  <li>• Data access patterns</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Performance Testing Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Performance Testing Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to identify and resolve performance issues
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Requirements Analysis</h3>
              <p className="text-gray-600">
                Define performance requirements, SLAs, and success criteria based on your business needs.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Test Planning</h3>
              <p className="text-gray-600">
                Design test scenarios, create test data, and set up monitoring and measurement tools.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Execution & Monitoring</h3>
              <p className="text-gray-600">
                Execute performance tests while monitoring system resources and collecting metrics.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analysis & Optimization</h3>
              <p className="text-gray-600">
                Analyze results, identify bottlenecks, and provide recommendations for optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Technologies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Performance Testing Tools</h2>
            <p className="text-xl text-gray-600">
              Industry-leading tools and technologies for comprehensive performance testing
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <Badge variant="secondary" className="text-center py-3 text-sm">JMeter</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">LoadRunner</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">Gatling</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">K6</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">Artillery</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">Locust</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">BlazeMeter</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">New Relic</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">Datadog</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">AppDynamics</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">Dynatrace</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">Prometheus</Badge>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get A Free Performance Assessment</h2>
            <p className="text-xl text-gray-600">
              Please complete this form to be connected by one of our performance testing experts.
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

export default PerformanceTesting;
