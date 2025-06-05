import React, { useState } from 'react';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  icon: string;
  color: string;
  credentialUrl?: string;
  featured: boolean;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'IBM Data Science Professional Certificate',
    issuer: 'IBM',
    date: '2023',
    description: 'Comprehensive program covering data analysis, machine learning, and data visualization using Python, SQL, and various data science tools.',
    skills: ['Python', 'SQL', 'Machine Learning', 'Data Analysis', 'Data Visualization'],
    icon: '🔬',
    color: 'from-blue-500 to-indigo-600',
    credentialUrl: '#',
    featured: true
  },
  {
    id: 2,
    title: 'MongoDB Developer Certification',
    issuer: 'MongoDB University',
    date: '2023',
    description: 'Advanced database design, query optimization, and application development using MongoDB and related technologies.',
    skills: ['MongoDB', 'Database Design', 'NoSQL', 'Performance Optimization'],
    icon: '🍃',
    color: 'from-green-500 to-emerald-600',
    credentialUrl: '#',
    featured: true
  },
  {
    id: 3,
    title: 'Java Programming Certification',
    issuer: 'Infosys Springboard',
    date: '2022',
    description: 'Core Java concepts, object-oriented programming, and enterprise application development fundamentals.',
    skills: ['Java', 'OOP', 'Enterprise Development', 'Design Patterns'],
    icon: '☕',
    color: 'from-orange-500 to-red-500',
    credentialUrl: '#',
    featured: true
  },
  {
    id: 4,
    title: 'Python Programming Certification',
    issuer: 'Infosys Springboard',
    date: '2022',
    description: 'Python fundamentals, data structures, algorithms, and application development using Python frameworks.',
    skills: ['Python', 'Data Structures', 'Algorithms', 'Web Development'],
    icon: '🐍',
    color: 'from-yellow-400 to-green-500',
    credentialUrl: '#',
    featured: false
  },
  {
    id: 5,
    title: 'UiPath RPA Developer Foundation',
    issuer: 'UiPath Academy',
    date: '2022',
    description: 'Robotic Process Automation fundamentals, workflow design, and automation development using UiPath Studio.',
    skills: ['RPA', 'UiPath', 'Process Automation', 'Workflow Design'],
    icon: '🤖',
    color: 'from-purple-500 to-pink-500',
    credentialUrl: '#',
    featured: false
  }
];

export const Certifications = () => {
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-cyber font-bold text-neon-green text-shadow-neon mb-4">
            Certifications & Credentials
          </h2>
          <p className="text-xl text-gray-300 font-tech max-w-2xl mx-auto">
            Continuous learning through industry-recognized certifications and professional development programs
          </p>
        </div>

        {/* Featured Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {certificates.filter(cert => cert.featured).map((cert) => (
            <div
              key={cert.id}
              className="group relative overflow-hidden rounded-xl glass-effect border border-gray-600/30 hover:border-neon-green/50 transition-all duration-500 hover:scale-105"
              onMouseEnter={() => setHoveredCert(cert.id)}
              onMouseLeave={() => setHoveredCert(null)}
            >
              {/* Badge Animation */}
              <div className="absolute top-4 right-4 z-10">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center animate-pulse-neon`}>
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                {/* Icon */}
                <div className="text-5xl mb-4 animate-float">
                  {cert.icon}
                </div>

                {/* Title & Issuer */}
                <h3 className="text-xl font-cyber font-bold text-white mb-2 group-hover:text-neon-green transition-colors">
                  {cert.title}
                </h3>
                <h4 className="text-lg font-tech font-semibold text-neon-blue mb-2">
                  {cert.issuer}
                </h4>
                <span className="text-sm font-tech text-gray-400 mb-4 block">
                  Issued: {cert.date}
                </span>

                {/* Description */}
                <p className="text-gray-300 font-tech text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-neon-green/10 text-neon-green text-xs font-tech rounded-full border border-neon-green/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Credential Link */}
                {cert.credentialUrl && (
                  <a 
                    href={cert.credentialUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-green to-emerald-500 text-white font-tech font-semibold rounded-lg hover:scale-105 transition-all duration-300 neon-border"
                  >
                    <Award className="w-4 h-4" />
                    View Credential
                  </a>
                )}
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Other Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {certificates.filter(cert => !cert.featured).map((cert) => (
            <div
              key={cert.id}
              className="group glass-effect rounded-xl p-6 border border-gray-600/30 hover:border-neon-blue/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start">
                {/* Icon */}
                <div className="text-3xl mr-4 animate-float">
                  {cert.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-cyber font-bold text-white mb-1">
                    {cert.title}
                  </h3>
                  <h4 className="text-md font-tech text-neon-blue mb-1">
                    {cert.issuer}
                  </h4>
                  <span className="text-xs font-tech text-gray-400 mb-3 block">
                    {cert.date}
                  </span>

                  <p className="text-gray-400 font-tech text-sm mb-3">
                    {cert.description}
                  </p>

                  {/* Skills - Condensed */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span 
                        key={skill}
                        className="px-2 py-1 bg-neon-blue/10 text-neon-blue text-xs font-tech rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs font-tech rounded-full">
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Link */}
                  {cert.credentialUrl && (
                    <a 
                      href={cert.credentialUrl}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-neon-blue/20 text-neon-blue text-sm font-tech rounded hover:bg-neon-blue/30 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      View
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '5+', label: 'Certifications Earned', color: 'neon-green' },
            { number: '4', label: 'Major Platforms', color: 'neon-blue' },
            { number: '20+', label: 'Skills Validated', color: 'neon-purple' },
            { number: '2023', label: 'Latest Certification', color: 'yellow-400' }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center glass-effect rounded-xl p-6 border border-gray-600/30 hover:border-neon-green/50 transition-all duration-300 hover:scale-105"
            >
              <div className={`text-3xl md:text-4xl font-cyber font-bold text-${stat.color} text-shadow-neon mb-2 animate-glow`}>
                {stat.number}
              </div>
              <div className="text-gray-300 font-tech text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Certificate Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-3 h-3 rounded-sm animate-float opacity-20 ${
              i % 2 === 0 ? 'bg-neon-green' : 'bg-neon-blue'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${5 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};
