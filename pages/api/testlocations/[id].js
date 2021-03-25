import dbConnect from "../../../util/mongodb";
import TestLocation from "../../../models/TestLocation";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const testlocation = await TestLocation.findById(id);
        if (!testlocation) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: testlocation });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT" /* Edit a model by its ID */:
      try {
        const testlocation = await TestLocation.findByIdAndUpdate(
          id,
          req.body,
          {
            new: true,
            runValidators: true,
          }
        );
        if (!testlocation) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: testlocation });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const deletedTst = await TestLocation.deleteOne({ _id: id });
        if (!deletedTst) {
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
