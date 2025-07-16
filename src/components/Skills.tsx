import React from 'react';
import { Code, Database, Map, BarChart3, Brain, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const skillLines = [
    {
      direction: 'left-to-right',
      skills: ['Urban Data Science', 'GIS Analysis', 'Python Programming', 'Spatial Statistics', 'ArcGIS Pro', 'QGIS', 'PostGIS', 'Remote Sensing', 'Cartography', 'Geospatial Research']
    },
    {
      direction: 'right-to-left', 
      skills: ['Machine Learning', 'Climate Resilience', 'Infrastructure Planning', 'Data Visualization', 'Tableau', 'R Programming', 'SQL', 'Statistical Modeling', 'Policy Analysis', 'Urban Analytics']
    },
    {
      direction: 'left-to-right',
      skills: ['Transportation Planning', 'Energy Systems', 'Community Engagement', 'Sustainability', 'Google Earth Engine', 'JavaScript', 'React', 'PostgreSQL', 'Jupyter Notebooks', 'Research Methods']
    }
  ];

  const skillCategories = [
    {
      icon: <Map size={24} />,
      title: 'Geospatial Technology',
      skills: ['ArcGIS Pro', 'QGIS', 'PostGIS', 'Google Earth Engine', 'Remote Sensing', 'Spatial Statistics'],
      color: 'from-purple-500/20 to-cyan-500/20'
    },
    {
      icon: <Database size={24} />,
      title: 'Data Science & Analytics',
      skills: ['Python', 'R', 'SQL', 'Machine Learning', 'Statistical Analysis', 'Jupyter'],
      color: 'from-cyan-500/20 to-pink-500/20'
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Visualization & Tools',
      skills: ['Tableau', 'Folium', 'Matplotlib', 'Power BI', 'Adobe Creative Suite'],
      color: 'from-pink-500/20 to-purple-500/20'
    },
    {
      icon: <Brain size={24} />,
      title: 'Urban Planning',
      skills: ['Policy Analysis', 'Community Engagement', 'Transportation Planning', 'Land Use Planning', 'Zoning'],
      color: 'from-purple-500/20 to-cyan-500/20'
    },
    {
      icon: <Globe size={24} />,
      title: 'Research Specializations',
      skills: ['Climate Resilience', 'Infrastructure Equity', 'Energy Systems', 'Urban Analytics', 'Sustainability', 'Smart Cities'],
      color: 'from-cyan-500/20 to-pink-500/20'
    },
    {
      icon: <Code size={24} />,
      title: 'Technical Skills',
      skills: ['APIs', 'Database Management', 'Data Analytics'],
      color: 'from-pink-500/20 to-purple-500/20'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light mb-4">
            Skills & <span className="iridescent-text font-medium">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            I try my best to learn continuously for I believe there is no such thing as too much knowledge. Here are some of the skills I gained along the way.
          </p>
        </div>

        {/* Three Scrolling Lines */}
        <div className="space-y-6 mb-20">
          {skillLines.map((line, lineIndex) => (
            <div key={lineIndex} className="overflow-hidden">
              <div 
                className={`whitespace-nowrap skill-scroll-${line.direction}`}
                style={{ animationDuration: '80s' }}
              >
                {line.skills.concat(line.skills).map((skill, index) => (
                  <span
                    key={index}
                    className="inline-block mx-8 text-base font-medium text-gray-400 hover:text-white transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass p-6 rounded-xl hover-lift transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-medium text-white group-hover:text-purple-300 transition-colors duration-300">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 hover:bg-purple-500/20 hover:text-white transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-light text-white mb-8">
            Core <span className="text-purple-400">Competencies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              'Spatial Analysis', 'Urban Planning', 'Data Science', 'Climate Research',
              'Infrastructure Equity', 'Policy Analysis', 'Machine Learning', 'Geospatial Technology'
            ].map((competency, index) => (
              <span
                key={index}
                className="px-6 py-3 glass rounded-full text-gray-300 hover:text-white hover:bg-purple-500/20 transition-all duration-300 cursor-default font-medium"
              >
                {competency}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;