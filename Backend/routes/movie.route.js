const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.model'); // ✅ Import the model

router.post("/movies", async (req, res) => {
  try {
    const { title, description, genre } = req.body;
    const newMovie = new Movie({ title, description, genre }); // genre is array
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Error adding movie" });
  }
});

// routes/movie.route.js
router.get("/movies", async (req, res) => {
    try {
      const movies = await Movie
        .find()
        .populate("genre", "name")
        res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ error: "Error fetching movies" });
    }
  });
  

module.exports = router;
