
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { MangaType } from '@/data/manga';

interface FeaturedMangaProps {
  manga: MangaType;
}

const FeaturedManga = ({ manga }: FeaturedMangaProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative h-[500px] overflow-hidden rounded-xl">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        <div className={`transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <img
            src={manga.cover}
            alt={manga.title}
            className="h-full w-full object-cover"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className={`absolute inset-0 bg-manga-card/50 backdrop-blur-sm ${imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-manga-DEFAULT via-manga-DEFAULT/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 animate-fade-up">
        <div className="max-w-2xl">
          <div className="bg-manga-accent1/20 text-manga-accent1 text-xs font-medium inline-block px-2 py-1 rounded-md mb-3">
            Featured
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">{manga.title}</h2>
          <p className="text-sm md:text-base text-manga-foreground/80 mb-4 line-clamp-3">
            {manga.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {manga.genres.map((genre) => (
              <span 
                key={genre} 
                className="text-xs bg-manga-card px-3 py-1 rounded-full text-manga-foreground/70"
              >
                {genre}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to={`/manga/${manga.id}`}>
              <Button className="bg-manga-accent1 hover:bg-manga-accent1/90 text-white">
                View Details
              </Button>
            </Link>
            <Link to={`/manga/${manga.id}/chapter/${manga.chapters[0].id}`}>
              <Button variant="outline" className="border-white/10 hover:bg-manga-card">
                Start Reading <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedManga;
