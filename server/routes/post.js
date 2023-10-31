const postRoutes = require("express").Router();
const postController = require("../controllers/PostController");
const { authentication } = require("../middleware/auth");

postRoutes.get("/", authentication, postController.getAllPosts);
postRoutes.get("/:id", postController.getPost);
postRoutes.post("/create", authentication, postController.createPost);
postRoutes.put("/update/:id", postController.editPost);
postRoutes.delete("/delete/:id", postController.delPost);

module.exports = postRoutes;
