import React, { useState } from 'react';
import { ExternalLink, Github, Award, TrendingUp, Clock, Globe, Zap } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  tech: string[];
  achievements: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  metrics: {
    icon: React.ReactNode;
    label: string;
    value: string;
    color: string;
  }[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Sri Datta Electronics Marketing Hub',
    description: 'Modern e-commerce platform with 3D product previews, AI-powered search, and server-side rendering for optimal performance.',
    detailedDescription: 'Designed and developed a modern e-commerce platform for Sri Datta Electronics, showcasing products with dynamic filtering and seamless UX. Features TSX + Next.js for server-side rendering, interactive 3D product previews using Three.js, and AI-powered search with NLP-based intent recognition.',
    tech: ['TypeScript', 'Next.js', 'React', 'Three.js', 'TailwindCSS', 'Firebase', 'TensorFlow.js'],
    achievements: [
      '95% Lighthouse performance scores',
      'Interactive 3D Product Previews with zoom/rotate',
      'AI-powered search with NLP intent recognition',
      'Firebase-backed CMS with role-based access'
    ],
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=500',
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
    metrics: [
      { icon: <Award className="w-4 h-4" />, label: 'Performance', value: '95%', color: 'text-green-400' },
      { icon: <Zap className="w-4 h-4" />, label: '3D Models', value: 'Interactive', color: 'text-blue-400' },
      { icon: <TrendingUp className="w-4 h-4" />, label: 'AI Search', value: 'NLP-Based', color: 'text-purple-400' }
    ]
  },
  {
    id: 2,
    title: 'Animal Species Classification',
    description: 'Deep learning model classifying 50+ animal species with 94% accuracy, deployed as an interactive web application.',
    detailedDescription: 'Built a deep learning model to classify 50+ animal species with 94% accuracy, deployed as a web app. Features MobileNetV3 fine-tuning for edge deployment, real-time web demo with Streamlit, and curated dataset of 12,000+ images with OpenCV augmentation.',
    tech: ['Python', 'TensorFlow', 'CNN', 'MobileNetV3', 'Streamlit', 'OpenCV', 'Heroku'],
    achievements: [
      '94% classification accuracy across 50+ species',
      '40% model size reduction without accuracy loss',
      '12,000+ curated and augmented images',
      'Real-time web demo with instant predictions'
    ],
    image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=500',
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
    metrics: [
      { icon: <Award className="w-4 h-4" />, label: 'Accuracy', value: '94%', color: 'text-green-400' },
      { icon: <Globe className="w-4 h-4" />, label: 'Species', value: '50+', color: 'text-blue-400' },
      { icon: <TrendingUp className="w-4 h-4" />, label: 'Size Reduction', value: '40%', color: 'text-purple-400' }
    ]
  },
  {
    id: 3,
    title: 'Face Liveness Detection System',
    description: 'Advanced AI-powered system for real-time face liveness detection using computer vision and machine learning algorithms.',
    detailedDescription: 'Developed a sophisticated face liveness detection system using MobileNetV3 architecture with TensorFlow and ONNX.js for web deployment. The system achieves high accuracy while maintaining optimal performance through model optimization techniques.',
    tech: ['Python', 'TensorFlow', 'MobileNetV3', 'ONNX.js', 'OpenCV', 'JavaScript'],
    achievements: [
      '92% accuracy in liveness detection',
      '75% model size reduction through optimization',
      '40% latency improvement for real-time processing'
    ],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500',
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
    metrics: [
      { icon: <Award className="w-4 h-4" />, label: 'Accuracy', value: '92%', color: 'text-green-400' },
      { icon: <TrendingUp className="w-4 h-4" />, label: 'Size Reduction', value: '75%', color: 'text-blue-400' },
      { icon: <Clock className="w-4 h-4" />, label: 'Latency Improvement', value: '40%', color: 'text-purple-400' }
    ]
  },
  {
    id: 4,
    title: 'Exam Hall Allotment System',
    description: 'Automated system for efficient exam hall seat allocation using Java and Oracle SQL database management.',
    detailedDescription: 'Built a comprehensive exam hall management system that automates the entire seat allocation process. The system handles student data, exam schedules, and room capacity optimization to ensure fair and efficient seating arrangements.',
    tech: ['Java', 'AWT', 'Oracle SQL', 'Database Design', 'Algorithm Optimization'],
    achievements: [
      'Automated 500+ seat allocations',
      '60% reduction in manual effort',
      'Zero conflicts in seat assignments'
    ],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500',
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
    metrics: [
      { icon: <Award className="w-4 h-4" />, label: 'Seats Managed', value: '500+', color: 'text-green-400' },
      { icon: <TrendingUp className="w-4 h-4" />, label: 'Efficiency Gain', value: '60%', color: 'text-blue-400' },
      { icon: <Clock className="w-4 h-4" />, label: 'Process Time', value: '90% Faster', color: 'text-purple-400' }
    ]
  },
  {
    id: 5,
    title: 'Morse Code Translator',
    description: 'Real-time Morse code translation application with high accuracy and user-friendly interface.',
    detailedDescription: 'Developed a comprehensive Morse code translator that converts text to Morse code and vice versa. Features include audio playback, visual representation, and batch processing capabilities.',
    tech: ['Java', 'AWT', 'Algorithm Design', 'UI/UX Design'],
    achievements: [
      '95% translation accuracy',
      '100+ daily translations handled',
      'Real-time audio feedback'
    ],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500',
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
    metrics: [
      { icon: <Award className="w-4 h-4" />, label: 'Accuracy', value: '95%', color: 'text-green-400' },
      { icon: <TrendingUp className="w-4 h-4" />, label: 'Daily Usage', value: '100+', color: 'text-blue-400' },
      { icon: <Clock className="w-4 h-4" />, label: 'Response Time', value: '<1s', color: 'text-purple-400' }
    ]
  }
];

export const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-cyber font-bold text-neon-purple text-shadow-neon mb-4">
            Project Showcase
          </h2>
          <p className="text-xl text-gray-300 font-tech max-w-2xl mx-auto">
            Innovative solutions demonstrating expertise in AI/ML, system optimization, and full-stack development
          </p>
        </div>
        
        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(p => p.featured).map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl glass-effect border border-gray-600/30 hover:border-neon-purple/50 transition-all duration-500"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent" />
                
                {/* 3D Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-cyber font-bold text-neon-blue mb-3 group-hover:text-shadow-neon transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 font-tech mb-4 leading-relaxed">
                  {activeProject === project.id ? project.detailedDescription : project.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-tech font-semibold text-neon-green mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-gray-400 font-tech flex items-center">
                        <span className="w-1.5 h-1.5 bg-neon-green rounded-full mr-2"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center glass-effect rounded-lg p-3 border border-gray-700/30">
                      <div className={`flex items-center justify-center mb-1 ${metric.color}`}>
                        {metric.icon}
                      </div>
                      <div className={`text-lg font-bold font-cyber ${metric.color}`}>
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-400 font-tech">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-neon-blue/10 text-neon-blue text-sm font-tech rounded-full border border-neon-blue/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-4">
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-tech font-semibold rounded-lg hover:scale-105 transition-all duration-300 neon-border"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      className="flex items-center gap-2 px-4 py-2 glass-effect text-neon-green font-tech font-semibold rounded-lg border border-neon-green/50 hover:bg-neon-green/10 hover:scale-105 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
              
              {/* 3D Card Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
        
        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl glass-effect border border-gray-600/30 hover:border-neon-green/50 transition-all duration-500 hover:scale-105"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent" />
              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-cyber font-bold text-neon-green mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 font-tech text-sm mb-3">
                  {project.description}
                </p>

                {/* Mini Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {project.metrics.slice(0, 3).map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className={`text-sm font-bold font-cyber ${metric.color}`}>
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-500 font-tech">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-neon-green/10 text-neon-green text-xs font-tech rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <a 
                    href={project.demoUrl}
                    className="flex items-center gap-1 px-3 py-1 bg-neon-green/20 text-neon-green text-sm font-tech rounded hover:bg-neon-green/30 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center gap-1 px-3 py-1 glass-effect text-gray-300 text-sm font-tech rounded hover:text-white transition-colors"
                  >
                    <Github className="w-3 h-3" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
