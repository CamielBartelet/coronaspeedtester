import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import dbConnect from "../../../../../util/mongodb";
import Event from "../../../../../models/Event";

const EventPage = ({ event }) => {
  const router = useRouter();
  const orgID = router.query.id;
  const eventID = router.query.idx;
  const [message, setMessage] = useState("");
  const handleDelete = async () => {
    try {
      await fetch(`/api/events/${eventID}`, {
        method: "Delete",
      });
      router.push(`/cms/eventorganisers/${orgID}`);
    } catch (error) {
      setMessage("Failed to delete the event.");
    }
  };

  return (
    <>
      <Link href={`/cms/eventorganiser/${router.query.id}`}>
        <div className="backbutton">
          {/* <div className="backbutton" onClick={() => router.back()}> */}
          Back
        </div>
      </Link>
      <div className="viewEvent">
        <div key={event._id}>
          <div className="eventCont">
            <img src={event.image} width="320px" />
            <h5>{event.name}</h5>
            <div>
              <p>{event.name}</p>
              <p>Owner: {event.owner_name}</p>
              <p>Capacity:{event.capacity}</p>
              <p>Date: {event.date}</p>
              <p>Email: {event.email}</p>
              <p>Phone: {event.phone}</p>

              <div>
                <Link
                  href="/cms/eventorganiser/[id]/[idx]/edit"
                  as={`/cms/eventorganiser/${orgID}/${event._id}/edit`}
                >
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
  const event = await Event.findById(params.idx).lean();
  event._id = event._id.toString();

  return { props: { event } };
}

export default EventPage;
