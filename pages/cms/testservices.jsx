import dbConnect from "../../util/mongodb";
import React from "react";
import Link from "next/link";
import TestLocation from "../../models/TestLocation";
import NewLoc from "../../appBuild/Components/camielproto/newTestLocation";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Close from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import { useState } from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const TestLocations = ({ testlocations }) => {
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
        <div className="ogsMng">
          <h2>Test Locatie</h2>
          <table>
            <thead className="table_head">
              <tr className="eventTable">
                <th>Organisatie testlocatie naam</th>
                <th>Stad</th>
                <th>Contact</th>
                <th>Straatnaam</th>
                <th>Huisnummer</th>
                <th>Email</th>
                <th>Telefoon</th>
                <th>
                  <div className="createNew" onClick={() => setModal(true)}>
                    <p>Nieuwe testlocatie</p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {testlocations.reverse().map((tst) => (
                <tr key={tst._id}>
                  <td>{tst.name}</td>
                  <td>{tst.city}</td>
                  <td>{tst.streetname}</td>
                  <td>{tst.housenumber}</td>
                  <td>{tst.email}</td>
                  <td>{tst.phone}</td>
                  <td>
                    <div className="editOpt">
                      <Link
                        href="/cms/testservices/[id]/edit"
                        as={`/cms/testservices/${org._id}/edit`}
                      >
                        <a>Edit</a>
                      </Link>
                      <Link
                        href="/cms/testservices/[id]"
                        as={`/cms/testservices/${org._id}`}
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
          <NewLoc
            newId="new-testlocation"
            toggleModal={toggleModalstate}
          ></NewLoc>
        </Dialog>
      </main>
    </>
  );
};

export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await TestLocation.find({});
  const testlocations = result.map((doc) => {
    const testlocation = doc.toObject();
    testlocation._id = testlocation._id.toString();
    return testlocation;
  });

  return { props: { testlocations: testlocations } };
}

export default TestLocations;
