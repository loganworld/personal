import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useMediumFeed } from '@/hooks/useMediumFeed';
import { ArrowUpRight } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { items, status } = useMediumFeed('loganworld');

  const interests = [
    { name: 'AI', color: 'text-blue-500' },
    { name: 'Blockchain', color: 'text-green-500' },
    { name: 'Gaming', color: 'text-purple-500' },
    { name: 'DeFi', color: 'text-orange-500' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container max-w-3xl mx-auto px-6 py-16">
        <div className="bg-secondary/30 rounded-lg p-6 mb-12 shadow-sm">
          <h2 className="text-2xl font-medium mb-4 text-primary">Interests</h2>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest) => (
              <span
                key={interest.name}
                className={`px-4 py-2 rounded-full bg-secondary/50 ${interest.color} font-medium hover:scale-105 transition-all duration-200`}
              >
                {interest.name}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {status === 'loading' && (
            <div className="text-muted-foreground">Loading posts...</div>
          )}
          
          {status === 'error' && (
            <div className="text-muted-foreground">Failed to load posts. Please try again later.</div>
          )}
          
          {status === 'success' && items.map((post) => (
            <article key={post.id} className="group">
              <a 
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-start py-4 hover:bg-secondary/20 -mx-4 px-4 rounded-lg transition-colors"
              >
                <div>
                  <time className="text-sm text-foreground/80">{post.publishDate}</time>
                  <h2 className="text-xl font-medium mt-1 text-[#77e1cd] hover:text-[#5bc4ae] transition-colors">
                    {post.title}
                  </h2>
                </div>
                <ArrowUpRight className="h-5 w-5 mt-1 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </article>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
