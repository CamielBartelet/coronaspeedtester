import dbConnect from "../../../util/mongodb";
import Appointment from "../../../models/Appointment";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const appointment = await Appointment.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: appointment });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const appointment = await Appointment.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: appointment });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
