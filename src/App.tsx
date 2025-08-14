import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import NewAndPopular from "./pages/NewAndPopular";
import MyList from "./pages/MyList";
import Search from "./pages/Search";
import Account from "./pages/Account";
import HelpCenter from "./pages/HelpCenter";
import NotFound from "./pages/NotFound";
import { useAuth } from "./context/AuthContext";

const queryClient = new QueryClient();

const App = () => {
  const { isAuthenticated, loading } = useAuth();

  useEffect(() => {
    // side-effects on auth change could go here if needed
  }, [isAuthenticated]);

  if (loading) {
    return (
      <div className="min-h-screen bg-netflix-black flex items-center justify-center">
        <div className="text-netflix-red text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={isAuthenticated ? <Dashboard /> : <Login />} 
            />
            <Route path="/login" element={isAuthenticated ? <Dashboard /> : <Login />} />
            <Route path="/movies" element={isAuthenticated ? <Movies /> : <Login />} />
            <Route path="/tv-shows" element={isAuthenticated ? <TVShows /> : <Login />} />
            <Route path="/new-and-popular" element={isAuthenticated ? <NewAndPopular /> : <Login />} />
            <Route path="/my-list" element={isAuthenticated ? <MyList /> : <Login />} />
            <Route path="/search" element={isAuthenticated ? <Search /> : <Login />} />
            <Route path="/account" element={isAuthenticated ? <Account /> : <Login />} />
            <Route path="/help" element={isAuthenticated ? <HelpCenter /> : <Login />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
