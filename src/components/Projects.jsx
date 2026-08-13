import { motion } from 'framer-motion';
import { ExternalLink, GitFork } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { SectionLabel } from './ui/SectionLabel';
import { Button } from './ui/Button';
import { projects } from '../data/projects';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      glareEnable={true}
      glareMaxOpacity={0.1}
      glareColor="#8B5CF6"
      glarePosition="all"
      scale={1.02}
      transitionSpeed={400}
      className="glow-card group rounded-2xl bg-surface overflow-hidden"
    >
      <div className="aspect-video bg-surface-2 overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
            {project.id === 'musify' ? '🎵' : '☕'}
          </div>
        </div>
      </div>

      <div className="p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs bg-accent/10 text-accent border border-accent/30 mb-4">
          {project.badge}
        </span>

        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.subtitle}</p>

        <p className="text-gray-400 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techTags.map((tag) => (
            <span key={tag} className="px-2 py-1 rounded text-xs font-mono bg-green/10 text-green border border-green/30">
              {tag}
            </span>
          ))}
        </div>

        <ul className="space-y-2 mb-6">
          {project.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
              <span className="text-accent mt-1">✦</span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <Button variant="secondary" href={project.liveDemo} className="flex-1">
            <ExternalLink size={16} />
            Live Demo
          </Button>
          <Button variant="ghost" href={project.github} className="flex-1">
            <GitFork size={16} />
            GitHub
          </Button>
        </div>
      </div>
    </Tilt>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>Projects</SectionLabel>
          <h2 className="text-3xl font-bold text-white mt-4">Things I've Built</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};