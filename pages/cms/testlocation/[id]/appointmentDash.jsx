import React from "react";
import dbConnect from "../../../../util/mongodb";
import Link from "next/link";
import Appointment from "../../../../models/Appointment";
import NewAppointment from "../../../../appBuild/Components/camielproto/new";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Close from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { useRouter } from "next/router";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Appointments = ({ appointments }) => {
  const [modalState, setModal] = useState(false);
  const router = useRouter();

  const toggleModalstate = () => {
    setModal(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
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
                <th>Datum</th>
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
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.id}</td>
                  <td>{appointment.location}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.starttime}</td>
                  <td>{appointment.endtime}</td>
                  <td>{appointment.availableappointments}</td>
                  <td>
                    <div className="editOpt">
                      <Link
                        href="/cms/testlocation/[id]/appointment/[id]/edit"
                        as={`/cms/testlocation/${router.query.id}/${appointment.id}/edit`}
                      >
                        <a>Edit</a>
                      </Link>
                      <Link
                        href="/cms/testlocation/[id]/appointment/[id]"
                        as={`/cms/testlocation/${router.query.id}/${appointment.id}`}
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
          <NewAppointment
            newId="3"
            toggleModal={toggleModalstate}
          ></NewAppointment>
        </Dialog>
      </main>
    </>
  );
};

export async function getServerSideProps() {
  await dbConnect();

  const appts = await Appointment.find({});
  const appointments = appts.map((doc) => {
    const appt = doc.toObject();
    appt._id = appt._id.toString();
    return appt;
  });

  return { props: { appointments: appointments } };
}

export default Appointments;
