import React from "react";
import Events from "./inputEvent";
import TestLocation from "./newTestLocation";
import Link from "next/link";
import DialogContent from "@material-ui/core/DialogContent";
import { useState } from "react";

const NewEvent = ({ newId, toggleModal }) => {
  const saveModal = () => {
    toggleModal();
  };
  const [formDef, setForm] = useState(newId);

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
  
  const testlocationForm = {
    name: "",
    city: "",
    streetname: "",
    housenumber: "",
    email: "",
    phone: "",
  };

  return (
    <>
      <DialogContent id="modal-slide-description">
        {formDef == "new-event" ? (
          <>
            <div className="addNew">
              <Events formId="add-event-form" eventForm={eventForm} />
            </div>
          </>
        ) : (
          <>
            <div className="addNew">
              <Location
                formId="add-testlocation-form"
                eventForm={testlocationForm}
                saveModal={saveModal}
              />
            </div>
          </>
        )}
      </DialogContent>
    </>
  );
};

export default NewEvent;
