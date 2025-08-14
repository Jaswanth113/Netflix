import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoPlayerProps {
  title: string;
  onBack: () => void;
}

const VideoPlayer = ({ title, onBack }: VideoPlayerProps) => {
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();

  // YouTube video ID from the URL
  const youtubeVideoId = "xvFZjo5PgG0";

  useEffect(() => {
    const handleMouseMove = () => {
      setShowControls(true);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        if (controlsTimeoutRef.current) {
          clearTimeout(controlsTimeoutRef.current);
        }
      };
    }
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen bg-black overflow-hidden"
    >
      {/* YouTube Video Player */}
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&controls=1&rel=0&modestbranding=1&fs=1`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />

      {/* Controls overlay */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
        showControls ? 'opacity-100' : 'opacity-0'
      }`}>
        {/* Top controls */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-6 pointer-events-auto">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-foreground hover:text-netflix-light-gray p-2"
              onClick={onBack}
            >
              <ArrowLeft size={24} />
            </Button>
            <h1 className="text-foreground text-xl font-semibold">{title}</h1>
          </div>
        </div>

        {/* Fullscreen button */}
        <div className="absolute bottom-6 right-6 pointer-events-auto">
          <Button
            variant="ghost"
            size="sm"
            className="text-foreground hover:text-netflix-light-gray p-2 bg-black/50 hover:bg-black/70"
            onClick={toggleFullscreen}
          >
            <Maximize size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;