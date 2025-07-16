import React from 'react';
import { Trophy, Award, Star } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: "25th NOSPLAN Convention: First Place in Current Practices",
      organization: "Sponsored by NIUA",
      description: "Eco-centric Strategies for mitigating Climate Change through spatial planning",
      prize: "Rs. 15,000",
      year: "2023",
      icon: Trophy
    },
    {
      title: "Government of Andhra Pradesh",
      organization: "State Government",
      description: "Second place in Business idea presentation",
      year: "2017",
      icon: Award
    },
    {
      title: "King's College London Global Data Dive 2025",
      organization: "King's College London",
      description: "Best Technical Contribution for the project 'New York Skyline vs. Sustainability'",
      year: "2025",
      icon: Star
    },
    {
      title: "CUSP Experiential Scholarship",
      organization: "NYU CUSP",
      description: "Research related to urban transportation under Prof. Anton Rozhkov",
      year: "2025",
      icon: Award
    },
    {
      title: "CUSP Merit Scholarship",
      organization: "NYU CUSP",
      description: "Merit-based scholarship award",
      prize: "$18,000",
      year: "2024",
      icon: Trophy
    }
  ];

  return (
    <section id="awards" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4">
            Awards & Achievements
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Recognition for excellence in research, innovation, and leadership
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-purple-400 font-medium">{award.year}</span>
                      {award.prize && (
                        <span className="text-sm bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent font-bold">
                          {award.prize}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {award.title}
                </h3>
                
                <p className="text-purple-400 text-sm font-medium mb-3">
                  {award.organization}
                </p>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {award.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Awards;