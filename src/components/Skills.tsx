import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Java', level: 85 },
        { name: 'C/C++', level: 80 },
      ]
    },
    {
      category: 'Web Development',
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 85 },
        { name: 'PHP', level: 80 },
        { name: 'Responsive Design', level: 90 }
      ]
    },
    {
      category: 'Database & Analytics',
      skills: [
        { name: 'SQL Server', level: 90 },
        { name: 'Oracle/PL-SQL', level: 85 },
        { name: 'Data Analysis', level: 88 },
        { name: 'Streamlit', level: 92 },
        { name: 'Power BI', level: 85 }
      ]
    },
    {
      category: 'AI & Tools',
      skills: [
        { name: 'Machine Learning', level: 85 },
        { name: 'DeepFace', level: 80 },
        { name: 'AutoCAD', level: 75 },
        { name: 'Shell Programming', level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proficient across multiple technologies and development stacks
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;