import mongoose from "mongoose";

const OrganisationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for this event."],
    maxlength: [20, "Name cannot be more than 60 characters"],
  },
  region: {
    required: [true, "Please provide a location"],
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  capacity: {
    type: Number,
  },
});

export default mongoose.models.Organisation ||
  mongoose.model("Organisation", OrganisationSchema);
