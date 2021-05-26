import { useRouter } from "next/router";
import { useState } from "react";
import AppCompstyle from "./appCompstyle";

const Terms = ({ events, account, appointments }) => {
  const router = useRouter();
  const [selected, setReservation] = useState("false");
  return (
    <>
      <style jsx>{AppCompstyle}</style>
      <div className="contTitle">
        <h2>Reserveer een testlocatie</h2>
      </div>
      <div className="contText">
        <p>Kies eerst een testlocatie die jou het beste uitkomt!</p>
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
          onClick={() => selected == true && router.push(`/${account._id}`)}
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
              onClick={() => setEvent(appointment.id)}
              ref={ref}
              style={
                selected == appointment.id
                  ? { background: "aliceblue" }
                  : { background: "" }
              }
            >
              <div className="appointment">
                <h3>{appointment.location}</h3>
                <h4>{appointment.starttime}</h4>
                <h5>{appointment.endtime}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="passTruBt
      n"
      >
        <div
          className="btnCont"
          style={
            selected != ""
              ? { background: "#86e4d9", cursor: "pointer" }
              : { background: "#E4E4E4", cursor: "not-allowed" }  
          }
          onClick={() =>
            selected != "" && router.push(`/${account._id}/${selected}`)
          }
        >
          {selected != ""
            ? "Bevestig je keuze"
            : "Selecteer een test tijd en locatie"}
        </div>
      </div>
      {/* end of just added */}
    </>
  );
};

export default Terms;
