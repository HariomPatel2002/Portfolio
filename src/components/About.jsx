import { motion } from 'framer-motion';
import { Coffee, Music, MapPin, Rocket } from 'lucide-react';
import { SectionLabel } from './ui/SectionLabel';

const stats = [
  { value: '2', label: 'Projects' },
  { value: '5+', label: 'Technologies' },
  { value: '100%', label: 'Commitment' }
];

const funFacts = [
  { icon: Coffee, text: 'Coffee-driven developer' },
  { icon: Music, text: 'Built a music streaming app' },
  { icon: MapPin, text: 'Based in India' },
  { icon: Rocket, text: 'Open to remote work' }
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-accent/30 shadow-[0_0_30px_rgba(139,92,246,0.15)]">
              <div className="aspect-square bg-surface-2 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-surface border border-border rounded-lg px-4 py-2">
              <span className="text-accent font-mono text-sm">2+ Projects Built</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>About Me</SectionLabel>
            
            <h2 className="text-3xl font-bold text-white mt-4 mb-6">
              Passionate about building things that matter
            </h2>

            <div className="space-y-4 text-gray-400">
              <p>
                I'm a Full Stack Developer with hands-on experience building production-ready web applications from scratch.
              </p>
              <p>
                I've built Musify — a full Spotify-like music streaming platform with Node.js, React and MongoDB. And CafeManager — a complete café management system with Node.js, Mongoose and Angular.
              </p>
              <p>
                I love clean code, great UX and solving real problems.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10 py-6 border-y border-border">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {funFacts.map((fact, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-400">
                  <fact.icon size={18} className="text-accent" />
                  <span className="text-sm">{fact.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};