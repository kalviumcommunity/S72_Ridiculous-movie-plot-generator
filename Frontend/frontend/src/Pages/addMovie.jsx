// src/Pages/addMovie.jsx
import { useState, useEffect } from "react";
import MovieForm from "../Components/movieForm";

export default function AddMovie() {
  const [movies, setMovies] = useState([]);

  // 1) Fetch existing movies once on mount:
  useEffect(() => {
    fetch("http://localhost:3000/api/movies")
      .then(res => {
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
        return res.json();
      })
      .then(data => {
        // only accept arrays:
        if (Array.isArray(data)) setMovies(data);
        else {
          console.error("Expected array, got:", data);
          setMovies([]);
        }
      })
      .catch(err => {
        console.error("Error fetching movies:", err);
        setMovies([]);
      });
  }, []);

  // 2) Add newly created movie to state—guard prev to always be array
  const handleMovieAdded = (newMovie) => {
    setMovies(prev => Array.isArray(prev) ? [...prev, newMovie] : [newMovie]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <MovieForm onMovieAdded={handleMovieAdded} />

      </div>
  );
}
