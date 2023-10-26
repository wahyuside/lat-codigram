const postRoutes = require("express").Router();
const postController = require("../controllers/PostController");

postRoutes.get("/", postController.getAllPosts);
postRoutes.get("/:id", postController.getPost);
postRoutes.post("/create", postController.createPost);
postRoutes.put("/update/:id", postController.editPost);
postRoutes.delete("/delete/:id", postController.delPost);

module.exports = postRoutes;
