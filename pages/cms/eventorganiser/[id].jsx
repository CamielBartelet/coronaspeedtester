import Link from "next/link";
import dbConnect from "../../../util/mongodb";
import Event from "../../../models/Event";

const ScheduledEvents = ({ events }) => {
  return (
    <>
      {" "}
      <Link href="/cms/eventorganisers">
        <div className="backbutton">Back</div>
      </Link>
      <main className="container">
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
                  <Link href="/new" newId="new-event">
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

export default ScheduledEvents;
