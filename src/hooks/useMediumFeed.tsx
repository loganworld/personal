
import { useState, useEffect } from 'react';
import { BlogPost, MediumFeed } from '@/lib/types';
import { toast } from '@/hooks/use-toast';

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
        // In a real implementation, you would use a server to proxy these requests
        // or use a service like rss2json.com that provides CORS headers
        const rssUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`;
        
        const response = await fetch(rssUrl);
        const data = await response.json();
        
        if (data.status === 'ok') {
          const posts: BlogPost[] = data.items.map((item: any) => {
            // Extract thumbnail from content if available
            const imgRegex = /<img[^>]+src="([^">]+)"/;
            const imgMatch = item.content.match(imgRegex);
            const thumbnail = imgMatch ? imgMatch[1] : undefined;
            
            // Simple estimate for reading time
            const wordCount = item.content.replace(/<[^>]*>?/gm, '').split(/\s+/).length;
            const readingTime = `${Math.ceil(wordCount / 200)} min read`;

            return {
              id: item.guid || `post-${Math.random().toString(36).substring(2, 9)}`,
              title: item.title,
              author: item.author,
              publishDate: new Date(item.pubDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }),
              link: item.link,
              thumbnail,
              content: item.content,
              readingTime,
              categories: item.categories || [],
            };
          });

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
      subtitle: 'How blockchain is reshaping the internet',
      author: 'You',
      publishDate: 'May 15, 2023',
      link: '#',
      thumbnail: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2070&auto=format&fit=crop',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      readingTime: '6 min read',
      categories: ['Blockchain', 'Web3', 'Technology'],
    },
    {
      id: 'post-2',
      title: 'Smart Contract Security: Best Practices',
      subtitle: 'Protecting your blockchain applications',
      author: 'You',
      publishDate: 'April 22, 2023',
      link: '#',
      thumbnail: 'https://images.unsplash.com/photo-1644161486236-c6f0f3e3ac59?q=80&w=2072&auto=format&fit=crop',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      readingTime: '8 min read',
      categories: ['Security', 'Smart Contracts', 'Ethereum'],
    },
    {
      id: 'post-3',
      title: 'Exploring Layer 2 Scaling Solutions',
      subtitle: 'Making blockchain more accessible',
      author: 'You',
      publishDate: 'March 10, 2023',
      link: '#',
      thumbnail: 'https://images.unsplash.com/photo-1626162953093-771c99420529?q=80&w=2070&auto=format&fit=crop',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      readingTime: '5 min read',
      categories: ['Scaling', 'Layer 2', 'Blockchain'],
    },
    {
      id: 'post-4',
      title: 'The Economics of Token Design',
      subtitle: 'Creating sustainable token economies',
      author: 'You',
      publishDate: 'February 5, 2023',
      link: '#',
      thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=2097&auto=format&fit=crop',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      readingTime: '7 min read',
      categories: ['Tokenomics', 'Economics', 'Cryptocurrency'],
    },
    {
      id: 'post-5',
      title: 'Implementing Zero-Knowledge Proofs',
      subtitle: 'Privacy and scalability in one solution',
      author: 'You',
      publishDate: 'January 18, 2023',
      link: '#',
      thumbnail: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=2127&auto=format&fit=crop',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      readingTime: '9 min read',
      categories: ['Privacy', 'ZK-Proofs', 'Cryptography'],
    },
  ];
}
