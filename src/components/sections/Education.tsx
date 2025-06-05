
import React, { useRef, useEffect, useState } from 'react';
import { GraduationCap, Award, Star } from 'lucide-react';

interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  grade: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const educationData: EducationItem[] = [
  {
    id: 1,
    institution: 'Anurag University',
    degree: 'B.Tech in Computer Science Engineering',
    duration: '2021 - 2025',
    grade: 'CGPA: 8.88',
    description: 'Specialized in Data Structures, Algorithms, AI/ML, and Full-Stack Development. Active member of technical clubs and coding competitions.',
    icon: <GraduationCap className="w-6 h-6" />,
    color: 'from-neon-blue to-cyan-400'
  },
  {
    id: 2,
    institution: 'Narayana Junior College',
    degree: 'Intermediate (MPC)',
    duration: '2019 - 2021',
    grade: 'Percentage: 94.5%',
    description: 'Mathematics, Physics, and Chemistry with excellent performance in competitive examinations and academic excellence.',
    icon: <Award className="w-6 h-6" />,
    color: 'from-neon-purple to-pink-500'
  },
  {
    id: 3,
    institution: 'Secondary School Certificate',
    degree: 'SSC',
    duration: '2018 - 2019',
    grade: 'GPA: 10.0',
    description: 'Perfect GPA with strong foundation in mathematics and sciences, demonstrating consistent academic excellence.',
    icon: <Star className="w-6 h-6" />,
    color: 'from-neon-green to-emerald-500'
  }
];

export const Education = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-cyber font-bold text-neon-blue text-shadow-neon mb-4">
            Academic Journey
          </h2>
          <p className="text-xl text-gray-300 font-tech max-w-2xl mx-auto">
            Building a strong foundation in computer science and technology through continuous learning and academic excellence
          </p>
        </div>
        
        {/* Education Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-blue via-neon-purple to-neon-green rounded-full" />
          
          {educationData.map((item, index) => (
            <div
              key={item.id}
              ref={el => itemRefs.current[index] = el}
              data-index={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple border-4 border-cyber-dark z-10 animate-pulse-neon" />
              
              {/* 3D Graduation Cap */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-8 ${
                index === 0 ? 'block' : 'hidden'
              }`}>
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-sm rotate-45 animate-float opacity-80" />
              </div>
              
              {/* Education Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div 
                  className={`glass-effect rounded-xl p-6 border border-gray-600/30 transform transition-all duration-700 hover:scale-105 ${
                    visibleItems.includes(index) 
                      ? 'translate-y-0 opacity-100 scale-100' 
                      : index % 2 === 0 
                        ? 'translate-x-8 opacity-0 scale-95' 
                        : '-translate-x-8 opacity-0 scale-95'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Duration Badge */}
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-tech bg-neon-blue/10 text-neon-blue border border-neon-blue/30">
                      {item.duration}
                    </span>
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${item.color} text-white mb-4 animate-float`}>
                    {item.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-cyber font-bold text-white mb-2">
                    {item.degree}
                  </h3>
                  <h4 className="text-lg font-tech font-semibold text-neon-blue mb-2">
                    {item.institution}
                  </h4>
                  
                  {/* Grade with 3D effect */}
                  <div className="mb-3">
                    <span className={`inline-block px-4 py-2 rounded-lg font-tech font-bold text-lg bg-gradient-to-r ${item.color} text-white shadow-lg`}>
                      {item.grade}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 font-tech text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Highlights */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-cyber font-bold text-neon-purple mb-8">
            Academic Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: '8.88', label: 'CGPA', desc: 'B.Tech CSE', color: 'neon-blue' },
              { value: '94.5%', label: 'Intermediate', desc: 'MPC Stream', color: 'neon-purple' },
              { value: '10.0', label: 'SSC GPA', desc: 'Perfect Score', color: 'neon-green' }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="glass-effect rounded-xl p-6 border border-gray-600/30 hover:border-neon-blue/50 transition-all duration-300 hover:scale-105"
              >
                <div className={`text-4xl font-cyber font-bold text-${stat.color} text-shadow-neon mb-2 animate-glow`}>
                  {stat.value}
                </div>
                <div className="text-white font-tech font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-400 font-tech text-sm">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating Academic Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-3 h-3 rounded-full animate-float opacity-20 ${
              i % 3 === 0 ? 'bg-neon-blue' : i % 3 === 1 ? 'bg-neon-purple' : 'bg-neon-green'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};
