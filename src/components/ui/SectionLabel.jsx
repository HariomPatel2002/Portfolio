import { motion } from 'framer-motion';

export const SectionLabel = ({ children }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-accent text-sm font-mono tracking-[0.2em] uppercase"
    >
      {children}
    </motion.span>
  );
};