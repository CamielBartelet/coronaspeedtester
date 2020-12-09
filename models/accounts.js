import mongoose from "mongoose";

const VisitorAccounts = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
    maxlength: [30, "Name cannot be more than 60 characters"],
  },
  lastname: {
    type: String,
    required: [true, "Please provide your last name"],
    maxlength: [30, "Owner's Name cannot be more than 60 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
  },
});

export default mongoose.models.VisitorAccounts ||
  mongoose.model("Visitor", VisitorAccounts);
