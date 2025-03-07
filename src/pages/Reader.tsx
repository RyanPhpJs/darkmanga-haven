
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { getMangaById, getChapterById } from '@/data/manga';
import { cn } from '@/lib/utils';

const Reader = () => {
  const { mangaId, chapterId } = useParams<{ mangaId: string; chapterId: string }>();
  const manga = getMangaById(mangaId || '');
  const chapter = manga ? getChapterById(mangaId || '', chapterId || '') : null;
  const [imageLoaded, setImageLoaded] = useState<Record<number, boolean>>({});
  const [showControls, setShowControls] = useState(true);
  const [controlTimeout, setControlTimeout] = useState<number | null>(null);
  const navigate = useNavigate();

  // Find chapter index to handle navigation
  const chapterIndex = manga?.chapters.findIndex(ch => ch.id === chapterId) || 0;
  const prevChapter = chapterIndex > 0 ? manga?.chapters[chapterIndex - 1] : null;
  const nextChapter = manga?.chapters && chapterIndex < manga.chapters.length - 1 
    ? manga.chapters[chapterIndex + 1] 
    : null;

  useEffect(() => {
    // Scroll to top on component mount and chapter change
    window.scrollTo(0, 0);
    
    // Reset loaded state when chapter changes
    setImageLoaded({});
  }, [chapterId]);

  useEffect(() => {
    // Auto-hide controls after 3 seconds of inactivity
    const handleMouseMove = () => {
      setShowControls(true);
      
      if (controlTimeout) {
        window.clearTimeout(controlTimeout);
      }
      
      const timeoutId = window.setTimeout(() => {
        setShowControls(false);
      }, 3000);
      
      setControlTimeout(timeoutId as unknown as number);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initial timeout to hide controls
    const initialTimeout = window.setTimeout(() => {
      setShowControls(false);
    }, 3000);
    
    setControlTimeout(initialTimeout as unknown as number);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (controlTimeout) {
        window.clearTimeout(controlTimeout);
      }
    };
  }, [controlTimeout]);

  // Handle image load
  const handleImageLoad = (index: number) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  };

  if (!manga || !chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-manga-DEFAULT text-manga-foreground">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Chapter Not Found</h1>
          <Link to="/" className="text-manga-accent1 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-manga-DEFAULT text-manga-foreground">
      {/* Top Navigation Bar */}
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        showControls ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      )}>
        <div className="bg-manga-DEFAULT/90 backdrop-blur-lg shadow-lg py-4 px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                to={`/manga/${manga.id}`} 
                className="p-2 rounded-full hover:bg-manga-hover transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="font-medium truncate max-w-[200px] md:max-w-md">
                  {manga.title}
                </h1>
                <p className="text-xs text-manga-muted">
                  Chapter {chapter.number}: {chapter.title}
                </p>
              </div>
            </div>
            <Link 
              to={`/manga/${manga.id}`} 
              className="p-2 rounded-full hover:bg-manga-hover transition-colors md:hidden"
            >
              <X className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Reader Content */}
      <main className="pt-16 pb-16 px-0 md:px-4 max-w-4xl mx-auto">
        <div className="space-y-4">
          {chapter.pages.map((page, index) => (
            <div key={index} className="relative">
              <div className={cn(
                "transition-opacity duration-500",
                imageLoaded[index] ? "opacity-0" : "opacity-100"
              )}>
                <div className="h-[500px] w-full bg-manga-card/50 animate-pulse rounded-lg"></div>
              </div>
              <img
                src={page}
                alt={`Page ${index + 1}`}
                className={cn(
                  "w-full object-contain transition-opacity duration-500",
                  imageLoaded[index] ? "opacity-100" : "opacity-0"
                )}
                onLoad={() => handleImageLoad(index)}
              />
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Navigation Controls */}
      <div className={cn(
        "fixed bottom-0 left-0 right-0 z-50 transition-all duration-300",
        showControls ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
      )}>
        <div className="bg-manga-DEFAULT/90 backdrop-blur-lg shadow-lg py-4 px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <button
              onClick={() => prevChapter && navigate(`/manga/${manga.id}/chapter/${prevChapter.id}`)}
              disabled={!prevChapter}
              className={cn(
                "flex items-center space-x-2 p-2 rounded-lg transition-colors",
                prevChapter 
                  ? "hover:bg-manga-hover text-manga-foreground" 
                  : "text-manga-muted cursor-not-allowed"
              )}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="hidden md:inline">Previous Chapter</span>
            </button>

            <div className="text-center">
              <span className="text-sm">
                Page <span className="font-medium">{chapter.pages.length}</span> of <span className="font-medium">{chapter.pages.length}</span>
              </span>
            </div>

            <button
              onClick={() => nextChapter && navigate(`/manga/${manga.id}/chapter/${nextChapter.id}`)}
              disabled={!nextChapter}
              className={cn(
                "flex items-center space-x-2 p-2 rounded-lg transition-colors",
                nextChapter 
                  ? "hover:bg-manga-hover text-manga-foreground" 
                  : "text-manga-muted cursor-not-allowed"
              )}
            >
              <span className="hidden md:inline">Next Chapter</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reader;
