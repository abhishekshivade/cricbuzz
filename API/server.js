const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const port = 8000;

let users = [];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/users", (req, res) => {
  const user = req.body;
  console.log(user);
  users.push({
    firstName: user.firstName,
    lastName: user.lastName,
    mobileNumber: user.mobileNumber,
    userName: user.userName,
    password: user.password,
  });

  res.send("User is added to the database" + users);
});

app.get("/users", (res) => res.json(users));

app.get("/users/:userName([a-z0-9]+@[a-z0-9-]+.[a-z])");

app.listen(port, (err) => {
  if (err) console.log("Error while starting server");
  else console.log("Server has been started at https://localhost:" + port);
});

app.get("/", (req, res) => res.send("Hello...!"));
