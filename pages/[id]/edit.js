import { useRouter } from "next/router";
import useSWR from "swr";
import Form from "../../appBuild/Components/camielproto/inputEvent";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const EditEvent = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: event, error } = useSWR(
    id ? `/api/events/${id}` : null,
    fetcher
  );

  if (error) return <p>Failed to load</p>;
  if (!event) return <p>Loading...</p>;

  const eventForm = {
    name: event.name,
    owner_name: event.owner_name,
    date: event.date,
    email: event.email,
    image: event.image,
  };

  return (
    <Form formId="edit-event-form" eventForm={eventForm} forNewEvent={false} />
  );
};

export default EditEvent;
