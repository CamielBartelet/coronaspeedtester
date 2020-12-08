import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for this event."],
    maxlength: [20, "Name cannot be more than 60 characters"],
  },
  owner_name: {
    type: String,
    required: [true, "Please provide the owner's name"],
    maxlength: [20, "Owner's Name cannot be more than 60 characters"],
  },
  date: {
    required: [true, "Please provide a date for this Event"],
    type: String,
  },
  email: {
    type: String,
  },
  image: {
    required: [true, "Please provide an image"],
    type: String,
  },
});

export default mongoose.models.Event || mongoose.model("Event", EventSchema);
