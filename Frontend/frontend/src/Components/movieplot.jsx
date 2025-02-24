import PropTypes from "prop-types";

export default function MoviePlot({ title, description, genre }) {
  return (
    <div className="bg-white text-black p-6 rounded-2xl shadow-lg max-w-md">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
      <span className="text-sm text-purple-600 font-semibold mt-2 block">
        Genre: {genre}
      </span>
    </div>
  );
}

// ✅ Props Validation
MoviePlot.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};
