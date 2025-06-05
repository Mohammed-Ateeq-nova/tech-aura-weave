
import React, { useRef, useEffect, useState } from 'react';
import { Users, Trophy, Target, Zap } from 'lucide-react';

interface LeadershipRole {
  id: number;
  title: string;
  organization: string;
  duration: string;
  achievements: string[];
  description: string;
  icon: React.ReactNode;
  color: string;
  metrics: {
    participants?: number;
    events?: number;
    workshops?: number;
  };
}

const leadershipData: LeadershipRole[] = [
  {
    id: 1,
    title: 'Executive Chairperson',
    organization: 'GeeksforGeeks - Anurag University',
    duration: '2022 - 2024',
    description: 'Led the technical community, organizing coding competitions, hackathons, and workshops to foster learning and innovation among students.',
    achievements: [
      'Organized Hacktivate with 400+ participants',
      'Led creation of 150+ coding contest questions',
      'Conducted workshops for 200+ attendees',
      'Increased club membership by 300%'
    ],
    icon: <Users className="w-6 h-6" />,
    color: 'from-neon-blue to-cyan-400',
    metrics: {
      participants: 400,
      events: 15,
      workshops: 8
    }
  }
];

const initiatives = [
  {
    name: 'Hacktivate 2023',
    description: '24-hour hackathon focused on innovative tech solutions',
    participants: 400,
    icon: <Trophy className="w-5 h-5" />,
    color: 'from-yellow-400 to-orange-500'
  },
  {
    name: 'Coding Bootcamp Series',
    description: 'Weekly workshops on DSA, web development, and AI/ML',
    participants: 200,
    icon: <Target className="w-5 h-5" />,
    color: 'from-green-400 to-emerald-500'
  },
  {
    name: 'Code Wars Competition',
    description: 'Competitive programming contests and skill challenges',
    participants: 150,
    icon: <Zap className="w-5 h-5" />,
    color: 'from-purple-400 to-pink-500'
  }
];

export const Leadership = () => {
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
    <section id="leadership" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-cyber font-bold text-neon-purple text-shadow-neon mb-4">
            Leadership & Impact
          </h2>
          <p className="text-xl text-gray-300 font-tech max-w-2xl mx-auto">
            Driving technological innovation and community growth through strategic leadership and event management
          </p>
        </div>

        {/* Main Leadership Role */}
        <div className="max-w-4xl mx-auto mb-16">
          {leadershipData.map((role, index) => (
            <div
              key={role.id}
              ref={el => itemRefs.current[index] = el}
              data-index={index}
              className={`glass-effect rounded-xl p-8 border border-gray-600/30 hover:border-neon-purple/50 transition-all duration-700 ${
                visibleItems.includes(index) 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-8 opacity-0 scale-95'
              }`}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${role.color} text-white mr-4 animate-float`}>
                    {role.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-cyber font-bold text-white">
                      {role.title}
                    </h3>
                    <h4 className="text-lg font-tech text-neon-blue">
                      {role.organization}
                    </h4>
                    <span className="text-sm font-tech text-gray-400">
                      {role.duration}
                    </span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center glass-effect rounded-lg p-3 border border-gray-700/30">
                    <div className="text-2xl font-bold font-cyber text-neon-blue">
                      {role.metrics.participants}+
                    </div>
                    <div className="text-xs text-gray-400 font-tech">
                      Participants
                    </div>
                  </div>
                  <div className="text-center glass-effect rounded-lg p-3 border border-gray-700/30">
                    <div className="text-2xl font-bold font-cyber text-neon-purple">
                      {role.metrics.events}+
                    </div>
                    <div className="text-xs text-gray-400 font-tech">
                      Events
                    </div>
                  </div>
                  <div className="text-center glass-effect rounded-lg p-3 border border-gray-700/30">
                    <div className="text-2xl font-bold font-cyber text-neon-green">
                      {role.metrics.workshops}+
                    </div>
                    <div className="text-xs text-gray-400 font-tech">
                      Workshops
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 font-tech mb-6 leading-relaxed">
                {role.description}
              </p>

              {/* Achievements Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {role.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-center glass-effect rounded-lg p-4 border border-gray-700/30">
                    <div className="w-2 h-2 bg-neon-green rounded-full mr-3 animate-pulse" />
                    <span className="text-gray-300 font-tech text-sm">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Initiatives */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-cyber font-bold text-neon-blue mb-8">
            Key Initiatives Led
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {initiatives.map((initiative, index) => (
              <div
                key={initiative.name}
                className="group glass-effect rounded-xl p-6 border border-gray-600/30 hover:border-neon-blue/50 transition-all duration-300 hover:scale-105"
              >
                <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${initiative.color} text-white mb-4 animate-float`}>
                  {initiative.icon}
                </div>
                
                <h4 className="text-xl font-cyber font-bold text-white mb-2">
                  {initiative.name}
                </h4>
                
                <p className="text-gray-400 font-tech text-sm mb-4">
                  {initiative.description}
                </p>
                
                <div className="text-center">
                  <div className="text-2xl font-bold font-cyber text-neon-blue">
                    {initiative.participants}+
                  </div>
                  <div className="text-sm text-gray-400 font-tech">
                    Participants
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: '600+', label: 'Total Participants', color: 'neon-blue' },
            { number: '23+', label: 'Events Organized', color: 'neon-purple' },
            { number: '300%', label: 'Club Growth', color: 'neon-green' },
            { number: '150+', label: 'Questions Created', color: 'yellow-400' }
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
      
      {/* Floating Leadership Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full animate-float opacity-20 ${
              i % 4 === 0 ? 'bg-neon-blue' : 
              i % 4 === 1 ? 'bg-neon-purple' : 
              i % 4 === 2 ? 'bg-neon-green' :
              'bg-yellow-400'
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
