const { users } = require("../models");

class UserController {
  static async getUsers(req, res) {
    try {
      let result = await users.findAll();
      console.log(result);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Error " + error);
    }
  }
  static async register(req, res) {
    try {
      const { username, email, password, imgprf } = req.body;
      let result = await users.create({
        username,
        email,
        password,
        img,
      });
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json("Error " + error);
    }
  }

  static async delUser(req, res) {
    try {
      let result = await users.destroy();
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json("Error " + error);
    }
  }
}

module.exports = UserController;
