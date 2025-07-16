import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className="button" onClick={() => window.location.href = '/contact'}>
        <p>Start Project</p>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .button {
    all: unset;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0.6em 2em;
    border: #00695c solid 0.15em; /* dark teal */
    border-radius: 0.25em;
    color: #003d33; /* dark teal for better contrast */
    font-size: 1.5em;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    transition: border 300ms, color 300ms;
    user-select: none;
    background: transparent;
  }

  .button p {
    z-index: 1;
  }

  .button:hover {
    color: #fff;
    border-color: #003d33; /* even darker teal */
    background: #003d33;
  }

  .button:active {
    border-color: #00251a;
    background: #00251a;
  }

  .button::after, .button::before {
    content: "";
    position: absolute;
    width: 9em;
    aspect-ratio: 1;
    background: #00695c;
    opacity: 60%;
    border-radius: 50%;
    transition: transform 500ms, background 300ms;
  }

  .button::before {
    left: 0;
    transform: translateX(-8em);
  }

  .button::after {
    right: 0;
    transform: translateX(8em);
  }

  .button:hover:before {
    transform: translateX(-1em);
    background: #003d33;
  }

  .button:hover:after {
    transform: translateX(1em);
    background: #003d33;
  }

  .button:active:before,
  .button:active:after {
    background: #00251a;
  }
`;

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      description: "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and payment processing.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      date: "2023",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      description: "A comprehensive healthcare app for patient management and telemedicine consultations with real-time chat and video calling.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80",
      tags: ["React Native", "Firebase", "WebRTC", "Redux"],
      date: "2023",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      category: "AI & Analytics",
      description: "Business intelligence dashboard with machine learning insights for predictive analytics and automated reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      tags: ["Python", "TensorFlow", "React", "D3.js"],
      date: "2022",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Cloud Infrastructure Platform",
      category: "Cloud Solutions",
      description: "Scalable cloud infrastructure management platform with automated deployment and monitoring capabilities.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
      tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
      date: "2022",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Real-Time Collaboration Tool",
      category: "Productivity Software",
      description: "A cloud-based platform enabling teams to collaborate on documents and projects in real time with chat, video, and version control.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
      tags: ["React", "Node.js", "WebSocket", "AWS"],
      date: "2021",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI-Powered Image Recognition Platform",
      category: "Artificial Intelligence",
      description: "An advanced platform for automated image classification, object detection, and analytics using deep learning.",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      tags: ["Python", "TensorFlow", "Docker", "Kubernetes"],
      date: "2021",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = ["All", "Web Development", "Mobile Development", "AI & Analytics", "Cloud Solutions", "IoT Development"];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-24 md:pt-32 pb-8 md:pb-16 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('/portfoliobg.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl md:text-5xl font-bold text-white mb-3 md:mb-6">Our Portfolio</h1>
            <p className="text-base md:text-xl text-blue-100 max-w-xs sm:max-w-md md:max-w-3xl mx-auto">
              Explore our collection
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-4 md:mt-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-3 md:px-6 py-1 md:py-2 rounded-full border border-cyan-400 text-cyan-200 hover:bg-cyan-700 hover:text-white transition-all duration-300 font-semibold shadow text-xs md:text-base"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 md:h-48 object-cover group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-2 md:top-4 right-2 md:right-4 flex space-x-1 md:space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.demoUrl}
                      className="w-6 md:w-8 h-6 md:h-8 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink className="h-3 md:h-4 w-3 md:w-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="w-6 md:w-8 h-6 md:h-8 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Github className="h-3 md:h-4 w-3 md:w-4" />
                    </a>
                  </div>
                </div>
                
                <div className="p-4 md:p-6">
                  <div className="flex items-center justify-between mb-2 md:mb-3">
                    <span className="text-xs md:text-sm font-medium text-blue-600 bg-blue-50 px-2 md:px-3 py-0.5 md:py-1 rounded-full">
                      {project.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-xs md:text-sm">
                      <Calendar className="h-3 md:h-4 w-3 md:w-4 mr-1" />
                      {project.date}
                    </div>
                  </div>
                  
                  <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs md:text-base text-gray-600 mb-2 md:mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-gray-600 bg-gray-100 px-1.5 md:px-2 py-0.5 md:py-1 rounded-md flex items-center"
                      >
                        <Tag className="h-2 md:h-3 w-2 md:w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-16" style={{ background: 'linear-gradient(to right, #7deff6, #0154b4)' }}>
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 text-center">
          <h2 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4">Have a project in mind?</h2>
          <p className="text-base md:text-xl text-blue-100 mb-4 md:mb-8 max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
            Let's discuss your project
          </p>
          <Button />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
