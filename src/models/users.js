import mongoose, { Schema } from "mongoose";

const newUser = new Schema({
  userName: String,
  userAge: Number,
  date: {
    type: String,
    default: Date.now(),
  },
});

const Users = mongoose.model("User", newUser);

export default Users;
