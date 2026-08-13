import { motion } from 'framer-motion';
import { SectionLabel } from './ui/SectionLabel';
import { timeline } from '../data/timeline';

export const Experience = () => {
  return (
    <section className="py-24 px-4 bg-surface/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>Journey</SectionLabel>
          <h2 className="text-3xl font-bold text-white mt-4">My Path So Far</h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 md:pl-0 md:flex md:items-start"
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                  <motion.div
                    whileHover={{ borderColor: '#8B5CF6' }}
                    className="bg-surface border border-border rounded-lg p-6 transition-all duration-200"
                  >
                    <div className="flex flex-col md:items-end gap-2 mb-4">
                      <h3 className="text-white font-bold">{item.company}</h3>
                      <p className="text-accent">{item.role}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500 text-sm">{item.period}</span>
                        {item.isCurrent && (
                          <span className="px-2 py-0.5 rounded-full text-xs bg-green/10 text-green border border-green/30 animate-pulse">
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {item.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400 text-sm md:justify-end">
                          <span className="text-accent mt-0.5 shrink-0">✦</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {item.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 rounded text-xs font-mono text-gray-400 border border-border">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <div className={`absolute left-0 md:left-1/2 top-6 md:top-6 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-background ${
                  item.isCurrent ? 'bg-green animate-pulse' : 'bg-accent'
                }`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};