import React from "react";
import dbConnect from "../../util/mongodb";
import Link from "next/link";
import Appointment from "../../models/Appointment";
import NewAppointment from "../../appBuild/Components/camielproto/new";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Close from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import { useState } from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Users = ({ testorganisations }) => {
  const [modalState, setModal] = useState(false);

  const toggleModalstate = () => {
    setModal(false);
  };
  return (
    <>
      <Link href="/apicms">
        <div className="backbutton">Back</div>
      </Link>
      <main className="container">
        <div className="userMng">
          <table>
            <thead className="table_head">
              <tr className="eventTable">
                <th>Id</th>
                <th>Locatie</th>
                <th>Start tijd</th>
                <th>Eind tijd</th>
                <th>Beschikbare afspraken</th>
                <th>
                  <div className="createNew" onClick={() => setModal(true)}>
                    <p>Nieuwe afspraak</p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {testorganisations.map((testloc) => (
                <tr key={testloc._id}>
                  <td>{testloc.name}</td>
                  <td>{testloc.region}</td>
                  <td>{testloc.email}</td>
                  <td>{testloc.capacity}</td>
                  <td>
                    <div className="editOpt">
                      <Link
                        href="/cms/testlocation/[id]/edit"
                        as={`/cms/testlocation/${testloc._id}/edit`}
                      >
                        <a>Edit</a>
                      </Link>
                      <Link
                        href="/cms/testlocation/[id]"
                        as={`/cms/testlocation/${testloc._id}`}
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
          <NewTestlocation
            newId="2"
            toggleModal={toggleModalstate}
          ></NewTestlocation>
        </Dialog>
      </main>
    </>
  );
};

export async function getServerSideProps() {
  await dbConnect();

  const testLocs = await Testlocation.find({});
  const testorganisations = testLocs.map((doc) => {
    const testloc = doc.toObject();
    testloc._id = testloc._id.toString();
    return testloc;
  });

  return { props: { testorganisations: testorganisations } };
}

export default Users;