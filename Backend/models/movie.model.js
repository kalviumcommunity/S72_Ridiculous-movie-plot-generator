const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  genre: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
