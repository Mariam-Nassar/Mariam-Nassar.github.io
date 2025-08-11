import React from 'react';
import { Trophy, Calendar } from 'lucide-react';

const Awards = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Recognition & Awards
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Acknowledged for excellence in AI and IoT innovation
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-2xl">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-yellow-800" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">
                  Top 10 Winner
                </h3>
                <h4 className="text-lg font-semibold text-purple-200 mb-3">
                  <a 
                    href="https://www.linkedin.com/posts/mariam-khalil-nassar-b14a0b338_icabresi2025-innovation-iot-activity-7328460584817950720-CMKr/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFTeCIABqLBx-bMdHrsoQzOUri9yMod_w1w"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors underline"
                  >
                    IC-ESI 2025 AI & IoT Competition
                  </a>
                </h4>
                <div className="flex items-center gap-2 text-purple-100 mb-4">
                  <Calendar size={16} />
                  <span>May 10, 2025</span>
                </div>
                <p className="text-purple-100 leading-relaxed">
                  Recognized among the top 10 innovators in the prestigious IC-ESI 2025 competition, 
                  demonstrating exceptional skills in artificial intelligence and Internet of Things development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;