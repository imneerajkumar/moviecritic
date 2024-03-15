const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
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
      min: 0,
      max: 10,
    },
  },
  comments: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Review;
