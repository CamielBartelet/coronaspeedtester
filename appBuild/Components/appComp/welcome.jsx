import AppCompstyle from "./appCompstyle";

const Welcome = ({ event }) => {
  return (
    <>
      <style jsx>{AppCompstyle}</style>
      <div className="welcomeTxt">
        <p>
          Wij zijn er om jou te helpen evenementen en sociale activiteiten weer
          mogelijk te maken.
        </p>
        <div className="upcomingEvent">
          <h2>Aankomend evenement</h2>

          <div className="eventHolder">
            <div className="eventImage">
              <img src={event[0].image}></img>
            </div>
            <div className="eventName">
              <h3>{event[0].name}</h3>
              <h4>{event[0].date}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
