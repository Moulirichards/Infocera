import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const SEOServices = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen service-page bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-600 to-green-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">SEO Services</h1>
            <p className="text-xl mb-8">Increase your website's visibility and drive organic traffic with our comprehensive SEO solutions.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-green-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-green-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start SEO</button>
              <span className="inline-block ml-2 md:hidden">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                  <path d="M12 8v8M8 12h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
          </div>
          <div className="relative justify-center hidden md:flex">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
              <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
              <path d="M12 8v8M8 12h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Why we are the Top SEO Company */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Why Choose Infocera for SEO?</h2>
          <p className="text-gray-700 mb-4">If your website isn't reaching your target audience, you're missing out on valuable business opportunities. At Infocera, we help you get discovered online and maximize your digital potential. Our SEO experts collaborate with digital marketing specialists to elevate your brand value through strategic planning and in-depth analysis. We've empowered numerous businesses to achieve higher rankings and greater ROI with our ethical, effective on-page and off-page SEO solutions.</p>
        </div>
      </section>

      {/* SEO Process */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Our SEO Process</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-800">
            <li>
              <strong>Discovery:</strong> We learn about your business, website, and competitors to create a clear roadmap for your SEO journey.
            </li>
            <li>
              <strong>Planning:</strong> We develop a comprehensive SEO strategy and project plan with defined deliverables and measurable business goals.
            </li>
            <li>
              <strong>On-site SEO:</strong> We implement on-site optimization techniques, collaborating closely with you to enhance your website's structure and content.
            </li>
            <li>
              <strong>Content Marketing:</strong> We execute off-site strategies through high-quality content creation and sharing to boost your online presence.
            </li>
            <li>
              <strong>Analysis:</strong> We provide ongoing reporting and analysis to track performance and continuously refine your SEO strategy for optimal results.
            </li>
          </ol>
        </div>
      </section>

      {/* Why our SEO Process Works */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Why Our SEO Process Works</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>We never use black-hat tactics—our focus is on sustainable, long-term results that protect your brand's reputation.</li>
            <li>We stay ahead of SEO trends, providing ongoing training and professional development for our team.</li>
            <li>We follow best practices to maximize both short- and long-term gains, creating content and site structures that engage users and search engines alike.</li>
            <li>Our team is driven by persistence and innovation, ensuring we seize every opportunity for your business growth.</li>
          </ul>
        </div>
      </section>

      {/* Guaranteed SEO Results */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Guaranteed SEO Results – Trusted by Leading Brands</h2>
          <p className="text-gray-700 mb-4">Achieving top organic rankings builds trust and drives traffic. Infocera is recognized for delivering measurable SEO results that inspire confidence and help businesses grow.</p>
          <p className="text-gray-700 mb-4">Our SEO specialists understand search engine technology, analyze search patterns, and define your target audience and keywords. We offer a full suite of SEO services, including:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>SEO Consultation</li>
            <li>Search Engine Marketing</li>
            <li>Digital Marketing</li>
            <li>Content Writing</li>
            <li>Social Media Marketing</li>
            <li>Pay Per Click Advertising</li>
            <li>SEO Copywriting</li>
            <li>Google Ads Management</li>
            <li>Ecommerce SEO</li>
            <li>Professional SEO Services</li>
            <li>Local SEO & Google My Business</li>
            <li>SEO Content Writing</li>
            <li>Mobile App SEO</li>
            <li>Video SEO</li>
          </ul>
        </div>
      </section>

      {/* Competitor Analysis */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Competitor Analysis</h2>
          <p className="text-gray-700 mb-4">Infocera's reputation as a top SEO company in Bangalore is built on years of expertise. Our SEO experts monitor your competitors' strategies, strengths, and weaknesses to give you a competitive edge through:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Setting clear, strategic goals</li>
            <li>Continuous competitor review and analysis</li>
            <li>Tracking competitor journeys in SERPs</li>
            <li>Comprehensive keyword analysis</li>
            <li>Web page optimization</li>
            <li>Backlink tracking and analysis</li>
            <li>Identifying search engine submission opportunities</li>
            <li>Ongoing review and improvement</li>
          </ul>
        </div>
      </section>

      {/* Analytics & Insights */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Analytics & Insights</h2>
          <p className="text-gray-700 mb-4">Collecting data is easy—gaining actionable insights is where Infocera excels. We analyze past and present data to define future strategies, interpreting mission-critical information to align your website with your audience's search behavior.</p>
        </div>
      </section>

      {/* Local Marketing */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Local Marketing</h2>
          <p className="text-gray-700 mb-4">Get your business on the map and connect with ready-to-buy local customers. Infocera helps you achieve top local rankings, making it easy for customers to find and contact you.</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">What are the Benefits?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>High-Quality Traffic:</strong> Our SEO strategies attract the right visitors to your site, increasing your chances of conversion and business growth.</li>
            <li><strong>Improved Rankings:</strong> We help your website climb search engine rankings, ensuring you're visible to your target audience.</li>
            <li><strong>Lead Generation:</strong> SEO is a powerful tool for generating leads. With Infocera, you'll see more inquiries and opportunities from your online presence.</li>
          </ul>
        </div>
      </section>

      {/* SEO Packages Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">SEO Packages</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
              <thead>
                <tr className="bg-blue-100">
                  <th className="px-4 py-3 text-left font-semibold text-blue-900">Packages</th>
                  <th className="px-4 py-3 text-left font-semibold text-blue-900">SEO Basic Plan</th>
                  <th className="px-4 py-3 text-left font-semibold text-blue-900">SEO Silver Plan</th>
                  <th className="px-4 py-3 text-left font-semibold text-blue-900">SEO Gold Plan</th>
                  <th className="px-4 py-3 text-left font-semibold text-blue-900">SEO Platinum Plan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium text-gray-700">Monthly Cost</td>
                  <td className="px-4 py-3">₹ 15,000</td>
                  <td className="px-4 py-3">₹ 20,000</td>
                  <td className="px-4 py-3">₹ 30,000</td>
                  <td className="px-4 py-3">₹ 60,000</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium text-gray-700">No. of Keywords Guaranteed in Top 10</td>
                  <td className="px-4 py-3">5</td>
                  <td className="px-4 py-3">10</td>
                  <td className="px-4 py-3">20</td>
                  <td className="px-4 py-3">50</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium text-gray-700">Number of Keywords</td>
                  <td className="px-4 py-3">10</td>
                  <td className="px-4 py-3">20</td>
                  <td className="px-4 py-3">30</td>
                  <td className="px-4 py-3">100</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium text-gray-700">Maximum Contract Time</td>
                  <td className="px-4 py-3">3 Months</td>
                  <td className="px-4 py-3">6 Months</td>
                  <td className="px-4 py-3">9 Months</td>
                  <td className="px-4 py-3">12 Months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Contact Us</h2>
          {/* Form removed */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SEOServices;
