import { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useRouter } from "next/router";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import AppCompstyle from "./appCompstyle";
import Cookie from "js-cookie";

export default function Map({ locations, appointments }) {
  const [selected, setReservation] = useState("false");
  const [selectLocation, setSelectedLocation] = useState({});
  const router = useRouter();
  const [apptselect, setAppointment] = useState("");
  const [modalState, setModal] = useState(false);

  const dummyData = [
    {
      testlocation: "Eindhoven",
      testID: apptselect,
      testDate: new Date("2021-05-31"),
      testTime: {
        startTime: new Date("2021-05-31 12:00"),
        endTime: new Date("2021-05-31 12:05"),
      },
    },
  ];

  useEffect(() => {
    Cookie.set("selectedTest", dummyData);
  }, [dummyData]);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleModalOpen = () => {
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "600px",
    // The latitude and longitude of the center of London
    latitude: 51.4358,
    longitude: 5.4791,
    zoom: 12,
  });

  return (
    <>
      <style jsx>{AppCompstyle}</style>
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/light-v10"
        mapboxApiAccessToken={process.env.MAPBOX_KEY}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        {locations.map((location) => (
          <div key={location.id}>
            <Marker
              latitude={location.center[1]}
              longitude={location.center[0]}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <a
                onClick={() => {
                  setSelectedLocation(location);
                }}
              >
                <span role="img" aria-label="push-pin">
                  📌
                </span>
              </a>
            </Marker>
            {selectLocation.id === location.id ? (
              <Popup
                onClose={() => setSelectedLocation({})}
                closeOnClick={false}
                latitude={location.center[1]}
                longitude={location.center[0]}
              >
                {location.place_name}
                <div className="passTruBtn">
                  <div
                    className="btnCont"
                    // style={
                    //   selected == true
                    //     ? { background: "#86e4d9", cursor: "pointer" }
                    //     : { background: "#E4E4E4", cursor: "not-allowed" }
                    // }
                    style={{ background: "#86e4d9", cursor: "pointer" }}
                    onClick={() => handleModalOpen()}
                  >
                    {/* {selected == true
                      ? "Reserveer deze testlocatie"
                      : "Reserveer eerst een testlocatie"} */}
                    Reserveer bij deze testlocatie
                  </div>
                </div>
              </Popup>
            ) : (
              false
            )}
          </div>
        ))}
      </ReactMapGL>
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
              <div className="eventWrapper">
                <h2>Bevestig afspraak</h2>
                <p>Kies een plaats en tijd voor een coronatest.</p>
                <div className="eventTable">
                  {appointments.map((appointment) => (
                    <div
                      key={appointment._id}
                      className="eventRow"
                      onClick={() => setAppointment(appointment._id)}
                      style={
                        apptselect == appointment._id
                          ? { background: "aliceblue" }
                          : { background: "" }
                      }
                    >
                      <div className="appointment">
                        <h3>{appointment.location}</h3>
                        <h4>
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
}
