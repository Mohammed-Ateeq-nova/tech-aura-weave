import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Face Liveness Detection System',
    description: 'Advanced AI-powered system for real-time face liveness detection using computer vision and machine learning algorithms.',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'React', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500',
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
    tech: ['Next.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500',
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 3,
    title: 'Smart Analytics Dashboard',
    description: 'Real-time data visualization dashboard with predictive analytics and machine learning insights.',
    tech: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500',
    demoUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: 4,
    title: 'Neural Network Visualizer',
    description: 'Interactive tool for visualizing and understanding neural network architectures and training processes.',
    tech: ['React', 'Three.js', 'Python', 'TensorFlow'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500',
    demoUrl: '#',
    githubUrl: '#',
    featured: false
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
            Innovative solutions powered by cutting-edge technology
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
                  {project.description}
                </p>
                
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
                      Code
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tech.slice(0, 3).map((tech) => (
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
