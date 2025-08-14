import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Search, Bell, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setShowSearch(false);
      setSearchQuery("");
    }
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 animate-fade-in ${
      isScrolled ? "bg-netflix-black" : "bg-gradient-to-b from-black/80 to-transparent"
    }`}>
      <div className="flex items-center justify-between px-4 md:px-16 py-4">
        {/* Left side */}
        <div className="flex items-center space-x-8">
          {/* Netflix logo */}
          <Link to="/" className="h-6 w-auto hover-scale transition-all duration-300">
            <svg viewBox="0 0 111 30" className="h-6 w-auto fill-netflix-red">
              <g>
                <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
              </g>
            </svg>
          </Link>

          {/* Navigation menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`transition-all duration-300 story-link hover-scale ${location.pathname === '/' ? 'text-foreground' : 'text-netflix-light-gray hover:text-foreground'}`}
            >
              Home
            </Link>
            <Link 
              to="/tv-shows" 
              className={`transition-all duration-300 story-link hover-scale ${location.pathname === '/tv-shows' ? 'text-foreground' : 'text-netflix-light-gray hover:text-foreground'}`}
            >
              TV Shows
            </Link>
            <Link 
              to="/movies" 
              className={`transition-all duration-300 story-link hover-scale ${location.pathname === '/movies' ? 'text-foreground' : 'text-netflix-light-gray hover:text-foreground'}`}
            >
              Movies
            </Link>
            <Link 
              to="/new-and-popular" 
              className={`transition-all duration-300 story-link hover-scale ${location.pathname === '/new-and-popular' ? 'text-foreground' : 'text-netflix-light-gray hover:text-foreground'}`}
            >
              New & Popular
            </Link>
            <Link 
              to="/my-list" 
              className={`transition-all duration-300 story-link hover-scale ${location.pathname === '/my-list' ? 'text-foreground' : 'text-netflix-light-gray hover:text-foreground'}`}
            >
              My List
            </Link>
            <a href="#" className="text-netflix-light-gray hover:text-foreground transition-all duration-300 story-link hover-scale">Browse by Languages</a>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            {showSearch ? (
              <form onSubmit={handleSearch} className="flex items-center animate-fade-in">
                <Search 
                  size={20} 
                  className="text-foreground cursor-pointer mr-2 hover-scale transition-all duration-300"
                  onClick={() => setShowSearch(false)}
                />
                <Input
                  placeholder="Titles, people, genres"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 h-8 bg-black/70 border-netflix-light-gray text-foreground placeholder:text-netflix-light-gray text-sm transition-all duration-300 focus:scale-105"
                  autoFocus
                />
              </form>
            ) : (
              <Search 
                size={20} 
                className="text-foreground cursor-pointer hover:text-netflix-light-gray transition-all duration-300 hover-scale"
                onClick={() => setShowSearch(true)}
              />
            )}
          </div>

          {/* Kids link */}
          <span className="text-foreground text-sm hidden md:block">Kids</span>

          {/* Notifications */}
          <Bell size={20} className="text-foreground cursor-pointer hover:text-netflix-light-gray transition-all duration-300 hover-scale" />

          {/* Profile dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-2 cursor-pointer focus:outline-none hover-scale transition-all duration-300">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <ChevronDown size={16} className="text-foreground" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-netflix-dark border-netflix-gray animate-scale-in" align="end">
              <DropdownMenuItem className="text-foreground hover:bg-netflix-gray focus:bg-netflix-gray cursor-pointer">
                Manage Profiles
              </DropdownMenuItem>
              <DropdownMenuItem className="text-foreground hover:bg-netflix-gray focus:bg-netflix-gray cursor-pointer">
                Transfer Profile
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="text-foreground hover:bg-netflix-gray focus:bg-netflix-gray cursor-pointer"
                onClick={() => navigate("/account")}
              >
                Account
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="text-foreground hover:bg-netflix-gray focus:bg-netflix-gray cursor-pointer"
                onClick={() => navigate("/help")}
              >
                Help Center
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-netflix-gray" />
              <DropdownMenuItem 
                className="text-foreground hover:bg-netflix-gray focus:bg-netflix-gray cursor-pointer"
                onClick={handleLogout}
              >
                Sign out of Netflix
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;