import React from 'react';
import { Mail, MapPin, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light mb-6">
            Let's <span className="iridescent-text font-medium">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            I'm always excited to discuss urban data science, spatial analysis, and opportunities 
            to create more sustainable and equitable cities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Contact Info */}
          <div className="glass p-8 rounded-2xl hover-lift transition-all duration-500">
            <h3 className="text-2xl font-light text-white mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <a
                href="mailto:snigdha.anantharaju@nyu.edu"
                className="flex items-center space-x-4 group hover:bg-white/5 p-4 rounded-lg transition-all duration-300"
                data-interactive
              >
                <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-purple-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-gray-400 text-sm">snigdha.anantharaju@nyu.edu</p>
                </div>
                <ArrowUpRight className="text-gray-400 group-hover:text-white transition-colors ml-auto" size={16} />
              </a>

              <div className="flex items-center space-x-4 p-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-pink-500/20">
                  <MapPin className="text-cyan-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-gray-400 text-sm">New York City, NY</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="glass p-8 rounded-2xl hover-lift transition-all duration-500">
            <h3 className="text-2xl font-light text-white mb-6">Follow My Work</h3>
            
            <div className="space-y-4">
              <a
                href="https://www.linkedin.com/in/snigdha-anantharaju/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 hover:bg-white/5 rounded-lg transition-all duration-300 group"
                data-interactive
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-blue-500/20">
                    <Linkedin className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">LinkedIn</h4>
                    <p className="text-gray-400 text-sm">Professional updates</p>
                  </div>
                </div>
                <ArrowUpRight className="text-gray-400 group-hover:text-white transition-colors" size={16} />
              </a>

              <a
                href="#"
                className="flex items-center justify-between p-4 hover:bg-white/5 rounded-lg transition-all duration-300 group"
                data-interactive
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gray-500/20">
                    <Github className="text-gray-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">GitHub</h4>
                    <p className="text-gray-400 text-sm">Code repositories</p>
                  </div>
                </div>
                <ArrowUpRight className="text-gray-400 group-hover:text-white transition-colors" size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-light text-white mb-4">Ready to collaborate?</h3>
            <p className="text-gray-400 mb-6">
              Whether you're interested in research collaboration, consulting, or just want to discuss urban tech
            </p>
            <a
              href="mailto:snigdha.anantharaju@nyu.edu"
              className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover-lift"
              data-interactive
            >
              Start a conversation
              <ArrowUpRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            © 2025 Snigdha Anantharaju. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;