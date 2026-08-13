import { motion } from 'framer-motion';
import { SectionLabel } from './ui/SectionLabel';
import { skills, categoryLabels } from '../data/skills';

const getSkillBadge = (skill) => {
  const slug = skill.toLowerCase()
    .replace(/\.js$/i, 'js')
    .replace(/\s+/g, '')
    .replace(/[()]/g, '');
  
  return `https://img.shields.io/badge/-${encodeURIComponent(skill)}-111111?style=flat-square&logo=${encodeURIComponent(slug)}&logoColor=8B5CF6`;
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>Skills</SectionLabel>
          <h2 className="text-3xl font-bold text-white mt-4">My Tech Stack</h2>
        </div>

        <div className="space-y-16">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-accent mb-6">
                {categoryLabels[category]}
              </h3>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {skillList.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={item}
                    whileHover={{ scale: 1.02 }}
                    className="glow-card flex items-center justify-center p-4 rounded-lg bg-surface"
                  >
                    <img
                      src={getSkillBadge(skill)}
                      alt={skill}
                      className="h-6"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};