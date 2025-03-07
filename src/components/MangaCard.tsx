
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import type { MangaType } from '@/data/manga';

interface MangaCardProps {
  manga: MangaType;
  className?: string;
}

const MangaCard = ({ manga, className }: MangaCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link 
      to={`/manga/${manga.id}`} 
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg bg-manga-card border border-white/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-manga-accent1/30",
        className
      )}
    >
      <div className="aspect-[2/3] w-full overflow-hidden relative">
        <div 
          className={cn(
            "absolute inset-0 bg-manga-card/20 backdrop-blur-sm transition-opacity duration-500",
            imageLoaded ? "opacity-0" : "opacity-100"
          )}
        />
        <img
          src={manga.cover}
          alt={manga.title}
          className={cn(
            "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setImageLoaded(true)}
        />
        {manga.isNew && (
          <div className="absolute top-2 left-2 bg-manga-accent1 text-white text-xs font-medium px-2 py-1 rounded-md">
            New
          </div>
        )}
        {manga.isPopular && !manga.isNew && (
          <div className="absolute top-2 left-2 bg-manga-accent2 text-white text-xs font-medium px-2 py-1 rounded-md">
            Hot
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-manga-DEFAULT to-transparent h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-3 flex-1 flex flex-col">
        <h3 className="font-medium text-sm mb-1 line-clamp-1 text-white group-hover:text-manga-accent1 transition-colors">
          {manga.title}
        </h3>
        <p className="text-xs text-manga-muted mb-2">{manga.author}</p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xs font-medium text-manga-accent1">
            Ch. {manga.chapters.length}
          </span>
          <span className="text-xs bg-manga-accent1/10 text-manga-accent1 px-2 py-0.5 rounded-full">
            {manga.status}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MangaCard;
