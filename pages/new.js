import Events from "../appBuild/Components/camielproto/inputEvent";

const NewEvent = () => {
  const eventForm = {
    name: "",
    owner_name: "",
    email: "",
    date: "",
    image: "",
  };

  return <Events formId="add-event-form" eventForm={eventForm} />;
};

export default NewEvent;
