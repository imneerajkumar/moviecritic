const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

const Movie = sequelize.define("Movie", {
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

module.exports = Movie;
