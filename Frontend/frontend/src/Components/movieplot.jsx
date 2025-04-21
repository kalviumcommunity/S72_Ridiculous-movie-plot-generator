// movieplot.jsx
function MoviePlot({ title, description, genre }) {
  return (
    <div className="bg-gray-800 p-4 rounded mb-4 text-white">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mb-2">{description}</p>
      <p className="text-sm text-purple-300">Genres: {genre || "N/A"}</p>
    </div>
  );
}

export default MoviePlot;
