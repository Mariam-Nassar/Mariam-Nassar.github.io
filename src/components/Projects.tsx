import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Energy Meter System',
      description: 'Real-time energy monitoring system with live data visualization and analytics dashboard.',
      image: 'https://images.pexels.com/photos/159201/circuit-circuit-board-resistor-computer-159201.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Python', 'Streamlit', 'SQL Server', 'IoT'],
      category: 'IoT & Analytics'
    },
    {
      title: 'AI Emotion Recognition Model',
      description: 'Web-based AI application for real-time emotion detection and analysis using advanced computer vision.',
      image: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Python', 'DeepFace', 'Streamlit', 'OpenCV'],
      category: 'AI & Machine Learning'
    },
    {
      title: 'IoT Environmental Monitoring System',
      description: 'Comprehensive environmental monitoring system with Arduino sensors, MQTT communication, and web interface.',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Arduino', 'MQTT', 'Web Interface', 'Sensors'],
      category: 'IoT & Hardware'
    },
    {
      title: 'University Transportation Website',
      description: 'University transportation and event booking system with seat reservations, schedules, driver communication, and admin management tools.',
      image: 'https://images.pexels.com/photos/1756957/pexels-photo-1756957.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Full-Stack', 'Web Application', 'Database', 'Admin Panel'],
      category: 'Web Application'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of recent work spanning AI, IoT, and web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-600 text-white text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={
                      project.title === 'Smart Energy Meter System' ? 'https://github.com/Mariam-Nassar/Smart-Energy-Meter.git' :
                      project.title === 'AI Emotion Recognition Model' ? 'https://github.com/Mariam-Nassar/AI-Emotion-Recognition.git' :
                      project.title === 'IoT Environmental Monitoring System' ? 'https://github.com/Lioomr/IOT-project' :
                      project.title === 'University Transportation Website' ? 'https://github.com/Mariam-Nassar/University-Transportation-Project.git' :
                      '#'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium transition-colors"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;