import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: 'Invisible Boundaries',
      description: 'Comprehensive geospatial analysis examining accessibility disparities to healthcare across socioeconomic neighborhoods in Harris County, Texas through network analysis.',
      tech: ['ArcGIS Pro', 'Python', 'Spatial Statistics'],
      image: new URL('/ambulance.jpg', import.meta.url).href, // Corrected path
      status: 'Completed',
      category: 'Urban Planning',
      link: 'https://arcg.is/0fLenD',
      github: ''
    },
    {
      title: 'Economic Toll of Flooding',
      description: 'Predicting Flood Risk and Economic Loss from flood in Florida using GIS and Machine Learning. Collaborative project with Shourya Dokania and Shu Yang.',
      tech: ['QGIS', 'Google Earth Engine', 'Python', 'Remote Sensing'],
      image: new URL('/fl_flood.jpg', import.meta.url).href, // Corrected path
      status: 'Completed',
      category: 'Climate Research',
      link: 'https://arcg.is/1nrHCf1',
      github: ''
    },
    {
      title: 'Predicting Urban Gentrification using Machine Learning in NYC',
      description: 'A comprehensive analysis of gentrification trends in New York City neighborhoods using machine learning techniques to identify potential hotspots and assess socio-economic impacts. Collaborative project with Deven Barth, Andrew Hwang and Yutong Wu.',
      tech: ['Python', 'Machine Learning'],
      // This image is an external URL, so it doesn't need new URL()
      image: 'https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Completed',
      category: 'Machine Learning',
      link: 'https://docs.google.com/document/d/1ybIQIhEdvvvu8CRTJue8jIFcMuWKPNo-i7qzDCV-_3c/edit?usp=sharing',
      github: 'https://github.com/devennb/ML-gentrification-hotspot-analysis'
    },
    {
      title: 'Assessment for Property Tax Framework: A Study of Vijayawada Municipal Corporation',
      description: 'Undergraduate dissertation on the property tax framework of Vijayawada Municipal Corporation, analyzing the existing system and proposing a machine-learning based approach.',
      tech: ['Python', 'Machine Learning', 'GIS', 'Urban Finance'],
      image: new URL('/snigdhathesis.png', import.meta.url).href, // Corrected path
      status: 'Completed',
      category: 'Urban Finance',
      link: 'https://drive.google.com/file/d/1GrMicaRCLhMGdchBC_VIY-EPTDUgexFh/view?usp=sharing',
      github: ''
    },
    {
      title: 'Impact of Crime-Induced fear on Subway Ridership in Brooklyn, NY',
      description: 'A detailed analysis of how a crime incident affected subway ridership patterns on consecutive days in New York, utilizing spatial data and statistical methods. Collaborative project with Abhishek Kumar.',
      tech: ['Python', 'Statistical Analysis'],
      image: new URL('/subway_fear.png', import.meta.url).href, // Corrected path
      status: 'Completed',
      category: 'Data Science',
      link: 'https://docs.google.com/document/d/1Ypio5FHflt_fT6Qqe_O5tUGhleSsANTiq0AjluCKoN0/edit?usp=sharing',
      github: ''
    },
    {
      title: 'Transit or Car Oriented? Spatiotemporal Patterns in Urban Travel in U.S. Cities',
      description: 'Guided research project under Professor Anton Rozhkov, analyzing spatiotemporal patterns in urban travel across major U.S. cities using large-scale mobility data.',
      tech: ['Python', 'Statistical Analysis'],
      image: '', // No image for this one
      status: 'Ongoing',
      category: 'Transportation',
      link: '',
      github: ''
    },
    {
      title: 'Vijayawada City-Wide Freight Transport Analysis and Emission Mitigation Strategies',
      description: 'Analyzing freight transport patterns in Vijayawada, India, and developing strategies for emission reduction and efficiency improvement.',
      tech: ['GIS', 'Data Analysis', 'Urban Planning'],
      image: '', // No image for this one
      status: 'Completed',
      category: 'Transportation',
      link: '',
      github: ''
    },
    {
      title: 'GIS to Machine Learning: Application of Emerging Tools to Assess Accessible Built Environment in Indian cities',
      description: 'Research project funded by Government of India, applying GIS and machine learning to assess the accessibility of built environments in built heritage sites in India',
      tech: ['GIS', 'Data Analysis', 'Machine Learning'],
      image: new URL('/heritage.jpg', import.meta.url).href, // Corrected path
      status: 'Completed',
      category: 'Machine Learning',
      link: '',
      github: ''
    }
  ];

  const handleProjectClick = (index: number) => {
    setActiveProject(index); // Update the active project for the spotlight
    const project = projects[index];
    if (project.link) {
      window.open(project.link, '_blank'); // Open the project link in a new tab
    }
  };

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light mb-4">
            Featured <span className="iridescent-text font-medium">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Here are some of my individual as well as collaborative projects. P.S. Grateful to everyone who helped me along the way.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          <div className="glass rounded-2xl overflow-hidden hover-lift transition-all duration-500">
            <div className="grid lg:grid-cols-2">
              <div className="aspect-video lg:aspect-square bg-gradient-to-br from-purple-500/20 to-cyan-500/20 relative overflow-hidden">
                {projects[activeProject].image && ( // Only render img if image path exists
                  <img
                    src={projects[activeProject].image}
                    alt={projects[activeProject].title}
                    className="w-full h-full object-cover opacity-80"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
                    Featured Project
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-12">
                <div className="mb-4">
                  <span className="text-purple-400 text-sm font-medium">{projects[activeProject].category}</span>
                  <h3 className="text-3xl font-light text-white mt-2 mb-4">
                    {projects[activeProject].title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {projects[activeProject].description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {projects[activeProject].tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {projects[activeProject].link ? (
                    <a
                      href={projects[activeProject].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all duration-300"
                      data-interactive
                    >
                      View Project
                      <ArrowUpRight size={16} className="ml-2" />
                    </a>
                  ) : (
                    <button className="flex items-center px-6 py-3 bg-white/10 text-white rounded-lg font-medium">
                      Coming Soon
                    </button>
                  )}
                  {projects[activeProject].github && ( // Only render GitHub link if it exists
                    <a
                      href={projects[activeProject].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-all duration-300"
                      data-interactive
                    >
                      <Github size={16} className="mr-2" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover-lift group ${
                activeProject === index ? 'ring-2 ring-white/20' : ''
              }`}
              onClick={() => handleProjectClick(index)} // Updated onClick handler
              data-interactive
            >
              <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-cyan-500/20 relative overflow-hidden">
                {project.image && ( // Only render img if image path exists
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-xs text-white">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                    project.status === 'In Development' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {project.status}
                  </span>

                  {project.link && (
                    <ExternalLink size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                  )}
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
