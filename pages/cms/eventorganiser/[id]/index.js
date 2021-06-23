import React from "react";
import Link from "next/link";
import dbConnect from "../../../../util/mongodb";
import Event from "../../../../models/Event";
import NewEvent from "../../../../appBuild/Components/manage/new";
import { useState } from "react";
import { useRouter } from "next/router";
import Organisation from "../../../../models/Organisation";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Close from "@material-ui/icons/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ScheduledEvents = ({ events, organisation }) => {
  const router = useRouter();
  const [message, setMessage] = useState(false);
  const [warning, setWarning] = useState(false);
  const [modalState, setModal] = useState(false);

  const orgID = router.query.id;

  const toggleModalstate = () => {
    setModal(false);
  };

  const handleDelete = async () => {
    try {
      await fetch(`/api/organisations/${orgID}`, {
        method: "Delete",
      });
      router.push("/cms/eventorganisers");
    } catch (error) {
      setMessage("Failed to delete the organiser.");
    }
  };

  const orgname = organisation.name;

  return (
    <>
      <Link href="/cms/eventorganisers">
        <div className="backbutton">Back</div>
      </Link>
      <main className="container">
        <div className="orgTitle">{organisation.name}</div>
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
                <th>Locatie</th>
                <th>Capaciteit</th>
                <th>
                  <div className="createNew" onClick={() => setModal(true)}>
                    <p>Creeëer nieuw evenement</p>
                  </div>
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
                      <Link
                        href="/cms/eventorganiser/[id]/[idx]/edit"
                        as={`/cms/eventorganiser/${orgID}/${event._id}/edit`}
                      >
                        <a>Edit</a>
                      </Link>
                      <Link
                        href="/cms/eventorganiser/[id]/[idx]"
                        as={`/cms/eventorganiser/${orgID}/${event._id}`}
                      >
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
          onClose={() => setModal(false)}
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
        <Dialog
          // classes={dialogClasses}
          open={modalState}
          transition={Transition}
          keepMounted
          onClose={() => setModal(false)}
          aria-labelledby="modal-slide-title"
          aria-describedby="modal-slide-description"
        >
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            // className={classes.modalHeader}
          ></DialogTitle>
          <Button
            // className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            onClick={() => setModal(false)}
          >
            <Close />
          </Button>
          <NewEvent
            newId="0"
            toggleModal={toggleModalstate}
            org={orgname}
          ></NewEvent>
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

  return { props: { events: events, organisation: organisation } };
}

export default ScheduledEvents;
