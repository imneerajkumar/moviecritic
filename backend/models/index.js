const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

const Movie = sequelize.define("Movie", {
  mId: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  releaseDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  averageRating: {
    type: DataTypes.FLOAT,
    defaultValue: null,
  },
});

const Review = sequelize.define("Review", {
  reviewerName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 10,
    },
  },
  comments: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    return sequelize.sync();
  })
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((error) => {
    console.error("Unable to connect/sync to the database:", error);
  });

Movie.hasMany(Review, { onDelete: "CASCADE" });
Review.belongsTo(Movie);

module.exports = { Movie, Review, sequelize };
