const express = require("express");
const auth = require("./middleware");
var jwt = require("jsonwebtoken");
app = express();
port = 8080;
app.get("/", (req, res) => {
  res.send("Hello fam ;-)");
});
app.get("/getToken", (req, res) => {
  var token = jwt.sign({ name: "akash" }, "thisisasecret");
  res.send({ token });
});

app.post("/protected", auth, (req, res) => {
  res.send(`The name is ${req.name}`);
});
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on ${port}`);
});
