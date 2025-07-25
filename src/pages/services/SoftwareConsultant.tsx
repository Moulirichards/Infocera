import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const SoftwareConsultant = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-900 to-blue-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Software Consultant</h1>
            <p className="text-xl mb-8">Get expert advice and solutions for your software projects, from planning to deployment and beyond.</p>
            <div className="flex flex-row items-center md:block">
              <button className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl shadow hover:bg-blue-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start Consulting</button>
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

      {/* IT Consulting Services */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4">IT CONSULTING SERVICES</h2>
          <h3 className="text-xl font-bold text-purple-800 mb-6">We Handle All Your IT Challenges</h3>
          <p className="text-gray-700 mb-8">We, at Infocera, understand that every client who decides to implement a new Software Solution essentially wants to enhance their business performance & overall progress. Our IT Consulting team studies your business requirements & processes carefully. We then help you trace your exact software requirements and business problem areas that can be effectively managed by innovative software solutions.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-bold text-purple-800 mb-2">Software Development</h4>
              <p className="text-gray-700">It is a process involving the creation, maintenance of applications, frameworks of software, design, programming, testing, and bug fixing.</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-bold text-purple-800 mb-2">Mobile App Development</h4>
              <p className="text-gray-700">It is the act of developing app suitable for mobile devices that involve writing software for small, wireless computing devices.</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-bold text-purple-800 mb-2">Website Development</h4>
              <p className="text-gray-700">It involves building and maintaining the websites; it makes the website look great, works quickly with firm user experience.</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-bold text-purple-800 mb-2">CRM Software Development</h4>
              <p className="text-gray-700">It is the tool or technique that helps companies make a healthy relationship with their customers by organizing the data.</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-bold text-purple-800 mb-2">UI / UX Designing</h4>
              <p className="text-gray-700">It increases the user experience and customer satisfaction, which ultimately increases the number of customers, resulting in the growth of the business.</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-bold text-purple-800 mb-2">Digital Marketing</h4>
              <p className="text-gray-700">It is a strategy that uses multiple channels to attract engage and convert customers online.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-12 bg-purple-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-6">SOLUTION</h2>
          <h3 className="text-xl font-bold text-purple-800 mb-8">Our Robust IT Solutions</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-purple-800 mb-2">CUSTOM SOFTWARE DEVELOPMENT</h4>
              <p className="text-gray-700">Delivering a powerful software development solution using the right leading-edge technology for market leaders & growing businesses.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-purple-800 mb-2">PRODUCT DEVELOPMENT</h4>
              <p className="text-gray-700">Delivering human-focused, market-ready digital products with our 360° development approach to accelerate your business growth.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-purple-800 mb-2">MOBILE APP DEVELOPMENT</h4>
              <p className="text-gray-700">Building native & hybrid mobile applications using different platforms (Android, iOS) to empower your business in the mobile-first world.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-purple-800 mb-2">DEDICATED TEAMS</h4>
              <p className="text-gray-700">Leverage the best resources for your project by hiring skilled and experienced dedicated engineers across niche & cutting-edge technologies.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-purple-800 mb-2">BLOCKCHAIN DEVELOPMENT</h4>
              <p className="text-gray-700">Delivering custom blockchain solutions for businesses to leverage faster, cheaper & transparent transactions that enable high-value business models.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-purple-800 mb-2">AI AND ML SOLUTION</h4>
              <p className="text-gray-700">Providing innovative AI and ML solutions to delight your customers and helping your business to run faster & smoother to achieve tangible business growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Infocera */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-6">WHY TECH SYNAPSE</h2>
          <h3 className="text-xl font-bold text-purple-800 mb-8">Transparent & Efficient Processes</h3>
          <p className="text-gray-700 mb-8">Leading enterprises, startups, and agencies rely on our custom Software development services as we stay true to ourselves while delivering best results for them.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <h4 className="font-bold text-purple-800 mb-2">Build Integrity & Transparency</h4>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <h4 className="font-bold text-purple-800 mb-2">Deliver Perfect Solution</h4>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <h4 className="font-bold text-purple-800 mb-2">Practice Agility</h4>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <h4 className="font-bold text-purple-800 mb-2">Compel Innovation</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Models */}
      <section className="py-12 bg-purple-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-6">HIRING MODELS</h2>
          <h3 className="text-xl font-bold text-purple-800 mb-8">Customized To Meet Diverse Needs Of Our Clients</h3>
          <p className="text-gray-700 mb-8">Infocera offers IT consulting services to help you accomplish your next project with less stress and less cost. We offer the flexibility to select the most suitable hiring model for all our clients.</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-purple-800 mb-4">Dedicated Team</h4>
              <p className="text-gray-700 mb-4">If you represent an organization with a challenge that wants dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly continuing contract.</p>
              <ul className="space-y-2 text-gray-700">
                <li>• No hidden costs</li>
                <li>• Monthly Billing</li>
                <li>• Fixed hours of part & full time</li>
                <li>• Pay Only for Significant Work</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-purple-800 mb-4">Controlled Agile</h4>
              <p className="text-gray-700 mb-4">The controlled agile engagement model fit best for those who have a restricted budget & still wants some flexibility in the project tasks.</p>
              <ul className="space-y-2 text-gray-700">
                <li>• No hidden costs</li>
                <li>• Agile Team</li>
                <li>• Optimum flexibility</li>
                <li>• Complete control over budget</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-purple-800 mb-4">Time & Material</h4>
              <p className="text-gray-700 mb-4">If you represent an organization with endless projects requirements & need ongoing work, ask about hourly. It's a pay-as-you-go hour wise continuing contract.</p>
              <ul className="space-y-2 text-gray-700">
                <li>• No hidden costs</li>
                <li>• Monthly billing</li>
                <li>• Requirement based working hours</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-6">CASE STUDY</h2>
          <h3 className="text-xl font-bold text-purple-800 mb-8">Solving Critical Challenges For Our Clients</h3>
          <p className="text-gray-700 mb-8">As one of the top IT outsourcing companies, we offer 360° software development services that transform our client's vision into actionable software solutions to accelerate their businesses growth.</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-bold text-purple-800 mb-2">Election Management System</h4>
              <p className="text-gray-700 mb-4">Infocera builds Election Management Software that has MVI programs and provides Bulk SMS options, Political Consulting and several Political Campaigning.</p>
              <div className="bg-white p-3 rounded">
                <h5 className="font-bold text-purple-800 mb-2">TECHNOLOGIES USED</h5>
                <p className="text-gray-700">.Net MVC 5 | MS SQL Server | HTML5/CSS3 | Bootstrap JavaScript</p>
              </div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-bold text-purple-800 mb-2">Online Food Ordering and Delivery System</h4>
              <p className="text-gray-700 mb-4">91 restaurant app is an online food ordering and delivery app enhance the online food ordering experience. It helps restaurants and cafes receive orders from application to grow repeat orders and revenue.</p>
              <div className="bg-white p-3 rounded">
                <h5 className="font-bold text-purple-800 mb-2">TECHNOLOGIES USED</h5>
                <p className="text-gray-700">.Net MVC 5 | MS SQL Server | HTML5/CSS3 | Bootstrap JavaScript</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-12 bg-purple-50 border-b">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-6">CLIENTS</h2>
          <h3 className="text-xl font-bold text-purple-800 mb-4">Trusted By 35+ Customers Since 2016</h3>
          <p className="text-gray-700 mb-8">We have clients globally including USA, Canada, UK and retained 90% of them.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-6 text-center">TESTIMONIALS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <h4 className="font-bold text-purple-800 mb-2">Nishant Kumar</h4>
              <p className="text-gray-600 mb-2">Bravo Pharma</p>
              <p className="text-gray-700">Infocera delivers services on time with no compromise in quality. Analytical skills and responsiveness are the quality that i like the most.</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <h4 className="font-bold text-purple-800 mb-2">Bhuvan Patil</h4>
              <p className="text-gray-600 mb-2">Entrepreneur</p>
              <p className="text-gray-700">We are very satisfied and happy to have found Infocera as our development partner. They are true professionals.</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <h4 className="font-bold text-purple-800 mb-2">Nikhil Kumar</h4>
              <p className="text-gray-600 mb-2">Entrepreneur</p>
              <p className="text-gray-700">I am very impressed by the quality of the team working on our project and the team displays a real understanding of our issues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-purple-50 border-b">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-6 text-center">FREQUENTLY ASKED QUESTION</h2>
          <h3 className="text-xl font-bold text-purple-800 mb-8 text-center">Everything About IT Consulting Services</h3>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-purple-800 mb-2">WHICH IT STRATEGY & CONSULTING SERVICES DO YOU OFFER?</h4>
              <p className="text-gray-700">Our IT strategists implement a variety of techniques for figure out issues in your software & development processes and suggest the best solution consequently.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-purple-800 mb-2">HOW TO CHOOSE A COST-EFFECTIVE IT CONSULTING FIRM FOR A STARTUPS?</h4>
              <p className="text-gray-700">To find the top IT strategy & software consulting firm you first need to analyse some point including the experience of the firm, cost-effectiveness and does they are specialized in the technology you are looking for. We anticipate the output of the technology choice and offer advice on how to meet your business goal with minimal investments.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-purple-800 mb-2">WHAT TYPE OF CLIENTS HAVE YOU WORKED WITH?</h4>
              <p className="text-gray-700">We have clients from education, finance, healthcare, travel, logistic, media, automotive and retail.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-purple-800 mb-2">WHAT DOES SOFTWARE CONSULTANTS DO?</h4>
              <p className="text-gray-700">An IT consultant works in collaboration with clients & guides them on how to use technology to meet their business goals or overcome IT challenges. They work to enhance the structure and competence of IT systems for various companies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4">Contact Us</h2>
          {/* Form removed */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SoftwareConsultant;
