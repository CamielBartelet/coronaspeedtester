import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  location: {
    type: String,
  },
  date: {
    type: String,
  },
  starttime: {
    type: String,
  },
  endtime: {
    type: String,
  },
  availableappointments: {
    type: Number,
  },
});

export default mongoose.models.Appointment ||
  mongoose.model("Appointment", AppointmentSchema);