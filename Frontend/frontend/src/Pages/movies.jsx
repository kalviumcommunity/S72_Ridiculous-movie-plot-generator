// movies.jsx (your page)
import { useEffect, useState } from "react";
import MoviePlot from "../Components/movieplot";
import { Link } from "react-router-dom";

export default function MoviePlots() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/movies")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched movies:", data); // for debug
        setMovies(data);
      })
      .catch((err) => console.error("Error fetching movies", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">Ridiculous Movie Plots</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {movies.map((movie, index) => (
          <MoviePlot
            key={index}
            title={movie.title}
            description={movie.description}
            genre={
              Array.isArray(movie.genre)
                ? movie.genre.map((g) => g.name).join(", ")
                : "N/A"
            }
          />
        ))}

      </div>
      <Link
        to={'/add-movie'}>
<button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-lg shadow hover:shadow-lg transition duration-300 mt-10 mb-6">
   Add Movie
</button>



        </Link>
    </div>
  );
}
