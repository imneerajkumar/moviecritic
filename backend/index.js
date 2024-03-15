const express = require("express");
const cors = require("cors");
const { Sequelize } = require("sequelize");
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

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

async function makeConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

const Movie = require("./models/movie")(sequelize, Sequelize);
const Review = require("./models/review")(sequelize, Sequelize);

Movie.hasMany(Review, { onDelete: "CASCADE" });
Review.belongsTo(Movie);

app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);

async function syncDatabase() {
  try {
    await sequelize.sync();
    console.log("Database synchronized");
  } catch (error) {
    console.error("Unable to sync database:", error);
  }
}

syncDatabase();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  makeConnection();
});
