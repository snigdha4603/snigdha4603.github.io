import React from 'react';
import { GraduationCap, Briefcase, Download, Award } from 'lucide-react';

/**
 * About Component
 * Displays personal story, achievements, education, experience, and leadership sections.
 * Optimized layout to eliminate negative space and enhance aesthetic flow.
 */
const About: React.FC = () => {
  // Data for the achievement statistics section
  const achievements = [
    { number: '3', label: 'Teaching/Mentoring Roles' },
    { number: '8+', label: 'Projects Completed' },
    { number: '4', label: 'Research Areas' },
    { number: '3+', label: 'Leadership Roles' } // This is now correctly part of the array
  ];

  // Data for the education timeline
  const education = [
    {
      degree: "Master of Science in Applied Urban Science and Informatics",
      school: "Tandon School of Engineering, New York University",
      duration: "2024–Present",
      link: "https://engineering.nyu.edu/academics/programs/applied-urban-science-and-informatics-ms"
    },
    {
      degree: "Bachelor of Urban and Regional Planning",
      school: "School of Planning and Architecture, Vijayawada",
      duration: "2020–2024",
      link: "https://www.spav.ac.in/bplanning.html"
    }
  ];

  // Data for the professional experience timeline
  const experience = [
    {
      title: "GIS Student Specialist",
      organization: "NYU Data Services",
      duration: "May 2025 – Present"
    },
    {
      title: "CUSP Education Team Graduate Assistant",
      organization: "Center for Urban Science and Progress, NYU",
      duration: "Nov 2024 – Present"
    },
    {
      title: "Data Science and Machine Learning Intern",
      organization: "School of Planning and Architecture, Bhopal",
      duration: "May 2023 – July 2023"
    },
    {
      title: "Urban Planning Intern",
      organization: "Vijayawada Municipal Corporation",
      duration: "June 2022 – Aug 2022"
    }
  ];

  // Data for the leadership experience timeline
  const leadershipExperience = [
    {
      title: "President",
      organization: "Applied Urban Science Association (AUSA), NYU Tandon",
      duration: "May 2025 – Present"
    },
    {
      title: "Club Secretary",
      organization: "Club Monologue (Drama and Theatre), SPA Vijayawada",
      duration: "2021–2024"
    },
    {
      title: "Co-ordinator",
      organization: "National Service Scheme, SPA Vijayawada",
      duration: "2023–2024"
    },
    {
      title: "Joint Secretary",
      organization: "Ek Bharat Shrestha Bharat Cell, SPA Vijayawada",
      duration: "2023–2024"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header Section: About Me */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light mb-4">
            About <span className="iridescent-text font-medium">Me</span>
          </h2>
          {/* Decorative underline */}
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Stats/Achievements Section */}
        {/* Grid layout for responsive display of achievement numbers */}
        {/* Using md:grid-cols-4 to ensure all 4 stats fit on one line on medium and larger screens */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            // Each achievement item is centered using 'text-center'
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-light text-white mb-2">
                {achievement.number}
              </div>
              <div className="text-gray-400 text-sm">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Photo and My Story side by side */}
        {/* This grid ensures these two elements fill their horizontal space and are of equal height */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16"> {/* items-stretch to make columns equal height */}
          {/* Photo */}
          {/* Removed aspect-square to allow height to be determined by grid stretch.
              Added h-full to ensure image container fills the stretched height. */}
          <div className="rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center h-full">
            <img
             src={new URL('/snigdhaphoto.png', import.meta.url).href}
              alt="Snigdha Anantharaju"
              className="w-full h-full object-cover" // Image fills its container
            />
          </div>
          {/* My Story - No glass card, but constrained height to match photo, with scrollable content */}
          {/* Added p-8 for internal padding, flex-col and justify-start for content alignment */}
          <div className="p-8 rounded-2xl flex flex-col justify-start">
            <h3 className="text-2xl font-bold text-white mb-6">My Story</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed overflow-y-auto pr-2 flex-grow"> {/* flex-grow to make text content fill remaining height and scroll */}
              <p>
                Hi, I'm Snigdha and I'm currently pursuing my Master's in Applied Urban Science and Informatics at NYU's Center for Urban Science and Progress (CUSP),
                where I explore how cities work and how we can make them better for everyone.
              </p>
              <p>
                What drives me is the intersection of data and real-world impact. I use spatial analysis and machine learning
                to tackle urban challenges – from transportation equity to climate vulnerabilities and renewable energy infrastructure.
              </p>
              <p>
                Beyond academics, I lead the Applied Urban Science Association as President, help the broader NYU research community at NYU Data Services as a GIS Consultant,
                and work with the CUSP Education Team to make urban science more accessible.
              </p>
              <p>
                I love food and I love New York. So, when I'm not working, I am probably trying to find my next favorite place to eat.
              </p>
            </div>
          </div>
        </div>

        {/* Below: Education/Leadership left, Experience/Resume right */}
        {/* This grid organizes the timeline sections and resume download, filling the space below */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Education & Leadership Experience */}
          <div className="space-y-8">
            {/* Education Section */}
            <div className="glass p-8 rounded-2xl hover-lift transition-all duration-300">
              <div className="flex items-center mb-6">
                <GraduationCap className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-light text-white">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-purple-400/30 pl-6">
                    {edu.link ? (
                      <a
                        href={edu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-medium text-lg hover:text-purple-300 transition-colors duration-200 block mb-1" // Title text-lg
                        data-interactive
                      >
                        {edu.degree}
                      </a>
                    ) : (
                      <h4 className="text-white font-medium text-lg mb-1">{edu.degree}</h4> // Title text-lg
                    )}
                    <p className="text-gray-300 text-sm mb-1">{edu.school}</p> {/* Organization text-sm */}
                    <p className="text-gray-500 text-xs">{edu.duration}</p> {/* Duration text-xs */}
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership Experience Section - Swapped with Experience */}
            <div className="glass p-8 rounded-2xl hover-lift transition-all duration-300">
              <div className="flex items-center mb-6">
                <Award className="text-yellow-400 mr-3" size={24} />
                <h3 className="text-xl font-light text-white">Leadership Experience</h3>
              </div>
              <div className="space-y-4">
                {leadershipExperience.map((item, index) => (
                  <div key={index} className="border-l-2 border-yellow-400/30 pl-6">
                    <h4 className="text-white font-medium text-lg mb-1">{item.title}</h4> {/* Consistent font size: text-lg */}
                    <p className="text-gray-300 text-sm mb-1">{item.organization}</p> {/* Consistent font size: text-sm */}
                    <p className="text-gray-500 text-xs">{item.duration}</p> {/* Consistent font size: text-xs */}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Experience & Resume */}
          <div className="space-y-8">
            {/* Experience Section - Swapped with Leadership Experience */}
            <div className="glass p-8 rounded-2xl hover-lift transition-all duration-300">
              <div className="flex items-center mb-6">
                <Briefcase className="text-cyan-400 mr-3" size={24} />
                <h3 className="text-xl font-light text-white">Experience</h3>
              </div>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-cyan-400/30 pl-6">
                    <h4 className="text-white font-medium text-lg mb-1">{exp.title}</h4> {/* Consistent font size: text-lg */}
                    <p className="text-gray-300 text-sm mb-1">{exp.organization}</p> {/* Consistent font size: text-sm */}
                    <p className="text-gray-500 text-xs">{exp.duration}</p> {/* Consistent font size: text-xs */}
                  </div>
                ))}
              </div>
            </div>

            {/* Resume Download Section - Removed glass box */}
            <div className="pt-0"> {/* Removed glass styling and adjusted padding */}
              <a
                href="/master_resume.pdf"
                download="Snigdha_Anantharaju_Resume.pdf"
                className="flex items-center justify-center w-full px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all duration-300"
                data-interactive
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;