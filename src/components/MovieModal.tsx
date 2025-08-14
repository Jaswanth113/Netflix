import { X, Play, Plus, ThumbsUp, ThumbsDown, Volume2, VolumeX, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Movie {
  id: number;
  title: string;
  image: string;
  year?: string;
  rating?: string;
  duration?: string;
  genre?: string;
  description?: string;
  cast?: string[];
  director?: string;
}

interface MovieModalProps {
  movie: Movie | null;
  isOpen: boolean;
  onClose: () => void;
  onPlay?: () => void;
}

const MovieModal = ({ movie, isOpen, onClose, onPlay }: MovieModalProps) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isInMyList, setIsInMyList] = useState(false);

  useEffect(() => {
    if (movie) {
      // Check if movie is in user's list
      const savedList = localStorage.getItem("netflix-my-list");
      if (savedList) {
        const myList = JSON.parse(savedList);
        setIsInMyList(myList.some((m: Movie) => m.id === movie.id));
      }
    }
  }, [movie]);

  const toggleMyList = () => {
    if (!movie) return;
    
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

  if (!movie) return null;

  const mockMovie = {
    ...movie,
    description: movie.description || "A thrilling adventure that will keep you on the edge of your seat. Follow our heroes as they navigate through challenges, face their fears, and discover what it truly means to be brave.",
    cast: movie.cast || ["Actor One", "Actor Two", "Actor Three"],
    director: movie.director || "Director Name",
    year: movie.year || "2024",
    rating: movie.rating || "TV-MA",
    duration: movie.duration || "2h 15m",
    genre: movie.genre || "Action, Drama"
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 bg-netflix-dark border-none overflow-hidden">
        <div className="relative">
          {/* Video/Image header */}
          <div className="relative h-96">
            <img 
              src={mockMovie.image}
              alt={mockMovie.title}
              className="w-full h-full object-cover"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-netflix-dark via-transparent to-transparent"></div>
            
            {/* Close button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-netflix-dark/80 hover:bg-netflix-dark p-0"
              onClick={onClose}
            >
              <X size={20} className="text-foreground" />
            </Button>

            {/* Mute button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-netflix-dark/80 hover:bg-netflix-dark p-0"
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? (
                <VolumeX size={20} className="text-foreground" />
              ) : (
                <Volume2 size={20} className="text-foreground" />
              )}
            </Button>

            {/* Content overlay */}
            <div className="absolute bottom-8 left-8 right-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {mockMovie.title}
              </h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <Button 
                  size="lg"
                  className="flex items-center space-x-2 bg-foreground text-netflix-black hover:bg-foreground/90 px-8"
                  onClick={onPlay}
                >
                  <Play size={20} fill="currentColor" />
                  <span>Play</span>
                </Button>
                
                <Button
                  size="sm"
                  variant="outline"
                  className="w-10 h-10 rounded-full border-netflix-light-gray bg-netflix-dark/80 hover:bg-netflix-gray p-0"
                  onClick={toggleMyList}
                >
                  {isInMyList ? (
                    <Check size={20} className="text-foreground" />
                  ) : (
                    <Plus size={20} className="text-foreground" />
                  )}
                </Button>
                
                <Button
                  size="sm"
                  variant="outline"
                  className="w-10 h-10 rounded-full border-netflix-light-gray bg-netflix-dark/80 hover:bg-netflix-gray p-0"
                >
                  <ThumbsUp size={20} className="text-foreground" />
                </Button>
                
                <Button
                  size="sm"
                  variant="outline"
                  className="w-10 h-10 rounded-full border-netflix-light-gray bg-netflix-dark/80 hover:bg-netflix-gray p-0"
                >
                  <ThumbsDown size={20} className="text-foreground" />
                </Button>
              </div>
            </div>
          </div>

          {/* Details section */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Main content */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-4 text-foreground mb-4">
                  <span className="text-green-500 font-semibold">98% Match</span>
                  <span>{mockMovie.year}</span>
                  <span className="border border-netflix-light-gray px-2 py-1 text-xs">
                    {mockMovie.rating}
                  </span>
                  <span>{mockMovie.duration}</span>
                </div>

                <p className="text-foreground text-lg leading-relaxed mb-6">
                  {mockMovie.description}
                </p>
              </div>

              {/* Sidebar */}
              <div className="text-sm text-netflix-light-gray space-y-4">
                <div>
                  <span className="text-foreground">Cast: </span>
                  {mockMovie.cast.join(", ")}
                </div>
                
                <div>
                  <span className="text-foreground">Director: </span>
                  {mockMovie.director}
                </div>
                
                <div>
                  <span className="text-foreground">Genres: </span>
                  {mockMovie.genre}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MovieModal;