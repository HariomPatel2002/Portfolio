import { motion } from 'framer-motion';

export const Button = ({ children, variant = 'primary', href, className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200';
  
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent/90 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]',
    secondary: 'border border-border bg-surface text-white hover:border-accent hover:bg-accent/10',
    ghost: 'text-gray-400 hover:text-white hover:bg-surface'
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};