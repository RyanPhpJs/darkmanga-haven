
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, BookOpen, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6',
        isScrolled ? 'bg-manga-DEFAULT/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 transform hover:scale-105 transition-transform"
        >
          <BookOpen className="h-6 w-6 text-manga-accent1" />
          <span className="text-xl font-semibold tracking-tight">DarkManga</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-manga-accent1",
              location.pathname === '/' ? "text-manga-accent1" : "text-manga-foreground/80"
            )}
          >
            Home
          </Link>
          <Link 
            to="/popular" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-manga-accent1",
              location.pathname === '/popular' ? "text-manga-accent1" : "text-manga-foreground/80"
            )}
          >
            Popular
          </Link>
          <Link 
            to="/latest" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-manga-accent1",
              location.pathname === '/latest' ? "text-manga-accent1" : "text-manga-foreground/80"
            )}
          >
            Latest
          </Link>
          <Link 
            to="/genres" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-manga-accent1",
              location.pathname === '/genres' ? "text-manga-accent1" : "text-manga-foreground/80"
            )}
          >
            Genres
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button 
            className="p-2 rounded-full hover:bg-manga-hover transition-colors"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="p-2 rounded-full hover:bg-manga-hover transition-colors md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-manga-card animate-fade-in">
          <nav className="flex flex-col py-4 px-6 space-y-4">
            <Link 
              to="/" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-manga-accent1 py-2",
                location.pathname === '/' ? "text-manga-accent1" : "text-manga-foreground/80"
              )}
            >
              Home
            </Link>
            <Link 
              to="/popular" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-manga-accent1 py-2",
                location.pathname === '/popular' ? "text-manga-accent1" : "text-manga-foreground/80"
              )}
            >
              Popular
            </Link>
            <Link 
              to="/latest" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-manga-accent1 py-2",
                location.pathname === '/latest' ? "text-manga-accent1" : "text-manga-foreground/80"
              )}
            >
              Latest
            </Link>
            <Link 
              to="/genres" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-manga-accent1 py-2",
                location.pathname === '/genres' ? "text-manga-accent1" : "text-manga-foreground/80"
              )}
            >
              Genres
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
