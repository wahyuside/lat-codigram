const userRoutes = require("express").Router();
const userController = require("../controllers/UserController");

userRoutes.get("/list", userController.getAllUsers);
userRoutes.get("/:id", userController.getUser);
userRoutes.post("/register", userController.register);
userRoutes.put("/edit/:id", userController.editUser);
userRoutes.delete("/delete/:id", userController.delUser);

module.exports = userRoutes;
