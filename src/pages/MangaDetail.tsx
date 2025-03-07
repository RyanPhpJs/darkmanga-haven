
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, BookOpen, Calendar, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import { getMangaById } from '@/data/manga';
import { cn } from '@/lib/utils';

interface ChaptersByLanguage {
  [language: string]: {
    id: string;
    number: number;
    title: string;
    pages: string[];
    releaseDate: string;
    language?: string;
  }[];
}

const MangaDetail = () => {
  const { id } = useParams<{ id: string }>();
  const manga = getMangaById(id || '');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  if (!manga) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#121212] text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Manga Not Found</h1>
          <Link to="/" className="text-[#6366f1] hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  // Group chapters by language
  const chaptersByLanguage: ChaptersByLanguage = manga.chapters.reduce((acc, chapter) => {
    const language = chapter.language || 'Unknown';
    if (!acc[language]) {
      acc[language] = [];
    }
    acc[language].push(chapter);
    return acc;
  }, {} as ChaptersByLanguage);

  // Sort each language's chapters by number
  Object.keys(chaptersByLanguage).forEach(language => {
    chaptersByLanguage[language].sort((a, b) => a.number - b.number);
  });

  // Get available languages
  const availableLanguages = Object.keys(chaptersByLanguage).sort();
  
  // Set default selected language if not set yet
  useEffect(() => {
    if (availableLanguages.length > 0 && !selectedLanguage) {
      // Prefer English if available, otherwise use the first language
      const defaultLanguage = availableLanguages.includes('English') 
        ? 'English' 
        : availableLanguages[0];
      setSelectedLanguage(defaultLanguage);
    }
  }, [availableLanguages, selectedLanguage]);

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Navbar />
      
      <main className="pt-20 pb-16">
        {/* Cover Image with Gradient Overlay */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <div className={`transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <img
              src={manga.cover}
              alt={manga.title}
              className="h-full w-full object-cover"
              onLoad={() => setImageLoaded(true)}
            />
          </div>
          <div className={`absolute inset-0 bg-[#1a1a1a]/50 backdrop-blur-sm ${imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/95 to-transparent" />
          
          {/* Back Button */}
          <Link 
            to="/" 
            className="absolute top-8 left-6 z-10 p-2 rounded-full bg-[#1a1a1a]/30 backdrop-blur-sm hover:bg-[#1a1a1a] transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </div>

        <div className="max-w-5xl mx-auto px-4 -mt-56 relative z-10 animate-fade-up">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Cover Image (Card Style) */}
            <div className="w-full md:w-64 shrink-0">
              <div className="relative aspect-[2/3] overflow-hidden rounded-lg neo-glass">
                <img
                  src={manga.cover}
                  alt={manga.title}
                  className="h-full w-full object-cover"
                />
              </div>
              
              {/* Rating */}
              <div className="mt-4 p-4 rounded-lg neo-glass">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    <span className="font-medium">{manga.rating}</span>
                  </div>
                  <span className="text-sm text-[#666666]">Rating</span>
                </div>
                
                <div className="mt-3 pt-3 border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4 text-[#6366f1]" />
                      <span className="text-sm">{manga.chapters.length}</span>
                    </div>
                    <span className="text-sm text-[#666666]">Chapters</span>
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <span className={cn(
                      "text-sm px-2 py-0.5 rounded-full",
                      manga.status === 'Ongoing' ? "bg-green-500/10 text-green-500" :
                      manga.status === 'Completed' ? "bg-blue-500/10 text-blue-500" :
                      "bg-yellow-500/10 text-yellow-500"
                    )}>
                      {manga.status}
                    </span>
                    <span className="text-sm text-[#666666]">Status</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{manga.title}</h1>
              <p className="text-[#666666] mb-6">by {manga.author}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {manga.genres.map((genre) => (
                  <span 
                    key={genre} 
                    className="text-xs bg-[#1a1a1a] px-3 py-1 rounded-full text-white/70"
                  >
                    {genre}
                  </span>
                ))}
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Synopsis</h2>
                <p className="text-white/80 leading-relaxed">
                  {manga.description}
                </p>
              </div>
              
              {/* Chapters */}
              <div>
                <div className="flex flex-wrap items-center justify-between mb-3">
                  <h2 className="text-xl font-semibold">Chapters</h2>
                  
                  {/* Language selector */}
                  {availableLanguages.length > 1 && (
                    <div className="flex items-center gap-2 mb-3">
                      <Globe className="h-4 w-4 text-[#6366f1]" />
                      <div className="flex gap-1 flex-wrap">
                        {availableLanguages.map(language => (
                          <button
                            key={language}
                            onClick={() => setSelectedLanguage(language)}
                            className={`px-3 py-1 text-xs rounded-full transition-colors ${
                              selectedLanguage === language
                                ? 'bg-[#6366f1] text-white'
                                : 'bg-[#1a1a1a] text-white/70 hover:bg-[#252525]'
                            }`}
                          >
                            {language}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Display chapters for selected language */}
                {selectedLanguage && (
                  <div className="space-y-3">
                    {chaptersByLanguage[selectedLanguage]?.map((chapter) => (
                      <Link 
                        key={chapter.id} 
                        to={`/manga/${manga.id}/chapter/${chapter.id}`}
                        className="flex items-center justify-between p-4 rounded-lg neo-glass hover:border-[#6366f1]/30 transition-all"
                      >
                        <div>
                          <span className="font-medium">
                            Chapter {chapter.number}: {chapter.title}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-[#666666] gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{chapter.releaseDate}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MangaDetail;
