const jwt = require("jsonwebtoken");
const secretCode = "qwerty";

const tokenGenerator = (data) => {
  const { id, username, email } = data;
  return jwt.sign({ id, username, email }, secretCode);
};

const tokenVerify = (data) => {
  return jwt.verify(data, secretCode);
};

module.exports = {
  tokenGenerator,
  tokenVerify,
};
