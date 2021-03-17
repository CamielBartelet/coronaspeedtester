import Link from "next/link";
import React from "react";
import dbConnect from "../../util/mongodb";
import Organiser from "../../models/Organisation";
import NewOrg from "../../appBuild/Components/camielproto/new";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Close from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import { useState } from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Eventorganisers = ({ organisers }) => {
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
          <h2>Organisatie</h2>
          <table>
            <thead className="table_head">
              <tr className="eventTable">
                <th>Organisatienaam</th>
                <th>Regio</th>
                <th>Contact</th>
                <th>
                  <div className="createNew" onClick={() => setModal(true)}>
                    <p>Nieuwe organisatie</p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>DiscoOrg</td>
                <td>Eindhoven</td>
                <td>12344566</td>
                <td>
                  <div className="editOpt">
                    {/* <Link href="/cms/eventorganiser/[id]/edit" as={`/cms/eventorganiser/1234545/edit`}>
                      <a>Edit</a>
                    </Link> */}
                    <Link
                      href="/cms/eventorganiser/[id]"
                      as={`/cms/eventorganiser/1234545`}
                    >
                      <a>View</a>
                    </Link>
                  </div>
                </td>
              </tr>
              {organisers.reverse().map((org) => (
                <tr key={org._id}>
                  <td>{org.name}</td>
                  <td>{org.region}</td>
                  <td>{org.phone}</td>
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
            justIcon
            // className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            color="transparent"
            onClick={() => setModal(false)}
          >
            <Close />
          </Button>
          <NewOrg
            newId="new-organisation"
            toggleModal={toggleModalstate}
          ></NewOrg>
        </Dialog>
      </main>
    </>
  );
};

export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Organiser.find({});
  const organisers = result.map((doc) => {
    const organiser = doc.toObject();
    organiser._id = organiser._id.toString();
    return organiser;
  });

  return { props: { organisers: organisers } };
}

export default Eventorganisers;
