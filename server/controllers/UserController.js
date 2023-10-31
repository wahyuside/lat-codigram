const { users, posts } = require("../models");
const { encryptPwd, decryptPwd } = require("../helpers/bcrypt");
const { tokenGenerator, tokenVerify } = require("../helpers/jsonwebtoken");

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
      // const salt = bcrypt.genSaltSync(5);
      // const passhass = bcrypt.hashSync(password, salt);
      console.log(req.body);
      let result = await users.create({
        username,
        email,
        // password: passhass,
        // password,
        password: encryptPwd(password),
        // imgprf: req.file.path,
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
        { username, email, password: encryptPwd(password), imgprf, role },
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

  static async login(req, res) {
    try {
      let { username, password } = req.body;
      let emailFound = await users.findOne({
        where: { username },
      });
      if (emailFound) {
        if (decryptPwd(password, emailFound.password)) {
          let aksesToken = tokenGenerator(emailFound);
          console.log(aksesToken);
          res.status(201).json(aksesToken);
          let cekToken = tokenVerify(aksesToken);
          console.log(cekToken);
        } else {
          res.status(400).json({ message: "invalid password" });
        }
      } else {
        res.status(400).json({ message: "user not found" });
      }
    } catch (error) {
      res.status(500).json("error " + error);
    }
  }
}

module.exports = UserController;
