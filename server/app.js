require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3200;

const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const cors = require("cors");
app.use(cors());

const routes = require("./routes");
app.use(routes);

app.use("/img/", express.static("./img"));

console.log("Testing server");

app.listen(port, () => {
  console.log("Server codegram listening on port", port);
});
