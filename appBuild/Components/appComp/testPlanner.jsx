import { useRouter } from "next/router";
import { useState } from "react";
import AppCompstyle from "./appCompstyle";

const Terms = ({ events, account, appointments }) => {
  const router = useRouter();
  const [selected, setReservation] = useState("false");
  const [apptselect, setAppointment] = useState("");

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
          onClick={() => selected == true && router.push(`/checkout`)}
        >
          {selected == true
            ? "Reserveer deze testlocatie"
            : "Reserveer eerst een testlocatie"}
        </div>
      </div>

      {/* just added */}
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
                  {appointment.starttime}
                  {appointment.endtime}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
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
            console.log(apptselect);
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
      {/* end of just added */}
    </>
  );
};

export default Terms;
