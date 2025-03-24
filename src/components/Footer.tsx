
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Rss } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-lg font-mono font-medium mb-2">yourname.eth</div>
            <p className="text-muted-foreground text-sm">
              Writing about blockchain, web3, and decentralized systems.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <SocialLink href="https://github.com/yourusername" icon={<Github size={18} />} label="GitHub" />
            <SocialLink href="https://twitter.com/yourusername" icon={<Twitter size={18} />} label="Twitter" />
            <SocialLink href="https://linkedin.com/in/yourusername" icon={<Linkedin size={18} />} label="LinkedIn" />
            <SocialLink href="https://medium.com/@yourusername" icon={<Rss size={18} />} label="RSS Feed" />
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div>© {currentYear} Your Name. All rights reserved.</div>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/" className="hover:text-primary transition-colors">Blog</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
    aria-label={label}
  >
    <span className="text-primary">{icon}</span>
  </a>
);

export default Footer;
