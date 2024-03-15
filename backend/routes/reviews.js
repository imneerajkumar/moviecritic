const express = require("express");
const router = express.Router();
const { Review } = require("../models");

router.post("/", async (req, res) => {
  try {
    const review = await Review.create(req.body);
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
