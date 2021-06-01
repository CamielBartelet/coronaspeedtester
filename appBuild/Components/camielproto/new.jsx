import React from "react";
import Events from "./inputEvent";
import Organiser from "./newOrganiser";
import Testlocation from "./newTestlocation";
import Appointment from "./newAppointment";
import Link from "next/link";
import DialogContent from "@material-ui/core/DialogContent";
import { useState } from "react";

const NewEvent = ({ newId, toggleModal, org }) => {
  const saveModal = () => {
    toggleModal();
  };
  const [formDef, setForm] = useState(newId);

  const eventForm = {
    name: "",
    owner_name: org,
    location: "",
    email: "",
    date: "",
    phone: "",
    image: "",
    capacity: "",
  };

  const organiserForm = {
    name: "",
    region: "",
    email: "",
    phone: "",
    capacity: "",
  };

  const testlocationForm = {
    name: "",
    region: "",
    email: "",
    phone: "",
    capacity: "",
  };

  const appointmentForm = {
    id: "",
    location: "",
    startDate: "",
    endtime: "",
    availableappointments: "",
  };

  const forms = [
    {
      name: "new-event",
      formcont: (
        <Events
          formId="add-event-form"
          eventForm={eventForm}
          saveModal={saveModal}
        />
      ),
    },
    {
      name: "new-organisation",
      formcont: (
        <Organiser
          formId="add-organiser-form"
          eventForm={organiserForm}
          saveModal={saveModal}
        />
      ),
    },
    {
      name: "new-testlocation",
      formcont: (
        <Testlocation
          formId="add-testlocation-form"
          eventForm={testlocationForm}
          saveModal={saveModal}
        />
      ),
    },
    {
      name: "new-appointment",
      formcont: (
        <Appointment
          formId="add-appointment-form"
          appointmentForm={appointmentForm}
          saveModal={saveModal}
        />
      ),
    },
  ];

  console.log(newId);

  return (
    <>
      <DialogContent id="modal-slide-description">
        <div className="addNew">{forms[newId].formcont}</div>
      </DialogContent>
    </>
  );
};

export default NewEvent;
