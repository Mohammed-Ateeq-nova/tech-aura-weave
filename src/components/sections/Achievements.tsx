
import React, { useRef, useEffect, useState } from 'react';
import { Award, Star, Trophy, Zap } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  icon: React.ReactNode;
  color: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: 'AI Innovation Award',
    description: 'Recognized for breakthrough work in computer vision and face liveness detection systems.',
    date: '2023',
    icon: <Trophy className="w-6 h-6" />,
    color: 'from-yellow-400 to-orange-500'
  },
  {
    id: 2,
    title: 'Full Stack Excellence',
    description: 'Completed advanced certification in modern web development technologies.',
    date: '2023',
    icon: <Star className="w-6 h-6" />,
    color: 'from-neon-blue to-cyan-400'
  },
  {
    id: 3,
    title: 'Open Source Contributor',
    description: 'Active contributor to major open source projects with 500+ GitHub contributions.',
    date: '2022-2023',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-neon-green to-emerald-500'
  },
  {
    id: 4,
    title: 'Tech Leadership',
    description: 'Led development team of 8+ developers on multiple high-impact projects.',
    date: '2022',
    icon: <Award className="w-6 h-6" />,
    color: 'from-neon-purple to-pink-500'
  }
];

export const Achievements = () => {
  const [visibleAchievements, setVisibleAchievements] = useState<number[]>([]);
  const achievementRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleAchievements(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    achievementRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-cyber font-bold text-neon-green text-shadow-neon mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-gray-300 font-tech max-w-2xl mx-auto">
            Milestones in my journey of technological excellence
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-blue via-neon-purple to-neon-green rounded-full" />
          
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              ref={el => achievementRefs.current[index] = el}
              data-index={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple border-4 border-cyber-dark z-10 animate-pulse-neon" />
              
              {/* Achievement Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div 
                  className={`glass-effect rounded-xl p-6 border border-gray-600/30 transform transition-all duration-700 ${
                    visibleAchievements.includes(index) 
                      ? 'translate-y-0 opacity-100 scale-100' 
                      : index % 2 === 0 
                        ? 'translate-x-8 opacity-0 scale-95' 
                        : '-translate-x-8 opacity-0 scale-95'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${achievement.color} text-white mb-4 animate-float`}>
                    {achievement.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-cyber font-bold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 font-tech text-sm mb-3 leading-relaxed">
                    {achievement.description}
                  </p>
                  <span className="text-neon-blue font-tech font-semibold text-sm">
                    {achievement.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { number: '50+', label: 'Projects Completed', color: 'neon-blue' },
            { number: '8+', label: 'Team Members Led', color: 'neon-purple' },
            { number: '500+', label: 'GitHub Contributions', color: 'neon-green' },
            { number: '3+', label: 'Years Experience', color: 'yellow-400' }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center glass-effect rounded-xl p-6 border border-gray-600/30 hover:border-neon-blue/50 transition-all duration-300 hover:scale-105"
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
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full animate-float opacity-20 ${
              i % 3 === 0 ? 'bg-neon-blue' : i % 3 === 1 ? 'bg-neon-purple' : 'bg-neon-green'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};
