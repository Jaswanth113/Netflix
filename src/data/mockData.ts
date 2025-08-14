import movie1 from "@/assets/movie1.jpg";
import movie2 from "@/assets/movie2.jpg";
import movie3 from "@/assets/movie3.jpg";
import movie4 from "@/assets/movie4.jpg";

export interface Movie {
  id: number;
  title: string;
  image: string;
  year?: string;
  rating?: string;
  duration?: string;
  genre?: string;
  description?: string;
  cast?: string[];
  director?: string;
}

// Generate more movie data using the uploaded images and stock photos
export const trendingMovies: Movie[] = [
  {
    id: 1,
    title: "Cosmic Horizon",
    image: movie1,
    year: "2024",
    rating: "PG-13",
    duration: "2h 18m",
    genre: "Sci-Fi, Thriller",
    description: "A space exploration mission turns deadly when the crew discovers an ancient alien artifact that threatens humanity's existence.",
    cast: ["Chris Evans", "Zendaya", "Oscar Isaac"],
    director: "Denis Villeneuve"
  },
  {
    id: 2,
    title: "City Lights",
    image: movie2,
    year: "2024",
    rating: "TV-MA",
    duration: "3 Seasons",
    genre: "Drama, Crime",
    description: "A gritty urban drama following interconnected lives in a bustling metropolis as they navigate love, loss, and redemption.",
    cast: ["Michael B. Jordan", "Lupita Nyong'o", "Mahershala Ali"],
    director: "Ava DuVernay"
  },
  {
    id: 3,
    title: "Shadow Protocol",
    image: movie3,
    year: "2024",
    rating: "R",
    duration: "2h 5m",
    genre: "Action, Thriller",
    description: "An elite special forces team must infiltrate enemy territory to stop a global conspiracy before it's too late.",
    cast: ["Ryan Gosling", "Charlize Theron", "John Boyega"],
    director: "Christopher Nolan"
  },
  {
    id: 4,
    title: "Midnight Manor",
    image: movie4,
    year: "2024",
    rating: "TV-14",
    duration: "2 Seasons",
    genre: "Horror, Mystery",
    description: "A family inherits a Victorian mansion with a dark secret that threatens to consume everyone who enters.",
    cast: ["Anya Taylor-Joy", "Tilda Swinton", "Brian Cox"],
    director: "Guillermo del Toro"
  },
  {
    id: 5,
    title: "Ocean's Depth",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=600&fit=crop",
    year: "2024",
    rating: "PG",
    duration: "1h 45m",
    genre: "Adventure, Family"
  },
  {
    id: 6,
    title: "Digital Dreams",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
    year: "2024",
    rating: "TV-MA",
    duration: "1 Season",
    genre: "Sci-Fi, Drama"
  }
];

export const popularMovies: Movie[] = [
  {
    id: 7,
    title: "Mountain Peak",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
    year: "2023",
    rating: "PG-13",
    duration: "2h 12m",
    genre: "Adventure, Drama"
  },
  {
    id: 8,
    title: "Neon Nights",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=600&fit=crop",
    year: "2023",
    rating: "R",
    duration: "1h 58m",
    genre: "Action, Crime"
  },
  {
    id: 9,
    title: "Forest Whispers",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop",
    year: "2023",
    rating: "PG",
    duration: "1h 32m",
    genre: "Fantasy, Adventure"
  },
  {
    id: 10,
    title: "Steel City",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=600&fit=crop",
    year: "2023",
    rating: "TV-14",
    duration: "4 Seasons",
    genre: "Drama, Crime"
  },
  {
    id: 11,
    title: "Quantum Leap",
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=600&fit=crop",
    year: "2023",
    rating: "PG-13",
    duration: "2h 25m",
    genre: "Sci-Fi, Action"
  },
  {
    id: 12,
    title: "Desert Storm",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=600&fit=crop",
    year: "2023",
    rating: "R",
    duration: "2h 8m",
    genre: "War, Drama"
  }
];

export const netflixOriginals: Movie[] = [
  {
    id: 13,
    title: "Dark Waters",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=600&fit=crop",
    year: "2024",
    rating: "TV-MA",
    duration: "3 Seasons",
    genre: "Thriller, Mystery"
  },
  {
    id: 14,
    title: "Cosmic Journey",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop",
    year: "2024",
    rating: "PG",
    duration: "1h 52m",
    genre: "Sci-Fi, Family"
  },
  {
    id: 15,
    title: "Urban Legends",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=600&fit=crop",
    year: "2024",
    rating: "TV-14",
    duration: "2 Seasons",
    genre: "Horror, Supernatural"
  },
  {
    id: 16,
    title: "Golden Hour",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
    year: "2024",
    rating: "PG-13",
    duration: "1h 48m",
    genre: "Romance, Drama"
  },
  {
    id: 17,
    title: "Code Red",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
    year: "2024",
    rating: "R",
    duration: "2h 15m",
    genre: "Action, Thriller"
  },
  {
    id: 18,
    title: "Midnight Express",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=600&fit=crop",
    year: "2024",
    rating: "TV-MA",
    duration: "1 Season",
    genre: "Crime, Drama"
  }
];

export const actionMovies: Movie[] = [
  {
    id: 19,
    title: "Thunder Strike",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=600&fit=crop",
    year: "2023",
    rating: "R",
    duration: "2h 3m",
    genre: "Action, Adventure"
  },
  {
    id: 20,
    title: "Velocity",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop",
    year: "2023",
    rating: "PG-13",
    duration: "1h 55m",
    genre: "Action, Sci-Fi"
  },
  {
    id: 21,
    title: "Iron Will",
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=600&fit=crop",
    year: "2023",
    rating: "R",
    duration: "2h 18m",
    genre: "Action, War"
  },
  {
    id: 22,
    title: "Phoenix Rising",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=600&fit=crop",
    year: "2023",
    rating: "PG-13",
    duration: "2h 12m",
    genre: "Action, Fantasy"
  },
  {
    id: 23,
    title: "Night Hunter",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
    year: "2023",
    rating: "R",
    duration: "1h 48m",
    genre: "Action, Crime"
  },
  {
    id: 24,
    title: "Storm Chaser",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
    year: "2023",
    rating: "PG-13",
    duration: "2h 1m",
    genre: "Action, Adventure"
  }
];