const { users, posts } = require("../models");

class PostController {
  static async getAllPosts(req, res) {
    try {
      let result = await posts.findAll();
      console.log(result);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Error " + error);
    }
  }
  static async getPost(req, res) {
    try {
      let id = +req.params.id;

      const result = await posts.findByPk(id, { include: [users] });
      console.log(result);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Error " + error);
    }
  }
  static async createPost(req, res) {
    try {
      const { imgpost, caption, userId, status } = req.body;
      console.log([req.body]);
      let result = await posts.create({
        imgpost,
        caption,
        userId,
        status,
      });
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json("Error " + error);
    }
  }

  static async editPost(req, res) {
    try {
      const { imgpost, caption, userId, status } = req.body;
      let id = +req.params.id;
      let result = await posts.update(
        { imgpost, caption, userId, status },
        { where: { id: id } }
      );
      console.log([req.body]);
      result[0] === 1
        ? res.status(200).json({
            message: `Post id: ${id} has been updated.`,
          })
        : res.status(400).json({
            message: `Post id: ${id} has not been updated.`,
          });
    } catch (error) {
      res.status(500).json("Error " + error);
    }
  }

  static async delPost(req, res) {
    try {
      let id = +req.params.id;
      let result = await posts.destroy({ where: { id: id } });
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json("Error " + error);
    }
  }
}

module.exports = PostController;
