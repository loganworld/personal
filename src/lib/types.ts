
export interface BlogPost {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  publishDate: string;
  link: string;
  thumbnail?: string;
  content: string;
  readingTime: string;
  categories: string[];
}

export interface MediumFeed {
  items: BlogPost[];
  status: 'loading' | 'success' | 'error';
  error: string | null;
}
