import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

export const PortfolioSection = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      description: "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
      tags: ["React", "Node.js", "MongoDB"],
      date: "2023"
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      description: "A comprehensive healthcare app for patient management and telemedicine consultations.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80",
      tags: ["React Native", "Firebase", "WebRTC"],
      date: "2023"
    },
    {
      title: "AI Analytics Dashboard",
      category: "AI & Analytics",
      description: "Business intelligence dashboard with machine learning insights for predictive analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      tags: ["Python", "TensorFlow", "React"],
      date: "2022"
    }
  ];

  return (
    <section 
      className="py-8 relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      {/* Animated background elements (same as ClientsSection) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.05),transparent_50%)]"></div>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-[#0154b4] to-[#7deff6] bg-clip-text text-transparent" style={{ fontFamily: 'EB Garamond, serif' }}>Our Portfolio</h2>
          <div className="w-16 md:w-24 h-1 bg-white mx-auto mb-4 md:mb-8"></div>
          <p className="text-base md:text-xl text-blue-100 max-w-xs sm:max-w-md md:max-w-3xl mx-auto">
            Discover our latest projects and see how we've helped businesses achieve their digital transformation goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in overflow-hidden border border-purple-100 hover:border-purple-300 p-2 md:p-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-20 md:h-48 object-cover group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-2 md:p-6">
                <div className="flex items-center justify-between mb-2 md:mb-3">
                  <span className="text-xs md:text-sm font-medium text-purple-700 bg-purple-100 px-2 md:px-3 py-0.5 md:py-1 rounded-full">
                    {project.category}
                  </span>
                  <div className="flex items-center text-gray-700 text-xs md:text-sm">
                    <Calendar className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-purple-700 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-xs md:text-base text-gray-700 mb-2 md:mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-purple-700 bg-purple-100 px-1.5 md:px-2 py-0.5 md:py-1 rounded-md flex items-center hover:bg-purple-200 hover:text-purple-900 transition-colors"
                    >
                      <Tag className="h-2 w-2 md:h-3 md:w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <StyledWrapper>
            <Link to="/portfolio" style={{ textDecoration: 'none' }}>
              <button className="button">
                <span className="button_lg">
                  <span className="button_sl" />
                  <span className="button_text">View All Projects</span>
                </span>
              </button>
            </Link>
          </StyledWrapper>
        </div>
      </div>
    </section>
  );
};

const StyledWrapper = styled.div`
  .button {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    background: none;
    color: #0f1923;
    cursor: pointer;
    position: relative;
    padding: 8px;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    transition: all .15s ease;
  }

  .button::before,
  .button::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    height: calc(50% - 5px);
    border: 1px solid #7D8082;
    transition: all .15s ease;
  }

  .button::before {
    top: 0;
    border-bottom-width: 0;
  }

  .button::after {
    bottom: 0;
    border-top-width: 0;
  }

  .button:active,
  .button:focus {
    outline: none;
  }

  .button:active::before,
  .button:active::after {
    right: 3px;
    left: 3px;
  }

  .button:active::before {
    top: 3px;
  }

  .button:active::after {
    bottom: 3px;
  }

  .button_lg {
    position: relative;
    display: block;
    padding: 10px 20px;
    color: #fff;
    background-color: #0f1923;
    overflow: hidden;
    box-shadow: inset 0px 0px 0px 1px transparent;
  }

  .button_lg::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    background-color: #0f1923;
  }

  .button_lg::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 4px;
    height: 4px;
    background-color: #0f1923;
    transition: all .2s ease;
  }

  .button_sl {
    display: block;
    position: absolute;
    top: 0;
    bottom: -1px;
    left: -8px;
    width: 0;
    background: linear-gradient(to right, #0154b4, #7deff6);
    transform: skew(-15deg);
    transition: all .2s ease;
  }

  .button_text {
    position: relative;
  }

  .button:hover {
    color: #0f1923;
  }

  .button:hover .button_sl {
    width: calc(100% + 15px);
  }

  .button:hover .button_lg::after {
    background-color: #fff;
  }
`;
