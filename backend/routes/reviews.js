const express = require("express");
const router = express.Router();
const { Movie, Review } = require("../models");

router.post("/", async (req, res) => {
  try {
    const review = await Review.create(req.body);
    const movieId = req.body.MovieMId;
    const reviewsForMovie = await Review.findAll({
      where: { MovieMId: movieId },
    });
    const totalRating = reviewsForMovie.reduce(
      (sum, review) => sum + review.rating,
      0
    );
    const averageRating = (totalRating / reviewsForMovie.length).toFixed(2);

    await Movie.update({ averageRating }, { where: { mId: movieId } });
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const reviews = await Review.findAll({
      where: { MovieMId: req.params.id },
    });
    if (!reviews) {
      return res.status(404).json({ error: "Review not found" });
    }
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
