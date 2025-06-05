
import React, { useState } from 'react';

interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
  category: string;
}

const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', level: 95, icon: '🐍', color: 'from-yellow-400 to-green-500', category: 'Programming' },
  { name: 'C++', level: 90, icon: '⚡', color: 'from-blue-400 to-cyan-500', category: 'Programming' },
  { name: 'Java', level: 88, icon: '☕', color: 'from-orange-500 to-red-500', category: 'Programming' },
  { name: 'JavaScript', level: 92, icon: '🟨', color: 'from-yellow-400 to-orange-500', category: 'Programming' },
  { name: 'SQL', level: 85, icon: '🗄️', color: 'from-blue-500 to-indigo-600', category: 'Programming' },
  { name: 'HTML/CSS', level: 93, icon: '🎨', color: 'from-pink-400 to-red-500', category: 'Programming' },
  
  // Frameworks & Libraries
  { name: 'React', level: 90, icon: '⚛️', color: 'from-neon-blue to-cyan-400', category: 'Frameworks' },
  { name: 'TensorFlow', level: 88, icon: '🧠', color: 'from-orange-400 to-yellow-500', category: 'Frameworks' },
  { name: 'NumPy', level: 85, icon: '📊', color: 'from-blue-400 to-purple-500', category: 'Frameworks' },
  { name: 'Pandas', level: 87, icon: '🐼', color: 'from-green-400 to-blue-500', category: 'Frameworks' },
  { name: 'Scikit-learn', level: 83, icon: '🔬', color: 'from-purple-400 to-pink-500', category: 'Frameworks' },
  { name: 'Matplotlib', level: 80, icon: '📈', color: 'from-indigo-400 to-purple-500', category: 'Frameworks' },
  
  // Databases & Tools
  { name: 'MongoDB', level: 85, icon: '🍃', color: 'from-green-500 to-emerald-600', category: 'Database' },
  { name: 'Oracle', level: 78, icon: '🔴', color: 'from-red-500 to-orange-500', category: 'Database' },
  { name: 'Git', level: 88, icon: '📱', color: 'from-gray-400 to-gray-600', category: 'Tools' },
  { name: 'Figma', level: 82, icon: '🎨', color: 'from-purple-400 to-pink-500', category: 'Tools' },
  { name: 'Tableau', level: 80, icon: '📊', color: 'from-blue-500 to-indigo-600', category: 'Tools' },
  { name: 'Qlik Sense', level: 75, icon: '📈', color: 'from-green-400 to-teal-500', category: 'Tools' }
];

const categories = ['Programming', 'Frameworks', 'Database', 'Tools'];

export const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Programming');

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-cyber font-bold text-neon-blue text-shadow-neon mb-4">
            Technical Arsenal
          </h2>
          <p className="text-xl text-gray-300 font-tech max-w-2xl mx-auto">
            Mastering cutting-edge technologies across programming, AI/ML, databases, and development tools
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 font-tech font-semibold rounded-lg transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white neon-border'
                  : 'glass-effect text-gray-300 border border-gray-600/30 hover:border-neon-blue/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredSkills.map((skill) => (
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

        {/* DSA & Problem Solving Highlight */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-cyber font-bold text-neon-purple mb-8">
            Core Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'Data Structures & Algorithms', icon: '🧩', desc: 'Advanced problem-solving skills' },
              { name: 'System Optimization', icon: '⚡', desc: 'Performance tuning expertise' },
              { name: 'AI/ML Implementation', icon: '🤖', desc: 'Real-world AI solutions' },
              { name: 'Full-Stack Development', icon: '🌐', desc: 'End-to-end development' }
            ].map((competency, index) => (
              <div
                key={competency.name}
                className="group glass-effect rounded-xl p-6 border border-gray-600/30 hover:border-neon-purple/50 transition-all duration-300 hover:scale-105 max-w-xs"
              >
                <div className="text-4xl mb-3 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  {competency.icon}
                </div>
                <h4 className="font-tech font-bold text-white mb-2">{competency.name}</h4>
                <p className="text-gray-400 text-sm font-tech">{competency.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
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
