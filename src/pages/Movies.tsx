import { useState } from "react";
import Navbar from "@/components/Navbar";
import MovieRow from "@/components/MovieRow";
import MovieModal from "@/components/MovieModal";
import VideoPlayer from "@/components/VideoPlayer";
import { popularMovies, netflixOriginals, actionMovies, Movie } from "@/data/mockData";

const Movies = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);

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
      
      <div className="pt-20 pb-8">
        <div className="px-4 md:px-16 mb-8">
          <h1 className="text-foreground text-3xl md:text-4xl font-bold mb-4">Movies</h1>
          <p className="text-netflix-light-gray text-lg">
            Thousands of movies to discover. Explore now.
          </p>
        </div>

        <div className="space-y-8">
          <MovieRow 
            title="Action & Adventure"
            movies={actionMovies}
            onMovieClick={handleMovieClick}
            onPlayClick={handlePlayClick}
          />
          
          <MovieRow 
            title="Popular Movies"
            movies={popularMovies}
            onMovieClick={handleMovieClick}
            onPlayClick={handlePlayClick}
          />
          
          <MovieRow 
            title="Netflix Original Films"
            movies={netflixOriginals.filter(m => m.duration?.includes('h'))}
            onMovieClick={handleMovieClick}
            onPlayClick={handlePlayClick}
          />
          
          <MovieRow 
            title="Comedy Movies"
            movies={popularMovies.slice().reverse()}
            onMovieClick={handleMovieClick}
            onPlayClick={handlePlayClick}
          />
          
          <MovieRow 
            title="Thriller Movies"
            movies={actionMovies.slice(2)}
            onMovieClick={handleMovieClick}
            onPlayClick={handlePlayClick}
          />
          
          <MovieRow 
            title="Sci-Fi Movies"
            movies={netflixOriginals.slice(1, 4)}
            onMovieClick={handleMovieClick}
            onPlayClick={handlePlayClick}
          />
          
          <MovieRow 
            title="Drama Movies"
            movies={popularMovies.slice(1, 5)}
            onMovieClick={handleMovieClick}
            onPlayClick={handlePlayClick}
          />
        </div>
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

export default Movies;