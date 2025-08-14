import { useState, useEffect } from "react";
import { Play, Plus, ThumbsUp, ChevronDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Movie {
  id: number;
  title: string;
  image: string;
  year?: string;
  rating?: string;
  duration?: string;
  genre?: string;
  description?: string;
}

interface MovieCardProps {
  movie: Movie;
  onPlayClick?: () => void;
  onDetailsClick?: () => void;
}

const MovieCard = ({ movie, onPlayClick, onDetailsClick }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInMyList, setIsInMyList] = useState(false);

  useEffect(() => {
    // Check if movie is in user's list
    const savedList = localStorage.getItem("netflix-my-list");
    if (savedList) {
      const myList = JSON.parse(savedList);
      setIsInMyList(myList.some((m: Movie) => m.id === movie.id));
    }
  }, [movie.id]);

  const toggleMyList = (e: React.MouseEvent) => {
    e.stopPropagation();
    const savedList = localStorage.getItem("netflix-my-list");
    let myList = savedList ? JSON.parse(savedList) : [];
    
    if (isInMyList) {
      // Remove from list
      myList = myList.filter((m: Movie) => m.id !== movie.id);
    } else {
      // Add to list
      myList.push(movie);
    }
    
    localStorage.setItem("netflix-my-list", JSON.stringify(myList));
    setIsInMyList(!isInMyList);
  };

  return (
    <div 
      className="relative group cursor-pointer transition-all duration-300 ease-in-out hover-scale animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main card */}
      <div className={`
        relative rounded-md overflow-hidden bg-netflix-dark
        ${isHovered ? 'scale-110 z-20' : 'scale-100'}
        transition-transform duration-300 ease-in-out
      `}>
        <img 
          src={movie.image}
          alt={movie.title}
          className="w-full h-36 md:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay on hover */}
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent animate-fade-in">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-foreground font-semibold text-sm mb-2">
                {movie.title}
              </h3>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Button
                    size="sm"
                    className="w-8 h-8 rounded-full bg-foreground hover:bg-foreground/90 p-0 hover-scale transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      onPlayClick?.();
                    }}
                  >
                    <Play size={14} fill="currentColor" className="text-netflix-black ml-0.5" />
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-8 h-8 rounded-full border-netflix-light-gray bg-transparent hover:bg-netflix-gray p-0 hover-scale transition-all duration-300"
                    onClick={toggleMyList}
                  >
                    {isInMyList ? (
                      <Check size={14} className="text-foreground animate-scale-in" />
                    ) : (
                      <Plus size={14} className="text-foreground animate-scale-in" />
                    )}
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-8 h-8 rounded-full border-netflix-light-gray bg-transparent hover:bg-netflix-gray p-0 hover-scale transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ThumbsUp size={14} className="text-foreground" />
                  </Button>
                </div>
                
                <Button
                  size="sm"
                  variant="outline"
                  className="w-8 h-8 rounded-full border-netflix-light-gray bg-transparent hover:bg-netflix-gray p-0 hover-scale transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDetailsClick?.();
                  }}
                >
                  <ChevronDown size={14} className="text-foreground" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Extended info panel on hover */}
      {isHovered && (
        <div className="absolute top-full left-0 right-0 bg-netflix-dark p-4 rounded-b-md shadow-lg z-20 animate-scale-in">
          <div className="flex items-center space-x-2 text-xs text-foreground mb-2">
            <span className="text-green-500 font-semibold">96% Match</span>
            <span className="border border-netflix-light-gray px-1">
              {movie.rating || "TV-MA"}
            </span>
            <span>{movie.duration || "3 Seasons"}</span>
          </div>
          
          <div className="flex items-center space-x-1 text-xs text-netflix-light-gray">
            <span>{movie.genre || "Thriller"}</span>
            <span>•</span>
            <span>Suspenseful</span>
            <span>•</span>
            <span>Drama</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;