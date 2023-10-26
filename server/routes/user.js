const userRoutes = require("express").Router();
const userController = require("../controllers/UserController");

userRoutes.get("/", userController.getUsers);
userRoutes.post("/register", userController.register);

module.exports = userRoutes;
