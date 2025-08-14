import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import MovieCard from "@/components/MovieCard";
import MovieModal from "@/components/MovieModal";
import VideoPlayer from "@/components/VideoPlayer";
import { trendingMovies, popularMovies, netflixOriginals, actionMovies, Movie } from "@/data/mockData";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);

  // Combine all movies for search
  const allMovies = [...trendingMovies, ...popularMovies, ...netflixOriginals, ...actionMovies];
  
  // Filter movies based on search query
  const searchResults = query 
    ? allMovies.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.genre?.toLowerCase().includes(query.toLowerCase())
      )
    : [];

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
      
      <div className="pt-20 px-4 md:px-16 pb-8">
        <div className="mb-8">
          <h1 className="text-foreground text-2xl md:text-3xl font-semibold mb-4">
            {query ? `Search results for "${query}"` : "Search"}
          </h1>
          
          {query && (
            <p className="text-netflix-light-gray">
              {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} found
            </p>
          )}
        </div>

        {query ? (
          searchResults.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {searchResults.map((movie) => (
                <MovieCard 
                  key={movie.id}
                  movie={movie}
                  onPlayClick={() => handlePlayClick(movie)}
                  onDetailsClick={() => handleMovieClick(movie)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-foreground text-xl mb-4">No results found</h2>
              <p className="text-netflix-light-gray">
                Try different keywords or browse our categories
              </p>
            </div>
          )
        ) : (
          <div className="text-center py-16">
            <h2 className="text-foreground text-xl mb-4">What are you looking for?</h2>
            <p className="text-netflix-light-gray">
              Search for movies, TV shows, actors, directors and more
            </p>
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

export default Search;