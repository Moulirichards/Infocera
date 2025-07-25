import React from "react";
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Zap, Users, Clock, Target, Search, FileText, Database } from 'lucide-react';

const SecurityTesting = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-red-800 to-red-300 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Security Testing</h1>
            <p className="text-xl mb-8">Protect your applications and data with thorough security testing and vulnerability assessments.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-rose-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-rose-100 transition-all duration-300">Test Security</button>
              <span className="inline-block ml-2 md:hidden">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                  <rect x="8" y="10" width="8" height="6" rx="2" stroke="#fff" strokeWidth="2"/>
                  <path d="M12 8v2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
          </div>
          <div className="relative justify-center hidden md:flex">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <rect x="8" y="10" width="8" height="6" rx="2" stroke="#fff" strokeWidth="2"/>
              <path d="M12 8v2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* What is Security Testing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What is Security Testing?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                With the cyber world becoming more and more vulnerable to attacks and threats, security is something which cannot be compromised at all. In order to develop secure apps, security elements such as integrity, confidentiality and authenticity must be considered and tested beforehand.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The lifecycle of any application development must possess all the required security testing to make sure that there is no data leakage, and there is a flawless functioning, compliance to standards and security vulnerability assessment.
              </p>
              <div className="flex items-center gap-4">
                <CheckCircle className="text-green-500 h-6 w-6" />
                <span className="text-gray-700">Vulnerability assessment and penetration testing</span>
              </div>
              <div className="flex items-center gap-4 mt-3">
                <CheckCircle className="text-green-500 h-6 w-6" />
                <span className="text-gray-700">Compliance and risk analysis</span>
              </div>
              <div className="flex items-center gap-4 mt-3">
                <CheckCircle className="text-green-500 h-6 w-6" />
                <span className="text-gray-700">Data protection and privacy testing</span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="text-red-600 h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Vulnerability Assessment</h3>
                  <p className="text-sm text-gray-600">Identify Security Weaknesses</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="text-orange-600 h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Penetration Testing</h3>
                  <p className="text-sm text-gray-600">Simulate Real Attacks</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="text-blue-600 h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Security Auditing</h3>
                  <p className="text-sm text-gray-600">Comprehensive Review</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="text-green-600 h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Risk Analysis</h3>
                  <p className="text-sm text-gray-600">Threat Assessment</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits of Security Testing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect your business from cyber threats and ensure compliance with security standards
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-red-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Threat Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Identify and mitigate security vulnerabilities before they can be exploited by malicious actors.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="text-blue-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Data Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Ensure the confidentiality, integrity, and availability of sensitive data and information.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-green-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Meet regulatory requirements and industry standards for security and data protection.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-purple-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Customer Trust</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Build customer confidence by demonstrating commitment to security and data protection.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-orange-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Cost Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Prevent costly security breaches and data loss incidents through proactive testing.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-indigo-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Business Continuity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Ensure uninterrupted business operations by preventing security-related disruptions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Testing Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Security Testing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive security testing solutions to protect your applications and infrastructure
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Search className="text-red-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Vulnerability Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Systematic review of security weaknesses in your applications, networks, and systems.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Automated vulnerability scanning</li>
                  <li>• Manual security review</li>
                  <li>• Configuration analysis</li>
                  <li>• Risk prioritization</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Target className="text-orange-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Penetration Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Simulated cyber attacks to identify exploitable vulnerabilities in your systems.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Black box testing</li>
                  <li>• White box testing</li>
                  <li>• Social engineering</li>
                  <li>• Physical security testing</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <FileText className="text-blue-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Security Auditing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive security review of your applications, policies, and procedures.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Code security review</li>
                  <li>• Policy compliance</li>
                  <li>• Architecture review</li>
                  <li>• Best practices assessment</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Database className="text-green-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Data Security Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Testing data protection mechanisms and privacy controls in your applications.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Data encryption testing</li>
                  <li>• Privacy compliance</li>
                  <li>• Data leakage prevention</li>
                  <li>• Access control testing</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Eye className="text-purple-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl">API Security Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Security testing of APIs to ensure they are protected against common vulnerabilities.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Authentication testing</li>
                  <li>• Authorization testing</li>
                  <li>• Input validation</li>
                  <li>• Rate limiting testing</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <AlertTriangle className="text-indigo-600 h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Mobile Security Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Security testing for mobile applications to protect against mobile-specific threats.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• App security testing</li>
                  <li>• Reverse engineering</li>
                  <li>• Jailbreak/root detection</li>
                  <li>• Secure storage testing</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Testing Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Security Testing Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to identify and mitigate security vulnerabilities
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Planning & Reconnaissance</h3>
              <p className="text-gray-600">
                Define scope, gather information, and prepare testing strategy based on your requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Vulnerability Scanning</h3>
              <p className="text-gray-600">
                Use automated tools and manual techniques to identify potential security weaknesses.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Exploitation & Analysis</h3>
              <p className="text-gray-600">
                Attempt to exploit identified vulnerabilities and assess their potential impact.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reporting & Remediation</h3>
              <p className="text-gray-600">
                Provide detailed reports with findings and recommendations for security improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Technologies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Security Testing Tools</h2>
            <p className="text-xl text-gray-600">
              Industry-leading tools and technologies for comprehensive security testing
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <Badge variant="secondary" className="text-center py-3 text-sm">Burp Suite</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">OWASP ZAP</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">Nessus</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">Metasploit</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">Nmap</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">Wireshark</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">SQLMap</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">Nikto</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">Acunetix</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">AppScan</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">MobSF</Badge>
            <Badge variant="secondary" className="text-center py-3 text-sm">Drozer</Badge>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get A Free Security Assessment</h2>
            <p className="text-xl text-gray-600">
              Please complete this form to be connected by one of our security experts.
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

export default SecurityTesting;
