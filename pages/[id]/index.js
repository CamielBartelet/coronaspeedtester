import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import dbConnect from "../../util/mongodb";
import Event from "../../models/Event";

const EventPage = ({ event }) => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const handleDelete = async () => {
    const eventID = router.query.id;

    try {
      await fetch(`/api/events/${eventID}`, {
        method: "Delete",
      });
      router.push("/");
    } catch (error) {
      setMessage("Failed to delete the event.");
    }
  };

  return (
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
            <button className="btn delete" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export async function getServerSideProps({ params }) {
  await dbConnect();

  const event = await Event.findById(params.id).lean();
  event._id = event._id.toString();

  return { props: { event } };
}

export default EventPage;
