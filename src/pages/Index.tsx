
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PostList from '@/components/BlogList';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  
  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 slide-down animation-delay-100">
            <span className="inline-block px-4 py-2 mb-4 text-sm rounded-full border border-border bg-secondary/50">
              Welcome to my personal website
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 slide-down animation-delay-200">
            Thoughts on Blockchain,<br />Web3 &amp; Decentralization
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 slide-up animation-delay-300">
            I write about technology, crypto economics, and the future of the internet.
            Here you'll find all my articles from Medium and other platforms.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up animation-delay-400">
            <button 
              onClick={scrollToContent}
              className="inline-flex items-center justify-center hover:text-primary transition-colors"
              aria-label="Scroll to content"
            >
              <span className="mr-2">Explore my posts</span>
              <ArrowDown className="animate-bounce" size={20} />
            </button>
            
            <Link to="/temp-post" className="inline-flex items-center justify-center text-primary hover:underline">
              <span>Read my latest post</span>
              <ArrowUpRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Posts Content */}
      <section 
        ref={contentRef} 
        className="py-20 bg-secondary/20"
      >
        <div className="max-w-5xl mx-auto mb-12 px-6 text-center">
          <h2 className="text-3xl font-medium mb-4">Latest Posts</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Discover my latest thoughts and insights on blockchain technology, 
            decentralized systems, and the future of the web.
          </p>
          <div className="mt-6">
            <Link to="/temp-post">
              <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                View temporary post
              </Button>
            </Link>
          </div>
        </div>
        
        <PostList username="yourusername" />
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
