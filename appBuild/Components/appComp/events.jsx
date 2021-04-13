import AppCompstyle from "./appCompstyle";

const EventSel = ({ events }) => {
  return (
    <>
      <style jsx>{AppCompstyle}</style>
      <div className="eventWrapper">
        <div>Kies je evenement</div>
        <div className="eventTable">
          {events.reverse().map((event) => (
            <div key={event._id} className="eventRow">
              <div className="eventImage">
                <img src={event.image}></img>
              </div>
              <div className="eventName">{event.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EventSel;
