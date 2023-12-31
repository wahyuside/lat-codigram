"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.hasMany(models.posts);
    }
  }
  users.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      imgprf: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      // hooks: {
      //   beforeCreate: function (users, option) {
      //     users.imgprf = user.imgprf || "/img/profile/default.jpg";
      //   },
      // },
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
