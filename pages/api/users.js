// import dbConnect from "../../util/mongodb";

// export default async (req, res) => {
//   const { db } = await dbConnect();

//   const users = await db
//     .collection("users")
//     .find({})
//     .sort({ metacritic: -1 })
//     .limit(20)
//     .toArray();

//   res.json(users);
// };
