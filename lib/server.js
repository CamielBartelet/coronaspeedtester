/*const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const Schema = mongoose.Schema;

const app = express();
const PORT = process.env.PORT || 8080;

const MONGO_URL =
  "mongodb+srv://Camiel:Speedtest123@coronaspeedtester.nxy8x.mongodb.net/coronaspeedtestapi";

mongoose.connect(MONGO_URL || "mongodb://localhost:27017/coronaspeedtestapi", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

console.log("really?");

mongoose.connection
  .once("connected", function () {
    console.log("Connection succesful");
  })
  .on("error", function () {
    console.log("Connection error:", error);
  });

const UserData = new Schema({
  userName: String,
  userAge: Number,
  date: {
    type: String,
    default: Date.now(),
  },
});

const Users = mongoose.model("User", UserData);

const data = {
  userName: "Frans Anita",
  userAge: 17,
};

const newUser = new Users(data);

newUser.save((error) => {
  if (error) {
    console.log("Whoops, something is wrong");
  } else {
    console.log("Data saved!");
  }
});

//HTTP request logger
app.use(morgan("tiny"));

app.get("/api/users", (req, res) => {
  Users.find({})
    .then((data) => {
      console.log("Data", data);
      res.end(JSON.stringify(data, null, 2));
    })
    .catch((error) => {
      console.log("error");
    });
});

app.get("/api/name", (req, res) => {
  const data = {
    userName: "frans",
    userAge: 7,
  };
  res.json(data);
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));*/
