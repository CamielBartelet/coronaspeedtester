import { useState } from "react";
import HomeButton from "../appBuild/Components/homecomp/Homebutton";
import { connectToDatabase } from "../util/mongodb";
// import "../lib/server";

export async function getStaticProps() {
  const { db } = await connectToDatabase();

  const users = await db
    .collection("users")
    .find({})
    .sort({ metacritic: -1 })
    .toArray();

  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    },
  };
}

export default function CamielProto({ users }) {
  const [toggled, setToggled] = useState(false);

  return (
    <>
      <HomeButton />
      <main className="container">
        <p>Hi there Camiel</p>
        <button
          style={{ width: "100px", height: "25px" }}
          onClick={
            toggled === false ? () => setToggled(true) : () => setToggled(false)
          }
        >
          Show data
        </button>
        <div className="toggleBox">
          {toggled === true ? `${JSON.stringify(users, null, 2)}` : ""}
        </div>
      </main>
    </>
  );
}
