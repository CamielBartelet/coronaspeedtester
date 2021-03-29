import React from "react";
import Link from "next/link";
import dbConnect from "../../../../util/mongodb";
import Event from "../../../../models/Event";
import NewTestLoc from "../../../../appBuild/Components/camielproto/new";
import { useState } from "react";
import { useRouter } from "next/router";
import Testlocation from "../../../../models/Testlocation";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Close from "@material-ui/icons/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ScheduledEvents = ({ events, testlocation }) => {
  const router = useRouter();
  const [message, setMessage] = useState(false);
  const [warning, setWarning] = useState(false);
  const [modalState, setModal] = useState(false);
  const [showCont, setCont] = useState("");

  const testlocID = router.query.id;

  const toggleModalstate = () => {
    setModal(false);
  };

  const handleDelete = async () => {
    try {
      await fetch(`/api/testlocations/${testlocID}`, {
        method: "Delete",
      });
      router.push("/cms/testservices");
    } catch (error) {
      setMessage("Failed to delete the testservice.");
    }
  };

  const contCheck = (cont) => {
    console.log(cont);
    setCont(cont);
  };

  return (
    <>
      <Link href="/cms/testservices">
        <div className="backbutton">Back</div>
      </Link>
      <main className="container">
        <div className="orgTitle">{testlocation.name}</div>
        <div className="menuBar">
          <button onClick={() => setWarning(true)}>Delete Testlocation</button>
        </div>
        <div className="testLocDashboard">
          <div>
            <a onClick={() => contCheck("event")}>
              Evenement en bezoekersgegevens
            </a>
          </div>
          <div>
            <a onClick={() => contCheck("planning")}>Planningstool</a>
          </div>
        </div>
        {showCont === "event" ? (
          <div className="eventMng">
            <h2>Evenementen:</h2>
            <table className="table">
              <thead className="table_head">
                <tr className="eventTable">
                  <th>Testlocatie naam</th>
                  <th>Regio</th>
                  <th>Organisator</th>
                  <th>Datum</th>
                  <th>Capaciteit</th>
                  <th>
                    <div className="createNew" onClick={() => setModal(true)}>
                      <p>Creeëer nieuwe testlocatie</p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {events.reverse().map((event) => (
                  <tr key={event._id}>
                    <td>{event.name}</td>
                    <td>{event.location}</td>
                    <td>{event.owner_name}</td>
                    <td>{event.date}</td>
                    <td>{event.capacity}</td>
                    <td>
                      <div className="editOpt">
                        <Link
                          href="/cms/testlocation/[id]/[idx]"
                          as={`/cms/testlocation/${testlocID}/${event._id}`}
                        >
                          <a>Bezoekerslijst</a>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>Planningstool</div>
        )}
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
          <NewTestLoc newId="0" toggleModal={toggleModalstate}></NewTestLoc>
        </Dialog>
      </main>
    </>
  );
};

export async function getServerSideProps({ params }) {
  await dbConnect();

  const testlocation = await Testlocation.findById(params.id).lean();
  testlocation._id = testlocation._id.toString();

  /* find all the data in our database */
  const result = await Event.find({
    location: testlocation.region,
  });
  const events = result.map((doc) => {
    const event = doc.toObject();
    event._id = event._id.toString();
    return event;
  });

  return { props: { events: events, testlocation: testlocation } };
}

export default ScheduledEvents;
