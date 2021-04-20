import { useRouter } from "next/router";
import { useState } from "react";
import AppCompstyle from "./appCompstyle";

const Terms = ({ events, account }) => {
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
    </>
  );
};

export default Terms;
