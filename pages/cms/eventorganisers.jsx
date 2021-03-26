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
import { getSession } from "next-auth/client";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Eventorganisers = ({ organisers, user }) => {
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
              {organisers.reverse().map((org) => (
                <tr key={org._id}>
                  <td>{org.name}</td>
                  <td>{org.region}</td>
                  <td>{org.phone}</td>
                  <td>
                    <div className="editOpt">
                      <Link
                        href="/cms/eventorganiser/[id]/edit"
                        as={`/cms/eventorganiser/${org._id}/edit`}
                      >
                        <a>Edit</a>
                      </Link>
                      <Link
                        href="/cms/eventorganiser/[id]"
                        as={`/cms/eventorganiser/${org._id}`}
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
          <NewOrg newId="1" toggleModal={toggleModalstate}></NewOrg>
        </Dialog>
      </main>
    </>
  );
};

export async function getServerSideProps(ctx) {
  await dbConnect();

  /* find all the data in our database */
  const result = await Organiser.find({});
  const organisers = result.map((doc) => {
    const organiser = doc.toObject();
    organiser._id = organiser._id.toString();
    return organiser;
  });

  const session = await getSession(ctx);
  if (!session) {
    ctx.res.writeHead(302, { Location: "/profile" });
    ctx.res.end();
    return {};
  }

  return { props: { organisers: organisers, user: session.user } };
}

export default Eventorganisers;
