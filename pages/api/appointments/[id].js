import dbConnect from "../../../util/mongodb";
import Appointment from "../../../models/Appointment";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const appointment = await Appointment.findById(id);
        if (!appointment) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: appointment });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT" /* Edit a model by its ID */:
      try {
        const appointment = await Appointment.findByIdAndUpdate(
          id,
          req.body,
          {
            new: true,
            runValidators: true,
          }
        );
        if (!appointment) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: appointment });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const deletedApp = await Appointment.deleteOne({ _id: id });
        if (!deletedApp) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
