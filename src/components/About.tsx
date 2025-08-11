import React from 'react';
import { GraduationCap, Code, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate about creating innovative solutions at the intersection of AI, IoT, and web development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
      
            <div>
              <div className="mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Data Science & AI student at Elsewedy University of Technology with a passion for building 
                  intelligent systems that solve real-world problems. I specialize in creating AI-powered 
                  applications, interactive dashboards, and IoT solutions.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  My experience spans across multiple domains - from developing real-time energy monitoring 
                  systems with Arduino and MQTT to building emotion recognition AI using Python and DeepFace. 
                  I'm always eager to take on new challenges in data science, artificial intelligence, and IoT development.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <GraduationCap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Education</h4>
                  <p className="text-sm text-gray-600">Elsewedy University</p>
                </div>
                
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <Code className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Specialization</h4>
                  <p className="text-sm text-gray-600">AI & Full-Stack</p>
                </div>
                
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <Zap className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Focus</h4>
                  <p className="text-sm text-gray-600">IoT & Data Science</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;