
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useMediumFeed } from '@/hooks/useMediumFeed';
import { BlogPost as PostType } from '@/lib/types';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

const Post = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { items, status } = useMediumFeed('yourusername');
  const [post, setPost] = useState<PostType | null>(null);
  
  useEffect(() => {
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
    
    if (status === 'success' && id) {
      const foundPost = items.find((item) => item.id === id);
      
      if (foundPost) {
        setPost(foundPost);
      } else {
        // If post not found, redirect to homepage
        navigate('/', { replace: true });
      }
    }
  }, [id, items, status, navigate]);
  
  if (status === 'loading' || !post) {
    return <PostSkeleton />;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <article className="content-container">
          <div className="mb-10">
            <Link to="/">
              <Button variant="ghost" className="hover:bg-secondary/50 mb-8">
                <ArrowLeft size={16} className="mr-2" />
                Back to all posts
              </Button>
            </Link>
            
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.categories.map((category) => (
                  <span
                    key={category}
                    className="inline-block px-3 py-1 text-xs font-medium bg-secondary rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 slide-up">
              {post.title}
            </h1>
            
            {post.subtitle && (
              <p className="text-xl text-muted-foreground mb-6 slide-up animation-delay-100">
                {post.subtitle}
              </p>
            )}
            
            <div className="flex items-center text-sm text-muted-foreground mb-8 slide-up animation-delay-200">
              <div className="flex items-center mr-4">
                <Calendar size={16} className="mr-1" />
                <span>{post.publishDate}</span>
              </div>
              
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                <span>{post.readingTime}</span>
              </div>
            </div>
            
            {post.thumbnail && (
              <div className="aspect-video w-full mb-10 rounded-lg overflow-hidden bg-muted slide-up animation-delay-300">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
          
          <div className="blog-content slide-up animation-delay-400">
            {/* Render the content from Medium */}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            
            {/* Original article link */}
            <div className="mt-10 pt-6 border-t border-border">
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline"
              >
                Read the original article on Medium
                <ArrowLeft size={16} className="ml-2 rotate-180" />
              </a>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

const PostSkeleton = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    
    <main className="flex-grow pt-24 pb-16">
      <div className="content-container">
        <Skeleton className="h-10 w-32 mb-8" />
        <Skeleton className="h-5 w-20 mb-6" />
        <Skeleton className="h-12 w-full mb-4" />
        <Skeleton className="h-12 w-3/4 mb-6" />
        <Skeleton className="h-5 w-48 mb-8" />
        
        <Skeleton className="aspect-video w-full mb-10 rounded-lg" />
        
        <div className="space-y-4">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-5/6" />
        </div>
      </div>
    </main>
    
    <Footer />
  </div>
);

export default Post;
