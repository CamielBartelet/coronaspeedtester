import { useState } from "react";
import HomeButton from "../appBuild/Components/homecomp/Homebutton";
import EventInput from "../appBuild/Components/camielproto/inputEvent";
import Link from "next/link";
import dbConnect from "../util/mongodb";
import Event from "../models/Event";
// import "../lib/server";

// export async function getStaticProps() {
// const { db } = await dbConnect();
// const users = await db
//   .collection("users")
//   .find({})
//   .sort({ metacritic: -1 })
//   .toArray();
// return {
//   props: {
//     users: JSON.parse(JSON.stringify(users)),
//   },
// };
// }

const Index = ({ events }) => {
  return (
    <>
      <HomeButton />
      <main className="container">
        <Link href="/new">
          <div className="createNew">Create new event</div>
        </Link>
        {events.reverse().map((event) => (
          <div key={event._id}>
            <div className="card">
              <img src={event.image} />
              <h5 className="event-name">{event.name}</h5>
              <div className="main-content">
                <p className="event-name">{event.name}</p>
                <p className="owner">Owner: {event.owner_name}</p>

                <div className="btn-container">
                  <Link href="/[id]/edit" as={`/${event._id}/edit`}>
                    <button className="btn edit">Edit</button>
                  </Link>
                  <Link href="/[id]" as={`/${event._id}`}>
                    <button className="btn view">View</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Event.find({});
  const events = result.map((doc) => {
    const event = doc.toObject();
    event._id = event._id.toString();
    return event;
  });

  return { props: { events: events } };
}

export default Index;

// export default function CamielProto({ users }) {
//   const [toggled, setToggled] = useState(false);

//   async function getData() {
//     const apiTicket =
//       "https://app.ticketmaster.com/discovery/v2/events?apikey=AmXd9d4drrAonmFs35egKbACrnBOWHEt&locale=*";
//     const response = await fetch(apiTicket);
//     const data = await response.json();
//     // console.log(data);
//   }

//   getData();

//   return (
//     <>
//       <HomeButton />
//       <main className="container">
//         <div className="welcomeMessage">
//           <p>Hi there Camiel</p>
//           {/* {data.map((stats) => (
//           <p>{stats.name}</p>
//         ))} */}

//           {/* <button
//             style={{ width: "100px", height: "25px" }}
//             onClick={
//               toggled === false
//                 ? () => setToggled(true)
//                 : () => setToggled(false)
//             }
//           >
//             Show data
//           </button>
//           <div className="toggleBox">
//             {users.map((user) =>
//               toggled === true ? <p>{user.userName}</p> : ""
//             )}
//           </div> */}
//         </div>
//         <EventInput />
//       </main>
//     </>
//   );
// }
