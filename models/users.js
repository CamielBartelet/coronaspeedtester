import mongoose, { Schema } from "mongoose";

const UserData = new Schema({
  userName: String,
  userAge: Number,
  date: {
    type: String,
    default: Date.now(),
  },
});

const Users = mongoose.model("User", UserData);

module.exports = Users;
