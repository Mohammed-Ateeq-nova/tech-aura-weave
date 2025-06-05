
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Twitter } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-cyber font-bold text-neon-orange text-shadow-neon mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 font-tech max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's build something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-3xl font-cyber font-bold text-neon-blue mb-8">
              Get In Touch
            </h3>
            
            {/* Contact Items */}
            <div className="space-y-6">
              {[
                { icon: <Mail className="w-6 h-6" />, label: 'Email', value: 'mohammed.ateeq@email.com', color: 'neon-blue' },
                { icon: <Phone className="w-6 h-6" />, label: 'Phone', value: '+1 (555) 123-4567', color: 'neon-green' },
                { icon: <MapPin className="w-6 h-6" />, label: 'Location', value: 'San Francisco, CA', color: 'neon-purple' }
              ].map((item, index) => (
                <div 
                  key={item.label}
                  className="flex items-center space-x-4 glass-effect rounded-lg p-4 border border-gray-600/30 hover:border-neon-blue/50 transition-all duration-300 hover:scale-105"
                >
                  <div className={`text-${item.color} animate-glow`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-gray-400 font-tech text-sm">{item.label}</div>
                    <div className="text-white font-tech font-semibold">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-xl font-cyber font-bold text-neon-purple mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {[
                  { icon: <Github className="w-6 h-6" />, href: '#', color: 'hover:text-neon-blue' },
                  { icon: <Twitter className="w-6 h-6" />, href: '#', color: 'hover:text-neon-green' },
                  { icon: <Mail className="w-6 h-6" />, href: '#', color: 'hover:text-neon-purple' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-3 glass-effect rounded-lg border border-gray-600/30 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:border-neon-blue/50`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-effect rounded-xl p-8 border border-gray-600/30">
            <h3 className="text-2xl font-cyber font-bold text-neon-green mb-6">
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-gray-300 font-tech text-sm mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cyber-gray border border-gray-600 rounded-lg text-white font-tech focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              {/* Email Input */}
              <div>
                <label className="block text-gray-300 font-tech text-sm mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cyber-gray border border-gray-600 rounded-lg text-white font-tech focus:border-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green/20 transition-all duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              {/* Message Input */}
              <div>
                <label className="block text-gray-300 font-tech text-sm mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-cyber-gray border border-gray-600 rounded-lg text-white font-tech focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green text-white font-cyber font-semibold rounded-lg neon-border hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/30 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-gray-600/30 text-center">
        <p className="text-gray-400 font-tech">
          © 2024 Mohammed Ateeq. Built with ❤️ and cutting-edge tech.
        </p>
      </div>
    </section>
  );
};
