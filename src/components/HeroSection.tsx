import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  movie?: any;
  onPlay?: () => void;
}

const HeroSection = ({ movie, onPlay }: HeroSectionProps) => {
  const heroMovie = movie || {
    title: "Stranger Things",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    backdrop: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=1920&h=1080&fit=crop",
    year: "2024",
    rating: "TV-14",
    genre: "Sci-Fi"
  };

  return (
    <div className="relative h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src={heroMovie.backdrop}
          alt={heroMovie.title}
          className="w-full h-full object-cover animate-fade-in transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 animate-fade-in" style={{ background: 'var(--hero-gradient)' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-16 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 animate-fade-in">
          {heroMovie.title}
        </h1>
        
        <div className="flex items-center space-x-4 text-foreground mb-4 animate-fade-in">
          <span className="text-green-500 font-semibold">98% Match</span>
          <span>{heroMovie.year}</span>
          <span className="border border-netflix-light-gray px-2 py-1 text-xs">
            {heroMovie.rating}
          </span>
          <span>{heroMovie.genre}</span>
        </div>

        <p className="text-lg text-foreground mb-8 leading-relaxed animate-fade-in">
          {heroMovie.description}
        </p>

        <div className="flex items-center space-x-4 animate-fade-in">
          <Button 
            size="lg"
            className="flex items-center space-x-2 bg-foreground text-netflix-black hover:bg-foreground/90 px-8 py-3 text-lg font-semibold hover-scale transition-all duration-300"
            onClick={onPlay}
          >
            <Play size={24} fill="currentColor" />
            <span>Play</span>
          </Button>
          
          <Button 
            size="lg"
            variant="secondary"
            className="flex items-center space-x-2 bg-netflix-gray/70 text-foreground hover:bg-netflix-gray/50 px-8 py-3 text-lg font-semibold hover-scale transition-all duration-300"
          >
            <Info size={24} />
            <span>More Info</span>
          </Button>
        </div>
      </div>

      {/* Fade to black at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-netflix-black to-transparent"></div>
    </div>
  );
};

export default HeroSection;