const userRoutes = require("express").Router();
const userController = require("../controllers/UserController");
const multer = require("multer");

const disk = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../img/profile");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: disk });

userRoutes.get("/", userController.getAllUsers);
userRoutes.get("/:id", userController.getUser);
userRoutes.post("/register", userController.register);
userRoutes.put("/edit/:id", userController.editUser);
userRoutes.delete("/delete/:id", userController.delUser);
userRoutes.post("/login", userController.login);

module.exports = userRoutes;
