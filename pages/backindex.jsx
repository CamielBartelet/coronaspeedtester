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
        <div className="ogsMng">
          <h2>Organisatie</h2>
          <table>
            <thead className="table_head">
              <tr className="eventTable">
                <th>Organisatienaam</th>
                <th>Regio</th>
                <th>Contact</th>
                <th>
                  {" "}
                  <Link href="/new">
                    <div className="createNew">
                      <p>Nieuwe organisatie</p>
                    </div>
                  </Link>
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="eventMng">
          <h2>Evenementen:</h2>
          <table className="table">
            <thead className="table_head">
              <tr className="eventTable">
                <th>Evenement naam</th>
                <th>Organisatie</th>
                <th>Datum</th>
                <th>Regio</th>
                <th>Capaciteit</th>
                <th>
                  {" "}
                  <Link href="/new">
                    <div className="createNew">
                      <p>Creeëer nieuw evenement</p>
                    </div>
                  </Link>
                </th>
              </tr>
            </thead>
            <tbody>
              {events.reverse().map((event) => (
                <tr key={event._id}>
                  <td>{event.name}</td>
                  <td>{event.owner_name}</td>
                  <td>{event.date}</td>
                  <td>{event.location}</td>
                  <td>{event.capacity}</td>
                  <td>
                    <div className="editOpt">
                      <Link href="/[id]/edit" as={`/${event._id}/edit`}>
                        <a>Edit</a>
                      </Link>
                      <Link href="/[id]" as={`/${event._id}`}>
                        <a>View</a>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="userMng">
          <h2>Gebruikers:</h2>
          <table>
            <thead className="table_head">
              <tr className="eventTable">
                <th>Naam</th>
                <th>Email</th>
                <th>Telefoon</th>
                <th>Regio</th>
                <th>Testresultaat</th>
              </tr>
            </thead>
          </table>
        </div>
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
