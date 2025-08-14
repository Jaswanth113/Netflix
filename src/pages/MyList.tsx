import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import MovieCard from "@/components/MovieCard";
import MovieModal from "@/components/MovieModal";
import VideoPlayer from "@/components/VideoPlayer";
import { Button } from "@/components/ui/button";
import { Movie } from "@/data/mockData";

const MyList = () => {
  const [myList, setMyList] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);

  useEffect(() => {
    // Load user's list from localStorage
    const savedList = localStorage.getItem("netflix-my-list");
    if (savedList) {
      setMyList(JSON.parse(savedList));
    }
  }, []);

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handlePlayClick = (movie: Movie) => {
    setCurrentMovie(movie);
    setIsPlaying(true);
  };

  const handleModalPlay = () => {
    if (selectedMovie) {
      setCurrentMovie(selectedMovie);
      setIsPlaying(true);
      setIsModalOpen(false);
    }
  };

  const handleBackToMain = () => {
    setIsPlaying(false);
    setCurrentMovie(null);
  };

  const removeFromList = (movieId: number) => {
    const updatedList = myList.filter(movie => movie.id !== movieId);
    setMyList(updatedList);
    localStorage.setItem("netflix-my-list", JSON.stringify(updatedList));
  };

  if (isPlaying && currentMovie) {
    return (
      <VideoPlayer 
        title={currentMovie.title}
        onBack={handleBackToMain}
      />
    );
  }

  return (
    <div className="min-h-screen bg-netflix-black">
      <Navbar />
      
      <div className="pt-20 px-4 md:px-16 pb-8">
        <div className="mb-8">
          <h1 className="text-foreground text-3xl md:text-4xl font-bold mb-4">My List</h1>
          <p className="text-netflix-light-gray text-lg">
            {myList.length === 0 
              ? "Your list is empty. Add movies and shows you want to watch later."
              : `${myList.length} ${myList.length === 1 ? 'title' : 'titles'} in your list`
            }
          </p>
        </div>

        {myList.length === 0 ? (
          <div className="text-center py-16">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-4 bg-netflix-gray rounded-full flex items-center justify-center">
                <span className="text-4xl">📺</span>
              </div>
              <h2 className="text-foreground text-xl mb-4">No titles in your list yet</h2>
              <p className="text-netflix-light-gray mb-6">
                Browse our catalog and add movies and shows to your list
              </p>
              <Button 
                onClick={() => window.location.href = "/"}
                className="bg-netflix-red hover:bg-netflix-red/90 text-foreground px-8 py-3"
              >
                Browse Netflix
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {myList.map((movie) => (
              <div key={movie.id} className="relative group">
                <MovieCard 
                  movie={movie}
                  onPlayClick={() => handlePlayClick(movie)}
                  onDetailsClick={() => handleMovieClick(movie)}
                />
                <Button
                  size="sm"
                  variant="destructive"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8 p-0 bg-netflix-red hover:bg-netflix-red/90"
                  onClick={() => removeFromList(movie.id)}
                >
                  ×
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>

      <MovieModal 
        movie={selectedMovie}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPlay={handleModalPlay}
      />
    </div>
  );
};

export default MyList;