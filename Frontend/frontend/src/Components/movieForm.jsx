import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function MovieForm({ onMovieAdded }) {
    const navigate=useNavigate()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState([]); // Now an array to store multiple genres
  const [genres, setGenres] = useState([]);

  // Fetch genres when the component mounts
  useEffect(() => {
    fetch("http://localhost:3000/api/genres")
      .then((res) => res.json())
      .then((data) => setGenres(data))
      .catch((err) => console.error("Error fetching genres", err));
  }, []);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMovie = { title, description, genres: genre }; // Send genres as array

    try {
      const response = await fetch("http://localhost:3000/api/movies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMovie),
      });

      if (response.ok) {
        const movie = await response.json();
        onMovieAdded(movie);
        setTitle("");
        setDescription("");
        setGenre([]);
      }
      navigate('/movieplot')
    } catch (err) {
      console.error("Error adding movie", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white text-black p-6 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-bold mb-2">Add a New Movie</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Movie Title"
        required
        className="w-full p-2 border rounded"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Short Description"
        className="w-full p-2 border rounded"
      />
      <div className="space-y-2">
        <p className="font-semibold">Select Genres:</p>
        {genres.map((g) => (
          <label key={g._id} className="block">
            <input
              type="checkbox"
              value={g._id}
              checked={genre.includes(g._id)}
              onChange={(e) => {
                const value = e.target.value;
                setGenre((prev) =>
                  e.target.checked
                    ? [...prev, value]
                    : prev.filter((id) => id !== value)
                );
              }}
              className="mr-2"
            />
            {g.name}
          </label>
        ))}
      </div>
      <button
        type="submit"
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        Add Movie
      </button>
    </form>
  );
}

MovieForm.propTypes = {
  onMovieAdded: PropTypes.func.isRequired,
};

export default MovieForm;
