const express = require("express");
const cors = require("cors");
const moviesRouter = require("./routes/movies");
const reviewsRouter = require("./routes/reviews");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
