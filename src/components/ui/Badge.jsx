import { motion } from 'framer-motion';

export const Badge = ({ children, className = '' }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm border border-border bg-surface ${className}`}
    >
      {children}
    </motion.span>
  );
};

export const GreenBadge = ({ children, className = '' }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm border border-green/30 bg-green/10 text-green ${className}`}
    >
      <span className="w-2 h-2 bg-green rounded-full animate-pulse"></span>
      {children}
    </motion.span>
  );
};