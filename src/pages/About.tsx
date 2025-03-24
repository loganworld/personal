
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  useEffect(() => {
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="content-container">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm rounded-full border border-border bg-secondary/50 slide-up">
              About Me
            </span>
            
            <h1 className="text-4xl md:text-5xl font-medium mb-8 slide-up animation-delay-100">
              Hello, I'm Your Name. <br />
              Blockchain researcher & writer.
            </h1>
            
            <div className="prose prose-slate max-w-none slide-up animation-delay-200">
              <p className="text-xl leading-relaxed mb-6">
                I'm a blockchain researcher, writer, and enthusiast focused on the intersection of
                cryptography, distributed systems, and economic incentives. I write regularly
                about Web3, decentralized technologies, and the future of the internet.
              </p>
              
              <p className="mb-6">
                My work primarily focuses on explaining complex blockchain concepts in accessible
                ways, exploring the potential of Web3 technologies, and analyzing emerging trends
                in the decentralized ecosystem.
              </p>
              
              <p className="mb-6">
                Previously, I worked at [Company Name] where I [brief description of previous work].
                I hold a degree in [Field] from [University].
              </p>
              
              <h2 className="text-2xl font-medium mt-12 mb-4">Writing</h2>
              <p className="mb-6">
                I publish regularly on Medium, where I cover topics including blockchain architecture,
                token economics, smart contract development, and decentralized governance. My goal is
                to bridge the gap between technical concepts and practical understanding, making these
                technologies accessible to everyone.
              </p>
              
              <div className="flex my-8">
                <Link to="/">
                  <Button>
                    Browse my articles
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
              
              <h2 className="text-2xl font-medium mt-12 mb-4">Get in Touch</h2>
              <p className="mb-6">
                I'm always open to interesting conversations, collaboration opportunities, or
                speaking engagements related to blockchain technology and Web3.
              </p>
              
              <div className="flex flex-wrap gap-4 my-8">
                <SocialButton
                  href="mailto:your.email@example.com"
                  icon={<Mail size={18} />}
                  label="Email"
                />
                <SocialButton
                  href="https://twitter.com/yourusername"
                  icon={<Twitter size={18} />}
                  label="Twitter"
                />
                <SocialButton
                  href="https://github.com/yourusername"
                  icon={<Github size={18} />}
                  label="GitHub"
                />
                <SocialButton
                  href="https://linkedin.com/in/yourusername"
                  icon={<Linkedin size={18} />}
                  label="LinkedIn"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialButton = ({ href, icon, label }: SocialButtonProps) => {
  const isExternal = href.startsWith('http') || href.startsWith('mailto');
  
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
    >
      {icon}
      <span>{label}</span>
      {isExternal && <ExternalLink size={14} />}
    </a>
  );
};

export default About;
