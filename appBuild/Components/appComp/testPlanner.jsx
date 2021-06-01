import { useRouter } from "next/router";
import { useState } from "react";
import AppCompstyle from "./appCompstyle";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";



const Terms = ({ events, account, appointments, i, expanded, setExpanded, conText }) => {
  const router = useRouter();
  const [selected, setReservation] = useState("false");
  const [apptselect, setAppointment] = useState("");
  const isOpen = i === expanded;

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
          onClick={() => selected == true && router.push(`/${account._id}`)}
        >
          {selected == true
            ? "Reserveer deze testlocatie"
            : "Reserveer eerst een testlocatie"}
        </div>
      </div>

      {/* just added */}
      <h2>Bevestig afspraak</h2>
        <p>Kies een plaats en tijd voor een coronatest.</p>
      <motion.header
      className="faqheader"
        initial={false}
        animate={{ backgroundColor: isOpen ? "#d5e5f6" : "#ffffff" }}
        onClick={() => setExpanded(isOpen ? false : i)}
        style={{height: "50px"}}
      >{conText}</motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >


      <div className="eventWrapper">
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

      
      </motion.section>
        )}
      </AnimatePresence>

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
