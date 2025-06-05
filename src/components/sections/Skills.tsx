
import React, { useState } from 'react';

interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

const skills: Skill[] = [
  { name: 'React/Next.js', level: 95, icon: '⚛️', color: 'from-neon-blue to-cyan-400' },
  { name: 'Node.js', level: 90, icon: '🟢', color: 'from-green-400 to-neon-green' },
  { name: 'Python', level: 92, icon: '🐍', color: 'from-yellow-400 to-orange-500' },
  { name: 'AI/ML', level: 88, icon: '🤖', color: 'from-neon-purple to-pink-500' },
  { name: 'MongoDB', level: 85, icon: '🍃', color: 'from-green-500 to-emerald-600' },
  { name: 'AWS/Cloud', level: 80, icon: '☁️', color: 'from-orange-400 to-red-500' },
  { name: 'Docker', level: 78, icon: '🐳', color: 'from-blue-400 to-neon-blue' },
  { name: 'TypeScript', level: 93, icon: '📘', color: 'from-blue-600 to-neon-blue' }
];

export const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-cyber font-bold text-neon-blue text-shadow-neon mb-4">
            Technical Arsenal
          </h2>
          <p className="text-xl text-gray-300 font-tech max-w-2xl mx-auto">
            Mastering cutting-edge technologies to build the future
          </p>
        </div>
        
        {/* 3D Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="glass-effect rounded-xl p-6 border border-gray-600/30 hover:border-neon-blue/50 transition-all duration-500 hover:scale-105 hover:rotate-1 transform-gpu">
                {/* Skill Icon */}
                <div className="text-4xl mb-4 text-center animate-float">
                  {skill.icon}
                </div>
                
                {/* Skill Name */}
                <h3 className="text-lg font-tech font-semibold text-center text-white mb-4">
                  {skill.name}
                </h3>
                
                {/* Animated Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ 
                        width: hoveredSkill === skill.name ? `${skill.level}%` : '0%' 
                      }}
                    />
                  </div>
                  <span className="text-sm text-gray-400 font-tech">
                    {hoveredSkill === skill.name ? `${skill.level}%` : 'Hover to reveal'}
                  </span>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
        
        {/* 3D Skill Showcase */}
        <div className="relative">
          <h3 className="text-3xl font-cyber font-bold text-center text-neon-purple mb-12">
            Interactive Skill Cubes
          </h3>
          
          <div className="flex flex-wrap justify-center gap-8">
            {['Frontend', 'Backend', 'AI/ML', 'DevOps'].map((category, index) => (
              <div
                key={category}
                className="group perspective-1000"
              >
                <div className="relative w-32 h-32 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                  {/* Front Face */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center backface-hidden neon-border">
                    <span className="text-white font-cyber font-bold text-lg">
                      {category}
                    </span>
                  </div>
                  
                  {/* Back Face */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-green to-neon-orange rounded-xl flex items-center justify-center backface-hidden rotate-y-180 neon-border">
                    <span className="text-white font-cyber font-bold text-sm text-center px-2">
                      {index === 0 && 'React, Vue, Angular'}
                      {index === 1 && 'Node.js, Python, Java'}
                      {index === 2 && 'TensorFlow, PyTorch'}
                      {index === 3 && 'Docker, AWS, K8s'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};
