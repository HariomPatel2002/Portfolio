import { motion } from 'framer-motion';
import { Download, ArrowDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { GreenBadge } from './ui/Badge';
import { Button } from './ui/Button';

const techPills = ['React', 'Angular', 'Node.js', 'MongoDB', 'Tailwind'];

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Animated gradient blobs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500 rounded-full blur-3xl opacity-20"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20"
      />
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"
      />

      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(#222222 1px, transparent 1px), linear-gradient(90deg, #222222 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <GreenBadge>Available for work</GreenBadge>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-9xl font-bold tracking-tighter text-white"
          >
            Full Stack
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-9xl font-bold tracking-tighter bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent"
          >
            Developer
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl md:text-3xl mt-6"
        >
          <TypeAnimation
            sequence={[
              'Full Stack Developer', 2000,
              'React & Angular Engineer', 2000,
              'Node.js Backend Developer', 2000,
              'AWS Cloud Enthusiast', 2000,
              'Problem Solver', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-violet-400"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mt-8"
        >
          {techPills.map((tech, index) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full text-sm border border-border bg-surface/50 text-gray-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <Button variant="primary" href="#projects">
            View Projects
          </Button>
          <Button variant="secondary" href="/cv.pdf" download>
            <Download size={18} />
            Download CV
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-gray-500"
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};