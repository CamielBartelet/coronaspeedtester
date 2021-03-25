import mongoose from "mongoose";

const TestLocationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide the name of the testing organization."],
    maxlength: [50, "Name cannot be more than 50 characters"],
  },
  city: {
    required: [true, "Please provide a city"],
    type: String,
  },
  streetname: {
    required: [true, "Please provide a streetname"],
    type: String,
  },
  housenumber: {
    required: [true, "Please provide an housenumber"],
    type: Number,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
});

export default mongoose.models.TestLocation ||
  mongoose.model("TestLocation", TestLocationSchema);
