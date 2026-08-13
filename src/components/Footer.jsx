import { GitFork, Link, MessageCircle } from 'lucide-react';

const socialLinks = [
  { icon: GitFork, href: 'https://github.com/yourname' },
  { icon: Link, href: 'https://linkedin.com/in/yourname' },
  { icon: MessageCircle, href: 'https://twitter.com/yourname' }
];

export const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#" className="font-mono text-lg text-accent font-bold">
          {'<YourName />'}
        </a>

        <p className="text-gray-500 text-sm text-center">
          Built with React + Tailwind • 2024
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-accent transition-colors duration-200"
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};