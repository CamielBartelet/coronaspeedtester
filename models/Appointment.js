import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  location: {
    type: String,
  },
  starttime: {
    type: String,
  },
  enddate: {
    type: String,
  },
  availableappointments: {
    type: Number,
  },
});

export default mongoose.models.Appointment ||
  mongoose.model("Appointment", AppointmentSchema);