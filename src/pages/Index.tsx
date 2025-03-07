
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import FeaturedManga from '@/components/FeaturedManga';
import MangaCard from '@/components/MangaCard';
import { 
  getFeaturedManga, 
  getNewManga, 
  getPopularManga 
} from '@/data/manga';

const Index = () => {
  const featuredManga = getFeaturedManga();
  const newReleases = getNewManga();
  const popularManga = getPopularManga();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-manga-DEFAULT text-manga-foreground">
      <Navbar />
      
      <main className="pt-16 pb-20 px-4 max-w-7xl mx-auto">
        {/* Hero Section with Featured Manga */}
        <section className="mt-10 animate-fade-in">
          {featuredManga.length > 0 && <FeaturedManga manga={featuredManga[0]} />}
        </section>

        {/* New Releases Section */}
        <section className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">New Releases</h2>
            <a href="/latest" className="text-sm text-manga-accent1 hover:underline">
              View All
            </a>
          </div>
          <div className="manga-grid">
            {newReleases.map((manga, index) => (
              <MangaCard 
                key={manga.id} 
                manga={manga} 
                className={`animate-fade-up delay-[${100 * index}ms]`}
              />
            ))}
          </div>
        </section>

        {/* Popular Manga Section */}
        <section className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Popular Now</h2>
            <a href="/popular" className="text-sm text-manga-accent1 hover:underline">
              View All
            </a>
          </div>
          <div className="manga-grid">
            {popularManga.map((manga, index) => (
              <MangaCard 
                key={manga.id} 
                manga={manga}
                className={`animate-fade-up delay-[${100 * index}ms]`}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-manga-muted text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <p>© 2023 DarkManga. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
