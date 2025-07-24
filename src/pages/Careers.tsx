import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      shortDescription: "Build scalable web applications using React, Node.js, and cloud technologies.",
      details: {
        responsibilities: [
          "Design, develop, and maintain scalable web applications using React and Node.js.",
          "Collaborate with cross-functional teams to define, design, and ship new features.",
          "Write clean, maintainable, and efficient code following best practices.",
          "Participate in code reviews and mentor junior developers.",
          "Integrate with cloud services (AWS, Azure, or GCP) and manage deployments."
        ],
        skills: [
          "Strong proficiency in JavaScript, TypeScript, React, and Node.js.",
          "Experience with RESTful APIs and microservices architecture.",
          "Familiarity with cloud platforms (AWS, Azure, or GCP).",
          "Knowledge of CI/CD pipelines and version control (Git).",
          "Excellent problem-solving and communication skills."
        ],
        qualifications: [
          "Bachelor’s or Master’s degree in Computer Science or related field.",
          "5+ years of experience in full stack development.",
          "Experience working in agile teams."
        ],
        benefits: [
          "Competitive salary and performance bonuses.",
          "Remote work flexibility.",
          "Learning and development opportunities."
        ]
      }
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      shortDescription: "Manage cloud infrastructure and implement CI/CD pipelines for our development teams.",
      details: {
        responsibilities: [
          "Design, implement, and manage CI/CD pipelines.",
          "Automate infrastructure provisioning and deployments.",
          "Monitor system performance and troubleshoot issues.",
          "Ensure security and compliance of cloud environments.",
          "Collaborate with development teams to optimize workflows."
        ],
        skills: [
          "Experience with AWS, Azure, or GCP cloud platforms.",
          "Proficiency in scripting languages (Bash, Python, etc.).",
          "Knowledge of Docker, Kubernetes, and container orchestration.",
          "Familiarity with infrastructure as code tools (Terraform, CloudFormation).",
          "Strong understanding of networking and security best practices."
        ],
        qualifications: [
          "Bachelor’s degree in Computer Science, Engineering, or related field.",
          "3+ years of experience in DevOps or related roles.",
          "Relevant certifications (AWS Certified DevOps Engineer, etc.) are a plus."
        ],
        benefits: [
          "Attractive compensation package.",
          "Opportunities for professional growth.",
          "Flexible work arrangements."
        ]
      }
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      shortDescription: "Create beautiful and intuitive user experiences for our web and mobile applications.",
      details: {
        responsibilities: [
          "Design user interfaces for web and mobile applications.",
          "Conduct user research and usability testing.",
          "Create wireframes, prototypes, and high-fidelity mockups.",
          "Collaborate with developers to ensure design feasibility.",
          "Maintain and evolve the company’s design system."
        ],
        skills: [
          "Proficiency in design tools (Figma, Sketch, Adobe XD, etc.).",
          "Strong portfolio showcasing UI/UX design work.",
          "Understanding of user-centered design principles.",
          "Ability to communicate design ideas effectively.",
          "Attention to detail and creativity."
        ],
        qualifications: [
          "Bachelor’s degree in Design, HCI, or related field.",
          "2+ years of experience in UI/UX design.",
          "Experience working in agile environments."
        ],
        benefits: [
          "Remote work and flexible hours.",
          "Creative and collaborative work environment.",
          "Opportunities for skill development."
        ]
      }
    },
    {
      title: "Data Scientist",
      department: "Analytics",
      location: "Remote",
      type: "Full-time",
      shortDescription: "Analyze complex datasets to drive business insights and build predictive models.",
      details: {
        responsibilities: [
          "Collect, process, and analyze large datasets from various sources.",
          "Develop predictive models and machine learning algorithms.",
          "Visualize data and communicate findings to stakeholders.",
          "Collaborate with engineering and product teams.",
          "Stay updated with the latest data science trends and technologies."
        ],
        skills: [
          "Strong programming skills in Python or R.",
          "Experience with machine learning frameworks (scikit-learn, TensorFlow, etc.).",
          "Proficiency in SQL and data visualization tools.",
          "Statistical analysis and problem-solving skills.",
          "Excellent communication and teamwork abilities."
        ],
        qualifications: [
          "Bachelor’s or Master’s degree in Data Science, Statistics, or related field.",
          "2+ years of experience in data science or analytics roles.",
          "Experience with big data technologies is a plus."
        ],
        benefits: [
          "Competitive salary and bonuses.",
          "Opportunities for research and innovation.",
          "Supportive and inclusive team culture."
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-12 md:pt-20 pb-16 md:pb-28 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('/careersbg.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="text-center">
            <h1 className="pt-8 md:pt-16 text-2xl md:text-5xl font-bold text-white mb-3 md:mb-6">
              Join Our Team
            </h1>
            <p className="text-base md:text-xl text-blue-100 max-w-xs sm:max-w-md md:max-w-3xl mx-auto">
              Be part of a dynamic team that's shaping the future of technology. 
              We're looking for talented individuals who are passionate about innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-4 md:py-8 bg-black">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4">Why Work With Us?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            <div className="text-center p-3 md:p-6">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
                <span className="text-lg md:text-2xl">🚀</span>
              </div>
              <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-3">Innovation First</h3>
              <p className="text-xs md:text-base text-white">Work with cutting-edge technologies and solve complex challenges</p>
            </div>
            
            <div className="text-center p-3 md:p-6">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
                <span className="text-lg md:text-2xl">🌍</span>
              </div>
              <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-3">Remote Friendly</h3>
              <p className="text-xs md:text-base text-white">Flexible work arrangements with a global team</p>
            </div>
            
            <div className="text-center p-3 md:p-6">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
                <span className="text-lg md:text-2xl">📈</span>
              </div>
              <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-3">Growth Opportunities</h3>
              <p className="text-xs md:text-base text-white">Continuous learning and career development programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-8 md:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4">Open Positions</h2>
            <p className="text-base md:text-xl text-white">Find your next opportunity with us</p>
          </div>

          <div className="space-y-4 md:space-y-6">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="group relative bg-black/90 p-3 md:p-6 rounded-2xl shadow-lg border border-gray-700 overflow-hidden transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl hover:border-blue-400 hover:z-10 group-hover:bg-gradient-to-r group-hover:from-blue-900/80 group-hover:to-cyan-900/80"
                style={{ background: undefined }}
              >
                {/* Floating Icon */}
                <div className="absolute -top-5 -right-5 md:-top-6 md:-right-6 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                  <svg width="60" height="60" fill="none" viewBox="0 0 60 60"><circle cx="30" cy="30" r="28" fill="#7deff6" fillOpacity="0.15" /><circle cx="30" cy="30" r="18" fill="#0154b4" fillOpacity="0.12" /></svg>
                </div>
                <div
                  className="relative w-full h-full transition-all duration-300 rounded-2xl z-10 group-hover:shadow-xl"
                  style={{}}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-2 group-hover:text-cyan-300 transition-colors duration-300">{job.title}</h3>
                      <p className="text-xs md:text-base text-white mb-2 md:mb-4 group-hover:text-blue-100 transition-colors duration-300">{job.shortDescription}</p>
                      {/* Detailed Job Description */}
                      <div className="mb-2 md:mb-4">
                        <details className="mb-1">
                          <summary className="cursor-pointer font-semibold text-blue-200">Roles & Responsibilities</summary>
                          <ul className="list-disc ml-6 mt-1 text-sm md:text-base text-white">
                            {job.details.responsibilities.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </details>
                        <details className="mb-1">
                          <summary className="cursor-pointer font-semibold text-blue-200">Required Skills</summary>
                          <ul className="list-disc ml-6 mt-1 text-sm md:text-base text-white">
                            {job.details.skills.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </details>
                        <details className="mb-1">
                          <summary className="cursor-pointer font-semibold text-blue-200">Desired Qualifications</summary>
                          <ul className="list-disc ml-6 mt-1 text-sm md:text-base text-white">
                            {job.details.qualifications.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </details>
                        <details>
                          <summary className="cursor-pointer font-semibold text-blue-200">Benefits</summary>
                          <ul className="list-disc ml-6 mt-1 text-sm md:text-base text-white">
                            {job.details.benefits.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </details>
                      </div>
                      <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm text-gray-300">
                        <div className="flex items-center">
                          <MapPin className="h-3 md:h-4 w-3 md:w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 md:h-4 w-3 md:w-4 mr-1" />
                          {job.type}
                        </div>
                        <span className="bg-blue-100 text-blue-800 px-1.5 md:px-2 py-0.5 md:py-1 rounded">
                          {job.department}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 md:ml-6">
                      <Link
                        to={`/careers/apply`}
                        className="relative inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 text-sm md:text-base overflow-hidden group/button shadow-lg hover:scale-105 focus:outline-none hover:bg-gradient-to-l hover:from-cyan-500 hover:to-blue-600 hover:text-white"
                      >
                        <span className="absolute left-0 top-0 w-full h-full bg-white/10 opacity-0 group-hover/button:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <span className="z-10 flex items-center">
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
