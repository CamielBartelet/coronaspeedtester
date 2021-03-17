import React from "react";
import Link from "next/link";
import dbConnect from "../../../../util/mongodb";
import Event from "../../../../models/Event";
import { useState } from "react";
import { useRouter } from "next/router";
import Organisation from "../../../../models/Organisation";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ScheduledEvents = ({ events }) => {
  const router = useRouter();
  const [message, setMessage] = useState(false);
  const [warning, setWarning] = useState(false);

  const handleDelete = async () => {
    const organiserID = router.query.id;
    try {
      await fetch(`/api/organisations/${organiserID}`, {
        method: "Delete",
      });
      router.push("/cms/eventorganisers");
    } catch (error) {
      setMessage("Failed to delete the event.");
    }
  };

  return (
    <>
      <Link href="/cms/eventorganisers">
        <div className="backbutton">Back</div>
      </Link>
      <main className="container">
        <div className="menuBar">
          <button onClick={() => setWarning(true)}>Delete Organisation</button>
        </div>
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
        <Dialog
          // classes={dialogClasses}
          open={warning}
          transition={Transition}
          keepMounted
          onClose={() => setwarning(false)}
          aria-labelledby="modal-slide-title"
          aria-describedby="modal-slide-description"
        >
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            // className={classes.modalHeader}
          >
            Are you sure?
          </DialogTitle>
          <Button onClick={handleDelete}>Yes</Button>
          <Button onClick={() => setWarning(false)}>Cancel</Button>
        </Dialog>
      </main>
    </>
  );
};

export async function getServerSideProps({ params }) {
  await dbConnect();

  /* find all the data in our database */
  const result = await Event.find({});
  const events = result.map((doc) => {
    const event = doc.toObject();
    event._id = event._id.toString();
    return event;
  });

  const organisation = await Organisation.findById(params.id).lean();
  organisation._id = organisation._id.toString();

  return { props: { events: events, organisation } };
}

export default ScheduledEvents;
