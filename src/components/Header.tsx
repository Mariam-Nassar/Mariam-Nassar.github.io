import React from 'react';
import { Mail, Phone, Linkedin, Github, Download } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center">
      <div className="container mx-auto px-6" style={{ paddingTop: '11rem', paddingBottom: '9rem' }}>
        <div className="flex flex-col items-center justify-center">
          <div className="text-center mb-8">
            <h3 className="text-5xl lg:text-6xl font-bold mb-6">
                <a href="#home" id="home">Mariam Khalil Nassar</a>
            </h3>
            <h2 className="text-2xl lg:text-3xl text-purple-200 mb-6">
              AI & Web Dev
            </h2>
            <p className="text-xl lg:text-2xl text-purple-100 max-w-3xl mx-auto mb-8">
              "I build AI tools, dashboards, web systems. Available for freelance work."
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="mailto:mariam.sut115@gmail.com"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Mail size={20} />
                Email
              </a> 
              <a
                href="tel:+201149143026"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Phone size={20} />
                Call
              </a>
              <a
                href="#"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href="#"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
            <div className="flex justify-center">
              <a
                href="https://drive.google.com/file/d/1HoNMaBLuRpdvD95ienxemCy1LRSPsq-7/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
