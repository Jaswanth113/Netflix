import { useState } from "react";
import Navbar from "@/components/Navbar";
import MovieRow from "@/components/MovieRow";
import MovieModal from "@/components/MovieModal";
import VideoPlayer from "@/components/VideoPlayer";
import { trendingMovies, popularMovies, netflixOriginals, Movie } from "@/data/mockData";

const TVShows = () => {
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

  // Filter for TV shows (those with "Seasons" in duration)
  const tvShows = [...trendingMovies, ...popularMovies, ...netflixOriginals].filter(
    movie => movie.duration?.includes('Season')
  );

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
          <h1 className="text-foreground text-3xl md:text-4xl font-bold mb-4">TV Shows</h1>
          <p className="text-netflix-light-gray text-lg">
            Binge-worthy series and documentaries. Start watching today.
          </p>
        </div>

        <div className="space-y-8">
          <MovieRow 
            title="Trending TV Shows"
            movies={tvShows}
            onMovieClick={handleMovieClick}
            onPlayClick={handlePlayClick}
          />
          
          <MovieRow 
            title="Netflix Original Series"
            movies={netflixOriginals.filter(m => m.duration?.includes('Season'))}
            onMovieClick={handleMovieClick}
            onPlayClick={handlePlayClick}
          />
          
          <MovieRow 
            title="Crime TV Shows"
            movies={popularMovies.filter(m => m.duration?.includes('Season'))}
            onMovieClick={handleMovieClick}
            onPlayClick={handlePlayClick}
          />
          
          <MovieRow 
            title="Drama Series"
            movies={trendingMovies.filter(m => m.duration?.includes('Season'))}
            onMovieClick={handleMovieClick}
            onPlayClick={handlePlayClick}
          />
          
          <MovieRow 
            title="Sci-Fi & Fantasy"
            movies={tvShows.slice(1, 4)}
            onMovieClick={handleMovieClick}
            onPlayClick={handlePlayClick}
          />
          
          <MovieRow 
            title="Comedy Series"
            movies={tvShows.slice().reverse()}
            onMovieClick={handleMovieClick}
            onPlayClick={handlePlayClick}
          />
          
          <MovieRow 
            title="Documentary Series"
            movies={tvShows.slice(2)}
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

export default TVShows;