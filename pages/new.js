import Events from "../appBuild/Components/camielproto/inputEvent";
import Link from "next/link";

const NewEvent = () => {
  const eventForm = {
    name: "",
    owner_name: "",
    location: "",
    email: "",
    date: "",
    phone: "",
    image: "",
    capacity: "",
  };

  return (
    <>
      <Link href="/cms">
        <div className="backbutton">Back</div>
      </Link>
      <div className="addNew">
        <Events formId="add-event-form" eventForm={eventForm} />
      </div>
    </>
  );
};

export default NewEvent;
