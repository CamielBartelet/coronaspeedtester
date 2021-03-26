import { useRouter } from "next/router";
import useSWR from "swr";
import Form from "../../../../../appBuild/Components/camielproto/inputEvent";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const EditEvent = () => {
  const router = useRouter();
  const { idx } = router.query;
  const { data: event, error } = useSWR(
    idx ? `/api/events/${idx}` : null,
    fetcher
  );

  if (error) return <p>Failed to load</p>;
  if (!event) return <p>Loading...</p>;

  const eventForm = {
    name: event.name,
    owner_name: event.owner_name,
    location: event.location,
    date: event.date,
    email: event.email,
    phone: event.phone,
    image: event.image,
    capacity: event.capacity,
  };

  return (
    <>
      <div className="backbutton" onClick={() => router.back()}>
        Back
      </div>
      <div className="editEvent">
        <Form
          formId="edit-event-form"
          eventForm={eventForm}
          forNewEvent={false}
        />
      </div>
    </>
  );
};

export default EditEvent;
