import React from 'react';
import { Award, Users, Briefcase, Zap } from 'lucide-react'; // Added Zap for the new role

const Intro: React.FC = () => {
  return (
    <section id="intro" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold iridescent-text mb-4">My Journey</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="glass p-8 md:p-12 rounded-2xl hover-lift transition-all duration-500">
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              I'm <span className="iridescent-text font-semibold">Snigdha Anantharaju</span> (she/her), 
              a graduate student in Urban Data Science at NYU's Center for Urban Science and Progress (CUSP). 
              I'm passionate about how cities move, grow, and evolve and how data can help us build more equitable, 
              resilient, and sustainable urban systems.
            </p>

            {/* UPDATED: Changing to a responsive 2x2 grid (md:grid-cols-2) to accommodate more key roles */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 my-8"> 
              
              {/* 1. 9/11 Memorial Fellow - New Role */}
              <a 
                href="https://www.nymtc.org/en-us/News-and-Events#2025scholars:~:text=Scholars%20Announced%20for%20NYMTC%E2%80%99s%202025%2D26%209%2D11%20Memorial%20Fellowship%20Program" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
                data-interactive
              >
                <Award className="mx-auto mb-2 text-yellow-400" size={32} />
                <h3 className="font-semibold text-white mb-1">9/11 Memorial Fellow</h3>
                <p className="text-sm text-gray-400">NYMTC & NYC DOT</p>
              </a>

              {/* 2. CUSP Graduate Assistant - Existing Role */}
              <div className="text-center p-4 rounded-lg bg-white/5">
                <Briefcase className="mx-auto mb-2 text-cyan-400" size={32} />
                <h3 className="font-semibold text-white mb-1">Graduate Assistant</h3>
                <p className="text-sm text-gray-400">CUSP Education Team</p>
              </div>

              {/* 3. AUSA President - Hyperlinked */}
              <a 
                href="https://www.linkedin.com/feed/update/urn:li:activity:7366892066720595969/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
                data-interactive
              >
                <Users className="mx-auto mb-2 text-purple-400" size={32} />
                <h3 className="font-semibold text-white mb-1">President</h3>
                <p className="text-sm text-gray-400">AUSA at NYU Tandon</p>
              </a>

              {/* 4. ASPRS Founding President - New Role */}
              <a 
                href="https://community.asprs.org/chapter-nyu/home#:~:text=Add%20Event-,Meet%20the%20Leadership,-Snigdha%20Anantharaju" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
                data-interactive
              >
                <Zap className="mx-auto mb-2 text-red-400" size={32} />
                <h3 className="font-semibold text-white mb-1">Founding President</h3>
                <p className="text-sm text-gray-400">ASPRS NYU Student Chapter</p>
              </a>
              
            </div>

            <p>
              I am currently a **9/11 Memorial Fellow** (Oct 2025–Present) with the NY Metropolitan Transportation Council and NYC Department of Transportation, focusing on critical regional transportation planning.
              I also work as a Graduate Assistant with the CUSP Education Team, supporting programming, 
              outreach, and student engagement, and serve as the GIS Student Specialist at NYU Data Services, 
              where I assist students and faculty with spatial analysis, map design, and geospatial research. 
              Beyond the classroom, I'm the <a 
                href="https://www.linkedin.com/feed/update/urn:li:activity:7366892066720595969/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="iridescent-text font-medium hover:underline"
              >President of the Applied Urban Science Association (AUSA)</a> at NYU Tandon, 
              and the <a 
                href="https://community.asprs.org/chapter-nyu/home#:~:text=Add%20Event-,Meet%20the%20Leadership,-Snigdha%20Anantharaju" 
                target="_blank" 
                rel="noopener noreferrer"
                className="iridescent-text font-medium hover:underline"
              >Founding President of the ASPRS NYU Student Chapter</a> (Sept 2025–Present),
              helping foster a community around urban tech, remote sensing, and data.
            </p>

            <p>
              My research interests lie at the intersection of <span className="text-white font-medium">urban infrastructure equity</span>, 
              <span className="text-white font-medium"> climate resilience</span>, and 
              <span className="text-white font-medium"> spatial decision-making</span> — especially how geospatial tools 
              can inform smarter investments in cities and energy systems.
            </p>

            <p>
              Before NYU, I studied Urban and Regional Planning at the School of Planning and Architecture, 
              Vijayawada, India, where I led student teams on award-winning projects from municipal policy design 
              to public street theatre that sparked civic conversations.
            </p>

            <p className="italic">
              When I'm not deep in data or maps, you'll probably find me walking around New York City, 
              catching the subway just for fun, or tracking down the city's best vegetarian cheap eats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;