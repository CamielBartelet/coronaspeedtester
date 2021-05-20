import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: [true, "Please provide your name"],
    maxlength: [30, "Name cannot be more than 30 characters"],
  },
  lastname: {
    type: String,
    // required: [true, "Please provide your last name"],
    maxlength: [30, "Last name cannot be more than 30 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
  },
  // password: {
  //   type: String,
  //   required: [true, "Please provide a password"],
  //   minlength: [8, "Password must be above 8 characters"],
  // },
  postalCode: {
    type: String,
    // required: [true, "Please provide your postal code"],
  },
  postalNumber: {
    type: String,
    // required: [true, "Please provide your postal number"],
  },
  phone: {
    type: String,
    // required: [true, "Please provide your phone number"],
  },
  bsnnumber: {
    type: String,
    // required: [true, "Please provide your BSN-number"],
  },
});

export default mongoose.models.Account ||
  mongoose.model("Account", AccountSchema);
