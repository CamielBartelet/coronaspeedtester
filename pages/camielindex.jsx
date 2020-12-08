import { useState } from "react";
import HomeButton from "../appBuild/Components/homecomp/Homebutton";
import { connectToDatabase } from "../util/mongodb";
import EventInput from "../appBuild/Components/camielproto/inputEvent";
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

  async function getData() {
    const apiTicket =
      "https://app.ticketmaster.com/discovery/v2/events?apikey=AmXd9d4drrAonmFs35egKbACrnBOWHEt&locale=*";
    const response = await fetch(apiTicket);
    const data = await response.json();
    // console.log(data);
  }

  getData();

  return (
    <>
      <HomeButton />
      <main className="container">
        <div className="welcomeMessage">
          <p>Hi there Camiel</p>
          {/* {data.map((stats) => (
          <p>{stats.name}</p>
        ))} */}

          <button
            style={{ width: "100px", height: "25px" }}
            onClick={
              toggled === false
                ? () => setToggled(true)
                : () => setToggled(false)
            }
          >
            Show data
          </button>
          <div className="toggleBox">
            {users.map((user) =>
              toggled === true ? <p>{user.userName}</p> : ""
            )}
          </div>
        </div>
        <EventInput />
      </main>
    </>
  );
}
