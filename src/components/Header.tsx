import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 shadow-sm backdrop-blur-md' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-xl font-mono font-medium tracking-tighter transition-opacity hover:opacity-70"
        >
          Logan Li
        </Link>
        
        <div className="flex items-center space-x-8">
          <div className="space-x-8">
            <NavLink to="/" isActive={isActive('/')}>
              Blog
            </NavLink>
            <NavLink to="/about" isActive={isActive('/about')}>
              About
            </NavLink>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  isActive: boolean;
  children: React.ReactNode;
}

const NavLink = ({ to, isActive, children }: NavLinkProps) => (
  <Link
    to={to}
    className={`relative font-medium transition-colors ${
      isActive 
        ? 'text-primary' 
        : 'text-muted-foreground hover:text-primary'
    }`}
  >
    {children}
    {isActive && (
      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />
    )}
  </Link>
);

export default Header;
