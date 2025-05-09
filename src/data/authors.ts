// Author profiles with detailed information
export type Author = {
  name: string;
  bio: string;
  imageUrl: string;
  twitterHandle?: string;
  linkedinProfile?: string;
  specialization?: string;
};

const authors: Record<string, Author> = {
  'Alex Morgan': {
    name: 'Alex Morgan',
    bio: 'Content marketing expert with 10+ years of experience helping businesses leverage AI tools to scale content production while maintaining quality.',
    imageUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000',
    twitterHandle: 'alexmorganai',
    linkedinProfile: 'alexmorganai',
    specialization: 'AI Content Strategy'
  },
  'Sarah Johnson': {
    name: 'Sarah Johnson',
    bio: 'SEO specialist and content strategist focused on using AI tools to create content that ranks well and converts. Former Google content partnerships manager.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000',
    twitterHandle: 'sarahjseo',
    linkedinProfile: 'sarahjohnsonai',
    specialization: 'SEO-Optimized AI Content'
  },
  'David Chen': {
    name: 'David Chen',
    bio: 'Digital artist and AI researcher exploring the intersection of human creativity and artificial intelligence. Consultant for major AI image generation platforms.',
    imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000',
    twitterHandle: 'davidchenai',
    linkedinProfile: 'davidchenartai',
    specialization: 'AI Image Generation'
  },
  'Emily Porter': {
    name: 'Emily Porter',
    bio: 'Digital marketing consultant specializing in content monetization strategies for creators and businesses using AI tools to scale their operations.',
    imageUrl: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=1000',
    twitterHandle: 'emilyporterdigital',
    linkedinProfile: 'emily-porter-digital',
    specialization: 'Content Monetization'
  },
  'James Wilson': {
    name: 'James Wilson',
    bio: 'Productivity expert and systems thinker. Helps content teams build efficient workflows that combine AI tools with human creativity for maximum output.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000',
    twitterHandle: 'jameswproductivity',
    linkedinProfile: 'jameswilsonproductivity',
    specialization: 'AI Workflow Optimization'
  },
  'Lisa Wong': {
    name: 'Lisa Wong',
    bio: 'Video production specialist and AI enthusiast. Former YouTube content strategist now helping creators leverage AI tools to produce more engaging video content.',
    imageUrl: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=1000',
    twitterHandle: 'lisawongvideo',
    linkedinProfile: 'lisa-wong-video',
    specialization: 'AI Video Production'
  },
  'Michael Brown': {
    name: 'Michael Brown',
    bio: 'Ethics researcher and content creator focused on responsible AI use in creative industries. Consultant for tech companies on ethical content guidelines.',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000',
    twitterHandle: 'michaelbethics',
    linkedinProfile: 'michael-brown-ai-ethics',
    specialization: 'AI Ethics & Content'
  },
  'Rachel Green': {
    name: 'Rachel Green',
    bio: 'Writing coach and former editor helping authors and content creators maintain their authentic voice while leveraging AI tools to enhance productivity.',
    imageUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1000',
    twitterHandle: 'rachelgwriter',
    linkedinProfile: 'rachel-green-writing',
    specialization: 'AI & Creative Writing'
  },
  'Thomas Wright': {
    name: 'Thomas Wright',
    bio: 'Digital transformation consultant and futurist tracking emerging trends in AI content creation and their impact on marketing strategies.',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000',
    twitterHandle: 'thomaswfuturist',
    linkedinProfile: 'thomas-wright-futurist',
    specialization: 'AI Content Trends'
  },
  'Jamie Scott': {
    name: 'Jamie Scott',
    bio: 'Audio producer and podcast consultant helping creators use AI tools to enhance audio quality, streamline editing, and scale podcast production.',
    imageUrl: 'https://images.unsplash.com/photo-1603575448878-868a20723f5d?q=80&w=1000',
    twitterHandle: 'jamiescottaudio',
    linkedinProfile: 'jamie-scott-audio',
    specialization: 'AI Audio Production'
  },
  'Jennifer Lee, Esq.': {
    name: 'Jennifer Lee, Esq.',
    bio: 'Intellectual property attorney specializing in AI-generated content, copyright law, and regulatory compliance for creators and businesses.',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000',
    twitterHandle: 'jenniferleeip',
    linkedinProfile: 'jennifer-lee-ip-law',
    specialization: 'AI Content Law'
  }
};

export default authors;
