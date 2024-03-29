import dbConnect from "../../../util/mongodb";
import Organisation from "../../../models/Organisation";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const organisation = await Organisation.findById(id);
        if (!organisation) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: organisation });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT" /* Edit a model by its ID */:
      try {
        const organisation = await Organisation.findByIdAndUpdate(
          id,
          req.body,
          {
            new: true,
            runValidators: true,
          }
        );
        if (!organisation) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: organisation });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const deletedOrg = await Organisation.deleteOne({ _id: id });
        if (!deletedOrg) {
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
