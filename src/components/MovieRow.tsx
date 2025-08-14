import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";
import { Button } from "@/components/ui/button";

interface Movie {
  id: number;
  title: string;
  image: string;
  year?: string;
  rating?: string;
  duration?: string;
  genre?: string;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
  onMovieClick?: (movie: Movie) => void;
  onPlayClick?: (movie: Movie) => void;
}

const MovieRow = ({ title, movies, onMovieClick, onPlayClick }: MovieRowProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    
    const scrollAmount = containerRef.current.clientWidth * 0.8;
    const newPosition = direction === 'left' 
      ? Math.max(0, scrollPosition - scrollAmount)
      : scrollPosition + scrollAmount;
    
    containerRef.current.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });
    setScrollPosition(newPosition);
  };

  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = containerRef.current 
    ? scrollPosition < (containerRef.current.scrollWidth - containerRef.current.clientWidth)
    : false;

  return (
    <div className="px-4 md:px-16 mb-8 group animate-fade-in">
      <h2 className="text-foreground text-xl md:text-2xl font-semibold mb-4 hover-scale transition-all duration-300">
        {title}
      </h2>
      
      <div className="relative">
        {/* Left scroll button */}
        {canScrollLeft && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 h-full w-12 bg-black/50 hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 hover-scale"
            onClick={() => scroll('left')}
          >
            <ChevronLeft size={24} className="text-foreground" />
          </Button>
        )}

        {/* Movies container */}
        <div 
          ref={containerRef}
          className="flex space-x-2 overflow-x-hidden scrollbar-hide"
          onScroll={(e) => setScrollPosition(e.currentTarget.scrollLeft)}
        >
          {movies.map((movie, index) => (
            <div key={movie.id} className="flex-none w-48 md:w-64 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <MovieCard 
                movie={movie}
                onPlayClick={() => onPlayClick?.(movie)}
                onDetailsClick={() => onMovieClick?.(movie)}
              />
            </div>
          ))}
        </div>

        {/* Right scroll button */}
        {canScrollRight && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 h-full w-12 bg-black/50 hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 hover-scale"
            onClick={() => scroll('right')}
          >
            <ChevronRight size={24} className="text-foreground" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default MovieRow;