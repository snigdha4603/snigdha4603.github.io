import React from 'react';
import { Award, Users, Briefcase } from 'lucide-react';

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
              a graduate student in Applied Urban Science and Informatics at NYU's Center for Urban Science and Progress (CUSP). 
              I'm passionate about how cities move, grow, and evolve and how data can help us build more equitable, 
              resilient, and sustainable urban systems.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="text-center p-4 rounded-lg bg-white/5">
                <Briefcase className="mx-auto mb-2 text-white" size={32} />
                <h3 className="font-semibold text-white mb-1">Graduate Assistant</h3>
                <p className="text-sm text-gray-400">CUSP Education Team</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/5">
                <Award className="mx-auto mb-2 text-white" size={32} />
                <h3 className="font-semibold text-white mb-1">GIS Specialist</h3>
                <p className="text-sm text-gray-400">NYU Data Services</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/5">
                <Users className="mx-auto mb-2 text-white" size={32} />
                <h3 className="font-semibold text-white mb-1">President</h3>
                <p className="text-sm text-gray-400">AUSA at NYU Tandon</p>
              </div>
            </div>

            <p>
              Currently, I work as a Graduate Assistant with the CUSP Education Team, supporting programming, 
              outreach, and student engagement. I also serve as the GIS Student Specialist at NYU Data Services, 
              where I assist students and faculty with spatial analysis, map design, and geospatial research. 
              Beyond the classroom, I'm the President of the Applied Urban Science Association (AUSA) at NYU Tandon, 
              helping foster a community around urban tech and data.
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