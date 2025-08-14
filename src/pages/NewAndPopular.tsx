import { useState } from "react";
import Navbar from "@/components/Navbar";
import MovieRow from "@/components/MovieRow";
import MovieModal from "@/components/MovieModal";
import VideoPlayer from "@/components/VideoPlayer";
import { trendingMovies, popularMovies, netflixOriginals, actionMovies, Movie } from "@/data/mockData";

const NewAndPopular = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);
  const [activeTab, setActiveTab] = useState<"worth-the-wait" | "new-on-netflix" | "coming-this-week">("worth-the-wait");

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
          <h1 className="text-foreground text-3xl md:text-4xl font-bold mb-6">New & Popular</h1>
          
          {/* Tab navigation */}
          <div className="flex space-x-8 border-b border-netflix-gray">
            <button
              className={`pb-4 text-lg font-medium transition-colors ${
                activeTab === "worth-the-wait" 
                  ? "text-foreground border-b-2 border-netflix-red" 
                  : "text-netflix-light-gray hover:text-foreground"
              }`}
              onClick={() => setActiveTab("worth-the-wait")}
            >
              Worth the Wait
            </button>
            <button
              className={`pb-4 text-lg font-medium transition-colors ${
                activeTab === "new-on-netflix" 
                  ? "text-foreground border-b-2 border-netflix-red" 
                  : "text-netflix-light-gray hover:text-foreground"
              }`}
              onClick={() => setActiveTab("new-on-netflix")}
            >
              New on Netflix
            </button>
            <button
              className={`pb-4 text-lg font-medium transition-colors ${
                activeTab === "coming-this-week" 
                  ? "text-foreground border-b-2 border-netflix-red" 
                  : "text-netflix-light-gray hover:text-foreground"
              }`}
              onClick={() => setActiveTab("coming-this-week")}
            >
              Coming This Week
            </button>
          </div>
        </div>

        <div className="space-y-8">
          {activeTab === "worth-the-wait" && (
            <>
              <MovieRow 
                title="Most Anticipated"
                movies={trendingMovies}
                onMovieClick={handleMovieClick}
                onPlayClick={handlePlayClick}
              />
              <MovieRow 
                title="Critics Choice"
                movies={netflixOriginals}
                onMovieClick={handleMovieClick}
                onPlayClick={handlePlayClick}
              />
              <MovieRow 
                title="Award Winners"
                movies={popularMovies.slice(0, 4)}
                onMovieClick={handleMovieClick}
                onPlayClick={handlePlayClick}
              />
            </>
          )}

          {activeTab === "new-on-netflix" && (
            <>
              <MovieRow 
                title="Just Added"
                movies={actionMovies}
                onMovieClick={handleMovieClick}
                onPlayClick={handlePlayClick}
              />
              <MovieRow 
                title="This Month's Releases"
                movies={popularMovies}
                onMovieClick={handleMovieClick}
                onPlayClick={handlePlayClick}
              />
              <MovieRow 
                title="Recent Netflix Originals"
                movies={netflixOriginals.slice(1)}
                onMovieClick={handleMovieClick}
                onPlayClick={handlePlayClick}
              />
            </>
          )}

          {activeTab === "coming-this-week" && (
            <>
              <MovieRow 
                title="This Week's Releases"
                movies={trendingMovies.slice(1)}
                onMovieClick={handleMovieClick}
                onPlayClick={handlePlayClick}
              />
              <MovieRow 
                title="Coming Soon"
                movies={actionMovies.slice(2)}
                onMovieClick={handleMovieClick}
                onPlayClick={handlePlayClick}
              />
              <MovieRow 
                title="Premiering Friday"
                movies={netflixOriginals.slice(0, 3)}
                onMovieClick={handleMovieClick}
                onPlayClick={handlePlayClick}
              />
            </>
          )}
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

export default NewAndPopular;