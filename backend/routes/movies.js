const express = require("express");
const router = express.Router();
const { Movie } = require("../models");

router.post("/", async (req, res) => {
  try {
    const { name, releaseDate, averageRating } = req.body;
    const mId = name.replace(/\s+/g, "-");
    const movie = await Movie.create({
      name: name,
      mId: mId,
      releaseDate: releaseDate,
      averageRating: averageRating,
    });
    console.log("Movie created:", movie);
    res.status(201).json(movie);
  } catch (error) {
    console.error("Error creating movie:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    await movie.update(req.body);
    res.json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    await movie.destroy();
    res.json({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
