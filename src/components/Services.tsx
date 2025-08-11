import React from 'react';
import { BarChart3, Brain, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Data Dashboard Development',
      description: 'Create interactive data dashboards using Streamlit and Python for real-time analytics and business intelligence.',
      technologies: ['Streamlit', 'Python', 'SQL Server', 'Data Visualization']
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI-Powered Tools',
      description: 'Develop intelligent applications including facial recognition, emotion detection, and classification systems using advanced AI technologies.',
      technologies: ['Python', 'DeepFace', 'Computer Vision', 'Machine Learning']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web App Development',
      description: 'Build full-stack web applications with modern technologies, from frontend interfaces to backend systems and database integration.',
      technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'SQL Server', 'Responsive Design']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized in AI development, data analytics, and web solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-purple-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;