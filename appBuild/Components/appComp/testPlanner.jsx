import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import AppCompstyle from "./appCompstyle";
import Cookie from "js-cookie";
import { motion } from "framer-motion";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "900px",
    "& .MuiPaper-root": {
      backgroundColor: "transparent",
    },
  },

  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const Terms = ({ events, account, appointments }) => {
  const classes = useStyles();
  const router = useRouter();
  const [selected, setReservation] = useState("false");
  const [apptselect, setAppointment] = useState("");
  const [modalState, setModal] = useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const dummyData = {
    testlocation: "Nuenen",
    testDate: new Date("2021-05-31"),
    testTime: {
      startTime: new Date("2021-05-31 12:00"),
      endTime: new Date("2021-05-31 12:05"),
    },
  };

  const handleModalOpen = () => {
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };

  useEffect(() => {
    Cookie.set("selectedTest", dummyData);
  }, [dummyData]);

  return (
    <>
      <style jsx>{AppCompstyle}</style>
      <div className="contTitle">
        <h2>Reserveer een testlocatie</h2>
      </div>
      <div className="contText">
        <p>
          Kies eerst een testlocatie die jou het beste uitkomt! (Klik op de
          kaart)
        </p>
      </div>
      <div
        className="regionMap"
        onClick={() => setReservation(true)}
        style={selected == true ? { opacity: "0.7" } : { opacity: "1" }}
      >
        <img src="/img/eindhovenmap.jpg" />
      </div>
      <div className="passTruBtn">
        <div
          className="btnCont"
          style={
            selected == true
              ? { background: "#86e4d9", cursor: "pointer" }
              : { background: "#E4E4E4", cursor: "not-allowed" }
          }
          onClick={() => selected == true && handleModalOpen()}
        >
          {selected == true
            ? "Reserveer deze testlocatie"
            : "Reserveer eerst een testlocatie"}
        </div>
      </div>

      {/* just added */}
      <Dialog
        fullScreen={fullScreen}
        open={modalState}
        onClose={handleModalClose}
        aria-labelledby="responsive-dialog-title"
      >
        {/* <DialogTitle id="responsive-dialog-title">
      
        </DialogTitle> */}
        <DialogContent style={{ overflow: "hidden", width: "100%" }}>
          <DialogContentText>
            <div className="example-container">
              {" "}
              <div className="eventWrapper">
                <h2>Bevestig afspraak</h2>
                <p>Kies een plaats en tijd voor een coronatest.</p>
                <div className="eventTable">
                  {appointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="eventRow"
                      onClick={() => setAppointment(appointment._id)}
                      style={
                        apptselect == appointment.id
                          ? { background: "aliceblue" }
                          : { background: "" }
                      }
                    >
                      <div className="appointment">
                        <h3>{appointment.location}</h3>
                        <h4>
                          {appointment.date}
                          {appointment.starttime}
                          {appointment.endtime}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div className="passTruBtn">
            <div
              className="btnCont"
              disabled={selected != "" ? true : false}
              style={
                apptselect != ""
                  ? { background: "#86e4d9", cursor: "pointer" }
                  : { background: "#E4E4E4", cursor: "not-allowed" }
              }
              onClick={() => {
                apptselect != "" &&
                  router.push(
                    `/${router.query.id}/${router.query.idx}/${apptselect}`
                  );
              }}
            >
              {apptselect != ""
                ? "Bevestig je keuze"
                : "Selecteer een test tijd en locatie"}
            </div>
          </div>
          <Button onClick={handleModalClose} color="primary">
            Terug
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Terms;
