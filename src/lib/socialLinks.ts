interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

interface SocialLinks {
  [key: string]: SocialLink;
}

export const socialLinks: SocialLinks = {
  email: {
    name: 'Email',
    url: 'mailto:websolution0524@gmail.com',
    icon: 'mail'
  },
  telegram: {
    name: 'Telegram',
    url: 'https://t.me/defiworld_logan',
    icon: 'send'
  },
  github: {
    name: 'GitHub',
    url: 'https://github.com/loganworld',
    icon: 'github'
  },
  twitter: {
    name: 'Twitter',
    url: 'https://twitter.com/defitankland',
    icon: 'twitter'
  }
};

// Helper function to get all social links as an array
export const getSocialLinksArray = (): SocialLink[] => {
  return Object.values(socialLinks);
}; 