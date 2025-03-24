
import { useState } from 'react';
import { useMediumFeed } from '@/hooks/useMediumFeed';
import BlogCard from './BlogCard';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { FilterX, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface BlogListProps {
  username: string;
}

const BlogList = ({ username }: BlogListProps) => {
  const { items, status, error } = useMediumFeed(username);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Get unique categories from all blog posts
  const allCategories = items
    .flatMap(post => post.categories)
    .filter((category, index, array) => array.indexOf(category) === index);
  
  const filteredPosts = items.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.subtitle || '').toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === null || 
      post.categories.includes(selectedCategory);
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="mb-10">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search posts..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className="h-8"
            >
              All
            </Button>
            
            {allCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="h-8"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        {(searchQuery || selectedCategory) && (
          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Found {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory(null);
              }}
              className="h-8 text-muted-foreground"
            >
              <FilterX size={16} className="mr-1" />
              Clear filters
            </Button>
          </div>
        )}
      </div>
      
      {status === 'loading' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(4)].map((_, i) => (
            <BlogCardSkeleton key={i} />
          ))}
        </div>
      )}
      
      {status === 'error' && error && (
        <div className="text-center py-10">
          <p className="text-muted-foreground">{error}</p>
        </div>
      )}
      
      {status === 'success' && filteredPosts.length === 0 && (
        <div className="text-center py-10">
          <p className="text-xl font-medium mb-2">No posts found</p>
          <p className="text-muted-foreground">
            Try adjusting your search or filter to find what you're looking for.
          </p>
        </div>
      )}
      
      {status === 'success' && filteredPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

const BlogCardSkeleton = () => (
  <div className="border border-border rounded-lg overflow-hidden">
    <Skeleton className="aspect-[16/9] w-full" />
    <div className="p-6">
      <Skeleton className="h-4 w-24 mb-3" />
      <Skeleton className="h-7 w-full mb-2" />
      <Skeleton className="h-7 w-3/4 mb-4" />
      <Skeleton className="h-4 w-20" />
    </div>
  </div>
);

export default BlogList;
