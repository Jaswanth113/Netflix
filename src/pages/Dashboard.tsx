import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MovieRow from "@/components/MovieRow";
import MovieModal from "@/components/MovieModal";
import VideoPlayer from "@/components/VideoPlayer";
import { trendingMovies, popularMovies, netflixOriginals, actionMovies, Movie } from "@/data/mockData";
import heroBg from "@/assets/hero-bg.jpg";

const Dashboard = () => {
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

  const heroMovie = {
    title: "Stranger Things",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    backdrop: heroBg,
    year: "2024",
    rating: "TV-14",
    genre: "Sci-Fi Drama"
  };

  // Minimal hero movie to satisfy Movie type for playback
  const heroMovieForPlay: Movie = {
    id: -1,
    title: heroMovie.title,
    image: heroMovie.backdrop,
    year: heroMovie.year,
    rating: heroMovie.rating,
    genre: heroMovie.genre,
    description: heroMovie.description,
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
      
      <HeroSection 
        movie={heroMovie} 
        onPlay={() => handlePlayClick(heroMovieForPlay)} 
      />
      
      <div className="relative z-10 -mt-32 space-y-8">
        <MovieRow 
          title="Trending Now"
          movies={trendingMovies}
          onMovieClick={handleMovieClick}
          onPlayClick={handlePlayClick}
        />
        
        <MovieRow 
          title="Popular on Netflix"
          movies={popularMovies}
          onMovieClick={handleMovieClick}
          onPlayClick={handlePlayClick}
        />
        
        <MovieRow 
          title="Netflix Originals"
          movies={netflixOriginals}
          onMovieClick={handleMovieClick}
          onPlayClick={handlePlayClick}
        />
        
        <MovieRow 
          title="Action & Adventure"
          movies={actionMovies}
          onMovieClick={handleMovieClick}
          onPlayClick={handlePlayClick}
        />
        
        <MovieRow 
          title="Because you watched Stranger Things"
          movies={trendingMovies.slice(2)}
          onMovieClick={handleMovieClick}
          onPlayClick={handlePlayClick}
        />
        
        <MovieRow 
          title="Continue Watching"
          movies={popularMovies.slice(1, 4)}
          onMovieClick={handleMovieClick}
          onPlayClick={handlePlayClick}
        />
      </div>

      <MovieModal 
        movie={selectedMovie}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPlay={handleModalPlay}
      />

      {/* Footer */}
      <footer className="mt-16 px-4 md:px-16 py-8 bg-netflix-black">
        <div className="text-netflix-light-gray text-sm space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <a href="#" className="hover:underline">Audio Description</a>
            </div>
            <div>
              <a href="#" className="hover:underline">Help Center</a>
            </div>
            <div>
              <a href="#" className="hover:underline">Gift Cards</a>
            </div>
            <div>
              <a href="#" className="hover:underline">Media Center</a>
            </div>
            <div>
              <a href="#" className="hover:underline">Investor Relations</a>
            </div>
            <div>
              <a href="#" className="hover:underline">Jobs</a>
            </div>
            <div>
              <a href="#" className="hover:underline">Terms of Use</a>
            </div>
            <div>
              <a href="#" className="hover:underline">Privacy</a>
            </div>
          </div>
          <div className="text-xs">
            © 2024 Netflix Clone. This is a demo application.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;