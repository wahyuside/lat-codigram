const route = require("express").Router();

route.get("/", (req, res) => {
  res.json({
    message: "Home Page",
  });
});

const userRoutes = require("./user");
const postRoutes = require("./post");

route.use("/users", userRoutes);
route.use("/posts", postRoutes);

module.exports = route;
