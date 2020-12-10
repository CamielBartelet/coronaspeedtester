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
      router.push("/APIindex");
    } catch (error) {
      setMessage("Failed to delete the event.");
    }
  };

  return (
    <>
      <Link href="/APIindex">
        <div className="backbutton">Back</div>
      </Link>
      <div className="viewEvent">
        <div key={event._id}>
          <div>
            <img src={event.image} />
            <h5>{event.name}</h5>
            <div>
              <p>{event.name}</p>
              <p>Owner: {event.owner_name}</p>
              <p>Capacity:{event.capacity}</p>
              <p>Date: {event.date}</p>
              <p>Email: {event.email}</p>
              <p>Phone: {event.phone}</p>

              <div>
                <Link href="/[id]/edit" as={`/${event._id}/edit`}>
                  <button>Edit</button>
                </Link>
                <button onClick={handleDelete}>Delete</button>
              </div>
            </div>
          </div>
          {message && <p>{message}</p>}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  await dbConnect();

  const event = await Event.findById(params.id).lean();
  event._id = event._id.toString();

  return { props: { event } };
}

export default EventPage;
