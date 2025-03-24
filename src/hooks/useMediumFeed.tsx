import { useState, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';

interface BlogPost {
  id: string;
  title: string;
  publishDate: string;
  link: string;
}

interface MediumFeed {
  items: BlogPost[];
  status: 'loading' | 'success' | 'error';
  error: string | null;
}

// This hook fetches blog posts from a Medium RSS feed via a proxy service
export function useMediumFeed(username: string) {
  const [feedData, setFeedData] = useState<MediumFeed>({
    items: [],
    status: 'loading',
    error: null,
  });

  useEffect(() => {
    const fetchMediumFeed = async () => {
      try {
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`);
        const data = await response.json();
        
        if (data.status === 'ok') {
          const posts: BlogPost[] = data.items.map((item: any) => ({
            id: item.guid || `post-${Math.random().toString(36).substring(2, 9)}`,
            title: item.title,
            publishDate: new Date(item.pubDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }),
            link: item.link,
          }));

          setFeedData({
            items: posts,
            status: 'success',
            error: null,
          });
        } else {
          throw new Error('Failed to fetch RSS feed');
        }
      } catch (error) {
        console.error('Error fetching Medium feed:', error);
        setFeedData({
          items: getMockPosts(),
          status: 'error',
          error: 'Failed to load blog posts. Using mock data instead.',
        });
        toast({
          title: "Couldn't fetch latest blog posts",
          description: "Using placeholder content instead. Please try again later.",
          variant: "destructive",
        });
      }
    };

    fetchMediumFeed();
  }, [username]);

  return feedData;
}

// Mock posts for development and as fallback
function getMockPosts(): BlogPost[] {
  return [
    {
      id: 'post-1',
      title: 'The Future of Web3 and Decentralized Applications',
      publishDate: 'May 15, 2023',
      link: '#',
    },
    {
      id: 'post-2',
      title: 'Smart Contract Security: Best Practices',
      publishDate: 'April 22, 2023',
      link: '#',
    },
    {
      id: 'post-3',
      title: 'Exploring Layer 2 Scaling Solutions',
      publishDate: 'March 10, 2023',
      link: '#',
    },
  ];
}
