import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Anmat',
      period: '07/2025 – Present',
      location: 'Egypt',
      description: 'Developing full-stack web applications using modern technologies, implementing both frontend and backend solutions for various client projects.',
      skills: ['Full Stack Development', 'Web Applications', 'Frontend', 'Backend']
    },
    {
      title: 'Oracle Database Developer',
      company: 'Elsewedy Electric',
      period: 'August 2024 – September 2024',
      location: 'Egypt',
      description: 'Developed and optimized Oracle database solutions, wrote complex PL/SQL queries, and implemented data management strategies for enterprise-level applications.',
      skills: ['Oracle Database', 'PL/SQL', 'Database Optimization', 'Data Management']
    },
    {
      title: 'Practical Training',
      company: 'ZKTeco North Africa',
      period: 'February 2023 – March 2023',
      location: 'Egypt',
      description: 'Gained hands-on experience with biometric security systems, access control solutions, and practical implementation of security technologies.',
      skills: ['Biometric Systems', 'Access Control', 'Security Technologies', 'System Integration']
    },
    {
      title: 'Sales Intern',
      company: 'Convoy Egypt',
      period: 'July 2022 – September 2022',
      location: 'Egypt',
      description: 'Developed customer relationship skills, learned sales processes, and contributed to business development initiatives in the logistics sector.',
      skills: ['Customer Relations', 'Sales Process', 'Business Development', 'Communication']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building expertise through diverse roles in technology and business
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-200 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:ml-16">
                {/* Timeline dot */}
                <div className="absolute -left-20 top-6 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-purple-600 mb-2">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin size={16} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;