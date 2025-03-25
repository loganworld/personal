import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github, Send, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/lib/socialLinks';

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

const SocialButton = ({ href, icon, label, className = "" }: SocialButtonProps) => {
  const isExternal = href.startsWith('http') || href.startsWith('mailto');

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary/10 hover:bg-primary/20 transition-all duration-300 border border-primary/20 hover:border-primary/40 ${className}`}
    >
      {icon}
      <span>{label}</span>
      {isExternal && <ExternalLink size={14} />}
    </a>
  );
};

const HeroSection = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github size={18} />;
      case 'twitter':
        return <Twitter size={18} />;
      case 'mail':
        return <Mail size={18} />;
      case 'send':
        return <Send size={18} />;
      default:
        return null;
    }
  };

  return (
    <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/20 mt-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="content-container relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="inline-block px-4 py-1.5 text-sm rounded-full border border-primary/30 bg-primary/5 text-primary">
              About Me
            </span>
            <h1 className="text-6xl md:text-6xl font-medium ">
              Hello, I'm Logan Li
            </h1>
            <p className="text-2xl text-muted-foreground leading-relaxed">
              Software Engineer & Entrepreneur passionate about cutting-edge technology
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              {Object.entries(socialLinks).map(([key, link], index) => (
                <SocialButton
                  key={key}
                  href={link.url}
                  icon={getIcon(link.icon || key)}
                  label={link.name}
                  className={index === 0 ? "hover:scale-105 transition-transform" : ""}
                />
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img
                src="https://loganworld.github.io/personal/img/logan-li.jpg"
                alt="Logan Li"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContentSection = () => (
  <section className="py-8 bg-background">
    <div className="content-container">
      <div className="max-w-3xl mx-auto space-y-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-medium text-foreground">About Me</h2>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I've worked with multiple blockchain startups, DeFi projects, and AI-driven platforms, helping shape the future of decentralized applications.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I have contributed to and led several projects, including DeFiTankLand and Hogwarz Game, where I explored the intersection of blockchain, gaming, and decentralized finance. My expertise spans smart contracts, AI integration, and innovative product development in Web3.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm deeply interested in how AI and blockchain can revolutionize industries, solve real-world problems, and create new value. Through my writing, I share insights, opinions, and analysis on emerging AI technologies and their real-world applications with blockchain.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-medium text-foreground">Writing</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I publish regularly on Medium, where I cover topics including blockchain architecture,
            token economics, smart contract development, and decentralized governance. My goal is
            to bridge the gap between technical concepts and practical understanding, making these
            technologies accessible to everyone.
          </p>
          <Link to="/">
            <Button className="mt-6">
              Browse my articles
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-medium text-foreground">Get in Touch</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm always open to interesting conversations, collaboration opportunities, or
            speaking engagements related to blockchain technology, AI, and Web3.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ContentSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
