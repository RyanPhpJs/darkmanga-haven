
export interface MangaType {
  id: string;
  title: string;
  cover: string;
  author: string;
  description: string;
  genres: string[];
  status: 'Ongoing' | 'Completed' | 'Hiatus';
  rating: number;
  chapters: {
    id: string;
    number: number;
    title: string;
    pages: string[];
    releaseDate: string;
  }[];
  isFeatured?: boolean;
  isNew?: boolean;
  isPopular?: boolean;
}

export const mangaData: MangaType[] = [
  {
    id: '1',
    title: 'The Silent Blade',
    cover: 'https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWV8ZW58MHx8MHx8fDA%3D',
    author: 'Miyamoto Hiroshi',
    description: 'In a world where the art of swordsmanship is sacred, a young warrior sets out on a journey to become the greatest swordsman ever known. Along the way, he encounters powerful rivals, forms unexpected friendships, and uncovers the dark secrets of his own lineage.',
    genres: ['Action', 'Adventure', 'Fantasy', 'Martial Arts'],
    status: 'Ongoing',
    rating: 4.8,
    isFeatured: true,
    isPopular: true,
    chapters: [
      {
        id: '1-1',
        number: 1,
        title: 'The Beginning',
        releaseDate: '2023-01-15',
        pages: [
          'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFuaW1lfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1lfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFuaW1lfGVufDB8fDB8fHww'
        ]
      },
      {
        id: '1-2',
        number: 2,
        title: 'The Master',
        releaseDate: '2023-01-22',
        pages: [
          'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGFuaW1lfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1560972550-aba3456b5564?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGFuaW1lfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1637672313478-419cac292e6b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGFuaW1lfGVufDB8fDB8fHww'
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Celestial Academy',
    cover: 'https://images.unsplash.com/photo-1541562232579-512a21360020?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWV8ZW58MHx8MHx8fDA%3D',
    author: 'Nakamura Akira',
    description: 'When Yuuki is accepted into the prestigious Celestial Academy, he discovers that the school is actually a training ground for individuals with supernatural abilities. As he struggles to control his own mysterious powers, he becomes entangled in a centuries-old conflict that threatens the very fabric of reality.',
    genres: ['Fantasy', 'School Life', 'Supernatural', 'Drama'],
    status: 'Ongoing',
    rating: 4.6,
    isNew: true,
    chapters: [
      {
        id: '2-1',
        number: 1,
        title: 'Welcome to Celestial',
        releaseDate: '2023-02-01',
        pages: [
          'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGFuaW1lfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGFuaW1lfGVufDB8fDB8fHww'
        ]
      }
    ]
  },
  {
    id: '3',
    title: 'Cyber Nexus',
    cover: 'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGFuaW1lfGVufDB8fDB8fHww',
    author: 'Tanaka Rei',
    description: 'In the year 2089, the line between human and machine has blurred beyond recognition. When a series of mysterious cyber attacks threaten to collapse the global network, a group of elite hackers must navigate the treacherous digital landscape to find the culprit before it's too late.',
    genres: ['Sci-Fi', 'Action', 'Mystery', 'Cyberpunk'],
    status: 'Ongoing',
    rating: 4.7,
    isPopular: true,
    chapters: [
      {
        id: '3-1',
        number: 1,
        title: 'Digital Awakening',
        releaseDate: '2023-01-10',
        pages: [
          'https://images.unsplash.com/photo-1600854109241-81d39c207a66?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGFuaW1lfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFuaW1lfGVufDB8fDB8fHww'
        ]
      }
    ]
  },
  {
    id: '4',
    title: 'Spirit Hunters',
    cover: 'https://images.unsplash.com/photo-1583795128727-6ec3642408f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW5pbWUlMjBnaXJsfGVufDB8fDB8fHww',
    author: 'Kobayashi Yuna',
    description: 'When the boundary between the spirit world and human realm begins to weaken, an unlikely group of individuals discover they have the power to see and combat the malevolent spirits threatening humanity. As they hone their abilities, they uncover an ancient conspiracy that has been orchestrating supernatural events for centuries.',
    genres: ['Supernatural', 'Horror', 'Action', 'Mystery'],
    status: 'Completed',
    rating: 4.5,
    isFeatured: true,
    chapters: [
      {
        id: '4-1',
        number: 1,
        title: 'The Sight',
        releaseDate: '2022-12-05',
        pages: [
          'https://images.unsplash.com/photo-1608734265656-f035d3e7bcbf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFuaW1lJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1626548307930-deac221f87d9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1lJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D'
        ]
      }
    ]
  },
  {
    id: '5',
    title: 'Crimson Kingdom',
    cover: 'https://images.unsplash.com/photo-1579935110464-fcd041be62d0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGFuaW1lJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D',
    author: 'Yamamoto Kenji',
    description: 'In a land torn apart by war, a young prince must reclaim his usurped throne and restore peace to the Crimson Kingdom. With only a handful of loyal companions and an ancient family heirloom, he embarks on a perilous journey that will test not only his courage but also his understanding of what it truly means to be a ruler.',
    genres: ['Fantasy', 'Adventure', 'Drama', 'Political'],
    status: 'Hiatus',
    rating: 4.9,
    isNew: true,
    chapters: [
      {
        id: '5-1',
        number: 1,
        title: 'Fallen Crown',
        releaseDate: '2023-03-01',
        pages: [
          'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FtdXJhaXxlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1606513542745-97629752a13b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2FtdXJhaXxlbnwwfHwwfHx8MA%3D%3D'
        ]
      }
    ]
  },
  {
    id: '6',
    title: 'Ocean of Stars',
    cover: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHNwYWNlfGVufDB8fDB8fHww',
    author: 'Sato Haruki',
    description: 'When the first viable faster-than-light drive is created, humanity finally reaches the stars. But the cosmos is more dangerous and wondrous than anyone could have imagined. Following the crew of the exploration vessel Horizon, this epic saga chronicles humanity's first steps into the great unknown.',
    genres: ['Sci-Fi', 'Adventure', 'Drama', 'Space Opera'],
    status: 'Ongoing',
    rating: 4.6,
    isPopular: true,
    chapters: [
      {
        id: '6-1',
        number: 1,
        title: 'The Horizon',
        releaseDate: '2023-02-15',
        pages: [
          'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNwYWNlfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHNwYWNlfGVufDB8fDB8fHww'
        ]
      }
    ]
  }
];

export const getFeaturedManga = () => {
  return mangaData.filter(manga => manga.isFeatured);
};

export const getNewManga = () => {
  return mangaData.filter(manga => manga.isNew);
};

export const getPopularManga = () => {
  return mangaData.filter(manga => manga.isPopular);
};

export const getMangaById = (id: string) => {
  return mangaData.find(manga => manga.id === id);
};

export const getChapterById = (mangaId: string, chapterId: string) => {
  const manga = getMangaById(mangaId);
  if (!manga) return null;
  
  return manga.chapters.find(chapter => chapter.id === chapterId);
};
