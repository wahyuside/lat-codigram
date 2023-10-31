const { tokenVerify } = require("../helpers/jsonwebtoken");

const authentication = (req, res, next) => {
  console.log("middleware udah jalan");
  const aksesToken = req.headers.token;

  if (aksesToken) {
    console.log("Token Ada");
    try {
      let verifyToken = tokenVerify(aksesToken);
      req.userData = verifyToken;
      next();
    } catch (error) {
      res.status(401).json({ message: "Token not authorized" });
    }
  } else {
    res.status(404).json({ message: "Access Token not found" });
  }
};

module.exports = {
  authentication,
};
