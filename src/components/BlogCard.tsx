
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '@/lib/types';
import { useInView } from '@/lib/animations';
import { ArrowUpRight } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { threshold: 0.1 });
  
  return (
    <div
      ref={cardRef}
      className={`group border border-border rounded-lg overflow-hidden transition-all duration-500 opacity-0 translate-y-4 ${
        isInView ? 'opacity-100 translate-y-0' : ''
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Link to={`/blog/${post.id}`} className="block">
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          {post.thumbnail ? (
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-muted">
              <span className="text-muted-foreground">No image</span>
            </div>
          )}
          
          {post.categories && post.categories.length > 0 && (
            <div className="absolute top-4 left-4">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm rounded-full">
                {post.categories[0]}
              </span>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex items-center text-sm text-muted-foreground mb-3">
            <span>{post.publishDate}</span>
            <span className="mx-2">•</span>
            <span>{post.readingTime}</span>
          </div>
          
          <h3 className="text-xl font-medium leading-tight mb-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          
          {post.subtitle && (
            <p className="text-muted-foreground mb-4">{post.subtitle}</p>
          )}
          
          <div className="flex items-center text-sm font-medium text-primary">
            Read post
            <ArrowUpRight size={16} className="ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
