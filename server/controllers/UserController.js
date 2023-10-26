const { users, posts } = require("../models");

class UserController {
  static async getAllUsers(req, res) {
    try {
      let result = await users.findAll();
      console.log(result);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Error " + error);
    }
  }
  static async getUser(req, res) {
    try {
      let id = +req.params.id;

      const result = await users.findByPk(id);
      console.log(result);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Error " + error);
    }
  }
  static async register(req, res) {
    try {
      const { username, email, password, imgprf, role } = req.body;
      console.log([req.body]);
      let result = await users.create({
        username,
        email,
        password,
        imgprf,
        role,
      });
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json("Error " + error);
    }
  }

  static async editUser(req, res) {
    try {
      const { username, email, password, imgprf, role } = req.body;
      let id = +req.params.id;
      let result = await users.update(
        { username, email, password, imgprf, role },
        { where: { id: id } },
        { returning: true }
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

  static async delUser(req, res) {
    try {
      let id = +req.params.id;
      let result = await users.destroy({ where: { id: id } });
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json("Error " + error);
    }
  }
}

module.exports = UserController;
