import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import AppCompstyle from "./appCompstyle";

const EventSel = ({ events, account }) => {
  const [selected, setEvent] = useState("");
  const ref = useRef("zas");
  const router = useRouter();

  return (
    <>
      <style jsx>{AppCompstyle}</style>
      <div className="eventWrapper">
        <h2>Bevestig je evenement</h2>
        <p>Bevestig dat je naar dit evenement wilt gaan</p>
        <div className="eventTable">
          {events.map((event) => (
            <div
              key={event._id}
              className="eventRow"
              onClick={() => setEvent(event._id)}
              ref={ref}
              style={
                selected == event._id
                  ? { background: "aliceblue" }
                  : { background: "" }
              }
            >
              <div className="eventImage">
                <img src={event.image}></img>
              </div>
              <div className="eventName">
                <h3>{event.name}</h3>
                <h4>{event.date}</h4>
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
            selected != ""
              ? { background: "#86e4d9", cursor: "pointer" }
              : { background: "#E4E4E4", cursor: "not-allowed" }
          }
          onClick={() =>
            selected != "" && router.push(`/${account._id}/${selected}`)
          }
        >
          {selected != "" ? "Bevestig je keuze" : "Selecteer een evenement"}
        </div>
      </div>
    </>
  );
};

export default EventSel;
