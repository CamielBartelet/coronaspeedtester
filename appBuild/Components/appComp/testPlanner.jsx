import { useState, useEffect } from "react";
import AppCompstyle from "./appCompstyle";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../../../appBuild/Components/appComp/Map"), {
  loading: () => "Loading...",
  ssr: false,
});

const Terms = ({ events, account, appointments, locations }) => {
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
        // onClick={() => setReservation(true)}
        // style={selected == true ? { opacity: "0.7" } : { opacity: "1" }}
      >
        {/* <img src="/img/eindhovenmap.jpg" /> */}
        <Map locations={locations} appointments={appointments} />
      </div>
    </>
  );
};

export default Terms;
