
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth) * 100;
      const yPos = (clientY / innerHeight) * 100;
      
      heroRef.current.style.background = `
        radial-gradient(circle at ${xPos}% ${yPos}%, rgba(0, 245, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at ${100-xPos}% ${100-yPos}%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
        #0a0a0f
      `;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden transition-all duration-300"
    >
      {/* Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 bg-neon-blue rounded-sm animate-float opacity-20`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          {/* Animated Title */}
          <div className="relative">
            <h1 
              ref={titleRef}
              className="text-6xl md:text-8xl font-cyber font-bold text-neon-blue text-shadow-neon animate-pulse-neon"
            >
              MOHAMMED
            </h1>
            <h2 className="text-4xl md:text-6xl font-cyber font-bold text-neon-purple mt-2 animate-glow">
              ATEEQ
            </h2>
          </div>
          
          {/* Typewriter Effect */}
          <div className="text-xl md:text-2xl text-gray-300 font-tech relative">
            <span className="inline-block animate-typewriter overflow-hidden whitespace-nowrap border-r-2 border-neon-green">
              Full Stack Developer & AI Specialist
            </span>
          </div>
          
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {['React', 'Node.js', 'Python', 'AI/ML', 'MongoDB', 'Next.js'].map((tech, index) => (
              <span 
                key={tech}
                className="px-4 py-2 glass-effect rounded-full text-sm font-tech text-neon-blue border border-neon-blue/30 hover:bg-neon-blue/10 transition-all duration-300 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-tech font-semibold rounded-lg neon-border hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/50">
              Explore My Work
            </button>
            <button className="px-8 py-4 glass-effect text-neon-green font-tech font-semibold rounded-lg border border-neon-green/50 hover:bg-neon-green/10 hover:scale-105 transition-all duration-300">
              Download CV
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-neon-blue animate-glow" />
        </div>
      </div>
      
      {/* 3D Floating Cubes */}
      <div className="absolute top-1/4 left-10 w-16 h-16 bg-gradient-to-r from-neon-purple to-neon-blue rounded-lg animate-rotate-y opacity-50" />
      <div className="absolute top-3/4 right-10 w-12 h-12 bg-gradient-to-r from-neon-green to-neon-blue rounded-lg animate-float opacity-40" 
           style={{ animationDelay: '2s' }} />
    </section>
  );
};
